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
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiI18Next,
  SiReactrouter,
  SiRedux,
  SiWebpack,
} from "react-icons/si";

import {
  TbBrandGit,
  TbBrandVscode,
} from "react-icons/tb";

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
            <SiI18Next key="SiI18Next"/>,
            <SiReactrouter key="SiReactrouter"/>,
            <SiRedux key="SiRedux"/>,
            <SiWebpack key="SiWebpack" />

          ],
        },
        {
          title: t("tool"),
          icons: [
            <FaFigma key="FaFigma" />,
            <SiAdobephotoshop key="SiAdobephotoshop" />,
            <TbBrandGit key="TbBrandGit" />,
            <TbBrandVscode key="TbBrandVscode" />,
          ],
        },
        {
          title: t("programmingLanguages"),
          icons: [
            "C, C++, Java",
          ],
        },
        {
          title: t("spokenLanguages"),
          icons: [t("languagesName")],
        },
        
      ],
    },
    {
      title: t("credentials"),
      info: [
        {
          title: `${t("degreeUG.name")} ${t("degreeUG.university")}, ${t("degreeUG.city")} - ${t("degreeUG.country")}`,
          stage: `2020-2023 ${t("degreeUG.division")}`,
        },
        {
          title:`• ${t("degreeUG.subjectsNameList.0")} • ${t("degreeUG.subjectsNameList.1")} • ${t("degreeUG.subjectsNameList.2")} • ${t("degreeUG.subjectsNameList.3")} • ${t("degreeUG.subjectsNameList.4")} • ${t("degreeUG.subjectsNameList.5")}`,
          stage: `${t("degreeUG.majorSubjects")}`,
        },
      ],
    },

    {
      title: t("experience"),
      info: [
        {
          title: t("selfLearningExperienceList.0"),
          stage: "2023",
        },
        {
          title: t("selfLearningExperienceList.1"),
          stage: "2021",
        },
        {
          title: t("selfLearningExperienceList.2"),
          stage: "2020  2021",
        },
      ],
    },
    {
      title: t("awards"),
      info: [
        {
          title: t("awardList.0"),
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
        {/* Heading Text */}
        <div className={style.bigTextBox}>
          <motion.h2
            className={style.heading}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"  
            exit="hidden"
          >
            {t("aboutHeading.0")}
            <span className="text-accent"> {t("aboutHeading.1")} </span>
            {t("aboutHeading.2")}
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
                  <CountUp start={0} end={15} duration={5} />+
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
                  <CountUp start={0} end={1} duration={2} />+
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
                  {t("completedProjects")}
                </div>
              </div>

              <div className={`${style.counterBoxContent}`}>
                <div className={style.counterBigText}>
                  <CountUp start={0} end={1} duration={2} />+
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
