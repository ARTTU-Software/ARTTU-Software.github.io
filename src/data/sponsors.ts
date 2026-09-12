export interface Sponsor {
  name: string;
  tier: 'educational' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'supporter';
  logo: string;
  secondaryLogo?: string;
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
        name: "Technical University of Cluj-Napoca (TUCN)",
        tier: "educational",
        logo: "/assets/UTC-N-Logo.webp",
        secondaryLogo: "/assets/EUT_VERTICAL_EN-300x144.webp",
        website: "https://www.utcluj.ro/",
        description: "Founding academic institution of ART TU Cluj-Napoca and leading member of the European University of Technology (EUt+), driving advanced motorsport engineering and research."
      }
    ]
  },
  {
    tier: 'platinum',
    title: 'Platinum Partners',
    subtitle: 'Strategic Engineering & Manufacturing Pillars',
    sponsors: [
      {
        name: "CSi Romania",
        tier: "platinum",
        logo: "/assets/CSi-logo-300x293.webp",
        website: "https://www.csiportal.com/",
        description: "At CSi palletising, we deliver fully integrated material handling and palletising systems for the FMCG / CPG industry, engineered for performance, flexibility and reliable high-throughput production."
      },
      {
        name: "INAS / ANSYS",
        tier: "platinum",
        logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
        secondaryLogo: "/assets/ansys-logo-yellow-skew-black-text.webp",
        website: "https://www.inas.ro/ro/",
        description: "Operating since 1991, INAS S.A. is one of Romania's leading providers of CAD/CAM/CAE/PLM/IoT/AR software solutions and technical engineering consulting services."
      },
      {
        name: "Porsche Engineering",
        tier: "platinum",
        logo: "/assets/Logo-Porsche-Eng.-768x155.webp",
        website: "https://www.porscheengineering.com/",
        description: "Discover how Porsche Engineering is shaping the future of vehicles and beyond with cutting-edge digital solutions and innovative engineering."
      }
    ]
  },
  {
    tier: 'gold',
    title: 'Gold Partners',
    subtitle: 'Technology & High-Performance Enablers',
    sponsors: [
      {
        name: "Banca Transilvania (BT Leasing)",
        tier: "gold",
        logo: "/assets/BT-Leasing-2026-1024x270.webp",
        website: "https://www.btleasing.ro/",
        description: "BT Leasing (Banca Transilvania Financial Group) provides comprehensive financing solutions through financial and operational leasing for vehicles and equipment."
      },
      {
        name: "ESPRiT Engineering",
        tier: "gold",
        logo: "/assets/ESPRiT_Logo-removebg-preview.webp",
        website: "https://esprit-engineering.de/",
        description: "Esprit Engineering: Automotive software, electronics and engineering services for future mobility."
      },
      {
        name: "Marple Data",
        tier: "gold",
        logo: "/assets/Marple-1024x356.webp",
        website: "https://www.marpledata.com/",
        description: "Data analysis that works for engineers. World-leading time series data analysis platform for engineering teams."
      },
      {
        name: "MasterMilling",
        tier: "gold",
        logo: "/assets/Master-Milling.webp",
        website: "https://master-milling.ro/",
        description: "CNC machining, precision cutting, fixtures, and industrial subcontracting for automation, food, medical, and civil-engineering applications."
      },
      {
        name: "Meze Audio",
        tier: "gold",
        logo: "/assets/MezeAudio-removedbg.webp",
        website: "https://mezeaudio.com/",
        description: "Award-winning Romanian high-end acoustic engineering company developing audiophile-grade planar and dynamic headphones."
      },
      {
        name: "Transilvania Mobility Hub",
        tier: "gold",
        logo: "/assets/Transilvania_mobility_HUB-1024x372.webp",
        website: "https://transilvaniamobility.ro/",
        description: "Transilvania Mobility Hub: Automotive dealership, integrated vehicle services, and technical mobility solutions based in Cluj-Napoca."
      }
    ]
  },
  {
    tier: 'silver',
    title: 'Silver Partners',
    subtitle: 'Precision Engineering & Technical Infrastructure',
    sponsors: [
      {
        name: "Analog Devices",
        tier: "silver",
        logo: "/assets/ADI-Logo-AWP-Tagline-RGB-FullColor.webp",
        website: "https://www.analog.com/",
        description: "Analog Devices is a global semiconductor leader that bridges the physical and digital worlds to enable breakthroughs at the Intelligent Edge."
      },
      {
        name: "Color Control Support SRL",
        tier: "silver",
        logo: "/assets/ColorControlSupport.webp",
        website: "https://colorcontrol.ro/",
        description: "In-house CNC machining, laser cutting, welding and powder coating from Cluj-Napoca. 150+ engineers serving European OEMs."
      },
      {
        name: "Emerson",
        tier: "silver",
        logo: "/assets/Emerson-removebg-preview.webp",
        website: "https://www.emerson.com/",
        description: "Emerson delivers leading automation solutions and technology to help process, hybrid and discrete manufacturers optimize operations."
      },
      {
        name: "Giroli",
        tier: "silver",
        logo: "/assets/Giroli.webp",
        website: "https://giroli.ro/",
        description: "Specialized supplier of industrial components, technical engineering services, and mechanical equipment."
      },
      {
        name: "Gri-Pumps",
        tier: "silver",
        logo: "/assets/Gri-Pumps-logo.webp",
        website: "https://www.gripumps.com/",
        description: "Gorman-Rupp Industries (GRI) designs and manufactures custom OEM fluid pumps and circulation systems."
      },
      {
        name: "Guhring",
        tier: "silver",
        logo: "/assets/Guhring-logo-1024x214.webp",
        website: "https://guehring.com/",
        description: "Guhring is a world-leading manufacturer of precision rotary cutting tools and comprehensive tooling systems for metal machining."
      },
      {
        name: "LEONI",
        tier: "silver",
        logo: "/assets/Logo-LEONI_Vizual-1024x724.webp",
        website: "https://www.leoni.com/",
        description: "Find out how the LEONI Group is helping to shape the mobility of tomorrow with intelligent energy and data management solutions."
      },
      {
        name: "Motul",
        tier: "silver",
        logo: "/assets/Motul-logo.webp",
        website: "https://www.motul.com/",
        description: "World-class specialist in high-tech synthetic motor oils, transmission fluids, and high-performance racing lubricants."
      },
      {
        name: "Oshee",
        tier: "silver",
        logo: "/assets/Oshee.webp",
        website: "https://oshee.eu/",
        description: "Leading functional beverage brand providing isotonic drinks and vitamins for endurance and athletic performance."
      },
      {
        name: "RAAL",
        tier: "silver",
        logo: "/assets/RAAL-Logo-2.webp",
        website: "https://raal.ro/",
        description: "RAAL is a manufacturer of compact aluminum heat exchangers and complete cooling systems for automotive and industrial equipment."
      },
      {
        name: "RebelDot",
        tier: "silver",
        logo: "/assets/rebeldot-logo-notagline-3.-black-rgb-900px-w-72ppi.webp",
        website: "https://www.rebeldot.com/",
        description: "We help global brands design, build and launch digital products that users love."
      },
      {
        name: "T&T Karting",
        tier: "silver",
        logo: "/assets/TTKartingTransilvania-300x240.webp",
        website: "https://kartingtransilvania.ro/",
        description: "The largest outdoor karting circuit in Transylvania, dedicated to driver development, motorsport practice, and track testing."
      }
    ]
  },
  {
    tier: 'bronze',
    title: 'Bronze Partners',
    subtitle: 'Specialized Tooling, Hardware & Workshop Solutions',
    sponsors: [
      {
        name: "ArtSoft",
        tier: "bronze",
        logo: "/assets/ArtSoft-Consult.webp",
        website: "https://www.artsoft-consult.ro/",
        description: "ArtSoft Consult is a dynamic custom software development company from Cluj-Napoca, Romania which operates on the international market of outsourcing IT services."
      },
      {
        name: "BigStore",
        tier: "bronze",
        logo: "/assets/BigStore.webp",
        website: "https://bigstore.ro/",
        description: "Distributor of professional power tools, workshop cabinets, hardware, and industrial equipment."
      },
      {
        name: "bikeshow.ro (bioline.srl)",
        tier: "bronze",
        logo: "/assets/BikeShow.webp",
        website: "https://www.bikeshow.ro/",
        description: "Online retailer of bicycles, electric bikes, premium bicycle components, and cycling gear."
      },
      {
        name: "Brizard",
        tier: "bronze",
        logo: "/assets/Brizard-logo.webp",
        website: "https://brizard.ro/",
        description: "5-axis CNC precision machining and custom manufacturing of high-tolerance engineering components."
      },
      {
        name: "Nova Tooling",
        tier: "bronze",
        logo: "/assets/Nova-Tooling.webp",
        website: "https://novagrup.ro/",
        description: "OEM CNC Machine Accesories BMT & VDI Live and Static Toolholders, precision parts manufacturing."
      },
      {
        name: "Powerbelt",
        tier: "bronze",
        logo: "/assets/Power_Belt.webp",
        website: "https://www.powerbelt.ro/",
        description: "Distributor of industrial power transmission components, aluminum extrusion profiles, and drive belts."
      },
      {
        name: "Server Config",
        tier: "bronze",
        logo: "/assets/Server_Config_2020_Premium-Refurbished_negru-768x285.webp",
        website: "https://www.server-config.ro/",
        description: "Direct importer and distributor of premium refurbished enterprise laptops, high-performance graphics workstations, and servers."
      }
    ]
  },
  {
    tier: 'supporter',
    title: 'Supporters',
    subtitle: 'Essential Materials, Logistics & Technical Support',
    sponsors: [
      {
        name: "Agrointer",
        tier: "supporter",
        logo: "/assets/AgroInter.webp",
        website: "https://agrointer.ro/",
        description: "Supplier of specialized agricultural machinery, replacement parts, and technical equipment."
      },
      {
        name: "ASKUBAL",
        tier: "supporter",
        logo: "/assets/Askubal.webp",
        website: "http://www.askubal.de/",
        description: "For over 90 years, a leading manufacturer of precision spherical bearings and rod ends according to DIN ISO 12240."
      },
      {
        name: "Dadis Motorsport",
        tier: "supporter",
        logo: "/assets/Dadis-Motorsport-1024x292.webp",
        website: "https://dadismotorsport.ro/",
        description: "Dadis Motorsport: Suspension technology, damper testing and motorsport preparation."
      },
      {
        name: "Daisler",
        tier: "supporter",
        logo: "/assets/Daisler2-removebg-preview-150x150.webp",
        website: "https://www.daisler.ro/",
        description: "Custom commercial printing for apparel, event banners, high-durability stickers, and promotional branding materials."
      },
      {
        name: "Easy Composites",
        tier: "supporter",
        logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp",
        website: "https://www.easycomposites.co.uk/",
        description: "Easy composites manufacture and supply materials, equipment and consumables for advanced composites."
      },
      {
        name: "Emuge Franken",
        tier: "supporter",
        logo: "/assets/Emugen-Franken.webp",
        website: "https://www.emuge.ro/",
        description: "Advanced technological solutions in precision threading, drilling, milling, and specialized clamping tools."
      },
      {
        name: "Eurocompozite",
        tier: "supporter",
        logo: "/assets/Logo_Eurocompozite-removebg-preview.webp",
        website: "http://eurocompozite.ro/",
        description: "Specialized manufacturer of advanced composite materials, resins, and fiber-reinforced components."
      },
      {
        name: "Hoosier Rennreifen",
        tier: "supporter",
        logo: "/assets/Hoosier.webp",
        website: "https://www.hoosiertire.com/",
        description: "Championship Formula Student racing slicks and wet racing tires."
      },
      {
        name: "IFM Electronic",
        tier: "supporter",
        logo: "/assets/IFM.webp",
        website: "https://www.ifm.com/",
        description: "ifm – close to you! Automation technology, sensors, networking and control systems for industrial applications."
      },
      {
        name: "Innotech",
        tier: "supporter",
        logo: "/assets/Innotec.webp",
        website: "https://inotechmachining.com/",
        description: "High-precision CNC machining services including milling, turning and technical chemical supplies."
      },
      {
        name: "Liner DP",
        tier: "supporter",
        logo: "/assets/LinerDP.webp",
        website: "https://liner-dp.com/",
        description: "Professional custom merchandise, textile personalization, and next-generation printing technology."
      },
      {
        name: "Mars Outpost",
        tier: "supporter",
        logo: "/assets/MarsOutpost-LogoClearNew-150x150.webp",
        website: "https://marsoutpost.net/",
        description: "Complete 3D printing solutions, technical engineering filaments, 3D modeling, and rapid prototyping services."
      },
      {
        name: "NKON",
        tier: "supporter",
        logo: "/assets/NKON.webp",
        website: "https://www.nkon.nl/",
        description: "Comprehensive international supplier of high-drain battery cells, battery packs, and charging systems."
      },
      {
        name: "OZ Racing",
        tier: "supporter",
        logo: "/assets/OZRacing.webp",
        website: "https://www.ozracing.com/",
        description: "OZ Racing, national and international leading producer of lightweight alloy motorsport and performance wheels."
      },
      {
        name: "Perfect Seal",
        tier: "supporter",
        logo: "/assets/PerfectSeal.webp",
        website: "https://perfectseal.ro/",
        description: "PERFECT SEAL ROMANIA: Professional industrial sealing solutions, specialized gaskets, and high-performance PEEK components."
      },
      {
        name: "Pfeiffer Vacuum",
        tier: "supporter",
        logo: "/assets/Pfeiffer_Logo_RGB_ClaimRight.webp",
        website: "https://www.pfeiffer-vacuum.com/",
        description: "Vacuum pumps, systems and leak detectors for high and ultra-high vacuum applications."
      },
      {
        name: "PH sweets",
        tier: "supporter",
        logo: "/assets/PH_Sweets_Logo.svg",
        website: "https://www.facebook.com/profile.php?id=61578075217846",
        description: "PH sweets Cluj-Napoca: Handcrafted artisanal desserts and confectionery for premier events and rollout celebrations."
      },
      {
        name: "ProCam",
        tier: "supporter",
        logo: "/assets/procam_logo.webp",
        website: "https://procam.ro/",
        description: "PROCAM: Precision manufacturer of mechanical parts, CNC subassemblies, and suspension components."
      },
      {
        name: "Reconbatt",
        tier: "supporter",
        logo: "/assets/ReconBatt.webp",
        website: "https://www.reconbatt.com/",
        description: "Specialized battery store providing technical diagnostics, accumulator testing, and welding equipment support."
      },
      {
        name: "Rogranex",
        tier: "supporter",
        logo: "/assets/Rogranex_logo-768x136.webp",
        website: "https://rogranex.ro/",
        description: "Supplier of industrial machinery, mechanical hardware, and precision manufacturing equipment."
      },
      {
        name: "Rulmenti Suedia",
        tier: "supporter",
        logo: "/assets/RulmentiSuedia.webp",
        website: "https://www.rulmentisuedia.ro/",
        description: "Accredited distributor of SKF precision bearings, linear guides, and motion technology components."
      },
      {
        name: "Toyota",
        tier: "supporter",
        logo: "/assets/Toyota_Logo.svg",
        website: "https://toyotacluj.ro/",
        description: "Toyota Cluj: Official dealership providing hybrid, electric, and utility vehicles, supporting motorsport innovation."
      },
      {
        name: "Trambus Waterjet",
        tier: "supporter",
        logo: "/assets/TrambusWaterjet-1024x312.webp",
        website: "http://www.trambus.ro/",
        description: "High-pressure precision abrasive waterjet cutting services for aerospace, automotive, and industrial components."
      },
      {
        name: "Ulma Packaging",
        tier: "supporter",
        logo: "/assets/UlmaPackaging-1-1024x284.webp",
        website: "https://www.ulmapackaging.ro/",
        description: "ULMA Packaging is a global reference in the design and manufacture of packaging equipment and automated packaging solutions."
      }
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
  { name: "TUCN", logo: "/assets/UTC-N-Logo.webp", website: "https://www.utcluj.ro/" },
  { name: "CSi Romania", logo: "/assets/CSi-logo-300x293.webp", website: "https://www.csiportal.com/" },
  { name: "INAS / ANSYS", logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp", website: "https://www.inas.ro/ro/" },
  { name: "BT Leasing", logo: "/assets/BT-Leasing-2026-1024x270.webp", website: "https://www.btleasing.ro/" },
  { name: "ESPRiT Engineering", logo: "/assets/ESPRiT_Logo-removebg-preview.webp", website: "https://esprit-engineering.de/" },
  { name: "Marple Data", logo: "/assets/Marple-1024x356.webp", website: "https://www.marpledata.com/" },
  { name: "MasterMilling", logo: "/assets/Master-Milling.webp", website: "https://master-milling.ro/" },
  { name: "Analog Devices", logo: "/assets/ADI-Logo-AWP-Tagline-RGB-FullColor.webp", website: "https://www.analog.com/" },
  { name: "Color Control Support", logo: "/assets/ColorControlSupport.webp", website: "https://colorcontrol.ro/" },
  { name: "Emerson", logo: "/assets/Emerson-removebg-preview.webp", website: "https://www.emerson.com/" },
  { name: "RebelDot", logo: "/assets/rebeldot-logo-notagline-3.-black-rgb-900px-w-72ppi.webp", website: "https://www.rebeldot.com/" },
  { name: "ArtSoft", logo: "/assets/ArtSoft-Consult.webp", website: "https://www.artsoft-consult.ro/" },
  { name: "LEONI", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", website: "https://www.leoni.com/" },
  { name: "Transilvania Mobility Hub", logo: "/assets/Transilvania_mobility_HUB-1024x372.webp", website: "https://transilvaniamobility.ro/" },
  { name: "Easy Composites", logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp", website: "https://www.easycomposites.co.uk/" },
  { name: "Hoosier", logo: "/assets/Hoosier.webp", website: "https://www.hoosiertire.com/" },
  { name: "OZ Racing", logo: "/assets/OZRacing.webp", website: "https://www.ozracing.com/" },
  { name: "Toyota", logo: "/assets/Toyota_Logo.svg", website: "https://toyotacluj.ro/" },
  { name: "ASKUBAL", logo: "/assets/Askubal.webp", website: "http://www.askubal.de/" }
];

export const marqueeSponsors = marqueeLogos.map(m => m.name);

