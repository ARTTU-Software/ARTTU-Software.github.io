import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import { departments } from '../data/departments';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const RecruitmentPage: React.FC = () => {
  // Configurable Google Forms URL placeholder
  const GOOGLE_FORMS_URL = "https://placehold.co/";

  const stages = [
    {
      step: '01',
      title: 'Google Form & CV',
      desc: 'Submit faculty info, department choices, & CV.',
      badgeColor: 'bg-brand-red text-white',
    },
    {
      step: '02',
      title: 'Application Review',
      desc: 'Leads review background, CV, & technical interests.',
      badgeColor: 'bg-warm-200 text-warm-800',
    },
    {
      step: '03',
      title: 'Workshop Interview',
      desc: 'Informal in-person chat at our workshop.',
      badgeColor: 'bg-warm-200 text-warm-800',
    },
    {
      step: '04',
      title: 'Hands-on Onboarding',
      desc: 'Pair with senior members on racecar subsystems.',
      badgeColor: 'bg-emerald-700 text-white',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Dynamic Workshop & Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Workshop Paddock Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1250px] opacity-[0.16] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/recruitment_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, transparent 80%)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[12%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[48%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />
        <div className="absolute top-[80%] left-[8%] w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-[130px] animate-ambient-float-1" />

        {/* High-Speed Filaments */}
        <div className="absolute top-[18%] left-[8%] w-52 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent animate-wind-streak-1" />
        <div className="absolute top-[52%] right-[12%] w-64 h-px bg-gradient-to-r from-transparent via-brand-brightRed/16 to-transparent animate-wind-streak-2" />

        {/* Margin Sector Ticks */}
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[25%] left-5 opacity-25" aria-hidden="true">
          <div className="w-3 h-px bg-warm-400" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-4 h-px bg-brand-red" />
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[68%] right-5 opacity-25" aria-hidden="true">
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

      {/* Content Container (No boxes, pure dynamic flow, tight vertical rhythm) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* 1. Unified Hero & Instant Application Banner (Open Editorial Spread, No Box) */}
        <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-warm-200/80">
            {/* Left Column: Title & Mission */}
            <div className="space-y-4 max-w-2xl">
              
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight leading-tight">
                JOIN ART TU FORMULA STUDENT
              </h1>
              
              <p className="text-warm-700 text-sm sm:text-base leading-relaxed font-normal">
                Open to all students of the Technical University of Cluj-Napoca (UTCN). Gain real-world engineering, high-voltage powertrains, telemetry software, and motorsport project management experience on Europe's premier circuits.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-warm-600">
                <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50/90 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Open to all UTCN faculties
                </span>
                <span className="inline-flex items-center gap-1.5 text-warm-800 font-semibold bg-warm-200/70 px-3 py-1.5 rounded-lg border border-warm-300/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> No prior experience required
                </span>
              </div>
            </div>

            {/* Right Column: Direct Apply Card (Hero Size) */}
            <div className="p-8 sm:p-9 lg:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-warm-250/90 shrink-0 flex flex-col justify-center space-y-6 lg:max-w-md w-full shadow-xl shadow-warm-900/5 hover:border-brand-red/40 transition-all">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-extrabold block">
                  Official Application
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-warm-900 tracking-tight leading-snug">
                  Ready to race with us?
                </h3>
                <p className="text-sm sm:text-base text-warm-600 leading-relaxed">
                  Applications are reviewed continuously by department coordinators.
                </p>
              </div>

              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-7 py-4 rounded-2xl bg-brand-red hover:bg-brand-darkRed text-white font-display font-black text-sm uppercase tracking-wider shadow-md shadow-brand-red/30 transition-all flex items-center justify-center gap-2.5 group cursor-pointer hover:scale-[1.02] hover:shadow-lg active:scale-98"
              >
                <span>Apply via Google Forms</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. 4-Stage Connected Recruitment Roadmap (Open on Canvas, No Box Trap) */}
        <div className="space-y-6">
          <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false}>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-red" />
              <h2 className="font-display font-black text-xl sm:text-2xl text-warm-900 uppercase tracking-tight">
                Recruitment Process & Roadmap
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((st, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60} duration={550} distance={15} triggerOnce={false}>
                <div className="p-4 rounded-2xl bg-white/75 backdrop-blur-xs border border-warm-200/80 flex items-start gap-3.5 h-full hover:border-warm-350 hover:shadow-sm transition">
                  <span className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs ${st.badgeColor}`}>
                    {st.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-sm text-warm-900">
                      {st.title}
                    </h3>
                    <p className="text-xs text-warm-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. Recruiting Departments (Open Grid, Heroic Thumbnails) */}
        <div className="space-y-6 pt-6 border-t border-warm-200/80">
          <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-warm-900 uppercase tracking-tight flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b3b]" />
                  <span>Recruiting Departments</span>
                </h2>
                <p className="text-xs sm:text-sm text-warm-600 mt-1">
                  Explore open positions across engineering, software, and operations.
                </p>
              </div>
              <Link
                to="/departments"
                className="text-xs font-mono text-brand-red hover:underline font-bold flex items-center gap-1 transition shrink-0"
              >
                <span>Read full department deep-dive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <ScrollReveal key={dept.id} direction="up" delay={(idx % 6) * 50} duration={550} distance={15} triggerOnce={false} className="h-full">
                <Link
                  to={`/departments#${dept.id}`}
                  className="rounded-2xl bg-white/80 backdrop-blur-xs border border-warm-250 hover:border-brand-red/50 transition-all duration-300 group flex flex-col justify-between hover:bg-white hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div>
                    {/* Department Thumbnail */}
                    <div className="relative h-36 w-full overflow-hidden bg-warm-200">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        loading="lazy"
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${dept.imagePosition || 'object-center'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-warm-950/20 to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold shadow-2xs">
                          ● Positions Open
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-white/90 font-bold uppercase tracking-wider">
                        {dept.title}
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <h3 className="font-display font-black text-base text-warm-900 group-hover:text-brand-red transition">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-warm-600 leading-relaxed line-clamp-2 font-normal">
                        {dept.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-0">
                    <div className="pt-2.5 border-t border-warm-200 flex items-center justify-between text-xs font-mono text-warm-500 group-hover:text-brand-red font-semibold">
                      <span>View Responsibilities & Tools</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 4. Student Culture Gallery Strip (Heroic Frames, No AI Tells) */}
        <div className="space-y-6 pt-6 border-t border-warm-200/80">
          <ScrollReveal direction="up" duration={550} distance={20} triggerOnce={false}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold">
                  WORKSHOP CULTURE
                </span>
                <span className="text-warm-400">•</span>
                <span className="font-display font-black text-base sm:text-lg text-warm-900 uppercase tracking-tight">
                  Life @ ART TU
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ScrollReveal direction="up" delay={0} duration={550} distance={15} triggerOnce={false}>
              <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 bg-warm-150 group relative">
                <img src="/assets/IMG_8575-1-1-scaled.webp" alt="Workshop Assembly" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white font-mono text-xs">
                  Testing
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={60} duration={550} distance={15} triggerOnce={false}>
              <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 bg-warm-150 group relative">
                <img src="/assets/DBV_FSBK-Day4-416-scaled.webp" alt="Trackside Telemetry" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white font-mono text-xs">
                  High Fashion (Boots Not Included)
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} duration={550} distance={15} triggerOnce={false}>
              <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 bg-warm-150 group relative">
                <img src="/assets/DSC_0102-1-1-scaled.webp" alt="Paddock Testing" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white font-mono text-xs">
                  The Secret Third Thing
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} duration={550} distance={15} triggerOnce={false}>
              <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 bg-warm-150 group relative">
                <img src="/assets/IMG_8128-1-scaled.webp" alt="Team Spirit" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white font-mono text-xs">
                  Team Spirit
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>

    </div>
  );
};

export default RecruitmentPage;
