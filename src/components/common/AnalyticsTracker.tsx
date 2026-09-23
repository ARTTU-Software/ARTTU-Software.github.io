import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../utils/analytics';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/car': 'The Car',
  '/events': 'Events',
  '/competitions': 'Racing History',
  '/history': 'Racing History',
  '/history/team': 'Past Teams & Members',
  '/team-history': 'Past Teams & Members',
  '/departments': 'Departments',
  '/recruitment': 'Join Us',
  '/join': 'Join Us',
  '/join-us': 'Join Us',
  '/partners': 'Sponsors',
  '/sponsors': 'Sponsors',
  '/sponsorship': 'Sponsors',
  '/support': 'Support',
  '/support/notice': 'Support Form',
  '/support/form': 'Support Form',
  '/support/formular-230': 'Support Form',
  '/contact': 'Contact',
};

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
    const pageTitle = PAGE_TITLES[location.pathname] || 'Home';
    
    // Send clean section name strictly to Google Analytics without modifying the browser tab
    trackPageView(fullPath, pageTitle);
  }, [location]);

  return null;
}
