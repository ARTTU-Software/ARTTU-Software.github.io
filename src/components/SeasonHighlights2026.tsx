import React, { useState } from 'react';
import { Trophy, Award, Flag, Flame, Sparkles, LucideIcon } from 'lucide-react';
import { competitionEvents, CompetitionEvent } from '../data/competitions';

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  flag: Flag,
  award: Award,
  flame: Flame,
};

interface SeasonHighlights2026Props {
  events?: CompetitionEvent[];
}

export const SeasonHighlights2026: React.FC<SeasonHighlights2026Props> = ({
  events = competitionEvents,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(events[0]?.id || 'fsBalkans');

  const activeEvent = events.find((e) => e.id === activeTabId) || events[0];

  if (!activeEvent) return null;

  return (
    <section id="highlights" className="py-20 bg-carbon-950 relative border-t border-b border-carbon-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-brightRed font-mono text-xs uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Record-Breaking Season</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              2026 RACING HISTORY
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Dominating international competitions and putting Romanian engineering at the forefront of Formula Student EV innovation.
          </p>
        </div>

        {/* Dynamic Event Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-carbon-850 rounded-xl border border-carbon-700 w-fit mb-8">
          {events.map((event) => {
            const isActive = event.id === activeTabId;
            const IconComponent = (event.icon && iconMap[event.icon]) ? iconMap[event.icon] : Trophy;

            return (
              <button
                key={event.id}
                onClick={() => setActiveTabId(event.id)}
                type="button"
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'text-gray-400 hover:text-white hover:bg-carbon-750'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : ''}`} />
                <span>{event.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Highlight Banner Card */}
        <div className="bg-gradient-to-r from-carbon-850 via-carbon-800 to-carbon-850 p-6 sm:p-8 rounded-2xl border border-carbon-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-carbon-700/80">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">
                {activeEvent.circuit}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {activeEvent.name}
              </h3>
            </div>
            
            <div className="px-5 py-3 rounded-xl bg-carbon-900 border border-brand-red/40 flex items-center gap-3">
              <Flame className="w-6 h-6 text-brand-brightRed" />
              <div>
                <span className="text-[10px] text-gray-400 font-mono uppercase block font-bold">Highlight</span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {activeEvent.mainHighlight}
                </span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeEvent.results.map((res, idx) => {
              const isP1 = res.rank === 1;
              const isP2 = res.rank === 2;
              const isP3 = res.rank === 3;

              return (
                <div
                  key={idx}
                  className="bg-carbon-900/90 p-4 rounded-xl border border-carbon-750 hover:border-brand-red/50 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="text-xs font-medium text-gray-400 mb-2">
                    {res.name}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-display font-bold text-xl sm:text-2xl ${
                      isP1 ? 'text-amber-300' : isP2 ? 'text-slate-300' : isP3 ? 'text-emerald-400' : 'text-white'
                    }`}>
                      {res.place}
                    </span>
                    {isP1 && (
                      <Trophy className="w-4 h-4 text-amber-400" />
                    )}
                    {isP2 && (
                      <Award className="w-4 h-4 text-slate-300" />
                    )}
                    {isP3 && (
                      <Award className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
