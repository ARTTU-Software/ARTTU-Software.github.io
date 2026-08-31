import React, { useState, useRef } from 'react';
import { CURRENT_CAR, carHotspots, mainCarSpecs } from '../data/carSpecs';
import {
  Zap,
  Activity,
  Gauge,
  BatteryCharging,
  Feather,
  Wind,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

export const CarPage: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<(typeof carHotspots)[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const specsSectionRef = useRef<HTMLDivElement>(null);

  const kpis = [
    {
      label: '0-100 km/h',
      sublabel: 'Acceleration',
      value: CURRENT_CAR.kpis.accelerationSec,
      decimals: 1,
      suffix: ' s',
      icon: Gauge,
      highlight: true,
    },
    {
      label: 'Top Speed',
      sublabel: 'Track Limit',
      value: CURRENT_CAR.kpis.topSpeedKmh,
      decimals: 0,
      suffix: ' km/h',
      icon: Activity,
    },
    {
      label: 'Peak Power',
      sublabel: 'Dual PM Motors',
      value: CURRENT_CAR.kpis.peakPowerKw,
      decimals: 0,
      suffix: ' kW',
      icon: Zap,
    },
    {
      label: 'Pack Voltage',
      sublabel: 'Custom Li-Ion',
      value: CURRENT_CAR.kpis.packVoltageV,
      decimals: 0,
      suffix: ' V DC',
      icon: BatteryCharging,
    },
    {
      label: 'Vehicle Mass',
      sublabel: 'Race-Ready Weight',
      value: CURRENT_CAR.kpis.vehicleMassKg,
      decimals: 0,
      prefix: '~',
      suffix: ' kg',
      icon: Feather,
    },
    {
      label: 'Downforce',
      sublabel: 'Aero @ 60 km/h',
      value: CURRENT_CAR.kpis.downforceN,
      decimals: 0,
      prefix: '~',
      suffix: ' N',
      icon: Wind,
    },
  ];

  const currentHotspotIndex = selectedHotspot
    ? carHotspots.findIndex((h) => h.id === selectedHotspot.id)
    : -1;

  const handlePrevHotspot = () => {
    if (currentHotspotIndex <= 0) {
      setSelectedHotspot(carHotspots[carHotspots.length - 1]);
    } else {
      setSelectedHotspot(carHotspots[currentHotspotIndex - 1]);
    }
    setIsDrawerOpen(true);
  };

  const handleNextHotspot = () => {
    if (currentHotspotIndex === -1 || currentHotspotIndex >= carHotspots.length - 1) {
      setSelectedHotspot(carHotspots[0]);
    } else {
      setSelectedHotspot(carHotspots[currentHotspotIndex + 1]);
    }
    setIsDrawerOpen(true);
  };

  const handleSelectHotspot = (spot: (typeof carHotspots)[0]) => {
    setSelectedHotspot(spot);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const scrollToSpecs = () => {
    specsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 space-y-6 sm:space-y-12 w-full">
      {/* ---------------------------------------------------------------------- */}
      {/* HERO STUDIO SHOWROOM STAGE (Variant 1: ART TU Crimson Racing Studio) */}
      {/* ---------------------------------------------------------------------- */}
      <section className="relative w-full min-h-[460px] sm:min-h-[600px] lg:min-h-[86vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#6e0909] via-[#380404] via-60% to-[#080000] select-none">
        {/* Overhead Softbox Spotlight Cone on Red Studio Wall */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,210,210,0.28)_0%,rgba(255,90,90,0.12)_45%,rgba(100,10,10,0)_80%,transparent_100%)] pointer-events-none" />

        {/* Ambient Top Rim Lighting */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

        {/* Top Minimal Stage Header & Subsystem Filter Bar */}
        <ScrollReveal direction="down" duration={700} delay={100} className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 pb-1">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            {/* Left: Generation Model Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-semibold shadow-md shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b3b]" />
              <span className="text-white font-bold">{CURRENT_CAR.shortName.toUpperCase()}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">{CURRENT_CAR.generationCode} Single-Seater</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white/70">Season {CURRENT_CAR.seasonSpan}</span>
            </div>

            {/* Right: Subsystem Direct Jump Pills (Horizontal scroll on mobile, flex-wrap on desktop) */}
            <div className="flex items-center gap-1.5 sm:gap-2 max-w-full overflow-x-auto no-scrollbar py-1 px-0.5 justify-start sm:justify-center">
              {carHotspots.map((spot) => {
                const isSelected = selectedHotspot?.id === spot.id && isDrawerOpen;
                const shortPillName = spot.name
                  .replace(' & Uprights', '')
                  .replace(' & Splitter', '')
                  .replace('Li-Ion ', '')
                  .replace(' & Endplate (E017)', '');

                return (
                  <button
                    key={spot.id}
                    onClick={() => handleSelectHotspot(spot)}
                    className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-white text-brand-red border-white shadow-sm font-bold'
                        : 'bg-black/35 text-white/85 border-white/15 hover:bg-white/20 hover:text-white hover:border-white/30 backdrop-blur-sm'
                    }`}
                  >
                    {shortPillName}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Center Stage: Car Silhouette + Moving ARTTU Backdrop + Anchored 3D Floor + Reflection + Shadows + Hotspots */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 mt-2 sm:my-auto flex items-center justify-center pt-2 sm:pt-6 pb-6 sm:pb-18 lg:pb-24">
          <ScrollReveal direction="up" duration={1300} delay={250} distance={45} className="w-full flex justify-center">
            <div
              className={`relative w-full max-w-4xl lg:max-w-5xl scale-[1.05] sm:scale-100 transition-transform duration-500 ease-out ${
                selectedHotspot && isDrawerOpen ? 'lg:-translate-x-16 xl:-translate-x-20' : 'translate-x-0'
              }`}
            >
              {/* Layer 0: Massive "ARTTU" Backdrop Typography (Moves with the car!) */}
              <div className="absolute inset-0 -top-10 sm:-top-14 lg:-top-20 flex items-center justify-center pointer-events-none select-none overflow-visible z-0">
                <div className="font-display font-black text-[24vw] sm:text-[20vw] lg:text-[17.5rem] xl:text-[20rem] tracking-tighter leading-none uppercase select-none flex items-center">
                  <span className="text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.65)]">ART</span>
                  <span className="text-[#ff4d4d] drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]">TU</span>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* 3D PERSPECTIVE TILTED SHOWROOM FLOOR PLANE (Up to Diffuser Level) */}
              {/* ------------------------------------------------------------- */}
              {/* 3D Tilted Floor Plane with Perspective Depth extending from diffuser/underbody */}
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[300vw] h-[900px] pointer-events-none z-0 overflow-hidden [perspective:850px] [perspective-origin:50%_0%]">
                <div className="w-full h-full bg-gradient-to-b from-[#160101] via-[#090000] to-[#020000] [transform:rotateX(70deg)] origin-top shadow-inner">
                  {/* Perspective CAD / Studio Floor Grid (physically recedes to the diffuser horizon) */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.065)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_3%,black_70%,transparent_90%)]" />
                  {/* Specular Floor Spotlight Glow & Reflection Pool */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_12%,rgba(255,100,100,0.24)_0%,rgba(160,20,20,0.08)_45%,transparent_75%)]" />
                  {/* Perspective Light Falloff Gradient */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
                </div>
              </div>

              {/* Horizon Seam at diffuser level */}
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[300vw] h-[1px] bg-gradient-to-r from-transparent via-[#ff8a80]/40 to-transparent pointer-events-none z-0 shadow-[0_0_14px_rgba(255,138,128,0.35)]" />

              {/* ------------------------------------------------------------- */}
              {/* HIGH-GLOSS FAINT MIRRORED FLOOR REFLECTION (Cross-Browser Firefox + Chrome) */}
              {/* ------------------------------------------------------------- */}
              <div
                className="absolute top-[96%] inset-x-0 pointer-events-none select-none z-1 overflow-hidden"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 25%, transparent 55%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 25%, transparent 55%)',
                }}
              >
                <img
                  src="/assets/car_page/2026_Car_Sideways.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto block opacity-35 blur-[0.4px]"
                  style={{ transform: 'scaleY(-1)' }}
                />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* FULL VOLUMETRIC REALISTIC SHADOW STACK (Rich & Deep) */}
              {/* ------------------------------------------------------------- */}

              {/* 1. Extended Ambient Ground Penumbra */}
              <div className="absolute bottom-[-4px] left-[-3%] right-[-3%] h-14 sm:h-18 bg-black/55 blur-2xl rounded-[100%] pointer-events-none z-0" />

              {/* 2. Full-length Underbody Ground Shadow */}
              <div className="absolute bottom-[1%] left-[2%] right-[2%] h-7 sm:h-9 bg-black/85 blur-xl rounded-[100%] pointer-events-none z-0" />

              {/* 3. Deep Upward Shadow filling underneath Floor Tray & Sidepods */}
              <div className="absolute bottom-[3%] left-[10%] right-[10%] h-[20%] bg-black/75 blur-lg rounded-2xl pointer-events-none z-0" />
              <div className="absolute bottom-[4%] left-[16%] right-[14%] h-[15%] bg-black/85 blur-md rounded-xl pointer-events-none z-0" />

              {/* 4. Upward Volumetric Shadow covering UNDER THE REAR WING & DIFFUSER */}
              <div className="absolute bottom-[14%] right-[3%] w-[28%] h-[36%] bg-black/65 blur-2xl rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-[6%] right-[2%] w-[25%] h-[22%] bg-black/85 blur-lg rounded-2xl pointer-events-none z-0" />

              {/* 5. Upward Shadow covering UNDER THE FRONT WING & NOSECONE */}
              <div className="absolute bottom-[3%] left-[1%] w-[24%] h-[15%] bg-black/80 blur-md rounded-xl pointer-events-none z-0" />

              {/* 6. Continuous Crisp Ground Contact Baseline */}
              <div className="absolute bottom-[2%] left-[3%] right-[3%] h-3 sm:h-3.5 bg-black blur-[2px] rounded-full pointer-events-none z-0" />

              {/* 7. Front Tire High-Pressure Contact Patch */}
              <div className="absolute bottom-[1.5%] left-[22.5%] w-[19%] h-3.5 sm:h-4 bg-black blur-[1.5px] rounded-[100%] pointer-events-none z-0" />

              {/* 8. Rear Tire High-Pressure Contact Patch */}
              <div className="absolute bottom-[1.8%] left-[75.5%] w-[19.5%] h-3.5 sm:h-4 bg-black blur-[1.5px] rounded-[100%] pointer-events-none z-0" />

              {/* Main Racecar Studio Profile Image */}
              <img
                src="/assets/car_page/2026_Car_Sideways.webp"
                alt={`${CURRENT_CAR.name} Studio Profile`}
                decoding="async"
                className="w-full h-auto object-contain block relative z-10 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
              />

              {/* Interactive Hotspot Markers (Calibrated to 2026_Car_Sideways.webp) */}
              {carHotspots.map((spot) => {
                const isSelected = selectedHotspot?.id === spot.id && isDrawerOpen;
                return (
                  <button
                    key={spot.id}
                    onClick={() => handleSelectHotspot(spot)}
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={`Hotspot: ${spot.name}`}
                    aria-pressed={isSelected}
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span
                        className={`relative inline-flex rounded-full h-5 w-5 sm:h-6 sm:w-6 items-center justify-center font-mono text-xs font-bold transition-all duration-200 shadow-md ${
                          isSelected
                            ? 'bg-white text-brand-red scale-115 ring-4 ring-white/40'
                            : 'bg-black/85 text-white border border-white/80 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-brand-red'
                        }`}
                      >
                        +
                      </span>
                    </span>

                    {/* Hover Tooltip Pill */}
                    <span
                      className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10.5px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md shadow-xl transition-all duration-200 pointer-events-none ${
                        isSelected
                          ? 'bg-white text-brand-red opacity-100 translate-y-0 z-30'
                          : 'bg-black/95 text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-md z-30'
                      }`}
                    >
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Sleek Telemetry HUD (Bottom Drawer on Mobile, Right Flyout on Desktop) */}
        {selectedHotspot && isDrawerOpen && (
          <div className="fixed bottom-3 inset-x-3 sm:absolute sm:bottom-auto sm:inset-x-auto sm:right-6 lg:right-10 sm:top-1/2 sm:-translate-y-1/2 w-auto sm:w-[320px] xl:w-[340px] max-w-lg mx-auto sm:mx-0 z-30 bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-3.5 sm:p-5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-6 sm:slide-in-from-right-6 text-warm-900">
            {/* HUD Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-warm-200">
              <span className="text-xs font-mono text-brand-red uppercase font-bold tracking-wider">
                // {selectedHotspot.department}
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-warm-100 text-warm-700 font-bold border border-warm-250">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  LIVE CAD
                </span>
                <button
                  onClick={handleCloseDrawer}
                  className="w-6 h-6 rounded-full bg-warm-100 hover:bg-warm-200 text-warm-600 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Close telemetry HUD"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Subsystem Name & Headline */}
            <div className="mb-2">
              <div className="text-[10px] font-mono text-warm-500 uppercase font-semibold">
                Subsystem // {selectedHotspot.name}
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-warm-900 leading-tight mt-0.5">
                {selectedHotspot.headline}
              </h3>
            </div>

            <p className="text-xs text-warm-700 leading-relaxed mb-2.5 line-clamp-2 sm:line-clamp-none">
              {selectedHotspot.description}
            </p>

            {/* Subsystem Technical Specs Grid */}
            <div className="space-y-1.5 mb-2.5">
              {selectedHotspot.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="p-1.5 sm:p-2 rounded-xl bg-warm-50/90 border border-warm-200/90 flex items-center justify-between shadow-2xs"
                >
                  <span className="text-xs text-warm-600 font-medium">{s.label}</span>
                  <span className="text-xs font-mono font-bold text-warm-900">{s.value}</span>
                </div>
              ))}
            </div>

            {/* HUD Footer Navigation */}
            <div className="pt-2 border-t border-warm-200 flex items-center justify-between">
              <div className="text-[11px] font-mono text-warm-500 font-semibold">
                {String(currentHotspotIndex + 1).padStart(2, '0')} / {String(carHotspots.length).padStart(2, '0')}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevHotspot}
                  className="p-1.5 rounded-lg bg-warm-100 hover:bg-warm-200 text-warm-700 transition-colors cursor-pointer"
                  aria-label="Previous hotspot"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextHotspot}
                  className="p-1.5 rounded-lg bg-warm-100 hover:bg-warm-200 text-warm-700 transition-colors cursor-pointer"
                  aria-label="Next hotspot"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Clean Floating Bottom Scroll Button (No Solid Bar) */}
        <ScrollReveal direction="up" duration={800} delay={600} className="relative z-20 pb-3 flex justify-center pointer-events-none">
          <button
            onClick={scrollToSpecs}
            className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white text-xs font-mono font-medium transition-all shadow-md cursor-pointer group"
          >
            <span>Explore Technical Specifications</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#ff4d4d] animate-bounce" />
          </button>
        </ScrollReveal>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* LOWER SECTIONS (Constrained in max-w-7xl) */}
      {/* ---------------------------------------------------------------------- */}
      <div ref={specsSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Vehicle Specs KPI Strip */}
        <div>
          <ScrollReveal direction="up" delay={60} duration={600} className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold text-base sm:text-lg text-warm-900 uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b3b]" />
              <span>Specs</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {kpis.map((kpi, idx) => {
              const Icon = kpi.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={100 + idx * 70} duration={650}>
                  <div
                    className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md ${
                      kpi.highlight
                        ? 'bg-gradient-to-b from-red-50/90 to-white border-brand-red/30 shadow-2xs'
                        : 'bg-white border-warm-250 hover:border-warm-350 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-warm-500 font-semibold">
                        {kpi.label}
                      </span>
                    </div>
                    <div>
                      <div
                        className={`text-lg sm:text-xl font-black font-mono tracking-tight ${
                          kpi.highlight ? 'text-brand-red' : 'text-warm-900'
                        }`}
                      >
                        <TelemetryTicker
                          value={kpi.value}
                          decimals={kpi.decimals || 0}
                          prefix={kpi.prefix || ''}
                          suffix={kpi.suffix || ''}
                        />
                      </div>
                      <div className="text-[10px] font-mono text-warm-500 mt-0.5 truncate">
                        {kpi.sublabel}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications Matrix */}
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-warm-250 shadow-sm">
          <ScrollReveal direction="up" duration={600} className="mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h2 className="font-display font-black text-lg sm:text-xl text-warm-900 uppercase tracking-tight flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b3b]" />
                  <span>Technical Specifications</span>
                </h2>
                <p className="text-xs sm:text-sm text-warm-600 mt-0.5">
                  Engineering subsystem parameters and specs.
                </p>
              </div>
              <span className="text-xs font-mono text-warm-500 uppercase font-semibold">
                [ SPECS // 2026 ]
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {mainCarSpecs.map((group, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={650} className="h-full">
                <div className="bg-warm-50/80 p-4 sm:p-5 rounded-xl border border-warm-200 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-red font-bold mb-3 pb-2 border-b border-warm-200 flex items-center justify-between">
                      <span>// {group.category}</span>
                    </h3>
                    <div className="space-y-2">
                      {group.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs py-1.5 border-b border-warm-200/60 last:border-0 last:py-0"
                        >
                          <span className="text-warm-600 font-medium">{item.label}</span>
                          <span className="font-mono font-bold text-warm-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-4">
          <ScrollReveal direction="up" duration={600} className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-black text-lg sm:text-xl text-warm-900 uppercase tracking-tight flex items-center gap-2">
                <span>Track Action</span>
              </h2>
              <p className="text-xs sm:text-sm text-warm-600 mt-0.5">
                Behind-the-scenes media from the {CURRENT_CAR.seasonSpan} season.
              </p>
            </div>
            <span className="text-xs font-mono text-warm-500 uppercase font-semibold">Media Archive</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollReveal direction="up" delay={0} duration={650}>
              <div className="rounded-2xl overflow-hidden border border-warm-250 h-44 sm:h-52 bg-warm-150 shadow-xs group relative">
                <img
                  src="/assets/IMG_8745.webp"
                  alt="Team Trackside Support"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-xs font-bold">Trackside</span>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">Dej</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} duration={650}>
              <div className="rounded-2xl overflow-hidden border border-warm-250 h-44 sm:h-52 bg-warm-150 shadow-xs group relative">
                <img
                  src="/assets/IMG_7447.webp"
                  alt="Driver Cockpit Preparation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-xs font-bold">Preparation</span>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">Germany</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={240} duration={650}>
              <div className="rounded-2xl overflow-hidden border border-warm-250 h-44 sm:h-52 bg-warm-150 shadow-xs group relative">
                <img
                  src="/assets/IMG_1513.webp"
                  alt="Driver in Racecar"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-xs font-bold">Ready to Race</span>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">Dej</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
