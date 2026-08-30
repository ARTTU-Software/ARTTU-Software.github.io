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
  countdownMode: 'countdown' | 'tba';
  targetDate: string;
  dateDisplay: string;
  venue: string;
  location: string;
  heroImage: string;
  description: string;
  traditionQuote: string;
  pastRollouts: {
    year: string;
    carName: string;
    image: string;
    milestone: string;
  }[];
}

export const ROLLOUT_DATA: RolloutInfo = {
  title: "Season 2027 Car Rollout",
  season: "2026-2027",
  countdownMode: "tba",
  targetDate: "2027-06-15T18:00:00+03:00",
  dateDisplay: "Summer 2027",
  venue: "Aula Magna & Innovation Atrium",
  location: "Technical University of Cluj-Napoca (UTCN), Str. Memorandumului 28, Cluj-Napoca",
  heroImage: "/assets/events/rollout2026.webp",
  description: "The Rollout is an annual celebration of our season's achievements, revealing our newest race car. It is a prestigious occasion to honor the partnerships with the individuals and companies whose support has been the driving force behind our success.",
  traditionQuote: "The Rollout is an annual celebration of our season's achievements, revealing our newest race car and honoring the partnerships that drive our success.",
  pastRollouts: [
    {
      year: "2026",
      carName: CARS_DATABASE['afia-art26'].name,
      image: "/assets/events/rollout2026.webp",
      milestone: "FS Balkans Overall Champions, FS Germany 3rd in Efficiency"
    },
    {
      year: "2025",
      carName: CARS_DATABASE['art-25'].name,
      image: "/assets/events/rollout2025.webp",
      milestone: "Second-generation electric racecar rollout and FS Balkans static sweep"
    }
  ]
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: "noaptea-cercetatorilor-2025",
    title: "European Researchers' Night",
    subtitle: "Live telemetry and electric vehicle science demonstrations",
    date: "Late September 2025",
    season: "2025-2026",
    location: "Casino Parcul Central, Cluj-Napoca",
    image: "/assets/events/noaptea_cercetatorilor.webp",
    description: "Demonstrating science and motorsport technology in action. Our vehicle dynamics and electrical leads presented live telemetry, CAN bus communication, and high-voltage battery safety systems to over 1,500 visitors."
  },
  {
    id: "amma-2025",
    title: "AMMA 2025 International Congress",
    subtitle: "SIAR International Congress on Automotive and Transport Engineering",
    date: "23-25 October 2025",
    season: "2025-2026",
    location: "UTCN Faculty of Automotive Engineering & Grand Hotel Italia, Cluj-Napoca",
    image: "/assets/events/amma_2025.webp",
    description: "Hosted at the Technical University of Cluj-Napoca by the Department of Automotive Engineering and SIAR, the AMMA Congress brought together international automotive researchers and mobility leaders. ART TU presented our electric racecar architecture and powertrain research."
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
    subtitle: "International engineering masterclasses, workshops, and European networking",
    date: "14-16 November 2025",
    season: "2025-2026",
    location: "Széchenyi István University, Győr, Hungary",
    image: "/assets/events/01simpozion_grup.webp",
    description: "Our team attended the international Formula Student Symposium hosted at Széchenyi István University in Győr, Hungary. Team members participated in expert technical lectures, powertrain and vehicle dynamics workshops, and networked with Formula Student teams and automotive industry leaders from across Europe."
  },
  {
    id: "vivo-visit-2025",
    title: "VIVO! Mall Motorsport Exhibition",
    subtitle: "Bringing electric racecar tech directly to the Cluj community",
    date: "15 November 2025",
    season: "2025-2026",
    location: "VIVO! Cluj-Napoca, Str. Avram Iancu 492-500, Florești",
    image: "/assets/events/vivo_visit.webp",
    description: "Bringing high-voltage Formula Student tech directly into the community. Thousands of visitors experienced the ART TU electric racecar up close and engaged with our student engineering team."
  },
  {
    id: "pus-de-copaci-2025",
    title: "Pus de Copaci: Tree Planting CSR",
    subtitle: "Offsetting logistics footprint through green environmental action",
    date: "25 November 2025",
    season: "2025-2026",
    location: "Cluj County Eco-Forest, Transylvania",
    image: "/assets/events/pus_de_copaci.webp",
    description: "Reinforcing our commitment to sustainable mobility beyond the racetrack. The team partnered with local forestry initiatives to plant trees in Cluj County, offsetting our European season logistics footprint."
  },
  {
    id: "design-review-2025",
    title: "Annual Engineering Design Review",
    subtitle: "CAD, FEA, and CFD defense with alumni judges and mentors",
    date: "December 2025",
    season: "2025-2026",
    location: "ART TU Design Studio, UTCN, Cluj-Napoca",
    image: "/assets/events/design_review_2025.webp",
    description: "A meticulous internal audit where each technical department presented CAD models, FEA stress analyses, and CFD aero simulations to alumni judges and technical mentors before manufacturing."
  },
  {
    id: "ftc-to-fs-2026",
    title: "FTC to FS (First Tech Challenge to Formula Student)",
    subtitle: "Inspiring high school robotics students to join university motorsport",
    date: "January 2026",
    season: "2025-2026",
    location: "UTCN Robotics Laboratories, Cluj-Napoca",
    image: "/assets/events/ftc_to_fs.webp",
    description: "'First Tech Challenge to Formula Student' is an event where we share our journey with high school robotics students. It connects high school with university life, showing them how Formula Student can boost their future and inspiring the next generation to join our team."
  },
  {
    id: "teambuilding-2026",
    title: "Team Building 2026",
    subtitle: "Connecting across departments, celebrating hard work and recharging",
    date: "March 2026",
    season: "2025-2026",
    location: "Mărișel, Cluj County, Transylvania",
    image: "/assets/events/teambuilding2026.webp",
    description: "Team building is about more than just connecting across departments; it is a time to celebrate the hard work we have poured into the season. Our team buildings are about hanging out together, getting to know each other, and recharging our batteries."
  },
  {
    id: "inas-hpes-2026",
    title: "High Performance Engineering Solutions Conference",
    subtitle: "1st Place in FS Engineering Tomorrow competition with INAS & Ansys",
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
    date: "20-21 April 2026",
    season: "2025-2026",
    location: "UTCN Regional Innovation Hub & TestEcoCel Lab, Cluj-Napoca",
    image: "/assets/events/cina_skill_evolution.webp",
    description: "In collaboration with European industry and academic partners, we hosted a visit for a group of international experts at our facility. We provided an in-depth look into the world of Formula Student, sharing both the technical challenges we overcome and the major achievements of our season."
  },
  {
    id: "cluj-innovation-days-2026",
    title: "Cluj Innovation Days",
    subtitle: "Intersection of technology, performance, and season management",
    date: "May 2026",
    season: "2025-2026",
    location: "Radisson Blu Hotel / CREIC, Cluj-Napoca (organized by Cluj IT Cluster)",
    image: "/assets/events/networking_de_cariere.webp",
    description: "At Cluj Innovation Days, we joined a community of forward-thinkers to highlight the intersection of technology and performance. We shared our latest achievements and discussed how our team manages a high-performance season."
  },
  {
    id: "noaptea-muzeelor-2026",
    title: "Museum Night (Noaptea Muzeelor)",
    subtitle: "Bringing engineering out of the lab and into the public eye",
    date: "May 2026",
    season: "2025-2026",
    location: "National Museum of Transylvanian History, Cluj-Napoca",
    image: "/assets/events/noaptea_muzeelor.webp",
    description: "Museum Night gave us a unique stage to bring engineering out of the lab and into the public eye. We talked about our race car, competitions, new technology, and much more with thousands of visitors."
  },
  {
    id: "zilele-clujului-2026",
    title: "Days of Cluj (Zilele Clujului)",
    subtitle: "Celebrating the city community and creating a safe space to evolve",
    date: "21-24 May 2026",
    season: "2025-2026",
    location: "Piața Unirii, Cluj-Napoca",
    image: "/assets/events/zilele_clujului_2026.webp",
    description: "Zilele Clujului is an annual event where we all celebrate not only the city itself but the community we take part in. It is the best time of the year to interact with everybody in the center of our town. We also have the opportunity to increase our reach and show everybody our main value: to build a safe space where every member can evolve."
  },
  {
    id: "rollout-2026",
    title: "Official Car Rollout",
    subtitle: "Annual celebration and unveiling of the AFIA ART-26 electric racecar",
    date: "June 2026",
    season: "2025-2026",
    location: "Aula Magna & Innovation Atrium, UTCN, Cluj-Napoca",
    image: "/assets/events/rollout2026.webp",
    description: "The Rollout is an annual celebration of our season's achievements, revealing our newest race car. It is a prestigious occasion to honor the partnerships with the individuals and companies whose support has been the driving force behind our success."
  },
  {
    id: "raliul-clujului-2026",
    title: "Raliul Clujului (Cluj Rally Special)",
    subtitle: "Motorsport heritage and technical exchange with rally champions",
    date: "June 2026",
    season: "2025-2026",
    location: "Cluj Arena / Transilvania Rally Stage, Cluj-Napoca",
    image: "/assets/events/raliul_clujului.webp",
    description: "Standing shoulder-to-shoulder with Romanian motorsport champions at the prestigious Cluj Rally. Our team engaged with race engineers, professional drivers, and thousands of enthusiastic motorsport fans."
  }
];
