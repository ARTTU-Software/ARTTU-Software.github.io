import React from 'react';
import { CompetitionEvent } from '../../data/competitions';
import { CompetitionHeader } from './CompetitionHeader';
import { CompetitionResultsGrid } from './CompetitionResultsGrid';

interface CompetitionEventViewProps {
  event: CompetitionEvent;
  className?: string;
}

export const CompetitionEventView: React.FC<CompetitionEventViewProps> = ({
  event,
  className = '',
}) => {
  return (
    <div className={`bg-white p-6 sm:p-10 rounded-2xl border border-warm-250 shadow-sm space-y-8 ${className}`}>
      <CompetitionHeader event={event} />
      <CompetitionResultsGrid results={event.results} />
    </div>
  );
};
