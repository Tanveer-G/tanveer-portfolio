// Define allowed internal paths (centralize as your app grows)
export type InternalPath = '/' | '/about' | '/work' | '/experience' | '/contact' | '/services';

interface UtmOptions {
  source?: string;
  medium?: string;
  campaign: string;
}

/**
 * Append UTM parameters to an internal Next.js link.
 * By default, source is 'portfolio' to identify this site as the referrer.
 * Use medium to describe the placement: 'internal-nav', 'hero', 'sidebar', 'footer', etc.
 * Campaign should describe the specific link purpose.
 */
export function withUtmInternal<P extends InternalPath>(
  path: P,
  { source = 'portfolio', medium = 'internal-nav', campaign }: UtmOptions
): { pathname: P; query: Record<string, string> } {
  return {
    pathname: path,
    query: {
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    },
  };
}

/**
 * Append UTM parameters to an external URL.
 * For external links from the portfolio, source is 'portfolio' by default.
 * Medium should reflect the context: 'sidebar', 'hero', 'content', etc.
 * Campaign identifies the specific destination/action.
 */
export function withUtmExternal(
  baseUrl: string,
  { source = 'portfolio', medium = 'referral', campaign }: UtmOptions
): string {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}