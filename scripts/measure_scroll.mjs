import { chromium } from 'playwright';

async function testScrollPerf(url, routeName) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-gpu-rasterization', '--enable-zero-copy']
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  await context.addInitScript(() => {
    window.sessionStorage.setItem('arttu_boot_shown', 'true');
  });

  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(1000);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  // Set up in-page RAF frame time monitor
  const perfData = await page.evaluate(async () => {
    const frameTimes = [];
    let lastTime = performance.now();
    let isMonitoring = true;

    function recordFrame(now) {
      const delta = now - lastTime;
      lastTime = now;
      frameTimes.push(delta);
      if (isMonitoring) {
        requestAnimationFrame(recordFrame);
      }
    }
    requestAnimationFrame(recordFrame);

    // Track long tasks
    const longTasks = [];
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          longTasks.push({ duration: entry.duration, startTime: entry.startTime });
        }
      });
      observer.observe({ type: 'longtask', buffered: true });
    } catch (e) {}

    // Track layout shifts
    const layoutShifts = [];
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            layoutShifts.push(entry.value);
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {}

    // Scroll down gradually
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const totalDistance = scrollHeight - viewportHeight;
    const steps = 60;
    const stepDistance = totalDistance / steps;

    // Scroll down
    for (let i = 0; i < steps; i++) {
      window.scrollBy(0, stepDistance);
      await new Promise(r => setTimeout(r, 25)); // simulate ~40 scrolls/sec
    }
    await new Promise(r => setTimeout(r, 300));

    // Scroll back up
    for (let i = 0; i < steps; i++) {
      window.scrollBy(0, -stepDistance);
      await new Promise(r => setTimeout(r, 25));
    }
    await new Promise(r => setTimeout(r, 300));

    isMonitoring = false;

    // Analyze frames
    // Filter initial warmup (first 5 frames)
    const activeFrames = frameTimes.slice(5);
    const totalFrames = activeFrames.length;
    const slowFrames = activeFrames.filter(t => t > 20).length; // Dropped 60fps frame (> 20ms)
    const severeJankFrames = activeFrames.filter(t => t > 40).length; // Dropped below 25fps (> 40ms)
    const maxFrameTime = Math.max(...activeFrames, 0);
    const avgFrameTime = activeFrames.reduce((a, b) => a + b, 0) / (totalFrames || 1);
    const estimatedFps = 1000 / avgFrameTime;

    // Count blur and backdrop-filter elements
    const allElements = Array.from(document.querySelectorAll('*'));
    let blurElementsCount = 0;
    let backdropBlurCount = 0;
    let willChangeCount = 0;
    let animatingElementsCount = 0;

    for (const el of allElements) {
      const style = window.getComputedStyle(el);
      if (style.filter && style.filter.includes('blur')) blurElementsCount++;
      if (style.backdropFilter && style.backdropFilter.includes('blur')) backdropBlurCount++;
      if (style.willChange && style.willChange !== 'auto') willChangeCount++;
      if (style.animationName && style.animationName !== 'none') animatingElementsCount++;
    }

    return {
      totalFrames,
      slowFrames,
      severeJankFrames,
      maxFrameTime: Math.round(maxFrameTime),
      avgFrameTime: Math.round(avgFrameTime * 10) / 10,
      estimatedFps: Math.round(estimatedFps),
      longTaskCount: longTasks.length,
      maxLongTaskMs: longTasks.length ? Math.round(Math.max(...longTasks.map(t => t.duration))) : 0,
      totalLayoutShift: layoutShifts.reduce((a, b) => a + b, 0),
      stats: {
        blurElementsCount,
        backdropBlurCount,
        willChangeCount,
        animatingElementsCount,
        domNodeCount: allElements.length
      }
    };
  });

  await browser.close();
  return { route: routeName, ...perfData };
}

async function main() {
  const routes = ['/', '/car', '/competitions', '/departments', '/events'];
  for (const r of routes) {
    const res = await testScrollPerf(`http://localhost:4173${r}`, r);
    console.log(JSON.stringify(res, null, 2));
  }
}

main().catch(console.error);
