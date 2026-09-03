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
        <div className="relative w-full overflow-hidden">
          {/* Dynamic Circuit Background Layer (Wraps entire page from top to bottom) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {/* Faint Racetrack Apex Backdrop starting right at the top under navbar */}
            <div
              className="absolute top-0 inset-x-0 h-[1600px] opacity-[0.22] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: `url('/assets/history_flow_bg.jpg')`,
                maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
              }}
            />

            {/* Ambient Floating Light Orbs */}
            <div className="absolute top-[8%] -left-24 w-[480px] h-[480px] rounded-full bg-brand-red/[0.06] blur-[130px] animate-ambient-float-1" />
            <div className="absolute top-[50%] right-[-10%] w-[520px] h-[520px] rounded-full bg-amber-500/[0.05] blur-[140px] animate-ambient-float-2" />

            {/* High-Speed Track Velocity Filaments */}
            <div className="absolute top-[12%] left-[10%] w-56 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent animate-wind-streak-1" />
            <div className="absolute top-[60%] right-[14%] w-60 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent animate-wind-streak-2" />

            {/* Sector Track Ticks */}
            <div className="hidden lg:flex flex-col gap-1.5 absolute top-[20%] left-5 opacity-30" aria-hidden="true">
              <div className="w-3 h-px bg-warm-400" />
              <div className="w-1.5 h-px bg-warm-400" />
              <div className="w-4 h-px bg-brand-red" />
            </div>
            <div className="hidden lg:flex flex-col gap-1.5 absolute top-[70%] right-5 opacity-30" aria-hidden="true">
              <div className="w-4 h-px bg-brand-red" />
              <div className="w-1.5 h-px bg-warm-400" />
              <div className="w-3 h-px bg-warm-400" />
            </div>

            {/* Continuous Animated SVG Racing Lines flowing across the entire page */}
            <svg
              className="absolute inset-0 w-full h-full"
              fill="none"
              viewBox="0 0 1440 2400"
              preserveAspectRatio="none"
            >
              <path
                d="M 120,0 C 680,300 1250,480 1100,820 C 950,1160 200,1320 360,1680 C 500,1980 1150,2080 980,2400"
                stroke="#ef4444"
                strokeWidth="2"
                strokeOpacity="0.20"
                strokeDasharray="14 18"
                className="animate-flow-streamline"
              />
              <path
                d="M 150,0 C 710,300 1280,480 1130,820 C 980,1160 230,1320 390,1680 C 530,1980 1180,2080 1010,2400"
                stroke="#dc2626"
                strokeWidth="1.2"
                strokeOpacity="0.14"
                strokeDasharray="10 14"
                className="animate-flow-streamline-reverse"
              />
            </svg>
          </div>

          {/* 🏎️ Section 1: Featured Interactive Racing Circuit Timeline (Transparent over racetrack canvas) */}
          <ScrollReveal direction="up" duration={650} className="relative z-10 w-full px-0">
            <InteractiveCircuitTimeline
              onNavigateToAlumni={(seasonId) => handleSwitchView('alumni', seasonId)}
            />
          </ScrollReveal>

          {/* Lower Content Sections */}
          <div className="relative z-10 w-full pt-12 pb-16">
            {/* Content Container (No boxes, pure dynamic flow, tight vertical rhythm) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
              
              {/* Section 3: 2026 Season Tabs & Active Event View */}
              <div className="space-y-8">
                <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false} className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-brand-red font-mono text-xs uppercase tracking-widest font-bold">
                    <span>Competition Breakdown</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-warm-900 uppercase tracking-tight">
                      2026 Results
                    </h3>
                    <span className="text-xs font-mono text-warm-500">
                      FS Balkans • FS Germany • FS Alpe Adria
                    </span>
                  </div>
                </ScrollReveal>

                <CompetitionTabs
                  events={competitionEvents}
                  activeId={activeTabId}
                  onSelect={setActiveTabId}
                />

                {activeEvent && (
                  <CompetitionEventView event={activeEvent} />
                )}
              </div>

              {/* Section 4: Full Historical Milestones Archive (2019-2026) */}
              <div className="space-y-8 pt-8 border-t border-warm-200">
                <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false} className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-widest font-bold mb-1">
                      <span>Archive</span>
                    </div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-warm-900 uppercase tracking-tight">
                      Historical Milestones
                    </h2>
                  </div>
                </ScrollReveal>

                <HistoryMilestonesList milestones={historicalTimeline} />
              </div>

            </div>
          </div>
        </div>
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
