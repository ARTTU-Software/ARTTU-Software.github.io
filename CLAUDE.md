# ART TU Formula Student Website — Development Guidelines & Visual Protocol

## 🏁 1. Core Mission & Objectives
This project is the complete redesign and development of the **ART TU Cluj-Napoca Formula Student Team** (Technical University of Cluj-Napoca / UTCN) official website.

The goal is an **elite, modern, multi-page motorsport website** that matches the visual polish and prestige of world-champion Formula Student teams like **AMZ Racing (ETH Zürich)**, **FS Team Delft (TU Delft)**, and **TUfast Munich**.

### Key Content Priorities:
1. **2026 Competition Glory:** Showcase our historic results:
   - 🏆 **FS Balkans 2026:** 1st Place Overall Champions, Best in Statics Trophy, 1st in Skidpad, Auto-X, BPP, Cost, and Engineering Design.
   - 🇩🇪 **FS Germany 2026 (Hockenheimring):** 3rd Place in Efficiency, 21st in Endurance, 31st Overall.
   - 🇭🇷 **FS Alpe Adria 2026:** 3rd Place in Efficiency.
2. **Sponsor & Partner Visibility:** Clear tiering (Educational, Platinum, Gold, Silver), prominent logo marquee, and 1-click **"Download 2026 Sponsorship Deck (PDF)"**.
3. **Student Recruitment Portal:** Clear 4-step recruitment roadmap, detailed department expectations, workshop culture gallery, and integrated application form.
4. **The Racecar & Engineering Specs:** High-res CAD and track photos, 600V accumulator, dual motor powertrain, CFD aero, and technical specifications matrix.
5. **Support & Formularul 230:** Step-by-step 3.5% tax redirection helper + BCR NGO bank transfer card with 1-click IBAN copy.

---

## 🎨 2. Visual & Aesthetic Principles (Strictly Enforced)

- **NEVER use generic "AI-generated" or developer-doc aesthetics:**
  - Avoid cramming everything onto a single, cluttered, infinite-scroll page.
  - Avoid raw developer grids, walls of plain bulleted text, or unstyled tables.
- **Visuals & Real Photography First:**
  - Every page must feature real high-resolution imagery from our archive (`public/assets/`): race track action (`DBV_FSBK-Day3-27`), full team championship moments (`DBV_FSBK-Groups-8-1-1`), pit scrutineering (`DBV_FSBK-Day4-147`), and student workshop assembly (`IMG_8575`).
- **Design System & Color Scheme:**
  - **ART TU Racing Red:** `#d32f2f` (Primary), `#b71c1c` (Crimson), `#f44336` (Vibrant Accent).
  - **Dark Carbon Surfaces:** `#0d0e12` (Void Black), `#16161a` / `#1e1f26` (Carbon Slate Cards), `#2e2e36` (Borders).
  - **Crisp High-Contrast Typography:** Pure White (`#ffffff`) for headers, muted technical slate (`#9ca3af`) for body, and monospace font for telemetry/stats.

---

## 👁️ 3. Mandatory Visual Inspection & Interaction Protocol

Whenever you build, edit, or modify components or pages:
1. **Always run and verify on the live local dev server** (`http://localhost:5173/`).
2. **Use Playwright / browser tools to interact with the site:**
   - Navigate through every route (`/`, `/car`, `/competitions`, `/departments`, `/recruitment`, `/partners`, `/support`, `/contact`).
   - Test interactive elements (hotspots, tabs, modals, forms, copy buttons).
   - Capture full screenshots of modified pages and visually inspect layout balance, contrast, typography, and mobile responsiveness.
3. **Verify the production build** (`npm run build`) has zero errors before completing tasks.

---

## 🛠️ 4. Tech Stack & Commands

- **Tech Stack:** React 18 + TypeScript + Vite 5 + Tailwind CSS + React Router 6 + Lucide Icons
- **Local Dev Server:** `npm run dev` or `npx vite --port 5173 --host`
- **Production Build:** `npm run build`
- **Playwright Visual Verification:** `npx playwright test` or headless browser capture scripts.
