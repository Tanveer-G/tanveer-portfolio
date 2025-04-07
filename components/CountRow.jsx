import CountUp from "react-countup";
import style from "@/styles/About.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CountRow() {
  const { t } = useTranslation("about");
  const { t: commonT } = useTranslation("common");
  return (
    <div className={style.countersBox}>
      <div className={style.innerCountersBox}>
        {/* Experience */}
        <div className={`${style.counterBoxContent} ${style.straightLine}`}>
          <div className={style.counterBigText}>
            <CountUp start={0} end={15} duration={5} />+
          </div>
          <div className={style.counterSmallText}>{t("yearOfExperience")}</div>
        </div>

        {/* clients */}
        <div className={`${style.counterBoxContent} ${style.straightLine}`}>
          <div className={style.counterBigText}>
            <CountUp start={0} end={1} duration={2} />+
          </div>
          <div className={style.counterSmallText}>{t("satisfiedClients")}</div>
        </div>

        {/* Projects */}
        <div className={`${style.counterBoxContent} ${style.straightLine}`}>
          <div className={style.counterBigText}>
            <CountUp start={0} end={10} duration={5} />+
          </div>
          <div className={style.counterSmallText}>{t("completedProjects")}</div>
        </div>

        <div className={`${style.counterBoxContent}`}>
          <div className={style.counterBigText}>
            <CountUp start={0} end={1} duration={2} />+
          </div>
          <div className={style.counterSmallText}>{t("winningAwards")}</div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
