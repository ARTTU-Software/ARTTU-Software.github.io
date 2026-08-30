export interface SlideMedia {
  id: string;
  type: 'video' | 'image';
  src: string;
  webmSrc?: string;
  poster?: string;
  title: string;
  caption?: string;
  duration?: number; // Duration in ms for static images before auto-advancing
}

export const heroSlideshowMedia: SlideMedia[] = [
  {
    id: 'vid-1',
    type: 'video',
    src: '/assets/main_slideshow/main_vid_showcase.mp4',
    webmSrc: '/assets/main_slideshow/main_vid_showcase.webm',
    poster: '/assets/main_slideshow/FSB_4935.webp',
    title: 'Track Showcase & Dynamic Runs',
    caption: 'Formula Student Single-Seater in Action',
  },
  {
    id: 'vid-2',
    type: 'video',
    src: '/assets/main_slideshow/YouCut_optimized.mp4',
    webmSrc: '/assets/main_slideshow/YouCut_optimized.webm',
    poster: '/assets/main_slideshow/FSB_4935.webp',
    title: 'Paddock & Circuit Cinematography',
    caption: 'European Competition Season',
  },
  {
    id: 'img-1',
    type: 'image',
    src: '/assets/main_slideshow/FSB_4935.webp',
    title: 'Formula Student Balkans Track Action',
    caption: 'High-voltage electric powertrain on circuit',
    duration: 6000,
  },
  {
    id: 'img-2',
    type: 'image',
    src: '/assets/main_slideshow/FSB_5881.webp',
    title: 'Aerodynamic Downforce in Tight Corners',
    caption: 'Custom carbon fiber wings and vehicle dynamics',
    duration: 6000,
  },
  {
    id: 'img-3',
    type: 'image',
    src: '/assets/main_slideshow/FSB_5916.webp',
    title: 'High Speed Telemetry & Lap Execution',
    caption: 'Real-time wireless sensor data processing',
    duration: 6000,
  },
  {
    id: 'img-4',
    type: 'image',
    src: '/assets/main_slideshow/FSB_9997.webp',
    title: 'Track Performance & Braking Zone',
    caption: 'Precision regenerative and hydraulic braking',
    duration: 6000,
  },
  {
    id: 'img-5',
    type: 'image',
    src: '/assets/main_slideshow/8MD_02107.webp',
    title: 'Student Engineers in the Paddock',
    caption: 'Pre-race inspections and tire prep',
    duration: 6000,
  },
  {
    id: 'img-6',
    type: 'image',
    src: '/assets/main_slideshow/2026_main_photo.webp',
    title: 'FS Balkans 2026 Championship Victory',
    caption: '1st Place Overall Champions',
    duration: 6000,
  },
  {
    id: 'img-8',
    type: 'image',
    src: '/assets/main_slideshow/DBV_FSBK-Podium-Celebration.webp',
    title: 'Podium Celebration & Statics Sweep',
    caption: 'Best in Statics Trophy and Engineering Design',
    duration: 6000,
  },
  {
    id: 'img-9',
    type: 'image',
    src: '/assets/main_slideshow/Racecar-Accumulator-CAD.webp',
    title: '600V Accumulator & Powertrain Engineering',
    caption: 'Custom in-house battery enclosure and dual motors',
    duration: 6000,
  },
  {
    id: 'img-10',
    type: 'image',
    src: '/assets/main_slideshow/IMG_8575-Workshop.webp',
    title: 'UTCN Workshop & Hands-on Assembly',
    caption: 'Over 40 dedicated engineering students',
    duration: 6000,
  },
];
