import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import style from "./css/HomeButtons.module.css";

const HomeButtons = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  const downloadResumeBtn = () => {
    const resumeUrl = "./Tanveer-Resume-Frontend-Developer.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <button className={style.hireBtn}>
        <Link href={`/${router.locale}/contact`}>{t("hireMe")}</Link>
      </button>

      <button className={style.resumeBtn} onClick={() => downloadResumeBtn()}>
        {t("resume")}
        <AiOutlineDownload className={style.iconDown} />
      </button>
    </>
  );
};

export default HomeButtons;