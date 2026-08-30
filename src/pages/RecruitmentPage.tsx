import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ExternalLink, CheckCircle2, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { departments } from '../data/departments';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const RecruitmentPage: React.FC = () => {
  // Configurable Google Forms URL placeholder
  const GOOGLE_FORMS_URL = "https://forms.google.com/";

  const stages = [
    {
      step: '01',
      tag: '[ STAGE // 01 ]',
      title: 'Google Form Application & CV',
      description: 'Fill out the application form with your faculty details, department interests, motivation, and provide your CV.',
      badgeColor: 'bg-brand-red text-white',
    },
    {
      step: '02',
      tag: '[ STAGE // 02 ]',
      title: 'Application & CV Review',
      description: 'Department leads review your motivation, CV, availability, and technical curiosity.',
      badgeColor: 'bg-warm-200 text-warm-800',
    },
    {
      step: '03',
      tag: '[ STAGE // 03 ]',
      title: 'Interview & Workshop Chat',
      description: 'An informal conversation with department coordinators at our workshop to discuss goals and expectations.',
      badgeColor: 'bg-warm-200 text-warm-800',
    },
    {
      step: '04',
      tag: '[ STAGE // 04 ]',
      title: 'Hands-on Onboarding',
      description: 'Welcome to ART TU! You will be paired with senior members and begin hands-on projects in the workshop.',
      badgeColor: 'bg-emerald-700 text-white',
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-mono uppercase font-bold shadow-xs">
          <UserPlus className="w-3.5 h-3.5" />
          <span>Recruitments Active // 2026 Season</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-warm-900 uppercase tracking-tight">
          JOIN ART TU FORMULA STUDENT
        </h1>
        <p className="text-warm-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Open to all students of the Technical University of Cluj-Napoca (UTCN). Develop practical engineering, embedded systems, and project management skills on a championship team.
        </p>
      </ScrollReveal>

      {/* Primary Google Form Application Card */}
      <ScrollReveal direction="up" delay={60} duration={650}>
        <div className="bg-gradient-to-r from-red-50 via-warm-50 to-warm-100 p-6 sm:p-10 rounded-3xl border border-brand-red/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 card-hover-glow">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block">
              // 2026/2027 SEASON RECRUITMENT
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900">
              Apply via Google Forms
            </h2>
            <p className="text-xs sm:text-sm text-warm-700 leading-relaxed">
              All applications are submitted and processed through our official Google Form. Select your target department, provide your CV, tell us about your background and interests, and our team will get in touch regarding the interview round.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-warm-600 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Open to all UTCN faculties
              </span>
              <span className="flex items-center gap-1.5 text-warm-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> No prior experience required
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-red/30 transition flex items-center justify-center gap-2 group hover:scale-102"
            >
              <span>Open Application Form</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* 4-Step Recruitment Process */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-warm-250 shadow-sm">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block">
            // APPLICATION ROADMAP
          </span>
          <h2 className="font-display font-black text-xl sm:text-3xl text-warm-900 uppercase">
            Recruitment Timeline & Stages
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((stage, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={650} className="h-full">
              <div className="bg-warm-50 p-6 rounded-2xl border border-warm-200 relative flex flex-col justify-between h-full hover:border-warm-350 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center shadow-xs ${stage.badgeColor}`}>
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono text-warm-500 font-bold">
                      {stage.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-warm-900 mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-warm-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Departments Overview & Jump Links */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-warm-250 shadow-sm space-y-6">
        <ScrollReveal direction="up" duration={600} className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-warm-900 uppercase">
              Recruiting Departments
            </h2>
          </div>
          <Link
            to="/departments"
            className="text-xs font-mono text-brand-red hover:underline font-bold flex items-center gap-1 transition"
          >
            <span>Read full department details & software tools</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept, idx) => (
            <ScrollReveal key={dept.id} direction="up" delay={(idx % 6) * 70} duration={600} className="h-full">
              <Link
                to="/departments"
                className="p-5 rounded-2xl bg-warm-50 border border-warm-200 hover:border-brand-red/50 transition-all duration-300 group flex flex-col justify-between hover:bg-white hover:shadow-md hover:-translate-y-1 h-full"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-800 font-bold block mb-1">
                    ● Positions Open
                  </span>
                  <h3 className="font-display font-bold text-base text-warm-900 group-hover:text-brand-red transition">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-warm-600 mt-1 line-clamp-2 leading-relaxed">
                    {dept.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-warm-200 flex items-center justify-between text-xs font-mono text-warm-500 group-hover:text-brand-red font-semibold">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Student Culture Gallery */}
      <div className="space-y-4">
        <ScrollReveal direction="up" duration={600} className="text-center">
          <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block mb-1">
            // WORKSHOP CULTURE
          </span>
          <h2 className="font-display font-bold text-xl text-warm-900 uppercase">
            Life @ ART TU
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollReveal direction="up" delay={0} duration={650}>
            <div className="rounded-2xl overflow-hidden border border-warm-250 h-56 bg-warm-150 shadow-xs group relative">
              <img src="/assets/IMG_8575-1-1-scaled.webp" alt="Workshop Assembly" className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px]">
                Testing
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} duration={650}>
            <div className="rounded-2xl overflow-hidden border border-warm-250 h-56 bg-warm-150 shadow-xs group relative">
              <img src="/assets/DBV_FSBK-Day4-416-scaled.webp" alt="Trackside Telemetry" className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px]">
                High Fashion (Boots Not Included)
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={650}>
            <div className="rounded-2xl overflow-hidden border border-warm-250 h-56 bg-warm-150 shadow-xs group relative">
              <img src="/assets/DSC_0102-1-1-scaled.webp" alt="Paddock Testing" className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px]">
                The Secret Third Thing
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300} duration={650}>
            <div className="rounded-2xl overflow-hidden border border-warm-250 h-56 bg-warm-150 shadow-xs group relative">
              <img src="/assets/IMG_8128-1-scaled.webp" alt="Team Spirit" className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white font-mono text-[10px]">
                Team Spirit
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
};

export default RecruitmentPage;
