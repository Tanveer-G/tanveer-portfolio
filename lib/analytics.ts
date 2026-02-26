import { track as vercelTrack } from '@vercel/analytics';

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
};

/**
 * Infer the second parameter type accepted by vercelTrack.
 * This avoids importing internal types from the package.
 */
type VercelTrackProps =
  Parameters<typeof vercelTrack> extends [any, infer P]
    ? P
    : Record<string, any>;

/**
 * ============================================
 * Main Tracking Function
 * ============================================
 */

export function trackEvent<K extends keyof AnalyticsEventMap>(
  name: K,
  props: AnalyticsEventMap[K]
): void {
  try {
    if (!shouldSample()) return;

    if (typeof vercelTrack === 'function') {
      vercelTrack(
        name as string,
        props as unknown as VercelTrackProps
      );
      return;
    }

    // Dev fallback
    // if (process.env.NODE_ENV !== 'production') {
        console.debug('[trackEvent fallback]', name, props);
    // }
  } catch (error) {
    // Analytics should NEVER break the app
    console.warn('trackEvent error:', error);
  }
}