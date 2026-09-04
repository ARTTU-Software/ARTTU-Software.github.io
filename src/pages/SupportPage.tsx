import React, { useState } from 'react';
import { Heart, FileText, Download, Check, Copy, ExternalLink, Eye, Upload, HelpCircle, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

export const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'steps' | 'example'>('steps');
  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedBic, setCopiedBic] = useState(false);

  const iban = "RO25RNCB0106170625170001";
  const bic = "RNCBROBUXXX";
  const bank = "Banca Comerciala Romana";

  const formPdfUrl = "/assets/230_OPANAF_103_2026-ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf";
  const examplePdfUrl = "/assets/230_OPANAF_15_2023-ART-TU-Cluj-Napoca-model.pdf";
  const googleFormUrl = "https://forms.gle/hZBLEjdjidnxnEW6A";

  const handleCopyIban = () => {
    navigator.clipboard.writeText(iban);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2200);
  };

  const handleCopyBic = () => {
    navigator.clipboard.writeText(bic);
    setCopiedBic(true);
    setTimeout(() => setCopiedBic(false), 2200);
  };

  return (
    <div className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Dynamic Aerodynamic Streamline Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Faint Abstract Flow Backdrop with feathered gradient mask */}
        <div
          className="absolute top-0 inset-x-0 h-[1250px] opacity-[0.16] mix-blend-multiply bg-top bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('/assets/support_flow_bg.jpg')`,
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.7) 40%, transparent 80%)',
          }}
        />

        {/* Ambient Floating Light Orbs */}
        <div className="absolute top-[12%] -left-20 w-[450px] h-[450px] rounded-full bg-brand-red/[0.05] blur-[130px] animate-ambient-float-1" />
        <div className="absolute top-[48%] right-[-10%] w-[550px] h-[550px] rounded-full bg-brand-brightRed/[0.04] blur-[140px] animate-ambient-float-2" />
        <div className="absolute top-[80%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-red/[0.03] blur-[130px] animate-ambient-float-1" />

        {/* Wind Tunnel Speed Filaments */}
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

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
      
      {/* Hero Header */}
      <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto space-y-2.5">
        
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-warm-900 uppercase tracking-tight">
          Support ART TU Cluj-Napoca
        </h1>
        <p className="text-warm-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
          If you are an employee of a Romanian-based company, you have the possibility to redirect <strong><TelemetryTicker value={3.5} decimals={1} suffix="%" /> of your income tax</strong> to our non-governmental student organisation in 3 simple steps.
        </p>

        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-red/25 text-warm-800 text-xs text-left sm:text-center leading-relaxed shadow-xs">
          <span>
            Instead of allocating the full 10% income tax of your gross salary to the state budget,{' '}
            <strong className="text-brand-red font-bold">you can redirect 3.5% of it to fund student racecar engineering at zero cost to you.</strong>
          </span>
        </div>
      </ScrollReveal>

      {/* Main Grid: Formular 230 on Left (7 cols) + Direct NGO Transfer on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Formularul 230 Interactive Card */}
        <ScrollReveal direction="left" duration={650} className="lg:col-span-7 bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-6">
          
          {/* Top Bar with Title & Tab Switcher */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-red uppercase tracking-wider font-bold">
                <FileText className="w-4 h-4" />
                <span>Formularul 230 (3.5% Impozit pe Venit)</span>
              </div>

              {/* View Switcher Tabs */}
              <div className="inline-flex p-1 bg-white/70 backdrop-blur-sm rounded-xl border border-warm-200/80 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('steps')}
                  className={`px-3 py-1.5 rounded-lg transition duration-150 ${
                    activeTab === 'steps'
                      ? 'bg-white text-brand-red shadow-xs font-bold'
                      : 'text-warm-600 hover:text-warm-900'
                  }`}
                >
                  3 Simple Steps
                </button>
                <button
                  onClick={() => setActiveTab('example')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition duration-150 ${
                    activeTab === 'example'
                      ? 'bg-brand-red text-white shadow-xs font-bold'
                      : 'text-warm-600 hover:text-warm-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>See Filled Example</span>
                </button>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900">
              {activeTab === 'steps' ? 'Redirecting takes 3 simple steps:' : 'Filled Example & Model Guide'}
            </h2>
          </div>

          {/* TAB 1: 3-Step Process */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red/40 hover:bg-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      01
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-base text-warm-900">
                          1. Download & print file
                        </h3>
                        <a
                          href={formPdfUrl}
                          download="230_ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-red/10 hover:bg-brand-red hover:text-white text-brand-red font-mono text-xs font-bold transition"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF Form</span>
                        </a>
                      </div>
                      <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                        Download & print the 230 form pre-filled with the official fiscal data of our student association.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red/40 hover:bg-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      02
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-base text-warm-900">
                          2. Complete contributor details
                        </h3>
                        <button
                          onClick={() => setActiveTab('example')}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-warm-100 hover:bg-warm-200 text-warm-800 font-mono text-xs font-bold transition"
                        >
                          <Eye className="w-3.5 h-3.5 text-brand-red" />
                          <span>View Example</span>
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                        Fill in the contributor section by hand and sign the document. It is not necessary to calculate or specify the donation amount.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:border-brand-red/40 hover:bg-white transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      03
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-base text-warm-900">
                          3. Upload completed form
                        </h3>
                        <a
                          href={googleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-700 hover:text-white font-mono text-xs font-bold transition"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Google Form</span>
                        </a>
                      </div>
                      <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                        Upload the completed form through our Google Form or email it directly to{' '}
                        <span className="text-brand-red font-mono font-bold">arttu.contact@gmail.com</span>.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Toolbar */}
              <div className="pt-4 border-t border-warm-200 flex flex-wrap items-center gap-3">
                <a
                  href={formPdfUrl}
                  download="230_ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf"
                  className="px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Formular 230</span>
                </a>

                <button
                  onClick={() => setActiveTab('example')}
                  className="px-4 py-3 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-900 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-warm-300"
                >
                  <Eye className="w-4 h-4 text-brand-red" />
                  <span>See Filled Example</span>
                </button>

                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-warm-50 hover:bg-warm-100 text-warm-800 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-warm-200 ml-auto"
                >
                  <Upload className="w-4 h-4 text-emerald-700" />
                  <span>Upload Form</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: See Filled Example Tab */}
          {activeTab === 'example' && (
            <div className="space-y-6">
              
              {/* Field Guide Breakdown */}
              <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase">
                  <HelpCircle className="w-4 h-4" />
                  <span>How to Complete Formular 230</span>
                </div>
                <ul className="text-xs text-warm-700 space-y-2 list-disc list-inside leading-relaxed">
                  <li>
                    <strong className="text-warm-900">Section I (Contributor):</strong> Fill in your personal details (Full Name, CNP, Address, Email/Phone).
                  </li>
                  <li>
                    <strong className="text-warm-900">Section II (NGO Details):</strong> Already pre-filled with <em>ASOCIATIA ART TU CLUJ-NAPOCA</em> and our fiscal data.
                  </li>
                  <li>
                    <strong className="text-warm-900">Donation Amount:</strong> Leave blank. The tax authorities (ANAF) automatically calculate the exact 3.5%.
                  </li>
                  <li>
                    <strong className="text-warm-900">Signature:</strong> Sign by hand at the bottom of the page in the <em>Semnătură contribuabil</em> field.
                  </li>
                </ul>
              </div>

              {/* PDF Preview Frame / Viewer */}
              <div className="rounded-2xl border border-warm-300 overflow-hidden bg-warm-100 shadow-inner">
                <div className="bg-warm-200 px-4 py-2.5 flex items-center justify-between border-b border-warm-300 text-xs">
                  <span className="font-mono font-semibold text-warm-700 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-brand-red" />
                    <span>230_OPANAF_15_2023-ART-TU-Cluj-Napoca-model.pdf</span>
                  </span>
                  <a
                    href={examplePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline font-mono font-bold flex items-center gap-1"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="h-80 sm:h-96 w-full bg-white relative">
                  <iframe
                    src={`${examplePdfUrl}#toolbar=0&navpanes=0`}
                    title="Formular 230 Filled Example Model"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>

              {/* Tab Footer Actions */}
              <div className="pt-4 border-t border-warm-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveTab('steps')}
                  className="px-4 py-2.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-900 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Back to 3 Steps</span>
                </button>

                <div className="flex items-center gap-2.5">
                  <a
                    href={examplePdfUrl}
                    download="230_ART_TU_Cluj_Napoca_Model.pdf"
                    className="px-4 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Example PDF</span>
                  </a>
                </div>
              </div>

            </div>
          )}

        </ScrollReveal>

        {/* Bank Transfer Details Box */}
        <ScrollReveal direction="right" duration={650} className="lg:col-span-5 bg-white/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/80 shadow-xs flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-warm-500 uppercase tracking-widest font-semibold">
                Direct NGO Bank Donation
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-brand-red/10 text-brand-red text-[11px] font-mono font-bold">
                Non-Profit NGO
              </span>
            </div>

            <h2 className="font-display font-black text-2xl text-warm-900 mb-2">
              Asociația ART TU Cluj-Napoca
            </h2>
            <p className="text-xs text-warm-600 leading-relaxed mb-6">
              Direct contributions fund raw materials, high-voltage battery components, precision CNC machining, and competition logistics for our electric racecars.
            </p>

            <div className="space-y-3.5">
              
              {/* Bank Name */}
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:bg-white transition-all">
                <span className="text-[10px] font-mono uppercase tracking-wider text-warm-500 block mb-1 font-semibold">
                  Bank / Sucursală
                </span>
                <span className="font-mono font-bold text-sm text-warm-900">
                  {bank}
                </span>
              </div>

              {/* IBAN (RON) */}
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:bg-white transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-warm-500 font-semibold">
                    IBAN (RON)
                  </span>
                  <button
                    onClick={handleCopyIban}
                    className={`text-xs flex items-center gap-1 font-mono font-bold transition px-2 py-0.5 rounded-md ${
                      copiedIban
                        ? 'bg-emerald-100 text-emerald-800 scale-105'
                        : 'text-brand-red hover:bg-brand-red/10'
                    }`}
                  >
                    {copiedIban ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIban ? 'IBAN Copied!' : 'Copy IBAN'}</span>
                  </button>
                </div>
                <span className="font-mono font-bold text-sm text-warm-900 break-all select-all">
                  {iban}
                </span>
              </div>

              {/* BIC / SWIFT */}
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:bg-white transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-warm-500 font-semibold">
                    BIC / SWIFT
                  </span>
                  <button
                    onClick={handleCopyBic}
                    className={`text-xs flex items-center gap-1 font-mono font-bold transition px-2 py-0.5 rounded-md ${
                      copiedBic
                        ? 'bg-emerald-100 text-emerald-800 scale-105'
                        : 'text-brand-red hover:bg-brand-red/10'
                    }`}
                  >
                    {copiedBic ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBic ? 'BIC Copied!' : 'Copy BIC'}</span>
                  </button>
                </div>
                <span className="font-mono font-bold text-sm text-warm-900 select-all">
                  {bic}
                </span>
              </div>

            </div>
          </div>

          <div className="pt-4 border-t border-warm-200/60 text-xs text-warm-500 flex items-center justify-between font-semibold">
            <span>Fiscal NGO registration available</span>
            <span className="text-brand-red font-mono font-bold">UTCN Formula Student</span>
          </div>
        </ScrollReveal>

      </div>

      </div>
    </div>
  );
};

export default SupportPage;
