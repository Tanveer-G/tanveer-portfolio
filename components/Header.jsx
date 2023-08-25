import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import MultiLanguageBtn from "./MultiLanguageBtn";
import style from "./css/Header.module.css";
import Logo from "@/public/logo.png";

const Header = () => {
  const { locale } = useRouter();
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logoSocial}>
          {/* T logo */}
          <Link href={`/${locale}`}>
            <Image
              src={Logo}
              alt="Tanveer H. | Logo"
              width={35}
              height={50}
              property={true}
              title="Tanveer H."
            />
          </Link>
          {/* Socials */}
          <div className={style.rightSocialMultiLang}>
            <Socials />
            <MultiLanguageBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
