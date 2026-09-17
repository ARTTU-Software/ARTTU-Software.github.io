import React from 'react';
import { X, ExternalLink, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const GOOGLE_FORMS_URL = "https://forms.google.com/";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-warm-250 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-warm-100 text-warm-600 hover:text-warm-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono uppercase font-bold mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Recruitments Active</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-900 uppercase">
            JOIN ART TU FORMULA STUDENT
          </h2>
          <p className="text-sm text-warm-700 mt-1 leading-relaxed">
            Open to all students of the Technical University of Cluj-Napoca (bachelor's and master's programs).
          </p>
        </div>

        {/* 4 Steps timeline */}
        <div className="space-y-2.5 mb-6 bg-warm-50 p-4.5 rounded-2xl border border-warm-200 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-brand-red text-white flex items-center justify-center font-mono font-bold shadow-sm">1</span>
            <span className="text-warm-800 font-medium">Fill in the online Google Form application & provide your CV</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-white text-warm-700 border border-warm-300 flex items-center justify-center font-mono font-bold">2</span>
            <span className="text-warm-600">Application and CV review by department leads</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-white text-warm-700 border border-warm-300 flex items-center justify-center font-mono font-bold">3</span>
            <span className="text-warm-600">Technical interview and workshop discussion</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono font-bold shadow-sm">4</span>
            <span className="text-warm-600">Induction and hands-on onboarding into the team</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 to-warm-50 border border-brand-red/20 mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-red font-bold uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Official Candidate Portal</span>
          </div>
          <p className="text-xs text-warm-700 leading-relaxed">
            All applications are managed through our official Google Form. Click below to submit your details, provide your CV, and join our team.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-warm-600 font-semibold pt-1">
            <span className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> All UTCN faculties
            </span>
            <span className="flex items-center gap-1 text-warm-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> No experience needed
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-700 text-xs font-bold uppercase tracking-wider transition"
          >
            Close
          </button>
          <a
            href={GOOGLE_FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-brand-red hover:bg-brand-darkRed text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-red/25 transition flex items-center gap-1.5"
          >
            <span>Open Application Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
