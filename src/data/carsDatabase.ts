/**
 * ============================================================================
 * 🏎️ ART TU RACE CARS DATABASE (Single Source of Truth)
 * ============================================================================
 * Centralized data repository for all ART TU Formula Student racecars:
 * - Current Active Champion Single-Seater (Afia / ART-26 EV)
 * - Historical Competition Generations (ART-25 EV, ART-24 EV, ART-22 EV, Concept ART-01)
 *
 * Editing any car name, spec, or photo here automatically propagates to:
 * - The Car Page (/car)
 * - Interactive Timeline & History (/history)
 * - Rollout & Outreach Events (/events)
 * - Team Alumni & Generations (/history?view=alumni)
 */

export interface CarSpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CarSpecGroup {
  category: string;
  items: { label: string; value: string }[];
}

export interface CarHotspot {
  id: string;
  name: string;
  department: string;
  x: number; // percentage from left
  y: number; // percentage from top
  headline: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface CarAward {
  title: string;
  position: string;
  category: 'gold' | 'silver' | 'bronze' | 'special';
}

export interface CarRecord {
  id: string;
  /** Full official name e.g. "Afia (ART-26 EV)" */
  name: string;
  /** Short model code e.g. "Afia" or "ART-26" */
  shortName: string;
  /** Generation designation e.g. "ART-26 EV" */
  generationCode: string;
  /** Season span e.g. "2025 - 2026" */
  seasonSpan: string;
  /** Short year badge e.g. "'26" */
  shortYear: string;
  /** Whether this is the active current season single-seater */
  isCurrentCar: boolean;
  /** Status badge text */
  status: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'brand';

  /** Primary high-resolution photograph */
  image: string;
  /** High-resolution fallback photo */
  fallbackImage: string;
  /** Short photo caption */
  imageCaption: string;
  imagePosition?: string;

  /** Engineering / Vehicle Overview (Focused purely on engineering rather than competition awards) */
  engineeringOverview?: string;

  /** Narrative & headlines */
  title: string;
  tagline: string;
  description: string;
  circuitLocation: string;
  innovations: string[];
  awards: CarAward[];

  /** Key Performance Indicators */
  kpis: {
    accelerationSec: number;
    accelerationStr: string;
    topSpeedKmh: number;
    topSpeedStr: string;
    peakPowerKw: number;
    peakPowerStr: string;
    packVoltageV: number;
    packVoltageStr: string;
    vehicleMassKg: number;
    vehicleMassStr: string;
    downforceN: number;
    downforceStr: string;
    torqueNm: number;
    torqueStr: string;
  };

  /** Detailed technical specifications */
  technicalSpecs: {
    weight: string;
    power: string;
    topSpeed: string;
    accel?: string;
    voltage: string;
    batteryCells: string;
    motors: string;
    torque: string;
    downforce: string;
    dimensions: string;
    driveType: string;
    tyres: string;
    chassis?: string;
    bms?: string;
    telemetry?: string;
    suspension?: string;
  };

  /** Structured spec groups for /car technical matrix */
  specGroups: CarSpecGroup[];

  /** Interactive CAD hotspots for /car */
  hotspots?: CarHotspot[];

  /** SVG Circuit Track visual markers for /history */
  trackProgress: number;
  circuitTurn: string;
}

/**
 * ============================================================================
 * 🏎️ THE CARS DATABASE
 * ============================================================================
 */
export const CARS_DATABASE: Record<string, CarRecord> = {
  // --------------------------------------------------------------------------
  // 1. AFIA (ART-26 EV) - Season 2025-2026 (CURRENT CHAMPION)
  // --------------------------------------------------------------------------
  'afia-art26': {
    id: 'afia-art26',
    name: 'ART26',
    shortName: 'ART26',
    generationCode: 'ART26',
    seasonSpan: '2025 - 2026',
    shortYear: "'26",
    isCurrentCar: true,
    status: 'Latest Generation',
    badgeType: 'gold',

    image: '/assets/IMG_7408.webp',
    fallbackImage: '/assets/2026_main_photo.webp',
    imageCaption: 'Afia (ART-26 EV) • 200V custom battery, full carbon aerodynamic package, and live telemetry streaming.',
    imagePosition: 'object-[center_35%]',
    engineeringOverview:
      "Afia is our high-voltage electric formula single-seater, engineered in-house with a custom 200V lithium-ion accumulator, dual permanent magnet motors, full carbon-fiber aerodynamics package, and integrated CAN-bus telemetry.",


    title: 'Podium Competing Single-Seater',
    tagline: '1st Place Overall Champions at FS Balkans, P3 Efficiency at Hockenheim & P3 Efficiency / P9 Overall at FS Alpe Adria',
    description:
      'The 2025-2026 season marks the start of performance engineering at ART TU. Afia dominated Formula Student Balkans 2026 at TNT Karting Dej with a clean sweep of all static events and top dynamic speed, crowned with 1st Place Overall Championship, followed by 3rd in Efficiency at Hockenheim, and 3rd in Efficiency, 6th in Engineering Design, and 9th Overall at Formula Student Alpe Adria (Croatia).',
    circuitLocation: 'TNT Karting, Dej (Romania) • Hockenheimring (Germany) • Bugatti Rimac Test Track (Croatia)',


    innovations: [
      'Full multi-element carbon fiber front and rear wing aerodynamics with custom CFD profiling',
      'Real-time CAN-bus wireless telemetry streaming live track diagnostics to cloud dashboards',
      'Overhauled wheel assembly with CNC-milled 7000 series aluminum parts'
    ],

    awards: [
      { title: 'FS Balkans 2026', position: '1st Place Overall Champions', category: 'gold' },
      { title: 'Best in Statics Award', position: 'Clean Sweep Trophy', category: 'gold' },
      { title: 'Engineering Design', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Cost & Manufacturing', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Business Plan (BPP)', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Autocross (Auto-X)', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Skidpad', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'FS Alpe Adria Fuel Efficiency', position: '3rd Place', category: 'bronze' },
      { title: 'FS Germany (Hockenheim)', position: '3rd Place Efficiency', category: 'bronze' },
      { title: 'FS Alpe Adria Design', position: '6th Place', category: 'silver' },
      { title: 'FS Alpe Adria Overall', position: '9th Place Overall (Top 10)', category: 'gold' },
      { title: 'FS Alpe Adria 22 km Endurance', position: '10th Place Finish', category: 'special' }
    ],

    kpis: {
      accelerationSec: 4.6,
      accelerationStr: '4.6 s',
      topSpeedKmh: 85,
      topSpeedStr: '85 km/h',
      peakPowerKw: 42,
      peakPowerStr: '42 kW',
      packVoltageV: 201.6,
      packVoltageStr: '201.6 V DC',
      vehicleMassKg: 238,
      vehicleMassStr: '~238 kg',
      downforceN: 350,
      downforceStr: '~350 N',
      torqueNm: 80,
      torqueStr: '80 Nm'
    },

    technicalSpecs: {
      weight: '238 kg',
      power: '42 kW (Peak)',
      topSpeed: '85 km/h',
      accel: '4.6 s (Accel)',
      voltage: '201.6 V DC',
      batteryCells: 'Sony US18650VTC6 High-Discharge Li-Ion',
      motors: 'Dual Brushless DC (Plettenberg Nova 30A4S)',
      torque: '80 Nm',
      downforce: '~350 N @ 60 km/h',
      dimensions: '3008 x 1503 x 1235 mm',
      driveType: 'Dual Rear In-Wheel Planetary Gearbox (Half-Shaft)',
      tyres: 'Hoosier Slicks',
      chassis: 'Steel Tubular Space Frame + Carbon Structural Elements',
      bms: 'COTS BMS',
      telemetry: 'CAN-Bus & Live Wireless Telemetry',
      suspension: 'Double A-Arm Pushrod with Anti-Roll Bar'
    },

    specGroups: [
      {
        category: 'Performance',
        items: [
          { label: 'Acceleration', value: '4.6 s' },
          { label: 'Top Speed', value: '85 km/h' },
          { label: 'Peak Power', value: '42 kW' },
          { label: 'Powertrain Type', value: 'Dual Rear Electric Motors' }
        ]
      },
      {
        category: 'Battery & Electrical',
        items: [
          { label: 'Accumulator Voltage', value: '201.6 V DC' },
          { label: 'Cell Chemistry', value: 'High-discharge Li-Ion' },
          { label: 'BMS System', value: 'COTS, future in-house designed' },
          { label: 'Telemetry', value: '< 11ms Cloud LTE' }
        ]
      },
      {
        category: 'Chassis & Aero',
        items: [
          { label: 'Chassis Structure', value: 'Steel Tubular Space Frame + Carbon Structural Elements' },
          { label: 'Total Vehicle Mass', value: '~238 kg' },
          { label: 'Aerodynamics', value: 'Full Carbon Fiber Wings & Diffuser' },
          { label: 'Suspension', value: 'Double A-Arm Pushrod with Anti-Roll Bar' }
        ]
      }
    ],

    hotspots: [
      {
        id: 'front-aero',
        name: 'Front Wing',
        department: 'Aerodynamics & Composites',
        x: 12,
        y: 84,
        headline: 'Ground Effect Front Wing & Splitter',
        description: 'Multi-element carbon fiber front wing generating direct downforce on the front. Optimized for downforce and low drag around the front slicks.',
        specs: [
          { label: 'Wing Type', value: 'Multi-Element Carbon Airfoil' },
          { label: 'Ground Clearance', value: '40 mm Ride Height' }
        ]
      },
      {
        id: 'suspension',
        name: 'Pushrod Suspension & Uprights',
        department: 'Vehicle Dynamics',
        x: 33,
        y: 70,
        headline: 'Double Wishbone Pushrod Geometry',
        description: 'Kinematically optimized double wishbone suspension with 5-axis CNC-milled 7000 Series Aluminum uprights, adjustable anti-roll bar, and custom damper kinematics.',
        specs: [
          { label: 'Configuration', value: 'Pushrod Double Wishbone' },
          { label: 'Dampers', value: 'Adjustable Racing Dampers' },
          { label: 'Uprights', value: '5-Axis CNC Milled 7000 Series Aluminum' }
        ]
      },
      {
        id: 'cockpit',
        name: 'Cockpit & CAN Telemetry',
        department: 'Electronics & Software',
        x: 44,
        y: 46,
        headline: 'Real-Time Telemetry & Driver Interface',
        description: 'Custom ergonomic steering wheel with integrated digital dash, real-time wireless CAN-bus telemetry streaming live track diagnostics to paddock engineers.',
        specs: [
          { label: 'Network', value: 'High-Speed CAN-Bus 2.0B' },
          { label: 'Telemetry', value: 'Live 25-100Hz Wireless Cloud Link' },
          { label: 'Driver Dash', value: 'Custom High-Contrast TFT' }
        ]
      },
      {
        id: 'battery',
        name: '200V Li-Ion Accumulator',
        department: 'High Voltage Powertrain',
        x: 60,
        y: 64,
        headline: 'Custom 200V High-Voltage Battery Pack',
        description: 'Modular high-energy density lithium-ion accumulator. Using Sony US18650VTC6 high-discharge cells, the pack is engineered for maximum energy density, safety, and performance.',
        specs: [
          { label: 'Max Voltage', value: '201.6 V DC' },
          { label: 'Energy Capacity', value: '~4.2 kWh' },
          { label: 'BMS', value: 'COTS Integrated BMS, future in-house' }
        ]
      },
      {
        id: 'powertrain',
        name: 'Dual Motors & Inverter',
        department: 'Powertrain & Drivetrain',
        x: 74,
        y: 62,
        headline: 'High-Efficiency Dual Electric Drive',
        description: 'Dual high-efficiency permanent magnet synchronous brushless DC motors from Plettenberg (Nova 30) paired with MOSFET inverters (400-200 WK) for maximum torque delivery.',
        specs: [
          { label: 'Peak Power', value: '42 kW' },
          { label: 'Total Torque', value: '80 Nm at Shaft' },
          { label: 'Gearbox', value: 'Dual Planetary Reduction' }
        ]
      },
      {
        id: 'rear-aero',
        name: 'Rear Wing',
        department: 'Aerodynamics',
        x: 88,
        y: 28,
        headline: 'High-Downforce Multi-Element Rear Wing',
        description: '3D element carbon fiber rear wing with integrated endplates, generating significant downforce for high-speed cornering and stability, optimized for low drag and maximum efficiency.',
        specs: [
          { label: 'Total Downforce', value: '~350 N @ 60 km/h' },
          { label: 'Material', value: 'Autoclaved Carbon Fiber' }
        ]
      }
    ],

    trackProgress: 0.94,
    circuitTurn: 'Turn 12 • Main Start / Finish Championship Straight'
  },

  // --------------------------------------------------------------------------
  // 2. ART-25 EV - Season 2024-2025
  // --------------------------------------------------------------------------
  'art-25': {
    id: 'art-25',
    name: 'ART25',
    shortName: 'ART25',
    generationCode: 'ART25',
    seasonSpan: '2024 - 2025',
    shortYear: "'25",
    isCurrentCar: false,
    status: 'Legacy',
    badgeType: 'silver',

    image: '/assets/20250821_12-46-42_1527_grobe-XL.webp',
    fallbackImage: '/assets/20250820_14-48-23_2601_seizinger-X3.webp',
    imageCaption: "Coty on the grid • featuring our team's first aerodynamic wings and carbon wishbones.",
    imagePosition: 'object-[center_bottom]',


    title: 'Breakthrough & Scrutineering Perfection',
    tagline: 'Passed all technical inspections & completed 22 km endurance at Hockenheimring, 1st in Statics at FS Balkans',
    description:
      'The pivotal turning point in our international campaign. Season 2024-2025 delivered historic double success: winning 1st in all static events (Engineering Design, Cost & Manufacturing, Business Plan) and 2nd in Endurance at FS Balkans 2025, followed by reaching Hockenheim at Formula Student Germany 2025 where ART TU passed all technical inspections for the first time ever and completed all dynamic events, finishing P28 in Endurance and P59 out of 83 teams overall.',
    circuitLocation: 'Hockenheimring (Germany) & TNT Karting, Dej',

    innovations: [
      'First custom high-voltage battery charger engineered and certified in-house',
      'Full carbon fiber suspension wishbones reducing unsprung mass by 22%',
      'Complete 22 km endurance race completion at Hockenheimring'
    ],

    awards: [
      { title: 'FS Balkans Statics', position: '1st in Design, Cost, BPP', category: 'gold' },
      { title: 'FS Balkans Endurance & Efficiency', position: '2nd Place', category: 'silver' },
      { title: 'FS Germany (Hockenheim)', position: 'Full 22 km Endurance Finish (P28)', category: 'special' },
      { title: 'FS Germany Scrutineering', position: 'All Tech Inspections Passed', category: 'gold' },
      { title: 'FS Germany Overall', position: 'P59 / 83 Teams', category: 'special' }
    ],

    kpis: {
      accelerationSec: 4.9,
      accelerationStr: '4.9 s',
      topSpeedKmh: 75,
      topSpeedStr: '75 km/h',
      peakPowerKw: 40,
      peakPowerStr: '40 kW',
      packVoltageV: 201.6,
      packVoltageStr: '201.6 V DC',
      vehicleMassKg: 285,
      vehicleMassStr: '285 kg',
      downforceN: 136.2,
      downforceStr: '136.2 N',
      torqueNm: 80,
      torqueStr: '80 Nm'
    },

    technicalSpecs: {
      weight: '285 kg',
      power: '40 kW',
      topSpeed: '75 km/h',
      accel: '5.3 s (Accel)',
      voltage: '201.6 V DC',
      batteryCells: 'Sony US18650VTC6 Cylindrical Li-Ion',
      motors: 'Brushless DC, 2 x Plettenberg Nova 30A4S',
      torque: '80 Nm',
      downforce: '136.2 N',
      dimensions: '3008 x 1503 x 1235 mm',
      driveType: 'Planetary Gearbox (Motor - Gearbox - Half Drive Shaft)',
      tyres: 'Continental Racing Slicks'
    },

    specGroups: [
      {
        category: 'Performance',
        items: [
          { label: 'Acceleration', value: '5.3 s' },
          { label: 'Top Speed', value: '75 km/h' },
          { label: 'Peak Power', value: '40 kW' },
          { label: 'Downforce', value: '136.2 N' }
        ]
      },
      {
        category: 'Battery & Electrical',
        items: [
          { label: 'Pack Voltage', value: '201.6 V DC' },
          { label: 'Cells', value: 'Sony US18650VTC6 Li-Ion' },
          { label: 'Charger', value: 'In-House Engineered Custom Charger' }
        ]
      }
    ],

    trackProgress: 0.72,
    circuitTurn: 'Turn 9 • Technical Triple Hairpin Complex'
  },

  // --------------------------------------------------------------------------
  // 3. ART-24 EV - Season 2023-2024
  // --------------------------------------------------------------------------
  'art-24': {
    id: 'art-24',
    name: 'ART24',
    shortName: 'ART24',
    generationCode: 'ART24',
    seasonSpan: '2023 - 2024',
    shortYear: "'24",
    isCurrentCar: false,
    status: 'Legacy Track Record',
    badgeType: 'bronze',

    image: '/assets/FB-Post-11.08.2024.webp',
    fallbackImage: '/assets/20250501_172038-1-1-scaled.webp',
    imageCaption: 'ART24 on the grid at Formula Student Czech Republic 2024 (Autodrom Most) • historic first mechanical scrutineering pass.',
    imagePosition: 'object-[center_top]',

    title: 'Engineering Maturation & Mechanical Breakthrough',
    tagline: '3rd Place Overall Podium at FS Balkans & 1st Mechanical Scrutineering Pass at FS Czech',
    description:
      'Season 2023-2024 brought major technical milestones for ART TU: passing Mechanical Scrutineering for the first time in team history at Formula Student Czech 2024 (Autodrom Most, P37 / 46 EV teams), followed by capturing an overall 3rd place championship podium at the inaugural official edition of FS Balkans, winning 1st in Engineering Design, 1st in Business Plan Presentation, and 2nd in Cost & Manufacturing.',
    circuitLocation: 'Autodrom Most (Czech Republic) & TNT Karting, Dej',

    innovations: [
      'Full carbon fiber composite aerodynamic bodywork and nosecone',
      'Carbon fiber suspension control arms and double wishbone geometry',
      'Planetary reduction gearbox integration for instant electric motor torque'
    ],

    awards: [
      { title: 'FS Balkans Overall', position: '3rd Place Overall Podium', category: 'bronze' },
      { title: 'Engineering Design', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Business Plan (BPP)', position: '1st Place (FSBK)', category: 'gold' },
      { title: 'Cost & Manufacturing', position: '2nd Place (FSBK)', category: 'silver' },
      { title: 'FS Czech (Autodrom Most)', position: 'Passed Mechanical Scrutineering (P37 / 46 EV)', category: 'special' }
    ],

    kpis: {
      accelerationSec: 5.3,
      accelerationStr: '5.3 s',
      topSpeedKmh: 70,
      topSpeedStr: '70 km/h',
      peakPowerKw: 40,
      peakPowerStr: '40 kW',
      packVoltageV: 201.6,
      packVoltageStr: '201.6 V DC',
      vehicleMassKg: 295,
      vehicleMassStr: '295 kg',
      downforceN: 90,
      downforceStr: 'Ground Effect',
      torqueNm: 80,
      torqueStr: '80 Nm'
    },

    technicalSpecs: {
      weight: '295 kg',
      power: '40 kW',
      topSpeed: '70 km/h',
      accel: '5.8 s',
      voltage: '201.6 V DC',
      batteryCells: 'Sony US18650VTC6 Cylindrical Li-Ion',
      motors: 'Brushless DC, 2 x Plettenberg Nova 30A4S',
      torque: '80 Nm',
      downforce: 'Composite Body Ground Effect',
      dimensions: '2755 x 1503 x 1235 mm',
      driveType: 'Planetary Gearbox (Motor - Gearbox - Half Drive Shaft)',
      tyres: 'Continental Racing Slicks'
    },

    specGroups: [
      {
        category: 'Performance',
        items: [
          { label: 'Acceleration', value: '5.3 s' },
          { label: 'Top Speed', value: '70 km/h' },
          { label: 'Peak Power', value: '40 kW' }
        ]
      }
    ],

    trackProgress: 0.52,
    circuitTurn: 'Turn 7 • Technical Stadium Infield'
  },

  // --------------------------------------------------------------------------
  // 4. ART-23 EV - Season 2022-2023
  // --------------------------------------------------------------------------
  'art-23': {
    id: 'art-23',
    name: 'ART23',
    shortName: 'ART23',
    generationCode: 'ART23',
    seasonSpan: '2022 - 2023',
    shortYear: "'23",
    isCurrentCar: false,
    status: 'Evolution Track Record',
    badgeType: 'bronze',

    image: '/assets/FSCzech4-1536x1153.webp',
    fallbackImage: '/assets/IMG_1513.webp',
    imageCaption: 'ART23 under the arch at Formula Student Czech Republic 2023 (Autodrom Most) • upgraded chassis and composite aerodynamic bodywork.',
    imagePosition: 'object-[center_45%]',

    title: 'Evolution & FS Czech Debut',
    tagline: 'Formula Student Czech Republic 2023 Debut & Pilot FS Balkans Demonstration',
    description:
      'In Season 2022-2023, ART TU introduced an upgraded single-seater electric racecar with optimized mechanical structures, composite bodywork, and enhanced powertrain reliability. Competing at Autodrom Most in Formula Student Czech 2023, the team finished P28 out of 37 electric vehicle teams, and participated in the pilot edition of FS Balkans near Brașov.',
    circuitLocation: 'Autodrom Most (Czech Republic) & Brașov (Romania)',

    innovations: [
      'Composite aerodynamic bodywork panels and optimized nosecone packaging',
      'Enhanced high-voltage battery enclosure cooling and safety disconnects',
      'Refined suspension geometry and chassis torsional stiffness',
      'Demonstration at the inaugural pilot edition of Formula Student Balkans'
    ],

    awards: [
      { title: 'FS Czech 2023 (Autodrom Most)', position: 'P28 / 37 EV Teams', category: 'special' },
      { title: 'FS Balkans Pilot (Brașov)', position: 'Pioneer Demonstration', category: 'special' },
      { title: 'Static Events Classification', position: 'Official European Scoring', category: 'special' }
    ],

    kpis: {
      accelerationSec: 5.6,
      accelerationStr: '5.6 s',
      topSpeedKmh: 70,
      topSpeedStr: '70 km/h',
      peakPowerKw: 35,
      peakPowerStr: '35 kW',
      packVoltageV: 201.6,
      packVoltageStr: '201.6 V DC',
      vehicleMassKg: 305,
      vehicleMassStr: '305 kg',
      downforceN: 60,
      downforceStr: 'Low-Drag Aero',
      torqueNm: 70,
      torqueStr: '70 Nm'
    },

    technicalSpecs: {
      weight: '305 kg',
      power: '35 kW',
      topSpeed: '70 km/h',
      accel: '5.6 s',
      voltage: '201.6 V DC',
      batteryCells: 'Enepaq High-Performance Li-Ion Modules',
      motors: 'Brushless DC, 2 x Plettenberg Nova 30A4S',
      torque: '70 Nm',
      downforce: 'Streamlined Composite Bodywork',
      dimensions: '3050 x 1550 x 1320 mm',
      driveType: 'Planetary Gearbox',
      tyres: 'Continental Racing Slicks'
    },

    specGroups: [
      {
        category: 'Performance',
        items: [
          { label: 'Acceleration', value: '5.6 s' },
          { label: 'Top Speed', value: '70 km/h' },
          { label: 'Peak Power', value: '35 kW' }
        ]
      }
    ],

    trackProgress: 0.36,
    circuitTurn: 'Turn 5 • North Chicane'
  },

  // --------------------------------------------------------------------------
  // 5. ART-22 EV - Season 2021-2022
  // --------------------------------------------------------------------------
  'art-22': {
    id: 'art-22',
    name: 'ART22',
    shortName: 'ART22',
    generationCode: 'ART22',
    seasonSpan: '2021 - 2022',
    shortYear: "'22",
    isCurrentCar: false,
    status: 'Historic Milestone',
    badgeType: 'gold',

    image: '/assets/Cover-FB-03.09.webp',
    fallbackImage: '/assets/IMG_1513.webp',
    imageCaption: 'ART22 on the paddock at Formula Student Alpe Adria 2022 (Bugatti Rimac Test Track, Croatia) • the first electric formula single-seater built by a Romanian university.',
    imagePosition: 'object-[center_45%]',

    title: '1st Romanian Electric Single-Seater in History',
    tagline: 'Historic debut at Formula Student Alpe Adria (Bugatti Rimac Test Track, Croatia)',
    description:
      'In August 2022, ART TU made Romanian motorsport history by becoming the very first university team in the country to design, build, and enter an electric formula car at an official international Formula Student competition, scoring 25th in static events against established European teams.',
    circuitLocation: 'Bugatti Rimac Test Track (Croatia)',

    innovations: [
      'First 200V+ high-voltage accumulator container designed and fabricated in Romania',
      'Steel spaceframe chassis with FEA-optimized torsional rigidity',
      'First dual BLDC high-efficiency powertrain integration',
      'Foundational low-voltage wiring harness'
    ],

    awards: [
      { title: 'Historic Milestone', position: '1st Romanian EV Formula Car', category: 'gold' },
      { title: 'FS Alpe Adria (Croatia)', position: 'P25 / 31 EV Teams', category: 'special' },
      { title: 'Statics Classification', position: 'Official International Debut', category: 'special' }
    ],

    kpis: {
      accelerationSec: 5.8,
      accelerationStr: '5.8 s',
      topSpeedKmh: 70,
      topSpeedStr: '70 km/h',
      peakPowerKw: 30,
      peakPowerStr: '30 kW',
      packVoltageV: 201.6,
      packVoltageStr: '201.6 V DC',
      vehicleMassKg: 310,
      vehicleMassStr: '~310 kg',
      downforceN: 50,
      downforceStr: 'Low-Drag Streamlined',
      torqueNm: 60,
      torqueStr: '60 Nm'
    },

    technicalSpecs: {
      weight: '310 kg',
      power: '30 kW',
      topSpeed: '70 km/h',
      accel: '5.8 s',
      voltage: '201.6 V DC',
      batteryCells: 'Enepaq High-Performance Li-Ion Modules',
      motors: 'BLDC Motors from Plettenberg GmbH',
      torque: '60 Nm',
      downforce: 'Low-drag streamlined bodywork',
      dimensions: '3160 x 1650 x 1410 mm',
      driveType: 'Planetary Gearbox',
      tyres: 'Continental Racing'
    },

    specGroups: [
      {
        category: 'Performance',
        items: [
          { label: 'Acceleration', value: '5.8 s' },
          { label: 'Top Speed', value: '70 km/h' },
          { label: 'Peak Power', value: '30 kW' }
        ]
      }
    ],

    trackProgress: 0.20,
    circuitTurn: 'Turn 3 • Eastern Outer Hairpin'
  },

  // --------------------------------------------------------------------------
  // 6. CONCEPT PROTOTYPE ART-01 - Founding Era 2019-2021
  // --------------------------------------------------------------------------

  'concept-art01': {
    id: 'concept-art01',
    name: 'ART01',
    shortName: 'ART01',
    generationCode: 'ART01',
    seasonSpan: '2019 - 2021',
    shortYear: "'19-'21",
    isCurrentCar: false,
    status: 'Founding Concept',
    badgeType: 'brand',

    image: '/assets/Team-building-Marisel-2019.webp',
    fallbackImage: '/assets/Recruitment-2019.webp',
    imageCaption: 'The founding ART TU crew at Mărișel in June 2019, building the first 1:1 scale tubular chassis mockup.',
    imagePosition: 'object-[center_30%]',

    title: "The Foundation of ART TU's Electric Racing Legacy",
    tagline: "From Mărișel workshop concept to Romania's premier EV racing team",
    description:
      'Founded in 2019 by 20 visionary UTCN engineering students, starting with the help of Porsche Engineering, ART TU was built from the ground up. Through early prototyping, student recruitment drives across Cluj faculties, and securing Porsche Engineering as the founding partner, the foundation was laid.',
    circuitLocation: 'Technical University of Cluj-Napoca (UTCN) & Mărișel',

    innovations: [
      'Inaugural full-scale 3D CAD chassis frame model and packaging envelope',
      'Founding technical partnership with UTCN Faculty of Automotive Engineering & Porsche Engineering',
      'Recruited and onboarded over 60 enthusiastic UTCN engineering and software students'
    ],

    awards: [
      { title: 'UTCN Founding Approval', position: 'Official University Team', category: 'gold' },
      { title: 'Porsche Engineering Partnership', position: 'Founding Tech Partner', category: 'gold' },
      { title: 'Inaugural Recruitment Drive', position: '60+ Members Recruited', category: 'special' }
    ],

    kpis: {
      accelerationSec: 0,
      accelerationStr: 'Concept CAD',
      topSpeedKmh: 70,
      topSpeedStr: '70 km/h (Sim)',
      peakPowerKw: 30,
      peakPowerStr: '30 kW (Target)',
      packVoltageV: 200,
      packVoltageStr: 'High-Voltage Concept',
      vehicleMassKg: 0,
      vehicleMassStr: 'CAD Model',
      downforceN: 0,
      downforceStr: 'Baseline CAD',
      torqueNm: 50,
      torqueStr: '50 Nm (Sim)'
    },

    technicalSpecs: {
      weight: 'Concept CAD Prototyping',
      power: '30 kW (Target)',
      topSpeed: '70 km/h (Simulation)',
      accel: 'Concept Stage',
      voltage: 'High-Voltage Feasibility Architecture',
      batteryCells: 'Li-Ion Modular Concept',
      motors: 'Plettenberg BLDC Architecture Plan',
      torque: '50 Nm (Simulation)',
      downforce: 'Baseline CAD Aerodynamics',
      dimensions: '3200 x 1600 x 1350 mm (CAD)',
      driveType: 'Electric Rear-Wheel Drive Concept',
      tyres: 'Formula Student Standard Testing'
    },

    specGroups: [
      {
        category: 'Founding Milestone',
        items: [
          { label: 'Founding Team', value: '20 Engineers' },
          { label: 'UTCN Recruitment', value: '60+ Students' },
          { label: 'Chassis Design', value: 'Full CAD 3D' }
        ]
      }
    ],

    trackProgress: 0.03,
    circuitTurn: 'Turn 1 • Paddock Garage & Launch Line'
  }
};

/**
 * Ordered list of all car records (Chronological: latest to oldest or vice versa)
 */
export const CARS_LIST: CarRecord[] = Object.values(CARS_DATABASE);

/**
 * The current active flagship racecar (Afia / ART-26 EV)
 */
export const CURRENT_CAR: CarRecord = CARS_DATABASE['afia-art26'] || CARS_LIST[0];

/**
 * Helper to fetch a car by its unique ID
 */
export function getCarById(id: string): CarRecord | undefined {
  return CARS_DATABASE[id];
}

/**
 * Helper to get the current active racecar
 */
export function getCurrentCar(): CarRecord {
  return CURRENT_CAR;
}

/**
 * Helper to generate TimelineSeasons automatically for /history and InteractiveCircuitTimeline
 */
export function getTimelineSeasons() {
  return [
    {
      id: '2025-2026',
      yearSpan: CARS_DATABASE['afia-art26'].seasonSpan,
      shortYear: CARS_DATABASE['afia-art26'].shortYear,
      seasonName: `Season ${CARS_DATABASE['afia-art26'].seasonSpan}`,
      carModel: CARS_DATABASE['afia-art26'].name,
      title: CARS_DATABASE['afia-art26'].title,
      tagline: CARS_DATABASE['afia-art26'].tagline,
      badge: '1st Place Champions',
      badgeType: CARS_DATABASE['afia-art26'].badgeType,
      circuitLocation: CARS_DATABASE['afia-art26'].circuitLocation,
      image: CARS_DATABASE['afia-art26'].image,
      fallbackImage: CARS_DATABASE['afia-art26'].fallbackImage,
      imageCaption: CARS_DATABASE['afia-art26'].imageCaption,
      imagePosition: CARS_DATABASE['afia-art26'].imagePosition,
      description: CARS_DATABASE['afia-art26'].description,
      innovations: CARS_DATABASE['afia-art26'].innovations,
      specs: CARS_DATABASE['afia-art26'].technicalSpecs,
      keySpecsSummary: [
        { label: '0-100 km/h', value: CARS_DATABASE['afia-art26'].kpis.accelerationStr, highlight: true },
        { label: 'Peak Power', value: CARS_DATABASE['afia-art26'].kpis.peakPowerStr, highlight: true },
        { label: 'Vehicle Mass', value: CARS_DATABASE['afia-art26'].kpis.vehicleMassStr, highlight: true },
        { label: 'Pack Voltage', value: CARS_DATABASE['afia-art26'].kpis.packVoltageStr },
        { label: 'Downforce', value: CARS_DATABASE['afia-art26'].kpis.downforceStr },
        { label: 'Torque', value: CARS_DATABASE['afia-art26'].kpis.torqueStr }
      ],
      awards: CARS_DATABASE['afia-art26'].awards,
      trackProgress: CARS_DATABASE['afia-art26'].trackProgress,
      circuitTurn: CARS_DATABASE['afia-art26'].circuitTurn
    },
    {
      id: '2024-2025',
      yearSpan: CARS_DATABASE['art-25'].seasonSpan,
      shortYear: CARS_DATABASE['art-25'].shortYear,
      seasonName: `Season ${CARS_DATABASE['art-25'].seasonSpan}`,
      carModel: CARS_DATABASE['art-25'].name,
      title: CARS_DATABASE['art-25'].title,
      tagline: CARS_DATABASE['art-25'].tagline,
      badge: 'Breakthrough Season',
      badgeType: CARS_DATABASE['art-25'].badgeType,
      circuitLocation: CARS_DATABASE['art-25'].circuitLocation,
      image: CARS_DATABASE['art-25'].image,
      fallbackImage: CARS_DATABASE['art-25'].fallbackImage,
      imageCaption: CARS_DATABASE['art-25'].imageCaption,
      imagePosition: CARS_DATABASE['art-25'].imagePosition,
      description: CARS_DATABASE['art-25'].description,
      innovations: CARS_DATABASE['art-25'].innovations,
      specs: CARS_DATABASE['art-25'].technicalSpecs,
      keySpecsSummary: [
        { label: 'Peak Power', value: CARS_DATABASE['art-25'].kpis.peakPowerStr, highlight: true },
        { label: 'Vehicle Mass', value: CARS_DATABASE['art-25'].kpis.vehicleMassStr },
        { label: 'Downforce', value: CARS_DATABASE['art-25'].kpis.downforceStr, highlight: true },
        { label: 'Pack Voltage', value: CARS_DATABASE['art-25'].kpis.packVoltageStr },
        { label: 'Torque', value: CARS_DATABASE['art-25'].kpis.torqueStr },
        { label: 'Top Speed', value: CARS_DATABASE['art-25'].kpis.topSpeedStr }
      ],
      awards: CARS_DATABASE['art-25'].awards,
      trackProgress: CARS_DATABASE['art-25'].trackProgress,
      circuitTurn: CARS_DATABASE['art-25'].circuitTurn
    },
    {
      id: '2023-2024',
      yearSpan: CARS_DATABASE['art-24'].seasonSpan,
      shortYear: CARS_DATABASE['art-24'].shortYear,
      seasonName: `Season ${CARS_DATABASE['art-24'].seasonSpan}`,
      carModel: CARS_DATABASE['art-24'].name,
      title: CARS_DATABASE['art-24'].title,
      tagline: CARS_DATABASE['art-24'].tagline,
      badge: 'Podium Debut',
      badgeType: CARS_DATABASE['art-24'].badgeType,
      circuitLocation: CARS_DATABASE['art-24'].circuitLocation,
      image: CARS_DATABASE['art-24'].image,
      fallbackImage: CARS_DATABASE['art-24'].fallbackImage,
      imageCaption: CARS_DATABASE['art-24'].imageCaption,
      imagePosition: CARS_DATABASE['art-24'].imagePosition,
      description: CARS_DATABASE['art-24'].description,
      innovations: CARS_DATABASE['art-24'].innovations,
      specs: CARS_DATABASE['art-24'].technicalSpecs,
      keySpecsSummary: [
        { label: 'Peak Power', value: CARS_DATABASE['art-24'].kpis.peakPowerStr, highlight: true },
        { label: 'Vehicle Mass', value: CARS_DATABASE['art-24'].kpis.vehicleMassStr },
        { label: 'Pack Voltage', value: CARS_DATABASE['art-24'].kpis.packVoltageStr },
        { label: 'Max Torque', value: CARS_DATABASE['art-24'].kpis.torqueStr },
        { label: 'Chassis Length', value: '2755 mm' },
        { label: 'Top Speed', value: CARS_DATABASE['art-24'].kpis.topSpeedStr }
      ],
      awards: CARS_DATABASE['art-24'].awards,
      trackProgress: CARS_DATABASE['art-24'].trackProgress,
      circuitTurn: CARS_DATABASE['art-24'].circuitTurn
    },
    {
      id: '2022-2023',
      yearSpan: CARS_DATABASE['art-23'].seasonSpan,
      shortYear: CARS_DATABASE['art-23'].shortYear,
      seasonName: `Season ${CARS_DATABASE['art-23'].seasonSpan}`,
      carModel: CARS_DATABASE['art-23'].name,
      title: CARS_DATABASE['art-23'].title,
      tagline: CARS_DATABASE['art-23'].tagline,
      badge: 'Evolution Season',
      badgeType: CARS_DATABASE['art-23'].badgeType,
      circuitLocation: CARS_DATABASE['art-23'].circuitLocation,
      image: CARS_DATABASE['art-23'].image,
      fallbackImage: CARS_DATABASE['art-23'].fallbackImage,
      imageCaption: CARS_DATABASE['art-23'].imageCaption,
      imagePosition: CARS_DATABASE['art-23'].imagePosition,
      description: CARS_DATABASE['art-23'].description,
      innovations: CARS_DATABASE['art-23'].innovations,
      specs: CARS_DATABASE['art-23'].technicalSpecs,
      keySpecsSummary: [
        { label: 'Peak Power', value: CARS_DATABASE['art-23'].kpis.peakPowerStr, highlight: true },
        { label: 'Vehicle Mass', value: CARS_DATABASE['art-23'].kpis.vehicleMassStr },
        { label: 'Pack Voltage', value: CARS_DATABASE['art-23'].kpis.packVoltageStr },
        { label: 'Max Torque', value: CARS_DATABASE['art-23'].kpis.torqueStr },
        { label: 'Top Speed', value: CARS_DATABASE['art-23'].kpis.topSpeedStr },
        { label: 'European Classification', value: 'P28 / 37 EV', highlight: true }
      ],
      awards: CARS_DATABASE['art-23'].awards,
      trackProgress: CARS_DATABASE['art-23'].trackProgress,
      circuitTurn: CARS_DATABASE['art-23'].circuitTurn
    },
    {
      id: '2021-2022',
      yearSpan: CARS_DATABASE['art-22'].seasonSpan,
      shortYear: CARS_DATABASE['art-22'].shortYear,
      seasonName: `Season ${CARS_DATABASE['art-22'].seasonSpan}`,
      carModel: CARS_DATABASE['art-22'].name,
      title: CARS_DATABASE['art-22'].title,
      tagline: CARS_DATABASE['art-22'].tagline,
      badge: 'Pioneer EV',
      badgeType: CARS_DATABASE['art-22'].badgeType,
      circuitLocation: CARS_DATABASE['art-22'].circuitLocation,
      image: CARS_DATABASE['art-22'].image,
      fallbackImage: CARS_DATABASE['art-22'].fallbackImage,
      imageCaption: CARS_DATABASE['art-22'].imageCaption,
      imagePosition: CARS_DATABASE['art-22'].imagePosition,
      description: CARS_DATABASE['art-22'].description,
      innovations: CARS_DATABASE['art-22'].innovations,
      specs: CARS_DATABASE['art-22'].technicalSpecs,
      keySpecsSummary: [
        { label: 'Peak Power', value: CARS_DATABASE['art-22'].kpis.peakPowerStr, highlight: true },
        { label: 'Vehicle Mass', value: CARS_DATABASE['art-22'].kpis.vehicleMassStr },
        { label: 'Pack Voltage', value: CARS_DATABASE['art-22'].kpis.packVoltageStr },
        { label: 'Max Torque', value: CARS_DATABASE['art-22'].kpis.torqueStr },
        { label: 'Max Speed', value: CARS_DATABASE['art-22'].kpis.topSpeedStr },
        { label: 'First in Romania', value: '100% Electric', highlight: true }
      ],
      awards: CARS_DATABASE['art-22'].awards,
      trackProgress: CARS_DATABASE['art-22'].trackProgress,
      circuitTurn: CARS_DATABASE['art-22'].circuitTurn
    },
    {
      id: '2019-2020',
      yearSpan: CARS_DATABASE['concept-art01'].seasonSpan,
      shortYear: CARS_DATABASE['concept-art01'].shortYear,
      seasonName: 'Seasons 2019-2021',
      carModel: CARS_DATABASE['concept-art01'].name,
      title: CARS_DATABASE['concept-art01'].title,
      tagline: CARS_DATABASE['concept-art01'].tagline,
      badge: 'Origin Season',
      badgeType: CARS_DATABASE['concept-art01'].badgeType,
      circuitLocation: CARS_DATABASE['concept-art01'].circuitLocation,
      image: CARS_DATABASE['concept-art01'].image,
      fallbackImage: CARS_DATABASE['concept-art01'].fallbackImage,
      imageCaption: CARS_DATABASE['concept-art01'].imageCaption,
      imagePosition: CARS_DATABASE['concept-art01'].imagePosition,
      description: CARS_DATABASE['concept-art01'].description,
      innovations: CARS_DATABASE['concept-art01'].innovations,
      specs: CARS_DATABASE['concept-art01'].technicalSpecs,
      keySpecsSummary: [
        { label: 'Founding Team', value: '20 Students', highlight: true },
        { label: 'UTCN Recruitment', value: '60+ Students', highlight: true },
        { label: 'Chassis Design', value: 'Full CAD 3D' },
        { label: 'Key Partner', value: 'Porsche Engineering', highlight: true },
        { label: 'Powertrain', value: 'High-Voltage EV' },
        { label: 'Educational Partner', value: 'UTCN Cluj' }
      ],
      awards: CARS_DATABASE['concept-art01'].awards,
      trackProgress: CARS_DATABASE['concept-art01'].trackProgress,
      circuitTurn: CARS_DATABASE['concept-art01'].circuitTurn
    }
  ];
}
