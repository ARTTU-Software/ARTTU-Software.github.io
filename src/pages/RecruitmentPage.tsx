import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ExternalLink, CheckCircle2, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
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
    <div className="pt-20 sm:pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      
      {/* 1. Unified Hero & Instant Application Banner (Compact 2-Column) */}
      <ScrollReveal direction="up" duration={600}>
        <div className="bg-white rounded-2xl border border-warm-250 p-6 sm:p-8 shadow-xs relative overflow-hidden">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Column: Title & Mission */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-[11px] font-mono uppercase font-bold shadow-2xs">
                <UserPlus className="w-3.5 h-3.5" />
                <span>Recruitments Active // Season 2026/2027</span>
              </div>
              
              <h1 className="font-display font-black text-2xl sm:text-4xl text-warm-900 uppercase tracking-tight leading-tight">
                JOIN ART TU FORMULA STUDENT
              </h1>
              
              <p className="text-warm-700 text-xs sm:text-sm leading-relaxed">
                Open to all students of the Technical University of Cluj-Napoca (UTCN). Gain real-world engineering, high-voltage powertrains, telemetry software, and motorsport project management experience on Europe's premier circuits.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-warm-600">
                <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Open to all UTCN faculties
                </span>
                <span className="inline-flex items-center gap-1.5 text-warm-800 font-semibold bg-warm-100 px-2.5 py-1 rounded-md border border-warm-250">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> No prior experience required
                </span>
              </div>
            </div>

            {/* Right Column: Direct Apply Card */}
            <div className="bg-gradient-to-b from-red-50 to-warm-50 p-5 sm:p-6 rounded-xl border border-brand-red/25 shrink-0 flex flex-col justify-center space-y-3 lg:max-w-xs w-full shadow-2xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block">
                  Official Application
                </span>
                <h3 className="font-display font-bold text-base text-warm-900 mt-0.5">
                  Ready to race with us?
                </h3>
                <p className="text-[11px] text-warm-600 mt-1">
                  Applications are reviewed continuously by department coordinators.
                </p>
              </div>

              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider shadow-sm shadow-brand-red/30 transition flex items-center justify-center gap-2 group cursor-pointer hover:scale-102"
              >
                <span>Apply via Google Forms</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Compact 4-Stage Connected Recruitment Roadmap */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-warm-250 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-warm-200">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-red" />
            <h2 className="font-display font-bold text-sm sm:text-base text-warm-900 uppercase">
              Recruitment Process & Roadmap
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((st, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 60} duration={550}>
              <div className="bg-warm-50/90 p-3.5 rounded-xl border border-warm-200 flex items-start gap-3 h-full hover:border-warm-350 transition">
                <span className={`w-7 h-7 rounded-md font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs ${st.badgeColor}`}>
                  {st.step}
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-display font-bold text-xs sm:text-sm text-warm-900">
                    {st.title}
                  </h3>
                  <p className="text-[11px] text-warm-600 leading-snug">
                    {st.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. Recruiting Departments (Compact Responsive Grid) */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-warm-250 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-warm-200">
          <div>
            <h2 className="font-display font-bold text-base sm:text-lg text-warm-900 uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff3b3b]" />
              <span>Recruiting Departments</span>
            </h2>
            <p className="text-xs text-warm-600 mt-0.5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {departments.map((dept, idx) => (
            <ScrollReveal key={dept.id} direction="up" delay={(idx % 6) * 50} duration={550} className="h-full">
              <Link
                to={`/departments#${dept.id}`}
                className="rounded-xl bg-warm-50/90 border border-warm-200 hover:border-brand-red/50 transition-all duration-200 group flex flex-col justify-between hover:bg-white hover:shadow-xs hover:-translate-y-0.5 overflow-hidden h-full"
              >
                <div>
                  {/* Department Thumbnail */}
                  <div className="relative h-28 w-full overflow-hidden bg-warm-200">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      loading="lazy"
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out ${dept.imagePosition || 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-warm-950/20 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-600/90 backdrop-blur-xs text-white text-[9px] font-mono font-bold shadow-2xs">
                        ● Positions Open
                      </span>
                    </div>
                    <div className="absolute bottom-1.5 left-2 right-2 text-[9px] font-mono text-white/90 font-bold uppercase tracking-wider">
                      // {dept.title}
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-display font-bold text-sm text-warm-900 group-hover:text-brand-red transition">
                      {dept.name}
                    </h3>
                    <p className="text-[11px] text-warm-600 mt-0.5 line-clamp-2 leading-relaxed">
                      {dept.tagline}
                    </p>
                  </div>
                </div>

                <div className="px-3 pb-3 pt-0">
                  <div className="pt-2 border-t border-warm-200 flex items-center justify-between text-[11px] font-mono text-warm-500 group-hover:text-brand-red font-semibold">
                    <span>View Responsibilities & Tools</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 4. Student Culture Gallery Strip */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-brand-red uppercase tracking-wider font-bold">
              // WORKSHOP CULTURE
            </span>
            <span className="text-warm-400">•</span>
            <span className="font-display font-bold text-xs sm:text-sm text-warm-900 uppercase">
              Life @ ART TU
            </span>
          </div>
          <span className="text-[10px] font-mono text-warm-500 uppercase font-semibold">
            Paddock & Workshop Moments
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <div className="rounded-xl overflow-hidden border border-warm-250 h-32 sm:h-36 bg-warm-150 shadow-2xs group relative">
            <img src="/assets/IMG_8575-1-1-scaled.webp" alt="Workshop Assembly" className="w-full h-full object-cover group-hover:scale-103 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white font-mono text-[10px]">
              Testing
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-warm-250 h-32 sm:h-36 bg-warm-150 shadow-2xs group relative">
            <img src="/assets/DBV_FSBK-Day4-416-scaled.webp" alt="Trackside Telemetry" className="w-full h-full object-cover group-hover:scale-103 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white font-mono text-[10px]">
              High Fashion (Boots Not Included)
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-warm-250 h-32 sm:h-36 bg-warm-150 shadow-2xs group relative">
            <img src="/assets/DSC_0102-1-1-scaled.webp" alt="Paddock Testing" className="w-full h-full object-cover group-hover:scale-103 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white font-mono text-[10px]">
              The Secret Third Thing
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-warm-250 h-32 sm:h-36 bg-warm-150 shadow-2xs group relative">
            <img src="/assets/IMG_8128-1-scaled.webp" alt="Team Spirit" className="w-full h-full object-cover group-hover:scale-103 transition duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white font-mono text-[10px]">
              Team Spirit
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecruitmentPage;
