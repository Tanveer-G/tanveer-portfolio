import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {RxGlobe, RxTriangleDown} from "react-icons/rx";
import style from "./css/MultiLanguageBtn.module.css";

const languages = [
  {
    language_name: "العربية",
    language_code: "ar-SA",
    dir: "rtl",
  },
  {
    language_name: "Deutsch",
    language_code: "de",
  },
  {
    language_name: "English",
    language_code: "en-US",
  },
  {
    language_name: "Melayu",
    language_code: "ms-SG",
  },
  {
    language_name: "Malti",
    language_code: "mt",
  },
];

const MultiLanguageBtn = () => {
  const router = useRouter();
  const [showLanguages, setShowlanguages] = useState(false);
  let menuRef = useRef();

  const toggle = () => {
    setShowlanguages(!showLanguages);
  };

  useEffect(() => {
    let clickHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowlanguages(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  const languageChanger = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
    // change just the "locale" and "maintain all other route" information including href's query
  };

  useEffect(() => {
    let dir = router.locale == "ar-SA" ? "rtl" : "ltr";
    let lang = router.locale;
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <div ref={menuRef}>
      <button
        type="button"
        className={style.multiLanguageBtn}
        onClick={() => toggle()}
      >
        <RxGlobe />
        <RxTriangleDown className={showLanguages && style.rotate}/>
      </button>

      {/* drop down Menu Languages */}
      <section>
      {showLanguages && (
        <ul className={style.dropDown}>
          {languages.map(({ language_code, language_name }) => (
            <li key={language_code} className={style.buttonWrapper}>
              <button className={`${(language_code===router.locale) && style.languageSelectedColor} ${style.languageButton}`}
                onClick={() => {
                  languageChanger(language_code);
                  toggle();
                }}
              >
                {language_name}
              </button>
              <span className={language_code===router.locale?style.tickActive:style.tick}>
              &#10004;
              </span>
            </li>
          ))}
        </ul>
      )}
      </section>
    </div>
  );
};

export default MultiLanguageBtn;
