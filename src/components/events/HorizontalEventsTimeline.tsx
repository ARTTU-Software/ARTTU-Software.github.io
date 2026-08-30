import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { EventItem } from '../../data/events';
import { ScrollReveal } from '../motion/ScrollReveal';

interface HorizontalEventsTimelineProps {
  events: EventItem[];
  onOpenLightbox: (event: EventItem) => void;
}

export const HorizontalEventsTimeline: React.FC<HorizontalEventsTimelineProps> = ({
  events,
  onOpenLightbox,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeEvent = events[activeIndex] || events[0];

  // Center a specific card programmatically
  const scrollToCard = useCallback((index: number, smooth = true) => {
    const card = cardRefs.current[index];
    const container = scrollContainerRef.current;
    if (card && container) {
      isManualScrolling.current = true;
      const scrollOffset =
        card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;

      container.scrollTo({
        left: scrollOffset,
        behavior: smooth ? 'smooth' : 'auto',
      });

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 350);
    }
  }, []);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    scrollToCard(index, true);
  };

  const handlePrev = () => {
    const newIdx = activeIndex > 0 ? activeIndex - 1 : events.length - 1;
    handleSelect(newIdx);
  };

  const handleNext = () => {
    const newIdx = activeIndex < events.length - 1 ? activeIndex + 1 : 0;
    handleSelect(newIdx);
  };

  // Automatically select the card closest to the horizontal center during user scroll
  const handleScroll = () => {
    if (isManualScrolling.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = activeIndex;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex && closestIndex >= 0 && closestIndex < events.length) {
      setActiveIndex(closestIndex);
    }
  };

  // Keyboard navigation when timeline is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, events.length]);

  return (
    <ScrollReveal direction="up" duration={600} className="w-full space-y-6">
      {/* Full-width Carousel Track Ribbon */}

      <div className="w-full rounded-none border-y border-x-0 border-warm-250 bg-white py-5 sm:py-7 shadow-sm">
        {/* Top Header & Navigation Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-warm-200 pb-2.5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase tracking-wider mb-0.5">
                <Calendar className="w-3.5 h-3.5" />
                Season Timeline
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-warm-900 uppercase tracking-tight">
                Chronological Events Track
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <span className="text-xs font-mono font-bold text-warm-600">
                <strong className="text-warm-900 font-mono text-sm">
                  {String(activeIndex + 1).padStart(2, '0')}
                </strong>{' '}
                / {String(events.length).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-warm-100 hover:bg-brand-red hover:text-white text-warm-800 border border-warm-250 transition-colors shadow-xs cursor-pointer"
                  aria-label="Previous Event"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-warm-100 hover:bg-brand-red hover:text-white text-warm-800 border border-warm-250 transition-colors shadow-xs cursor-pointer"
                  aria-label="Next Event"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track with Square Cards */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex items-center gap-3 sm:gap-5 overflow-x-auto py-3 px-4 sm:px-10 scrollbar-none snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {events.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={event.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => {
                    if (isActive) {
                      onOpenLightbox(event);
                    } else {
                      handleSelect(index);
                    }
                  }}
                  className={`snap-center shrink-0 w-[210px] sm:w-[250px] md:w-[280px] aspect-square transition-all duration-300 transform-gpu cursor-pointer rounded-2xl overflow-hidden ${
                    isActive
                      ? 'scale-105 sm:scale-108 shadow-lg border-2 border-brand-red ring-4 ring-brand-red/10 z-20 opacity-100'
                      : 'scale-95 shadow-xs border border-warm-250 opacity-60 hover:opacity-90 z-10'
                  }`}
                >
                  {/* Event Single Square Photo */}
                  <div className="relative w-full h-full bg-warm-900 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Top Date Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white font-mono text-[10px] px-2 py-0.5 rounded border border-white/10 font-bold">
                      {event.date}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-brand-red text-white text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded shadow">
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse" /> Selected
                      </div>
                    )}

                    {/* Bottom title in card */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white space-y-0.5">
                      <h4 className="font-display font-black text-xs sm:text-sm leading-tight uppercase line-clamp-1">
                        {event.title}
                      </h4>
                      <p className="text-[10px] font-mono text-warm-300 line-clamp-1">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dedicated Description Panel for the Selected Center Event (Constrained in max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-warm-250 p-5 sm:p-6 lg:p-7 shadow-sm relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2.5">
            {/* Header metadata */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-warm-600">
              <span className="inline-flex items-center gap-1 bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold px-2.5 py-0.5 rounded-md text-[11px]">
                <Calendar className="w-3 h-3" /> {activeEvent.date}
              </span>
              <span className="inline-flex items-center gap-1 bg-warm-150 border border-warm-200 text-warm-700 px-2.5 py-0.5 rounded-md text-[11px]">
                <MapPin className="w-3 h-3 text-brand-red" /> {activeEvent.location}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-warm-900 uppercase tracking-tight">
                {activeEvent.title}
              </h3>
              <p className="text-brand-red font-mono text-xs font-bold mt-0.5">
                {activeEvent.subtitle}
              </p>
            </div>

            {/* Description Narrative */}
            <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-4xl pt-1">
              {activeEvent.description}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

