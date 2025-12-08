import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Github,Mail,Linkedin,Twitter } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="">
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    {/* Footer */}
      <footer className="mt-auto w-full pt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold tracking-wide">
            Omkar <span className="text-[#915EFF]">Mishra</span>
          </h2>

          <div className="flex gap-3">
            {[
              { label: "Email", icon: <Mail />, href: "mailto:omkarmishra591@gmail.com" },
              { label: "GitHub", icon: <Github />, href: "https://github.com/OmkarMishr" },
              { label: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/omkar-mishra-b3677b246/" },
              { label: "X", icon: <Twitter />, href: "https://x.com/Omkar____Mishra" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? "_self" : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-xs text-slate-200 transition-all duration-300 hover:border-[#60a5fa] hover:bg-slate-900 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(15,23,42,0.9)]"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center">
            Always open to interesting conversations and collaboration opportunities.
          </p>
          <p className="text-[11px] text-slate-600 text-center">
            Built with care and intent by Omkar • © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
