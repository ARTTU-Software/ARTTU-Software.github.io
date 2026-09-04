import React, { useState } from 'react';
import { departments } from '../data/departments';
import { Wrench, BatteryCharging, Cpu, Activity, TrendingUp, Truck, CheckCircle, ChevronRight, Sparkles, UserPlus } from 'lucide-react';

interface DepartmentExplorerProps {
  onOpenJoinModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5" />,
  BatteryCharging: <BatteryCharging className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

export const DepartmentExplorer: React.FC<DepartmentExplorerProps> = ({ onOpenJoinModal }) => {
  const [activeDept, setActiveDept] = useState(departments[0]);

  return (
    <section id="departments" className="py-24 bg-carbon-900 relative cad-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-brightRed font-mono text-xs uppercase tracking-widest font-semibold mb-2">
              <UserPlus className="w-4 h-4" />
              <span>Talent & Recruitment Hub</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              MEET OUR DEPARTMENTS
            </h2>
          </div>
          
          <button
            onClick={onOpenJoinModal}
            className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 w-fit"
          >
            <span>Apply For Recruitment</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Department Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {departments.map((dept) => {
            const isActive = activeDept.id === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-carbon-800 border-brand-red shadow-lg shadow-brand-red/10 text-white'
                    : 'bg-carbon-850/80 border-carbon-700/80 text-gray-400 hover:text-gray-200 hover:bg-carbon-800'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-3 ${isActive ? 'bg-brand-red text-white' : 'bg-carbon-750 text-gray-400'}`}>
                  {iconMap[dept.iconName]}
                </div>
                <div className="font-display font-bold text-sm leading-tight">
                  {dept.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Department Showcase Panel */}
        <div className="bg-carbon-950 rounded-2xl border border-carbon-750 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Department Information */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase font-semibold mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Recruitment Position</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
                {activeDept.name}
              </h3>
              <p className="text-brand-brightRed font-mono text-sm mb-4">
                {activeDept.tagline}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {activeDept.description}
              </p>

              {/* Responsibilities & Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 font-bold mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-brightRed" />
                    <span>What You'll Do</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                    {activeDept.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-brightRed font-mono font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 font-bold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    <span>What You'll Learn</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-400">
                    {activeDept.whatYoullLearn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-400 font-mono font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Software Stack & CTA */}
            <div className="pt-6 border-t border-carbon-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-mono">Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDept.software.map((sw, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-carbon-850 border border-carbon-700 text-[11px] font-mono text-gray-300">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenJoinModal}
                className="px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5"
              >
                <span>Apply for {activeDept.name}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Department Image & Workshop Preview */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-carbon-900">
            <img
              src={activeDept.image}
              alt={activeDept.name}
              className={`absolute inset-0 w-full h-full object-cover ${activeDept.imagePosition || 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gray-300 block mb-1">
                Workshop & Testing
              </span>
              <span className="font-display font-bold text-white text-lg">
                Hands-on Engineering from Day One
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
