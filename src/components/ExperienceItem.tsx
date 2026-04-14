import React from "react";
import { Experience } from "../data/resume";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-6 pb-8 last:pb-0">
      {/* Timeline line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(180deg, #f59e0b, #f59e0b44, transparent)",
        }}
      />
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-amber-400 border-2 border-amber-400 rotate-45" />

      <div className="border border-zinc-700 bg-zinc-900 p-4 hover:border-amber-500 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <span className="font-black font-mono text-amber-300 uppercase tracking-wide text-sm">
              {experience.role}
            </span>
            <span className="text-zinc-500 font-mono text-sm"> @ </span>
            <span className="font-bold font-mono text-zinc-300 text-sm">
              {experience.company}
            </span>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 border border-amber-700 text-amber-600 bg-zinc-950">
            {experience.period}
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm font-mono">
              <span className="text-amber-500 mt-0.5">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
