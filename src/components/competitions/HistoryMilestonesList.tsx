import React from 'react';
import { historicalTimeline, HistoricalMilestone } from '../../data/competitions';
import { HistoryMilestoneCard } from './HistoryMilestoneCard';
import { ScrollReveal } from '../motion/ScrollReveal';

interface HistoryMilestonesListProps {
  milestones?: HistoricalMilestone[];
  className?: string;
}

export const HistoryMilestonesList: React.FC<HistoryMilestonesListProps> = ({
  milestones = historicalTimeline,
  className = '',
}) => {
  return (
    <div className={`space-y-5 ${className}`}>
      {milestones.map((item, idx) => (
        <ScrollReveal key={item.year} direction="up" delay={idx * 80} duration={650}>
          <HistoryMilestoneCard milestone={item} />
        </ScrollReveal>
      ))}
    </div>
  );
};
