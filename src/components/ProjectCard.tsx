import React from "react";
import { Project } from "../data/resume";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="relative border border-zinc-700 bg-zinc-900 p-5 group hover:border-amber-400 transition-all duration-300"
      style={{
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* ID badge */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-black font-mono text-amber-300 text-base uppercase tracking-wide leading-tight">
          {project.title}
        </h3>
        <span
          className="text-xs font-mono font-bold px-2 py-0.5 border border-amber-500 text-amber-500 shrink-0"
          style={{ background: "#1a0f00" }}
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="text-zinc-400 text-sm font-mono leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 border border-zinc-600 text-zinc-400 group-hover:border-amber-700 group-hover:text-amber-500 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs font-mono text-amber-400 hover:text-amber-200 underline"
        >
          &gt; VIEW PROJECT
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
