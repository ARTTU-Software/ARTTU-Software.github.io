export interface Sponsor {
  name: string;
  tier: 'educational' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'supporter';
  logo: string;
  website?: string;
  description?: string;
}

export interface SponsorTierGroup {
  tier: 'educational' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'supporter';
  title: string;
  subtitle: string;
  sponsors: Sponsor[];
}

export const sponsorTiers: SponsorTierGroup[] = [
  {
    tier: 'educational',
    title: 'Educational Partner',
    subtitle: 'University & Research Institution',
    sponsors: [
      {
        name: "Technical University of Cluj-Napoca (UTCN)",
        tier: "educational",
        logo: "/assets/UTC-N-Logo.webp",
        website: "https://www.utcluj.ro/",
        description: "Advanced research and education university, founding institution of ART TU Cluj-Napoca, and member of the European University of Technology (EUt+)."
      }
    ]
  },
  {
    tier: 'platinum',
    title: 'Platinum Partners',
    subtitle: 'Strategic Engineering & Manufacturing Pillars',
    sponsors: [
      {
        name: "Porsche Engineering Romania",
        tier: "platinum",
        logo: "/assets/Logo-Porsche-Eng.-768x155.webp",
        website: "https://www.porscheengineering.com/",
        description: "Subsidiary of Porsche Engineering Group GmbH in Cluj-Napoca, driving software and next-generation mobility development."
      },
      {
        name: "CSi Romania",
        tier: "platinum",
        logo: "/assets/CSi-logo-300x293.webp",
        website: "https://www.csiportal.com/",
        description: "Global leaders in automated palletising and material handling systems, providing precision manufacturing and engineering support."
      },
      {
        name: "INAS / ANSYS",
        tier: "platinum",
        logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
        website: "https://www.inas.ro/",
        description: "Leading Romanian provider of CAD/CAM/CAE solutions, supporting the team with advanced Ansys FEA and CFD simulation tools."
      }
    ]
  },
  {
    tier: 'gold',
    title: 'Gold Partners',
    subtitle: 'Technology & Manufacturing Enablers',
    sponsors: [
      {
        name: "Banca Transilvania (BT Leasing)",
        tier: "gold",
        logo: "/assets/BT-Leasing-2026-1024x270.webp",
        website: "https://bancatransilvania.ro/",
        description: "Financial and mobility partner supporting student innovation and technical excellence in motorsport."
      },
      {
        name: "ESPRiT Engineering",
        tier: "gold",
        logo: "/assets/ESPRiT_Logo-removebg-preview.webp",
        website: "https://esprit-engineering.de/",
        description: "Automotive software and electronics engineering experts supporting vehicle systems integration."
      },
      {
        name: "Marple Data",
        tier: "gold",
        logo: "/assets/Marple-1024x356.webp",
        website: "https://www.marpledata.com/",
        description: "High-performance time-series telemetry data analysis platform for track testing and setup optimization."
      },
      {
        name: "Master Milling",
        tier: "gold",
        logo: "/assets/Master-Milling.webp",
        website: "https://mastermilling.ro/",
        description: "Precision 5-axis CNC machining partner for critical powertrain and suspension components."
      },
      {
        name: "Meze Audio",
        tier: "gold",
        logo: "/assets/MezeAudio-removedbg.webp",
        website: "https://mezeaudio.com/",
        description: "Award-winning Romanian high-end acoustic engineering company supporting our student team."
      },
      {
        name: "Transilvania Mobility Hub",
        tier: "gold",
        logo: "/assets/Transilvania_mobility_HUB-1024x372.webp",
        website: "https://transilvaniamobility.ro/",
        description: "Automotive technical services and mobility ecosystem partner in Cluj-Napoca."
      }
    ]
  },
  {
    tier: 'silver',
    title: 'Silver & Technical Partners',
    subtitle: 'Supplying Specialized Materials, Tools & Components',
    sponsors: [
      { name: "RAAL", tier: "silver", logo: "/assets/RAAL-Logo-2.webp", description: "Cooling systems and compact aluminum heat exchangers." },
      { name: "Guhring", tier: "silver", logo: "/assets/Guhring-logo-1024x214.webp", description: "Precision cutting tools and machining solutions." },
      { name: "Pfeiffer Vacuum", tier: "silver", logo: "/assets/Pfeiffer_Logo_RGB_ClaimRight.webp", description: "Vacuum technology and leak detection systems." },
      { name: "Easy Composites", tier: "silver", logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp", description: "Advanced carbon fiber fabrics, resins, and vacuum bagging supplies." },
      { name: "LEONI Wiring Systems", tier: "silver", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", description: "Automotive wiring and cable management solutions." },
      { name: "Dadis Motorsport", tier: "silver", logo: "/assets/Dadis-Motorsport-1024x292.webp", description: "Motorsport equipment, safety gear, and race technical parts." },
      { name: "ReconBatt", tier: "silver", logo: "/assets/ReconBatt.webp", description: "Battery testing and battery cell characterization." },
      { name: "OZ Racing", tier: "silver", logo: "/assets/OZRacing.webp", description: "Lightweight formula student wheels and center locks." },
      { name: "Motul", tier: "silver", logo: "/assets/Motul-logo.webp", description: "High-performance racing lubricants and brake fluids." },
      { name: "Gri-Pumps", tier: "silver", logo: "/assets/Gri-Pumps-logo.webp", description: "High-efficiency electric cooling pumps." },
      { name: "Oshee", tier: "silver", logo: "/assets/Oshee.webp", description: "Isotonic hydration partner for testing and competition days." },
      { name: "IFM Electronic", tier: "silver", logo: "/assets/IFM.webp", description: "Industrial and automotive sensors and measuring technology." }
    ]
  }
];

export interface MarqueeLogo {
  name: string;
  logo: string;
  website?: string;
}

export const marqueeLogos: MarqueeLogo[] = [
  { name: "Porsche Engineering", logo: "/assets/Logo-Porsche-Eng.-768x155.webp", website: "https://www.porscheengineering.com/" },
  { name: "UTCN", logo: "/assets/UTC-N-Logo.webp", website: "https://www.utcluj.ro/" },
  { name: "CSi Romania", logo: "/assets/CSi-logo-300x293.webp", website: "https://www.csiportal.com/" },
  { name: "INAS / ANSYS", logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp", website: "https://www.inas.ro/" },
  { name: "BT Leasing", logo: "/assets/BT-Leasing-2026-1024x270.webp", website: "https://bancatransilvania.ro/" },
  { name: "ESPRiT Engineering", logo: "/assets/ESPRiT_Logo-removebg-preview.webp", website: "https://esprit-engineering.de/" },
  { name: "Marple Data", logo: "/assets/Marple-1024x356.webp", website: "https://www.marpledata.com/" },
  { name: "Master Milling", logo: "/assets/Master-Milling.webp", website: "https://mastermilling.ro/" },
  { name: "Meze Audio", logo: "/assets/MezeAudio-removedbg.webp", website: "https://mezeaudio.com/" },
  { name: "RAAL", logo: "/assets/RAAL-Logo-2.webp", website: "https://raal.ro/" },
  { name: "Guhring", logo: "/assets/Guhring-logo-1024x214.webp", website: "https://guehring.com/" },
  { name: "Pfeiffer Vacuum", logo: "/assets/Pfeiffer_Logo_RGB_ClaimRight.webp", website: "https://www.pfeiffer-vacuum.com/" },
  { name: "Easy Composites", logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp", website: "https://www.easycomposites.co.uk/" },
  { name: "LEONI", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", website: "https://www.leoni.com/" },
  { name: "OZ Racing", logo: "/assets/OZRacing.webp", website: "https://www.ozracing.com/" },
  { name: "Motul", logo: "/assets/Motul-logo.webp", website: "https://www.motul.com/" },
  { name: "Dadis Motorsport", logo: "/assets/Dadis-Motorsport-1024x292.webp", website: "https://dadismotorsport.ro/" },
  { name: "ReconBatt", logo: "/assets/ReconBatt.webp", website: "https://reconbatt.ro/" },
  { name: "Gri-Pumps", logo: "/assets/Gri-Pumps-logo.webp", website: "https://www.gripumps.com/" },
  { name: "Oshee", logo: "/assets/Oshee.webp", website: "https://oshee.eu/" }
];

export const marqueeSponsors = marqueeLogos.map(m => m.name);
