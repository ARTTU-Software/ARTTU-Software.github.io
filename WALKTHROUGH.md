# ART TU Formula Student — Redesign & Multi-Page Walkthrough

The website has been completely re-architected from a text-heavy single-page layout into a **modern, multi-page motorsport web application** inspired by world-class Formula Student teams (**AMZ Racing**, **FS Team Delft**, **TUfast Munich**).

---

## 🏆 1. Design Inspiration & Global Benchmarks

We surveyed and benchmarked leading global Formula Student teams to guide ART TU’s new visual identity:

### 1. **AMZ Racing (ETH Zürich)** — [amzracing.ch](https://www.amzracing.ch/en)
* **Philosophy:** Minimalist, editorial typography, full-bleed cinematic race photography.
* **Key Takeaway:** Curated homepage that acts as a visual invitation rather than a wall of text, with dedicated vehicle and history subpages.

### 2. **FS Team Delft (TU Delft)** — [fsteamdelft.nl](https://www.fsteamdelft.nl/)
* **Philosophy:** High-contrast modern European engineering aesthetic with generous whitespace and clear corporate sponsor tiers.
* **Key Takeaway:** Dedicated recruitment gateway with step-by-step application timeline.

### 3. **TUfast Racing (TU Munich)** — [tufast-racingteam.de](https://tufast-racingteam.de/)
* **Philosophy:** Deep motorsport styling with dark backgrounds, sharp red accent lines, and high-energy workshop/testing photography.

---

## 🏎️ 2. New Multi-Page Architecture & Route Directory

The new site is structured across dedicated routes using React Router:

| Route | Page | Purpose & Content |
| :--- | :--- | :--- |
| **`/`** | **Home** | Cinematic hero with real track backdrop, 2026 Champion Badge, KPI bar, "Who We Are" story with full team photo, top partner marquee, and 3-card gateway. |
| **`/car`** | **The Racecar** | High-res vehicle gallery, full 2026 technical specifications matrix, and interactive subsystem cards (Aerodynamics, 600V Battery, Suspension, Dual Motors, LV Electronics). |
| **`/competitions`** | **2026 Glory & Heritage** | Interactive tabbed showcase for **FS Balkans 2026 (1st Place Overall)**, **FS Germany 2026 (3rd Efficiency)**, **FSAA 2026**, chronological timeline (2019–2026), and leadership directory. |
| **`/departments`** | **Departments** | Dedicated breakdowns for all 6 departments with real workshop action photography, responsibilities, skills learned, and software tools (`CATIA`, `Ansys`, `Altium`, `Simulink`). |
| **`/recruitment`** | **Recruitment** | 4-step recruitment roadmap, candidate application form, student life culture gallery, and FAQ. |
| **`/partners`** | **Partners & Sponsors** | Structured tier showcase (Educational, Platinum, Gold, Silver), corporate value proposition, and 1-click **"Download 2026 Sponsorship Deck (PDF)"**. |
| **`/support`** | **Support & Formular 230** | Step-by-step guide for Romanian employees to redirect 3.5% of income tax + BCR NGO bank details with 1-click IBAN copy. |
| **`/contact`** | **Contact & Workshop** | UTCN B-dul Muncii campus workshop address, inquiry form, and official social media channels. |

---

## 📸 3. Real Imagery & Authentic Storytelling

We replaced generic placeholder text with **real high-resolution photography** from the team’s archive:
* **Hero Background:** Action shot of the ART TU electric single-seater cornering on track (`DBV_FSBK-Day3-27-1-scaled.jpg`).
* **Team Story:** Full team photo celebrating at the FS Balkans championship (`DBV_FSBK-Groups-8-1-1-scaled.jpg`).
* **Technical Scrutineering & Workshop:** Real photos of students at Hockenheim scrutineering, pit garage testing, and composite manufacturing.

---

## 🖥️ 4. Local Interactive Preview

The Vite dev server is running live with instant hot-reloading:

👉 **[http://localhost:5173/](http://localhost:5173/)**
