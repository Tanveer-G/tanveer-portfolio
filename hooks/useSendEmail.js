import emailjs from "@emailjs/browser";
import {
  nameRegex,
  emailRegex,
  subjectRegex,
  messageRegex,
} from "@/utils/regex";

export default function useSendEmail() {
    const sendEmail = async (form) => {
    const { name, email, subject, message } = form;
    console.log("Form data received", form);

    try {
      const templateParams = {
        to_name: `Dear Developer, Inquiry from Portfolio App`,
        from_name: `${name}: Subject: ${subject}`,
        message: `Subject: ${subject} | Message: ${message}`,
        reply_to: `${email}`,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      console.log("Email sent successfully!", response);
      return { isSuccess: true, message: "Email sent successfully!" };
    } catch (error) {
      console.error("Error while sending email:", error);
      return {
        isSuccess: false,
        message: "Error while sending email",
      };
    }
  };

  return { sendEmail };
}
