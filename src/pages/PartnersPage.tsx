import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { sponsorTiers, historicalSeasons, Sponsor } from '../data/sponsors';
import { 
  Handshake, 
  Download, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Percent, 
  Trophy, 
  Users, 
  ArrowRight,
  ArrowDown,
  Mail,
  History,
  Calendar
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

export const PartnersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTabState] = useState<'current' | 'history'>(
    tabParam === 'history' ? 'history' : 'current'
  );

  // Sync state if URL query param changes
  useEffect(() => {
    if (tabParam === 'history') {
      setActiveTabState('history');
    } else if (tabParam === 'current') {
      setActiveTabState('current');
    }
  }, [tabParam]);

  const handleTabChange = (tab: 'current' | 'history') => {
    setActiveTabState(tab);
    setSearchParams(tab === 'history' ? { tab: 'history' } : {}, { replace: true });
  };

  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Dynamic Aerodynamic Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Abstract Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1400px] opacity-[0.22] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/partners_flow_bg.jpg')",
            maskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[10%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.06] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[45%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-brightRed/[0.05] blur-[140px] animate-ambient-float-2" />
        <div className="absolute top-[75%] left-[8%] w-[500px] h-[500px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />

        {/* Wind Tunnel Speed Filaments */}
        <div className="absolute top-[15%] left-[6%] w-52 h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent animate-wind-streak-1" />
        <div className="absolute top-[50%] right-[10%] w-64 h-px bg-gradient-to-r from-transparent via-brand-brightRed/20 to-transparent animate-wind-streak-2" />
        <div className="absolute top-[82%] left-[14%] w-48 h-px bg-gradient-to-r from-transparent via-brand-red/18 to-transparent animate-wind-streak-3" />

        {/* Margin Sector Ticks */}
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[20%] left-5 opacity-30" aria-hidden="true">
          <div className="w-3 h-px bg-warm-400" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-4 h-px bg-brand-red" />
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[60%] right-5 opacity-30" aria-hidden="true">
          <div className="w-4 h-px bg-brand-red" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-3 h-px bg-warm-400" />
        </div>

        {/* Continuous Animated SVG Streamlines */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 2800"
          preserveAspectRatio="none"
        >
          <path
            d="M 140,0 C 700,320 1260,520 1120,900 C 960,1280 220,1460 380,1880 C 520,2220 1180,2420 1020,2800"
            stroke="#ef4444"
            strokeWidth="2"
            strokeOpacity="0.20"
            strokeDasharray="14 18"
            className="animate-flow-streamline"
          />
          <path
            d="M 170,0 C 730,320 1290,520 1150,900 C 990,1280 250,1460 410,1880 C 550,2220 1210,2420 1050,2800"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeOpacity="0.14"
            strokeDasharray="10 14"
            className="animate-flow-streamline-reverse"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
      
                {/* 1. Page Header & Tab Navigation */}
        <ScrollReveal direction="up" duration={500} className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
            OUR PARTNERS
          </h1>
          <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Meet the visionary companies, academic institutions, and technical enablers driving ART TU forward across European Formula Student circuits.
          </p>

          {/* Tab Navigation Bar & Jump CTA */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <div 
              className="inline-flex p-1.5 rounded-2xl bg-white/70 backdrop-blur-md border border-warm-250 shadow-xs"
              role="tablist"
              aria-label="Partnership Directory View"
            >
              <button
                type="button"
                role="tab"
                id="tab-current"
                aria-controls="panel-current"
                aria-selected={activeTab === 'current'}
                onClick={() => handleTabChange('current')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === 'current'
                    ? 'bg-brand-red text-white shadow-xs'
                    : 'text-warm-700 hover:text-warm-900 hover:bg-warm-100/70'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Current Partners</span>
              </button>

              <button
                type="button"
                role="tab"
                id="tab-history"
                aria-controls="panel-history"
                aria-selected={activeTab === 'history'}
                onClick={() => handleTabChange('history')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeTab === 'history'
                    ? 'bg-brand-red text-white shadow-xs'
                    : 'text-warm-700 hover:text-warm-900 hover:bg-warm-100/70'
                }`}
              >
                <History className="w-4 h-4" />
                <span>Partner History</span>
              </button>
            </div>

            {/* Scroll Down to Partner with ART TU Button */}
            <a
              href="#partner-with-us"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('partner-with-us');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-brand-red hover:text-white border border-warm-250 hover:border-brand-red text-xs font-mono font-bold text-warm-700 shadow-2xs hover:shadow-xs transition-all duration-200 group cursor-pointer"
            >
              <span>Partner with Us</span>
              <ArrowDown className="w-3.5 h-3.5 text-brand-red group-hover:text-white group-hover:translate-y-0.5 transition-all" />
            </a>
          </div>
        </ScrollReveal>

{/* ========================================================================= */}
        {/* TAB 1: CURRENT PARTNERS                                                   */}
        {/* ========================================================================= */}
        {activeTab === 'current' && (
          <div id="panel-current" role="tabpanel" aria-labelledby="tab-current" className="space-y-12 sm:space-y-16">
            
            <div className="text-center max-w-2xl mx-auto space-y-1.5">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase">
                CURRENT PARTNERS
              </h2>
            </div>

            {sponsorTiers.map((tierGroup, tIdx) => {
              const isEducational = tierGroup.tier === 'educational';
              const isPlatinum = tierGroup.tier === 'platinum';
              const isGold = tierGroup.tier === 'gold';
              const isSilver = tierGroup.tier === 'silver';
              const isBronze = tierGroup.tier === 'bronze';
              const isSupporter = tierGroup.tier === 'supporter';

              return (
                <ScrollReveal key={tierGroup.tier} direction="up" delay={tIdx * 40} duration={500}>
                  <div className="space-y-4">
                    
                    {/* Tier Header: Clean Title without Subtitle or fake tags */}
                    <div className="border-b border-warm-200/80 pb-3">
                      <h3 className="font-display font-black text-lg sm:text-xl text-warm-900 uppercase flex items-center gap-2">
                        {tierGroup.tier === 'educational' && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                        {tierGroup.tier === 'platinum' && <Star className="w-4 h-4 text-brand-red fill-brand-red" />}
                        {tierGroup.tier === 'gold' && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                        {tierGroup.tier === 'silver' && <Star className="w-4 h-4 text-slate-400 fill-slate-400" />}
                        {tierGroup.tier === 'bronze' && <Star className="w-4 h-4 text-amber-700 fill-amber-700" />}
                        {tierGroup.tier === 'supporter' && <Handshake className="w-4 h-4 text-brand-red" />}
                        <span>{tierGroup.title}</span>
                      </h3>
                    </div>

                    {/* EDUCATIONAL: Prominent card with dual logo (UTCN + EUt+ together) and description */}
                    {isEducational && (
                      <div className="max-w-2xl mx-auto">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <SponsorDescriptionCard key={idx} sponsor={sponsor} />
                        ))}
                      </div>
                    )}

                    {/* PLATINUM: Rich cards with bigger logos */}
                    {isPlatinum && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <SponsorDescriptionCard key={idx} sponsor={sponsor} />
                        ))}
                      </div>
                    )}

                    {/* GOLD: Rich cards with descriptions (remains the same) */}
                    {isGold && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <SponsorDescriptionCard key={idx} sponsor={sponsor} />
                        ))}
                      </div>
                    )}

                    {/* SILVER: A bit bigger, partner hierarchy size */}
                    {isSilver && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <ClickableLogoCard 
                            key={idx}
                            name={sponsor.name}
                            logo={sponsor.logo}
                            website={sponsor.website}
                            heightClass="h-24 sm:h-28"
                            imgClass="max-h-13 sm:max-h-16 max-w-[85%]"
                          />
                        ))}
                      </div>
                    )}

                    {/* BRONZE: The size of silver rn */}
                    {isBronze && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <ClickableLogoCard 
                            key={idx}
                            name={sponsor.name}
                            logo={sponsor.logo}
                            website={sponsor.website}
                            heightClass="h-20 sm:h-24"
                            imgClass="max-h-10 sm:max-h-12 max-w-[85%]"
                          />
                        ))}
                      </div>
                    )}

                    {/* SUPPORTER: Compact clickable cards */}
                    {isSupporter && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
                        {tierGroup.sponsors.map((sponsor, idx) => (
                          <ClickableLogoCard 
                            key={idx}
                            name={sponsor.name}
                            logo={sponsor.logo}
                            website={sponsor.website}
                            heightClass="h-16 sm:h-20"
                            imgClass="max-h-8 sm:max-h-9 max-w-[80%]"
                          />
                        ))}
                      </div>
                    )}

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PARTNER HISTORY                                                    */}
        {/* ========================================================================= */}
        {activeTab === 'history' && (
          <div id="panel-history" role="tabpanel" aria-labelledby="tab-history" className="space-y-12 sm:space-y-16">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase">
                PARTNER HISTORY
              </h2>

              {/* Season Jump Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                {historicalSeasons.map((hs) => (
                  <a
                    key={hs.season}
                    href={`#${hs.year}`}
                    className="px-3.5 py-1 rounded-lg bg-white/70 hover:bg-white border border-warm-250 text-xs font-mono font-bold text-warm-700 hover:text-brand-red transition shadow-2xs"
                  >
                    {hs.season}
                  </a>
                ))}
              </div>
            </div>

            {/* Historical Seasons List */}
            <div className="space-y-14 sm:space-y-20">
              {historicalSeasons.map((seasonData, sIdx) => (
                <ScrollReveal key={seasonData.season} direction="up" delay={sIdx * 50} duration={500}>
                  <section id={seasonData.year} className="space-y-8 scroll-mt-28">
                    
                    {/* Season Title Banner */}
                    <div className="flex items-center gap-3 border-b-2 border-brand-red/40 pb-3">
                      <div className="p-2 rounded-xl bg-brand-red text-white">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase tracking-tight">
                          {seasonData.season}
                        </h3>
                      </div>
                    </div>

                    {/* Season Categories */}
                    <div className="space-y-8 pl-1 sm:pl-2">
                      {seasonData.categories.map((cat, cIdx) => {
                        const isPlatinum = cat.name.toLowerCase().includes('platinum');
                        const isSilver = cat.name.toLowerCase().includes('silver');

                        return (
                          <div key={cIdx} className="space-y-3">
                            <h4 className="font-display font-bold text-sm sm:text-base text-warm-800 uppercase">
                              {cat.name}
                            </h4>

                            {/* Platinum Category */}
                            {isPlatinum && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cat.sponsors.map((sp, idx) => (
                                  <ClickableLogoCard
                                    key={idx}
                                    name={sp.name}
                                    logo={sp.logo}
                                    secondaryLogo={sp.secondaryLogo}
                                    website={sp.website}
                                    heightClass="h-26 sm:h-30"
                                    imgClass="max-h-14 sm:max-h-16 max-w-[85%]"
                                  />
                                ))}
                              </div>
                            )}

                            {/* Silver Category */}
                            {isSilver && (
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
                                {cat.sponsors.map((sp, idx) => (
                                  <ClickableLogoCard
                                    key={idx}
                                    name={sp.name}
                                    logo={sp.logo}
                                    website={sp.website}
                                    heightClass="h-24 sm:h-28"
                                    imgClass="max-h-13 sm:max-h-16 max-w-[85%]"
                                  />
                                ))}
                              </div>
                            )}

                            {/* Bronze Category */}
                            {!isPlatinum && !isSilver && (
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                {cat.sponsors.map((sp, idx) => (
                                  <ClickableLogoCard
                                    key={idx}
                                    name={sp.name}
                                    logo={sp.logo}
                                    secondaryLogo={sp.secondaryLogo}
                                    website={sp.website}
                                    heightClass="h-20 sm:h-24"
                                    imgClass="max-h-10 sm:max-h-12 max-w-[85%]"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </section>
                </ScrollReveal>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: PARTNER WITH ART TU & ONE-PAGER                           */}
        {/* ========================================================================= */}
        <div id="partner-with-us" className="pt-12 sm:pt-16 border-t border-warm-250/80 space-y-10 sm:space-y-12 scroll-mt-24">
{/* Section Header & Metrics */}
        <ScrollReveal direction="up" duration={500} className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-warm-900 uppercase tracking-tight">
            PARTNER WITH ART TU
          </h2>
          <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Powering the next generation of motorsport, electric vehicle innovation, and international Formula Student glory at the Technical University of Cluj-Napoca.
          </p>

          {/* Key Metric Chips with Quick History Toggle */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs text-warm-800 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-red" />
              <span className="font-bold text-brand-red"><TelemetryTicker value={60} suffix="+" /></span>
              <span>UTCN Students</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs text-warm-800 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-bold text-warm-900">1st Overall</span>
              <span>FS Balkans</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs text-warm-800 flex items-center gap-1.5">
              <Percent className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-bold text-emerald-700">100% Tax Deductible</span>
              <span>Law 227/2015</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs text-warm-800 flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5 text-brand-red" />
              <span className="font-bold text-brand-red"><TelemetryTicker value={43} suffix="" /></span>
              <span>Current Partners</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Split Hero: The People Behind the Machine + One-Pager */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: The People Behind the Machine */}
          <ScrollReveal direction="left" duration={550} className="lg:col-span-6 flex">
            <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 overflow-hidden shadow-xs flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-900">
                <img
                  src="/assets/2026_team_photo.webp"
                  alt="ART TU Cluj-Napoca Formula Student Team on Grid at Hockenheimring"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <span>FS Germany | Hockenheimring</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-display font-black text-sm sm:text-base uppercase tracking-tight leading-tight drop-shadow-sm">
                    The People Behind The Machine
                  </p>
                  <p className="text-[11px] text-white/80 font-sans mt-0.5 line-clamp-1">
                    60+ UTCN students turning ambitious engineering into race-winning reality.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-warm-700 leading-relaxed">
                  Behind every carbon fiber aerodynamic wing, custom printed circuit board, high-voltage battery cell, and simulation is a passionate team of Technical University students. Partnering with ART TU directly funds raw materials, precision machining, and future-defining engineering education.
                </p>

                <div className="pt-2 border-t border-warm-150 flex items-center justify-between">
                  <Link
                    to="/departments"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-red hover:text-brand-darkRed transition"
                  >
                    <span>Explore Team Departments</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/history/team"
                    className="text-[11px] font-mono text-warm-500 hover:text-warm-900 transition"
                  >
                    View Team Roster
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Compact One-Pager & Key Benefits */}
          <ScrollReveal direction="right" duration={550} className="lg:col-span-6 flex">
            <div className="w-full bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-brand-red uppercase tracking-wider font-bold">
                    2026/2027 PARTNERSHIP PACKAGES
                  </span>
                  <span className="px-2 py-0.5 rounded bg-brand-red/10 text-brand-red text-[10px] font-mono font-bold">
                    Official One-Pager
                  </span>
                </div>

                <h2 className="font-display font-black text-xl sm:text-2xl text-warm-900 leading-snug">
                  Request Official 2026 Partnership One-Pager
                </h2>

                <p className="text-xs text-warm-700 leading-relaxed">
                  Get our concise 1-page summary covering car livery branding zones and further partner benefits.
                </p>

                <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald-200/60 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 font-mono uppercase text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Key Partner Benefits & Incentives:</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-warm-800">
                    <div className="flex items-start gap-1.5 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-950 block font-semibold">Top-Tier Students:</strong>
                        <span className="text-warm-700">Direct recruitment access to top students familiar with industry standards.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-950 block font-semibold">High Publicity:</strong>
                        <span className="text-warm-700">Car livery branding across European circuits</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-950 block font-semibold">R&D Track Testing:</strong>
                        <span className="text-warm-700">Extreme validation for parts, tools & software</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-950 block font-semibold">Law 227/2015:</strong>
                        <span className="text-warm-700">Deduct 20% profit tax (up to 0.75% turnover)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <a
                  href="mailto:arttu.contact@gmail.com?subject=Partnership%20One-Pager%20Request%202026"
                  className="flex-1 px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shadow-brand-red/25 flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Request Partnership One-Pager (PDF)</span>
                </a>

                <a
                  href="mailto:arttu.contact@gmail.com"
                  className="px-3.5 py-3 rounded-xl bg-white/80 hover:bg-white border border-warm-300 text-warm-800 font-mono text-xs font-bold transition flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                  title="Email Project Management directly"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-red" />
                  <span>Contact Team</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
        </div>

      </div>
    </div>
  );
};

/* ========================================================================= */
/* HELPER COMPONENTS                                                         */
/* ========================================================================= */

/**
 * ClickableLogoCard
 * Clean, lightweight card that displays only the partner logo with subtle hover
 * and links directly to their website (strictly NO description text).
 */
interface ClickableLogoCardProps {
  name: string;
  logo: string;
  secondaryLogo?: string;
  website?: string;
  heightClass?: string;
  imgClass?: string;
}

const ClickableLogoCard: React.FC<ClickableLogoCardProps> = ({
  name,
  logo,
  secondaryLogo,
  website,
  heightClass = "h-20 sm:h-24",
  imgClass = "max-h-10 sm:max-h-12 max-w-[85%]"
}) => {
  const innerContent = (
    <div className={`relative w-full ${heightClass} p-3 rounded-2xl bg-white/75 backdrop-blur-sm border border-warm-200/70 shadow-2xs hover:shadow-md hover:bg-white hover:border-brand-red/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center group`}>
      {secondaryLogo ? (
        <div className="flex items-center justify-center gap-2 w-full h-full px-1">
          <div className="flex-1 flex items-center justify-center h-full">
            <img
              src={logo}
              alt={name}
              loading="lazy"
              decoding="async"
              className={`${imgClass} w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
            />
          </div>
          <div className="w-px h-6 bg-warm-250 shrink-0" aria-hidden="true" />
          <div className="flex-1 flex items-center justify-center h-full">
            <img
              src={secondaryLogo}
              alt={`${name} secondary logo`}
              loading="lazy"
              decoding="async"
              className={`${imgClass} w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
            />
          </div>
        </div>
      ) : (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          decoding="async"
          className={`${imgClass} w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
        />
      )}

      {website && (
        <div 
          className="absolute top-2 right-2 text-warm-300 group-hover:text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden="true"
        >
          <ExternalLink className="w-3 h-3" />
        </div>
      )}
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
        aria-label={name}
        className="block no-underline text-inherit cursor-pointer"
      >
        {innerContent}
      </a>
    );
  }

  return (
    <div title={name} aria-label={name}>
      {innerContent}
    </div>
  );
};

/**
 * SponsorDescriptionCard
 * Used exclusively for Platinum and Gold partners to showcase full narrative and links.
 */
interface SponsorDescriptionCardProps {
  sponsor: Sponsor;
}

const SponsorDescriptionCard: React.FC<SponsorDescriptionCardProps> = ({ sponsor }) => {
  const isPlatinum = sponsor.tier === 'platinum';

  const cardContent = (
    <div className="h-full bg-white/75 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-warm-200/70 hover:border-brand-red/60 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between group">
      <div>
        {/* Logo Container */}
        <div className={`relative ${isPlatinum ? 'h-20 sm:h-24 p-3' : 'h-16 p-2'} rounded-xl bg-white border border-warm-200/60 shadow-2xs flex items-center justify-center gap-3 mb-3`}>
          {sponsor.secondaryLogo ? (
            <div className="flex items-center justify-center gap-2 w-full h-full px-1">
              <div className="flex-1 flex items-center justify-center h-full">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  decoding="async"
                  className={`${isPlatinum ? 'max-h-13 sm:max-h-15' : 'max-h-11'} max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
                />
              </div>
              <div className={`w-px ${isPlatinum ? 'h-9' : 'h-7'} bg-warm-250/70 shrink-0`} aria-hidden="true" />
              <div className="flex-1 flex items-center justify-center h-full">
                <img
                  src={sponsor.secondaryLogo}
                  alt={`${sponsor.name} Secondary Logo`}
                  loading="lazy"
                  decoding="async"
                  className={`${isPlatinum ? 'max-h-13 sm:max-h-15' : 'max-h-11'} max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
                />
              </div>
            </div>
          ) : (
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              decoding="async"
              className={`${isPlatinum ? 'max-h-14 sm:max-h-16 max-w-[220px]' : 'max-h-11 max-w-[160px]'} w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200`}
            />
          )}

          {sponsor.website && (
            <div 
              className="absolute top-2 right-2 text-warm-300 group-hover:text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-200"
              title="Open partner website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* Partner Name */}
        <h4 className="font-display font-bold text-sm sm:text-base text-warm-900 mb-1.5 group-hover:text-brand-red transition">
          {sponsor.name}
        </h4>

        {/* Partner Description */}
        {sponsor.description && (
          <p className={`text-xs text-warm-600 leading-relaxed ${sponsor.tier === 'educational' ? '' : 'line-clamp-4'}`}>
            {sponsor.description}
          </p>
        )}
      </div>
    </div>
  );

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline text-inherit cursor-pointer h-full"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
};

export default PartnersPage;
