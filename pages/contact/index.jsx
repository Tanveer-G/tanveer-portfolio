import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { BiMessageError, BiMessageCheck } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import style from "@/styles/Contact.module.css";

const Contact = () => {
  const { t: t } = useTranslation("contact");
  const { t: commonT } = useTranslation("common");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sent || error) {
      const timeoutId = setTimeout(() => {
        setSent(false);
        setError(false);
      }, 10000);

      return () => clearTimeout(timeoutId); // Cleanup the timeout
    }
  }, [sent, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSent(false);

    const templateParams = {
      to_name: `Dear Developer, Inquiry from Portfolio App`,
      from_name: `${name}: Subject: ${subject}`,
      message: `Subject: ${subject} | Message: ${message}`,
      reply_to: `${email}`,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSent(true);
        setTimeout(() => setSent(false), 10000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSent(false);
        setError(true);
      });
  };
  return (
    <>
      <NextSeo
        title={t("contactTitle")}
        description={t("contactDescription")}
        openGraph={{
          title: t("aboutTitle"),
          description: t("aboutDescription"),
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

      <div className={style.contact}>
        <div className={style.contactContainer}>
          {/* text & form */}
          <div>
            {/* text */}
            <motion.h2
              className={style.heading}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {t("Lets")} <span className={style.connect}>{t("connect")}</span>
            </motion.h2>

            {/* form */}
            <motion.form
              className={style.form}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* group */}
              <div className={style.inputGroup}>
                <input
                  type="text"
                  placeholder={t("name")}
                  className={style.input}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder={t("email")}
                  value={email}
                  className={style.input}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <input
                type="text"
                placeholder={t("subject")}
                className={style.input}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <textarea
                placeholder={t("message")}
                className={style.textArea}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>

              <button
                onClick={(e) => handleSubmit(e)}
                value="Send"
                className={style.btn}
              >
                <span className={style.talk}>{t("LetsTalk")}</span>
                <BsArrowRight className={style.arrow} />
              </button>
            </motion.form>
            {sent && (
              <motion.div
                className={style.messageBox}
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <BiMessageCheck className={style.successMessageIcon} />

                <p className={`${style.successMessageColor}`}>
                  {t("successMessage")}
                </p>
              </motion.div>
            )}
            {error && (
              <motion.div
                className={style.messageBox}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <BiMessageError className={style.errorMessageIcon} />

                <p className={`${style.errorMessageColor}`}>
                  {t("errorMessage")}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
  };
}
