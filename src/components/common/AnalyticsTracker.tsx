import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../utils/analytics';

const PAGE_TITLES: Record<string, string> = {
  '/': 'ART TU Cluj-Napoca | Formula Student Team',
  '/car': 'The Car (ART-24) | ART TU Formula Student',
  '/events': 'Events & Rollouts | ART TU Formula Student',
  '/competitions': 'Competitions & Glory | ART TU Formula Student',
  '/history': 'Competitions & Glory | ART TU Formula Student',
  '/history/team': 'Team History & Milestones | ART TU Formula Student',
  '/team-history': 'Team History & Milestones | ART TU Formula Student',
  '/departments': 'Engineering & Operations Departments | ART TU Formula Student',
  '/recruitment': 'Recruitment & Join Us | ART TU Formula Student',
  '/join': 'Recruitment & Join Us | ART TU Formula Student',
  '/join-us': 'Recruitment & Join Us | ART TU Formula Student',
  '/partners': 'Partners & Sponsors | ART TU Formula Student',
  '/sponsors': 'Partners & Sponsors | ART TU Formula Student',
  '/sponsorship': 'Partners & Sponsors | ART TU Formula Student',
  '/support': 'Support & Formular 230 | ART TU Formula Student',
  '/support/notice': 'Support Form Notice | ART TU Formula Student',
  '/support/form': 'Support Form Notice | ART TU Formula Student',
  '/support/formular-230': 'Support Form Notice | ART TU Formula Student',
  '/contact': 'Contact & Workshop | ART TU Formula Student',
};

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.search + location.hash;
    const pageTitle = PAGE_TITLES[location.pathname] || 'ART TU Cluj-Napoca | Formula Student Team';
    
    document.title = pageTitle;
    trackPageView(fullPath, pageTitle);
  }, [location]);

  return null;
}
