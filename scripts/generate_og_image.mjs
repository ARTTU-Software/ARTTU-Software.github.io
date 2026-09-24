import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function generateOgImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  const bgImgPath = path.resolve('public/ARTTU26_FSG_Speed.jpg');
  const bgImgBase64 = fs.readFileSync(bgImgPath).toString('base64');
  const bgDataUri = `data:image/jpeg;base64,${bgImgBase64}`;

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: 1200px;
        height: 630px;
        position: relative;
        overflow: hidden;
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        background-color: #07090e;
      }
      .bg-container {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .bg-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* Center focus on the racecar */
        object-position: 50% 60%;
        transform: scale(1.15);
        transform-origin: 50% 58%;
      }
      
      /* Subtle overall cinematic film grade */
      .film-tint {
        position: absolute;
        inset: 0;
        background: rgba(7, 9, 14, 0.18);
        pointer-events: none;
      }

      /* Seamless top vignette to frame the upper half naturally */
      .vignette-top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 320px;
        background: linear-gradient(
          to bottom,
          rgba(6, 8, 13, 0.88) 0%,
          rgba(6, 8, 13, 0.55) 38%,
          rgba(6, 8, 13, 0.15) 70%,
          transparent 100%
        );
        pointer-events: none;
      }

      /* Smooth upper-right atmospheric gradient */
      .vignette-upper-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 800px;
        height: 340px;
        background: linear-gradient(
          to left,
          rgba(6, 8, 13, 0.85) 0%,
          rgba(6, 8, 13, 0.50) 45%,
          transparent 100%
        );
        pointer-events: none;
      }

      .brand-corner {
        position: absolute;
        top: 44px;
        right: 56px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        z-index: 10;
        text-align: right;
      }

      .title-line-1 {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 74px;
        font-weight: 900;
        line-height: 0.94;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        color: #ffffff;
        text-shadow: 
          0 4px 24px rgba(0, 0, 0, 0.95),
          0 2px 8px rgba(0, 0, 0, 0.98),
          0 10px 40px rgba(0, 0, 0, 0.85);
      }

      .title-line-2 {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 74px;
        font-weight: 900;
        line-height: 0.94;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        color: #ef4444; /* brand-brightRed from HomePage */
        text-shadow: 
          0 4px 24px rgba(0, 0, 0, 0.95),
          0 2px 8px rgba(0, 0, 0, 0.98),
          0 10px 40px rgba(0, 0, 0, 0.85),
          0 0 28px rgba(239, 68, 68, 0.4); /* subtle crimson ambient aura */
      }

      .brand-sub {
        margin-top: 14px;
        font-family: 'Space Grotesk', monospace;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #ffffff;
        text-shadow: 
          0 3px 16px rgba(0, 0, 0, 0.95),
          0 1px 4px rgba(0, 0, 0, 0.98);
      }
    </style>
  </head>
  <body>
    <div class="bg-container">
      <img class="bg-photo" src="${bgDataUri}" />
    </div>
    <div class="film-tint"></div>
    <div class="vignette-top"></div>
    <div class="vignette-upper-right"></div>
    <div class="brand-corner">
      <div class="title-line-1">ART TU</div>
      <div class="title-line-2">CLUJ-NAPOCA</div>
      <div class="brand-sub">UTCN Formula Student Team</div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  const outDir = path.resolve('public/assets');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const ogPathJpg = path.resolve('public/assets/og-image.jpg');
  const ogPathRootJpg = path.resolve('public/og-image.jpg');
  const ogPathPng = path.resolve('public/assets/og-image.png');

  await page.screenshot({ path: ogPathJpg, type: 'jpeg', quality: 92 });
  await page.screenshot({ path: ogPathRootJpg, type: 'jpeg', quality: 92 });
  await page.screenshot({ path: ogPathPng, type: 'png' });

  const stats = fs.statSync(ogPathJpg);
  console.log(`Generated OG preview image: ${ogPathJpg} (${(stats.size / 1024).toFixed(1)} KB)`);

  await browser.close();
}

generateOgImage().catch((err) => {
  console.error(err);
  process.exit(1);
});
