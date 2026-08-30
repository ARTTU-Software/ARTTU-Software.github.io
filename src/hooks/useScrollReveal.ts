import { useEffect, useRef, useState, useCallback } from 'react';
import { useIntro } from '../context/IntroContext';

export interface UseScrollRevealOptions {
  /**
   * Intersection threshold (0.0 to 1.0) indicating percentage of element visibility before triggering.
   * @default 0.01
   */
  threshold?: number;
  /**
   * Margin around the root. Positive values expand the trigger area before entering viewport.
   * @default '60px 0px 60px 0px'
   */
  rootMargin?: string;
  /**
   * Whether the animation should trigger only once when entering viewport.
   * @default true
   */
  triggerOnce?: boolean;
  /**
   * Optional extra delay in milliseconds before setting isVisible to true once triggered.
   * @default 0
   */
  delay?: number;
  /**
   * Disable the reveal behavior completely (immediately visible).
   * @default false
   */
  disabled?: boolean;
}

/**
 * Robust, GPU-accelerated IntersectionObserver hook for viewport scroll reveals.
 * Features instant initial mount detection so above-the-fold content is never hidden.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const {
    threshold = 0.01,
    rootMargin = '60px 0px 60px 0px',
    triggerOnce = true,
    delay = 0,
    disabled = false,
  } = options;

  const { isIntroComplete } = useIntro();
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);
  const timeoutIdRef = useRef<number | null>(null);

  const triggerReveal = useCallback(() => {
    if (hasTriggeredRef.current && triggerOnce) return;
    hasTriggeredRef.current = true;

    if (delay > 0) {
      timeoutIdRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  }, [delay, triggerOnce]);

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      hasTriggeredRef.current = true;
      return;
    }

    // Wait until startup intro is complete before starting animations
    if (!isIntroComplete) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (hasTriggeredRef.current && triggerOnce) {
      setIsVisible(true);
      return;
    }

    // 1. Instant Synchronous + RAF Check for items already in viewport on mount
    const checkInitialVisibility = () => {
      if (!ref.current || hasTriggeredRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // If element is anywhere in viewport or within 120px buffer
      if (rect.top < vh + 120 && rect.bottom > -60) {
        triggerReveal();
      }
    };

    // Run check immediately and on next paint
    checkInitialVisibility();
    const rafId = requestAnimationFrame(checkInitialVisibility);

    // 2. Setup IntersectionObserver
    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
            triggerReveal();
            if (triggerOnce && observer) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            if (timeoutIdRef.current) {
              clearTimeout(timeoutIdRef.current);
            }
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(node);
    } catch {
      // Fallback if IntersectionObserver fails
      triggerReveal();
    }

    // 3. Fallback safety timer: Never let content stay permanently invisible
    const safetyTimer = setTimeout(() => {
      if (!hasTriggeredRef.current) {
        checkInitialVisibility();
      }
    }, 350);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(safetyTimer);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, disabled, triggerReveal, isIntroComplete]);

  return { ref, isVisible };
}

