/* ============================================================
   GOOGLE ANALYTICS HOOK
   Tracks page views, events, and user interactions
   ============================================================ */
import { useEffect } from 'react';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

export function useGoogleAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Initialize GA script if not already loaded
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer?.push(args);
      };
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: location,
        anonymize_ip: true,
      });
      window.gtag = gtag;
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location,
      });
    }
  }, [location]);

  // Track custom events
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };

  return { trackEvent };
}
