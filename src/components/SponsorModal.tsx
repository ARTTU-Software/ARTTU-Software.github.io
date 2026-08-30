import React from 'react';
import { X, Download } from 'lucide-react';

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SponsorModal: React.FC<SponsorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-warm-250 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-warm-100 text-warm-600 hover:text-warm-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest font-bold block mb-1">
            Partnership Opportunities 2026
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-900 uppercase">
            PARTNER WITH ART TU
          </h2>
          <p className="text-sm text-warm-700 mt-1 leading-relaxed">
            Join forces with Romania's premier electric formula student team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-warm-50 border border-warm-200">
            <span className="text-brand-red font-mono font-bold text-sm block">01. Talent</span>
            <span className="text-xs text-warm-700 mt-0.5 block leading-relaxed">Direct recruitment pipeline to top engineering graduates</span>
          </div>
          <div className="p-4 rounded-2xl bg-warm-50 border border-warm-200">
            <span className="text-brand-red font-mono font-bold text-sm block">02. Exposure</span>
            <span className="text-xs text-warm-700 mt-0.5 block leading-relaxed">Livery logo placement at Hockenheim and European circuits</span>
          </div>
          <div className="p-4 rounded-2xl bg-warm-50 border border-warm-200">
            <span className="text-brand-red font-mono font-bold text-sm block">03. Innovation</span>
            <span className="text-xs text-warm-700 mt-0.5 block leading-relaxed">Joint R&D, media stories and corporate branding</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-warm-50 border border-warm-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display font-bold text-warm-900 text-sm block">Sponsorship One-Pager 2026 (PDF)</span>
            <span className="text-xs text-warm-600">Complete tier pricing, car livery specs and partner benefits</span>
          </div>
          <a
            href="mailto:arttu.contact@gmail.com?subject=Sponsorship%20One-Pager%20Request%202026"
            className="px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Request One-Pager</span>
          </a>
        </div>

        <div className="text-center text-xs text-warm-600">
          Or reach our project management team directly at <a href="mailto:arttu.contact@gmail.com" className="text-brand-red font-semibold underline">arttu.contact@gmail.com</a>
        </div>

      </div>
    </div>
  );
};
