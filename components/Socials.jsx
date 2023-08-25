import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubFill,
} from "react-icons/ri";
import CountryFlag from "./CountryFlag";
import style from "./css/Socials.module.css";

const Socials = () => {
  return (
    <div className={style.socials}>
      <Link href={"https://www.youtube.com"} className={style.socialIcon}>
        <RiYoutubeLine title="YouTube" />
      </Link>

      <Link href={"https://linkedin.com"} className={style.socialIcon}>
        <RiLinkedinLine title="LinkedIn" />
      </Link>

      <Link href={"https://www.instagram.com"} className={style.socialIcon}>
        <RiInstagramLine title="Instagram" />
      </Link>

      <Link href={"https://github.com/Tanveer-G/tanveer-portfolio"} className={style.socialIcon}>
        <RiGithubFill title="GitHub" />
      </Link>

      <CountryFlag />
    </div>
  );
};

export default Socials;
