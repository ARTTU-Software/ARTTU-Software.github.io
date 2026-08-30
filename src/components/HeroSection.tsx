import React from 'react';
import { ChevronRight, Zap, Trophy, Shield, Activity, ArrowUpRight, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
  onOpenSponsorModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal, onOpenSponsorModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cad-grid">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-red/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-darkRed/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Decorative track lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* 2026 Champion Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-carbon-850/90 border border-brand-red/40 shadow-lg shadow-brand-red/10 backdrop-blur-md animate-pulse-slow">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-brightRed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-200 flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400 inline" />
              <span>FS Balkans 2026 Champions & P3 Efficiency @ Hockenheim</span>
            </span>
          </div>
        </div>

        {/* Main Titles */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.1]">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-brand-brightRed">
              ELECTRIC SPEED
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            The Technical University of Cluj-Napoca’s Formula Student Team. Designing, building, and racing Romania's premier electric formula racecar across European circuits.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenJoinModal}
              className="px-7 py-3.5 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Join Recruitment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#car"
              className="px-7 py-3.5 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-gray-200 hover:text-white font-bold text-sm uppercase tracking-wider border border-carbon-600 hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Car Specs</span>
              <Activity className="w-4 h-4 text-brand-brightRed" />
            </a>

            <button
              onClick={onOpenSponsorModal}
              className="px-5 py-3.5 rounded-lg bg-transparent hover:bg-carbon-800/60 text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition flex items-center gap-1.5"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Live Telemetry KPI Cards Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-carbon-850/80 backdrop-blur-md p-4 rounded-xl border border-carbon-700/80 hover:border-brand-red/40 transition group">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Acceleration</span>
              <Zap className="w-4 h-4 text-brand-brightRed group-hover:scale-110 transition" />
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white">
              &lt; 3.5<span className="text-sm font-mono text-brand-brightRed ml-1">sec</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">0 to 100 km/h Launch</div>
          </div>

          <div className="bg-carbon-850/80 backdrop-blur-md p-4 rounded-xl border border-carbon-700/80 hover:border-brand-red/40 transition group">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">Accumulator</span>
              <Shield className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition" />
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white">
              600<span className="text-sm font-mono text-brand-brightRed ml-1">V</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Custom In-House BMS</div>
          </div>

          <div className="bg-carbon-850/80 backdrop-blur-md p-4 rounded-xl border border-carbon-700/80 hover:border-brand-red/40 transition group">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">FS Germany '26</span>
              <Award className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white">
              3rd<span className="text-xs font-mono text-emerald-400 ml-1">Place</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Efficiency Event at Hockenheim</div>
          </div>

          <div className="bg-carbon-850/80 backdrop-blur-md p-4 rounded-xl border border-carbon-700/80 hover:border-brand-red/40 transition group">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider">FS Balkans '26</span>
              <Trophy className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-white">
              1st<span className="text-xs font-mono text-amber-400 ml-1">Overall</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Clean Sweep of Statics & Overall</div>
          </div>
        </div>

      </div>
    </section>
  );
};
