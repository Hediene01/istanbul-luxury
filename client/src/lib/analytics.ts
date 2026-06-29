/* ============================================================
   ANALYTICS UTILITY
   Helper functions for tracking events
   ============================================================ */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event (e.g., 'reservation_clicked')
 * @param eventParams - Additional parameters (e.g., { value: 100 })
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page view
 * @param pagePath - Path of the page (e.g., '/menu')
 * @param pageTitle - Title of the page
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track reservation attempt
 */
export const trackReservationClick = () => {
  trackEvent('reservation_click', {
    event_category: 'engagement',
    event_label: 'reserve_button',
  });
};

/**
 * Track menu exploration
 */
export const trackMenuExplore = () => {
  trackEvent('menu_explore', {
    event_category: 'engagement',
    event_label: 'menu_button',
  });
};

/**
 * Track gallery view
 */
export const trackGalleryView = () => {
  trackEvent('gallery_view', {
    event_category: 'engagement',
    event_label: 'gallery_section',
  });
};

/**
 * Track coffee section view
 */
export const trackCoffeeView = () => {
  trackEvent('coffee_view', {
    event_category: 'engagement',
    event_label: 'coffee_section',
  });
};

/**
 * Track contact/location click
 */
export const trackContactClick = () => {
  trackEvent('contact_click', {
    event_category: 'engagement',
    event_label: 'contact_section',
  });
};

/**
 * Track form submission
 * @param formName - Name of the form (e.g., 'reservation')
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
  });
};

/**
 * Track scroll depth
 * @param depth - Percentage of page scrolled (0-100)
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_value: depth,
  });
};
