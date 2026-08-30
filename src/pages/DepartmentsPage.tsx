import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { CheckCircle, ChevronRight, UserPlus } from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const DepartmentsPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      
      {/* Header */}
      <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold shadow-xs">
          <UserPlus className="w-3.5 h-3.5" />
          <span>Engineering & Operations Organization</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
          OUR DEPARTMENTS
        </h1>
        <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Every subsystem of our racecar is the result of dedicated student engineering teams working in synchronization across mechanics, electronics, aerodynamics, and management.
        </p>
      </ScrollReveal>

      {/* Departments Grid */}
      <div className="space-y-10">
        {departments.map((dept, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal
              key={dept.id}
              direction={isEven ? 'left' : 'right'}
              duration={650}
              delay={40}
            >
              <div className="bg-white rounded-3xl border border-warm-250 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
                {/* Content */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                  isEven ? '' : 'lg:order-2'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-brand-red uppercase font-bold">
                        // {dept.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-[10px] font-mono font-bold">
                        ● RECRUITING ACTIVE
                      </span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900 mb-1">
                      {dept.name}
                    </h2>
                    <p className="text-warm-500 font-mono text-xs mb-4 font-semibold">
                      {dept.tagline}
                    </p>
                    <p className="text-warm-700 text-sm sm:text-base leading-relaxed mb-6">
                      {dept.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-wider text-warm-900 font-bold mb-3 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-red" />
                          <span>Core Responsibilities</span>
                        </h3>
                        <ul className="space-y-2 text-xs text-warm-700">
                          {dept.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-brand-red font-bold font-mono">▸</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-wider text-warm-900 font-bold mb-3 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-sm bg-amber-500 inline-block" />
                          <span>What You'll Learn</span>
                        </h3>
                        <ul className="space-y-2 text-xs text-warm-700">
                          {dept.whatYoullLearn.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-700 font-bold font-mono">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-warm-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-warm-500 font-semibold">Tools:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.software.map((sw, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-warm-50 border border-warm-200 text-[11px] font-mono text-warm-800 font-semibold">
                            [ {sw.toUpperCase().replace(/\s+/g, '_')} ]
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/recruitment"
                      className="px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-1 shadow-xs"
                    >
                      <span>Apply for {dept.name}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Photo */}
                <div className={`lg:col-span-5 relative min-h-[320px] bg-warm-200 ${
                  isEven ? '' : 'lg:order-1'
                }`}>
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                    {dept.name} Division Workshop
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </div>
  );
};

export default DepartmentsPage;
