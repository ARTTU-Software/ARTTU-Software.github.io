import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { Plus, ChevronRight, UserPlus } from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const DepartmentsPage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Dynamic CAD Drafting & Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint CAD Wireframe Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1250px] opacity-[0.16] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/departments_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, transparent 80%)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[10%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[45%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />
        <div className="absolute top-[75%] left-[8%] w-[500px] h-[500px] rounded-full bg-brand-red/[0.03] blur-[130px] animate-ambient-float-1" />

        {/* Precision Engineering Speed Filaments */}
        <div className="absolute top-[15%] left-[6%] w-52 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent animate-wind-streak-1" />
        <div className="absolute top-[50%] right-[10%] w-64 h-px bg-gradient-to-r from-transparent via-brand-brightRed/16 to-transparent animate-wind-streak-2" />
        <div className="absolute top-[82%] left-[14%] w-48 h-px bg-gradient-to-r from-transparent via-brand-red/14 to-transparent animate-wind-streak-3" />

        {/* Margin Sector Ticks */}
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[20%] left-5 opacity-25" aria-hidden="true">
          <div className="w-3 h-px bg-warm-400" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-4 h-px bg-brand-red" />
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[60%] right-5 opacity-25" aria-hidden="true">
          <div className="w-4 h-px bg-brand-red" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-3 h-px bg-warm-400" />
        </div>

        {/* Continuous Animated SVG Streamlines (Crisp Dotted Lines) */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 2800"
          preserveAspectRatio="none"
        >
          <path
            d="M 140,0 C 700,320 1260,520 1120,900 C 960,1280 220,1460 380,1880 C 520,2220 1180,2420 1020,2800"
            stroke="#ef4444"
            strokeWidth="1.8"
            strokeOpacity="0.16"
            strokeDasharray="14 18"
            className="animate-flow-streamline"
          />
          <path
            d="M 170,0 C 730,320 1290,520 1150,900 C 990,1280 250,1460 410,1880 C 550,2220 1210,2420 1050,2800"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeOpacity="0.12"
            strokeDasharray="10 14"
            className="animate-flow-streamline-reverse"
          />
        </svg>
      </div>

      {/* Content Container (Borderless flow, no card trap) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false} className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold shadow-2xs">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Engineering & Operations Organization</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
            OUR DEPARTMENTS
          </h1>
          <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Every subsystem of our racecar is the result of dedicated student engineering teams working in synchronization across mechanics, electronics, aerodynamics, and management.
          </p>
        </ScrollReveal>

        {/* Departments Open Editorial List (Abolishing Boxed Container) */}
        <div className="space-y-16 sm:space-y-24">
          {departments.map((dept, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dept.id}
                id={dept.id}
                className="scroll-mt-28 pb-16 sm:pb-24 border-b border-warm-200/80 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Text Column */}
                  <ScrollReveal
                    direction={isEven ? 'left' : 'right'}
                    duration={550}
                    distance={20}
                    triggerOnce={false}
                    className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-brand-red uppercase font-bold tracking-wider">
                          {dept.title}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-[10px] font-mono font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          RECRUITING ACTIVE
                        </span>
                      </div>

                      <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-warm-900 uppercase tracking-tight">
                        {dept.name}
                      </h2>
                      <p className="text-warm-500 font-mono text-xs mt-1 mb-3 font-semibold">
                        {dept.tagline}
                      </p>
                      <p className="text-warm-700 text-sm sm:text-base leading-relaxed">
                        {dept.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-warm-200/60">
                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-wider text-warm-900 font-bold mb-2.5 flex items-center gap-1.5">
                          <Plus className="w-3.5 h-3.5 text-brand-red" />
                          <span>Core Responsibilities</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-warm-700">
                          {dept.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-brand-red font-bold font-mono">▸</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-wider text-warm-900 font-bold mb-2.5 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-amber-500 inline-block" />
                          <span>What You'll Learn</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-warm-700">
                          {dept.whatYoullLearn.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-700 font-bold font-mono">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-warm-200/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-warm-500 font-semibold">Tools:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {dept.software.map((sw, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md bg-warm-200/60 font-mono text-xs text-warm-800 font-medium"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/recruitment"
                        className="px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm hover:shadow-md hover:scale-102 flex items-center gap-1.5 group"
                      >
                        <span>Apply for {dept.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </ScrollReveal>

                  {/* Photo Column (Heroic Large Widescreen Frame, Clean No-Tooltip) */}
                  <ScrollReveal
                    direction={isEven ? 'right' : 'left'}
                    duration={550}
                    distance={20}
                    triggerOnce={false}
                    className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-warm-250/70">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className={`w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover group-hover:scale-103 transition duration-700 ease-out ${dept.imagePosition || 'object-center'}`}
                      />
                    </div>
                  </ScrollReveal>

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default DepartmentsPage;
