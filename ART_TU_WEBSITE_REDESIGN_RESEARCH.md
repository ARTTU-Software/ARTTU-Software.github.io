# ART TU Formula Student Website — Comprehensive Redesign & Architecture Research

**Prepared for:** ART TU Cluj-Napoca / Formula Student Team  
**Reference Design System:** [ART TU Cloud Docs (VitePress)](https://docs.cloud.arttu-formulastudent.ro/)  
**Live Site Analyzed:** [arttu-formulastudent.ro](https://arttu-formulastudent.ro/)  
**Local Archive:** `site_archive/` (14 pages, 100+ assets downloaded)

---

## 1. Executive Summary & Core Objectives

The ART TU Formula Student website represents the Technical University of Cluj-Napoca (UTCN) and Romania's pioneer electric Formula Student racing team. Following major milestones—including completing the Endurance event at **Formula Student Germany (Hockenheimring) 2025** and multiple **P1 trophies at FS Balkans**—the digital presence must reflect the precision, engineering excellence, and motorsport energy of the team.

### Primary Website Goals:
1. **Sponsorship & Partner Visibility:** Provide high-impact exposure for existing partners (Porsche Engineering, CSi, INAS, BT Leasing, etc.) and a compelling conversion funnel for prospective sponsors (downloadable sponsorship pitch deck, ROI metrics, tier benefits).
2. **Recruitment & Talent Acquisition:** Inspire UTCN students across engineering, software, business, and logistics with interactive department breakdowns, role expectations, culture showcases, and a seamless application process.
3. **History, Legacy & Milestones:** Celebrate team progression since 2019, track day achievements, car evolution (ART-01 to present), and alumni rosters.
4. **Instant Performance & Motorsport UX:** Sub-second load times, modern dark-mode aesthetic with team colors (Racing Red, Carbon Gray, White), zero layout shift, and interactive modules (such as 3D/hotspot car inspection) that slash bounce rates.

---

## 2. Audit of Current Site vs. Redesign Improvements

| Area | Current Live Site (WordPress / Astra / Elementor) | Redesigned Experience (Modern Jamstack / React / Astro) |
| :--- | :--- | :--- |
| **Performance & Speed** | Slow initial load (~3.2s+), heavy JS bundles (Elementor, jQuery, Autoptimize), outdated PHP 7.3 backend. | **Sub-500ms load time** (100/100 Lighthouse score), static HTML generation, zero unused JS, assets optimized on CDN. |
| **Visual Identity & Theme** | Generic white WordPress blog styling; lacks racing energy and motorsport atmosphere. | **High-tech dark motorsport theme** inspired by the VitePress docs: Carbon/Jet Black base, crisp white typography, and vibrant ART TU Red accents. |
| **Homepage Engagement** | Sparse hero section with a single CTA and static text paragraph; high bounce risk. | **Dynamic Hero with video loop / high-res track photography**, live telemetry stats (`0-100 km/h`, `Power`, `Accumulator Voltage`), interactive car exploration, and quick action tiles. |
| **Sponsorship Showcase** | Hidden under `/partners` with static unorganized logos, no tier perks explanation, no downloadable pitch deck. | **Homepage Infinite Logo Marquee**, clear Tier Showcase (Educational, Platinum, Gold, Silver), sponsor case studies, and a 1-click **"Download Sponsorship Brochure"** action center. |
| **Department & Recruitment** | 6 fragmented subpages with text walls; outdated recruitment deadlines and Elementor counter bugs (`0 Members, 0 Milestones`). | **Interactive Department Hub** with tabbed views, 3D/CAD exploded view hotspots, day-in-the-life galleries, dynamic recruitment status badges, and streamlined application flow. |
| **History & Results** | Unstructured text list of historical leader rosters and static event paragraphs. | **Interactive Racing Timeline** (2019–Present), race car evolution slider, podium badge showcases, and searchable alumni directory. |
| **Formular 230 (Tax Redirection)** | Static instructions requiring manual PDF download and separate Google Form upload. | **Interactive Form 230 Generator & Helper**: Step-by-step visual stepper with live preview, pre-filled association details, and instant download/submission. |

---

## 3. Brand & Design System (Extracted from ART TU VitePress Docs)

The design language directly translates the visual identity established on [docs.cloud.arttu-formulastudent.ro](https://docs.cloud.arttu-formulastudent.ro/):

### Color Palette
* **ART TU Racing Red (Primary Brand):**
  * Brand Base / Accent: `#d32f2f` (Primary Red)
  * Brand Dark / Active: `#b71c1c` (Deep Crimson)
  * Brand Vibrant / Highlight: `#f44336` / `#ef5350` (Vibrant Racing Red)
  * Brand Soft Glow: `rgba(211, 47, 47, 0.12)` (For badges, card glows, telemetry highlights)
* **Dark Carbon & Neutral Surfaces (Base Theme):**
  * Background Canvas: `#0d0e12` (Deep Void Jet Black)
  * Surface Card / Containers: `#16161a` / `#1e1f26` (Subtle Dark Slate)
  * Elevated Borders / Dividers: `#2e2e36` / `#383944`
  * Grid Accent: `rgba(211, 47, 47, 0.025)` (Technical telemetry CAD grid background)
* **Typography & High-Contrast Accents:**
  * Text Primary: `#ffffff` (Pure White)
  * Text Secondary / Technical Labels: `#9ca3af` / `#b6b7d5`
  * Accent Monospace / Numbers: `Space Grotesk`, `Chakra Petch`, or `Geist Mono` for telemetry and competition stats.
  * Body Sans: `Inter` or `Geist Sans`.

---

## 4. Technical Architecture Options

To guarantee instant loading speeds, effortless hosting, and maintainability, three leading architectures were evaluated:

### Option A: **Astro + React + Tailwind CSS (Recommended)**
* **Why it fits ART TU:**
  * **Zero JS by default:** Outputs pure static HTML for 95% of the site (lightning fast).
  * **Islands Architecture:** Loads interactive React components (e.g. 3D car viewer, recruitment tabs, interactive Form 230) only where needed.
  * **Content Collections:** Markdown/JSON-based content management for easy updates to competition results, team rosters, and sponsor logos without touching code.
  * **Deployment:** Generates a static build (`dist/`) that can be hosted for free on Cloudflare Pages, Vercel, GitHub Pages, or uploaded straight to the existing Hosterion web space.

### Option B: **Next.js (App Router) + React + Tailwind CSS**
* **Why it fits:**
  * React ecosystem, SSR/SSG flexibility, easy dynamic API routing (for direct newsletter/contact/form handling).
  * Great if dynamic server features (such as user accounts or internal dashboards) are added later.

### Option C: **Vite + React SPA + Tailwind CSS**
* **Why it fits:**
  * Ultra-fast client-side routing, identical tech stack to the VitePress documentation site.

---

## 5. Implementing the Interactive 3D / Spec Showcase

The user highlighted the 3D car visualization as a key visual feature. Here is the technical roadmap for implementing it:

### Implementation Approaches:

```
                  ┌──────────────────────────────────────────────┐
                  │          Interactive Car Showcase            │
                  └──────────────────────┬───────────────────────┘
                                         │
          ┌──────────────────────────────┼──────────────────────────────┐
          ▼                              ▼                              ▼
┌──────────────────┐           ┌──────────────────┐           ┌──────────────────┐
│ Approach 1 (3D)  │           │ Approach 2 (3D)  │           │ Approach 3 (2.5D)│
│  Three.js / R3F  │           │ <model-viewer>   │           │ Interactive SVG  │
│ (@react-three)   │           │ (Google WebComp) │           │ Hotspot Exploder │
├──────────────────┤           ├──────────────────┤           ├──────────────────┤
│ Full 360° orbit, │           │ Zero JS overhead,│           │ Renders high-res │
│ custom lighting, │           │ lightweight glTF,│           │ CAD/studio photos│
│ part explosion   │           │ built-in mobile  │           │ with glowing tech│
│ & hotspot clicks │           │ AR & orbit       │           │ data callouts    │
└──────────────────┘           └──────────────────┘           └──────────────────┘
```

1. **Approach 1: React Three Fiber (`@react-three/fiber` + `@react-three/drei`)**
   * Load the exported racecar CAD model (`.glb` / `.gltf`, optimized to <5MB using Draco compression).
   * Users can spin the car 360°, zoom in on the suspension, click on the battery pack to inspect cell voltage/capacity, or hover over aero wings to see downforce stats.
2. **Approach 2: Google `<model-viewer>` Component**
   * Native HTML web component: `<model-viewer src="/assets/arttu_car.glb" auto-rotate camera-controls>`
   * Works on every device, zero complex Three.js setup, has built-in mobile Augmented Reality (AR) so sponsors/students can place the car in their room.
3. **Approach 3: Interactive 2.5D Hotspot Exploder (Zero 3D asset dependency)**
   * Uses high-resolution studio/CAD renders from the existing archive (`DBV_FSBK-Day3-27`, `IMG_8623`, etc.) with interactive animated hotspot pins.
   * Clicking a pin opens a modal with department diagrams, technical specs, and student quotes.

---

## 6. Information Architecture & Page Structure

```
arttu-formulastudent.ro/ (New Sitemap)
│
├── 🏠 / (Homepage)
│   ├── Dynamic Video / Track Hero & Live Telemetry
│   ├── Infinite Sponsor Logo Marquee (Platinum & Gold)
│   ├── Key Stats Bar (0-100km/h, Battery Capacity, Trophies, Members)
│   ├── Interactive Car & Engineering Teaser
│   ├── Latest Season Highlights (FS Germany & FS Balkans 2025)
│   └── Recruitment & Sponsorship Dual Call-To-Action
│
├── 🏎️ /car (The Racecar / Engineering Deep-Dive)
│   ├── 3D / Interactive Hotspot Inspection
│   ├── Subsystem Breakdown:
│   │   ├── Aerodynamics & Chassis (Mechanical)
│   │   ├── Accumulator & Powertrain (High Voltage / BMS)
│   │   ├── Electrical & Software (Low Voltage / Telemetry)
│   │   └── Vehicle Dynamics & Simulation (Torque Vectoring / Kinematics)
│   └── Technical Specifications Table
│
├── 🤝 /partners (Sponsors & Partnerships)
│   ├── Sponsorship Value Proposition & ROI for Companies
│   ├── Direct Download: "Sponsorship Deck 2026 (PDF)"
│   ├── Tiered Showcase (Educational, Platinum, Gold, Silver, Bronze)
│   └── Partnership Contact Form
│
├── 🚀 /join (Recruitment & Student Hub)
│   ├── "Why Join ART TU?" (Culture, Industry Skills, Real-world Racing)
│   ├── Interactive Department Explorer (Mech, Aero, Electronics, Software, VD, Biz, Logistics)
│   ├── 4-Step Recruitment Process & Timeline Indicator
│   └── Integrated Application Form / FAQ
│
├── 🏆 /history (Milestones & Legacy)
│   ├── Interactive Racing Timeline (2019 → 2022 Croatia → 2024 Balkans → 2025 Germany)
│   ├── Car Evolution Gallery
│   └── Historical Leadership & Alumni Directory
│
├── 💳 /donate (Support the Team & Formularul 230)
│   ├── Interactive 3.5% Personal Income Tax Helper (Formular 230)
│   ├── Direct NGO Bank Transfer Details (BCR / IBAN)
│   └── Corporate 20% Sponsorship Sponsorship Deduction Info
│
└── 📬 /contact
    ├── Contact Information (UTCN Campus Muncii 103-105)
    ├── Direct Department Inquiries Form
    └── Social Media Hub (Instagram, LinkedIn, YouTube, Facebook)
```
