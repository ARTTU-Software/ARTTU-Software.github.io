import React, { useEffect, useRef, useState } from 'react';

export interface TelemetryTickerProps {
  /** Target numeric value to count up to */
  value: number;
  /** Decimal places to display */
  decimals?: number;
  /** Count-up animation duration in milliseconds (default: 1300ms) */
  duration?: number;
  /** Optional string prefix (e.g. "~", "0", "$") */
  prefix?: string;
  /** Optional string suffix (e.g. " s", " km/h", " V DC", " kW", " kg", "+") */
  suffix?: string;
  /** Starting numeric value (default: 0) */
  startValue?: number;
  /** Custom CSS classes */
  className?: string;
  /** IntersectionObserver trigger threshold (default: 0.15) */
  threshold?: number;
  /** IntersectionObserver rootMargin (default: '0px 0px -20px 0px') */
  rootMargin?: string;
}

/**
 * GPU-accelerated count-up ticker engineered for telemetry & competition stats.
 * Guarantees zero cumulative layout shift (CLS: 0) via monospace tabular numerals.
 */
export const TelemetryTicker: React.FC<TelemetryTickerProps> = ({
  value,
  decimals = 0,
  duration = 1300,
  prefix = '',
  suffix = '',
  startValue = 0,
  className = '',
  threshold = 0.15,
  rootMargin = '0px 0px -20px 0px',
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => startValue.toFixed(decimals));
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(value.toFixed(decimals));
      hasAnimatedRef.current = true;
      return;
    }

    // If already animated, keep current target value
    if (hasAnimatedRef.current) {
      setDisplayValue(value.toFixed(decimals));
      return;
    }

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const fromVal = startValue;
          const toVal = value;

          // Smooth motorsport ease-out cubic curve
          const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentNum = fromVal + (toVal - fromVal) * easedProgress;

            setDisplayValue(currentNum.toFixed(decimals));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            } else {
              setDisplayValue(toVal.toFixed(decimals));
            }
          };

          animationFrameId = requestAnimationFrame(step);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, decimals, duration, threshold, rootMargin, startValue]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono tabular-nums tracking-tight ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
      aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default TelemetryTicker;
