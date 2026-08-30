import React, { useState } from 'react';
import { carHotspots, mainCarSpecs } from '../data/carSpecs';
import { Activity, ShieldCheck, Zap, Cpu, Sparkles, ChevronRight, Info } from 'lucide-react';

export const InteractiveCarShowcase: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(carHotspots[0]);

  return (
    <section id="car" className="py-24 bg-carbon-900 relative cad-grid-red overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-red/10 border border-brand-red/30 text-brand-brightRed text-xs font-mono uppercase font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Pure Electric Formula Prototype</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            THE RACECAR & ENGINEERING
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Click the telemetry nodes on the car to inspect subsystems engineered entirely by students at the Technical University of Cluj-Napoca.
          </p>
        </div>

        {/* 2.5D Interactive Exploded Blueprint Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Car Interactive Image Stage */}
          <div className="lg:col-span-8 bg-carbon-950/80 rounded-2xl border border-carbon-700/80 p-3 sm:p-5 relative flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="relative w-full rounded-xl overflow-hidden shadow-inner">
              <img
                src="/assets/IMG_7408.webp"
                alt="ART TU Formula Student Racecar"
                className="w-full h-auto object-cover rounded-lg filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] block"
              />

              {/* Hotspot Pins */}
              {carHotspots.map((spot) => {
                const isSelected = selectedHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedHotspot(spot)}
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                    aria-label={spot.name}
                  >
                    <span className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-brand-brightRed scale-125' : 'bg-white/50'
                      }`}></span>
                      <span className={`relative inline-flex rounded-full h-5 w-5 sm:h-6 sm:w-6 items-center justify-center font-mono text-[10px] font-bold transition-transform duration-200 ${
                        isSelected
                          ? 'bg-brand-red text-white scale-110 shadow-lg shadow-brand-red ring-4 ring-brand-red/40'
                          : 'bg-carbon-850 text-gray-200 border border-gray-400 group-hover:scale-110 group-hover:bg-brand-red'
                      }`}>
                        +
                      </span>
                    </span>
                    <span className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-lg transition-opacity pointer-events-none ${
                      isSelected ? 'bg-brand-red text-white opacity-100' : 'bg-carbon-900/90 text-gray-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm'
                    }`}>
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Hotspot Telemetry Detail Card */}
          <div className="lg:col-span-4 bg-carbon-850 rounded-2xl border border-carbon-700 p-6 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-brand-brightRed uppercase tracking-wider mb-2">
                <span>{selectedHotspot.department}</span>
                <Info className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {selectedHotspot.headline}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedHotspot.description}
              </p>

              {/* Spec Pills */}
              <div className="space-y-2.5">
                {selectedHotspot.specs.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-carbon-900 border border-carbon-750 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{s.label}</span>
                    <span className="text-xs font-mono font-bold text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-carbon-750 flex items-center justify-between text-xs text-gray-400">
              <span>Hotspot active: {selectedHotspot.name}</span>
              <span className="font-mono text-brand-brightRed">LIVE CAD SPEC</span>
            </div>
          </div>

        </div>

        {/* Full Specifications Grid */}
        <div className="mt-16 bg-carbon-950 p-8 rounded-2xl border border-carbon-800">
          <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-brand-brightRed" />
            <span>Technical Specifications Matrix</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainCarSpecs.map((group, idx) => (
              <div key={idx} className="bg-carbon-900/60 p-5 rounded-xl border border-carbon-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-brightRed font-bold mb-4">
                  {group.category}
                </h4>
                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs border-b border-carbon-800 pb-2">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-mono font-semibold text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
