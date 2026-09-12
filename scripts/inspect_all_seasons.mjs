import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function captureAll() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto('http://localhost:5173/history');
  await page.waitForTimeout(1000);

  // Pause auto-drive
  const pauseBtn = page.locator('button[title="Pause Auto-Scroll"]');
  if (await pauseBtn.count() > 0) {
    await pauseBtn.click();
    await page.waitForTimeout(300);
  }

  const outDir = path.resolve('.screenshots', 'seasons');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 0: ART26 (initial latest)
  await page.screenshot({ path: path.join(outDir, '01_ART26.png') });
  console.log('Captured 01_ART26');

  const prevBtn = page.locator('button[title="Previous Season"]');
  
  // 1: ART25
  await prevBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '02_ART25.png') });
  console.log('Captured 02_ART25');

  // 2: ART24
  await prevBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '03_ART24.png') });
  console.log('Captured 03_ART24');

  // 3: ART23 (Season 2022-2023)
  await prevBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '04_ART23.png') });
  console.log('Captured 04_ART23');

  // 4: ART22 (Season 2021-2022)
  await prevBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '05_ART22.png') });
  console.log('Captured 05_ART22');

  // 5: ART01 (Season 2019-2020)
  await prevBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(outDir, '06_ART01.png') });
  console.log('Captured 06_ART01');

  // Mobile capture
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:5173/history');
  await mobilePage.waitForTimeout(3500);
  await mobilePage.screenshot({ path: path.join(outDir, '07_mobile_ART26.png') });
  console.log('Captured 07_mobile_ART26');

  await browser.close();
  console.log('All 6 seasons + mobile captured successfully!');
}

captureAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
