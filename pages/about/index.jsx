import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  // FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiI18Next,
} from "react-icons/si";

import style from "@/styles/About.module.css";

const About = () => {
  const [index, setIndex] = useState(0);
  const { t: t } = useTranslation("about");
  const { t: commonT } = useTranslation("common");


  const aboutData = [
    {
      title: t("skills"),
      info: [
        {
          title: t("webDevelopment"),
          icons: [
            <FaHtml5 key="FaHtml5" />,
            <FaCss3 key="FaCss3" />,
            <FaJs key="FaJs" />,
            <FaReact key="FaReact" />,
            <SiNextdotjs key="SiNextdotjs" />,
            <SiTailwindcss key="SiTailwindcss" />,
            <SiI18Next key="SiI18Next"/>
          ],
        },
        {
          title: t("uiUxDesign"),
          icons: [
            <FaFigma key="FaFigma" />,
            <SiAdobephotoshop key="SiAdobephotoshop" />,
          ],
        },
        {
          title: "Programming Language",
          icons: [
            "C, C++, Java",
          ],
        },
        
      ],
    },
    {
      title: t("credentials"),
      info: [
        {
          title: `${t("computerScienceDegree")} - Aligarh Muslim ${t(
            "university"
          )}, Aligarh - ${t("india")}`,
          stage: "2023",
        },
      ],
    },

    {
      title: t("experience"),
      info: [
        {
          title: "Private Tutor of CBSE & ICSE Board",
          stage: "2019 - 2023",
        },
        {
          title: "Web Development learning & building Projects for self",
          stage: "2022 - 2023",
        },
        {
          title: "DSA - Question Practice on GfG & CodeChef",
          stage: "2021 - 2022",
        },
      ],
    },
    {
      title: t("awards"),
      info: [
        {
          title:
            "Appreciation Certificate & 15000 Rupees - Jahangirabad Institute of Technology Exam",
          stage: "2016",
        },
      ],
    },
  ];
  return (
    <>
       <NextSeo
        title={t("aboutTitle")}
        description={t("aboutDescription")}
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
            content: `${commonT("capitalCity")} | ${commonT(
              "techCitiesName"
            )} | ${commonT("currentCountryName")}`,
          },
          { name: "author", content: commonT("authorName") },
        ]}
      />
    
    <div className={style.about}>
      {/* My pic or Avtar */}
      <div className={style.aboutContainer}>
        {/* Text */}
        <div className={style.bigTextBox}>
          <motion.h2
            className={style.heading}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {t("aboutHeading")}
            <span className="text-accent"> {t("aboutHeadingRed")} </span>
            {t("today")}
          </motion.h2>

          <motion.p
            className={style.para}
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {t("aboutParagraph")}
          </motion.p>

          {/* Counters */}
          <div className={style.countersBox}>
            <div className={style.innerCountersBox}>
              {/* Experience */}
              <div
                className={`${style.counterBoxContent} ${style.straightLine}`}
              >
                <div className={style.counterBigText}>
                  <CountUp start={0} end={16} duration={5} />+
                </div>
                <div className={style.counterSmallText}>
                  {t("yearOfExperience")}
                </div>
              </div>

              {/* clients */}
              <div
                className={`${style.counterBoxContent} ${style.straightLine}`}
              >
                <div className={style.counterBigText}>
                  <CountUp start={0} end={7} duration={5} />+
                </div>
                <div className={style.counterSmallText}>
                  {t("satisfiedClients")}
                </div>
              </div>

              {/* Projects */}
              <div
                className={`${style.counterBoxContent} ${style.straightLine}`}
              >
                <div className={style.counterBigText}>
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className={style.counterSmallText}>
                  {t("finishedProjects")}
                </div>
              </div>

              <div className={`${style.counterBoxContent}`}>
                <div className={style.counterBigText}>
                  <CountUp start={0} end={1} duration={5} />+
                </div>
                <div className={style.counterSmallText}>
                  {t("winningAwards")}
                </div>
              </div>

              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* infor */}
        <div className={style.rightInformationSection}>
          <div className={style.innerInformationBox}>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`${index === itemIndex && style.active} 
              ${style.lineText}`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* line part finished */}

          <div className={style.informationBox}>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className={style.infoContent}>
                {/* {tittle} */}
                <div className={style.title}> {item?.title} </div>
                <div className={style.titleDash}> -</div>
                <div> {item?.stage} </div>

                <div className={style.iconsContainer}>
                  {/* icons */}
                  {item?.icons?.map((icon, itemIndex) => (
                    <div className={style.icon} key={itemIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
