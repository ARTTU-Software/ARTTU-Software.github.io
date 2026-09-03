import React from 'react';
import { MapPin } from 'lucide-react';
import { HistoricalMilestone } from '../../data/competitions';

interface HistoryMilestoneCardProps {
  milestone: HistoricalMilestone;
  className?: string;
}

export const HistoryMilestoneCard: React.FC<HistoryMilestoneCardProps> = ({
  milestone,
  className = '',
}) => {
  return (
    <div
      className={`py-6 border-b border-warm-200/80 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group ${className}`}
    >
      <div className="space-y-2 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-brand-red font-mono font-bold text-xs text-white shadow-xs tracking-wider">
            {milestone.year}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-warm-600 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            <span>{milestone.location}</span>
          </div>
        </div>

        <h3 className="font-display font-black text-xl sm:text-2xl text-warm-900 tracking-tight">
          {milestone.name}
        </h3>

        <p className="text-xs sm:text-sm text-warm-700 leading-relaxed font-normal">
          {milestone.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 lg:max-w-sm shrink-0">
        {milestone.awards.map((award, i) => {
          const isP1 = award.position.includes('P1') || award.category === 'gold';
          const isP2 = award.position.includes('P2') || award.category === 'silver';
          const isP3 = award.position.includes('P3') || award.category === 'bronze';

          return (
            <span
              key={i}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 border ${
                isP1
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-800'
                  : isP2
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : isP3
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800'
                  : 'bg-warm-100/70 border-warm-200 text-warm-800'
              }`}
            >
              <span>{award.title} ({award.position})</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

