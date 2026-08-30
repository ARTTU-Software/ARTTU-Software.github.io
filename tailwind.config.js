/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d32f2f',
          darkRed: '#b71c1c',
          brightRed: '#ef4444',
          vibrant: '#f87171',
          glow: 'rgba(211, 47, 47, 0.15)',
        },
        warm: {
          50: '#fdfcfb',
          100: '#faf8f5',
          150: '#f5f2eb',
          200: '#f0ece3',
          250: '#e9e3d7',
          300: '#dfd8ca',
          400: '#c2b9a7',
          500: '#8c8270',
          800: '#2d2a26',
          900: '#1c1917',
        },
        carbon: {
          950: '#0a0b0e',
          900: '#0d0e12',
          850: '#121318',
          800: '#16171d',
          700: '#1e2029',
          600: '#282b37',
          500: '#383c4d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'cyber-glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'radar-shimmer': 'radar-shimmer 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'cyber-glitch': {
          '0%': { textShadow: '0 0 transparent', transform: 'translate(0, 0)' },
          '20%': { textShadow: '-1.5px 0 #ef4444, 1.5px 0 #06b6d4', transform: 'translate(-1px, 0.5px)' },
          '40%': { textShadow: '1.5px 0 #ef4444, -1.5px 0 #06b6d4', transform: 'translate(1px, -0.5px)' },
          '60%': { textShadow: '-1px 0 #d32f2f, 1px 0 #3b82f6', transform: 'translate(0.5px, 0)' },
          '80%': { textShadow: '1px 0 #d32f2f, -1px 0 #3b82f6', transform: 'translate(-0.5px, 0)' },
          '100%': { textShadow: '0 0 transparent', transform: 'translate(0, 0)' },
        },
        'radar-shimmer': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(250%) skewX(-20deg)' },
        },
      },
    },
  },
  plugins: [],
}
