import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { competitionEvents, historicalTimeline } from '../data/competitions';
import {
  CompetitionTabs,
  CompetitionEventView,
  HistoryMilestonesList,
  InteractiveCircuitTimeline,
} from '../components/competitions';
import { TeamHistoryPage } from './TeamHistoryPage';
import {
  Trophy,
  History,
  Award,
  Users,
  ChevronRight,
  Sparkles,
  Flame,
  Zap,
  Compass,
  Layers,
  Flag,
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

export const CompetitionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Dual-view state: 'timeline' | 'alumni'
  const initialView = searchParams.get('view') === 'alumni' || searchParams.get('tab') === 'alumni' ? 'alumni' : 'timeline';
  const [viewMode, setViewMode] = useState<'timeline' | 'alumni'>(initialView);
  const [targetAlumniSeasonId, setTargetAlumniSeasonId] = useState<string | undefined>(
    searchParams.get('season') || undefined
  );

  const [activeTabId, setActiveTabId] = useState<string>(competitionEvents[0]?.id || 'fsBalkans');
  const activeEvent = competitionEvents.find((e) => e.id === activeTabId) || competitionEvents[0];

  // Sync state if URL search params change
  useEffect(() => {
    const tab = searchParams.get('tab') || searchParams.get('view');
    if (tab === 'alumni') {
      setViewMode('alumni');
    } else if (tab === 'timeline') {
      setViewMode('timeline');
    }
    const season = searchParams.get('season');
    if (season) {
      setTargetAlumniSeasonId(season);
    }
  }, [searchParams]);

  const handleSwitchView = (mode: 'timeline' | 'alumni', seasonId?: string) => {
    setViewMode(mode);
    if (seasonId) {
      setTargetAlumniSeasonId(seasonId);
      setSearchParams({ view: mode, season: seasonId });
    } else {
      setSearchParams({ view: mode });
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-20 space-y-10 sm:space-y-14 w-full">
      
      {/* VIEW MODE 1: Racing Circuit Timeline & Trophies View */}
      {viewMode === 'timeline' && (
        <>
          {/* 🏎️ Section 1: Featured Interactive Racing Circuit Timeline (Full window width) */}
          <ScrollReveal direction="up" duration={650} className="w-full px-0">
            <InteractiveCircuitTimeline
              onNavigateToAlumni={(seasonId) => handleSwitchView('alumni', seasonId)}
            />
          </ScrollReveal>


          {/* Lower Sections (Constrained to max-w-7xl) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            {/* 🏁 Section 3: 2026 Season Tabs & Active Event View */}
            <ScrollReveal direction="up" delay={120} duration={650} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-brand-red font-mono text-xs uppercase tracking-widest font-bold mb-1">
                    <span>Competition Breakdown</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-warm-900 uppercase">
                    2026 Results
                  </h3>
                </div>
                <span className="text-xs font-mono text-warm-500 hidden sm:inline-block">
                  FS Balkans • FS Germany • FS Alpe Adria
                </span>
              </div>

              <CompetitionTabs
                events={competitionEvents}
                activeId={activeTabId}
                onSelect={setActiveTabId}
              />

              {activeEvent && (
                <CompetitionEventView event={activeEvent} />
              )}
            </ScrollReveal>

            {/* 📜 Section 4: Full Historical Milestones Archive (2019-2026) */}
            <div className="space-y-8 pt-10 border-t border-warm-250">
              <ScrollReveal direction="up" duration={600} className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="inline-flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-widest font-bold mb-1">
                    <span>Archive</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-warm-900 uppercase">
                    Historical Milestones
                  </h2>
                </div>
              </ScrollReveal>

              <HistoryMilestonesList milestones={historicalTimeline} />
            </div>
          </div>
        </>
      )}

      {/* VIEW MODE 2: Team Generations & Alumni Archive View */}
      {viewMode === 'alumni' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <TeamHistoryPage
            initialSeasonId={targetAlumniSeasonId}
            isEmbedded={true}
            onSwitchToTimeline={() => handleSwitchView('timeline')}
          />
        </div>
      )}

    </div>
  );

};

export default CompetitionsPage;
