import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import WorkSlider from "@/components/WorkSlider";
import Bulb from "../../components/Bulb";
import style from "@/styles/CommonSliderStyles.module.css";

const Work = () => {
  const { t: t } = useTranslation("work");
  const { t: commonT } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("workTitle")}
        description={t("workDescription")}
        openGraph={{
          title: t("workTitle"),
          description: t("workDescription"),
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

      <div className={style.outerLayer}>
        <div className={style.containerMiddle}>
          <div className={style.textSliderBox}>
            {/* text */}
            <div className={style.textBox}>
              <motion.h2
                className={`${style.heading} ${style.headingMarginTop3rem}`}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {t("workHeading")}
                <span className="text-accent">{t("workRedDot")}</span>
              </motion.h2>

              <motion.p
                className={style.para}
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {t("myWorkParagraph")}
              </motion.p>
            </div>

            <motion.div
              className={style.sliderBox}
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* slider */}
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Work;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "work"])),
      // Will be passed to the page component as props
    },
  };
}
