import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowUpRight, Users, Sparkles, Volume2, VolumeX, Film, Image as ImageIcon } from 'lucide-react';
import { marqueeLogos } from '../data/sponsors';
import { heroSlideshowMedia } from '../data/slideshow';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { TelemetryTicker } from '../components/common/TelemetryTicker';

import { useIntro } from '../context/IntroContext';

// Find all video slide indices in the slideshow
const videoIndices = heroSlideshowMedia
  .map((media, idx) => (media.type === 'video' ? idx : -1))
  .filter((idx) => idx !== -1);

export const HomePage: React.FC = () => {
  const { isIntroComplete, isSplashFullyDone } = useIntro();

  // Start with clean main showcase video slide on initial page load / refresh
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isUnmuteFlashing, setIsUnmuteFlashing] = useState(false);
  const [heroEntered, setHeroEntered] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const userUnlockedAudioRef = useRef(false);
  const userManuallyMutedRef = useRef(false);
  const prevIndexRef = useRef(currentIndex);

  // Synchronized Hero Entrance Animation (waits for reload intro splash if active, or triggers smoothly on route enter)
  useEffect(() => {
    if (!isIntroComplete) {
      setHeroEntered(false);
      return;
    }

    const timer = setTimeout(() => {
      setHeroEntered(true);
    }, 120);

    return () => clearTimeout(timer);
  }, [isIntroComplete]);

  const currentMedia = heroSlideshowMedia[currentIndex];

  // Helper to safely ramp volume without stalling mobile WebKit
  const rampVolumeIn = useCallback((video: HTMLVideoElement, targetVol = 1.0) => {
    try {
      video.volume = targetVol;
    } catch {
      // iOS Safari has read-only hardware volume control
    }
  }, []);

  // Global Discrete-Gesture Listener: Auto-unmute on first user touch/tap, scroll gesture, or click
  useEffect(() => {
    let detached = false;
    let isUnmutingInProgress = false;

    const detachListeners = () => {
      if (detached) return;
      detached = true;
      window.removeEventListener('touchstart', handleUserGesture, { capture: true });
      window.removeEventListener('pointerdown', handleUserGesture, { capture: true });
      window.removeEventListener('touchend', handleUserGesture, { capture: true });
      window.removeEventListener('click', handleUserGesture, { capture: true });
      window.removeEventListener('keydown', handleUserGesture, { capture: true });
    };

    const handleUserGesture = (e: Event) => {
      // If the user clicked/tapped directly on the audio toggle button, let toggleAudio handle it exclusively
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[data-audio-toggle="true"]')) {
        return;
      }

      if (userManuallyMutedRef.current || userUnlockedAudioRef.current || isUnmutingInProgress || detached) {
        return;
      }

      const activeVideo = videoRefs.current[currentMedia.id];
      if (!activeVideo) return;

      isUnmutingInProgress = true;

      // Unmute and trigger play() to bind audio output device on mobile & desktop
      activeVideo.muted = false;
      try {
        activeVideo.volume = 1;
      } catch {
        // Safe for iOS Safari hardware-locked volume
      }

      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            userUnlockedAudioRef.current = true;
            setIsMuted(false);
            setIsUnmuteFlashing(false);
            detachListeners();
            isUnmutingInProgress = false;
          })
          .catch(() => {
            // If browser engine refused unmuted state on this frame, keep video playing muted
            activeVideo.muted = true;
            setIsMuted(true);
            activeVideo.play().catch(() => {});
            isUnmutingInProgress = false;
          });
      } else {
        userUnlockedAudioRef.current = true;
        setIsMuted(false);
        setIsUnmuteFlashing(false);
        detachListeners();
        isUnmutingInProgress = false;
      }
    };

    const options = { capture: true, passive: true };
    window.addEventListener('touchstart', handleUserGesture, options);
    window.addEventListener('pointerdown', handleUserGesture, options);
    window.addEventListener('touchend', handleUserGesture, options);
    window.addEventListener('click', handleUserGesture, options);
    window.addEventListener('keydown', handleUserGesture, options);

    return () => {
      detachListeners();
    };
  }, [currentMedia.id]);

  // Flash the unmute button for 5s (+2s) if still muted when website emerges into view
  useEffect(() => {
    if (!isIntroComplete) return;
    if (isMuted && !userUnlockedAudioRef.current) {
      setIsUnmuteFlashing(true);
      const timer = setTimeout(() => {
        setIsUnmuteFlashing(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isIntroComplete, isMuted]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlideshowMedia.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlideshowMedia.length) % heroSlideshowMedia.length);
  }, []);

  // Pause video & audio immediately when switching tabs, minimizing browser, locking phone, or navigating away
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden / minimized / screen locked: PAUSE ALL videos instantly
        Object.values(videoRefs.current).forEach((vid) => {
          if (vid) {
            vid.pause();
          }
        });
      } else {
        // User came back to the tab: resume playback if on a video slide and intro is complete
        if (currentMedia.type === 'video' && isIntroComplete) {
          const activeVideo = videoRefs.current[currentMedia.id];
          if (activeVideo) {
            activeVideo.play().catch(() => {});
          }
        }
      }
    };

    const handlePageHide = () => {
      Object.values(videoRefs.current).forEach((vid) => {
        if (vid) {
          vid.pause();
        }
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [currentMedia.id, currentMedia.type, isIntroComplete]);

  // Clean unmount: stop all media when navigating to other routes (/car, /competitions, etc.)
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((vid) => {
        if (vid) {
          vid.pause();
          vid.muted = true;
        }
      });
    };
  }, []);

  // Handle Video playback ONLY on genuine slide index change or intro complete
  useEffect(() => {
    if (!isIntroComplete) {
      Object.values(videoRefs.current).forEach((vid) => vid?.pause());
      return;
    }

    if (currentMedia.type === 'video') {
      const activeVideo = videoRefs.current[currentMedia.id];
      if (activeVideo) {
        // ONLY reset currentTime if transitioning to a brand new slide
        if (prevIndexRef.current !== currentIndex) {
          activeVideo.currentTime = 0;
          prevIndexRef.current = currentIndex;
        }

        const shouldBeMuted = userManuallyMutedRef.current || !userUnlockedAudioRef.current;
        activeVideo.muted = shouldBeMuted;
        try {
          activeVideo.volume = 1;
        } catch {
          // iOS Safari safe
        }

        const playPromise = activeVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Guarantee video NEVER freezes on mobile if unmuted playback is rejected
            activeVideo.muted = true;
            setIsMuted(true);
            activeVideo.play().catch(() => {});
          });
        }
      }
    } else {
      prevIndexRef.current = currentIndex;
    }

    // Pause all background videos to conserve GPU/battery on mobile
    Object.entries(videoRefs.current).forEach(([id, vid]) => {
      if (id !== currentMedia.id && vid) {
        vid.pause();
      }
    });
  }, [currentIndex, isIntroComplete, currentMedia.id, currentMedia.type]);

  // Handle Photo auto-advance timer only after intro is done
  useEffect(() => {
    if (!isIntroComplete) return;

    if (currentMedia.type === 'image') {
      const timer = setTimeout(() => {
        nextSlide();
      }, currentMedia.duration || 6000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentMedia, nextSlide, isIntroComplete]);

  // Manual sound toggle button handler (works seamlessly on mobile & desktop)
  const toggleAudio = (e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsUnmuteFlashing(false);
    const activeVideo = videoRefs.current[currentMedia.id];
    if (activeVideo) {
      const nextMuted = !activeVideo.muted;
      activeVideo.muted = nextMuted;
      setIsMuted(nextMuted);
      if (nextMuted) {
        userManuallyMutedRef.current = true;
      } else {
        userManuallyMutedRef.current = false;
        userUnlockedAudioRef.current = true;
        rampVolumeIn(activeVideo, 1.0);
        activeVideo.play().catch(() => {
          activeVideo.muted = true;
          setIsMuted(true);
          activeVideo.play().catch(() => {});
        });
      }
    } else {
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <div className="pb-24">
      
      {/* 1. Cinematic Hero Section with Sequential Multi-Media Slideshow */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-carbon-950 isolate">
        
        {/* Background Visual Layer: Stacked Crossfade Slides (Video and Images) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlideshowMedia.map((media, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={media.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {media.type === 'video' ? (
                  <video
                    ref={(el) => (videoRefs.current[media.id] = el)}
                    poster={media.poster}
                    playsInline
                    autoPlay
                    muted={isMuted}
                    preload={isActive ? 'auto' : 'metadata'}
                    onEnded={nextSlide}
                    className="w-full h-full object-cover object-center"
                  >
                    {media.webmSrc && <source src={media.webmSrc} type="video/webm" />}
                    <source src={media.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={media.src}
                    alt={media.title}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                      isActive ? 'scale-100' : 'scale-105'
                    }`}
                  />
                )}
              </div>
            );
          })}

          {/* Top dark gradient vignette for guaranteed navbar legibility */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-15 pointer-events-none"></div>

          {/* Bottom subtle shadow transition to marquee */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent z-15 pointer-events-none"></div>
          
          {/* Subtle cinematic overall film tint */}
          <div className="absolute inset-0 bg-black/10 z-15 pointer-events-none"></div>
        </div>

        {/* Hero Content Container - Natural Cinematic Typography with Multi-Layer Text Shadows */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-6">
          
          <div className="max-w-2xl space-y-6">
            {/* UTCN & Championship Notification Tag */}
            <div
              className="flex justify-start"
              style={{
                opacity: heroEntered ? 1 : 0,
                transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, -22px, 0)',
                transition: 'opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) 60ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) 60ms',
              }}
            >
              <Link
                to="/history"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/30 hover:border-brand-brightRed text-xs font-mono text-white backdrop-blur-sm transition-all duration-300 group shadow-md hover:bg-black/70 hover:scale-102"
              >
                <span className="font-bold text-brand-brightRed">UTCN</span>
                <span className="text-white/40">|</span>
                <span className="font-medium text-white/95">FS BALKANS 2026 CHAMPIONS</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:text-brand-brightRed group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Hero Headline & Welcoming Introduction */}
            <div className="space-y-4">
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.02]">
                <span
                  className="block [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.7)]"
                  style={{
                    opacity: heroEntered ? 1 : 0,
                    transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                    transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 180ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 180ms',
                  }}
                >
                  ART TU
                </span>
                <span
                  className="block text-brand-brightRed [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.7)]"
                  style={{
                    opacity: heroEntered ? 1 : 0,
                    transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                    transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 300ms',
                  }}
                >
                  CLUJ-NAPOCA
                </span>
              </h1>
              <p
                className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.8)]"
                style={{
                  opacity: heroEntered ? 1 : 0,
                  transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 18px, 0)',
                  transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 420ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 420ms',
                }}
              >
                Formula Student • Powered by Porsche Engineering
              </p>
              <p
                className="text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_8px_rgba(0,0,0,0.8)]"
                style={{
                  opacity: heroEntered ? 1 : 0,
                  transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 18px, 0)',
                  transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 520ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 520ms',
                }}
              >
                Designing, building, and racing high-voltage electric single-seaters on Europe's premier circuits. Representing the next generation of Romanian engineering. Powered by Porsche Engineering @ UTCN.
              </p>
            </div>

            {/* Action CTAs */}
            <div
              className="flex flex-wrap items-center gap-3 pt-2"
              style={{
                opacity: heroEntered ? 1 : 0,
                transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
                transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 620ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 620ms',
              }}
            >
              <Link
                to="/car"
                className="px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-red/30 hover:shadow-[0_0_24px_rgba(211,47,47,0.5)] hover:scale-102 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore The Racecar</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/recruitment"
                className="px-6 py-3.5 rounded-lg bg-black/40 hover:bg-black/60 text-white font-bold text-xs uppercase tracking-wider border border-white/30 hover:border-brand-brightRed/60 hover:scale-102 shadow-md backdrop-blur-sm transition-all duration-300 flex items-center gap-2 cursor-pointer group"
              >
                <Users className="w-4 h-4 text-brand-brightRed group-hover:scale-110 transition-transform" />
                <span>Join Team</span>
              </Link>

              <Link
                to="/partners"
                className="px-5 py-3.5 rounded-lg bg-black/40 hover:bg-black/60 text-white font-bold text-xs uppercase tracking-wider border border-white/25 hover:border-white/50 hover:scale-102 shadow-md backdrop-blur-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer group"
              >
                <span>Partner</span>
                <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
          </div>

        </div>

        {/* Side Cycle Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-lg bg-black/45 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 shadow-md items-center justify-center group cursor-pointer"
          aria-label="Previous Slide"
          style={{
            opacity: heroEntered ? 1 : 0,
            transform: heroEntered ? 'translate3d(0, -50%, 0)' : 'translate3d(-24px, -50%, 0)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms, background-color 200ms ease, border-color 200ms ease',
          }}
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-lg bg-black/45 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 shadow-md items-center justify-center group cursor-pointer"
          aria-label="Next Slide"
          style={{
            opacity: heroEntered ? 1 : 0,
            transform: heroEntered ? 'translate3d(0, -50%, 0)' : 'translate3d(24px, -50%, 0)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 700ms, background-color 200ms ease, border-color 200ms ease',
          }}
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Bottom Floating Control Bar (Slideshow Index, Next/Prev, Sound Toggle) */}
        <div
          className="absolute bottom-6 right-6 left-6 sm:left-auto z-40 flex items-center justify-between sm:justify-end gap-2.5"
          style={{
            opacity: heroEntered ? 1 : 0,
            transform: heroEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
            transition: 'opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) 760ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) 760ms',
          }}
        >
          
          {/* Media Info & Pagination Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 text-white backdrop-blur-md border border-white/20 text-xs font-mono shadow-md">
            {currentMedia.type === 'video' ? (
              <Film className="w-3.5 h-3.5 text-brand-brightRed" />
            ) : (
              <ImageIcon className="w-3.5 h-3.5 text-warm-300" />
            )}
            <span className="font-semibold text-white tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(heroSlideshowMedia.length).padStart(2, '0')}
            </span>
          </div>

          {/* Quick Prev / Next Buttons */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 shadow-md">
            <button
              onClick={prevSlide}
              className="p-1 rounded hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-1 rounded hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Audio Control Button (when video is playing) */}
          {currentMedia.type === 'video' && (
            <button
              type="button"
              data-audio-toggle="true"
              onClick={toggleAudio}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 shadow-md touch-manipulation cursor-pointer select-none group ${
                isMuted && isUnmuteFlashing
                  ? 'animate-unmute-flash text-white border-2'
                  : 'bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20'
              }`}
              title={isMuted ? "Click to Unmute" : "Mute Sound"}
            >
              {isMuted ? (
                <>
                  <VolumeX className={`w-4 h-4 ${isUnmuteFlashing ? 'text-white' : 'text-warm-300 group-hover:text-white'}`} />
                  <span className="font-bold tracking-wider uppercase">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-brand-brightRed" />
                  <span className="hidden sm:inline font-semibold">Sound On</span>
                  {/* Real-time audio waveform equalizer graphic indicator */}
                  <span className="flex items-end gap-0.5 h-3 px-0.5" aria-hidden="true">
                    <span className="w-0.5 bg-brand-brightRed rounded-full animate-pulse h-1.5" style={{ animationDuration: '600ms' }} />
                    <span className="w-0.5 bg-brand-brightRed rounded-full animate-pulse h-3" style={{ animationDuration: '800ms', animationDelay: '150ms' }} />
                    <span className="w-0.5 bg-brand-brightRed rounded-full animate-pulse h-2" style={{ animationDuration: '500ms', animationDelay: '300ms' }} />
                  </span>
                </>
              )}
            </button>
          )}

        </div>
      </section>

      {/* 2. Top Partners Infinite Logo Marquee */}
      <ScrollReveal direction="fade" duration={600} as="section" className="overflow-hidden py-5 bg-warm-200/50 border-b border-warm-250 relative z-20">
        <div className="max-w-7xl mx-auto px-4 mb-2.5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-warm-500 font-semibold block text-center">
            Supported by industry leaders & technical partners
          </span>
        </div>
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
          {marqueeLogos.concat(marqueeLogos).map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white hover:bg-warm-50 border border-warm-250 hover:border-warm-350 transition duration-200 group shrink-0 shadow-xs"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-6 max-w-[120px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition duration-200"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Main Page Content Sections */}
      <div className="space-y-16 sm:space-y-24 mt-14 sm:mt-20">

      {/* 3. "Who We Are" Mission & Team Photo Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl border border-warm-250 p-8 sm:p-12 shadow-sm overflow-hidden relative card-hover-glow">
          
          <ScrollReveal direction="left" duration={650} className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block">
              // 01. THE TEAM
            </span>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-warm-900 uppercase tracking-tight">
              STUDENT ENGINEERING. <br />
              INTERNATIONAL MOTORSPORT.
            </h2>

            <p className="text-sm sm:text-base text-warm-700 leading-relaxed">
              Founded in 2019 at the Technical University of Cluj-Napoca, ART TU brings together over 60 dedicated students across mechanical engineering, high-voltage powertrains, embedded electronics, aerodynamics, and business operations.
            </p>

            <p className="text-sm sm:text-base text-warm-700 leading-relaxed">
              Together, we represent UTCN on Europe's most challenging Formula Student tracks, developing practical engineering mastery and competitive teamwork.
            </p>

            {/* Dynamic Telemetry Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2">
              <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                <div className="text-xl sm:text-2xl font-black text-brand-red font-mono">
                  <TelemetryTicker value={60} suffix="+" />
                </div>
                <div className="text-[11px] font-mono text-warm-600 uppercase font-semibold">Engineers</div>
              </div>
              <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                <div className="text-xl sm:text-2xl font-black text-warm-900 font-mono">
                  <TelemetryTicker value={7} suffix=" Yrs" />
                </div>
                <div className="text-[11px] font-mono text-warm-600 uppercase font-semibold">Track Record</div>
              </div>
              <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                <div className="text-xl sm:text-2xl font-black text-warm-900 font-mono">
                  <TelemetryTicker value={6} />
                </div>
                <div className="text-[11px] font-mono text-warm-600 uppercase font-semibold">Departments</div>
              </div>
              <div className="p-3 rounded-xl bg-warm-50 border border-warm-200">
                <div className="text-xl sm:text-2xl font-black text-warm-900 font-mono">
                  <TelemetryTicker value={20} suffix="+" />
                </div>
                <div className="text-[11px] font-mono text-warm-600 uppercase font-semibold">Partners</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/departments"
                className="px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider shadow-sm transition flex items-center gap-1.5"
              >
                <span>Meet All Departments</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/history"
                className="px-5 py-2.5 rounded-lg bg-warm-100 hover:bg-warm-150 text-warm-800 font-bold text-xs uppercase tracking-wider border border-warm-300 transition hover:border-warm-400"
              >
                <span>Our History & Milestones</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={650} className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-warm-250 shadow-sm group">
              <img
                src="/assets/2026_main_photo.webp"
                alt="ART TU Formula Student Full Team Photo"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white bg-warm-900/85 p-2.5 rounded-lg backdrop-blur-sm border border-white/15">
                ART TU Team at Formula Student Germany 2026, Hockenheimring Circuit
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. Curated 3-Card Gateway (Car, History, Recruitment) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block">
            // 02. EXPLORE THE PROJECT
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900 uppercase tracking-tight">
            INSIDE ART TU
          </h2>
          <p className="text-warm-600 text-xs sm:text-sm">
            Performance engineering, high-voltage powertrains, and international motorsport. Explore the team.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: The Racecar */}
          <ScrollReveal direction="up" delay={0} duration={650} className="h-full">
            <Link
              to="/car"
              className="bg-white rounded-2xl border border-warm-250 hover:border-brand-red/50 p-6 flex flex-col justify-between group transition duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full shimmer-hover"
            >
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-5 bg-warm-150 relative">
                  <img
                    src="/assets/IMG_7408.webp"
                    alt="ART TU Electric Single-Seater"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono font-bold text-brand-red border border-warm-200 shadow-xs">
                    200V EV PLATFORM
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-warm-900 mb-2 flex items-center justify-between">
                  <span>The Racecar & Specs</span>
                  <ChevronRight className="w-4 h-4 text-warm-400 group-hover:text-brand-red group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  Engineered in-house at UTCN: <span className="font-semibold text-brand-red">custom high-voltage accumulator</span>, <span className="font-semibold text-warm-900">dual electric drive</span>, carbon aero package, and <span className="font-semibold text-warm-900">real-time CAN telemetry</span>.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-warm-200 flex items-center justify-between text-xs font-mono font-bold text-brand-red">
                <span>Explore Technical Specs</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Card 2: Racing History */}
          <ScrollReveal direction="up" delay={120} duration={650} className="h-full">
            <Link
              to="/history"
              className="bg-white rounded-2xl border border-warm-250 hover:border-brand-red/50 p-6 flex flex-col justify-between group transition duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full shimmer-hover"
            >
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-5 bg-warm-150 relative">
                  <img
                    src="/assets/DBV_FSBK-Day4-428-scaled.webp"
                    alt="Podium Celebration at FS Balkans"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono font-bold text-amber-700 border border-warm-200 shadow-xs">
                    1ST PLACE OVERALL
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-warm-900 mb-2 flex items-center justify-between">
                  <span>Track Record & History</span>
                  <ChevronRight className="w-4 h-4 text-warm-400 group-hover:text-brand-red group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  From our first prototype in 2019 to <span className="font-bold text-emerald-600">P1 overall at FS Balkans</span>, plus <span className="font-semibold text-warm-900">efficiency podiums</span> at Hockenheim and FS Alpe Adria.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-warm-200 flex items-center justify-between text-xs font-mono font-bold text-brand-red">
                <span>View Trophy Case & Archive</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Card 3: Recruitment Hub */}
          <ScrollReveal direction="up" delay={240} duration={650} className="h-full">
            <Link
              to="/recruitment"
              className="bg-white rounded-2xl border border-warm-250 hover:border-brand-red/50 p-6 flex flex-col justify-between group transition duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 h-full shimmer-hover"
            >
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-5 bg-warm-150 relative">
                  <img
                    src="/assets/IMG_8575-1-1-scaled.webp"
                    alt="Student Engineers Workshop"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-mono font-bold text-emerald-700 border border-warm-200 shadow-xs">
                    RECRUITMENT ACTIVE
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-warm-900 mb-2 flex items-center justify-between">
                  <span>Join The Team</span>
                  <ChevronRight className="w-4 h-4 text-warm-400 group-hover:text-brand-red group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  <span className="font-semibold text-emerald-600">Hands-on engineering</span> for UTCN students across mechanical CAD, <span className="font-semibold text-warm-900">high-voltage battery packs</span>, <span className="font-semibold text-warm-900">telemetry firmware</span>, and team operations.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-warm-200 flex items-center justify-between text-xs font-mono font-bold text-brand-red">
                <span>Open Positions & Application</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. Direct Sponsorship Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} duration={650}>
          <div className="bg-gradient-to-r from-red-50 via-warm-50 to-warm-100 p-8 sm:p-10 rounded-2xl border border-brand-red/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm card-hover-glow">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-brand-red uppercase tracking-wider font-bold block">
                // 03. CORPORATE & TECHNICAL PARTNERSHIPS
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-warm-900">
                Partner with Romania's Leading Formula Student Team
              </h2>
              <p className="text-xs sm:text-sm text-warm-700 leading-relaxed">
                Gain racecar livery branding, visibility at international circuits, and recruitment access to top engineering and software graduates from UTCN.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/partners"
                className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-darkRed text-white font-bold text-xs uppercase tracking-wider transition shadow-sm hover:shadow-md hover:scale-102"
              >
                Explore Sponsorship Tiers
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      </div>
    </div>
  );
};

