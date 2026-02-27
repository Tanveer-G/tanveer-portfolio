/**
 * ============================================
 * Analytics Configuration
 * ============================================
 * Set NEXT_PUBLIC_ANALYTICS_SAMPLE_RATE in .env
 * Example:
 * NEXT_PUBLIC_ANALYTICS_SAMPLE_RATE=1     // 100%
 * NEXT_PUBLIC_ANALYTICS_SAMPLE_RATE=0.5   // 50%
 */

const SAMPLE_RATE = Number(
  process.env.NEXT_PUBLIC_ANALYTICS_SAMPLE_RATE ?? '1'
);

function shouldSample(): boolean {
  if (SAMPLE_RATE >= 1) return true;
  if (SAMPLE_RATE <= 0) return false;
  return Math.random() < SAMPLE_RATE;
}

/**
 * ============================================
 * Typed Event Map (Single Source of Truth)
 * ============================================
 * Add ALL allowed analytics events here.
 */
export type AnalyticsEventMap = {
  // Project card impression (visible >= 400ms)
  project_impression: {
    projectId: string;
    visibleForMs: number;
  };

  // Clicks on project card actions
  project_interaction: {
    projectId: string;
    action: 'video' | 'live' | 'github';
    location?: string;
    href?: string;
  };

  // Video lifecycle
  video_open: {
    projectId: string | number;
    title: string;
  };

  video_play: {
    projectId: string | number;
    currentTime: number;
    duration: number;
  };

  video_pause: {
    projectId: string | number;
    currentTime: number;
    duration: number;
  };

  video_progress: {
    projectId: string | number;
    threshold: number;
    percent: number;
    currentTime: number;
    duration: number;
  };

  video_complete: {
    projectId: string | number;
    duration: number;
    watchedMs: number;
  };

  video_close: {
    projectId: string | number;
    watchedPct?: number;
    currentTime?: number;
    duration?: number;
    watchedMs?: number;
  };

  video_error: {
    projectId: string | number;
  };

   social_click: {
    platform: 'linkedin' | 'github' | 'contact';
    url: string;
    location: 'sidebar';
  };

   hero_click: {
    button: 'work' | 'contact';
    url: string;
  };

  nav_click: {
    item: 'work' | 'experience' | 'about' | 'hire'; // 'hire' for the Hire Me button
    url: string;
  };

  mobile_menu_click: {
    item: 'work' | 'about' | 'services' | 'contact' | 'hire';
    url: string;
  };

  // Mobile menu close
  mobile_menu_close: Record<string, never>;

   // Contact form events
  contact_form_attempt: Record<string, never>;
  contact_form_success: Record<string, never>;
  contact_form_error: {
    reason: 'validation' | 'api_error' | 'network' | 'brevo_api' | 'server_config' | 'server_exception';
  };


};

/**
 * ============================================
 * Main Tracking Function
 * ============================================
 * Sends event to our internal API endpoint.
 */
export async function trackEvent<K extends keyof AnalyticsEventMap>(
  name: K,
  props: AnalyticsEventMap[K]
): Promise<void> {
  try {
    if (!shouldSample()) return;

    // In development, log events for debugging
    if (process.env.NODE_ENV === 'development') {
      console.debug('[trackEvent]', name, props);
      // Optional: still send in dev if you want to test
      // return; // Uncomment to disable sending in dev
    }

    // Use sendBeacon if available for page unload events, otherwise fallback to fetch
    const payload = JSON.stringify({ name, props });
    const url = '/api/analytics';

    if (navigator?.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon(url, blob);
    } else {
      // For modern browsers, fetch with keepalive ensures the request completes
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true, // Important for events during page unload
      }).catch(() => {
        // Silently fail – analytics never blocks the app
      });
    }
  } catch (error) {
    // Analytics should NEVER break the app
    console.warn('trackEvent error:', error);
  }
}



export function trackHeroClick(button: 'work' | 'contact') {
  trackEvent('hero_click', { button, url: `/${button}` });
}

export function trackSocialClick(
  platform: 'linkedin' | 'github' | 'contact',
  url: string,
  location: 'sidebar' = 'sidebar'
) {
  trackEvent('social_click', { platform, url, location });
}

export function trackNavClick(item: 'work' | 'experience' | 'about' | 'hire', url: string) {
  trackEvent('nav_click', { item, url });
}

export function trackMobileMenuClick(item: 'work' | 'about' | 'services' | 'contact' | 'hire', url: string) {
  trackEvent('mobile_menu_click', { item, url });
}

export function trackMobileMenuClose() {
  trackEvent('mobile_menu_close', {});
}