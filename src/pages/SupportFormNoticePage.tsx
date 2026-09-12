import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const SupportFormNoticePage: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-24 sm:pt-32 pb-28 min-h-[70vh] flex flex-col justify-center">
      {/* Aerodynamic Streamline Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          className="absolute top-0 inset-x-0 h-[800px] opacity-[0.12] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/support_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 40%, transparent 80%)',
          }}
        />

        {/* Ambient Light Orbs */}
        <div className="absolute top-[15%] -left-20 w-[420px] h-[420px] rounded-full bg-brand-red/[0.05] blur-[120px] animate-ambient-float-1" />
        <div className="absolute top-[40%] right-[-10%] w-[480px] h-[480px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />

        {/* Animated Streamline Paths */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 1600"
          preserveAspectRatio="none"
        >
          <path
            d="M 140,0 C 700,280 1260,460 1120,800 C 960,1140 220,1320 380,1600"
            stroke="#ef4444"
            strokeWidth="1.6"
            strokeOpacity="0.14"
            strokeDasharray="14 18"
            className="animate-flow-streamline"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center sm:text-left">
        {/* Navigation Breadcrumb */}
        <ScrollReveal direction="up" duration={500}>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-warm-600 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Support Page</span>
          </Link>
        </ScrollReveal>

        {/* Hero Notice Card */}
        <ScrollReveal direction="up" duration={600} className="p-8 sm:p-10 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-warm-200/80 border border-warm-300 text-warm-700 text-xs font-mono font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-brand-red" />
              <span>Notice: Not Available Right Now</span>
            </div>

            <h1 className="font-display font-black text-2xl sm:text-4xl text-warm-900 tracking-tight">
              Formular 230 is not available right now
            </h1>

            <p className="text-warm-700 text-sm sm:text-base leading-relaxed">
              The Formular 230 PDF download and the submission Google Form are currently closed. They will only be available starting in <strong className="text-brand-red font-bold">January 2027</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200/80 space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase">
              <Calendar className="w-4 h-4" />
              <span>Available in January 2027</span>
            </div>
            <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
              We do not collect submissions at this time. The official downloadable PDF form and the digital Google Form upload link will be published here once the January 2027 period begins.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-start gap-3">
            <Link
              to="/support"
              className="px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Support Page</span>
            </Link>

            <Link
              to="/"
              className="px-5 py-3 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-800 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-warm-300"
            >
              <span>Return to Home</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default SupportFormNoticePage;
