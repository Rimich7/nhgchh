import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  icon?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-8 h-8 flex items-center justify-center border-2 border-amber-400 text-amber-400 font-mono font-black text-sm"
        style={{ background: "#1a1a1a" }}
      >
        {icon || "⚠"}
      </div>
      <h2 className="text-xl font-black font-mono uppercase tracking-widest text-amber-400">
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #f59e0b44, transparent)" }} />
    </div>
  );
};

export default SectionTitle;
