# ART TU Formula Student Website — Development Guidelines & Visual Overview

## 🏁 1. Core Mission & Objectives
This project is the complete redesign and development of the **ART TU Cluj-Napoca Formula Student Team** (Technical University of Cluj-Napoca / UTCN) official website.

The goal is an **elite, modern, multi-page motorsport website** that reflects the high standards and prestige of top Formula Student teams (e.g. AMZ Racing, FS Team Delft, TUfast).

### Key Content Priorities:
1. **Competition Glory & Milestones:** Highlight team achievements (FS Balkans 1st Overall, FS Germany Hockenheimring, FS Alpe Adria, etc.).
2. **Sponsor & Partner Visibility:** Clear tiering (Educational, Platinum, Gold, Silver, Bronze, Supporter), marquee, and sponsorship deck access.
3. **Student Recruitment Portal:** Recruitment steps, department expectations, and application flow.
4. **Racecars & Engineering Specs:** CAD, track photos, technical specification matrix, and car evolution across seasons.
5. **Community, Events & Formularul 230:** Team rollouts, university events, public expos, 3.5% tax redirection helper, and NGO support.

---

## 🎨 2. Visual & Aesthetic Principles

- **Motorsport & Engineering Focus:**
  - Modern, dynamic motorsport layout with high visual polish.
  - Multi-page routing with rich sections, clean spacing, and well-structured cards.
- **Photography First:**
  - Real high-resolution imagery from the team archive (`public/assets/`): race track action, team celebrations, pit scrutineering, and workshop assembly.
- **Design System & Color Scheme:**
  - **Site Base Surfaces:** `#f9f9fb` / `#f3f4f6` (`bg-warm-100`), `#ffffff` (`bg-white` cards), `#e5e7eb` (`border-warm-250`).
  - **ART TU Racing Red:** `#d32f2f` (Primary), `#b71c1c` (Crimson), `#f44336` (Vibrant Accent).
  - **Typography & Accents:** `#111827` (`text-warm-900` headings), `#4b5563` (`text-warm-700` body), and monospace font for telemetry/metrics.
- **Motion & Animation Guidelines:**
  - Standard scroll entrance: Use `<ScrollReveal direction="up" duration={600} delay={...}>` from `src/components/motion/ScrollReveal`.
  - Direction variants: `up` (standard headers/cards), `left` / `right` (split layout columns), `scale` (interactive hero components / showcase boxes).
  - Staggered items: Increase delay incrementally (e.g. `delay={idx * 80}` or `delay={100 + idx * 50}`).

---

## 👁️ 3. Quality & Verification Workflow

1. **Build Verification:** Run `npm run build` (`tsc -b && vite build`) to ensure zero type errors.
2. **Visual Inspection:**
   - For major features and new page layouts, verify visually using the inspection tool (`npm run inspect -- --route=<path> --screenshot` or `npm run inspect -- --check-all`).
   - For minor tweaks and content updates, standard build and quick validation is sufficient.

---

## 🛠️ 4. Tech Stack & Commands

- **Tech Stack:** React 18 + TypeScript + Vite 5 + Tailwind CSS + React Router 7 + Lucide Icons
- **Local Dev Server:** `npm run dev` or `npx vite --port 5173 --host`
- **Production Build:** `npm run build`
- **Inspection & Testing:** `npm run inspect -- --route=/events` (optional `--screenshot` for major features)

---

## 🎨 5. Creative Direction & Anti-Slop Guidelines

To prevent generic AI patterns and maintain authentic, high-impact motorsport art direction:

1. **Abolish the Card Container Trap:**
   - Avoid boxing standard text into repetitive white cards with borders (`bg-white rounded-2xl border p-8`).
   - Let typography, negative space, and large imagery structure the layout directly on the background canvas.

2. **Heroic Imagery Over Thumbnails:**
   - Authentic track, podium, and workshop photos must be given scale (320px–420px tall widescreen frames).
   - Never shrink high-emotion moments into tiny thumbnail squares inside cards.

3. **Strict Ban on AI Tells:**
   - **Zero Emojis:** Never use emojis (no 🏆, ⚡, 🏎️).
   - **Zero Em Dashes:** Avoid em dashes (`—`). Use clean punctuation (colons, periods, or simple clean breaks).
   - **Zero Fake Programmer Decoration:** Do not fake "technical" depth with arbitrary brackets (`[PAD.01]`), coordinates, frame codes, or double slashes (`//`) unless specifically requested.

4. **Copy Restraint ("Less is More"):**
   - Do not bloat copy with generated filler paragraphs. Respect the team's concise, authentic tone.

5. **Living Atmospheric Backgrounds:**
   - Use dynamic, continuous ambient elements (animated SVG aerodynamic streamlines, slow floating blurred light orbs, faint brand-red glows) to guide the user's eye through the page without visual noise.

6. **Kinetic Re-engagement:**
   - When using scroll reveal animations, set `triggerOnce={false}` (or `once={false}`) so the viewport remains reactive, dynamic, and fluid when users scroll up and down.

7. **Tight Vertical Rhythm:**
   - Maintain compact section spacing (`space-y-16 sm:space-y-20`) so that image and accompanying text land together in standard viewports without endless scrolling fatigue.

8. **Ban on Fake Technical Gadgets & Dashboard Clutter:**
   - Do not insert simulated analog dials, speedometers, live telemetry progress bars, or fake software dashboards into editorial and storytelling sections.
   - The site must feel like an elite, high-end motorsport publication (human, emotional, clean), NOT an embedded engineer's debugging console or telemetry software.

9. **Copy Integrity in Typographic Styling:**
   - When using typographic collision (pairing bold display sans with expressive italics), ALWAYS use the team's exact authentic phrasing (e.g. *"STUDENT ENGINEERING. International motorsport."*).
   - Never replace existing team copy with synthetic AI slogans or rewritten marketing filler.


