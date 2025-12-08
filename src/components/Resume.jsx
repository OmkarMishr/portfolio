import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { File, Download } from 'lucide-react';
import resumePdf from "../assets/resume/OmkarMishra_Resume.pdf";


const Resume = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">
      {/* Top section */}
      <header className="w-full max-w-6xl mx-auto px-6 pt-10 pb-16">
        {/* Small label */}
        <p className="text-center text-sm tracking-[0.25em] text-slate-400 mb-3 uppercase">
          Resume
        </p>

        {/* Main heading */}
        <h1 className={`${styles.sectionHeadText} text-center`}>
          Engineer of Reliable, Efficient
          <span className="block mt-1">Applications</span>
        </h1>

        {/* Availability pill */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-900/30 px-4 py-1 text-sm text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-pulse">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Open to internships or full time opportunities</span>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Full-stack expertise",
            "4+ production-ready projects",
            "Strong DSA & problem-solving",
            "7.8 CPI academic excellence",
          ].map((item) => (
            <div
              key={item}
              className="group border border-slate-800 rounded-xl bg-gradient-to-b from-slate-900/60 to-slate-900/10 px-4 py-3 flex items-center justify-center text-sm sm:text-base text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              <span className="mr-2 text-[#60a5fa]">●</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Main call-to-action card */}
        <div className="mt-12">
          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-[#020617] to-slate-900 px-6 py-6 sm:px-10 sm:py-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] overflow-hidden">
            {/* Glow behind */}
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_rgba(15,23,42,0))]" />

            {/* Icon card */}
            <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-[float_3s_ease-in-out_infinite]">
              <span className="text-3xl text-[#60a5fa]"><File /></span>
            </div>

            {/* Buttons */}
            <div className="relative flex-1 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <a
                href={resumePdf}
                download="OmkarMishra_Resume.pdf"
                className="group inline-flex items-center justify-center rounded-full bg-[#2563eb] px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.7)] transition-all duration-300 hover:bg-[#1d4ed8] hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(37,99,235,0.85)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-[#2563eb]"
              >
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 border border-blue-200/40">
                  <Download />
                </span>
                <span>Download Resume</span>
              </a>

              <a
                href="https://www.linkedin.com/in/omkar-mishra-b3677b246/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 px-8 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-[#60a5fa] hover:bg-slate-900 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.9)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-slate-500"
              >
                <span className="mr-2 text-[#60a5fa]">in</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");