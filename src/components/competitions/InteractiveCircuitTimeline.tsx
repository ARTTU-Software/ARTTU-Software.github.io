import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  timelineSeasons,
  TimelineSeason,
  TimelineAward,
} from '../../data/timelineEvolution';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Award,
  Zap,
  Gauge,
  Activity,
  MapPin,
  Sparkles,
  Users,
  Plus,
  ArrowRight,
} from 'lucide-react';
import { AfiaEmojiCar } from '../common/AfiaEmojiCar';

interface InteractiveCircuitTimelineProps {
  onNavigateToAlumni?: (seasonId: string) => void;
  className?: string;
}

export const InteractiveCircuitTimeline: React.FC<InteractiveCircuitTimelineProps> = ({
  onNavigateToAlumni,
  className = '',
}) => {
  // Chronological order from 2019 to 2026
  const chronologicalSeasons = useMemo(() => {
    return [...timelineSeasons].reverse();
  }, []);

  const numSeasons = chronologicalSeasons.length; // 5
  const CHECKPOINT_SPACING = 270; // px between checkpoints
  const Y_CENTER = 66; // vertical center of 130px viewport

  // Multi-frequency harmonic wave function for rich, varied organic racetrack curvature
  const getY = useCallback((x: number) => {
    const w1 = 13 * Math.sin((2 * Math.PI * x) / 500);
    const w2 = 7.5 * Math.cos((2 * Math.PI * x) / 300 + 0.4);
    const w3 = 4.5 * Math.sin((2 * Math.PI * x) / 170 + 1.1);
    const w4 = 2.5 * Math.cos((2 * Math.PI * x) / 95 + 0.2);
    return Y_CENTER + w1 + w2 + w3 + w4;
  }, [Y_CENTER]);

  const getSlopeAngle = useCallback((x: number) => {
    const dw1 = 13 * ((2 * Math.PI) / 500) * Math.cos((2 * Math.PI * x) / 500);
    const dw2 = -7.5 * ((2 * Math.PI) / 300) * Math.sin((2 * Math.PI * x) / 300 + 0.4);
    const dw3 = 4.5 * ((2 * Math.PI) / 170) * Math.cos((2 * Math.PI * x) / 170 + 1.1);
    const dw4 = -2.5 * ((2 * Math.PI) / 95) * Math.sin((2 * Math.PI * x) / 95 + 0.2);
    const slope = dw1 + dw2 + dw3 + dw4;
    return Math.atan(slope) * (180 / Math.PI);
  }, []);



  // Virtual index for infinite conveyor progression
  const [virtualIndex, setVirtualIndex] = useState<number>(numSeasons - 1); // Start at latest (2025-2026)
  const [trackOffset, setTrackOffset] = useState<number>(-(numSeasons - 1) * CHECKPOINT_SPACING);
  const [swipeDirection, setSwipeDirection] = useState<'right' | 'left'>('right');
  const prevVirtualIndexRef = useRef<number>(numSeasons - 1);

  // Auto-scroll enabled by default
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hoveredSeasonIndex, setHoveredSeasonIndex] = useState<number | null>(null);

  const currentOffsetRef = useRef<number>(trackOffset);
  const transitionAnimationRef = useRef<number | null>(null);

  // Track swipe direction whenever virtualIndex advances or retreats
  useEffect(() => {
    if (virtualIndex > prevVirtualIndexRef.current) {
      setSwipeDirection('right');
    } else if (virtualIndex < prevVirtualIndexRef.current) {
      setSwipeDirection('left');
    }
    prevVirtualIndexRef.current = virtualIndex;
  }, [virtualIndex]);

  // Compute active season from virtualIndex (normalized via modulo)
  // View ONLY switches on explicit click / virtualIndex glide, NOT on hover.
  const activeNormalizedIndex = useMemo(() => {
    return ((virtualIndex % numSeasons) + numSeasons) % numSeasons;
  }, [virtualIndex, numSeasons]);

  const activeSeason = chronologicalSeasons[activeNormalizedIndex];


  // Smooth glide to a target virtual index (infinite scroll)
  const glideToVirtualIndex = useCallback(
    (targetVirtualIndex: number) => {
      if (transitionAnimationRef.current) {
        cancelAnimationFrame(transitionAnimationRef.current);
      }

      setVirtualIndex(targetVirtualIndex);
      const targetOffset = -targetVirtualIndex * CHECKPOINT_SPACING;
      const startOffset = currentOffsetRef.current;
      const delta = targetOffset - startOffset;

      if (Math.abs(delta) < 0.5) {
        currentOffsetRef.current = targetOffset;
        setTrackOffset(targetOffset);
        return;
      }

      // Slower, smooth cinematic glide across track wiggles (no teleporting)
      const distanceCheckpoints = Math.max(1, Math.abs(delta) / CHECKPOINT_SPACING);
      const duration = Math.min(2200, Math.max(900, 750 + distanceCheckpoints * 350));
      const startTime = performance.now();

      const runGlide = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Smooth ease-in-out curve for natural vehicle acceleration and deceleration
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentStep = startOffset + delta * ease;
        currentOffsetRef.current = currentStep;
        setTrackOffset(currentStep);

        if (progress < 1) {
          transitionAnimationRef.current = requestAnimationFrame(runGlide);
        } else {
          transitionAnimationRef.current = null;
        }
      };

      transitionAnimationRef.current = requestAnimationFrame(runGlide);
    },
    [CHECKPOINT_SPACING]
  );


  const handlePrevSeason = () => {
    setIsPlaying(false);
    glideToVirtualIndex(virtualIndex - 1);
  };

  const handleNextSeason = () => {
    setIsPlaying(false);
    glideToVirtualIndex(virtualIndex + 1);
  };

  const handleSelectCheckpoint = (clickedVirtualIndex: number) => {
    setIsPlaying(false);
    glideToVirtualIndex(clickedVirtualIndex);
  };

  // Continuous Dynamic Auto-Scroll Animation Loop
  useEffect(() => {
    if (!isPlaying) return;

    let animationFrameId: number;
    const speed = 1.15; // Smooth dynamic auto-scroll pace

    const animate = () => {
      const nextOffset = currentOffsetRef.current - speed;
      currentOffsetRef.current = nextOffset;
      setTrackOffset(nextOffset);


      // Track active virtual index as conveyor glides past center (50%)
      const currentVirtual = Math.round(-nextOffset / CHECKPOINT_SPACING);
      if (currentVirtual !== virtualIndex) {
        setVirtualIndex(currentVirtual);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, virtualIndex, CHECKPOINT_SPACING]);


  // Generate dynamic checkpoints around current virtual index for infinite looping
  const visibleCheckpoints = useMemo(() => {
    const items = [];
    const centerCycle = Math.floor(virtualIndex / numSeasons);
    for (let cycle = centerCycle - 3; cycle <= centerCycle + 3; cycle++) {
      for (let i = 0; i < numSeasons; i++) {
        const vIdx = cycle * numSeasons + i;
        const xPos = vIdx * CHECKPOINT_SPACING;
        items.push({
          virtualIndex: vIdx,
          seasonIndex: i,
          season: chronologicalSeasons[i],
          xPos,
          yPos: getY(xPos),
        });
      }
    }
    return items;
  }, [virtualIndex, numSeasons, chronologicalSeasons, CHECKPOINT_SPACING, getY]);

  // Generate organic wavy path with fine sampling for high visual smoothness
  const wavyPathD = useMemo(() => {
    const minX = (Math.floor(virtualIndex / numSeasons) - 4) * numSeasons * CHECKPOINT_SPACING;
    const maxX = (Math.floor(virtualIndex / numSeasons) + 4) * numSeasons * CHECKPOINT_SPACING;
    const step = 15;
    let d = `M ${minX} ${getY(minX)}`;
    for (let x = minX + step; x <= maxX; x += step) {
      d += ` L ${x} ${getY(x)}`;
    }
    return d;
  }, [virtualIndex, numSeasons, CHECKPOINT_SPACING, getY]);

  // Dynamic car physics at center (world x = -trackOffset)
  const carWorldX = -trackOffset;
  const carY = getY(carWorldX);
  const carAngle = getSlopeAngle(carWorldX);

  return (
    <div className={`w-full rounded-none border-y border-x-0 border-warm-250 bg-white p-4 sm:p-7 lg:p-9 shadow-sm transition-all duration-300 select-none ${className}`}>
      
      {/* ========================================================================= */}
      {/* 🏁 1. INFINITE ORGANIC WAVY TRACK (Smooth varied race curves)              */}
      {/* ========================================================================= */}

      <div className="relative w-full">
        
        {/* Minimal Controls Float (Top Right) */}
        <div className="absolute -top-1 sm:top-0 right-0 z-30 flex items-center gap-1.5 bg-warm-100/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-warm-300 shadow-2xs">
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 text-black hover:bg-amber-400'
                : 'bg-brand-red text-white hover:bg-brand-darkRed shadow-xs'
            }`}
            title={isPlaying ? "Pause Auto-Scroll" : "Start Auto-Scroll"}
          >
            {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
            <span>{isPlaying ? 'Pause' : 'Drive'}</span>
          </button>

          <div className="h-3 w-px bg-warm-300 mx-0.5" />

          <button
            onClick={handlePrevSeason}
            className="p-1 rounded-full hover:bg-warm-200 text-warm-700 hover:text-warm-900 transition cursor-pointer"
            title="Previous Season"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNextSeason}
            className="p-1 rounded-full hover:bg-warm-200 text-warm-700 hover:text-warm-900 transition cursor-pointer"
            title="Next Season"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 🏎️ Conveyor Viewport with Left/Right Soft Edge Fade Masks */}
        <div className="relative w-full h-[126px] sm:h-[132px] overflow-hidden flex items-center justify-center">
          
          {/* Left & Right Soft Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* ================================================================= */}
          {/* 🛣️ MOVING WAVY LINE TRACK (Translates horizontally with offset)    */}
          {/* ================================================================= */}
          <div
            className="absolute left-1/2 top-0 bottom-0 flex items-center transition-transform duration-75 ease-out pointer-events-none"
            style={{
              transform: `translateX(${trackOffset}px)`,
            }}
          >
            {/* SVG Track Line (Simple, clean, narrow line) */}
            <svg
              className="overflow-visible absolute top-0 left-0"
              style={{ width: '1px', height: '132px' }}
            >
              <path
                d={wavyPathD}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>


            {/* 📍 Checkpoint Nodes & Year Badges along Wavy Line */}
            <div className="absolute inset-0 pointer-events-auto">
              {visibleCheckpoints.map((item) => {
                const isSelected = item.virtualIndex === virtualIndex;
                const isHovered = item.seasonIndex === hoveredSeasonIndex && !isSelected;
                const season = item.season;

                return (
                  <div
                    key={item.virtualIndex}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                    style={{
                      left: `${item.xPos}px`,
                      top: `${item.yPos}px`,
                    }}
                    onMouseEnter={() => setHoveredSeasonIndex(item.seasonIndex)}
                    onMouseLeave={() => setHoveredSeasonIndex(null)}
                    onClick={() => handleSelectCheckpoint(item.virtualIndex)}
                  >
                    {/* 🏷️ YEAR BADGE (ABOVE THE TRACK & CAR) */}
                    <div className={`absolute -top-9 sm:-top-10 transition-all duration-200 flex flex-col items-center ${
                      isSelected
                        ? 'scale-110 -translate-y-0.5 z-20'
                        : isHovered
                          ? 'scale-105 -translate-y-0.5 z-15 opacity-100'
                          : 'opacity-80 group-hover:opacity-100 group-hover:-translate-y-0.5 z-10'
                    }`}>
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10.5px] sm:text-xs font-mono font-bold tracking-tight shadow-sm border whitespace-nowrap transition-colors ${
                        isSelected
                          ? season.badgeType === 'gold'
                            ? 'bg-amber-500 text-black border-amber-600 ring-2 ring-amber-400/40'
                            : 'bg-brand-red text-white border-brand-darkRed ring-2 ring-brand-red/40'
                          : isHovered
                            ? 'bg-white text-warm-900 border-brand-red shadow-md'
                            : 'bg-[#fef5e6] text-warm-900 border-warm-300'
                      }`}>
                        {season.yearSpan}
                      </span>
                      {/* Down Arrow */}
                      <div className={`w-1.5 h-1.5 rotate-45 -mt-0.5 border-r border-b transition-colors ${
                        isSelected
                          ? season.badgeType === 'gold'
                            ? 'bg-amber-500 border-amber-600'
                            : 'bg-brand-red border-brand-darkRed'
                          : isHovered
                            ? 'bg-white border-brand-red'
                            : 'bg-[#fef5e6] border-warm-300'
                      }`} />
                    </div>

                    {/* 🔘 Checkpoint Node Disc on Wavy Track */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border-2 transition-all duration-200 flex items-center justify-center shadow-md ${
                        isSelected
                          ? season.badgeType === 'gold'
                            ? 'bg-amber-500 border-white text-black scale-110 ring-2 ring-amber-400/30'
                            : 'bg-brand-red border-white text-white scale-110 ring-2 ring-brand-red/30'
                          : isHovered
                            ? 'bg-white border-brand-red text-brand-red scale-105 shadow-md'
                            : 'bg-white border-warm-400 text-warm-800 group-hover:border-brand-red group-hover:scale-105'
                      }`}>
                        <span className="font-mono text-[8.5px] sm:text-[9.5px] font-black">
                          {season.shortYear}
                        </span>
                      </div>
                    </div>

                    {/* Car Model Sub-Label (Below Wavy Track) */}
                    <div className="absolute -bottom-5 sm:-bottom-5.5 whitespace-nowrap text-center">
                      <span className={`text-[9.5px] sm:text-[10.5px] font-mono font-bold tracking-tight transition ${
                        isSelected
                          ? 'text-brand-red font-black'
                          : isHovered
                            ? 'text-brand-red'
                            : 'text-warm-600 group-hover:text-warm-900'
                      }`}>
                        {season.carModel.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================= */}
          {/* 🏎️ AFIA (ART-26 EV) EMOJI RACECAR (Facing right, rides wavy track) */}
          {/* ================================================================= */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20 transition-transform duration-75"
            style={{
              top: `${carY}px`,
              transform: `translate(-50%, -50%) rotate(${carAngle}deg)`,
            }}
          >
            <div className="relative flex items-center justify-center -translate-y-[15px]">
              <AfiaEmojiCar width={72} height={42} />
            </div>
          </div>
        </div>


      </div>

      {/* ========================================================================= */}
      {/* 🏎️ 2. ACTIVE SEASON DETAILS (Seamlessly attached without bounding box)    */}
      {/* ========================================================================= */}
      <div className="pt-2 sm:pt-3 border-t border-warm-200/60 overflow-hidden">
        <div
          key={activeSeason.id}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start ${
            swipeDirection === 'right' ? 'animate-swipe-right' : 'animate-swipe-left'
          }`}
        >


          
          {/* LEFT SUB-COLUMN (5 cols): High-Resolution Car Image & Fast Telemetry Matrix */}
          <div className="lg:col-span-5 space-y-3.5">

            
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-[16/9.5] w-full rounded-2xl overflow-hidden bg-warm-900 group shadow-sm border border-warm-250">
              <img
                src={activeSeason.image}
                alt={`${activeSeason.seasonName} - ${activeSeason.carModel}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== activeSeason.fallbackImage) {
                    target.src = activeSeason.fallbackImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3.5 right-3.5 text-white text-xs flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight">
                    {activeSeason.carModel}
                  </div>
                  <div className="text-[11px] text-warm-300 font-mono truncate max-w-[240px]">
                    {activeSeason.circuitLocation}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-brand-red text-white text-xs font-mono font-bold shadow-xs">
                  {activeSeason.shortYear}
                </span>
              </div>
            </div>

            {/* Fast Telemetry Specs Matrix */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {activeSeason.keySpecsSummary.map((spec, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl border text-center transition ${
                    spec.highlight
                      ? 'bg-red-50/90 border-brand-red/30'
                      : 'bg-warm-100/70 border-warm-200'
                  }`}
                >
                  <div className="text-[9.5px] font-mono uppercase text-warm-500 font-semibold truncate">
                    {spec.label}
                  </div>
                  <div className={`font-mono font-bold text-sm sm:text-base ${
                    spec.highlight ? 'text-brand-red' : 'text-warm-900'
                  }`}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SUB-COLUMN (7 cols): Season Glory, Innovations & Podiums */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Badges & Season Tag */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border shadow-2xs ${
                  activeSeason.badgeType === 'gold'
                    ? 'bg-amber-500/15 text-amber-900 border-amber-500/30'
                    : activeSeason.badgeType === 'silver'
                    ? 'bg-slate-200 text-slate-900 border-slate-300'
                    : 'bg-brand-red/10 text-brand-red border-brand-red/20'
                }`}>
                  {activeSeason.badge}
                </span>

                <span className="text-xs font-mono font-bold text-brand-red uppercase">
                  {activeSeason.seasonName}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-warm-600 font-semibold bg-warm-100 px-3 py-1 rounded-lg border border-warm-200">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                <span className="truncate max-w-[220px]">{activeSeason.circuitLocation}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-warm-900 uppercase leading-tight tracking-tight">
                {activeSeason.title}
              </h3>
              <p className="text-xs sm:text-sm text-warm-600 font-mono italic mt-1 leading-relaxed">
                "{activeSeason.tagline}"
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-warm-700 leading-relaxed">
              {activeSeason.description}
            </p>

            {/* Key Technical Innovations & Upgrades */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-warm-50 border border-warm-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-warm-900">
                <span>Season Engineering Upgrades & Innovations:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeSeason.innovations.map((item, idx) => (
                  <li key={idx} className="text-xs text-warm-700 flex items-start gap-1.5 leading-snug">
                    <Plus className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Season Milestones */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-warm-900 tracking-wider flex items-center gap-1.5">
                <span>Season Milestones:</span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activeSeason.awards.map((award, i) => {
                  const isGold = award.category === 'gold';
                  const isBronze = award.category === 'bronze';
                  const isSilver = award.category === 'silver';

                  return (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 border shadow-2xs ${
                        isGold
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 font-bold'
                          : isBronze
                          ? 'bg-amber-700/10 border-amber-700/30 text-amber-950 font-bold'
                          : isSilver
                          ? 'bg-slate-200/80 border-slate-300 text-slate-900 font-bold'
                          : 'bg-warm-100 border-warm-250 text-warm-800'
                      }`}
                    >
                      <span>
                        {award.title} • {award.position}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>


            {/* Quick Action Buttons */}
            <div className="pt-3 border-t border-warm-200 flex items-center justify-between gap-3">
              <Link
                to="/car"
                className="px-4 py-2 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-900 border border-warm-300 text-xs font-display font-bold uppercase tracking-wider transition flex items-center gap-1.5"
              >
                <span>Full Car CAD Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {onNavigateToAlumni ? (
                <button
                  onClick={() => onNavigateToAlumni(activeSeason.id)}
                  className="px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-display font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-sm shadow-brand-red/30 cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Meet {activeSeason.yearSpan} Team</span>
                </button>
              ) : (
                <Link
                  to="/history/team"
                  className="px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-display font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-sm shadow-brand-red/30"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Alumni Roster</span>
                </Link>
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default InteractiveCircuitTimeline;
