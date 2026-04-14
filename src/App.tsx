import React, { useEffect, useState } from "react";
import HazardStripe from "./components/HazardStripe";
import SkillBar from "./components/SkillBar";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import ExperienceItem from "./components/ExperienceItem";
import { personalInfo, skills, projects, experiences } from "./data/resume";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING DEVELOPER PROFILE...",
  "SCANNING SKILL MODULES... OK",
  "VERIFYING IDENTITY... CONFIRMED",
  "ACCESS GRANTED",
];

function BootScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 500);
        }, 400);
      }
    }, 320);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#0d0d0d" }}
    >
      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.15) 0px,
            rgba(0,0,0,0.15) 1px,
            transparent 1px,
            transparent 3px
          )`,
        }}
      />
      <div className="w-full max-w-lg px-6">
        <HazardStripe height={20} className="mb-6" />
        <div className="text-center mb-8">
          <div
            className="text-5xl font-black font-mono text-amber-400 mb-1"
            style={{ textShadow: "0 0 30px #f59e0b88" }}
          >
            ⚠ WARNING ⚠
          </div>
          <div className="text-zinc-500 font-mono text-sm tracking-widest">
            DEVELOPER ZONE — AUTHORIZED ACCESS ONLY
          </div>
        </div>
        <div className="bg-zinc-950 border border-zinc-700 p-5 font-mono text-sm space-y-1">
          {lines.map((line, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-amber-400">&gt;</span>
              <span
                className={
                  line.includes("GRANTED") ? "text-green-400" : "text-zinc-300"
                }
              >
                {line}
                {i === lines.length - 1 && !done && (
                  <span className="animate-pulse ml-1 text-amber-400">█</span>
                )}
              </span>
            </div>
          ))}
        </div>
        <HazardStripe height={20} className="mt-6" />
      </div>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);

  const handleDone = React.useCallback(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      {/* Moving scanline */}
      <div className="scanline" />

      {/* Scanlines global overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.06) 0px,
            rgba(0,0,0,0.06) 1px,
            transparent 1px,
            transparent 3px
          )`,
        }}
      />

      <BootScreen onDone={handleDone} />

      <div
        className={`relative z-0 transition-opacity duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ───── HEADER ───── */}
        <header className="relative">
          <HazardStripe height={22} />

          {/* Top bar */}
          <div
            className="px-6 py-2 flex items-center justify-between border-b border-zinc-700"
            style={{ background: "#111111" }}
          >
            <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
              PROFILE :: FULLSTACK_DEV
            </span>
            <span className="text-xs font-mono text-amber-600 tracking-widest">
              STATUS: AVAILABLE_FOR_HIRE
            </span>
          </div>

          {/* Hero section */}
          <div
            className="relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0d0d0d 60%, #1a0f00)" }}
          >
            {/* Diagonal accent lines */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                background: `repeating-linear-gradient(
                  -45deg,
                  #f59e0b,
                  #f59e0b 1px,
                  transparent 1px,
                  transparent 40px
                )`,
              }}
            />

            <div className="relative max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-1 z-0"
                  style={{
                    background:
                      "repeating-linear-gradient(-45deg, #f59e0b, #f59e0b 4px, #1a1a1a 4px, #1a1a1a 10px)",
                  }}
                />
                <div className="relative z-10 w-36 h-36 md:w-44 md:h-44 overflow-hidden border-2 border-amber-400">
                  <img
                    src="/photo.jpg"
                    alt="Kol'chugin Roman"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "#1a1a1a";
                        parent.innerHTML = `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;">
                          <span style="font-size:3rem;">👤</span>
                          <span style="font-size:0.6rem;color:#f59e0b;font-family:monospace;letter-spacing:0.1em;">ROMAN</span>
                        </div>`;
                      }
                    }}
                  />
                  {/* Scan overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `repeating-linear-gradient(
                        0deg,
                        rgba(245,158,11,0.04) 0px,
                        rgba(245,158,11,0.04) 1px,
                        transparent 1px,
                        transparent 4px
                      )`,
                    }}
                  />
                </div>
                {/* Corner markers */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-400 z-20" />
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-amber-400 z-20" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-amber-400 z-20" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-400 z-20" />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="font-mono text-xs text-amber-600 tracking-widest uppercase mb-1">
                  ⚠ IDENTITY CONFIRMED ⚠
                </div>
                <h1
                  className="text-3xl md:text-5xl font-black font-mono text-amber-400 uppercase leading-tight mb-1"
                  style={{ textShadow: "0 0 40px #f59e0b55" }}
                >
                  {personalInfo.name}
                </h1>
                <div className="text-lg md:text-xl font-mono text-zinc-300 font-bold tracking-widest uppercase mb-3">
                  {personalInfo.role}
                </div>
                <div className="text-sm font-mono text-zinc-500 mb-5">
                  AGE: <span className="text-amber-500">{personalInfo.age}</span>
                </div>

                <p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-lg mb-6">
                  {personalInfo.about}
                </p>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto md:mx-0">
                  <ContactItem icon="📞" label="PHONE" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                  <ContactItem icon="✉" label="EMAIL" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                  <ContactItem icon="✈" label="TELEGRAM" value={personalInfo.telegram} href={personalInfo.telegramLink} />
                  <ContactItem icon="⚡" label="STATUS" value="OPEN TO WORK" />
                </div>
              </div>
            </div>
          </div>

          <HazardStripe height={22} />
        </header>

        {/* ───── MAIN CONTENT ───── */}
        <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-14">

          {/* ── SKILLS ── */}
          <section>
            <SectionTitle icon="⚡">SKILL MATRIX</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-700 pb-2">
                  // FRONTEND
                </div>
                {frontendSkills.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 100} />
                ))}
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-700 pb-2">
                  // BACKEND
                </div>
                {backendSkills.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 100 + 200} />
                ))}
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 border-b border-zinc-700 pb-2">
                  // TOOLS
                </div>
                {toolSkills.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 100 + 400} />
                ))}
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section>
            <SectionTitle icon="📋">WORK EXPERIENCE</SectionTitle>
            <div className="space-y-0">
              {experiences.map((exp) => (
                <ExperienceItem key={exp.company} experience={exp} />
              ))}
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section>
            <SectionTitle icon="🔧">PROJECTS</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* ── TECH STACK BADGES ── */}
          <section>
            <SectionTitle icon="💻">TECH STACK</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React", color: "#61dafb" },
                { name: "TypeScript", color: "#3178c6" },
                { name: "JavaScript", color: "#f7df1e" },
                { name: "C++", color: "#00599c" },
                { name: "Python", color: "#3776ab" },
                { name: "Node.js", color: "#339933" },
                { name: "Tailwind CSS", color: "#38bdf8" },
                { name: "Vite", color: "#646cff" },
                { name: "Git", color: "#f05032" },
                { name: "Docker", color: "#2496ed" },
                { name: "PostgreSQL", color: "#336791" },
                { name: "REST API", color: "#f59e0b" },
              ].map((tech) => (
                <TechBadge key={tech.name} name={tech.name} color={tech.color} />
              ))}
            </div>
          </section>

          {/* ── CONTACT CTA ── */}
          <section>
            <HazardStripe height={16} className="mb-6" />
            <div
              className="border border-amber-500 p-8 text-center relative overflow-hidden"
              style={{ background: "#0d0d00" }}
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  background: `repeating-linear-gradient(
                    -45deg,
                    #f59e0b,
                    #f59e0b 2px,
                    transparent 2px,
                    transparent 20px
                  )`,
                }}
              />
              <div className="relative">
                <div className="text-amber-400 font-mono font-black text-2xl mb-2 uppercase tracking-widest">
                  ⚠ READY TO DEPLOY ⚠
                </div>
                <p className="text-zinc-400 font-mono text-sm mb-6">
                  Ищу новые возможности. Готов к удалённой работе и офису.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono font-bold text-sm px-6 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-200 uppercase tracking-widest"
                  >
                    ✉ SEND EMAIL
                  </a>
                  <a
                    href={personalInfo.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-sm px-6 py-3 border-2 border-zinc-500 text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition-all duration-200 uppercase tracking-widest"
                  >
                    ✈ TELEGRAM
                  </a>
                </div>
              </div>
            </div>
            <HazardStripe height={16} className="mt-6" />
          </section>
        </main>

        {/* ───── FOOTER ───── */}
        <footer className="border-t border-zinc-800 px-6 py-6 text-center" style={{ background: "#0a0a0a" }}>
          <p className="text-zinc-600 font-mono text-xs tracking-widest">
            © {new Date().getFullYear()} {personalInfo.name} — FULLSTACK DEVELOPER
          </p>
          <p className="text-zinc-700 font-mono text-xs mt-1">
            BUILT WITH REACT + TYPESCRIPT + TAILWIND CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

// ─── Sub-components ───

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-2 border border-zinc-700 bg-zinc-950 px-3 py-2 hover:border-amber-600 transition-colors group">
      <span className="text-base">{icon}</span>
      <div>
        <div className="text-xs font-mono text-zinc-600 leading-none">{label}</div>
        <div className="text-xs font-mono text-zinc-300 group-hover:text-amber-400 transition-colors font-bold truncate">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-1.5 hover:border-opacity-80 transition-all duration-200 group cursor-default"
      style={{ borderColor: `${color}44` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = color;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 8px ${color}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}44`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ background: color, boxShadow: `0 0 4px ${color}` }}
      />
      <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase tracking-wide">
        {name}
      </span>
    </div>
  );
}
