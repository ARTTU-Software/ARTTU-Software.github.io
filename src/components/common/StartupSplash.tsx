import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ArtTuLogo } from '../ArtTuLogo';
import { useIntro } from '../../context/IntroContext';

interface StartupSplashProps {
  /** Optional callback fired when splash finishes exit animation */
  onComplete?: () => void;
}

export const StartupSplash: React.FC<StartupSplashProps> = ({
  onComplete,
}) => {
  const { isIntroComplete, completeIntro, setSplashFullyDone, replayIntro } = useIntro();
  const [bgVisible, setBgVisible] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoScale, setLogoScale] = useState(1.18);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const timersRef = useRef<number[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  };

  const handleDismiss = useCallback(() => {
    clearAllTimers();
    setBgVisible(false);
    setIsExiting(true);
    setLogoOpacity(0);
    completeIntro();
    const t = window.setTimeout(() => {
      setIsMounted(false);
      setSplashFullyDone();
      onComplete?.();
    }, 700);
    timersRef.current.push(t);
  }, [completeIntro, setSplashFullyDone, onComplete]);

  // Listen for custom trigger to replay animation
  useEffect(() => {
    const handleReplay = () => {
      clearAllTimers();
      setBgVisible(true);
      setLogoOpacity(0);
      setLogoScale(1.18);
      setIsExiting(false);
      setIsMounted(true);
      replayIntro();
    };

    window.addEventListener('arttu:launch-splash', handleReplay);
    return () => window.removeEventListener('arttu:launch-splash', handleReplay);
  }, [replayIntro]);

  useEffect(() => {
    if (isIntroComplete && !isMounted) return;

    // Reset initial states
    setIsMounted(true);
    setBgVisible(true);
    setLogoOpacity(0);
    setLogoScale(1.18);
    setIsExiting(false);

    // Step 1: Initial scale-down entrance from scale 1.18 -> 1.0 (settles cleanly)
    const t0 = window.setTimeout(() => {
      setLogoOpacity(1);
      setLogoScale(1.0);
    }, 30);

    // Step 2: At 550ms, white background begins slow, gradual 1200ms fade out
    const t1 = window.setTimeout(() => {
      setBgVisible(false);
      completeIntro(); // Website and video start playing under the lingering logo
    }, 550);

    // Step 3: At 1100ms (delayed from white), logo begins slow, gradual opacity dissolve ONLY (scale stays strictly locked at 1.0)
    const t2 = window.setTimeout(() => {
      setIsExiting(true);
      setLogoOpacity(0);
    }, 1100);

    // Step 4: At 2100ms, splash cleanly unmounts
    const t3 = window.setTimeout(() => {
      setIsMounted(false);
      setSplashFullyDone();
      onComplete?.();
    }, 2100);

    timersRef.current.push(t0, t1, t2, t3);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearAllTimers();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isIntroComplete, handleDismiss, completeIntro, setSplashFullyDone, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex items-center justify-center select-none ${
        bgVisible ? 'cursor-pointer pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-label="Startup Screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Layer 1: Warm White Backdrop - Slower 1200ms gradual fade out */}
      <div
        className="absolute inset-0 bg-[#faf8f5] pointer-events-none"
        style={{
          opacity: bgVisible ? 1 : 0,
          transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'opacity',
        }}
      >
        {/* Soft subtle warm red ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-red/8 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Layer 2: Lingering Logo - Initial scale-down entrance, then static scale with pure gradual opacity dissolve */}
      <div
        className="relative z-10 flex items-center justify-center p-8 pointer-events-none"
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          transition: isExiting
            ? 'opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'opacity 450ms ease-out, transform 650ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'opacity, transform',
        }}
      >
        <ArtTuLogo
          variant="original"
          className="h-36 sm:h-48 md:h-56 lg:h-64 w-auto drop-shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
        />
      </div>
    </div>
  );
};

export default StartupSplash;




