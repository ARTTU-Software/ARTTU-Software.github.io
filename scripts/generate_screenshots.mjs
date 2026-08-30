#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import http from 'http';

// Target directory for generated full-page screenshots
const DEFAULT_OUTPUT_DIR = 'C:\\Users\\Devrim6\\Downloads\\ART_TU_Website_Screenshots';

// Routes to capture with ordered filenames
const ROUTE_CONFIGS = [
  { filename: '00_startup_splash.png', route: '/', name: 'Startup Boot Splash', isSplash: true },
  { filename: '01_home.png', route: '/', name: 'Home Page' },
  { filename: '02_car.png', route: '/car', name: 'Car & Engineering' },
  { filename: '03_history.png', route: '/history', name: 'Competitions & Results' },
  { filename: '04_departments.png', route: '/departments', name: 'Departments & Subteams' },
  { filename: '05_recruitment.png', route: '/recruitment', name: 'Recruitment Portal' },
  { filename: '06_partners.png', route: '/partners', name: 'Sponsors & Partners' },
  { filename: '07_support.png', route: '/support', name: 'Support & Formularul 230' },
  { filename: '08_contact.png', route: '/contact', name: 'Contact & HQ' },
  { filename: '09_team_history.png', route: '/history/team', name: 'Team History Archive' },
];

// Helper to check if a local dev server port is responding
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

/**
 * Smoothly scrolls down the page to trigger all IntersectionObserver reveals,
 * counters, telemetry tickers, and transitions, then scrolls back to top and settles.
 */
async function triggerScrollSweepAndSettle(page) {
  await page.evaluate(async () => {
    // Scroll in steps to trigger all observers
    const totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const step = 350;
    for (let pos = 0; pos <= totalHeight; pos += step) {
      window.scrollTo(0, pos);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  });

  // Wait for animations and tickers to settle
  await page.waitForTimeout(1000);

  // Wait for any remaining pending images to complete
  await page.evaluate(async () => {
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
  });
}

async function captureAllScreenshots() {
  const baseUrl = await findActiveBaseUrl();
  const outputDir = process.env.OUTPUT_DIR || DEFAULT_OUTPUT_DIR;

  console.log(`\n======================================================`);
  console.log(`📸 ART TU Formula Student Website - Batch Screenshot Capture`);
  console.log(`🌐 Base URL:   ${baseUrl}`);
  console.log(`📁 Output Dir: ${outputDir}`);
  console.log(`🎯 Routes:     ${ROUTE_CONFIGS.length} pages`);
  console.log(`======================================================\n`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created output directory: ${outputDir}`);
  }

  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  } catch (err) {
    console.error(`❌ Failed to launch Chromium: ${err.message}`);
    process.exit(1);
  }

  // Create context with crisp desktop resolution (1440x900, deviceScaleFactor: 2 for retina fidelity)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  // Bypass startup splash screen so pages render clean content immediately
  await context.addInitScript(() => {
    window.sessionStorage.setItem('arttu_boot_shown', 'true');
  });

  const page = await context.newPage();

  const manifest = [];
  let successCount = 0;

  for (let i = 0; i < ROUTE_CONFIGS.length; i++) {
    const { filename, route, name } = ROUTE_CONFIGS[i];
    const targetUrl = `${baseUrl}${route}`;
    const outputPath = path.join(outputDir, filename);

    console.log(`[${i + 1}/${ROUTE_CONFIGS.length}] Capturing "${name}" (${route})...`);

    const consoleErrors = [];
    const consoleListener = (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    };
    page.on('console', consoleListener);

    try {
      const startTime = Date.now();
      
      if (ROUTE_CONFIGS[i].isSplash) {
        // Create clean page without dismissing splash
        const splashPage = await context.newPage();
        await splashPage.goto(targetUrl, { waitUntil: 'domcontentloaded' });
        await splashPage.waitForTimeout(500); // Capture mid-boot sequence
        await splashPage.screenshot({ path: outputPath });
        await splashPage.close();
      } else {
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
        
        // Ensure splash dismiss key for standard pages
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);

        // Perform scroll sweep to reveal all dynamic content
        await triggerScrollSweepAndSettle(page);

        // Capture full-page screenshot
        await page.screenshot({
          path: outputPath,
          fullPage: true,
        });
      }

      const elapsed = Date.now() - startTime;
      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

      // Get page dimensions
      const dimensions = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      }));

      manifest.push({
        index: i + 1,
        filename,
        route,
        name,
        outputPath,
        sizeBytes: stats.size,
        sizeFormatted: stats.size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`,
        viewportWidth: 1440,
        pageHeight: dimensions.height,
        renderedWidth: 1440 * 2,
        renderedHeight: dimensions.height * 2,
        captureTimeMs: elapsed,
        consoleErrors: consoleErrors.length,
      });

      console.log(`   ✅ Saved: ${filename} (${stats.size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`}, ${dimensions.width}x${dimensions.height}px, ${elapsed}ms)`);
      successCount++;
    } catch (err) {
      console.error(`   ❌ Failed to capture ${route}: ${err.message}`);
      manifest.push({
        index: i + 1,
        filename,
        route,
        name,
        outputPath,
        error: err.message,
      });
    } finally {
      page.off('console', consoleListener);
    }
  }

  await browser.close();

  // Write capture manifest JSON & summary
  const manifestPath = path.join(outputDir, 'screenshot_manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

  console.log(`\n======================================================`);
  console.log(`🎉 Batch Capture Complete: ${successCount}/${ROUTE_CONFIGS.length} screenshots saved`);
  console.log(`📁 Target Directory: ${outputDir}`);
  console.log(`📋 Manifest: ${manifestPath}`);
  console.log(`======================================================\n`);

  return manifest;
}

captureAllScreenshots().catch((err) => {
  console.error('[generate_screenshots] Fatal error:', err);
  process.exit(1);
});
