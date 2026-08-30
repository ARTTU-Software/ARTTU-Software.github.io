import React from 'react';
import { Trophy, Flag, Award, Zap, Shield, Flame, LucideIcon } from 'lucide-react';
import { CompetitionEvent } from '../../data/competitions';

interface CompetitionTabsProps {
  events: CompetitionEvent[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  flag: Flag,
  award: Award,
  zap: Zap,
  shield: Shield,
  flame: Flame,
};

export const CompetitionTabs: React.FC<CompetitionTabsProps> = ({
  events,
  activeId,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 p-1.5 bg-white rounded-xl border border-warm-250 w-fit shadow-xs ${className}`}>
      {events.map((event) => {
        const isActive = event.id === activeId;
        const IconComponent = (event.icon && iconMap[event.icon]) ? iconMap[event.icon] : Trophy;

        return (
          <button
            key={event.id}
            onClick={() => onSelect(event.id)}
            type="button"
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
              isActive
                ? 'bg-brand-red text-white shadow-xs'
                : 'text-warm-700 hover:text-warm-900 hover:bg-warm-50'
            }`}
            aria-selected={isActive}
            role="tab"
          >
            <IconComponent
              className={`w-3.5 h-3.5 shrink-0 ${
                isActive ? 'text-amber-200' : 'text-warm-500'
              }`}
            />
            <span className="whitespace-nowrap">{event.shortName}</span>
          </button>
        );
      })}
    </div>
  );
};
