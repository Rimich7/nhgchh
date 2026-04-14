import React, { useEffect, useRef, useState } from "react";
import { Skill } from "../data/resume";

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const categoryColor: Record<Skill["category"], string> = {
    frontend: "#f59e0b",
    backend: "#ef4444",
    tools: "#fbbf24",
  };

  const color = categoryColor[skill.category];

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-mono font-bold text-amber-300 uppercase tracking-widest">
          {skill.name}
        </span>
        <span
          className="text-xs font-mono font-bold"
          style={{ color }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-3 bg-zinc-800 border border-zinc-700 relative overflow-hidden">
        {/* Hazard pattern background on bar */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              #f59e0b,
              #f59e0b 4px,
              transparent 4px,
              transparent 8px
            )`,
          }}
        />
        <div
          className="h-full transition-all duration-1000 ease-out relative"
          style={{
            width: animated ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            boxShadow: `0 0 8px ${color}88`,
          }}
        >
          {/* Scan line effect */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1"
            style={{ background: `${color}`, opacity: 0.9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
