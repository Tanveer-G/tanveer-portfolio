import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanveer H. — Frontend-focused Full Stack Developer",
  description:
    "3+ years building production apps with React, Next.js, and TypeScript. Scalable architecture, clean code, performance.",
  keywords: [
    "frontend developer",
    "full stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tanveer",
  ],
  authors: [{ name: "Tanveer H." }],
  creator: "Tanveer H.",
  openGraph: {
    title: "Tanveer H. — Frontend-focused Full Stack Developer",
    description:
      "3+ years building production apps with React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanveer H. — Full Stack Developer",
    description:
      "3+ years building fast, reactive web apps with React, Next.js, TypeScript.",
  },
  images: ['/projects/og.webp'],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body>
        {children}
        {/* Vercel Analytics */}
        <Analytics />

        {/* Google Analytics (only if env exists) */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}

      </body>
    </html>
  );
}
