import React from 'react';
import { Link } from 'react-router-dom';
import { sponsorTiers } from '../data/sponsors';
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
  Mail
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

export const PartnersPage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Dynamic Aerodynamic Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Abstract Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1400px] opacity-[0.22] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/partners_flow_bg.jpg')`,
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
      
      {/* 1. Compact Header */}
      <ScrollReveal direction="up" duration={500} className="text-center max-w-3xl mx-auto space-y-2.5">
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
          PARTNER WITH ART TU
        </h1>
        <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          Powering the next generation of motorsport engineers, electric vehicle innovation, and international Formula Student glory at the Technical University of Cluj-Napoca.
        </p>

        {/* Compact Key Metric Chips */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs text-warm-800 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-brand-red" />
            <span className="font-bold text-brand-red"><TelemetryTicker value={60} suffix="+" /></span>
            <span>UTCN Engineers</span>
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
            <span className="font-bold text-brand-red"><TelemetryTicker value={20} suffix="+" /></span>
            <span>Industry Partners</span>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Compact Split Hero: The People Behind the Machine + One-Pager with Green Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: The People Behind the Machine (Team Photo Card) */}
        <ScrollReveal direction="left" duration={550} className="lg:col-span-6 flex">
          <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl border border-white/80 overflow-hidden shadow-xs flex flex-col justify-between group">
            {/* Team Photo Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-warm-900">
              <img
                src="/assets/2026_team_photo.webp"
                alt="ART TU Cluj-Napoca Formula Student Team on Grid at Hockenheimring"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
              
              {/* Photo Overlay Badges */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold flex items-center gap-1.5">
                <span>FS Germany • Hockenheimring</span>
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

            {/* Content & Narrative */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-warm-700 leading-relaxed">
                Behind every carbon fiber aerodynamic wing, custom printed circuit board, high-voltage battery cell, and simulation is a passionate team of Technical University students. Sponsoring ART TU directly funds raw materials, precision machining, and future-defining engineering education.
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

        {/* Right: Compact One-Pager & Key Benefits (Green Accents) */}
        <ScrollReveal direction="right" duration={550} className="lg:col-span-6 flex">
          <div className="w-full bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-brand-red uppercase tracking-wider font-bold">
                  // 2026/2027 PARTNERSHIP PACKAGES
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-red/10 text-brand-red text-[10px] font-mono font-bold">
                  Official One-Pager
                </span>
              </div>

              <h2 className="font-display font-black text-xl sm:text-2xl text-warm-900 leading-snug">
                Official 2026 Sponsorship One-Pager
              </h2>

              <p className="text-xs text-warm-700 leading-relaxed">
                Get our concise 1-page summary covering car livery branding zones and further partner benefits.
              </p>

              {/* Key Sponsor Benefits Box with Green Accents */}
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
                href="mailto:arttu.contact@gmail.com?subject=Sponsorship%20One-Pager%20Request%202026"
                className="flex-1 px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shadow-brand-red/25 flex items-center justify-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Request Sponsorship One-Pager (PDF)</span>
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

      {/* 3. Sponsor Tiers Grid (Current Partners Directory) */}
      <div className="space-y-10 sm:space-y-12 pt-2">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold">
            // OUR PARTNERS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase">
            CURRENT PARTNERS & SPONSORS
          </h2>
          <p className="text-xs sm:text-sm text-warm-600">
            Meet the visionary companies and institutions driving our team forward.
          </p>
        </div>

        {sponsorTiers.map((tierGroup, tIdx) => (
          <ScrollReveal key={tierGroup.tier} direction="up" delay={tIdx * 60} duration={550}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-warm-200/80 pb-3">
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-warm-900 uppercase flex items-center gap-2">
                    {tierGroup.tier === 'educational' && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                    {tierGroup.tier === 'platinum' && <Star className="w-4 h-4 text-brand-red fill-brand-red" />}
                    {tierGroup.tier === 'gold' && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                    <span>{tierGroup.title}</span>
                  </h3>
                  <p className="text-xs text-warm-500 mt-0.5 font-medium">{tierGroup.subtitle}</p>
                </div>

                <span className="text-xs font-mono uppercase text-brand-red font-bold">
                  // {tierGroup.tier.toUpperCase()} TIER
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {tierGroup.sponsors.map((sponsor, idx) => (
                  <div
                    key={idx}
                    className="bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/80 hover:border-brand-red/50 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-16 p-2.5 rounded-xl bg-white/90 border border-warm-200/60 shadow-2xs flex items-center justify-center mb-3 transition duration-200">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-11 max-w-[160px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200"
                        />
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-warm-900 mb-1 group-hover:text-brand-red transition">
                        {sponsor.name}
                      </h4>
                      {sponsor.description && (
                        <p className="text-xs text-warm-600 leading-relaxed line-clamp-3">
                          {sponsor.description}
                        </p>
                      )}
                    </div>

                    {sponsor.website && (
                      <div className="mt-4 pt-2.5 border-t border-warm-200/60 flex items-center justify-between">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-red hover:underline font-bold transition"
                        >
                          <span>Visit Partner</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      </div>
    </div>
  );
};

export default PartnersPage;
