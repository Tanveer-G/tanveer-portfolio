import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ParticlesContainer from "@/components/ParticlesContainer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn } from "@/variants";
import style from "@/styles/Home.module.css";
import HomeButtons from "@/components/HomeButtons";

export default function Home() {
  const router = useRouter();
  const { t: t } = useTranslation("home");
  const { t: commonT } = useTranslation("common");
  return (
    <>
      {/* meta data in head */}

      <NextSeo
        title={t("homeTitle")}
        description={t("homeDescription")}
        openGraph={{
          title: t("homeTitle"),
          description: t("homeDescription"),
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
            content: `${commonT("capitalCity")} | ${commonT("techCitiesName")} | ${commonT("currentCountryName")}`,
          },
          { name: "author", content: commonT("authorName") },
        ]}
      />

      <main className={style.home}>
        {/* text */}
        <div className={style.homeText}>
          <div className={style.homeMiddleBox}>
            <span
              className={`${style.welcomeLine} 
        ${router.locale === "ar-SA" && style.rightTOLeftWelcomeLine}
        `}
            >
              {t("welcomeLine")}
            </span>

            <h1
              className={`${style.heading} ${
                router.locale === "ar-SA" && style.rightTOLeft
              }`}
            >
              {t("greetings")}
              <span className={style.myName}> {t("myName")} </span>
              <br />
              {t("myAdjectives")}
              <br />
              <span className={style.myName}>
                <Typewriter
                  options={{
                    strings: [
                      t("myProfessionFD"),
                      t("myProfessionSD"),
                      t("myProfessionED"),
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p
              className={`${style.para} ${
                router.locale === "ar-SA" && style.rightTOLeft
              }`}
            >
              {t("myIntroPara")}
              <br />
              <br /> <i>{t("inviteLine")}</i>
            </p>

            <motion.div
              className={style.btns}
              key="hireMeResumeTwobuttons"
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <HomeButtons />
            </motion.div>
          </div>
        </div>

        {/* Right Section Images TS-Particles */}
        <section className={style.rightPartContainer}>
          {/* bg image */}
          <ParticlesContainer />
          {/* My Photo or Avtar*/}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}

// The serverSideTranslations HOC is primarily responsible
// for passing translations and configuration options into pages,
// as props – you need to add it to any page that has translations.
