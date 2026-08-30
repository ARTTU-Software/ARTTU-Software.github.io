import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  teamGenerations,
  TeamMember,
  TeamGeneration,
} from '../data/team';
import {
  Users,
  Trophy,
  Calendar,
  Layers,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Award,
  History,
  ShieldCheck,
  Search,
  Filter,
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

export interface TeamHistoryPageProps {
  initialSeasonId?: string;
  isEmbedded?: boolean;
  onSwitchToTimeline?: () => void;
}

export const TeamHistoryPage: React.FC<TeamHistoryPageProps> = ({
  initialSeasonId,
  isEmbedded = false,
  onSwitchToTimeline,
}) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState<string>(initialSeasonId || teamGenerations[0]?.id || '2025-2026');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialSeasonId) {
      setSelectedSeasonId(initialSeasonId);
    }
  }, [initialSeasonId]);

  const currentGeneration = useMemo(() => {
    return teamGenerations.find((gen) => gen.id === selectedSeasonId) || teamGenerations[0];
  }, [selectedSeasonId]);

  // Extract unique departments for the current generation
  const availableDepartments = useMemo(() => {
    const deps = new Set<string>();
    currentGeneration.members.forEach((m) => {
      if (m.department) deps.add(m.department);
    });
    return ['All', ...Array.from(deps)];
  }, [currentGeneration]);

  // Filter members by department and search query
  const filteredMembers = useMemo(() => {
    return currentGeneration.members.filter((member) => {
      const matchesDept =
        selectedDepartment === 'All' || member.department === selectedDepartment;
      const matchesSearch =
        searchQuery.trim() === '' ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [currentGeneration, selectedDepartment, searchQuery]);

  return (
    <div className="pt-20 sm:pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      
      {/* Hero Header */}
      <ScrollReveal direction="up" duration={600} className="text-center max-w-4xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold shadow-xs">
          <Users className="w-3.5 h-3.5" />
          <span>Team Generations & Alumni Archive</span>
        </div>
        
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
          THE ENGINEERS BEHIND THE RACECARS
        </h1>
        
        <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Over 7 seasons, more than 100 passionate engineering students and faculty mentors at Technical University of Cluj-Napoca (UTCN) have designed, built, and raced Romania&apos;s most decorated Formula Student electric vehicles.
        </p>

        {/* Quick Summary Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-warm-250 shadow-2xs font-mono text-xs text-warm-800 flex items-center gap-2">
            <span className="font-bold text-brand-red">
              <TelemetryTicker value={100} suffix="+" />
            </span>
            <span>Alumni & Members</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-warm-250 shadow-2xs font-mono text-xs text-warm-800 flex items-center gap-2">
            <span className="font-bold text-warm-900">
              <TelemetryTicker value={7} suffix=" Seasons" />
            </span>
            <span>2019 - 2026</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-warm-250 shadow-2xs font-mono text-xs text-warm-800 flex items-center gap-2">
            <span className="font-bold text-warm-900">
              <TelemetryTicker value={6} />
            </span>
            <span>Subsystem Divisions</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Season Selector Tabs */}
      <ScrollReveal direction="up" delay={60} duration={600} className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-warm-600">
            <Calendar className="w-4 h-4 text-brand-red" />
            <span>Select Season & Generation:</span>
          </div>
          {onSwitchToTimeline ? (
            <button
              onClick={onSwitchToTimeline}
              className="text-xs font-mono text-brand-red hover:text-brand-darkRed font-semibold flex items-center gap-1 transition cursor-pointer"
            >
              <span>View Racing Track Timeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              to="/history"
              className="text-xs font-mono text-brand-red hover:text-brand-darkRed font-semibold flex items-center gap-1 transition"
            >
              <span>View Racing Track Timeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 bg-white/80 p-2 sm:p-2.5 rounded-2xl border border-warm-250 shadow-sm backdrop-blur-sm">
          {teamGenerations.map((gen) => {
            const isSelected = gen.id === selectedSeasonId;
            return (
              <button
                key={gen.id}
                onClick={() => {
                  setSelectedSeasonId(gen.id);
                  setSelectedDepartment('All');
                  setSearchQuery('');
                }}
                style={{
                  backgroundColor: isSelected ? '#1c1917' : '#faf8f5',
                  borderColor: isSelected ? '#d32f2f' : '#e9e3d7',
                  color: isSelected ? '#ffffff' : '#1c1917',
                }}
                className={`flex-1 min-w-[150px] sm:min-w-[180px] px-4 py-3.5 rounded-xl font-display text-left border transition-all duration-150 ${
                  isSelected
                    ? 'shadow-lg shadow-black/25 ring-2 ring-brand-red scale-[1.01]'
                    : 'hover:bg-warm-100 hover:border-warm-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-brand-red text-white' : 'bg-warm-200 text-warm-700'
                  }`}>
                    {gen.badge}
                  </span>
                  <span className={`text-[11px] font-mono ${isSelected ? 'text-warm-300' : 'text-warm-500'}`}>
                    {gen.yearSpan}
                  </span>
                </div>
                <div className={`font-bold text-sm sm:text-base tracking-tight truncate ${
                  isSelected ? 'text-white' : 'text-warm-900'
                }`}>
                  {gen.season}
                </div>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* 🌟 Generation Showcase Banner & Team Photo */}
      <ScrollReveal direction="up" delay={80} duration={650}>
        <div className="bg-white rounded-3xl border border-warm-250 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 card-hover-glow">
          {/* Team Photo Container */}
          <div className="lg:col-span-7 relative bg-warm-900 min-h-[340px] sm:min-h-[440px] overflow-hidden group">
            <img
              src={currentGeneration.groupPhoto}
              alt={currentGeneration.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/2026_main_photo.webp';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20 font-mono text-xs uppercase font-bold tracking-wider">
                {currentGeneration.season} Official Photo
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-brightRed shrink-0 mt-0.5" />
              <p className="leading-snug text-warm-200">{currentGeneration.groupPhotoCaption}</p>
            </div>
          </div>

          {/* Generation Narrative & Highlights */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white to-warm-50">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-warm-100 text-warm-800 text-xs font-mono uppercase font-bold border border-warm-200">
                <Zap className="w-3.5 h-3.5 text-brand-red" />
                <span>{currentGeneration.carModel || 'Electric Single-Seater'}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-900 uppercase leading-tight">
                {currentGeneration.title}
              </h2>

              <p className="text-xs font-mono text-brand-red uppercase font-semibold">
                {currentGeneration.tagline}
              </p>

              <p className="text-warm-700 text-xs sm:text-sm leading-relaxed">
                {currentGeneration.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase font-bold text-warm-900 tracking-wider">
                  Key Generation Milestones:
                </div>
                <ul className="space-y-1.5">
                  {currentGeneration.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-warm-700 flex items-start gap-2">
                      <span className="text-brand-red font-bold font-mono">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-warm-200 flex items-center justify-between text-xs text-warm-500 font-mono">
              <span>{currentGeneration.members.length} Coordinators & Leads</span>
              <span className="text-brand-red font-semibold">UTCN Formula Student</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Team Members Section */}
      <div className="space-y-8">
        
        {/* Filters and Search Bar */}
        <ScrollReveal direction="up" duration={600} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-brand-red font-mono text-xs uppercase tracking-widest font-bold mb-1">
              <Users className="w-4 h-4" />
              <span>Roster</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-warm-900 uppercase">
              {currentGeneration.season} Leadership & Subsystem Engineers
            </h3>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search member or role..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-warm-250 rounded-xl focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red shadow-sm"
            />
          </div>
        </ScrollReveal>

        {/* Department Filter Pills */}
        <ScrollReveal direction="up" delay={60} duration={600} className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-warm-400 shrink-0 mr-1" />
          {availableDepartments.map((dept) => {
            const isDeptActive = selectedDepartment === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition duration-150 ${
                  isDeptActive
                    ? 'bg-brand-red text-white shadow-sm shadow-brand-red/30'
                    : 'bg-white hover:bg-warm-100 text-warm-700 border border-warm-250'
                }`}
              >
                {dept}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Member Cards Grid */}
        {filteredMembers.length === 0 ? (
          <div className="bg-white rounded-2xl border border-warm-250 p-12 text-center text-warm-500">
            <Users className="w-10 h-10 mx-auto text-warm-300 mb-3" />
            <p className="font-bold text-base">No team members match your filter.</p>
            <p className="text-xs mt-1">Try resetting the department filter or search query.</p>
            <button
              onClick={() => {
                setSelectedDepartment('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-800 font-mono text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMembers.map((member, idx) => (
              <ScrollReveal
                key={`${member.name}-${idx}`}
                direction="up"
                delay={(idx % 8) * 50}
                duration={500}
                className="h-full"
              >
                <div className="bg-white rounded-2xl border border-warm-250 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 h-full">
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] w-full bg-warm-100 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-avatar')) {
                          const div = document.createElement('div');
                          div.className = 'fallback-avatar w-full h-full flex flex-col items-center justify-center bg-warm-200 text-warm-600 font-display font-extrabold text-3xl';
                          div.innerText = member.name.split(' ').map(n => n[0]).join('');
                          parent.appendChild(div);
                        }
                      }}
                    />
                    
                    {/* Department Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase font-bold border border-white/10">
                        {member.department}
                      </span>
                    </div>

                    {/* Season Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-brand-red/90 text-white text-[10px] font-mono font-bold">
                        {member.season}
                      </span>
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="font-display font-extrabold text-base text-warm-900 tracking-tight group-hover:text-brand-red transition-colors">
                        {member.name}
                      </h4>
                      <div className="text-xs font-mono font-bold text-brand-red leading-snug">
                        {member.role}
                      </div>
                    </div>

                    {/* Social & Department Footer */}
                    <div className="pt-3 border-t border-warm-150 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-semibold text-warm-400">
                        ART TU Cluj
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {member.facebook && (
                          <a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-lg bg-warm-100 hover:bg-blue-600 hover:text-white text-warm-600 flex items-center justify-center transition shadow-sm"
                            aria-label={`${member.name} Facebook`}
                          >
                            <FacebookIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-lg bg-warm-100 hover:bg-blue-700 hover:text-white text-warm-600 flex items-center justify-center transition shadow-sm"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Historical Events & Team Moments (If available for generation) */}
      {currentGeneration.events && currentGeneration.events.length > 0 && (
        <div className="space-y-6 pt-10 border-t border-warm-250">
          <ScrollReveal direction="up" duration={600}>
            <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-brand-red">
              <History className="w-4 h-4" />
              <span>Season Memories & Milestones</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-warm-900 uppercase mt-1">
              {currentGeneration.season} Team Building & Workshops
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentGeneration.events.map((event, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 90} duration={650} className="h-full">
                <div className="bg-white rounded-2xl border border-warm-250 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition h-full">
                  {event.image && (
                    <div className="relative aspect-video w-full bg-warm-900 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px] font-bold">
                        {event.date}
                      </div>
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="font-display font-bold text-base text-warm-900 mb-1.5">
                        {event.title}
                      </h4>
                      <p className="text-xs text-warm-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    {event.sponsor && (
                      <div className="text-[10px] font-mono text-warm-500 pt-2 border-t border-warm-150">
                        <span className="font-semibold text-brand-red">Supported by:</span> {event.sponsor}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Next Generation CTA Banner */}
      <ScrollReveal direction="up" duration={650}>
        <div className="bg-white rounded-3xl border border-warm-250 p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto space-y-6 card-hover-glow">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Write the Next Chapter</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-black uppercase tracking-tight">
            BE PART OF OUR NEXT GENERATION
          </h3>
          <p className="text-black text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Whether you are a first-year student excited by automotive electronics or an experienced programmer ready to build custom telemetry, ART TU welcomes passionate UTCN engineers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/recruitment"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-display font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-red/30 transition flex items-center gap-2 group hover:scale-102"
            >
              <span>Explore Open Departments</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/partners"
              className="px-6 py-3 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-900 border border-warm-300 font-display font-bold text-xs uppercase tracking-wider transition hover:scale-102"
            >
              <span>Partner With Our Team</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};

export default TeamHistoryPage;
