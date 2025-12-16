import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full">
      {/* Desktop / large screens: 3D balls */}
      <div className="hidden sm:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* Mobile: flat tech icons */}
      <div className="grid grid-cols-3 gap-6 justify-items-center sm:hidden mt-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-[2px] shadow-[0_10px_30px_rgba(15,23,42,0.85)]">
              <div className="h-full w-full rounded-2xl bg-slate-900 flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>
            <p className="text-[11px] text-slate-300 text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

