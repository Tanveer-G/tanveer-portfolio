// Quick Pick: Start with MailerLite if you want unlimited daily sends—it's the most recommended Brevo swap in 2025 for ease and features without hassle.
// Pro Tip: For any of these, verify your domain with SPF/DKIM to avoid spam issues. Test a form submission first to ensure it hits your inbox reliably.

// "use client";
// import { useState, useCallback, FormEvent, ChangeEvent } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   // Optimized validation with useCallback
//   const validateForm = useCallback(() => {
//     const newErrors: Record<string, string> = {};
//     let isValid = true;

//     if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//       isValid = false;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     if (formData.subject.trim().length < 2) {
//       newErrors.subject = "Subject is required";
//       isValid = false;
//     }

//     if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   }, [formData]);

//   // Handle input changes
//   const handleChange = useCallback(
//     (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value } = e.target;
//       setFormData(prev => ({ ...prev, [name]: value }));
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     },
//     []
//   );

//   // Form submission handler
//   const handleSubmit = useCallback(
//     async (e: FormEvent) => {
//       e.preventDefault();
//       if (!validateForm()) return;

//       setIsSubmitting(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1500));
//         setSubmitSuccess(true);
//         setFormData({ name: "", email: "", subject: "", message: "" });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } catch {
//         setErrors({ form: "Failed to send message. Please try again." });
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//     [validateForm]
//   );

//   return (
//     <section
//       id="contact-section"
//       className="w-full max-w-screen-md mx-auto py-10 px-4 md:px-10 bg-transparent text-white rounded-lg shadow-md"
//       aria-labelledby="contact-heading"
//     >
//       <h2
//         id="contact-heading"
//         className="text-[3rem] font-bold text-center mb-10"
//       >
//         Let’s{" "}
//         <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
//           Connect.
//         </span>
//       </h2>

//       {submitSuccess && (
//         <div
//           role="alert"
//           aria-live="polite"
//           className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-300 text-center"
//         >
//          {` Message sent successfully! We'll get back to you soon.`}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/** Name Field **/}
//           <div className="space-y-2">
//             <label htmlFor="name" className="sr-only">
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Name*"
//               value={formData.name}
//               onChange={handleChange}
//               disabled={isSubmitting}
//               aria-invalid={!!errors.name}
//               aria-describedby={errors.name ? "name-error" : undefined}
//               className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
//                 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
//                 placeholder:text-gray-500 transition-colors
//                 ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
//               `}
//             />
//             {errors.name && (
//               <p
//                 id="name-error"
//                 className="text-red-400 text-sm mt-1 flex items-center"
//               >
//                 <span className="mr-1">⚠</span>
//                 {errors.name}
//               </p>
//             )}
//           </div>

//           {/** Email Field **/}
//           <div className="space-y-2">
//             <label htmlFor="email" className="sr-only">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Email*"
//               value={formData.email}
//               onChange={handleChange}
//               disabled={isSubmitting}
//               aria-invalid={!!errors.email}
//               aria-describedby={errors.email ? "email-error" : undefined}
//               className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
//                 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
//                 placeholder:text-gray-500 transition-colors
//                 ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
//               `}
//             />
//             {errors.email && (
//               <p
//                 id="email-error"
//                 className="text-red-400 text-sm mt-1 flex items-center"
//               >
//                 <span className="mr-1">⚠</span>
//                 {errors.email}
//               </p>
//             )}
//           </div>
//         </div>

//         {/** Subject Field **/}
//         <div className="space-y-2">
//           <label htmlFor="subject" className="sr-only">
//             Subject
//           </label>
//           <input
//             id="subject"
//             name="subject"
//             type="text"
//             placeholder="Subject*"
//             value={formData.subject}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             aria-invalid={!!errors.subject}
//             aria-describedby={errors.subject ? "subject-error" : undefined}
//             className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
//               focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
//               placeholder:text-gray-500 transition-colors
//               ${errors.subject ? "border-red-400 focus-visible:ring-red-400" : ""}
//             `}
//           />
//           {errors.subject && (
//             <p
//               id="subject-error"
//               className="text-red-400 text-sm mt-1 flex items-center"
//             >
//               <span className="mr-1">⚠</span>
//               {errors.subject}
//             </p>
//           )}
//         </div>

//         {/** Message Field **/}
//         <div className="space-y-2">
//           <label htmlFor="message" className="sr-only">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={4}
//             placeholder="Message*"
//             value={formData.message}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             aria-invalid={!!errors.message}
//             aria-describedby={errors.message ? "message-error" : undefined}
//             className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
//               focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
//               placeholder:text-gray-500 transition-colors
//               ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}
//             `}
//           />
//           {errors.message && (
//             <p
//               id="message-error"
//               className="text-red-400 text-sm mt-1 flex items-center"
//             >
//               <span className="mr-1">⚠</span>
//               {errors.message}
//             </p>
//           )}
//         </div>

//         {/** Submit Button **/}
//         <div className="pt-4">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             aria-busy={isSubmitting}
//             className={`relative w-full max-w-[170px] mx-auto block font-semibold px-6 py-3 text-white rounded-full
//               bg-gradient-to-r from-indigo-500 to-pink-500
//               hover:from-indigo-600 hover:to-pink-600
//               focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
//               transition-all duration-300
//               ${isSubmitting ? "opacity-70 cursor-not-allowed" : "shadow-lg"}
//             `}
//           >
//             {isSubmitting ? "Sending..." : "Let's Talk"}
//             <span
//               aria-hidden="true"
//               className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 hover:opacity-80 rounded-full -z-10 transition-opacity"
//             />
//           </button>

//           {errors.form && (
//             <p className="text-red-400 text-sm mt-3 flex items-center justify-center">
//               <span className="mr-1">⚠</span>
//               {errors.form}
//             </p>
//           )}
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;


// mail lite

"use client";
import { useState, useCallback, FormEvent, ChangeEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Optimized validation with useCallback
  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.subject.trim().length < 2) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  // Handle input changes
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: "" }));
    },
    []
  );

  // Form submission handler with MailerLite integration
//   const handleSubmit = useCallback(
//     async (e: FormEvent) => {
//       e.preventDefault();
//       if (!validateForm()) return;

//       setIsSubmitting(true);
//       try {
//         // MailerLite API integration
//         const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'X-MailerLite-ApiKey': process.env.NEXT_PUBLIC_MAILERLITE_API_KEY!,
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             name: formData.name,
//             fields: {
//               subject: formData.subject,
//               message: formData.message,
//               // source: 'portfolio-contact-form'
//             }
//           }),
//         });

//         if (!response.ok) {
//           throw new Error(`MailerLite API error: ${response.status}`);
//         }

//         setSubmitSuccess(true);
//         setFormData({ name: "", email: "", subject: "", message: "" });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } catch (error) {
//         console.error('Form submission error:', error);
//         setErrors({ form: "Failed to send message. Please try again." });
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//     [validateForm, formData]
//   );

// Form submission handler with Brevo API integration
const handleSubmit = useCallback(
  async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Brevo API integration
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY!,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          "sender": {
            "name": "Tanveer's Portfolio", // 👈 Sender's display name
            "email": "e.service.center1@gmail.com" // 👈 MUST be a verified sender in Brevo
          },
          "to": [{
            "email": "e.service.center1@gmail.com", // 👈 CORRECT: Your receiving email
            "name": "Tanveer" // 👈 CORRECT: Your name
          }],
          "subject": `Portfolio Contact: ${formData.subject}`,
          "htmlContent": `
            <h3>New Message from Portfolio</h3>
            <p><strong>From:</strong> ${formData.name} &lt;${formData.email}&gt;</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Brevo API error:', errorData);
        throw new Error(`Sending failed (Status: ${response.status})`);
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ form: "Failed to send the message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  },
  [validateForm, formData]
);

  return (
    <section
      id="contact-section"
      className="w-full max-w-screen-md mx-auto py-10 px-4 md:px-10 bg-transparent text-white rounded-lg shadow-md"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="typo-h1 font-bold text-center mb-10"
      >
        {`Let's`}{" "}
        <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Connect.
        </span>
      </h2>

      {submitSuccess && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-300 text-center"
        >
         {` Message sent successfully! We'll get back to you soon.`}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** Name Field **/}
          <div className="space-y-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
                placeholder:text-gray-500 transition-colors
                ${errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
              `}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <span className="mr-1">⚠</span>
                {errors.name}
              </p>
            )}
          </div>

          {/** Email Field **/}
          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
                placeholder:text-gray-500 transition-colors
                ${errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
              `}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <span className="mr-1">⚠</span>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/** Subject Field **/}
        <div className="space-y-2">
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
              placeholder:text-gray-500 transition-colors
              ${errors.subject ? "border-red-400 focus-visible:ring-red-400" : ""}
            `}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="text-red-400 text-sm mt-1 flex items-center"
            >
              <span className="mr-1">⚠</span>
              {errors.subject}
            </p>
          )}
        </div>

        {/** Message Field **/}
        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full p-3 bg-transparent border border-gray-600 rounded-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
              placeholder:text-gray-500 transition-colors
              ${errors.message ? "border-red-400 focus-visible:ring-red-400" : ""}
            `}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-red-400 text-sm mt-1 flex items-center"
            >
              <span className="mr-1">⚠</span>
              {errors.message}
            </p>
          )}
        </div>

        {/** Submit Button **/}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={`relative w-full max-w-[170px] mx-auto block font-semibold px-6 py-3 text-white rounded-full
              bg-gradient-to-r from-indigo-500 to-pink-500
              hover:from-indigo-600 hover:to-pink-600
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
              transition-all duration-300
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : "shadow-lg"}
            `}
          >
            {isSubmitting ? "Sending..." : "Let's Talk"}
            <span
              aria-hidden="true"
              className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 hover:opacity-80 rounded-full -z-10 transition-opacity"
            />
          </button>

          {errors.form && (
            <p className="text-red-400 text-sm mt-3 flex items-center justify-center">
              <span className="mr-1">⚠</span>
              {errors.form}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

