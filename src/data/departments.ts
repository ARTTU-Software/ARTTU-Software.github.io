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
  imagePosition?: string;
  openPositions: boolean;
}

export const departments: Department[] = [
  {
    id: "mechanical",
    name: "Mechanical",
    iconName: "Wrench",
    title: "Mech Team",
    tagline: "The physical backbone of our racecar, from structural chassis to aerodynamic form.",
    description: "The backbone of our racecar. This department manages the complete lifecycle of the vehicle's chassis and body, from initial CAD concept to final precision manufacturing. In charge of developing all structural systems including the tubular spaceframe chassis, composite aerodynamic bodywork, suspension links, and steering mechanisms. By utilizing advanced FEA (Finite Element Analysis) simulations in CATIA and Ansys, they ensure every component is optimized for maximum structural integrity and minimum weight.",
    responsibilities: [
      "Designing suspension, steering, braking, and cooling components in 3D CAD",
      "Structural FEA and crash simulation analysis using Ansys Mechanical",
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
    image: "/assets/2026_chassis_welding.webp",
    imagePosition: "object-[45%_35%]",
    openPositions: true
  },
  {
    id: "accumulator",
    name: "Accumulator & Powertrain",
    iconName: "BatteryCharging",
    title: "Accu Team",
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
    image: "/assets/DBV_FSBK-Day2-49-1-scaled.webp",
    imagePosition: "object-[80%_35%]",
    openPositions: true
  },
  {
    id: "electrical",
    name: "Electrical & Software Development",
    iconName: "Cpu",
    title: "Electrical Team",
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
    image: "/assets/2026_dashboard_pcb.webp",
    imagePosition: "object-center",
    openPositions: true
  },
  {
    id: "vehicle-dynamics",
    name: "Vehicle Dynamics",
    iconName: "Activity",
    title: "Dynamics Team",
    tagline: "The sensory system and reflexes bridging vehicle physics to the pavement.",
    description: "The sensory system and reflexes of the vehicle, acting as the bridge where physics meets the pavement. This department ensures the racecar responds perfectly to every driver input by focusing on vehicle behavior analysis, mathematical modeling, and fine-tuning suspension and steering kinematics to define how the car feels and handles on the limit. In addition to CFD aerodynamic optimization and torque vectoring, they manage thermal management systems to keep all components stable and cool under intense racing conditions.",
    responsibilities: [
      "Developing full-vehicle dynamic simulations in MATLAB / Simulink",
      "CFD aero modeling for wing element optimization and downforce balance",
      "Tire testing, suspension geometry kinematic optimization, and damper tuning",
      "Post-session telemetry data processing from dynamic tests and competitions"
    ],
    whatYoullLearn: [
      "Race vehicle dynamics theory: Pacejka tire modeling, roll centers, and weight transfer",
      "Multibody suspension kinematics simulation and lap time optimization using MATLAB / Simulink",
      "Computational Fluid Dynamics (CFD) for multi-element wings, diffusers, and aerodynamic balance",
      "Torque vectoring, electronic differential, and regenerative braking control algorithms",
      "Trackside telemetry data analysis (Marple/Grafana) to translate driver feedback into setups"
    ],
    software: ["MATLAB & Simulink", "Ansys Suite", "Marple"],
    image: "/assets/IMG_8623-scaled.webp",
    imagePosition: "object-[50%_60%]",
    openPositions: true
  },
  {
    id: "marketing",
    name: "Finances & Marketing",
    iconName: "TrendingUp",
    title: "Finances Team",
    tagline: "The face, voice, and creative force driving partner relations and global reach.",
    description: "The face and voice of the team. As the creative and strategic force behind ART TU, this department manages everything from fundraising and corporate sponsorship acquisition to the prestigious Business Plan Presentation (BPP) at European competitions. They lead photography, videography, graphic design, and social media management, ensuring our engineering achievements reach a global audience and our partners receive maximum visibility.",
    responsibilities: [
      "Authoring and delivering the Business Plan Presentation (BPP) at FS events",
      "Leading sponsorship outreach, partner negotiations, and brand activations",
      "Creating high-quality photo, video, and social media content for our channels",
      "Budget planning, expense tracking, and team merchandise production"
    ],
    whatYoullLearn: [
      "Developing investor pitch decks and presenting the Business Plan Presentation (BPP) to industry judges",
      "Corporate partnership acquisition, sponsor tracking and B2B communication",
      "Professional motorsport media production: DSLR photography, video editing, and social growth campaigns",
      "Formula Student Cost & Manufacturing event auditing (Bill of Materials & manufacturing cost analysis)",
      "Annual budget forecasting, event coordination, and brand identity design in Canva & Adobe Suite"
    ],
    software: ["Adobe Creative Suite", "Canva", "Excel / Sheets", "Social Analytics"],
    image: "/assets/IMG_9963-scaled.webp",
    imagePosition: "object-[78%_25%]",
    openPositions: true
  },
  {
    id: "logistics",
    name: "Logistics",
    iconName: "Truck",
    title: "Logistics Team",
    tagline: "The circulatory system managing resource flow, acquisitions, and European transit.",
    description: "The circulatory system of the team that keeps our entire organization running smoothly. This department ensures the constant flow of resources, manages technical acquisitions, and coordinates international travel of the vehicle and 20+ crew members across European borders to competitions. From pit garage management to workshop supply chains, they ensure every component and team member is in the right place at the right time.",
    responsibilities: [
      "Coordinating international transportation of racecar, equipment, and crew across Europe",
      "Managing workshop inventory, tool organization, and consumable supply chains",
      "Travel routes, and vehicle fleet logistics"
    ],
    whatYoullLearn: [
      "International motorsport logistics: freight routing, customs clearance, and European border transit",
      "Workshop supply chain operations and tool/consumable inventory tracking",
      "Project management methodologies, team scheduling, and cross-department operational leadership"
    ],
    software: ["Project Management Tools", "Inventory Management", "Google Workspace"],
    image: "/assets/DSC_0095-1-1-scaled.webp",
    imagePosition: "object-[45%_40%]",
    openPositions: true
  }
];
