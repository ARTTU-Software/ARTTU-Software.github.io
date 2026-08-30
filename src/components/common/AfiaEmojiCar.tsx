import React from 'react';

export interface AfiaEmojiCarProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * 🏎️ AfiaEmojiCar — Custom Formula Student Racecar Emoji
 * Handcrafted vector SVG based on ART TU Cluj-Napoca's current championship car:
 * Afia (ART-26 EV) #17
 *
 * Features:
 * - Carbon fiber monocoque with ART TU Red racing livery & gloss sheen
 * - Signature tall rear wing endplate with bold white #17 & red swoosh
 * - Multi-element front wing with red splitter lip & vertical endplates
 * - Driver in cockpit with ART TU white helmet & glossy tinted visor
 * - Exposed pushrod suspension with red coilover spring
 * - Chunky Hoosier slick racing tires with multi-spoke rims & red center hubs
 * - White panther mascot decal on the nosecone
 */
export const AfiaEmojiCar: React.FC<AfiaEmojiCarProps> = ({
  className = '',
  width = 76,
  height = 44,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none transition-transform ${className}`}
      aria-label="Afia ART-26 EV Formula Student Emoji"
    >
      <defs>
        {/* Carbon Bodywork Gradient */}
        <linearGradient id="afia-carbon-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32363e" />
          <stop offset="40%" stopColor="#1c1e24" />
          <stop offset="100%" stopColor="#0c0d10" />
        </linearGradient>

        {/* ART TU Signature Red Livery Gradient */}
        <linearGradient id="afia-red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>

        {/* Front Splitter / Accent Red Gradient */}
        <linearGradient id="afia-red-bright" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff4343" />
          <stop offset="100%" stopColor="#c51616" />
        </linearGradient>

        {/* Driver White Helmet Sphere Gradient */}
        <radialGradient id="afia-helmet-grad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>

        {/* Visor Glare Gradient */}
        <linearGradient id="afia-visor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="25%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Tire Rubber Gradient */}
        <radialGradient id="afia-tire-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3f3f46" />
          <stop offset="60%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </radialGradient>

        {/* Wheel Rim Gradient */}
        <radialGradient id="afia-rim-grad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="70%" stopColor="#27272a" />
          <stop offset="100%" stopColor="#18181b" />
        </radialGradient>

        {/* Emoji Drop Shadow Filter */}
        <filter id="afia-emoji-shadow" x="-15%" y="-15%" width="130%" height="135%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.32" />
        </filter>
      </defs>

      {/* Group with Emoji Drop Shadow */}
      <g filter="url(#afia-emoji-shadow)">

        {/* =================================================================== */}
        {/* 🏁 1. UNDERBODY & CHASSIS FLOOR                                     */}
        {/* =================================================================== */}
        {/* Underbody Carbon Floor / Diffuser */}
        <path
          d="M 8 30 L 66 30 C 67.5 30, 68.5 30.8, 68 32 L 67 32.5 L 7 32.5 Z"
          fill="#09090b"
          stroke="#18181b"
          strokeWidth="0.8"
        />

        {/* Rear Wing Support Pylons (Behind Car) */}
        <path d="M 10 11 L 18 24 L 14.5 24 L 8 11 Z" fill="#18181b" />
        <path d="M 14 13 L 20 24" stroke="#27272a" strokeWidth="1.6" strokeLinecap="round" />

        {/* Rear Wing Multi-Flap Elements */}
        <rect x="7" y="7.5" width="14" height="3.5" rx="1.5" fill="#18181b" stroke="#27272a" strokeWidth="0.8" />
        <rect x="8" y="12" width="11" height="2.5" rx="1.2" fill="#0f172a" />

        {/* =================================================================== */}
        {/* 🚩 2. REAR WING ENDPLATE (Afia #17 Signature Aero)                   */}
        {/* =================================================================== */}
        <g>
          {/* Main Endplate Contour */}
          <path
            d="M 5 6.5 C 5 5, 6.2 4, 8 4 L 17 4 C 18.5 4, 19.5 5.2, 19 7.5 L 17.2 18 C 16.8 19.8, 15.2 21.5, 13.5 22 L 4 22 C 3.2 22, 2.8 21.2, 3.2 20.2 L 5 6.5 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="1"
          />

          {/* Dynamic Red Swoosh Livery Stripe on Endplate */}
          <path
            d="M 4.2 17 C 7 17, 12 16, 16.5 9 L 17.8 10.8 C 14 18, 8 20.5, 3.6 20.5 Z"
            fill="url(#afia-red-grad)"
          />
          <path
            d="M 3.6 20.5 L 13.5 20.5 C 14.5 20.5, 15.5 19.8, 16 19 L 16.6 20.5 C 15.2 21.6, 14 21.8, 12.5 21.8 L 3.6 21.8 Z"
            fill="#dc2626"
          />

          {/* Bold White #17 Race Number */}
          <text
            x="11.2"
            y="13.5"
            fill="#ffffff"
            fontSize="6.8"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
            letterSpacing="-0.4px"
          >
            17
          </text>

          {/* Top Wing Gurney Flap (ART Red Accent) */}
          <rect x="5.5" y="3.5" width="12.5" height="1.6" rx="0.8" fill="#ef4444" />
        </g>

        {/* =================================================================== */}
        {/* 🏎️ 3. REAR SUSPENSION WISHBONES                                     */}
        {/* =================================================================== */}
        <line x1="18" y1="25" x2="25" y2="22" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="28.5" x2="24" y2="29.5" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" />

        {/* =================================================================== */}
        {/* 🏎️ 4. MAIN MONOCOQUE CHASSIS & BODYWORK                              */}
        {/* =================================================================== */}
        {/* Main Monocoque Body Silhouette */}
        <path
          d="M 16 24 
             C 16 19.5, 20.5 17, 26 17 
             L 30.5 17 
             C 35 17, 41 18.5, 48.5 21.5 
             L 61.5 26.5 
             C 64.5 27.5, 64.5 29.8, 61.5 30.5 
             L 17 30.5 
             C 15 30.5, 15 27, 16 24 Z"
          fill="url(#afia-carbon-grad)"
          stroke="#09090b"
          strokeWidth="1.1"
        />

        {/* Sidepod Aero Indentation */}
        <path
          d="M 23.5 22.5 C 27 21, 33 21, 37.5 22.5 L 37 28.5 L 23 28.5 Z"
          fill="#111317"
          stroke="#27272a"
          strokeWidth="0.6"
        />

        {/* Signature ART TU Red Speed Stripe (Across Flank to Nose) */}
        <path
          d="M 17 25.5 
             C 23 22, 30.5 21.2, 39.5 23.8 
             L 60.5 28.2 
             L 59.5 29.6 
             L 38.5 25.5 
             C 29.5 23.2, 23 24, 16.5 27.2 Z"
          fill="url(#afia-red-grad)"
        />

        {/* Upper Red Shoulder Highlight Stripe */}
        <path
          d="M 27 18.5 L 34.5 18.5 C 41 20, 49 22.8, 56.5 26.5 L 55 27.6 C 48 24, 40.5 21.2, 34.5 19.8 L 27 19.8 Z"
          fill="#ff4d4d"
          opacity="0.9"
        />

        {/* Polished Gelcoat Specular Arc Highlight */}
        <path
          d="M 30.5 18 C 38 18.5, 47 21, 55 24.5"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* White Panther Mascot Silhouette on Nose Flank */}
        <g transform="translate(48, 24) scale(0.75)">
          <path
            d="M 1 4 C 1.5 2, 3.2 1, 5 1 C 6.8 1, 8.5 2.2, 9.5 3.5 C 10.5 4.8, 11 6.5, 10 7.5 C 8.5 8.5, 6.5 8, 5 7.2 C 3.5 6.8, 2 7.2, 1 6.2 C 0.5 5.5, 0.5 4.5, 1 4 Z"
            fill="#ffffff"
            opacity="0.95"
          />
          <polygon points="3.5,1 4.8,0 5.2,1.2" fill="#ffffff" />
          <circle cx="7.2" cy="3.6" r="0.6" fill="#ef4444" />
        </g>

        {/* Team Sub-Badge "TU CLUJ" */}
        <text
          x="29.5"
          y="26"
          fill="#f1f5f9"
          fontSize="2.8"
          fontWeight="900"
          fontFamily="monospace"
          letterSpacing="0.3px"
          opacity="0.85"
        >
          ART•TU
        </text>

        {/* =================================================================== */}
        {/* 🏁 5. TUBULAR ROLL HOOP & DRIVER COCKPIT                            */}
        {/* =================================================================== */}
        {/* Main Tubular Steel Roll Hoop */}
        <path
          d="M 24.5 18 L 26.2 8.5 C 26.8 7, 28.5 6.8, 29.8 7.8 L 31.5 18"
          stroke="#18181b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 25.5 17 L 27 9.5 C 27.4 8.5, 28.5 8.2, 29.2 9 L 30.5 17"
          stroke="#3f3f46"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />

        {/* Headrest Foam Support */}
        <rect x="23.5" y="13" width="3" height="5.5" rx="1.2" fill="#09090b" />

        {/* Cockpit Opening Recess */}
        <ellipse cx="31" cy="18" rx="6.5" ry="2" fill="#09090b" stroke="#27272a" strokeWidth="0.8" />

        {/* Driver Red Racing Harness */}
        <path d="M 27 17.5 C 27.5 15, 32.5 15, 34 17.5 Z" fill="#dc2626" />
        <line x1="29" y1="16.5" x2="29.5" y2="18.5" stroke="#ffffff" strokeWidth="0.7" />
        <line x1="31.8" y1="16.5" x2="31.2" y2="18.5" stroke="#ffffff" strokeWidth="0.7" />

        {/* 👨‍🚀 Official ART TU White Racing Driver Helmet */}
        <g>
          {/* Spherical Helmet */}
          <circle cx="30.5" cy="12" r="5.8" fill="url(#afia-helmet-grad)" stroke="#64748b" strokeWidth="0.7" />

          {/* Romanian & ART Red / Blue Helmet Accent Stripe */}
          <path d="M 25.6 12.5 C 26 15, 27.8 16.2, 29.5 16.8" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 25.5 11 C 26 12.5, 27.2 13.8, 28.5 14.5" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" />

          {/* Glossy Tinted Visor */}
          <path
            d="M 29.5 9.8 
               C 32.2 9.4, 35 10.5, 35.8 12.5 
               C 36.2 13.5, 35.4 14.6, 34 14.8 
               C 31.8 15, 30 14.2, 29.5 12.5 Z"
            fill="url(#afia-visor-grad)"
            stroke="#0f172a"
            strokeWidth="0.7"
          />

          {/* Cute Visor Gloss Reflection Glint */}
          <path
            d="M 31 10.8 C 33 10.8, 34.6 11.6, 35.2 12.8"
            stroke="#ffffff"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="34.8" cy="12.5" r="0.7" fill="#ffffff" />
        </g>

        {/* =================================================================== */}
        {/* 🏎️ 6. FRONT SUSPENSION & RED COIL SPRING (Pushrod Geometry)          */}
        {/* =================================================================== */}
        {/* Front Wishbones (A-Arms) */}
        <line x1="47" y1="26" x2="55" y2="24" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="46" y1="29.5" x2="55" y2="30.5" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="49" y1="23" x2="55" y2="29.5" stroke="#71717a" strokeWidth="0.9" />

        {/* Characteristic Bright Red Pushrod Coilover Spring */}
        <g transform="translate(47.5, 22.5) rotate(-22)">
          <rect x="0" y="0" width="1.8" height="7.5" rx="0.9" fill="#18181b" />
          <path
            d="M -0.5 1.5 Q 2.3 1.5 2.3 2.7 Q -0.5 2.7 -0.5 3.9 Q 2.3 3.9 2.3 5.1 Q -0.5 5.1 -0.5 6.3"
            stroke="#ef4444"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* =================================================================== */}
        {/* 🏁 7. FRONT WING & SPLITTER ASSEMBLY                                 */}
        {/* =================================================================== */}
        <g>
          {/* Front Wing Bottom Red Splitter Lip */}
          <path
            d="M 56 32 L 72 32 C 73 32, 73.6 31.4, 73.6 30.2 L 72.5 30.2 L 56 30.2 Z"
            fill="url(#afia-red-bright)"
          />

          {/* Front Wing Carbon Elements */}
          <path
            d="M 58 28.5 L 70 28.5 C 71.2 28.5, 71.8 29.3, 71.2 30.2 L 57.5 30.2 Z"
            fill="#18181b"
            stroke="#27272a"
            strokeWidth="0.6"
          />
          <path
            d="M 60 26.6 L 68 26.6 C 68.8 26.6, 69.2 27.3, 68.8 28 L 59.5 28 Z"
            fill="#27272a"
          />

          {/* Front Wing Vertical Endplate */}
          <path
            d="M 64.5 25.5 C 64.5 25, 65 24.5, 65.8 24.5 L 71 24.5 C 72.4 24.5, 73 25.6, 72.7 27.2 L 71.8 31.2 C 71.5 32.2, 70.6 32.8, 69.6 32.8 L 65 32.8 C 64.4 32.8, 64.2 32.2, 64.4 31.4 Z"
            fill="#18181b"
            stroke="#3f3f46"
            strokeWidth="0.7"
          />

          {/* Red Endplate Tip Accent */}
          <path
            d="M 64.8 31.8 L 71 31.8 C 71.6 31.8, 72 31.4, 72.3 30.6 L 72.5 31.5 C 72.2 32.4, 71.4 32.8, 70.4 32.8 L 64.8 32.8 Z"
            fill="#ef4444"
          />
        </g>

        {/* Telemetry Antenna / Nose Camera Pin */}
        <line x1="53" y1="23.5" x2="53" y2="21" stroke="#18181b" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="53" cy="20.5" r="0.7" fill="#ef4444" />

        {/* =================================================================== */}
        {/* 🔘 8. REAR WHEEL (Chunky Hoosier Slick + Alloy Rim + Red Center Nut) */}
        {/* =================================================================== */}
        <g transform="translate(18, 29.5)">
          {/* Tire Rubber Outer Body */}
          <circle cx="0" cy="0" r="8.5" fill="url(#afia-tire-grad)" stroke="#09090b" strokeWidth="0.9" />
          
          {/* Gloss Rubber Shoulder Reflection */}
          <path
            d="M -6 -5 C -4 -7.2, 2.5 -7.8, 6 -5"
            stroke="#71717a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* White "HOOSIER" Tire Lettering Arc */}
          <path
            d="M -5.5 4 C -3.5 6.5, 3 6.5, 5.5 3.8"
            stroke="#f8fafc"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeDasharray="1.4 1.1"
            opacity="0.9"
          />

          {/* Outer Rim Ring */}
          <circle cx="0" cy="0" r="5.4" fill="url(#afia-rim-grad)" stroke="#52525b" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="4.1" fill="#18181b" />

          {/* Multi-Spoke Alloy Star */}
          <g stroke="#71717a" strokeWidth="0.85" strokeLinecap="round">
            <line x1="0" y1="0" x2="0" y2="-3.9" />
            <line x1="0" y1="0" x2="3.7" y2="-1.2" />
            <line x1="0" y1="0" x2="2.3" y2="3.2" />
            <line x1="0" y1="0" x2="-2.3" y2="3.2" />
            <line x1="0" y1="0" x2="-3.7" y2="-1.2" />
          </g>

          {/* Anodized Red Center Hub Nut */}
          <circle cx="0" cy="0" r="1.8" fill="#ef4444" stroke="#991b1b" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="0.7" fill="#fef2f2" />
        </g>

        {/* =================================================================== */}
        {/* 🔘 9. FRONT WHEEL (Chunky Hoosier Slick + Alloy Rim + Red Center Nut)*/}
        {/* =================================================================== */}
        <g transform="translate(54, 29.5)">
          {/* Tire Rubber Outer Body */}
          <circle cx="0" cy="0" r="8.5" fill="url(#afia-tire-grad)" stroke="#09090b" strokeWidth="0.9" />
          
          {/* Gloss Rubber Shoulder Reflection */}
          <path
            d="M -6 -5 C -4 -7.2, 2.5 -7.8, 6 -5"
            stroke="#71717a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
          />

          {/* White "HOOSIER" Tire Lettering Arc */}
          <path
            d="M -5.5 4 C -3.5 6.5, 3 6.5, 5.5 3.8"
            stroke="#f8fafc"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeDasharray="1.4 1.1"
            opacity="0.9"
          />

          {/* Outer Rim Ring */}
          <circle cx="0" cy="0" r="5.4" fill="url(#afia-rim-grad)" stroke="#52525b" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="4.1" fill="#18181b" />

          {/* Multi-Spoke Alloy Star */}
          <g stroke="#71717a" strokeWidth="0.85" strokeLinecap="round">
            <line x1="0" y1="0" x2="0" y2="-3.9" />
            <line x1="0" y1="0" x2="3.7" y2="-1.2" />
            <line x1="0" y1="0" x2="2.3" y2="3.2" />
            <line x1="0" y1="0" x2="-2.3" y2="3.2" />
            <line x1="0" y1="0" x2="-3.7" y2="-1.2" />
          </g>

          {/* Anodized Red Center Hub Nut */}
          <circle cx="0" cy="0" r="1.8" fill="#ef4444" stroke="#991b1b" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="0.7" fill="#fef2f2" />
        </g>

      </g>
    </svg>
  );
};

export default AfiaEmojiCar;
