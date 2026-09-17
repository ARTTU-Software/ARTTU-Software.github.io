export type SponsorTier = 'educational' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'supporter' | 'powered_by';

export interface Sponsor {
  name: string;
  tier?: SponsorTier;
  logo: string;
  secondaryLogo?: string;
  website?: string;
  description?: string;
}

export interface SponsorTierGroup {
  tier: SponsorTier;
  title: string;
  subtitle?: string;
  sponsors: Sponsor[];
}

export interface HistoricalCategory {
  name: string;
  sponsors: Sponsor[];
}

export interface HistoricalSeason {
  season: string;
  year: string;
  categories: HistoricalCategory[];
}

export interface MarqueeLogo {
  name: string;
  logo: string;
  website?: string;
}

/**
 * CURRENT PARTNERS
 * Strictly matches the original website order:
 * https://arttu-formulastudent.ro/partners/
 * Only Platinum and Gold tiers have descriptions; the rest are clickable images.
 */
export const sponsorTiers: SponsorTierGroup[] = [
  {
    tier: 'educational',
    title: 'Educational Partner',
    sponsors: [
      {
        name: "Technical University of Cluj-Napoca (UTCN)",
        tier: "educational",
        logo: "/assets/UTC-N-Logo.webp",
        secondaryLogo: "/assets/EUT_VERTICAL_EN-300x144.webp",
        website: "https://www.utcluj.ro/en/",
        description: "According to its Charter, the Technical University of Cluj-Napoca is an \"Advanced Research and Education University\". UTCN is today a higher education institution having both tradition and national and international recognition. UTCN is a member of the European University of Technology alliance, meant to enhance research, innovation, mobilities for students and staff, and to strengthen cooperation in the field of education."
      }
    ]
  },
  {
    tier: 'platinum',
    title: 'Platinum Partners',
    sponsors: [
      {
        name: "Porsche Engineering",
        tier: "platinum",
        logo: "/assets/PoweredByPERO-site1.webp",
        website: "https://www.porscheengineering.com/peg/en/",
        description: "Porsche Engineering Romania SRL, established in 2016 in Cluj-Napoca, is a wholly owned subsidiary of Porsche Engineering Group GmbH. Porsche Engineering's global network contains locations in Weissach, Bietigheim-Bissingen, Wolfsburg, Leipzig (all Germany), Prague, Ostrava (both Czech Republic), Shanghai (China), Cluj-Napoca (Romania) and Nardò (Italy)."
      },
      {
        name: "CSi Romania",
        tier: "platinum",
        logo: "/assets/CSi-logo-300x293.webp",
        website: "https://www.csiportal.com/",
        description: "CSi’s journey on industrial automated solutions started in 1964! Since then, CSi Group has been a playground where state-of-the-art projects are being carefully designed and manufactured to meet customer needs. Founded in 2004 as part of CSi Group, headquartered in the Netherlands, CSi Romania SRL, with two manufacturing facilities in Cluj-Napoca and Reghin, produces a wide range of fully integrated material handling and palletising systems."
      },
      {
        name: "INAS / ANSYS",
        tier: "platinum",
        logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
        secondaryLogo: "/assets/ansys-logo-yellow-skew-black-text.webp",
        website: "https://www.inas.ro/ro/",
        description: "Founded 1991 with origins in the aviation industry, INAS maintains its position of major provider for best-in-class CAD/CAM/CAE/PLM/IoT/AR software solutions, training, technical support and consulting services. The company is being recognized on the Romanian and international market as a leading technical consulting center for a wide spectrum of industrial applications from automotive, aerospace and heavy equipment to nuclear and defense."
      }
    ]
  },
  {
    tier: 'gold',
    title: 'Gold Partners',
    sponsors: [
      {
        name: "BT Leasing",
        tier: "gold",
        logo: "/assets/BT-Leasing-2026-1024x270.webp",
        website: "https://www.btleasing.ro/",
        description: "BT Leasing has been supporting thousands of plans and has put Romania in motion for the past 30 years, through tailored financial support and advise for entrepreneurs. This story has been about trust, adaptation and mindset. Now the story goes further with joining the #FormulaStudent family, helping young talents in engineering & motorsport grow and develop their skills."
      },
      {
        name: "ESPRiT Engineering",
        tier: "gold",
        logo: "/assets/ESPRiT_Logo-removebg-preview.webp",
        website: "https://www.esprit-engineering.de/",
        description: "Driven by passion for technology, ESPRiT Engineering's focus is on software-based electronics development in the areas of system design, system integration and components, as well as the optimization and establishment of processes, methods and tools."
      },
      {
        name: "Marple Data",
        tier: "gold",
        logo: "/assets/Marple-1024x356.webp",
        website: "https://www.marpledata.com/",
        description: "Marple is the go-to solution for managing large, high-frequency time series data. Designed for engineering and data science applications, Marple offers two powerful products: one for performant data storage and a second for advanced data analysis. Together, they provide the tools you need to handle complex datasets with ease."
      },
      {
        name: "MasterMilling",
        tier: "gold",
        logo: "/assets/Master-Milling.webp",
        website: "https://master-milling.ro/en",
        description: "Precision machining and milling support built for production teams. Master Milling combines direct programming ownership, practical process control, and responsive industrial subcontracting for single parts, small series, and recurring production work."
      },
      {
        name: "Meze Audio",
        tier: "gold",
        logo: "/assets/MezeAudio-removedbg.webp",
        website: "https://mezeaudio.com/",
        description: "Founded by industrial designer Antonio Meze in 2011, Meze Audio is a high-end audio company from Baia Mare, Romania, crafting headphones and earphones renewed for timeless design, pure comfort and engaging, vivid sound. Timeless, original, purposeful. This is what best describes the Meze Audio design philosophy, striving to create products that are beautiful, yet meticulously engineered to deliver exceptional performance."
      },
      {
        name: "Transilvania Mobility Hub",
        tier: "gold",
        logo: "/assets/Transilvania_mobility_HUB-1024x372.webp",
        website: "https://transilvaniamobility.ro/",
        description: "Transilvania Mobility Hub is the trusted partner when it comes to mobility – from automotive repair shop to dealership and more! Their well experienced and professional team is ready to help anytime."
      }
    ]
  },
  {
    tier: 'silver',
    title: 'Silver Partners',
    sponsors: [
      {
        name: "Emerson",
        tier: "silver",
        logo: "/assets/Emerson-removebg-preview.webp",
        website: "https://www.emerson.com/en/corporate"
      },
      {
        name: "Analog Devices",
        tier: "silver",
        logo: "/assets/ADI-Logo-AWP-Tagline-RGB-FullColor.webp",
        website: "https://www.analog.com/en/index.html"
      },
      {
        name: "RebelDot",
        tier: "silver",
        logo: "/assets/rebeldot-logo-notagline-3.-black-rgb-900px-w-72ppi.webp",
        website: "https://www.rebeldot.com/"
      },
      {
        name: "T&T Karting Transilvania",
        tier: "silver",
        logo: "/assets/TTKartingTransilvania-300x240.webp",
        website: "https://kartingtransilvania.ro/"
      },
      {
        name: "Color Control Support",
        tier: "silver",
        logo: "/assets/ColorControlSupport.webp",
        website: "https://www.colorcontrol.ro/en/"
      },
      {
        name: "Giroli",
        tier: "silver",
        logo: "/assets/Giroli.webp",
        website: "https://giroli.ro/"
      }
    ]
  },
  {
    tier: 'bronze',
    title: 'Bronze Partners',
    sponsors: [
      {
        name: "ArtSoft Consult",
        tier: "bronze",
        logo: "/assets/ArtSoft-Consult.webp",
        website: "https://www.artsoft-consult.ro/"
      },
      {
        name: "Nova Tooling",
        tier: "bronze",
        logo: "/assets/Nova-Tooling.webp",
        website: "https://novatooling.ro/"
      },
      {
        name: "BigStore",
        tier: "bronze",
        logo: "/assets/BigStore.webp",
        website: "https://big.store.ro/"
      },
      {
        name: "Power Belt",
        tier: "bronze",
        logo: "/assets/Power_Belt.webp",
        website: "https://powerbelt.ro/"
      },
      {
        name: "Compexit",
        tier: "bronze",
        logo: "/assets/Compexit.webp",
        website: "https://www.compexit.ro/"
      },
      {
        name: "Server Config",
        tier: "bronze",
        logo: "/assets/Server_Config_2020_Premium-Refurbished_negru-768x285.webp",
        website: "https://www.server-config.ro/"
      },
      {
        name: "BikeShow",
        tier: "bronze",
        logo: "/assets/BikeShow.webp",
        website: "https://bikeshow.ro/"
      },
      {
        name: "Brizard",
        tier: "bronze",
        logo: "/assets/Brizard-logo.webp",
        website: "https://www.brizard-industries.com/en/"
      },
      {
        name: "Schroth Racing",
        tier: "bronze",
        logo: "/assets/Schroth-Racing.webp",
        website: "https://www.schroth.com/"
      },
      {
        name: "Pfeiffer Vacuum",
        tier: "bronze",
        logo: "/assets/Pfeiffer_Logo_RGB_ClaimRight.webp",
        website: "https://www.pfeiffervacuum.com/ro/"
      }
    ]
  },
  {
    tier: 'supporter',
    title: 'Supporters',
    sponsors: [
      {
        name: "ProCam",
        tier: "supporter",
        logo: "/assets/procam_logo.webp",
        website: "https://procam.ro/"
      },
      {
        name: "Eurocompozite",
        tier: "supporter",
        logo: "/assets/Logo_Eurocompozite-removebg-preview.webp",
        website: "https://www.eurocompozite.ro/"
      },
      {
        name: "Trambus Waterjet",
        tier: "supporter",
        logo: "/assets/TrambusWaterjet-1024x312.webp",
        website: "http://www.trambus.ro/"
      },
      {
        name: "Innotech",
        tier: "supporter",
        logo: "/assets/Innotec.webp",
        website: "https://www.innotec.ro/"
      },
      {
        name: "Ulma Packaging",
        tier: "supporter",
        logo: "/assets/UlmaPackaging-1-1024x284.webp",
        website: "https://www.ulmapackaging.ro/"
      },
      {
        name: "ReconBatt",
        tier: "supporter",
        logo: "/assets/ReconBatt.webp",
        website: "https://www.reconbatt.com/"
      },
      {
        name: "Rogranex",
        tier: "supporter",
        logo: "/assets/Rogranex_logo-768x136.webp",
        website: "https://rogranex.ro/"
      },
      {
        name: "Emuge Franken",
        tier: "supporter",
        logo: "/assets/Emugen-Franken.webp",
        website: "https://emuge.ro/"
      },
      {
        name: "Rulmenti Suedia",
        tier: "supporter",
        logo: "/assets/RulmentiSuedia.webp",
        website: "https://www.rulmentisuedia.ro/"
      },
      {
        name: "Askubal",
        tier: "supporter",
        logo: "/assets/Askubal.webp",
        website: "https://www.askubal.de/en/"
      },
      {
        name: "ProfiAuto (Toyota)",
        tier: "supporter",
        logo: "/assets/ProfiAuto.webp",
        website: "https://toyotacluj.ro/"
      },
      {
        name: "AgroInter",
        tier: "supporter",
        logo: "/assets/AgroInter.webp",
        website: "https://agrointer.ro/"
      },
      {
        name: "Easy Composites",
        tier: "supporter",
        logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp",
        website: "https://www.easycomposites.co.uk/"
      },
      {
        name: "CADInter",
        tier: "supporter",
        logo: "/assets/CADInter-removebg-preview-300x178.webp",
        website: "https://cadinter.ro/"
      },
      {
        name: "Perfect Seal",
        tier: "supporter",
        logo: "/assets/PerfectSeal.webp",
        website: "https://www.perfectseal.ro/"
      },
      {
        name: "OZ Racing",
        tier: "supporter",
        logo: "/assets/OZRacing.webp",
        website: "https://www.ozracing.com/"
      },
      {
        name: "Autosock",
        tier: "supporter",
        logo: "/assets/Autosock.webp",
        website: "https://autosock.com/"
      },
      {
        name: "Hoosier",
        tier: "supporter",
        logo: "/assets/Hoosier.webp",
        website: "https://www.hoosiertire.com/"
      },
      {
        name: "Liner DP",
        tier: "supporter",
        logo: "/assets/LinerDP.webp",
        website: "https://www.liner.ro/"
      },
      {
        name: "IFM Electronic",
        tier: "supporter",
        logo: "/assets/IFM.webp",
        website: "https://www.ifm.com/ro/ro"
      },
      {
        name: "NKON",
        tier: "supporter",
        logo: "/assets/NKON.webp",
        website: "https://www.nkon.nl/en/"
      },
      {
        name: "Daisler",
        tier: "supporter",
        logo: "/assets/Daisler2-removebg-preview-150x150.webp",
        website: "https://www.daisler.ro/"
      },
      {
        name: "Dadis Motorsport",
        tier: "supporter",
        logo: "/assets/Dadis-Motorsport-1024x292.webp",
        website: "https://dadismotorsport.com/"
      },
      {
        name: "Mars Outpost",
        tier: "supporter",
        logo: "/assets/MarsOutpost-LogoClearNew-150x150.webp",
        website: "https://marsoutpost.net/"
      },
      {
        name: "FloriArt",
        tier: "supporter",
        logo: "/assets/FloriArt.webp",
        website: "https://www.floriart.ro/"
      },
      {
        name: "Oshee",
        tier: "supporter",
        logo: "/assets/Oshee.webp",
        website: "https://oshee.ro/"
      },
      {
        name: "LEONI",
        tier: "supporter",
        logo: "/assets/Logo-LEONI_Vizual-1024x724.webp",
        website: "https://www.leoni.ro/"
      }
    ]
  }
];

/**
 * SPONSOR HISTORY
 * Organized by Season (2025, 2024, 2023, 2022) and Categories (Powered by, Platinum, Silver, Bronze).
 * Strictly contains NO descriptions, presenting pure clickable logos.
 */
export const historicalSeasons: HistoricalSeason[] = [
  {
    season: "Season 2025",
    year: "2025",
    categories: [
      {
        name: "Platinum",
        sponsors: [
          {
            name: "Porsche Engineering",
            tier: "platinum",
            logo: "/assets/PE_Logo_2023-768x112.webp",
            website: "https://www.porscheengineering.com/peg/en/"
          },
          {
            name: "CSi Romania",
            tier: "platinum",
            logo: "/assets/CSi-logo-300x293.webp",
            website: "https://www.csiportal.com/news/csiromania/"
          },
          {
            name: "INAS / ANSYS",
            tier: "platinum",
            logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
            secondaryLogo: "/assets/ansys-logo-yellow-skew-black-text.webp",
            website: "https://www.inas.ro/ro/"
          }
        ]
      },
      {
        name: "Silver",
        sponsors: [
          {
            name: "BT Leasing",
            tier: "silver",
            logo: "/assets/30-ani-BT-Leasing_Logo_003-768x432.webp",
            website: "https://www.btleasing.ro/povestea-bt-leasing"
          },
          {
            name: "Belco Avia",
            tier: "silver",
            logo: "/assets/belco-avia1-300x70.webp",
            website: "https://www.belcoavia.ro/"
          },
          {
            name: "Transilvania Mobility Hub",
            tier: "silver",
            logo: "/assets/Transilvania_mobility_HUB-768x279.webp",
            website: "https://transilvaniamobility.ro/"
          }
        ]
      },
      {
        name: "Bronze",
        sponsors: [
          { name: "ARRK", tier: "bronze", logo: "/assets/ARRK_Logo_RGB-removebg-preview.webp", website: "https://engineering.arrk.com/" },
          { name: "Fundatia Autonom", tier: "bronze", logo: "/assets/Logo-Fundatia-300x200.webp", website: "https://fundatia.autonom.ro/" },
          { name: "Daisler", tier: "bronze", logo: "/assets/Daisler2-removebg-preview-150x150.webp", website: "https://www.daisler.ro/" },
          { name: "OMV", tier: "bronze", logo: "/assets/omv-logo-rgb-neon-green--768x372.webp", website: "https://www.omv.com/" },
          { name: "Inoterv", tier: "bronze", logo: "/assets/Inoterv-Logo.webp" },
          { name: "Hexagon", tier: "bronze", logo: "/assets/HxGN-300x130.webp" },
          { name: "Nanil Catering", tier: "bronze", logo: "/assets/Logo_nanil_green-300x173.webp", website: "https://catering-sibiu.ro/" },
          { name: "Perficient", tier: "bronze", logo: "/assets/PRFT_Logo-Color-1024x351.webp", website: "https://www.perficient.com/" },
          { name: "Nova Tooling", tier: "bronze", logo: "/assets/NT-logo-color-150x150.webp", website: "https://novatooling.ro/" },
          { name: "RAAL", tier: "bronze", logo: "/assets/RAAL-Logo-2-300x105.webp", website: "https://www.raal.ro/" },
          { name: "Eurocompozite", tier: "bronze", logo: "/assets/Logo_Eurocompozite-removebg-preview.webp", website: "https://www.eurocompozite.ro/" },
          { name: "Color Control Support", tier: "bronze", logo: "/assets/ColorControlSupport.webp", website: "https://www.colorcontrol.ro/en/" },
          { name: "Ulma Packaging", tier: "bronze", logo: "/assets/UlmaPackaging-1-1024x284.webp", website: "https://www.ulmapackaging.ro/" },
          { name: "Server Config", tier: "bronze", logo: "/assets/Server_Config_2020_Premium-Refurbished_negru-768x285.webp", website: "https://www.server-config.ro/" },
          { name: "Emuge Franken", tier: "bronze", logo: "/assets/Emugen-Franken.webp", website: "https://emuge.ro/" },
          { name: "CADInter", tier: "bronze", logo: "/assets/CADInter-removebg-preview-300x178.webp", website: "https://cadinter.ro/" },
          { name: "Rogranex", tier: "bronze", logo: "/assets/Rogranex_logo-768x136.webp", website: "https://rogranex.ro/" },
          { name: "Exsteel", tier: "bronze", logo: "/assets/Exsteel-Logo-Partner-300x104.webp", website: "https://www.exsteel.ro/" },
          { name: "Tecosim", tier: "bronze", logo: "/assets/Tecosim-logo-300x154.webp", website: "https://tecosim.com/ro/" },
          { name: "Mars Outpost", tier: "bronze", logo: "/assets/MarsOutpost-LogoClearNew-150x150.webp", website: "https://marsoutpost.net/" },
          { name: "Easy Composites", tier: "bronze", logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp", website: "https://www.easycomposites.co.uk/" },
          { name: "Trambus Waterjet", tier: "bronze", logo: "/assets/TrambusWaterjet-1024x312.webp", website: "http://www.trambus.ro/" },
          { name: "T&T Karting Transilvania", tier: "bronze", logo: "/assets/TTKartingTransilvania-300x240.webp", website: "https://kartingtransilvania.ro/" }
        ]
      }
    ]
  },
  {
    season: "Season 2024",
    year: "2024",
    categories: [
      {
        name: "Platinum",
        sponsors: [
          {
            name: "Porsche Engineering",
            tier: "platinum",
            logo: "/assets/PE_Logo_2023-768x112.webp",
            website: "https://www.porscheengineering.com/peg/en/"
          },
          {
            name: "CSi Romania",
            tier: "platinum",
            logo: "/assets/CSi-logo-300x293.webp",
            website: "https://www.csiportal.com/"
          }
        ]
      },
      {
        name: "Silver",
        sponsors: [
          { name: "ARRK", tier: "silver", logo: "/assets/ARRK_Logo_RGB-removebg-preview.webp", website: "https://engineering.arrk.com/" },
          { name: "Belco Avia", tier: "silver", logo: "/assets/belco-avia1-1024x238.webp", website: "https://www.belcoavia.ro/" },
          { name: "ESPRiT Engineering", tier: "silver", logo: "/assets/ESPRiT_Logo-removebg-preview.webp", website: "https://www.esprit-engineering.de/" },
          { name: "Transilvania Mobility Hub", tier: "silver", logo: "/assets/Transilvania_mobility_HUB-1024x372.webp", website: "https://transilvaniamobility.ro/" }
        ]
      },
      {
        name: "Bronze",
        sponsors: [
          { name: "Fundatia Autonom", tier: "bronze", logo: "/assets/Logo-Fundatia-Autonom.webp", website: "https://fundatia.autonom.ro/" },
          { name: "Tecosim", tier: "bronze", logo: "/assets/Tecosim-logo-300x154.webp", website: "https://tecosim.com/ro/" },
          { name: "Ulma Packaging", tier: "bronze", logo: "/assets/UlmaPackaging-1-1024x284.webp", website: "https://www.ulmapackaging.ro/" },
          { name: "RAAL", tier: "bronze", logo: "/assets/RAAL-Logo-2.webp", website: "https://www.raal.ro/" },
          { name: "Race Shop", tier: "bronze", logo: "/assets/Race-shop-on-black.webp", website: "https://race-shop.ro/" },
          { name: "Rogranex", tier: "bronze", logo: "/assets/Rogranex_logo-768x136.webp", website: "https://rogranex.ro/" },
          {
            name: "INAS / ANSYS",
            tier: "bronze",
            logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
            secondaryLogo: "/assets/ansys-logo-yellow-skew-black-text.webp",
            website: "https://www.inas.ro/ro/"
          },
          { name: "Inoterv", tier: "bronze", logo: "/assets/Inoterv-Logo.webp" },
          { name: "Hexagon", tier: "bronze", logo: "/assets/HxGN-300x130.webp" },
          { name: "LEONI", tier: "bronze", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", website: "https://www.leoni.com/" },
          { name: "Emuge Franken", tier: "bronze", logo: "/assets/Emugen-Franken.webp", website: "https://emuge.ro/" },
          { name: "CADInter", tier: "bronze", logo: "/assets/CADInter-removebg-preview-300x178.webp", website: "https://cadinter.ro/" },
          { name: "Exsteel", tier: "bronze", logo: "/assets/Exsteel-Logo-Partner-300x104.webp", website: "https://www.exsteel.ro/" },
          { name: "Cluj BIZZ Club", tier: "bronze", logo: "/assets/Logo-Cluj-BIZZ-Club.webp", website: "https://bizz.club/" },
          { name: "Gri-Pumps", tier: "bronze", logo: "/assets/Gri-Pumps-logo.webp", website: "https://www.gripumps.com/" },
          { name: "PMA Invest", tier: "bronze", logo: "/assets/pma_2020-1024x652.webp", website: "https://pma.ro/" }
        ]
      }
    ]
  },
  {
    season: "Season 2023",
    year: "2023",
    categories: [
      {
        name: "Platinum",
        sponsors: [
          {
            name: "Porsche Engineering",
            tier: "platinum",
            logo: "/assets/PE_Logo_2023-768x112.webp",
            website: "https://www.porscheengineering.com/peg/en/"
          },
          {
            name: "George BCR",
            tier: "platinum",
            logo: "/assets/George_BCR-logo-300x137.webp",
            website: "https://www.bcr.ro/"
          }
        ]
      },
      {
        name: "Silver",
        sponsors: [
          { name: "ARRK", tier: "silver", logo: "/assets/ARRK_Logo_RGB-removebg-preview.webp", website: "https://engineering.arrk.com/" },
          { name: "CSi Romania", tier: "silver", logo: "/assets/CSi-logo-300x293.webp", website: "https://www.csiportal.com/" },
          { name: "Belco Avia", tier: "silver", logo: "/assets/belco-avia1-1024x238.webp", website: "https://www.belcoavia.ro/" },
          { name: "Tecosim", tier: "silver", logo: "/assets/Tecosim-logo-300x154.webp", website: "https://tecosim.com/ro/" },
          { name: "LEONI", tier: "silver", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", website: "https://www.leoni.com/" },
          { name: "Guhring", tier: "silver", logo: "/assets/Guhring-logo-1024x214.webp", website: "https://guehring.com/" }
        ]
      },
      {
        name: "Bronze",
        sponsors: [
          { name: "EuroDezmembrari", tier: "bronze", logo: "/assets/EuroDezmembrari.webp" },
          { name: "Transilvania Mobility Hub", tier: "bronze", logo: "/assets/Sigla_mobility_NEW-removebg-preview-1.webp", website: "https://transilvaniamobility.ro/" },
          { name: "PMA Invest", tier: "bronze", logo: "/assets/pma_2020-1024x652.webp", website: "https://pma.ro/" },
          { name: "Fundatia Autonom", tier: "bronze", logo: "/assets/Logo-Fundatia-Autonom.webp", website: "https://fundatia.autonom.ro/" },
          { name: "Eurial Invest", tier: "bronze", logo: "/assets/logo-eurial-1024x305.webp", website: "https://eurial.ro/" },
          { name: "Race Shop", tier: "bronze", logo: "/assets/Race-shop-on-black.webp", website: "https://race-shop.ro/" },
          {
            name: "INAS / ANSYS",
            tier: "bronze",
            logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp",
            secondaryLogo: "/assets/ansys-logo-yellow-skew-black-text.webp",
            website: "https://www.inas.ro/ro/"
          },
          { name: "Inoterv", tier: "bronze", logo: "/assets/Inoterv-Logo.webp" },
          { name: "Hexagon", tier: "bronze", logo: "/assets/HxGN-300x130.webp" },
          { name: "Rogranex", tier: "bronze", logo: "/assets/Rogranex_logo-768x136.webp", website: "https://rogranex.ro/" },
          { name: "Emuge Franken", tier: "bronze", logo: "/assets/Emugen-Franken.webp", website: "https://emuge.ro/" },
          { name: "CADInter", tier: "bronze", logo: "/assets/CADInter-removebg-preview-300x178.webp", website: "https://cadinter.ro/" },
          { name: "Exsteel", tier: "bronze", logo: "/assets/Exsteel-Logo-Partner-300x104.webp", website: "https://www.exsteel.ro/" },
          { name: "Smart Driving", tier: "bronze", logo: "/assets/Smart-driving-logo.webp", website: "https://smart-driving.eu/" },
          { name: "Gri-Pumps", tier: "bronze", logo: "/assets/Gri-Pumps-logo-300x218.webp", website: "https://www.gripumps.com/" },
          { name: "Southco", tier: "bronze", logo: "/assets/southco-logo.webp", website: "https://southco.com/" },
          { name: "Cluj BIZZ Club", tier: "bronze", logo: "/assets/Logo-Cluj-BIZZ-Club.webp", website: "https://bizz.club/" },
          { name: "Veridio", tier: "bronze", logo: "/assets/Veridio-logo.webp", website: "https://veridio.ro/" },
          { name: "AGO Project", tier: "bronze", logo: "/assets/AGO-Project.webp", website: "https://agoproject.ro/" },
          { name: "AROBS", tier: "bronze", logo: "/assets/Sigla-AROBS.webp", website: "https://arobs.com/" },
          { name: "RAAL", tier: "bronze", logo: "/assets/RAAL-Logo-2.webp", website: "https://www.raal.ro/" },
          { name: "3D4All", tier: "bronze", logo: "/assets/Sigla-3D4All.webp", website: "https://3d4all.ro/" },
          { name: "PSC", tier: "bronze", logo: "/assets/PSC-logo.webp", website: "https://psc.ro/" },
          { name: "Brizard", tier: "bronze", logo: "/assets/Brizard-logo.webp", website: "https://brizard.ro/" }
        ]
      }
    ]
  },
  {
    season: "Season 2022",
    year: "2022",
    categories: [
      {
        name: "Platinum",
        sponsors: [
          {
            name: "Porsche Engineering",
            tier: "platinum",
            logo: "/assets/Logo-Porsche-Eng.-768x155.webp",
            website: "https://www.porscheengineering.com/peg/en/"
          },
          {
            name: "George BCR",
            tier: "platinum",
            logo: "/assets/George_BCR-logo-300x137.webp",
            website: "https://www.bcr.ro/"
          }
        ]
      },
      {
        name: "Silver",
        sponsors: [
          { name: "Tecosim", tier: "silver", logo: "/assets/Tecosim-logo-300x154.webp", website: "https://tecosim.com/ro/" },
          { name: "CSi Romania", tier: "silver", logo: "/assets/CSi-logo-300x293.webp", website: "https://www.csiportal.com/" },
          { name: "Guhring", tier: "silver", logo: "/assets/Guhring-logo-1024x214.webp", website: "https://guehring.com/" }
        ]
      },
      {
        name: "Bronze",
        sponsors: [
          { name: "Southco", tier: "bronze", logo: "/assets/southco-logo.webp", website: "https://southco.com/" },
          { name: "Smart Driving", tier: "bronze", logo: "/assets/Smart-driving-logo.webp", website: "https://smart-driving.eu/" },
          { name: "AGO Project", tier: "bronze", logo: "/assets/AGO-Project.webp", website: "https://agoproject.ro/" },
          { name: "CBC Campus", tier: "bronze", logo: "/assets/CBC-Campus-logo.webp", website: "https://cbccampus.ro/" },
          { name: "Veridio", tier: "bronze", logo: "/assets/Veridio-logo.webp", website: "https://veridio.ro/" },
          { name: "Rogranex", tier: "bronze", logo: "/assets/Rogranex_logo-768x136.webp", website: "https://rogranex.ro/" },
          { name: "3D4All", tier: "bronze", logo: "/assets/Sigla-3D4All.webp", website: "https://3d4all.ro/" },
          { name: "AROBS", tier: "bronze", logo: "/assets/Sigla-AROBS.webp", website: "https://arobs.com/" },
          { name: "Cluj BIZZ Club", tier: "bronze", logo: "/assets/Logo-Cluj-BIZZ-Club.webp", website: "https://bizz.club/" },
          { name: "Emuge Franken", tier: "bronze", logo: "/assets/Emugen-Franken.webp", website: "https://emuge.ro/" },
          { name: "Gri-Pumps", tier: "bronze", logo: "/assets/Gri-Pumps-logo.webp", website: "https://www.gripumps.com/" },
          { name: "MSC Software", tier: "bronze", logo: "/assets/MSC_logo-1024x233.webp", website: "https://mscsoftware.com/" },
          { name: "RAAL", tier: "bronze", logo: "/assets/RAAL-Logo-2.webp", website: "https://www.raal.ro/" },
          { name: "Motul", tier: "bronze", logo: "/assets/Motul-logo.webp", website: "https://www.motul.com/" },
          { name: "Race Shop", tier: "bronze", logo: "/assets/Race-shop-on-black.webp", website: "https://race-shop.ro/" },
          { name: "Brizard", tier: "bronze", logo: "/assets/Brizard-logo.webp", website: "https://brizard.ro/" },
          { name: "PSC", tier: "bronze", logo: "/assets/PSC-logo.webp", website: "https://psc.ro/" },
          { name: "Exsteel", tier: "bronze", logo: "/assets/Exsteel-Logo-Partner-300x104.webp", website: "https://www.exsteel.ro/" },
          { name: "Plettenberg", tier: "bronze", logo: "/assets/PLETTENBERG-Logo.webp", website: "https://plettenbergmotors.com/" },
          { name: "Daisler", tier: "bronze", logo: "/assets/Daisler-logo.webp", website: "https://daisler.ro/" }
        ]
      }
    ]
  }
];

export const marqueeLogos: MarqueeLogo[] = [
  { name: "Porsche Engineering", logo: "/assets/PoweredByPERO-site1.webp", website: "https://www.porscheengineering.com/peg/en/" },
  { name: "UTCN", logo: "/assets/UTC-N-Logo.webp", website: "https://www.utcluj.ro/en/" },
  { name: "CSi Romania", logo: "/assets/CSi-logo-300x293.webp", website: "https://www.csiportal.com/" },
  { name: "INAS / ANSYS", logo: "/assets/INAS-LOGO-SAFE-SPACE-1024x560.webp", website: "https://www.inas.ro/ro/" },
  { name: "BT Leasing", logo: "/assets/BT-Leasing-2026-1024x270.webp", website: "https://www.btleasing.ro/" },
  { name: "ESPRiT Engineering", logo: "/assets/ESPRiT_Logo-removebg-preview.webp", website: "https://esprit-engineering.de/" },
  { name: "Marple Data", logo: "/assets/Marple-1024x356.webp", website: "https://www.marpledata.com/" },
  { name: "MasterMilling", logo: "/assets/Master-Milling.webp", website: "https://master-milling.ro/en" },
  { name: "Meze Audio", logo: "/assets/MezeAudio-removedbg.webp", website: "https://mezeaudio.com/" },
  { name: "Transilvania Mobility Hub", logo: "/assets/Transilvania_mobility_HUB-1024x372.webp", website: "https://transilvaniamobility.ro/" },
  { name: "Emerson", logo: "/assets/Emerson-removebg-preview.webp", website: "https://www.emerson.com/en/corporate" },
  { name: "Analog Devices", logo: "/assets/ADI-Logo-AWP-Tagline-RGB-FullColor.webp", website: "https://www.analog.com/en/index.html" },
  { name: "RebelDot", logo: "/assets/rebeldot-logo-notagline-3.-black-rgb-900px-w-72ppi.webp", website: "https://www.rebeldot.com/" },
  { name: "Color Control Support", logo: "/assets/ColorControlSupport.webp", website: "https://colorcontrol.ro/" },
  { name: "ArtSoft Consult", logo: "/assets/ArtSoft-Consult.webp", website: "https://www.artsoft-consult.ro/" },
  { name: "Easy Composites", logo: "/assets/easy-composites-logo-curves-removebg-preview-300x113.webp", website: "https://www.easycomposites.co.uk/" },
  { name: "Hoosier", logo: "/assets/Hoosier.webp", website: "https://www.hoosiertire.com/" },
  { name: "OZ Racing", logo: "/assets/OZRacing.webp", website: "https://www.ozracing.com/" },
  { name: "ASKUBAL", logo: "/assets/Askubal.webp", website: "http://www.askubal.de/en/" },
  { name: "LEONI", logo: "/assets/Logo-LEONI_Vizual-1024x724.webp", website: "https://www.leoni.ro/" }
];

export const marqueeSponsors = marqueeLogos.map(m => m.name);
