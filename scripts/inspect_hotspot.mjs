import { chromium } from 'playwright';
import path from 'path';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  await context.addInitScript(() => {
    window.sessionStorage.setItem('arttu_boot_shown', 'true');
  });
  const page = await context.newPage();
  await page.goto('http://localhost:5173/car', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Click on the first hotspot (+ button)
  const hotspotBtn = page.locator('button[aria-label^="Hotspot:"]').first();
  await hotspotBtn.click();
  await page.waitForTimeout(600);

  const outputPath = path.resolve(process.cwd(), '.screenshots', 'inspect-car-hotspot-open.png');
  await page.screenshot({ path: outputPath });
  console.log('Saved hotspot open screenshot to:', outputPath);

  await browser.close();
}

run().catch(console.error);
