import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/src/i18n/routing';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import Header from '@/src/components/Header';
import './globals.css';
import '@/src/styles/theme.css';
import '@/src/styles/typo.css'


import { Space_Grotesk, Inter } from 'next/font/google';

// Space Grotesk for headings (only bold weight)
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['600', '700'], // Only bold weight for headings
});

// Inter for body text (normal and medium weights)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'], // Normal and medium weights for body text
});

// export const metadata: Metadata = {
//   title: 'Tanveer H. | Frontend Developer Portfolio | Tanveer new portfolio',
//   description:
//     "I'm a Front-end Developer specializing in React & Next.js with SEO-friendly, responsive UI/UX designs, and captivating CSS3 Animation. Explore my portfolio!",
//   keywords:
//     'Frontend Developer, React Developer, Next.js Expert, CSS3 Animation, Tailwind CSS, Bangalore, Hyderabad, India',
// };
 
type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;
  

if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  // Receive messages provided in the request configuration
  const messages = await getMessages();
  return (
    <html lang={locale ?? "en-us"} dir={locale === 'ar-SA' ? 'rtl' : 'ltr'}>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} h-auto w-full overflow-x-hidden antialiased`}
      >
        {/* Wrapper */}
        <div
          className={`mx-auto flex h-auto w-full max-w-7xl flex-col items-center justify-center overflow-x-hidden px-4 md:px-8 lg:px-10 xl:px-20`}
         style={{
        background: "radial-gradient(50.71% 76.04% at 53.11% 57.58%, rgba(41, 84, 163, 0.2) 2.06%, rgba(41, 84, 163, 0) 100%)"
      }}
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {/* content-Wrapper */}
            <main className="px-0 md:px-10 lg:px-12">{children}</main>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
