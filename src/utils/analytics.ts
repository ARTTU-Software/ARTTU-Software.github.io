/**
 * Google Analytics 4 (GA4) Tracking Utility
 * Measurement ID: G-KHE03ZX88V
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-KHE03ZX88V';

/**
 * Tracks a page view in Google Analytics
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: url,
    });
  }
}

/**
 * Tracks a custom event in Google Analytics
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}
