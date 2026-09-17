import React from 'react';
import { ArtTuLogo } from './ArtTuLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-200/70 border-t border-warm-250 py-10 text-xs text-warm-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        <div className="flex items-center gap-2.5">
          <ArtTuLogo variant="light" className="h-6 w-auto" />
          <span className="text-warm-900 font-display font-extrabold tracking-tight uppercase">
            ART<span className="text-brand-red">TU</span> <span className="font-mono text-[10px] text-warm-500 font-bold ml-1 tracking-widest">CLUJ-NAPOCA</span>
          </span>
        </div>

        <div>
          Copyright © 2026 Asociația ART TU Cluj-Napoca / UTCN Formula Student Team.
        </div>

        <div className="flex items-center gap-1 text-warm-500">
          <span>Engineered with passion in Cluj-Napoca</span>
        </div>

      </div>
    </footer>
  );
};


