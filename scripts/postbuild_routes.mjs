import fs from 'fs';
import path from 'path';

const ROUTES = [
  'car',
  'events',
  'competitions',
  'history',
  'history/team',
  'team-history',
  'departments',
  'recruitment',
  'join',
  'join-us',
  'partners',
  'sponsors',
  'sponsorship',
  'support',
  'support/notice',
  'support/form',
  'support/formular-230',
  'contact',
];

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.log('[postbuild] dist/index.html not found, skipping route mirroring.');
  process.exit(0);
}

const htmlContent = fs.readFileSync(indexPath, 'utf-8');

for (const route of ROUTES) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  const targetFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(targetFile, htmlContent, 'utf-8');
}

console.log(`[postbuild] Successfully mirrored ${ROUTES.length} routes for GitHub Pages HTTP 200 link unfurling!`);
