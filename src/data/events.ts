import { CARS_DATABASE } from './carsDatabase';

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  season: string;
  location: string;
  image: string;
  description: string;
}

export interface RolloutInfo {
  title: string;
  season: string;
  carName: string;
  carBadge: string;
  heroImage: string;
  date: string;
  venue: string;
  location: string;
  tagline: string;
  description: string;
  traditionQuote: string;
  nextRollout: {
    title: string;
    season: string;
    countdownMode: 'countdown' | 'tba';
    targetDate: string;
    dateDisplay: string;
    venue: string;
    location: string;
    scheduleNotice: string;
  };
  // Fallback / legacy compatibility fields
  countdownMode: 'countdown' | 'tba';
  targetDate: string;
  dateDisplay: string;
  pastRollouts: {
    year: string;
    carName: string;
    date: string;
    location: string;
    image: string;
    milestone: string;
    description: string;
  }[];
}

export const ROLLOUT_DATA: RolloutInfo = {
  title: "Season 2026 Rollout",
  season: "2025-2026",
  carName: "Afia (ARTTU26)",
  carBadge: "ART-26",
  heroImage: "/assets/events/rollout2026.webp",
  date: "11 June 2026",
  venue: "Technical University of Cluj-Napoca",
  location: "Blvd. Muncii No. 103-105, Cluj-Napoca",
  tagline: "Built on trust. Driven by people.",
  description: "Months of hard work, dedication, and countless preparations culminated at the Technical University of Cluj-Napoca for the official rollout of our 2026 electric race car: AFIA. More than just the reveal of a new single-seater, the rollout was an opportunity to share our journey, technical exhibitions, and engineering vision with our partners, alumni, faculty, families, and friends. Seeing the car come to life was a testament to the perseverance and teamwork that carried ART TU all the way to 1st Place Overall Champions at FS Balkans and P3 in Efficiency at Hockenheimring.",
  traditionQuote: "Rollout is more than the reveal of our new race car. It is an opportunity to celebrate alongside the partners who believed in us throughout the season and the families who supported us every step of the way.",
  countdownMode: "tba",
  targetDate: "2027-06-15T18:00:00+03:00",
  dateDisplay: "Summer 2027",
  nextRollout: {
    title: "Season 2027 Car Rollout",
    season: "2026-2027",
    countdownMode: "tba",
    targetDate: "2027-06-15T18:00:00+03:00",
    dateDisplay: "Summer 2027",
    venue: "TBA",
    location: "Technical University of Cluj-Napoca",
    scheduleNotice: "Schedule details will be announced ahead of the event. Follow our official channels for updates and notifications."
  },
  pastRollouts: [
    {
      year: "2026",
      carName: "Afia (ARTTU26)",
      date: "11 June 2026",
      location: "UTCN, Blvd. Muncii 103-105",
      image: "/assets/events/rollout2026.webp",
      milestone: "FS Balkans Overall Champions, FS Germany 3rd in Efficiency",
      description: "The official reveal of our 2026 electric racecar with 70 team members, faculty, and industry partners before embarking on our championship-winning European season."
    },
    {
      year: "2025",
      carName: "ARTTU25",
      date: "03 July 2025",
      location: "Aula Centenar, Blvd. Muncii 103-105",
      image: "/assets/events/rollout2025.webp",
      milestone: "Clean sweep in all statics at FS Balkans, first FSG endurance finish",
      description: "Presenting the result of 10 months of work and sleepless nights by 60 passionate students, celebrating the car that passed all scrutineering checks at Hockenheimring."
    }
  ]
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: "noaptea-cercetatorilor-2025",
    title: "European Researchers' Night",
    subtitle: "Demonstrating science and electric vehicle technology in action",
    date: "Late September 2025",
    season: "2025-2026",
    location: "Parcul Central, Cluj-Napoca",
    image: "/assets/events/noaptea_cercetatorilor.webp",
    description: "Demonstrating science and motorsport technology in action. Our vehicle dynamics and electrical leads presented live telemetry, CAN bus communication, and high-voltage battery safety systems to over 1,500 visitors, sharing our engineering passion with the community."
  },
  {
    id: "amma-2025",
    title: "AMMA 2025 International Congress",
    subtitle: "All Romanian Formula Student teams reunited at the 35th SIAR Congress",
    date: "23-25 October 2025",
    season: "2025-2026",
    location: "UTCN Faculty of Automotive Engineering, Cluj-Napoca",
    image: "/assets/events/amma_2025.webp",
    description: "Hosted at the Technical University of Cluj-Napoca by SIAR and ASTR, the AMMA Congress brought together industry experts, researchers, and all Romanian Formula Student teams. We connected with other teams, shared our projects, and took part in presentations and live track demonstrations behind the wheel of our single-seaters."
  },
  {
    id: "contest-night-2025",
    title: "ContestNight (OSUT Cluj)",
    subtitle: "Engaging with student tech innovators at OSUT InfoTech",
    date: "November 2025",
    season: "2025-2026",
    location: "UTCN Campus, Cluj-Napoca (organized by OSUT Cluj)",
    image: "/assets/events/contest_night.webp",
    description: "At ContestNight, organized by OSUT Cluj under the InfoTech umbrella, our team engaged with enthusiastic UTCN engineering and IT students. We showcased our electric racecar subsystems and shared how Formula Student empowers students to gain hands-on technical and competitive engineering experience."
  },
  {
    id: "fs-symposium-gyor-2025",
    title: "Formula Student Symposium",
    subtitle: "International engineering masterclasses and European networking",
    date: "14-16 November 2025",
    season: "2025-2026",
    location: "Széchenyi István University, Győr, Hungary",
    image: "/assets/events/01simpozion_grup.webp",
    description: "Our team attended the international Formula Student Symposium hosted at Széchenyi István University in Győr, Hungary. Team members participated in expert technical lectures, powertrain and vehicle dynamics workshops, and networked with Formula Student teams and automotive industry leaders from across Europe."
  },
  {
    id: "vivo-visit-2025",
    title: "VIVO! Mall Motorsport Exhibition",
    subtitle: "Bringing electric racecar technology directly to the Cluj community",
    date: "15 November 2025",
    season: "2025-2026",
    location: "VIVO! Cluj-Napoca, Str. Avram Iancu 492-500, Florești",
    image: "/assets/events/vivo_visit.webp",
    description: "Bringing high-voltage Formula Student technology directly into the community. Thousands of visitors experienced the ART TU electric racecar up close, explored our aerodynamic package, and engaged directly with our student engineering team."
  },
  {
    id: "pus-de-copaci-2025",
    title: "Pus de Copaci: Tree Planting CSR",
    subtitle: "Offsetting our season logistics footprint through environmental action",
    date: "25 November 2025",
    season: "2025-2026",
    location: "Cluj County Eco-Forest, Transylvania",
    image: "/assets/events/pus_de_copaci.webp",
    description: "Reinforcing our commitment to sustainable mobility beyond the racetrack. The team partnered with local forestry initiatives to plant trees across Cluj County, taking concrete action to offset our European competition travel and transport footprint."
  },
  {
    id: "design-review-2025",
    title: "Annual Engineering Design Review",
    subtitle: "CAD, FEA, and CFD defense with alumni judges and mentors",
    date: "December 2025",
    season: "2025-2026",
    location: "Porsche Room, UTCN, Cluj-Napoca",
    image: "/assets/events/design_review_2025.webp",
    description: "A meticulous internal audit where each technical department presented CAD models, FEA stress analyses, and CFD aero simulations to alumni judges and technical mentors before manufacturing began for the 2026 season."
  },
  {
    id: "ftc-to-fs-2026",
    title: "FTC to FS (First Tech Challenge to Formula Student)",
    subtitle: "Inspiring high school robotics students to join university motorsport",
    date: "January 2026",
    season: "2025-2026",
    location: "UTCN, Cluj-Napoca",
    image: "/assets/events/ftc_to_fs.webp",
    description: "First Tech Challenge to Formula Student is an event where we share our journey with high school robotics teams. It connects high school robotics with university engineering, showing students how Formula Student accelerates technical growth and inspiring the next generation of engineers to join our team."
  },
  {
    id: "inas-hpes-2026",
    title: "High Performance Engineering Solutions Conference",
    subtitle: "1st Place in FS Engineering Tomorrow competition with INAS and Ansys",
    date: "26-27 March 2026",
    season: "2025-2026",
    location: "Hotel QOSMO, Brașov (organized by INAS S.A.)",
    image: "/assets/events/design_review_2025.webp",
    description: "We participated in the High Performance Engineering Solutions Conference organized by our partner, INAS. Our Vehicle Dynamics and Mechanical departments took home 1st place in the 'FS Engineering Tomorrow' competition, where we showcased our aerodynamic optimization for rear wing supports and our use of Ansys simulations in the design process."
  },
  {
    id: "targ-de-cariere-2026",
    title: "Careers Fair (Târgul de Cariere)",
    subtitle: "Engaging students seeking hands-on engineering experiences",
    date: "27 March 2026",
    season: "2025-2026",
    location: "BTarena (Sala Polivalentă), Cluj-Napoca",
    image: "/assets/events/targ_de_cariere.webp",
    description: "Our presence at the career fair allowed us to engage with students seeking new, hands-on experiences. By sharing our journey, we demonstrated how joining a team like ours offers a unique platform for students to challenge themselves outside the lecture room."
  },
  {
    id: "infonight-2026",
    title: "Info Night (OSUT)",
    subtitle: "Inspiring a mindset of innovation and continuous student growth",
    date: "01 April 2026",
    season: "2025-2026",
    location: "UTCN Student Hub, Str. Constantin Daicoviciu 15, Cluj-Napoca",
    image: "/assets/events/infonight.webp",
    description: "At Info Night, hosted by OSUT, we engaged with students to inspire a mindset of innovation and continuous growth. It was a great opportunity to encourage them to think outside the box and show how stepping beyond the standard curriculum can accelerate their personal and professional development."
  },
  {
    id: "fastexpo-2026",
    title: "FAST Expo (Future of Air & Space Technology)",
    subtitle: "Highlighting synergy between space-grade tech and automotive engineering",
    date: "04 April 2026",
    season: "2025-2026",
    location: "Parcul Feroviarilor, Cluj-Napoca (organized by ROSPIN)",
    image: "/assets/events/fastexpo2026.webp",
    description: "At the FAST Expo, organized by ROSPIN (Romanian Space Initiative), we highlighted the synergy between space-grade tech and automotive engineering. It was a fantastic time to showcase our technical systems and prove that high-performance engineering knows no bounds, whether on the track or beyond the atmosphere."
  },
  {
    id: "jobshop-2026",
    title: "JobShop (BEST Cluj-Napoca)",
    subtitle: "High-performance career accelerator for real-world engineering",
    date: "April 2026",
    season: "2025-2026",
    location: "BTarena, Cluj-Napoca (organized by BEST Cluj-Napoca)",
    image: "/assets/events/observator-recruitment.webp",
    description: "During JobShop, organized by BEST, we connected with students eager to put their academic knowledge into practice. We enjoyed sharing how our project functions as a high-performance career accelerator, offering students the chance to gain real-world engineering and management experience."
  },
  {
    id: "skills-evolution-2026",
    title: "Skills (R)evolution in Automotive & Mobility",
    subtitle: "Hosting European industry and academic experts at our workshop",
    date: "20-24 April 2026",
    season: "2025-2026",
    location: "UTCN Regional Innovation Hub & TestEcoCel Lab, Cluj-Napoca",
    image: "/assets/events/cina_skill_evolution.webp",
    description: "We had the pleasure of hosting a group of international experts as part of the Skills (R)evolution event organized in collaboration with European industry and academic partners. During this visit, we presented the world of Formula Student, our engineering solutions, and development process. Later in the week, our team attended the official dinner and showcased our racecar alongside other locally developed vehicles."
  },
  {
    id: "teambuilding-2026",
    title: "Team Building 2026",
    subtitle: "Where engineering meets fun: reconnecting and building stronger bonds",
    date: "25-27 April 2026",
    season: "2025-2026",
    location: "Mărișel, Cluj County",
    image: "/assets/events/teambuilding2026.webp",
    description: "Where engineering meets fun. This weekend was all about reconnecting, sharing ideas, and building stronger bonds across the team. From team challenges to focused brainstorming sessions, we mixed great energy with real progress. Because in Formula Student, fast race cars are built by even stronger teams."
  },
  {
    id: "cluj-innovation-days-2026",
    title: "Cluj Innovation Days",
    subtitle: "Intersection of technology, performance, and season management",
    date: "May 2026",
    season: "2025-2026",
    location: "Radisson Blu Hotel / CREIC, Cluj-Napoca (organized by Cluj IT Cluster)",
    image: "/assets/events/networking_de_cariere.webp",
    description: "At Cluj Innovation Days, we joined a community of forward-thinkers to highlight the intersection of technology and performance. We shared our latest achievements, discussed how our team manages a high-performance season, and connected with regional tech leaders driving green mobility."
  },
  {
    id: "noaptea-muzeelor-2026",
    title: "Museums Night (Noaptea Muzeelor)",
    subtitle: "Showcasing advanced technology and driving innovation at the UTCN Hub",
    date: "23 May 2026",
    season: "2025-2026",
    location: "UTCN Student Hub, Str. George Barițiu 4, Cluj-Napoca",
    image: "/assets/events/noaptea_muzeelor.webp",
    description: "The UTCN Hub opened its doors for Museums Night, the widely spread European event dedicated to promoting culture and heritage. Representing the Technical University of Cluj-Napoca, we brought our electric racecar to the forefront, demonstrating the university's commitment to driving innovation and showcasing advanced technology to the wider community. Engaging with visitors to discuss the intricate engineering and vision behind our project was a true highlight of the event."
  },
  {
    id: "zilele-clujului-2026",
    title: "Days of Cluj (Zilele Clujului)",
    subtitle: "'We Love STEM' initiative powered by Emerson on Str. Mihail Kogălniceanu",
    date: "21-24 May 2026",
    season: "2025-2026",
    location: "Str. Mihail Kogălniceanu, Cluj-Napoca",
    image: "/assets/events/zilele_clujului_2026.webp",
    description: "What a weekend at Zilele Clujului. We were invited by our partners Emerson to participate in their 'We Love STEM' initiative, where we had the chance to showcase our Formula Student racecar and share our passion for engineering with the community. The highlight was seeing kids get curious, ask questions, and jump into our hands-on science activities. That energy and excitement are exactly what make community events so special."
  },
  {
    id: "rollout-2026",
    title: "Official Car Rollout: AFIA",
    subtitle: "Unveiling our 2026 Formula Student electric race car: AFIA",
    date: "11 June 2026",
    season: "2025-2026",
    location: "UTCN, Blvd. Muncii No. 103-105, Cluj-Napoca",
    image: "/assets/events/rollout2026.webp",
    description: "Months of hard work, dedication, and countless preparations culminated in hosting the official rollout event for our 2026 electric race car: AFIA. Seeing our car come to life was a testament to the passion, perseverance, and teamwork of almost 70 members working behind the scenes. More than just the reveal of a new single-seater, the rollout was an opportunity to celebrate alongside our partners, university mentors, alumni, and families."
  },
  {
    id: "raliul-clujului-2026",
    title: "Raliul Clujului (Cluj Rally Special)",
    subtitle: "Showcasing our single-seater at the Romanian National Rally Championship",
    date: "20-22 June 2026",
    season: "2025-2026",
    location: "Cluj Arena / Transilvania Rally Stage (hosted by Savu Racing)",
    image: "/assets/events/raliul_clujului.webp",
    description: "We attended Raliul Clujului, a stage of the Romanian National Rally Championship. It was a great opportunity to showcase our Formula Student race car, connect with the motorsport community, and experience the atmosphere of one of Romania's top rally events. Special thanks go to Savu Racing for the invitation and the opportunity to share our project with rally teams, drivers, and fans alike."
  }
];
