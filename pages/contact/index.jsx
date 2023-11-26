import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import { BiMessageError, BiMessageCheck } from "react-icons/bi";
import useSendEmail from "@/hooks/useSendEmail";
import { BsArrowRight, BsLock } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import style from "@/styles/Contact.module.css";
import {
  nameRegex,
  emailRegex,
  subjectRegex,
  messageRegex,
} from "@/utils/regex";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initialFormValidation = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

const Contact = () => {
  const { t: t } = useTranslation("contact");
  const { t: commonT } = useTranslation("common");
  const { sendEmail } = useSendEmail();

  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(initialFormValidation);

  const [status, setStatus] = useState({ success: false, error: false });

  useEffect(() => {
    if (status.success || status.error) {
      const timeoutId = setTimeout(() => {
        setStatus({ success: false, error: false });
      }, 10000);

      return () => clearTimeout(timeoutId); // Cleanup the timeout
    }
  }, [status.success, status.error]);

  //* validation of form Data Start here
  useEffect(() => {
    const { name, email, subject, message } = formData;

    const updatedValidation = {
      name: nameRegex.test(name),
      email: emailRegex.test(email),
      subject: subjectRegex.test(subject),
      message: messageRegex.test(message),
    };
    setIsValid(updatedValidation);
  }, [formData]);

  const isFormValid =
    isValid.name !== null &&
    isValid.email !== null &&
    isValid.subject !== null &&
    isValid.message !== null &&
    isValid.name !== false &&
    isValid.email !== false &&
    isValid.subject !== false &&
    isValid.message !== false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: false });
    if (isFormValid) {
      try {
        const { isSuccess } = await sendEmail(form);
        if (isSuccess) {
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setStatus({ success: true, error: false });
        }
      } catch (error) {
        console.error("Error in form submission:", error);
        setStatus({ success: false, error: true });
      }
    } else {
      console.log("Form not submitted. Please fix validation errors.");
    }
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
            {/* heading text */}
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
                <div className={style.inputWrapper}>
                  <input
                    name="name"
                    required
                    type="text"
                    maxLength="60"
                    placeholder={t("name") + "*"}
                    className={style.input}
                    onChange={handleInputChange}

                  />
                  {isValid.name && (
                    <span className={style.tickInput}>&#10004;</span>
                  )}
                </div>
                <div className={style.inputWrapper}>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder={t("email") + "*"}
                    maxLength="200"
                    className={style.input}
                    onChange={handleInputChange}
                  />

                  {isValid.email && (
                    <span className={style.tickInput}>&#10004;</span>
                  )}
                </div>
              </div>

              <div className={style.inputWrapper}>
                <input
                  required
                  name="subject"
                  type="text"
                  maxLength="90"
                  placeholder={t("subject") + "*"}
                  className={style.input}
                  onChange={handleInputChange}
                />
                {isValid.subject && (
                  <span className={style.tickInput}>&#10004;</span>
                )}
              </div>

              <div className={style.textAreaWrapper}>
                <textarea
                  required
                  name="message"
                  type="text"
                  maxLength="1000"
                  placeholder={t("message") + "*"}
                  className={style.textArea}
                  onChange={handleInputChange}
                />
                {isValid.message && (
                  <span className={style.tickTextArea}>&#10004;</span>
                )}
              </div>

              {/* button */}
              <button
                className={style.sendEmailButton}
                onClick={(e) => handleSubmit(e)}
                disabled={!isFormValid}
              >
                <span className={style.talk}>{t("LetsTalk")}</span>
                {isFormValid ? (
                  <BsArrowRight className={style.arrow} />
                ) : (
                  <BsLock className={style.arrow} />
                )}
              </button>
            </motion.form>

            {status.success && (
              <motion.div
                className={style.messageBox}
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <BiMessageCheck
                  className={style.successMessageIcon}
                  aria-label="Success Message"
                />

                <p className={`${style.successMessageColor}`}>
                  {t("successMessage")}
                </p>
              </motion.div>
            )}
            {status.error && (
              <motion.div
                className={style.messageBox}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <BiMessageError
                  className={style.errorMessageIcon}
                  aria-label="Error Message"
                />

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
