import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures the window scrolls to the top instantly on every route change
 * and dispatches layout events so all scroll reveals trigger seamlessly.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Dispatch scroll & resize events to ensure IntersectionObservers update
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
