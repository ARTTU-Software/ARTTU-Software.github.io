export type AwardCategory = 'gold' | 'silver' | 'bronze' | 'special';
export type CompetitionCategory = 'overall' | 'statics' | 'dynamics' | 'special';
export type BadgeType = 'gold' | 'silver' | 'bronze' | 'brand' | 'neutral';

export interface CompetitionResultItem {
  name: string;
  place: string;
  rank: number;
  category?: CompetitionCategory;
  points?: string;
  details?: string;
}

export interface CompetitionEvent {
  id: string;
  name: string;
  shortName: string;
  badge?: string;
  badgeType?: BadgeType;
  icon?: 'trophy' | 'flag' | 'award' | 'zap' | 'shield' | 'flame';
  circuit: string;
  location: string;
  year: number;
  mainHighlight: string;
  summary?: string;
  results: CompetitionResultItem[];
}

export interface HistoricalMilestone {
  year: number;
  name: string;
  location: string;
  badge?: string;
  highlight: string;
  awards: {
    title: string;
    position: string;
    category?: AwardCategory;
  }[];
  description: string;
}

/**
 * 2026 Season Featured Competitions List
 * To add or modify competition tabs in code, simply edit or add items to this array.
 */
export const competitionEvents: CompetitionEvent[] = [
  {
    id: 'fsBalkans',
    name: 'Formula Student Balkans 2026',
    shortName: 'FS Balkans 2026',
    badge: '1st Place Overall',
    badgeType: 'gold',
    icon: 'trophy',
    circuit: 'TNT Karting, Dej, Romania',
    location: 'TNT Karting, Dej, Romania',
    year: 2026,
    mainHighlight: '1st Place Overall Champions & Best in Statics',
    summary: 'A historic milestone for ART TU: dominating the FS Balkans Championship with a clean sweep across all static events and top dynamic performances to capture 1st Place Overall at TNT Karting Dej.',
    results: [
      { name: 'Overall Championship', place: '1st Place Overall', rank: 1, category: 'overall' },
      { name: 'Special Trophy', place: 'Best in Statics Award', rank: 1, category: 'special' },
      { name: 'Engineering Design', place: '1st Place', rank: 1, category: 'statics' },
      { name: 'Cost & Manufacturing', place: '1st Place', rank: 1, category: 'statics' },
      { name: 'Business Plan Presentation', place: '1st Place', rank: 1, category: 'statics' },
      { name: 'Autocross (Auto-X)', place: '1st Place', rank: 1, category: 'dynamics' },
      { name: 'Skidpad', place: '1st Place', rank: 1, category: 'dynamics' },
      { name: 'Endurance & Efficiency', place: '2nd Place', rank: 2, category: 'dynamics' },
    ]
  },
  {
    id: 'fsg',
    name: 'Formula Student Germany (FSG 2026)',
    shortName: 'FS Germany 2026',
    badge: 'P3 Efficiency',
    badgeType: 'bronze',
    icon: 'flag',
    circuit: 'Hockenheimring, Germany',
    location: 'Hockenheimring, Germany',
    year: 2026,
    mainHighlight: '3rd Place in Efficiency & 31st Place Overall',
    summary: 'Competing against 80+ elite international EV teams at the world-renowned Hockenheimring, ART TU achieved 3rd Place in energy efficiency and completed the 22 km endurance race.',
    results: [
      { name: 'Efficiency Event', place: '3rd Place', rank: 3, category: 'dynamics' },
      { name: 'Endurance (22 km)', place: '21st Place', rank: 21, category: 'dynamics' },
      { name: 'Overall Classification', place: '31st Place (out of 80+ EV teams)', rank: 31, category: 'overall' },
      { name: 'Auto-X (Autocross)', place: '32nd Place', rank: 32, category: 'dynamics' },
      { name: 'Cost & Manufacturing', place: '40th Place', rank: 40, category: 'statics' },
      { name: 'Engineering Design', place: '48th Place', rank: 48, category: 'statics' },
      { name: 'Business Plan Presentation', place: '60th Place', rank: 60, category: 'statics' },
    ]
  },
  {
    id: 'fsaa',
    name: 'Formula Student Alpe Adria (FSAA 2026)',
    shortName: 'FS Alpe Adria 2026',
    badge: 'P3 Efficiency • P9 Overall (Top 10)',
    badgeType: 'gold',
    icon: 'award',
    circuit: 'Bugatti Rimac Test Track / Novi Marof, Croatia',
    location: 'Novi Marof, Croatia',
    year: 2026,
    mainHighlight: '3rd Place in Fuel Efficiency & 9th Overall (Top 10)',
    summary: 'A monumental international performance: 3rd Place in Fuel Efficiency (3.298 kWh), 6th in Engineering Design, 10th in 22 km Endurance completion, and 9th Place Overall out of 42 European EV teams.',
    results: [
      { name: 'Fuel Efficiency Event', place: '3rd Place', rank: 3, details: '3.298 kWh energy consumption', category: 'dynamics' },
      { name: 'Engineering Design Event', place: '6th Place', rank: 6, category: 'statics' },
      { name: 'Overall Classification', place: '9th Place Overall (Top 10)', rank: 9, details: '42 European EV Teams', category: 'overall' },
      { name: 'Endurance Race (22 km)', place: '10th Place Finish', rank: 10, details: '26:21.883 race time', category: 'dynamics' },
      { name: 'Acceleration Event', place: '18th Place', rank: 18, details: '4.574 s sprint time', category: 'dynamics' },
      { name: 'Skidpad Event', place: '18th Place', rank: 18, details: '5.778 s cornering time', category: 'dynamics' },
      { name: 'Autocross (Auto-X)', place: '20th Place', rank: 20, details: '57.575 s lap time', category: 'dynamics' },
      { name: 'Cost & Manufacturing', place: '24th Place', rank: 24, category: 'statics' },
      { name: 'Business Plan Presentation (BPP)', place: '28th Place', rank: 28, category: 'statics' },
    ]
  }
];

/**
 * Backward compatibility dictionary mapping ID -> CompetitionEvent
 */
export const competitionHighlights2026: Record<string, CompetitionEvent> = competitionEvents.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, {} as Record<string, CompetitionEvent>);

export type CompetitionResult = HistoricalMilestone;

/**
 * Historical Timeline of ART TU (2019 - 2026)
 * Updated with TNT Karting, Dej for FS Balkans events.
 */
export const historicalTimeline: HistoricalMilestone[] = [
  {
    year: 2026,
    name: 'FS Balkans, FS Germany & FS Alpe Adria',
    location: 'TNT Karting, Dej (RO) • Hockenheimring (DE) • Novi Marof (HR)',
    badge: 'Historic Triple Podium Season',
    highlight: 'FS Balkans Overall Champions + P3 Efficiency at FSG & P3 Efficiency / P9 Overall at FSAA',
    awards: [
      { title: 'FS Balkans Overall Winner', position: 'P1', category: 'gold' },
      { title: 'FS Balkans Statics Sweep (Design, Cost, BPP, AutoX, Skidpad)', position: 'P1', category: 'gold' },
      { title: 'FS Alpe Adria Fuel Efficiency', position: 'P3', category: 'bronze' },
      { title: 'FS Germany Efficiency Event', position: 'P3', category: 'bronze' },
      { title: 'FS Alpe Adria Engineering Design', position: 'P6', category: 'silver' },
      { title: 'FS Alpe Adria Overall Classification', position: 'P9', category: 'gold' },
      { title: 'FS Alpe Adria 22 km Endurance Finish', position: 'P10', category: 'special' },
      { title: 'FS Germany Endurance Finish', position: 'P21', category: 'special' },
    ],
    description: 'A defining golden year for ART TU: dominating the Balkans Championship with a clean sweep, securing podiums in Efficiency at Hockenheimring and Alpe Adria, and breaking into the European Top 10 Overall (P9) at FSAA 2026.'
  },


  {
    year: 2025,
    name: 'Formula Student Germany & FS Balkans',
    location: 'Hockenheimring, Germany & TNT Karting, Dej',
    badge: 'Hockenheim Scrutineering Pass',
    highlight: 'First-ever Scrutineering Pass + Full Endurance Completion at FSG',
    awards: [
      { title: 'FS Balkans Engineering Design', position: 'P1', category: 'gold' },
      { title: 'FS Balkans Cost & Manufacturing', position: 'P1', category: 'gold' },
      { title: 'FS Balkans Business Plan', position: 'P1', category: 'gold' },
      { title: 'FS Balkans Endurance & Efficiency', position: 'P2', category: 'silver' },
      { title: 'FS Germany Endurance Event', position: 'P28', category: 'special' },
      { title: 'FS Germany Overall', position: 'P59', category: 'special' },
    ],
    description: 'Milestone season passing all technical inspections at Hockenheim and finishing the grueling 22 km endurance race where over 50% of global teams DNF\'d.'
  },
  {
    year: 2024,
    name: 'FS Balkans & FS Czech Republic',
    location: 'TNT Karting, Dej & Autodrom Most, Czech Republic',
    badge: 'Podium Finish',
    highlight: 'P3 Overall at FS Balkans & Mechanical Scrutineering Pass at FS Czech',
    awards: [
      { title: 'FS Balkans Overall', position: 'P3', category: 'bronze' },
      { title: 'Engineering Design', position: 'P1', category: 'gold' },
      { title: 'Business Plan Presentation', position: 'P1', category: 'gold' },
      { title: 'Cost & Manufacturing', position: 'P2', category: 'silver' },
    ],
    description: 'Secured overall podium at the inaugural official edition of FS Balkans at TNT Karting Dej while refining high-voltage and dynamic setups.'
  },
  {
    year: 2023,
    name: 'FS Czech Republic & FS Balkans Pilot',
    location: 'Autodrom Most, Czech Republic & TNT Karting, Dej',
    badge: 'Evolution',
    highlight: 'P28 out of 37 Electric Vehicles at FS Czech',
    awards: [
      { title: 'FS Czech EV Overall', position: 'P28', category: 'special' },
      { title: 'FS Balkans Pilot Participation', position: 'Completed', category: 'special' },
    ],
    description: 'Introduced advanced aerodynamic package refinements and enhanced chassis stiffness during competition trials at TNT Karting Dej and Most.'
  },
  {
    year: 2022,
    name: 'Formula Student Alpe Adria',
    location: 'Novi Marof, Croatia',
    badge: 'Pioneers',
    highlight: '1st Romanian Electric Vehicle in Formula Student History',
    awards: [
      { title: 'EV Classification', position: 'P25 / 31', category: 'special' },
      { title: 'Historic Milestone', position: '1st RO EV Car', category: 'gold' },
    ],
    description: 'Made motorsport history as the first university racing team in Romania to design and compete with a fully electric single-seater.'
  },
  {
    year: 2019,
    name: 'Team Founding at UTCN',
    location: 'Cluj-Napoca, Romania',
    badge: 'Origin',
    highlight: 'Initiated by 20 passionate engineering students',
    awards: [
      { title: 'Concept Finalization', position: 'Approved', category: 'special' },
    ],
    description: 'Founded at the Technical University of Cluj-Napoca with the bold vision to build high-performance electric racing vehicles.'
  }
];
