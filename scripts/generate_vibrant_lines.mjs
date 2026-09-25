import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function generateVibrantBackgrounds() {
  console.log('Generating prominent, vibrant red dotted lines and backgrounds...');
  const browser = await chromium.launch();

  const bgImgPath = path.resolve('public/assets/light_flow_bg.jpg');
  const bgImgBase64 = fs.readFileSync(bgImgPath).toString('base64');
  const bgDataUri = `data:image/jpeg;base64,${bgImgBase64}`;

  const width = 1440;
  const height = 2940;
  const outputDir = path.resolve('public/exported_backgrounds');
  const artifactDir = 'C:\\Users\\devrim6\\.gemini\\antigravity\\brain\\48fb9045-0f32-4790-8157-250be1048861';

  // 1. High Visibility Racing Lines (Vibrant Red Dashes, Website Style, Strong Opacity & Width)
  const svgRacingDashes = `
    <svg
      style="position: absolute; inset: 0; width: 100%; height: 100%; z-index: 5;"
      fill="none"
      viewBox="0 0 1440 2940"
      preserveAspectRatio="none"
    >
      <!-- Primary Vibrant Red Streamline (Bold, Crisp) -->
      <path
        d="M 180,0 C 650,430 1250,640 1120,1080 C 980,1520 240,1720 360,2150 C 480,2570 1220,2630 1050,2940"
        stroke="#e11d48"
        stroke-width="5"
        stroke-opacity="0.9"
        stroke-dasharray="16 18"
        stroke-linecap="round"
      />
      <!-- Secondary Crimson Support Streamline -->
      <path
        d="M 210,0 C 680,430 1280,640 1150,1080 C 1010,1520 270,1720 390,2150 C 510,2570 1250,2630 1080,2940"
        stroke="#dc2626"
        stroke-width="3.5"
        stroke-opacity="0.8"
        stroke-dasharray="12 16"
        stroke-linecap="round"
      />
      <!-- Outer Accent Filament -->
      <path
        d="M 235,0 C 705,430 1305,640 1175,1080 C 1035,1520 295,1720 415,2150 C 535,2570 1275,2630 1105,2940"
        stroke="#f43f5e"
        stroke-width="2.5"
        stroke-opacity="0.7"
        stroke-dasharray="8 20"
        stroke-linecap="round"
      />
      <!-- Subtle Dark Graphite Trace for Racing Contrast -->
      <path
        d="M 150,0 C 620,430 1220,640 1090,1080 C 950,1520 210,1720 330,2150 C 450,2570 1190,2630 1020,2940"
        stroke="#374151"
        stroke-width="2"
        stroke-opacity="0.35"
        stroke-dasharray="8 12"
        stroke-linecap="round"
      />
    </svg>
  `;

  // 2. Pure Circular Dotted Lines (Round Dots Style)
  const svgCircularDots = `
    <svg
      style="position: absolute; inset: 0; width: 100%; height: 100%; z-index: 5;"
      fill="none"
      viewBox="0 0 1440 2940"
      preserveAspectRatio="none"
    >
      <!-- Main Circular Dotted Red Line -->
      <path
        d="M 180,0 C 650,430 1250,640 1120,1080 C 980,1520 240,1720 360,2150 C 480,2570 1220,2630 1050,2940"
        stroke="#e11d48"
        stroke-width="6"
        stroke-opacity="0.95"
        stroke-dasharray="0.1 22"
        stroke-linecap="round"
      />
      <!-- Secondary Circular Dotted Red Line -->
      <path
        d="M 215,0 C 685,430 1285,640 1155,1080 C 1015,1520 275,1720 395,2150 C 515,2570 1255,2630 1085,2940"
        stroke="#dc2626"
        stroke-width="4"
        stroke-opacity="0.8"
        stroke-dasharray="0.1 18"
        stroke-linecap="round"
      />
      <!-- Tertiary Filament -->
      <path
        d="M 240,0 C 710,430 1310,640 1180,1080 C 1040,1520 300,1720 420,2150 C 540,2570 1280,2630 1110,2940"
        stroke="#f43f5e"
        stroke-width="3"
        stroke-opacity="0.65"
        stroke-dasharray="0.1 24"
        stroke-linecap="round"
      />
    </svg>
  `;

  // Base HTML builder
  const createHtml = (svgContent, bgColor = '#faf8f5', includeSilk = true) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: ${width}px;
        height: ${height}px;
        background-color: ${bgColor};
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
        opacity: 0.32;
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
        background: radial-gradient(circle, rgba(225, 29, 72, 0.14) 0%, rgba(225, 29, 72, 0) 70%);
      }
      .orb-2 {
        position: absolute;
        top: 32%;
        right: -80px;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, rgba(225, 29, 72, 0) 70%);
      }
      .orb-3 {
        position: absolute;
        top: 58%;
        left: 10%;
        width: 550px;
        height: 550px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(244, 63, 94, 0.10) 0%, rgba(244, 63, 94, 0) 70%);
      }
      .orb-4 {
        position: absolute;
        top: 82%;
        right: 5%;
        width: 650px;
        height: 650px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(225, 29, 72, 0.10) 0%, rgba(225, 29, 72, 0) 70%);
      }
    </style>
  </head>
  <body>
    ${includeSilk ? '<div class="backdrop-flow"></div>' : ''}
    <div class="orb-1"></div>
    <div class="orb-2"></div>
    <div class="orb-3"></div>
    <div class="orb-4"></div>
    ${svgContent}
  </body>
  </html>
  `;

  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 2,
  });

  // 1. Vibrant Dashes on Warm Canvas (JPEG & PNG)
  await page.setContent(createHtml(svgRacingDashes, '#faf8f5', true), { waitUntil: 'networkidle' });
  const warmVibrantJpg = path.join(outputDir, 'arttu_vibrant_red_lines_warm.jpg');
  const warmVibrantPng = path.join(outputDir, 'arttu_vibrant_red_lines_warm.png');
  await page.screenshot({ path: warmVibrantJpg, type: 'jpeg', quality: 95 });
  await page.screenshot({ path: warmVibrantPng, type: 'png' });
  fs.copyFileSync(warmVibrantJpg, path.join(artifactDir, 'arttu_vibrant_red_lines_warm.jpg'));
  fs.copyFileSync(warmVibrantPng, path.join(artifactDir, 'arttu_vibrant_red_lines_warm.png'));

  // 2. Vibrant Dashes Transparent PNG (Silk + Bold Lines + Orbs)
  await page.setContent(createHtml(svgRacingDashes, 'transparent', true), { waitUntil: 'networkidle' });
  const transVibrantPng = path.join(outputDir, 'arttu_vibrant_red_lines_transparent.png');
  await page.screenshot({ path: transVibrantPng, type: 'png', omitBackground: true });
  fs.copyFileSync(transVibrantPng, path.join(artifactDir, 'arttu_vibrant_red_lines_transparent.png'));

  // 3. True Circular Dotted Lines Version (Warm Canvas)
  await page.setContent(createHtml(svgCircularDots, '#faf8f5', true), { waitUntil: 'networkidle' });
  const circularDotsJpg = path.join(outputDir, 'arttu_circular_dots_warm.jpg');
  await page.screenshot({ path: circularDotsJpg, type: 'jpeg', quality: 95 });
  fs.copyFileSync(circularDotsJpg, path.join(artifactDir, 'arttu_circular_dots_warm.jpg'));

  // 4. Standalone Red Lines Only (Transparent PNG - No silk, no canvas, just the crisp red dotted lines)
  const linesOnlyHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { width: ${width}px; height: ${height}px; background-color: transparent; }
    </style>
  </head>
  <body>
    ${svgRacingDashes}
  </body>
  </html>
  `;
  await page.setContent(linesOnlyHtml, { waitUntil: 'networkidle' });
  const linesOnlyPng = path.join(outputDir, 'arttu_red_dotted_lines_only.png');
  await page.screenshot({ path: linesOnlyPng, type: 'png', omitBackground: true });
  fs.copyFileSync(linesOnlyPng, path.join(artifactDir, 'arttu_red_dotted_lines_only.png'));

  // 5. Raw Standalone SVG file for vector editing (Illustrator/Canva/Figma)
  const fullSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1440 2940" fill="none">
  <!-- Primary Vibrant Red Streamline -->
  <path
    d="M 180,0 C 650,430 1250,640 1120,1080 C 980,1520 240,1720 360,2150 C 480,2570 1220,2630 1050,2940"
    stroke="#e11d48"
    stroke-width="5"
    stroke-opacity="0.9"
    stroke-dasharray="16 18"
    stroke-linecap="round"
  />
  <!-- Secondary Crimson Support Streamline -->
  <path
    d="M 210,0 C 680,430 1280,640 1150,1080 C 1010,1520 270,1720 390,2150 C 510,2570 1250,2630 1080,2940"
    stroke="#dc2626"
    stroke-width="3.5"
    stroke-opacity="0.8"
    stroke-dasharray="12 16"
    stroke-linecap="round"
  />
  <!-- Outer Accent Filament -->
  <path
    d="M 235,0 C 705,430 1305,640 1175,1080 C 1035,1520 295,1720 415,2150 C 535,2570 1275,2630 1105,2940"
    stroke="#f43f5e"
    stroke-width="2.5"
    stroke-opacity="0.7"
    stroke-dasharray="8 20"
    stroke-linecap="round"
  />
</svg>`;
  fs.writeFileSync(path.join(outputDir, 'arttu_red_dotted_lines.svg'), fullSvg, 'utf-8');
  fs.writeFileSync(path.join(artifactDir, 'arttu_red_dotted_lines.svg'), fullSvg, 'utf-8');

  await browser.close();
  console.log('All vibrant red dotted lines rendered successfully!');
}

generateVibrantBackgrounds().catch((err) => {
  console.error(err);
  process.exit(1);
});
