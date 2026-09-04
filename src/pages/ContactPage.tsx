import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const teamEmail = "arttu.contact@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(teamEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="relative w-full overflow-hidden pt-24 sm:pt-28 pb-24">
      
      {/* Dynamic Aerodynamic Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Abstract Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1200px] opacity-[0.16] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/contact_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, transparent 85%)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[12%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[48%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />

        {/* Wind Tunnel Speed Filaments */}
        <div className="absolute top-[20%] left-[8%] w-52 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent animate-wind-streak-1" />
        <div className="absolute top-[55%] right-[10%] w-60 h-px bg-gradient-to-r from-transparent via-brand-brightRed/16 to-transparent animate-wind-streak-2" />

        {/* Margin Sector Ticks */}
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[25%] left-5 opacity-25" aria-hidden="true">
          <div className="w-3 h-px bg-warm-400" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-4 h-px bg-brand-red" />
        </div>
        <div className="hidden lg:flex flex-col gap-1.5 absolute top-[65%] right-5 opacity-25" aria-hidden="true">
          <div className="w-4 h-px bg-brand-red" />
          <div className="w-1.5 h-px bg-warm-400" />
          <div className="w-3 h-px bg-warm-400" />
        </div>

        {/* Continuous Animated SVG Streamlines (Crisp Dotted Lines) */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox="0 0 1440 2200"
          preserveAspectRatio="none"
        >
          <path
            d="M 140,0 C 700,320 1260,520 1120,900 C 960,1280 220,1460 380,1880 C 520,2220 1180,2420 1020,2200"
            stroke="#ef4444"
            strokeWidth="1.8"
            strokeOpacity="0.16"
            strokeDasharray="14 18"
            className="animate-flow-streamline"
          />
          <path
            d="M 170,0 C 730,320 1290,520 1150,900 C 990,1280 250,1460 410,1880 C 550,2220 1210,2420 1050,2200"
            stroke="#dc2626"
            strokeWidth="1.2"
            strokeOpacity="0.12"
            strokeDasharray="10 14"
            className="animate-flow-streamline-reverse"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <ScrollReveal direction="up" duration={600} className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-warm-900 uppercase tracking-tight">
          CONTACT US
        </h1>
        <p className="text-warm-700 text-sm sm:text-base leading-relaxed">
          Get in touch with the ART TU Formula Student team for sponsorship, media, recruitment, or technical inquiries.
        </p>
      </ScrollReveal>

      {/* Main Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Location Card */}
        <ScrollReveal direction="left" duration={650}>
          <div className="bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-4 h-full card-hover-glow transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-warm-900">
                  Headquarters & Workshop
                </h2>
                <p className="text-warm-500 text-xs font-mono mt-0.5 uppercase tracking-wide">
                  PHYSICAL LOCATION
                </p>
              </div>
              <div className="text-warm-900 text-base font-semibold leading-relaxed pt-1">
                Simtex Building, Room 03<br />
                <span className="text-warm-600 font-normal text-sm">Bv. Muncii, Cluj-Napoca, Romania</span>
              </div>
            </div>

            <div className="pt-3 border-t border-warm-200/60 text-xs font-mono text-warm-500">
              Technical University of Cluj-Napoca (UTCN)
            </div>
          </div>
        </ScrollReveal>

        {/* Email Card */}
        <ScrollReveal direction="right" duration={650}>
          <div className="bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-4 h-full card-hover-glow transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-warm-900">
                  Official Email
                </h2>
                <p className="text-warm-500 text-xs font-mono mt-0.5 uppercase tracking-wide">
                  DIRECT INQUIRIES & PARTNERSHIPS
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={`mailto:${teamEmail}`}
                  className="text-brand-red hover:underline font-mono font-bold text-sm sm:text-base block truncate select-all"
                >
                  {teamEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={`mailto:${teamEmail}`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold text-center uppercase tracking-wider transition shadow-sm hover:shadow-md"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className={`py-2.5 px-4 rounded-xl border transition flex items-center gap-1.5 font-mono text-xs font-semibold shadow-xs ${
                  copiedEmail
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                    : 'border-warm-200/80 bg-white/70 hover:bg-white text-warm-800'
                }`}
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-warm-600" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Social Media Channels */}
      <ScrollReveal direction="up" delay={120} duration={650}>
        <div className="bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs space-y-5">
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block mb-0.5">
              CONNECT WITH US
            </span>
            <h2 className="font-display font-bold text-xl text-warm-900">
              Official Social Channels
            </h2>
            <p className="text-warm-600 text-xs mt-0.5">
              Follow our latest track testing updates, CAD build logs, and international competition coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://www.instagram.com/arttuclujnapoca/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red hover:bg-white text-warm-800 hover:text-brand-red transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex items-center gap-3.5 group"
              aria-label="Instagram"
            >
              <div className="p-2.5 rounded-xl bg-white/80 border border-warm-200/60 group-hover:border-brand-red/30 text-warm-700 group-hover:text-brand-red transition shadow-xs shrink-0">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-warm-900 group-hover:text-brand-red transition truncate">Instagram</span>
                <span className="block text-xs text-warm-500 font-mono truncate">@arttuclujnapoca</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/arttu-formulastudent/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red hover:bg-white text-warm-800 hover:text-brand-red transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex items-center gap-3.5 group"
              aria-label="LinkedIn"
            >
              <div className="p-2.5 rounded-xl bg-white/80 border border-warm-200/60 group-hover:border-brand-red/30 text-warm-700 group-hover:text-brand-red transition shadow-xs shrink-0">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-warm-900 group-hover:text-brand-red transition truncate">LinkedIn</span>
                <span className="block text-xs text-warm-500 font-mono truncate">ART-TU Formula Student</span>
              </div>
            </a>

            <a
              href="https://www.facebook.com/arttuclujnapoca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red hover:bg-white text-warm-800 hover:text-brand-red transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex items-center gap-3.5 group"
              aria-label="Facebook"
            >
              <div className="p-2.5 rounded-xl bg-white/80 border border-warm-200/60 group-hover:border-brand-red/30 text-warm-700 group-hover:text-brand-red transition shadow-xs shrink-0">
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-warm-900 group-hover:text-brand-red transition truncate">Facebook</span>
                <span className="block text-xs text-warm-500 font-mono truncate">ART TU Cluj-Napoca</span>
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>

      </div>
    </div>
  );
};

export default ContactPage;

