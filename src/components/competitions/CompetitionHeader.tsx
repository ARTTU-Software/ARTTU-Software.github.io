import React from 'react';
import { MapPin, Trophy, Flame } from 'lucide-react';
import { CompetitionEvent } from '../../data/competitions';

interface CompetitionHeaderProps {
  event: CompetitionEvent;
  className?: string;
}

export const CompetitionHeader: React.FC<CompetitionHeaderProps> = ({
  event,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono text-warm-600 uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span>{event.circuit}</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-warm-900 tracking-tight">
            {event.name}
          </h2>
        </div>
        
        {/* Main Highlight Badge */}
        <div className="px-4 py-2.5 rounded-xl bg-warm-50 border border-brand-red/20 flex items-center gap-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
            {event.results.some(r => r.rank === 1) ? (
              <Trophy className="w-4 h-4 text-amber-600" />
            ) : (
              <Flame className="w-4 h-4 text-brand-red" />
            )}
          </div>
          <div>
            <span className="text-[10px] text-warm-500 font-mono uppercase block font-bold tracking-wider">
              Season Highlight
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-warm-900">
              {event.mainHighlight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
