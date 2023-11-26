import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { TbChevronsDownRight } from "react-icons/tb";
import { SlGlobe } from "react-icons/sl";
import style from "./css/MultiLanguageBtn.module.css";
import useOutsideClick from "@/hooks/useOutsideClick";
import useLocaleChanger from "@/hooks/useLocaleChanger";

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
  let menuRef = useRef();
  const {locale} = useRouter();
  const [showLanguages, setShowLanguages] = useState(false);
  const { languageChanger } = useLocaleChanger();
  useOutsideClick(menuRef, () => setShowLanguages(false));

  const toggle = useCallback(() => {
    setShowLanguages((prevShowLanguages) => !prevShowLanguages);
  }, []);

  useEffect(() => {
    let dir = locale == "ar-SA" ? "rtl" : "ltr";
    let lang = locale;
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [locale]);

  return (
    <div ref={menuRef}>
      <button
        type="button"
        className={style.multiLanguageBtn}
        onClick={() => toggle()}
      >
        <SlGlobe />
        <TbChevronsDownRight className={showLanguages && style.rotate} />
      </button>

      {/* drop down Menu Languages */}
      <section>
        {showLanguages && (
          <ul className={style.dropDown}>
            {languages.map(({ language_code, language_name }) => (
              <li key={language_code} className={style.buttonWrapper}>
                <button
                  className={`${
                    language_code === locale &&
                    style.languageSelectedColor
                  } ${style.languageButton}`}
                  onClick={() => {
                    languageChanger(language_code);
                    toggle();
                  }}
                >
                  {language_name}
                </button>
                <span
                  className={
                    language_code === locale
                      ? style.tickActive
                      : style.tick
                  }
                >
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
