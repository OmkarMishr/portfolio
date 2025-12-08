import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Omkar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full-stack projects, user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>

          {/* Mobile-only profile picture + availability */}
          <div className="mt-10 flex flex-col items-center lg:hidden">
            {/* Larger circular avatar */}
            <div className="relative h-48 w-48 mt-10 rounded-full bg-gradient-to-tr from-[#1f2937] via-[#111827] to-[#4f46e5] p-[4px] shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
              <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="profile.jpeg"
                  alt="Omkar Mishra"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Availability pill */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 ">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for full-time roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D canvas visible only on large screens */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
