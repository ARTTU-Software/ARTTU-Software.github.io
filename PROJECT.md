# Project: ART TU Formula Student Website Enhancement

## Architecture
- **Framework & UI Stack**: React 18 + TypeScript + Vite 5 + Tailwind CSS 3.4 + React Router 7 (`react-router-dom`) + Lucide React Icons.
- **Design System & Visual Language**:
  - **ART TU Racing Red**: `#d32f2f` (Primary), `#b71c1c` (Crimson), `#ef4444` (Accent Glow).
  - **Void Carbon & Cockpit Slate**: `#0a0b0e` (Base Void), `#12131a` / `#1a1b24` (Surface Cards), `#282a36` (Borders).
  - **Typography**: Display (`Plus Jakarta Sans`), Body (`Inter`), Telemetry Monospace (`Space Grotesk`).
- **Motion & Telemetry Architecture**:
  - GPU-accelerated CSS transforms (`translate3d`, `scale`) + `IntersectionObserver` with `triggerOnce: true` and `prefers-reduced-motion` guards.
  - High-performance `requestAnimationFrame` dynamic telemetry counters with `tabular-nums` for zero layout shift (CLS: 0).
  - Ultra-fast (~850ms) high-tech telemetry startup/boot intro screen with smooth fade-out on initial load.
  - Non-destructive Cyber-Motorsport Glitch & Scanline accents on typography, section badges, and championship milestones.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---|---|---|---|
| 1 | R1: Kinetic Slide-in & Viewport Reveals | Viewport entrance animations (up, left, right, scale, staggered) across all 8 routes | M1, M3 (DONE) | ORIGINAL_REQUEST §1 |
| 2 | R7: Fast Startup / Boot Splash Intro | Sleek, fast (~850ms) telemetry & brand boot intro splash fading out smoothly on load | M1 (DONE) | ORIGINAL_REQUEST §Follow-up |
| 3 | R2: Cyber-Motorsport Glitch & Scanlines | Non-destructive chromatic micro-glitch, CRT scanline badges, radar shimmers, HUD brackets | M2, M3 (DONE) | ORIGINAL_REQUEST §2 |
| 4 | R3: Dynamic Telemetry & Stat Tickers | `requestAnimationFrame` + `tabular-nums` count-up tickers for vehicle specs and 2026 trophies | M2, M3 (DONE) | ORIGINAL_REQUEST §3 |
| 5 | R4: Instant & Non-blocking Interactive UX | Instant tab switching, 0ms hotspot responses, live search, 1-click copy feedback | M3 (DONE) | ORIGINAL_REQUEST §4 |
| 6 | Route Polish (8 Routes) | Integration of reveals, tickers, glitch, and telemetry styling across all 8 pages | M3 (DONE) | ORIGINAL_REQUEST §1-§4 |
| 7 | R5: Build & Inspection Health | `npm run build` with 0 TS errors; `node scripts/inspect.mjs --check-all` 200 OK, 0 errors, 0 broken images | M4 (DONE) | ORIGINAL_REQUEST §5 |
| 8 | R6: Full-Page Screenshot Batch Capture | Automated capture of all 8 routes to `C:\Users\Devrim6\Downloads\ART_TU_Website_Screenshots` | M4 (DONE) | ORIGINAL_REQUEST §6 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | M1: Motion, Reveal & Startup Boot Infra | Startup boot intro screen, `<ScrollReveal>` component, `useScrollReveal` hook, CSS animation utilities | none | DONE |
| 2 | M2: Cyber-Motorsport Glitch & Telemetry Tickers | Pure CSS glitch & scanline keyframes, `.hud-card`, `<TelemetryTicker>` component with rAF and tabular-nums | none | DONE |
| 3 | M3: Route Integration & UX Polish (All 8 Routes) | Integration across `/`, `/car`, `/history`, `/departments`, `/recruitment`, `/partners`, `/support`, `/contact` | M1, M2 | DONE |
| 4 | M4: Build Verification, Inspection & Screenshot Export | Batch full-page screenshot capture to target dir, final health verification | M3 | DONE |

## Interface Contracts
### `<StartupSplash />`
- Props: `onComplete?: () => void`, `durationMs?: number` (default 850ms)
- Output: Fixed overlay with ART TU telemetry boot sequence, progress line, and opacity/transform fade-out.

### `<ScrollReveal />` & `useScrollReveal`
- Props: `children: React.ReactNode`, `direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'`, `delay?: number` (ms), `duration?: number` (ms), `className?: string`, `triggerOnce?: boolean` (default `true`), `threshold?: number` (default `0.1`).
- Contract: IntersectionObserver attaches to container; adds active reveal class when entering viewport; gracefully renders visible immediately if `prefers-reduced-motion` is active.

### `<TelemetryTicker />`
- Props: `value: number`, `decimals?: number` (default `0`), `duration?: number` (ms, default `1400`), `prefix?: string`, `suffix?: string`, `className?: string`, `threshold?: number` (default `0.15`).
- Contract: Uses `requestAnimationFrame` + `cubic-bezier(0.25, 0.1, 0.25, 1)` easing; renders formatted string in `font-mono tabular-nums`.

## Code Layout
```
src/
├── components/
│   ├── common/
│   │   ├── TelemetryTicker.tsx     # Reusable dynamic numeric count-up
│   │   └── StartupSplash.tsx       # Fast sleek boot splash intro (~850ms)
│   ├── motion/
│   │   └── ScrollReveal.tsx        # Viewport reveal wrapper
│   ├── competitions/               # Competition cards and history lists
│   ├── Navbar.tsx                  # Global navigation
│   └── Footer.tsx                  # Global footer
├── hooks/
│   └── useScrollReveal.ts          # IntersectionObserver hook
├── pages/
│   ├── HomePage.tsx                # /
│   ├── CarPage.tsx                 # /car
│   ├── CompetitionsPage.tsx        # /history
│   ├── TeamHistoryPage.tsx         # /history/team
│   ├── DepartmentsPage.tsx         # /departments
│   ├── RecruitmentPage.tsx         # /recruitment
│   ├── PartnersPage.tsx            # /partners
│   ├── SupportPage.tsx             # /support
│   └── ContactPage.tsx             # /contact
├── index.css                       # Cyber glitch, scanlines, hud brackets, reveal keyframes
└── ...
scripts/
├── inspect.mjs                     # Inspection tool
└── generate_screenshots.mjs        # Full-page screenshot batch capture tool
```
