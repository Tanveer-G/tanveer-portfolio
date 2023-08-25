import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import TestimonialSlider from "@/components/TestimonialSlider";
import style from "@/styles/Testimonial.module.css";

const Testimonials = () => {
  const { t: t } = useTranslation("testimonials");
  const { t: commonT } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("testimonialTitle")}
        description={t("testimonialDescription")}
        openGraph={{
          title: t("testimonialTitle"),
          description: t("testimonialDescription"),
          images: [
            {
              url: "/og.png",
              width: 1200,
              height: 630,
              alt: commonT("appName"),
            },
          ],
        }}
        additionalMetaTags={[
          { name: "keywords", content: t("additionalMetaData") },
          {
            name: "location",
            content: `${commonT("capitalCity")} | ${commonT(
              "techCitiesName"
            )} | ${commonT("currentCountryName")}`,
          },
          { name: "author", content: commonT("authorName") },
        ]}
      />

      <div className={style.testimonial}>
        <div className={style.containerMiddle}>
          {/* title */}
          <motion.h2
            className={style.heading}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {t("testimonialHeading")}
            <span className="text-accent"> {t("say")}</span>
          </motion.h2>
          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "testimonials"])),
      // Will be passed to the page component as props
    },
  };
}
