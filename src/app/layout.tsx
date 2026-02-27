import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Analytics />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      {children}
      <Script
        defer
        data-domain="tanveer-portfolio.vercel.app"
        src="https://getanalyzr.vercel.app/tracking-script.js"
      />
    </>
  );
}
