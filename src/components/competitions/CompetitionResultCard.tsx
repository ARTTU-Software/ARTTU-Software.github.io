import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { CompetitionResultItem } from '../../data/competitions';

interface CompetitionResultCardProps {
  result: CompetitionResultItem;
  className?: string;
}

export const CompetitionResultCard: React.FC<CompetitionResultCardProps> = ({
  result,
  className = '',
}) => {
  const isP1 = result.rank === 1;
  const isP2 = result.rank === 2;
  const isP3 = result.rank === 3;

  return (
    <div
      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md ${
        isP1
          ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/60 shadow-xs'
          : isP2
          ? 'bg-slate-50 border-slate-300 hover:border-slate-400'
          : isP3
          ? 'bg-emerald-50/50 border-emerald-300/60 hover:border-emerald-400'
          : 'bg-warm-50 border-warm-200 hover:border-warm-300'
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-xs font-semibold text-warm-700 leading-snug">
          {result.name}
        </span>
        {result.category && (
          <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-white border border-warm-200 text-warm-600 shrink-0">
            {result.category}
          </span>
        )}
      </div>

      <div className="flex items-end justify-between pt-1">
        <div className="flex flex-col">
          <span
            className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight ${
              isP1
                ? 'text-amber-700'
                : isP2
                ? 'text-slate-700'
                : isP3
                ? 'text-emerald-700'
                : 'text-warm-900'
            }`}
          >
            {result.place}
          </span>
          {result.points && (
            <span className="text-[11px] font-mono text-warm-500 mt-0.5">
              {result.points}
            </span>
          )}
        </div>

        {/* Clean rank indicator icon */}
        <div className="shrink-0">
          {isP1 ? (
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-700">
              <Trophy className="w-4 h-4" />
            </div>
          ) : isP2 ? (
            <div className="w-8 h-8 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700">
              <Award className="w-4 h-4" />
            </div>
          ) : isP3 ? (
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-700">
              <Award className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-xl bg-warm-200/60 border border-warm-250 flex items-center justify-center text-warm-600 font-mono text-xs font-bold">
              #{result.rank}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
