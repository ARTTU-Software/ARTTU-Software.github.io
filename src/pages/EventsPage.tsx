import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { RolloutSpotlight } from '../components/events/RolloutSpotlight';
import { HorizontalEventsTimeline } from '../components/events/HorizontalEventsTimeline';
import { EventLightbox } from '../components/events/EventLightbox';
import { EVENTS_DATA, EventItem } from '../data/events';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (event: EventItem) => {
    setSelectedEvent(event);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleSelectEventInLightbox = (event: EventItem) => {
    setSelectedEvent(event);
  };

  const handleOpenPhotoDirect = (imageSrc: string, title: string) => {
    const dummyEvent: EventItem = {
      id: 'spotlight-photo',
      title: title,
      subtitle: 'Official Rollout Archive',
      date: 'Season 2025-2026',
      season: '2025-2026',
      location: 'Cluj-Napoca, Romania',
      image: imageSrc,
      description: 'High-resolution milestone photograph from the ART TU Formula Student archives.',
    };
    setSelectedEvent(dummyEvent);
    setIsLightboxOpen(true);
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 space-y-10 sm:space-y-14 w-full">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-warm-250 text-xs font-mono font-bold shadow-xs">
            <span className="flex items-center gap-1.5 text-brand-red">
              <Calendar className="w-3.5 h-3.5" />
              <span>{EVENTS_DATA.length} Season Events</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-300" />
            <span className="text-warm-600 uppercase tracking-wider text-[10px] sm:text-[11px]">Season 2025-2026 Timeline</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
            EVENTS & <span className="text-brand-red">OUTREACH</span>
          </h1>

          <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Beyond the racetrack, ART TU bridges motorsport engineering with the community. Explore our annual car rollouts, high school robotics mentorship, academic conferences, and public innovation expos.
          </p>
        </ScrollReveal>
      </div>

      {/* Flagship Rollout Spotlight */}
      <RolloutSpotlight onOpenPhoto={handleOpenPhotoDirect} />

      {/* Horizontal Chronological Events Timeline */}
      <HorizontalEventsTimeline
        events={EVENTS_DATA}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Collaboration Callout (Constrained in max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={650}>
          <div className="bg-white border border-warm-250 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-red uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Community & Industry Partnerships
              </span>
              
              <h3 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase tracking-tight">
                Want our racecar at your next event?
              </h3>
              
              <p className="text-warm-700 text-xs sm:text-sm leading-relaxed">
                We regularly participate in university conferences, STEM robotics workshops, tech expos, and corporate partner days across Romania and Europe.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" /> Request Event Collaboration
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-warm-150 hover:bg-warm-200 text-warm-900 border border-warm-250 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Become a Partner <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>


      {/* Fullscreen Interactive Lightbox */}
      <EventLightbox
        event={selectedEvent}
        allEvents={EVENTS_DATA}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onSelectEvent={handleSelectEventInLightbox}
      />
    </div>
  );
};
