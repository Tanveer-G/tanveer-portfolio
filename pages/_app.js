import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";
import Layout from "@/components/Layout";
import SliderTransition from "@/components/SliderTransition";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Script id="googleAnalyticsSRC"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="googleAnalyticsFunction"
      strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <SliderTransition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  );
};

export default appWithTranslation(MyApp); // HOC wrap full aplication

// The appWithTranslation HOC is primarily responsible for adding a I18nextProvider.
