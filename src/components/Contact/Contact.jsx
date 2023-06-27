import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tqj1mee",
        "template_s1j2equ",
        formRef.current,
        "cE4WA3qdD3oPZCR_I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    let timeout;

    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSubmitted]);

  return (
    <div className="contact-form bg-violet-900 pb-12 px-8" id="contact">
      <div className="px-0 py-8 pb-20 md:px-12 md:py-8 md:pb-20">
        <span className="text-2xl text-violet-400 block p-6 font-bold">
          Get in Touch
        </span>
        {isSubmitted && (
          <span className="mb-20 p-2 border-green-300 border-2 rounded-xl text-green-600 bg-green-200">
            Thanks for contacting me!
          </span>
        )}
      </div>
      <form ref={formRef} onSubmit={sendEmail} className="md:px-32">
        <input
          type="text"
          name="user_name"
          className="w-full mb-8 md:mb-4 p-2 rounded-md outline-none text-lg font-semibold pl-8"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="w-full mb-8 md:mb-4 p-2 rounded-md outline-none text-lg font-semibold pl-8"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="w-full mb-8 md:mb-4 p-2 rounded-md outline-none text-lg font-semibold pl-8"
          placeholder="Message"
          required
        />
        <input
          type="submit"
          value="Send"
          className="bg-violet-400 mb-8 text-violet-300 py-1 px-12 rounded-md cursor-pointer hover:text-violet-950"
        />
      </form>
      <hr className="border-violet-400 w-full my-8 md:m-1 border-2 rounded-md" />
    </div>
  );
};

export default Contact;
