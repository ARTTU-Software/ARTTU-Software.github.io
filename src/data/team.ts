import { CARS_DATABASE } from './carsDatabase';

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'instagram' | 'email' | 'facebook';
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  subteam?: string;
  season: string; // e.g. "2025-2026", "2024-2025", etc.
  image?: string;
  linkedin?: string;
  facebook?: string;
  email?: string;
  bio?: string;
}

export interface TeamEvent {
  title: string;
  date: string;
  location?: string;
  description: string;
  image?: string;
  sponsor?: string;
}


export interface TeamGeneration {
  id: string; // "2025-2026", "2024-2025", "2023-2024", "2022-2023", "2019-2020"
  season: string;
  title: string;
  yearSpan: string;
  tagline: string;
  badge: string;
  carModel?: string;
  groupPhoto: string;
  groupPhotoCaption: string;
  description: string;
  highlights: string[];
  members: TeamMember[];
  events?: TeamEvent[];
}

export const teamGenerations: TeamGeneration[] = [
  {
    id: "2025-2026",
    season: "2025-2026",
    title: "Current Generation (2025-2026)",
    yearSpan: "2025 - 2026",
    tagline: "Historic FS Balkans Overall Champions & FSG/FSAA Milestone",
    badge: "Current Generation",
    carModel: CARS_DATABASE['afia-art26'].name,
    groupPhoto: "/assets/2026_main_photo.webp",
    groupPhotoCaption: "The 2025-2026 ART TU Team celebrating 1st Place Overall Championship victory at FS Balkans 2026.",
    description: "The 2025-2026 season represents the most successful chapter in ART TU history yet. The results speak for themselves: 1st Place Overall Champions at Formula Student Balkans 2026, 1st Place in Engineering Design, Cost & Manufacturing, and Business Plan Presentation, and P3 in Efficiency with full 22 km Endurance completion at all competitions.",
    highlights: [
      "1st Place Overall Champions at Formula Student Balkans 2026 (TNT Karting Dej)",
      "1st Place in Engineering Design, Cost & Manufacturing, and Business Plan Presentation",
      "P3 in Efficiency and full 22 km Endurance completion at all competitions"
    ],
    members: [
      {
        name: "Radu-Mihai POPA",
        role: "Team Captain",
        department: "Executive",
        season: "2025-2026",
        image: "/assets/Asta-3-1-scaled.webp",
        linkedin: "https://www.linkedin.com/in/popa-radu-4050051a9/",
        facebook: "https://www.facebook.com/raducu.popa.5",
        bio: "Leading overall team operations, competition strategy, and inter-departmental synergy for the 2025-2026 championship campaign."
      },
      {
        name: "Lucian LOMNĂȘAN",
        role: "Project Manager",
        department: "Management",
        season: "2025-2026",
        image: "/assets/Asta-2-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Managing project timelines, partner deliverables, procurement budgets, and static event coordination."
      },
      {
        name: "Toni OLARU",
        role: "Technical Lead",
        department: "Engineering",
        season: "2025-2026",
        image: "/assets/IMG_0462-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Overseeing complete technical architecture, EV powertrain integration, and rule compliance across all subsystems."
      },
      {
        name: "Teona Maria COTEA",
        role: "Junior Team Captain & Electrical Lead",
        department: "Electrical & Software",
        season: "2025-2026",
        image: "/assets/asta-1-2-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Directing the low-voltage electronics, telemetry systems, wire harness routing, and firmware development."
      },
      {
        name: "Robert CERCEL",
        role: "Electrical & Software Technical Advisor",
        department: "Electrical & Software",
        season: "2025-2026",
        image: "/assets/asta_final_v3_final_final-scaled.webp",
        linkedin: "https://www.linkedin.com/in/hexafobia/",
        facebook: "https://www.facebook.com/robert.cercel.16",
        bio: "Senior technical advisor specializing in vehicle control units, CAN-bus networks, and electrical scrutineering prep."
      },
      {
        name: "Ionuț BĂNICĂ",
        role: "Mechanical Team Leader",
        department: "Mechanical & Aero",
        season: "2025-2026",
        image: "/assets/Astaa-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Supervising tubular chassis manufacturing, impact attenuator, pedal box, and structural load analysis."
      },
      {
        name: "Teodora KORUJAN",
        role: "Vehicle Dynamics Team Leader",
        department: "Vehicle Dynamics",
        season: "2025-2026",
        image: "/assets/astaaaa-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Directing suspension kinematics, damper tuning, anti-roll bars, and high-performance tire simulation."
      },
      {
        name: "Ana DOMȘA",
        role: "Vehicle Dynamics Technical Advisor",
        department: "Vehicle Dynamics",
        season: "2025-2026",
        image: "/assets/IMG_0444-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Specializing in vehicle handling simulations, cornering balance, steering geometry, and skidpad telemetry."
      },
      {
        name: "Melissa MĂRCUȘ",
        role: "Accumulator & Powertrain Team Leader",
        department: "Powertrain & HV",
        season: "2025-2026",
        image: "/assets/Asta-4-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Leading 600V accumulator container fabrication, cell thermal management, and inverter cooling systems."
      },
      {
        name: "Miruna CHENDE",
        role: "Finances & Marketing Team Leader",
        department: "Business & Media",
        season: "2025-2026",
        image: "/assets/Asta-1-682x1024.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ARTteamClujNapoca",
        bio: "Heading sponsor relations, marketing campaigns, team media presence, and Business Plan Presentation (BPP)."
      },
      {
        name: "Irina DUMA",
        role: "Administrative Support",
        department: "Operations",
        season: "2025-2026",
        image: "/assets/Screenshot-2025-10-28-204414.webp",
        linkedin: "https://www.linkedin.com/in/irinaduma/",
        facebook: "https://www.facebook.com/irina.duma.10",
        bio: "Coordinating university administration, travel logistics, legal compliance, and long-term organizational stability."
      },
      {
        name: "Prof. Dr. Ing. Bogdan-Ovidiu VARGA",
        role: "University Coordinator & Faculty Advisor",
        department: "UTCN Faculty",
        season: "2025-2026",
        image: "/assets/Bogdan-Ovidiu-VARGA-1024x678.webp",
        linkedin: "https://www.linkedin.com/in/vargab1/",
        facebook: "https://www.facebook.com/profile.php?id=100010175641215",
        bio: "Technical University of Cluj-Napoca Professor & mentor, guiding engineering innovation and faculty institutional support."
      }
    ]
  },
  {
    id: "2024-2025",
    season: "2024-2025",
    title: "Breakthrough & Scrutineering Generation (2024-2025)",
    yearSpan: "2024 - 2025",
    tagline: "Podium Finish at FS Balkans 2025 and all dynamic events completed for the first time",
    badge: "Breakthrough Season",
    carModel: CARS_DATABASE['art-25'].name,
    groupPhoto: "/assets/20250821_12-46-42_1527_grobe-XL.webp",
    groupPhotoCaption: "The 2024-2025 ART TU crew lined up on the Formula Student grid with the second-generation EV prototype.",
    description: "Season 2024-2025 proved to be the turning point for us. We passed for the first time ever all scrutineering checks at both FSG/FSBK on the first try, and we finished on the podium at FS Balkans 2025. The team also completed all dynamic events for the first time, including acceleration, skidpad, autocross, and endurance.",
    highlights: [
      "P1 in all statics at FS Balkans 2025, including Engineering Design, Cost & Manufacturing, and Business Plan Presentation",
      "1st Place in Engineering Design & 1st in Business Plan Presentation",
      "2nd Place in Cost & Manufacturing at FS Balkans",
      "Passed Mechanical Scrutineering at Formula Student Czech (Most Autodrom)"
    ],
    members: [
      {
        name: "Radu-Mihai POPA",
        role: "Team Captain & Project Manager",
        department: "Executive",
        season: "2024-2025",
        image: "/assets/IMG_1091-scaled.webp",
        linkedin: "https://www.linkedin.com/in/popa-radu-4050051a9/",
        facebook: "https://www.facebook.com/raducu.popa.5",
        bio: "Captain during the breakthrough 2024 campaign, structuring cross-functional engineering processes."
      },
      {
        name: "Bogdan GAL",
        role: "Vehicle Dynamics Team Leader",
        department: "Vehicle Dynamics",
        season: "2024-2025",
        image: "/assets/IMG_1081-scaled.webp",
        linkedin: "https://www.linkedin.com/in/bogdan-gal-145397258/",
        facebook: "https://www.facebook.com/gal.bogdan.31",
        bio: "Led suspension design and steering dynamics, winning Engineering Design at FS Balkans."
      },
      {
        name: "Alpar TOMPOS",
        role: "Mechanical Team Leader",
        department: "Mechanical & Aero",
        season: "2024-2025",
        image: "/assets/IMG_1096-scaled.webp",
        linkedin: "https://www.linkedin.com/in/alp%C3%A1r-tompos-236751208/",
        facebook: "https://www.facebook.com/alpar.tompos",
        bio: "Engineered chassis optimizations and mechanical safety systems that passed tech inspections at FS Czech."
      },
      {
        name: "Robert CERCEL",
        role: "Electrical & Software Team Leader",
        department: "Electrical & Software",
        season: "2024-2025",
        image: "/assets/IMG_4955-scaled.webp",
        linkedin: "https://www.linkedin.com/in/hexafobia/",
        facebook: "https://www.facebook.com/robert.cercel.16",
        bio: "Architected the low-voltage electronics harness and custom sensor telemetry acquisition."
      },
      {
        name: "Ionuț MOLDOVAN",
        role: "Tractive System Team Leader",
        department: "Powertrain & HV",
        season: "2024-2025",
        image: "/assets/IMG_1244-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ionut.molduvan",
        bio: "Developed high-voltage interlocks, precharge circuitry, and tractive system safety isolation."
      },
      {
        name: "Robert SALLAI",
        role: "Technical Lead & Former Captain",
        department: "Engineering",
        season: "2024-2025",
        image: "/assets/IMG_1085-2-scaled.webp",
        linkedin: "https://www.linkedin.com/in/robert-sallai-624b641a7/",
        facebook: "https://www.facebook.com/sallai.roby",
        bio: "Provided strategic technical guidance, accumulator testing oversight, and static event mentoring."
      },
      {
        name: "Irina DUMA",
        role: "Administrative Support",
        department: "Operations",
        season: "2024-2025",
        image: "/assets/IMG_1070-scaled.webp",
        linkedin: "https://www.linkedin.com/in/irinaduma/",
        facebook: "https://www.facebook.com/irina.duma.10",
        bio: "Coordinated team sponsorship logistics, university budgeting, and travel operations for European rounds."
      },
      {
        name: "Prof. Dr. Ing. Bogdan-Ovidiu VARGA",
        role: "University Coordinator",
        department: "UTCN Faculty",
        season: "2024-2025",
        image: "/assets/Bogdan-Ovidiu-VARGA.webp",
        linkedin: "https://www.linkedin.com/in/vargab1/",
        facebook: "https://www.facebook.com/profile.php?id=100010175641215",
        bio: "Supported the team with university workshop facilities, test track access, and institutional support."
      }
    ]
  },
  {
    id: "2023-2024",
    season: "2023-2024",
    title: "Engineering Maturation Generation (2023-2024)",
    yearSpan: "2023 - 2024",
    tagline: "FS Czech Debut and Pilot FS Balkans Demonstration",
    badge: "Foundation Season",
    carModel: CARS_DATABASE['art-24'].name,
    groupPhoto: "/assets/FB-Post-11.08.2024.webp",
    groupPhotoCaption: "The 2023-2024 ART TU crew at the Farewell Meeting and dynamic testing session.",
    description: "In Season 2023, we introduced an upgraded single-seater electric racecar with optimized mechanical structures, composite bodywork, and an almost functional battery pack. Competing at FS Czech and the pilot edition of FS Balkans, the team established vital engineering baselines.",
    highlights: [
      "Competed at Formula Student Czech 2023 (Most Autodrom)",
      "Finished P28 out of 37 electric vehicle teams across European universities",
      "Participated in the pilot edition of Formula Student Balkans at TNT Karting, Dej",
      "Hosted the University & Sponsor Farewell Meeting with live dynamic EV demonstrations"
    ],
    members: [
      {
        name: "Robert SALLAI",
        role: "Team Captain & Battery Pack Lead",
        department: "Executive",
        season: "2023-2024",
        image: "/assets/IMG_1085-2-scaled.webp",
        linkedin: "https://www.linkedin.com/in/robert-sallai-624b641a7/",
        facebook: "https://www.facebook.com/sallai.roby"
      },
      {
        name: "Radu-Mihai POPA",
        role: "Deputy Team Captain & Mechanical Member",
        department: "Mechanical & Aero",
        season: "2023-2024",
        image: "/assets/IMG_1091-scaled.webp",
        linkedin: "https://www.linkedin.com/in/radu-popa-4050051a9/",
        facebook: "https://www.facebook.com/raducu.popa.5"
      },
      {
        name: "Alpar TOMPOS",
        role: "Team Leader Mechanical",
        department: "Mechanical & Aero",
        season: "2023-2024",
        image: "/assets/IMG_1096-scaled.webp",
        linkedin: "https://www.linkedin.com/in/alp%C3%A1r-tompos-236751208/",
        facebook: "https://www.facebook.com/alpar.tompos"
      },
      {
        name: "Laurențiu KECSKES",
        role: "Team Leader Electrical",
        department: "Electrical & Software",
        season: "2023-2024",
        image: "/assets/IMG_1087-scaled.webp",
        linkedin: "https://www.linkedin.com/in/cristian-laurentiu-kecskes-117007251/",
        facebook: "https://www.facebook.com/cristianlaurentiu.kacskes"
      },
      {
        name: "Ionuț MOLDOVAN",
        role: "Team Leader Battery Pack",
        department: "Powertrain & HV",
        season: "2023-2024",
        image: "/assets/IMG_1244-1-scaled.webp",
        linkedin: "https://www.linkedin.com/company/arttu-formulastudent/",
        facebook: "https://www.facebook.com/ionut.molduvan"
      },
      {
        name: "Bogdan GAL",
        role: "Team Leader Vehicle Dynamics",
        department: "Vehicle Dynamics",
        season: "2023-2024",
        image: "/assets/IMG_1081-scaled.webp",
        linkedin: "https://www.linkedin.com/in/bogdan-gal-145397258/",
        facebook: "https://www.facebook.com/gal.bogdan.31"
      },
      {
        name: "Thomas BUIDIN",
        role: "Project Manager",
        department: "Management",
        season: "2023-2024",
        image: "/assets/IMG_1237-1-scaled.webp",
        linkedin: "https://www.linkedin.com/in/buidin-thomas-665b881b1/",
        facebook: "https://www.facebook.com/thomas.buidin"
      },
      {
        name: "Attila PORONDI-RACZ",
        role: "Chassis & Body Responsible",
        department: "Mechanical & Aero",
        season: "2023-2024",
        image: "/assets/IMG_1074-scaled.webp",
        linkedin: "https://www.linkedin.com/in/racz-attila-56549a234/",
        facebook: "https://www.facebook.com/attila.racz.7923"
      },
      {
        name: "Andrei GROZA",
        role: "Braking System Responsible",
        department: "Vehicle Dynamics",
        season: "2023-2024",
        image: "/assets/IMG_1076-scaled.webp",
        linkedin: "https://www.linkedin.com/in/groza-andrei-mihai-868277212/",
        facebook: "https://www.facebook.com/andreimihai.groza"
      },
      {
        name: "Gabriel MOLDOVAN",
        role: "Suspension Responsible",
        department: "Vehicle Dynamics",
        season: "2023-2024",
        image: "/assets/IMG_1063-scaled.webp",
        linkedin: "https://www.linkedin.com/in/gabriel-moldovan-119186200/",
        facebook: "https://www.facebook.com/gabriel.moldovan.146"
      },
      {
        name: "Irina DUMA",
        role: "Team Leader Administrative Support",
        department: "Operations",
        season: "2023-2024",
        image: "/assets/IMG_1070-scaled.webp",
        linkedin: "https://www.linkedin.com/in/irinaduma/",
        facebook: "https://www.facebook.com/irina.duma.10"
      },
      {
        name: "Prof. Dr. Ing. Bogdan-Ovidiu VARGA",
        role: "University Coordinator",
        department: "UTCN Faculty",
        season: "2023-2024",
        image: "/assets/Bogdan-Ovidiu-VARGA-150x150.webp",
        linkedin: "https://www.linkedin.com/in/vargab1/",
        facebook: "https://www.facebook.com/profile.php?id=100010175641215"
      }
    ]
  },
  {
    id: "2022-2023",
    season: "2022-2023",
    title: "International EV Debut Generation (2022-2023)",
    yearSpan: "2022 - 2023",
    tagline: "First Romanian Electric Vehicle at Formula Student Alpe Adria (Bugatti Rimac Test Track)",
    badge: "Pioneer EV Season",
    carModel: CARS_DATABASE['art-22'].name,
    groupPhoto: "/assets/FSCzech4-1536x1153.webp",
    groupPhotoCaption: "The 2022-2023 team on the Formula Student Alpe Adria paddock in Croatia.",
    description: "In August 2022, we made history by becoming the first Romanian Formula Student team to enter an all-electric single-seater prototype at an official international event (FS Alpe Adria at Bugatti Rimac Test Track, Croatia). Overcoming tremendous high-voltage engineering challenges, the team finished 25th out of 31 electric teams in statics.",
    highlights: [
      "1st Romanian Formula Student team to compete with an EV prototype abroad",
      "First high-voltage 400V accumulator container designed & built from scratch at UTCN",
      "Scored 25th out of 31 electric teams in static events at FS Alpe Adria Croatia",
      "Built the foundational powertrain and telemetry architecture used in future cars"
    ],
    members: [
      {
        name: "Thomas BUIDIN",
        role: "Project Manager",
        department: "Management",
        season: "2022-2023",
        image: "/assets/Thomas-BUIDIN-Powertrain-2020-2021-150x150.webp",
        linkedin: "https://www.linkedin.com/in/buidin-thomas-665b881b1/",
        facebook: "https://www.facebook.com/thomas.buidin"
      },
      {
        name: "Robert SALLAI",
        role: "Team Captain & Battery Pack Lead",
        department: "Executive",
        season: "2022-2023",
        image: "/assets/Robert-Sallai-150x150.webp",
        linkedin: "https://www.linkedin.com/in/robert-sallai-624b641a7/",
        facebook: "https://www.facebook.com/sallai.roby"
      },
      {
        name: "Mihai TURC",
        role: "Team Leader Mechanical",
        department: "Mechanical & Aero",
        season: "2022-2023",
        image: "/assets/Mihai-Turc-Body-2020-2021-150x150.webp",
        linkedin: "https://www.linkedin.com/in/mihai-turc-a3b54815b/",
        facebook: "https://www.facebook.com/turc.mihai.1"
      },
      {
        name: "Robert LOBODĂ",
        role: "JR Team Leader Mechanical",
        department: "Mechanical & Aero",
        season: "2022-2023",
        image: "/assets/Robert-Loboda-150x150.webp",
        linkedin: "https://www.linkedin.com/in/robert-gabriel-loboda-b4b3661ab/",
        facebook: "https://www.facebook.com/loboda.robert"
      },
      {
        name: "Laurențiu KECSKES",
        role: "Team Leader Electrical",
        department: "Electrical & Software",
        season: "2022-2023",
        image: "/assets/Laurentiu-Kecskes-150x150.webp",
        linkedin: "https://www.linkedin.com/in/cristian-laurentiu-kecskes-117007251/",
        facebook: "https://www.facebook.com/cristianlaurentiu.kacskes"
      },
      {
        name: "Bogdan GAL",
        role: "Team Leader Vehicle Dynamics",
        department: "Vehicle Dynamics",
        season: "2022-2023",
        image: "/assets/Bogdan-Gal-150x150.webp",
        linkedin: "https://www.linkedin.com/in/bogdan-gal-145397258/",
        facebook: "https://www.facebook.com/gal.bogdan.31"
      },
      {
        name: "Irina DUMA",
        role: "Team Leader Administrative Support",
        department: "Operations",
        season: "2022-2023",
        image: "/assets/Irina-DUMA-Finances_Marketing-2020-2021-150x150.webp",
        linkedin: "https://www.linkedin.com/in/irinaduma/",
        facebook: "https://www.facebook.com/irina.duma.10"
      },
      {
        name: "Prof. Dr. Ing. Bogdan-Ovidiu VARGA",
        role: "University Coordinator",
        department: "UTCN Faculty",
        season: "2022-2023",
        image: "/assets/Bogdan-Ovidiu-VARGA-150x150.webp",
        linkedin: "https://www.linkedin.com/in/vargab1/",
        facebook: "https://www.facebook.com/profile.php?id=100010175641215"
      }
    ]
  },
  {
    id: "2019-2020",
    season: "2019-2020",
    title: "Founding Generation (2019-2020)",
    yearSpan: "2019 - 2020",
    tagline: "The Birth of ART TU Cluj-Napoca Formula Student",
    badge: "Founding Team",
    carModel: CARS_DATABASE['concept-art01'].name,
    groupPhoto: "/assets/Team-building-Marisel-2019.webp",
    groupPhotoCaption: "The original founding members of ART TU at the Mărișel concept workshop in June 2019.",
    description: "Founded in early 2019 from a core vision of 20 passionate UTCN engineering students and mentors, the founding team laid the cornerstone of automotive excellence in Cluj-Napoca. Through extensive recruitment campaigns, concept modeling, and team-building workshops in Mărișel, the team structured the blueprint for Romania's premiere EV motorsport team.",
    highlights: [
      "Team officially established in early 2019 at Technical University of Cluj-Napoca (UTCN)",
      "Completed initial full-scale CAD chassis frame and concept packaging",
      "Secured foundational sponsorship partnerships including UTCN & Porsche Engineering",
      "Executed inaugural UTCN student recruitment attracting over 60 aspiring engineers"
    ],
    members: [
      {
        name: "Alexandru-George BERCIU",
        role: "Project Manager",
        department: "Management",
        season: "2019-2020",
        image: "/assets/Alexandru-George-BERCIU-Project-Management-1-150x150.webp",
        linkedin: "https://www.linkedin.com/in/alexandru-georgeberciu/",
        facebook: "https://www.facebook.com/berciu.alexandru",
        bio: "Founding Project Manager who coordinated initial team founding and institutional backing."
      },
      {
        name: "Thomas BUIDIN",
        role: "Project Leader & Powertrain Lead",
        department: "Powertrain & HV",
        season: "2019-2020",
        image: "/assets/Thomas-BUIDIN-Powertrain-150x150.webp",
        linkedin: "https://www.linkedin.com/in/buidin-thomas-665b881b1/",
        facebook: "https://www.facebook.com/thomas.buidin",
        bio: "Led initial powertrain feasibility studies and battery packaging concepts."
      },
      {
        name: "Mihai TURC",
        role: "Team Leader Body & Aerodynamics",
        department: "Mechanical & Aero",
        season: "2019-2020",
        image: "/assets/Mihai-TURC-Body-150x150.webp",
        linkedin: "https://www.linkedin.com/in/mihai-turc-a3b54815b/",
        facebook: "https://www.facebook.com/turc.mihai.1",
        bio: "Pioneered aerodynamic surfacing and composite layup modeling."
      },
      {
        name: "Mihai REBREANU",
        role: "Team Leader Steering, Suspension & Brake",
        department: "Vehicle Dynamics",
        season: "2019-2020",
        image: "/assets/Mihai-REBREANU-SteeringSuspensionBrake-150x150.webp",
        linkedin: "https://www.linkedin.com/in/rebreanu-mihai-412427139/",
        facebook: "https://www.facebook.com/rebreanu.mihai",
        bio: "Developed kinematic suspension geometry and hydraulic brake calculations."
      },
      {
        name: "Sergiu DEJEU",
        role: "Team Leader Electronics",
        department: "Electrical & Software",
        season: "2019-2020",
        image: "/assets/Sergiu-DEJEU-150x150.webp",
        linkedin: "https://www.facebook.com/dejeu.sergiu",
        facebook: "https://www.facebook.com/dejeu.sergiu",
        bio: "Set up original PCB schematics, harness routing standards, and telemetry protocols."
      },
      {
        name: "Iacob HITICAȘ",
        role: "Team Leader Chassis",
        department: "Mechanical & Aero",
        season: "2019-2020",
        image: "/assets/Iacob-HITICAS-Chassis-150x150.webp",
        linkedin: "https://www.linkedin.com/in/iacob-hiticas-859ba9177/",
        facebook: "https://www.facebook.com/profile.php?id=100007366635895",
        bio: "Engineered the steel spaceframe chassis and torsional rigidity FEA simulation."
      },
      {
        name: "Răzvan FILDAN",
        role: "Team Leader Accumulators",
        department: "Powertrain & HV",
        season: "2019-2020",
        image: "/assets/Razvan-FILDAN-Accumulators-150x150.webp",
        linkedin: "https://www.linkedin.com/in/razvan-fildan-0018821ab/",
        facebook: "https://www.facebook.com/razvan.fildan",
        bio: "Calculated battery cell capacity requirements and thermal safety enclosures."
      },
      {
        name: "Vlad VICOVANU",
        role: "Team Leader Crash Simulations",
        department: "Mechanical & Aero",
        season: "2019-2020",
        image: "/assets/Vlad-VICOVANU-Crash-Simulations-150x150.webp",
        linkedin: "https://www.linkedin.com/in/vlad-vicovanu-a06a24a5/",
        facebook: "https://www.facebook.com/vicovanu.vlad",
        bio: "Conducted nonlinear impact attenuator dynamic FEA simulations."
      },
      {
        name: "Irina DUMA",
        role: "Team Leader Finance & Marketing",
        department: "Business & Media",
        season: "2019-2020",
        image: "/assets/Irina-DUMA-FinanceMarketing-150x150.webp",
        linkedin: "https://www.linkedin.com/in/irina-duma-965766125/",
        facebook: "https://www.facebook.com/irina.duma.10",
        bio: "Created team brand identity, sponsorship tiers, and student recruitment campaigns."
      },
      {
        name: "Radu BUTA",
        role: "Team Leader Quality Assurance",
        department: "Operations",
        season: "2019-2020",
        image: "/assets/Radu-BUTA-Quality-Assurance-150x150.webp",
        linkedin: "https://www.linkedin.com/in/radu-buta-b07828182/",
        bio: "Instituted design documentation verification and manufacturing quality gates."
      }
    ],
    events: [
      {
        title: "Team Building & Concept Finalization (Mărișel)",
        date: "June 28 - 30, 2019",
        description: "Held in Mărișel (Cluj), the team finalized the concept stage of the car, elaborated the marketing strategy, and built the first full-size mockup of the chassis frame.",
        image: "/assets/Team-building-Marisel-2019.webp",
        sponsor: "Technical University of Cluj-Napoca & Porsche Engineering Romania"
      },
      {
        title: "First Large-Scale Student Recruitment Campaign",
        date: "October 19 - 31, 2019",
        description: "Official presentation of ART TU to bachelor's and master's students across UTCN engineering faculties, recruiting over 60 new team members.",
        image: "/assets/Recruitment-2019.webp"
      },
      {
        title: "Strategy & Onboarding Workshop",
        date: "December 14, 2019",
        description: "Integration of new department members and formulation of the short and medium term technical strategy for the first single-seater car.",
        image: "/assets/Team-building-December-2019.webp",
        sponsor: "POCO LOCO PIZZA"
      }
    ]
  }
];

export const currentLeadership = teamGenerations[0].members;

