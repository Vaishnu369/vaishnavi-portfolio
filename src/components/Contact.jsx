import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact</h1>

      <p className="contact-subtitle">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className="contact-card">
        <h2>Email Me</h2>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send</button>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;