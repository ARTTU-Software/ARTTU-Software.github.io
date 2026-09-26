export interface Department {
  id: string;
  name: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  whatYoullLearn: string[];
  software: string[];
  image: string;
  images: string[];
  imagePosition?: string;
  openPositions: boolean;
}

export const departments: Department[] = [
  {
    id: "mechanical",
    name: "Mechanical",
    iconName: "Wrench",
    title: "Mechanical",
    tagline: "The physical backbone of our racecar, from structural chassis to aerodynamic form.",
    description: "The backbone of our racecar. This department manages the complete lifecycle of the vehicle's chassis and body, from initial CAD concept to final precision manufacturing. In charge of developing all structural systems including the tubular spaceframe chassis, composite aerodynamic bodywork, suspension links, and steering mechanisms. By utilizing advanced FEA (Finite Element Analysis) simulations in CATIA and Ansys, they ensure every component is optimized for maximum structural integrity and minimum weight.",
    responsibilities: [
      "Designing suspension, steering, braking, and cooling components in 3D CAD",
      "Structural FEA simulation analysis using Ansys Mechanical",
      "Hands-on precision manufacturing: TIG welding, 5-axis CNC machining, composite layups",
      "Physical testing, rig validation, and compliance with Formula Student mechanical safety rules"
    ],
    whatYoullLearn: [
      "Advanced 3D CAD parametric modeling & kinematic packaging in CATIA V6",
      "Structural Finite Element Analysis (FEA), stress verification & generative weight optimization",
      "Hands-on composite manufacturing (carbon fiber layups, vacuum infusion, curing processes)",
      "Precision metal fabrication, TIG welding of tubular spaceframes, and CNC milling tolerances",
      "Motorsport technical compliance, physical component validation, and destructive testing"
    ],
    software: ["CATIA V6", "Ansys Mechanical"],
    image: "/assets/departments/mech/2026_chassis_welding.webp",
    images: [
      "/assets/departments/mech/2026_chassis_welding.webp",
      "/assets/departments/mech/IMG_4709.webp",
      "/assets/departments/mech/IMG_3941.webp"
    ],
    imagePosition: "object-[45%_35%]",
    openPositions: true
  },
  {
    id: "accumulator",
    name: "Accumulator & Powertrain",
    iconName: "BatteryCharging",
    title: "Accumulator & Powertrain",
    tagline: "Engineering the high-voltage heart, custom battery pack, and tractive power.",
    description: "The team behind the 'heart' of our electric racecar. Specializing in high-voltage systems and electric powertrain behavior, their work centers on the meticulous design, assembly, and management of the custom battery pack (Accumulator) and active Battery Management System (BMS). They engineer high-voltage safety interlocks, cell isolation, and thermal cooling to ensure the car has the raw power and endurance to dominate the track.",
    responsibilities: [
      "Custom high-voltage accumulator packaging, busbar design, and cell isolation",
      "Developing and testing active Battery Management System (BMS) balancing logic",
      "High-voltage safety compliance (Insulation Monitoring, TSAL, HVD, maintenance plugs)",
      "Thermal management and cooling channel design for high continuous discharge rates"
    ],
    whatYoullLearn: [
      "High-voltage EV battery architecture, busbar current density, and cell packaging",
      "Battery Management Systems (BMS), balancing algorithms, and state-of-charge estimation",
      "Formula Student high-voltage safety interlocks, isolation monitoring (IMD), and TSAL design",
      "Thermodynamics and thermal management simulations for high-discharge lithium-ion cells",
      "High-power testbench commissioning, electrical insulation testing, and live EV safety protocols"
    ],
    software: ["Altium Designer", "MATLAB / Simulink", "CAD (CATIA)", "Ansys Fluent / CFD"],
    image: "/assets/departments/accu/DBV_FSBK-Day2-49-1-scaled.webp",
    images: [
      "/assets/departments/accu/DBV_FSBK-Day2-49-1-scaled.webp",
      "/assets/departments/accu/20250501_172038.webp",
      "/assets/departments/accu/IMG_0595.webp"
    ],
    imagePosition: "object-[80%_35%]",
    openPositions: true
  },
  {
    id: "electrical",
    name: "Electrical & Software Development",
    iconName: "Cpu",
    title: "Electrical & Software Development",
    tagline: "The 'brain' and central nervous system connecting sensors, compute nodes, and live telemetry.",
    description: "The 'brain' that brings the racecar to life. This department develops all low-voltage (LV) systems, handles motorsport wiring harness routing, custom multi-layer PCB design, and embedded C/C++ programming. They ensure seamless high-speed communication between all vehicle sensors, ECUs, and dashboard displays, translating driver input into instant, electric track performance and real-time telemetry.",
    responsibilities: [
      "Designing, fabricating, and testing custom in-house PCBs in Altium Designer",
      "Writing robust embedded C/C++ firmware for vehicle control and sensor acquisition",
      "Building and routing lightweight military-spec vehicle wiring harnesses",
      "Developing live telemetry, dashboards, backend and data logging systems for driver feedback and competition analysis"
    ],
    whatYoullLearn: [
      "Custom multi-layer PCB schematic capture, trace routing, and hardware bring-up in Altium Designer",
      "Embedded C/C++ firmware programming for automotive ARM Cortex-M / STM32 microcontrollers",
      "Automotive communication networks: CAN bus protocol, SPI, I2C, and sensor signal conditioning",
      "Real-time wireless telemetry, driver dashboards, and cloud data pipelines",
      "Professional motorsport wiring harness design using Deutsch autosport connectors"
    ],
    software: ["Altium Designer", "Embedded C/C++", "Python", "GitHub", "STM32"],
    image: "/assets/departments/elec/2026_dashboard_pcb.webp",
    images: [
      "/assets/departments/elec/2026_dashboard_pcb.webp",
      "/assets/departments/elec/20260114_183738.webp",
      "/assets/departments/elec/20260114_204216.webp"
    ],
    imagePosition: "object-center",
    openPositions: true
  },
  {
    id: "vehicle-dynamics",
    name: "Vehicle Dynamics",
    iconName: "Activity",
    title: "Vehicle Dynamics",
    tagline: "The sensory system and reflexes bridging vehicle physics to the pavement.",
    description: "The sensory system and reflexes of the vehicle, acting as the bridge where physics meets the pavement. This department focuses on vehicle behaviour analysis, mathematical modelling, developing and tuning suspension and steering kinematics to define how the car feels and handles on the limit. In addition to CFD aerodynamic optimization and torque vectoring, they manage thermal management systems to keep electric components in an optimal performance window under intense racing conditions.",
    responsibilities: [
      "Developing full-vehicle dynamic simulations in MATLAB / Simulink",
      "CFD aero modeling for wing element optimization and aerodynamic balance",
      "Suspension geometry kinematic optimization and development",
      "Post-session telemetry data processing from dynamic tests and competitions",
      "Thermal management optimization for high-voltage powertrain and battery systems"
    ],
    whatYoullLearn: [
      "Race vehicle dynamics theory",
      "Multibody suspension kinematics simulation and lap time optimization using MATLAB / Simulink",
      "Computational Fluid Dynamics (CFD) for multi-element wings, diffusers, and aerodynamic balance",
      "Torque vectoring, slip and electronic differential control algorithms",
      "Trackside telemetry data analysis and post analysis for performance optimisation",
      "Efficient thermal management design and simulation optimization"
    ],
    software: ["MATLAB & Simulink", "Ansys Suite", "Marple", "Kuli"],
    image: "/assets/departments/vd/IMG_0556.webp",
    images: [
      "/assets/departments/vd/IMG_0556.webp",
      "/assets/departments/vd/IMG_0531.webp",
      "/assets/departments/vd/cocos_vd_data.webp"
    ],
    imagePosition: "object-center",
    openPositions: true
  },
  {
    id: "marketing",
    name: "Finances & Marketing",
    iconName: "TrendingUp",
    title: "Finances & Marketing",
    tagline: "The face, voice, and creative force driving partner relations, brand presence, and global reach.",
    description: "The face, voice, and creative force behind ART TU. This department manages corporate partnerships, leads sponsor acquisition, and crafts viable startup concepts for the Business Plan Presentation (BPP) at European competitions. They organize team rollouts, public expos, and brand activations, design race car liveries and visual media, and produce high-impact photography, videography, and social content to give our engineering achievements global reach.",
    responsibilities: [
      "Crafting and presenting a viable startup concept in the Business Plan Presentation at official FS events",
      "Shaping brand identity and public image by producing high-quality photo, video, and social media content across all channels",
      "Leading partnership outreach, partner negotiations, and ongoing corporate communication",
      "Planning and executing team events, public expos, brand activations, and overall event presence",
      "Creating high-impact visual assets, including race car liveries, team apparel, merchandise, and print media"
    ],
    whatYoullLearn: [
      "Developing investor pitch decks and pitching startup business concepts to international industry judges in the BPP",
      "Corporate partnership acquisition, sponsor relations, and B2B communication",
      "Professional motorsport media production: DSLR track photography, video editing, and social growth campaigns",
      "Planning and coordinating public exhibitions, university rollouts, and sponsor networking events",
      "Visual brand identity design, race car livery creation, and merchandise design in Adobe Creative Suite & Canva"
    ],
    software: ["Adobe Creative Suite", "Canva", "Excel / Sheets", "Social Analytics"],
    image: "/assets/departments/fnm/fnm1.webp",
    images: [
      "/assets/departments/fnm/fnm1.webp",
      "/assets/departments/fnm/fnm2.webp",
      "/assets/departments/fnm/fnm3.webp"
    ],
    imagePosition: "object-[center_52%]",
    openPositions: true
  }
];
