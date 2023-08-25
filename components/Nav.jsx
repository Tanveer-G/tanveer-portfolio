import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import style from "./css/Nav.module.css";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiChatBubbleBottomCenterText,
} from "react-icons/hi2";

//  links/ nav Data

const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const pathname = router.pathname;

 
  return (
    <nav className={style.nav} dir="ltr">
      {/* inner */}
      <div className={style.naviteam}>
        {links.map((link, index) => (
          
          <Link href={`/${router.locale}${link.path}`}

            className={`${link.path === pathname && style.active} 
            ${style.link}`}
            key={index}
          >
            {/* tooltip */}
            <div className={style.tooltipOuter}>
              <div className={style.tooltipInner}>
                <div className={style.tooltipText}>{t(link.name)}</div>
                {/* tooltip triangle */}
                <div className={style.triangle}></div>
              </div>
            </div>

            {/* icons */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
