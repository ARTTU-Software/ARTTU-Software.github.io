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
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-16">
      
      {/* Dynamic Aerodynamic Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Abstract Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1250px] opacity-[0.16] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/events_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, transparent 80%)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[10%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[45%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />
        <div className="absolute top-[75%] left-[8%] w-[500px] h-[500px] rounded-full bg-brand-red/[0.03] blur-[130px] animate-ambient-float-1" />

        {/* Wind Tunnel Speed Filaments */}
        <div className="absolute top-[15%] left-[6%] w-52 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent animate-wind-streak-1" />
        <div className="absolute top-[50%] right-[10%] w-64 h-px bg-gradient-to-r from-transparent via-brand-brightRed/16 to-transparent animate-wind-streak-2" />
        <div className="absolute top-[82%] left-[14%] w-48 h-px bg-gradient-to-r from-transparent via-brand-red/14 to-transparent animate-wind-streak-3" />

        {/* Margin Sector Ticks */}
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[20%] left-5 opacity-25" aria-hidden="true">
          <div className="w-3 h-px bg-warm-400" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-4 h-px bg-brand-red" />
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[60%] right-5 opacity-25" aria-hidden="true">
          <div className="w-4 h-px bg-brand-red" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-3 h-px bg-warm-400" />
        </div>

        {/* Continuous Animated SVG Streamlines (Crisp Dotted Lines) */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 2800"
          preserveAspectRatio="none"
        >
          <path
            d="M 140,0 C 700,320 1260,520 1120,900 C 960,1280 220,1460 380,1880 C 520,2220 1180,2420 1020,2800"
            stroke="#ef4444"
            strokeWidth="1.8"
            strokeOpacity="0.16"
            strokeDasharray="14 18"
            className="animate-flow-streamline"
          />
          <path
            d="M 170,0 C 730,320 1290,520 1150,900 C 990,1280 250,1460 410,1880 C 550,2220 1210,2420 1050,2800"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeOpacity="0.12"
            strokeDasharray="10 14"
            className="animate-flow-streamline-reverse"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase font-bold shadow-2xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>{EVENTS_DATA.length} Season Events • Timeline</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
            EVENTS & <span className="text-brand-red">OUTREACH</span>
          </h1>

          <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Beyond the racetrack, ART TU bridges motorsport engineering with the community. Explore our annual car rollouts, high school robotics mentorship, academic conferences, and public innovation expos.
          </p>
        </ScrollReveal>
      </div>

      {/* Flagship Rollout Spotlight (Edge-to-edge) */}
      <RolloutSpotlight onOpenPhoto={handleOpenPhotoDirect} />

      {/* Horizontal Chronological Events Timeline (Edge-to-edge) */}
      <HorizontalEventsTimeline
        events={EVENTS_DATA}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Collaboration Callout (Constrained in max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={650}>
          <div className="bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xs">
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
