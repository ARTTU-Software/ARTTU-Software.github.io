import React from 'react';
import { currentLeadership, TeamMember } from '../../data/team';

interface LeadershipDirectoryProps {
  leaders?: TeamMember[];
  className?: string;
}

export const LeadershipDirectory: React.FC<LeadershipDirectoryProps> = ({
  leaders = currentLeadership,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ${className}`}>
      {leaders.map((leader, idx) => (
        <div key={idx} className="bg-white p-5 rounded-2xl border border-warm-250 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-mono font-bold flex items-center justify-center mx-auto mb-3 text-sm">
            {leader.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="font-display font-bold text-sm text-warm-900 mb-1">
            {leader.name}
          </div>
          <div className="text-[11px] text-brand-red font-mono font-semibold">
            {leader.role}
          </div>
        </div>
      ))}
    </div>
  );
};
