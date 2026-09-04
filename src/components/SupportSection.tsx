import React, { useState } from 'react';
import { Heart, FileText, Download, Check, Copy, ExternalLink, Eye, Upload, HelpCircle, ArrowRight } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'steps' | 'example'>('steps');
  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedBic, setCopiedBic] = useState(false);

  const iban = "placeholder";
  const bic = "placeholder";
  const bank = "placeholder";

  const formPdfUrl = "/assets/230_OPANAF_103_2026-ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf";
  const examplePdfUrl = "/assets/230_OPANAF_15_2023-ART-TU-Cluj-Napoca-model.pdf";
  const googleFormUrl = "https://forms.gle/hZBLEjdjidnxnEW6A";

  const handleCopyIban = () => {
    navigator.clipboard.writeText(iban);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2500);
  };

  const handleCopyBic = () => {
    navigator.clipboard.writeText(bic);
    setCopiedBic(true);
    setTimeout(() => setCopiedBic(false), 2500);
  };

  return (
    <section id="support" className="py-24 bg-carbon-900 relative cad-grid-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-brightRed text-xs font-mono uppercase font-semibold">
            <Heart className="w-3.5 h-3.5 text-brand-brightRed fill-brand-brightRed animate-pulse" />
            <span>Support Our Team</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Thank you for joining us in our journey!
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            If you are an employee of a Romanian-based company, you have the possibility to redirect <strong className="text-gray-200">3.5% of your income tax</strong> to a non-governmental organisation, by following 3 simple steps!
          </p>

          <div className="p-4 rounded-xl bg-carbon-950 border border-carbon-750 text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            <span>
              Instead of giving the full 10% income tax of your gross salary to the Government,{' '}
              <strong className="text-brand-brightRed font-bold">you will help us by giving 3.5% out of it, without any costs for you!</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formularul 230 Interactive Box */}
          <div className="lg:col-span-7 bg-carbon-950 p-6 sm:p-8 rounded-2xl border border-carbon-750 shadow-2xl flex flex-col justify-between space-y-6">
            
            {/* Header & Tabs */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-brightRed uppercase tracking-wider font-bold">
                  <FileText className="w-4 h-4" />
                  <span>Formularul 230 (3.5% Impozit pe Venit)</span>
                </div>

                <div className="inline-flex p-1 bg-carbon-900 rounded-xl border border-carbon-800 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('steps')}
                    className={`px-3 py-1 rounded-lg transition ${
                      activeTab === 'steps'
                        ? 'bg-carbon-800 text-white shadow-sm font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    3 Simple Steps
                  </button>
                  <button
                    onClick={() => setActiveTab('example')}
                    className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition ${
                      activeTab === 'example'
                        ? 'bg-brand-red text-white shadow-sm font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>See Filled Example</span>
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                {activeTab === 'steps' ? 'Redirecting takes 3 simple steps:' : 'Filled Example & Model Guide'}
              </h3>
            </div>

            {/* TAB 1: 3-Step Process */}
            {activeTab === 'steps' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-800 flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-sm text-white">1. Download & print file</h4>
                        <a
                          href={formPdfUrl}
                          download="230_ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf"
                          className="text-xs font-mono font-bold text-brand-brightRed hover:underline flex items-center gap-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </a>
                      </div>
                      <p className="text-xs text-gray-400">
                        Download & print the 230 form pre-filled with the data of our association!
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-800 flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-sm text-white">2. Complete file</h4>
                        <button
                          onClick={() => setActiveTab('example')}
                          className="text-xs font-mono font-bold text-brand-brightRed hover:underline flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Model</span>
                        </button>
                      </div>
                      <p className="text-xs text-gray-400">
                        Fill in the vacancies in the 230 form with handwriting and sign the document. It is not necessary to specify the amount you donate for our team.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-800 flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-brand-red text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-sm text-white">3. Upload file</h4>
                        <a
                          href={googleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <Upload className="w-3 h-3" />
                          <span>Form</span>
                        </a>
                      </div>
                      <p className="text-xs text-gray-400">
                        After completing the form, please upload it using the Google form accessible in this section or send to <span className="text-white">arttu.contact@gmail.com</span>!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-carbon-800 flex flex-wrap items-center gap-3">
                  <a
                    href={formPdfUrl}
                    download="230_ASOCIATIA-ART-TU-CLUJ-NAPOCA.pdf"
                    className="px-5 py-3 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg shadow-brand-red/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Formular 230</span>
                  </a>

                  <button
                    onClick={() => setActiveTab('example')}
                    className="px-4 py-3 rounded-lg bg-carbon-900 hover:bg-carbon-800 text-gray-200 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-carbon-750"
                  >
                    <Eye className="w-4 h-4 text-brand-brightRed" />
                    <span>See Filled Example</span>
                  </button>

                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-carbon-900 hover:bg-carbon-800 text-gray-200 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 border border-carbon-750 ml-auto"
                  >
                    <Upload className="w-4 h-4 text-emerald-400" />
                    <span>Upload Form</span>
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: See Filled Example Tab */}
            {activeTab === 'example' && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-brightRed uppercase">
                    <HelpCircle className="w-4 h-4" />
                    <span>How to Complete Formular 230</span>
                  </div>
                  <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                    <li><strong className="text-gray-200">Section I:</strong> Fill in your name, CNP, and address.</li>
                    <li><strong className="text-gray-200">Section II:</strong> Pre-filled for <em>ASOCIATIA ART TU CLUJ-NAPOCA</em>.</li>
                    <li><strong className="text-gray-200">Amount:</strong> Leave blank (calculated by ANAF).</li>
                    <li><strong className="text-gray-200">Signature:</strong> Sign at the bottom.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-carbon-800 overflow-hidden bg-carbon-900">
                  <div className="bg-carbon-850 px-4 py-2 flex items-center justify-between border-b border-carbon-800 text-xs">
                    <span className="font-mono text-gray-300 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-brand-brightRed" />
                      <span>230_OPANAF_15_2023-ART-TU-Cluj-Napoca-model.pdf</span>
                    </span>
                    <a
                      href={examplePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-brightRed hover:underline font-mono font-bold flex items-center gap-1"
                    >
                      <span>Open in new tab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="h-80 w-full bg-white relative">
                    <iframe
                      src={`${examplePdfUrl}#toolbar=0&navpanes=0`}
                      title="Formular 230 Filled Example Model"
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-carbon-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveTab('steps')}
                    className="px-4 py-2.5 rounded-lg bg-carbon-900 hover:bg-carbon-800 text-gray-300 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Back to 3 Steps</span>
                  </button>

                  <a
                    href={examplePdfUrl}
                    download="230_ART_TU_Cluj_Napoca_Model.pdf"
                    className="px-4 py-2.5 rounded-lg bg-brand-red hover:bg-brand-brightRed text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Example PDF</span>
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Direct Bank Donation Details */}
          <div className="lg:col-span-5 bg-carbon-850 p-6 sm:p-8 rounded-2xl border border-carbon-750 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                Direct NGO Bank Transfer
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Asociația ART TU Cluj-Napoca
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Contributions directly fund raw composite materials, high-precision machining, sensor packages, and race registration fees.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-750">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                    Bank
                  </span>
                  <span className="font-mono font-bold text-sm text-white">
                    {bank}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-750">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      IBAN (RON)
                    </span>
                    <button
                      onClick={handleCopyIban}
                      className="text-xs text-brand-brightRed hover:text-white flex items-center gap-1 font-mono transition"
                    >
                      {copiedIban ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIban ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <span className="font-mono font-bold text-sm text-white break-all">
                    {iban}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-carbon-900 border border-carbon-750">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      BIC / SWIFT
                    </span>
                    <button
                      onClick={handleCopyBic}
                      className="text-xs text-brand-brightRed hover:text-white flex items-center gap-1 font-mono transition"
                    >
                      {copiedBic ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBic ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <span className="font-mono font-bold text-sm text-white">
                    {bic}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-carbon-750 text-xs text-gray-400 flex items-center justify-between">
              <span>Fiscal NGO registration details available</span>
              <span className="text-brand-brightRed font-mono">100% Student Non-Profit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

