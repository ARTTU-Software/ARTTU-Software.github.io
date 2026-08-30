#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';

// Parse CLI flags
const args = process.argv.slice(2);
const getArg = (name) => {
  const match = args.find((a) => a.startsWith(`--${name}=`));
  if (match) return match.slice(match.indexOf('=') + 1);
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && args[idx + 1] && !args[idx + 1].startsWith('--')) return args[idx + 1];
  return null;
};
const hasFlag = (name) => args.includes(`--${name}`);

const targetRoute = getArg('route') || '/';
const targetSelector = getArg('selector');
const clickSelector = getArg('click');
const shouldScreenshot = hasFlag('screenshot');
const isFullPage = hasFlag('full-page');
const shouldShowAria = hasFlag('aria');
const shouldCheckAll = hasFlag('check-all');
const isMobile = hasFlag('mobile');
const viewportWidth = parseInt(getArg('width') || (isMobile ? '390' : '1280'), 10);
const viewportHeight = parseInt(getArg('height') || (isMobile ? '844' : '800'), 10);

const ALL_ROUTES = [
  '/',
  '/car',
  '/events',
  '/history',
  '/departments',
  '/recruitment',
  '/partners',
  '/support',
  '/contact',
  '/history/team',
];

// Helper to check if a port is responding
async function findActiveBaseUrl() {
  const candidatePorts = [5173, 5174, 5175, 3000, 8080];
  for (const port of candidatePorts) {
    const isLive = await new Promise((resolve) => {
      const req = http.get(`http://localhost:${port}/`, { timeout: 1000 }, (res) => {
        resolve(res.statusCode < 500);
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
    });
    if (isLive) return `http://localhost:${port}`;
  }
  return 'http://localhost:5173'; // fallback
}

async function inspectRoute(page, baseUrl, route) {
  const url = `${baseUrl}${route}`;
  const consoleErrors = [];
  const networkErrors = [];

  const consoleListener = (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  };
  const requestFailedListener = (req) => {
    const errText = req.failure()?.errorText || 'Failed';
    const reqUrl = req.url();
    // Ignore normal media prefetch aborts
    if (errText.includes('ERR_ABORTED') && (reqUrl.endsWith('.mp4') || reqUrl.endsWith('.webm') || reqUrl.includes('/assets/main_slideshow/'))) {
      return;
    }
    networkErrors.push(`${req.method()} ${reqUrl} - ${errText}`);
  };

  const pageErrorListener = (err) => {
    consoleErrors.push(`[PageError] ${err.message}\n${err.stack || ''}`);
  };

  page.on('console', consoleListener);
  page.on('pageerror', pageErrorListener);
  page.on('requestfailed', requestFailedListener);

  let responseStatus = 0;
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => {});
    // Dismiss startup splash if present
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);
    responseStatus = response?.status() || 200;
  } catch (err) {
    responseStatus = 500;
    networkErrors.push(`Navigation failed: ${err.message}`);
  }

  // Check for broken images on the page (failed to load / 404)
  const brokenImages = await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) return resolve();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            setTimeout(resolve, 2000);
          })
      )
    );
    return images
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.src || img.getAttribute('src'));
  });

  // Get Page Title
  const title = await page.title();

  // Cleanup listeners
  page.off('console', consoleListener);
  page.off('pageerror', pageErrorListener);
  page.off('requestfailed', requestFailedListener);

  return {
    route,
    url,
    status: responseStatus,
    title,
    consoleErrors,
    networkErrors,
    brokenImages,
  };
}

async function run() {
  const baseUrl = await findActiveBaseUrl();
  const screenshotsDir = path.resolve(process.cwd(), '.screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.error(`[inspect] Failed to launch Chromium: ${err.message}`);
    console.error(`[inspect] Run 'npx playwright install chromium' to install browser binaries.`);
    process.exit(1);
  }

  const context = await browser.newContext({
    viewport: { width: viewportWidth, height: viewportHeight },
  });
  await context.addInitScript(() => {
    window.sessionStorage.setItem('arttu_boot_shown', 'true');
  });
  const page = await context.newPage();

  if (shouldCheckAll) {
    console.log(`\n🔍 [Health Audit] Scanning all ${ALL_ROUTES.length} routes on ${baseUrl}...\n`);
    const results = [];
    let hasIssues = false;

    for (const route of ALL_ROUTES) {
      const info = await inspectRoute(page, baseUrl, route);
      const isClean =
        info.status === 200 &&
        info.consoleErrors.length === 0 &&
        info.networkErrors.length === 0 &&
        info.brokenImages.length === 0;

      if (!isClean) hasIssues = true;

      console.log(
        `${isClean ? '✅' : '❌'} ${route.padEnd(16)} | Status: ${info.status} | Title: "${info.title}"`
      );

      if (info.consoleErrors.length > 0) {
        console.log(`   ⚠️ Console Errors (${info.consoleErrors.length}):`, info.consoleErrors);
      }
      if (info.brokenImages.length > 0) {
        console.log(`   ⚠️ Broken Images (${info.brokenImages.length}):`, info.brokenImages);
      }
      if (info.networkErrors.length > 0) {
        console.log(`   ⚠️ Network Errors:`, info.networkErrors);
      }

      results.push(info);
    }

    console.log(
      `\n📊 [Audit Summary] ${hasIssues ? 'Issues detected above.' : 'All routes healthy and clean! 🚀'}`
    );
    await browser.close();
    return;
  }

  // Single Route Inspection
  const info = await inspectRoute(page, baseUrl, targetRoute);

  console.log(`\n======================================================`);
  console.log(`🌐 Inspected: ${info.url}`);
  console.log(`📄 Title:     "${info.title}"`);
  console.log(`📡 Status:    ${info.status === 200 ? '✅ 200 OK' : `❌ ${info.status}`}`);
  console.log(`🖼️  Broken Img: ${info.brokenImages.length === 0 ? '✅ 0' : `❌ ${info.brokenImages.join(', ')}`}`);
  console.log(`⚠️  Console:   ${info.consoleErrors.length === 0 ? '✅ 0 Errors' : `❌ ${info.consoleErrors.length} Errors: ${info.consoleErrors.join('; ')}`}`);
  console.log(`======================================================\n`);

  // ARIA Accessibility Snapshot (Token-efficient structure)
  if (shouldShowAria || (!shouldScreenshot && !shouldCheckAll)) {
    try {
      const ariaSnapshot = await page.locator('body').ariaSnapshot();
      console.log(`📋 [ARIA Semantic Snapshot]:\n`);
      console.log(ariaSnapshot);
      console.log(`\n------------------------------------------------------`);
    } catch (e) {
      console.log(`(ARIA snapshot not available: ${e.message})`);
    }
  }

  // Visual Screenshot Capture
  if (shouldScreenshot) {
    if (clickSelector) {
      try {
        const clickTarget = page.locator(clickSelector).first();
        await clickTarget.click();
        await page.waitForTimeout(600);
      } catch (err) {
        console.warn(`[inspect] Failed to click selector "${clickSelector}": ${err.message}`);
      }
    }

    const cleanRouteName = targetRoute.replace(/^\//, '').replace(/\//g, '_') || 'home';
    const filename = targetSelector
      ? `inspect-${cleanRouteName}-${targetSelector.replace(/[^a-zA-Z0-9_-]/g, '')}.png`
      : (clickSelector ? `inspect-${cleanRouteName}-clicked.png` : `inspect-${cleanRouteName}.png`);
    const outputPath = path.join(screenshotsDir, filename);

    if (targetSelector) {
      const element = page.locator(targetSelector).first();
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await element.screenshot({ path: outputPath });
      console.log(`📸 [Component Screenshot Captured]: ${outputPath}`);
    } else {
      if (isFullPage) {
        // Scroll through the page to trigger all scroll reveals
        await page.evaluate(async () => {
          const distance = 400;
          const delay = 100;
          while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
            document.scrollingElement.scrollBy(0, distance);
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
          await new Promise((resolve) => setTimeout(resolve, 300));
          document.scrollingElement.scrollTo(0, 0);
          await new Promise((resolve) => setTimeout(resolve, 400));
        });
      }
      await page.screenshot({ path: outputPath, fullPage: isFullPage });
      console.log(`📸 [Viewport Screenshot Captured]: ${outputPath}`);
    }
    console.log(`👉 View with agent tool: view_file("${outputPath.replace(/\\/g, '/')}")`);
  }

  await browser.close();
}

run().catch((err) => {
  console.error('[inspect] Error:', err);
  process.exit(1);
});
