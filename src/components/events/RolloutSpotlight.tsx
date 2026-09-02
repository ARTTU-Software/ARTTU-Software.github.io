import React, { useState } from 'react';
import { Calendar, MapPin, Flame, Radio } from 'lucide-react';
import { ROLLOUT_DATA } from '../../data/events';
import { ScrollReveal } from '../motion/ScrollReveal';

export const RolloutSpotlight: React.FC<{ onOpenPhoto?: (src: string, title: string) => void }> = ({ onOpenPhoto }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'journey'>('overview');

  return (
    <ScrollReveal direction="up" duration={600} className="w-full">
      <section className="relative overflow-hidden rounded-none w-full bg-white border-y border-x-0 border-warm-250 shadow-sm p-5 sm:p-7 lg:p-9">
        <div className="max-w-7xl mx-auto">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warm-200 pb-3.5 mb-4 relative z-10">

          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red text-white shadow-xs">
              Flagship Event
            </span>
            <span className="text-xs font-mono text-warm-500 uppercase tracking-widest font-semibold">
              Season 2027 Unveiling
            </span>
          </div>

          {/* View Switcher: Overview vs Past Evolution */}
          <div className="flex items-center bg-warm-150 p-1 rounded-lg border border-warm-200 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1 rounded-md transition-all font-mono font-bold ${
                activeTab === 'overview'
                  ? 'bg-white text-warm-900 shadow-xs border border-warm-200'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              Rollout 2027
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-3 py-1 rounded-md transition-all font-mono font-bold ${
                activeTab === 'journey'
                  ? 'bg-white text-warm-900 shadow-xs border border-warm-200'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              Previous Rollouts
            </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            {/* Left Column: Event Context & TBA Announcement */}
            <div className="lg:col-span-7 space-y-3.5">
              <div>
                <p className="text-brand-red font-mono text-[11px] uppercase tracking-widest font-bold mb-0.5">
                  Technical University of Cluj-Napoca
                </p>
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-warm-900 uppercase tracking-tight">
                  {ROLLOUT_DATA.title}
                </h2>
                <p className="text-warm-700 text-xs sm:text-sm leading-relaxed mt-2">
                  {ROLLOUT_DATA.description}
                </p>
              </div>

              {/* TBA Announcement Box */}
              <div className="bg-warm-150 border border-warm-250 rounded-xl p-3.5 sm:p-4 text-warm-900 shadow-xs">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-brand-red uppercase tracking-wider mb-1.5">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  Official Unveiling Schedule
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <h4 className="font-display font-black text-xl text-warm-900 uppercase">
                      Date: To Be Announced (TBA)
                    </h4>
                    <p className="text-[11px] text-warm-600 font-mono mt-0.5">
                      Schedule details will be announced ahead of the event. Follow our official channels for updates and notifications.
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-lg bg-brand-red text-white font-mono text-xs font-bold uppercase shadow-xs">
                    Summer 2027
                  </span>
                </div>
              </div>

              {/* Quick Venue & Date Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 bg-warm-150 rounded-xl p-3 border border-warm-200">
                  <Calendar className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-mono text-warm-500 uppercase font-semibold">Timeline</span>
                    <span className="text-xs sm:text-sm font-bold text-warm-900">{ROLLOUT_DATA.dateDisplay}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-warm-150 rounded-xl p-3 border border-warm-200">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-mono text-warm-500 uppercase font-semibold">Venue</span>
                    <span className="text-xs sm:text-sm font-bold text-warm-900">{ROLLOUT_DATA.venue}</span>
                    <span className="block text-[11px] text-warm-600 font-sans mt-0.5">{ROLLOUT_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Tradition Statement */}
              <div className="border-l-2 border-brand-red bg-warm-150/60 p-3 rounded-r-xl">
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest font-bold block mb-0.5">
                  OUR TRADITION
                </span>
                <p className="text-xs text-warm-700 italic">
                  "{ROLLOUT_DATA.traditionQuote}"
                </p>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div
                onClick={() => onOpenPhoto && onOpenPhoto(ROLLOUT_DATA.heroImage, ROLLOUT_DATA.title)}
                className="group relative rounded-2xl overflow-hidden border border-warm-250 bg-warm-900 aspect-4/3 shadow-md cursor-pointer"
              >
                <img
                  src={ROLLOUT_DATA.heroImage}
                  alt={ROLLOUT_DATA.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-mono bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 text-[10px]">
                    Click to inspect photo
                  </span>
                  <span className="bg-brand-red px-2 py-0.5 rounded font-bold font-mono text-xs">
                    ART-27
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Previous Rollouts */
          <div className="space-y-4 relative z-10">
            <div className="max-w-2xl">
              <h3 className="font-display font-black text-xl text-warm-900 uppercase tracking-tight">
                Previous Rollouts
              </h3>
              <p className="text-warm-700 text-xs mt-0.5">
                Explore the official car unveiling ceremonies from previous seasons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
              {ROLLOUT_DATA.pastRollouts.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-warm-150 rounded-xl border border-warm-250 overflow-hidden hover:border-brand-red/40 transition-all duration-300 shadow-xs"
                >
                  <div
                    onClick={() => onOpenPhoto && onOpenPhoto(item.image, `${item.carName} Rollout`)}
                    className="relative aspect-video overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.carName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-brand-red text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                      Season {item.year}
                    </div>
                  </div>
                  <div className="p-3.5 space-y-1 bg-white">
                    <h4 className="text-sm font-bold text-warm-900 font-mono">{item.carName}</h4>
                    <p className="text-xs text-warm-600 leading-relaxed">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </section>
    </ScrollReveal>
  );
};

