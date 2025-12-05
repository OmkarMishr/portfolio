import React from "react";
import { skillsData } from "../constants";
import { statCards } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Code2,Wrench,Cloud,Server } from "lucide-react";


const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className={`${styles.sectionHeadText} text-center`}>
          Expertise &amp; Tech Stack
        </h1>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Product‑minded full‑stack developer focused on scalable systems,
          performance, and polished user experiences.
        </p>

        {/* Stat + principles cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-slate-700 bg-slate-900/60 px-5 py-5 flex flex-col justify-between
                         hover:border-blue-500/80 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl font-bold mb-1">{card.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                {card.label}
              </div>
              <p className="text-xs text-slate-400">{card.sub}</p>
            </div>
          ))}

        </div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {skillsData.map((block, index) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-5 shadow-[0_0_40px_rgba(59,130,246,0.08)]
                         overflow-hidden relative
                         hover:border-blue-500/80 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
                         transition-all duration-300"
            >
              {/* subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10" />

              <div className="relative flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700">
                    <span>{block.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{block.title}</p>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                  {block.meta}
                </span>
              </div>

              {/* Skills list */}
              <div className="relative space-y-3">
                {block.items.map((item, i) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between text-[12px] mb-1">
                      <span className="text-slate-200">{item.name}</span>
                      <span className="text-slate-400">{item.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      {/* animated bar */}
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                                   transform origin-left animate-[grow_1s_ease-out_forwards]"
                        style={{
                          // stagger the animation
                          animationDelay: `${0.15 * (index * 4 + i)}s`,
                          width: `${item.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-6">
          Available for full‑time roles and impactful collaborations.
        </p>
      </div>

      {/* custom keyframes for progress animation */}
      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
