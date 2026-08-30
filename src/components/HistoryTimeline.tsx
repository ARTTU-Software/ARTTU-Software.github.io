import React from 'react';
import { historicalTimeline } from '../data/competitions';
import { currentLeadership } from '../data/team';
import { History as HistoryIcon, Calendar, Users } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-warm-100 relative border-t border-warm-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold">
            <HistoryIcon className="w-3.5 h-3.5" />
            <span>Legacy of Innovation</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-warm-900 uppercase tracking-tight">
            OUR RACING HISTORY
          </h2>
          <p className="text-warm-700 text-sm sm:text-base">
            From our founding in 2019 at UTCN to championship victories across Europe's top race circuits.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-warm-300">
          {historicalTimeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={item.year} className="relative flex flex-col sm:flex-row items-start sm:items-center group">
                
                {/* Center Badge Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-brand-red flex items-center justify-center text-xs font-mono font-bold text-warm-900 z-10 group-hover:scale-125 transition shadow-sm">
                  <span className="text-[10px]">{item.year.toString().slice(2)}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                  isEven ? 'sm:mr-auto sm:text-right sm:pr-8' : 'sm:ml-auto sm:text-left sm:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-2xl border border-warm-250 hover:border-brand-red/50 transition duration-300 shadow-sm">
                    <div className={`flex items-center gap-2 text-xs font-mono text-brand-red font-bold mb-2 ${
                      isEven ? 'sm:justify-end' : 'justify-start'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year} • {item.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-warm-900 mb-2">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-warm-700 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Awards list */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                      {item.awards.map((a, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-warm-50 border border-warm-200 text-[11px] font-mono font-semibold text-warm-800"
                        >
                          {a.title} ({a.position})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Current Leadership Roster */}
        <div className="mt-24 pt-16 border-t border-warm-250">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-warm-900 uppercase tracking-wider flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-brand-red" />
              <span>Team Leadership 2025-2026</span>
            </h3>
            <p className="text-xs text-warm-600 mt-1">
              Guiding technical execution, competition strategy, and university representation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {currentLeadership.map((leader, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-warm-250 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-mono font-bold flex items-center justify-center mx-auto mb-2 text-xs">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-display font-bold text-xs text-warm-900 leading-tight mb-1">
                  {leader.name}
                </div>
                <div className="text-[10px] text-brand-red font-mono font-semibold leading-tight">
                  {leader.role}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
