import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import style from "@/styles/CommonSliderStyles.module.css";

const Services = () => {
  const { t: t } = useTranslation("services");
  const { t: commonT } = useTranslation("common");

  return (
    <>
      <NextSeo
        title={t("servicesTitle")}
        description={t("servicesDescription")}
        openGraph={{
          title: t("servicesTitle"),
          description: t("servicesDescription"),
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
                className={`${style.heading} ${style.headingMarginTop2rem}`}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {t("servicesHeading")}
                <span className="text-accent">{t("servicesRedDot")}</span>
              </motion.h2>
              <motion.p
                className={style.para}
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {t("servicesParagraph")}
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
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "services"])),
    },
  };
}
