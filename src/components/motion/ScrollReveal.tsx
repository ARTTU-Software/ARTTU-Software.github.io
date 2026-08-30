import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /**
   * Direction of the entrance animation.
   * - 'up': Slides upwards from bottom (default)
   * - 'down': Slides downwards from top
   * - 'left': Slides in from left to right
   * - 'right': Slides in from right to left
   * - 'scale': Zooms in smoothly from 94% scale
   * - 'fade': Simple smooth opacity transition without translation
   * @default 'up'
   */
  direction?: RevealDirection;
  /**
   * Transition delay in milliseconds.
   * Useful for staggered grids (e.g. index * 80).
   * @default 0
   */
  delay?: number;
  /**
   * Transition duration in milliseconds.
   * @default 650
   */
  duration?: number;
  /**
   * Translation distance in pixels for directional slides.
   * @default 30
   */
  distance?: number;
  /**
   * Intersection threshold (0.0 to 1.0) before triggering.
   * @default 0.12
   */
  threshold?: number;
  /**
   * Root margin for IntersectionObserver.
   * @default '0px 0px -40px 0px'
   */
  rootMargin?: string;
  /**
   * Whether to animate only once when entering viewport.
   * @default true
   */
  triggerOnce?: boolean;
  /**
   * HTML element tag to render as.
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Additional custom CSS classes.
   */
  className?: string;
  /**
   * Optional custom inline styles.
   */
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  distance = 30,
  threshold = 0.01,
  rootMargin = '60px 0px 60px 0px',
  triggerOnce = true,
  as: Component = 'div',
  className = '',
  style = {},
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getInitialTransform = (dir: RevealDirection, dist: number): string => {
    switch (dir) {
      case 'up':
        return `translate3d(0, ${dist}px, 0)`;
      case 'down':
        return `translate3d(0, -${dist}px, 0)`;
      case 'left':
        return `translate3d(-${dist}px, 0, 0)`;
      case 'right':
        return `translate3d(${dist}px, 0, 0)`;
      case 'scale':
        return 'scale3d(0.94, 0.94, 1)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const transformStyle = isVisible
    ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
    : getInitialTransform(direction, distance);

  const opacityStyle = isVisible ? 1 : 0;

  const combinedStyles: React.CSSProperties = {
    ...style,
    transform: transformStyle,
    opacity: opacityStyle,
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component
      ref={ref}
      className={`transform-gpu ${className}`}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
