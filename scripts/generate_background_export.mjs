import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function generateBackgrounds() {
  console.log('Launching browser to generate requested background assets...');
  const browser = await chromium.launch();
  
  const bgImgPath = path.resolve('public/assets/light_flow_bg.jpg');
  const bgImgBase64 = fs.readFileSync(bgImgPath).toString('base64');
  const bgDataUri = `data:image/jpeg;base64,${bgImgBase64}`;

  // Dimensions matching user's tall vertical poster / 1:2 ratio
  const width = 1440;
  const height = 2940;

  const outputDir = path.resolve('public/exported_backgrounds');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const artifactDir = 'C:\\Users\\devrim6\\.gemini\\antigravity\\brain\\48fb9045-0f32-4790-8157-250be1048861';

  // 1. Full Composition on Warm White (#faf8f5) with Dotted Lines, Orbs, and Feathered Flow
  const htmlFull = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${width}px;
        height: ${height}px;
        background-color: #faf8f5;
        position: relative;
        overflow: hidden;
      }
      .backdrop-flow {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1450px;
        background-image: url('${bgDataUri}');
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.28;
        mix-blend-mode: multiply;
        mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 60%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 60%, transparent 100%);
      }
      .orb-1 {
        position: absolute;
        top: 8%;
        left: -80px;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(211, 47, 47, 0.12) 0%, rgba(211, 47, 47, 0) 70%);
      }
      .orb-2 {
        position: absolute;
        top: 32%;
        right: -80px;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(211, 47, 47, 0.10) 0%, rgba(211, 47, 47, 0) 70%);
      }
      .orb-3 {
        position: absolute;
        top: 58%;
        left: 10%;
        width: 550px;
        height: 550px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(239, 68, 68, 0.09) 0%, rgba(239, 68, 68, 0) 70%);
      }
      .orb-4 {
        position: absolute;
        top: 82%;
        right: 5%;
        width: 650px;
        height: 650px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(211, 47, 47, 0.09) 0%, rgba(211, 47, 47, 0) 70%);
      }
      .wind-streak-1 {
        position: absolute;
        top: 16%;
        left: 10%;
        width: 280px;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(211, 47, 47, 0.35), transparent);
      }
      .wind-streak-2 {
        position: absolute;
        top: 44%;
        right: 14%;
        width: 320px;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(239, 68, 68, 0.3), transparent);
      }
      .wind-streak-3 {
        position: absolute;
        top: 72%;
        left: 18%;
        width: 300px;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(211, 47, 47, 0.28), transparent);
      }
    </style>
  </head>
  <body>
    <div class="backdrop-flow"></div>
    <div class="orb-1"></div>
    <div class="orb-2"></div>
    <div class="orb-3"></div>
    <div class="orb-4"></div>
    <div class="wind-streak-1"></div>
    <div class="wind-streak-2"></div>
    <div class="wind-streak-3"></div>

    <svg
      style="position: absolute; inset: 0; width: 100%; height: 100%;"
      fill="none"
      viewBox="0 0 1440 2940"
      preserveAspectRatio="none"
    >
      <path
        d="M 180,0 C 650,430 1250,640 1120,1080 C 980,1520 240,1720 360,2150 C 480,2570 1220,2630 1050,2940"
        stroke="#ef4444"
        stroke-width="2.5"
        stroke-opacity="0.35"
        stroke-dasharray="14 18"
      />
      <path
        d="M 210,0 C 680,430 1280,640 1150,1080 C 1010,1520 270,1720 390,2150 C 510,2570 1250,2630 1080,2940"
        stroke="#dc2626"
        stroke-width="1.6"
        stroke-opacity="0.26"
        stroke-dasharray="10 14"
      />
      <path
        d="M 230,0 C 700,430 1300,640 1170,1080 C 1030,1520 290,1720 410,2150 C 530,2570 1270,2630 1100,2940"
        stroke="#f87171"
        stroke-width="1.4"
        stroke-opacity="0.22"
        stroke-dasharray="6 20"
      />
      <path
        d="M 150,0 C 620,430 1220,640 1090,1080 C 950,1520 210,1720 330,2150 C 450,2570 1190,2630 1020,2940"
        stroke="#1f2937"
        stroke-width="1.4"
        stroke-opacity="0.14"
        stroke-dasharray="6 10"
      />
    </svg>
  </body>
  </html>
  `;

  // 2. Transparent Background Version (PNG) so it can overlay cleanly onto any flyer/poster
  const htmlTransparent = htmlFull.replace('background-color: #faf8f5;', 'background-color: transparent;');

  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2, // 2x high-resolution crisp output (2880 x 5880)
  });

  // Render Full with Warm Canvas
  await page.setContent(htmlFull, { waitUntil: 'networkidle' });
  const fullJpg = path.join(outputDir, 'arttu_poster_background_warm.jpg');
  const fullPng = path.join(outputDir, 'arttu_poster_background_warm.png');
  await page.screenshot({ path: fullJpg, type: 'jpeg', quality: 95 });
  await page.screenshot({ path: fullPng, type: 'png' });

  // Copy to brain artifact directory for instant viewing
  fs.copyFileSync(fullJpg, path.join(artifactDir, 'arttu_poster_background_warm.jpg'));
  fs.copyFileSync(fullPng, path.join(artifactDir, 'arttu_poster_background_warm.png'));

  // Render Transparent PNG
  await page.setContent(htmlTransparent, { waitUntil: 'networkidle' });
  const transPng = path.join(outputDir, 'arttu_poster_background_transparent.png');
  await page.screenshot({ path: transPng, type: 'png', omitBackground: true });
  fs.copyFileSync(transPng, path.join(artifactDir, 'arttu_poster_background_transparent.png'));

  // 3. Isolated Flow Image with feathered mask & opacity only (no lines/orbs) in case user wants just the silk graphic
  const htmlSilkOnly = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${width}px;
        height: 1450px;
        background-color: transparent;
        position: relative;
        overflow: hidden;
      }
      .backdrop-flow {
        position: absolute;
        inset: 0;
        background-image: url('${bgDataUri}');
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.35;
        mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 60%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 60%, transparent 100%);
      }
    </style>
  </head>
  <body>
    <div class="backdrop-flow"></div>
  </body>
  </html>
  `;
  const pageSilk = await browser.newPage({ viewport: { width, height: 1450 }, deviceScaleFactor: 2 });
  await pageSilk.setContent(htmlSilkOnly, { waitUntil: 'networkidle' });
  const silkPng = path.join(outputDir, 'arttu_silk_flow_transparent.png');
  await pageSilk.screenshot({ path: silkPng, type: 'png', omitBackground: true });
  fs.copyFileSync(silkPng, path.join(artifactDir, 'arttu_silk_flow_transparent.png'));

  await browser.close();
  console.log('Background generation complete! Files saved to:', outputDir);
}

generateBackgrounds().catch((err) => {
  console.error(err);
  process.exit(1);
});
