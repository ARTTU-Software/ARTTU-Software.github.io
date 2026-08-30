import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { EventItem } from '../../data/events';

interface EventLightboxProps {
  event: EventItem | null;
  allEvents: EventItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: EventItem) => void;
}

export const EventLightbox: React.FC<EventLightboxProps> = ({
  event,
  allEvents,
  isOpen,
  onClose,
  onSelectEvent,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, event, allEvents]);

  if (!isOpen || !event) return null;

  const currentIndex = allEvents.findIndex((e) => e.id === event.id);
  const total = allEvents.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectEvent(allEvents[currentIndex - 1]);
    } else {
      onSelectEvent(allEvents[total - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      onSelectEvent(allEvents[currentIndex + 1]);
    } else {
      onSelectEvent(allEvents[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 hover:bg-brand-red text-white transition-colors border border-white/10"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main modal content container */}
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#121318] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: High-Res Photo */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh]"
          />
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-zinc-300 border border-white/10">
            {currentIndex >= 0 ? currentIndex + 1 : 1} / {total}
          </div>
        </div>

        {/* Right / Bottom: Event Details & Context */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#16171e] to-[#0f1015]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-brand-red font-bold uppercase tracking-wider">
                Season {event.season}
              </span>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                {event.title}
              </h3>
              <p className="text-brand-red font-mono text-xs mt-1 font-semibold">{event.subtitle}</p>
            </div>

            <div className="space-y-2 text-xs font-mono text-zinc-400 py-2 border-y border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-red shrink-0" />
                <span className="text-zinc-300">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span className="text-zinc-300">{event.location}</span>
              </div>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Navigation buttons for mobile */}
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/10 sm:hidden">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded bg-zinc-800 text-xs font-mono text-white flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <span className="text-xs font-mono text-zinc-400">
              {currentIndex >= 0 ? currentIndex + 1 : 1} of {total}
            </span>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded bg-zinc-800 text-xs font-mono text-white flex items-center gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
