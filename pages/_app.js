import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import SliderTransition from "@/components/SliderTransition";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <SliderTransition/>
          <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
    </Layout>
  );
};

export default appWithTranslation(MyApp); // HOC wrap full aplication

// The appWithTranslation HOC is primarily responsible for adding a I18nextProvider.
