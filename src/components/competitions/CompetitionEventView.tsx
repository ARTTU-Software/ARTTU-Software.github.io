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
    <div className={`space-y-6 pt-2 ${className}`}>
      <CompetitionHeader event={event} />
      <CompetitionResultsGrid results={event.results} />
    </div>
  );
};
