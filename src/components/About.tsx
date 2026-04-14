import { motion } from 'framer-motion';
import { Database, Layout, Code2, Cpu } from 'lucide-react';

const skills = [
  { name: 'Next.js & React', icon: <Layout className="w-8 h-8 text-warning" />, level: 'EXPERT', desc: 'Building dynamic, SEO-friendly SSR/SSG web applications.' },
  { name: 'Python', icon: <Database className="w-8 h-8 text-warning" />, level: 'ADVANCED', desc: 'Backend logic, data processing, scripting.' },
  { name: 'C++', icon: <Cpu className="w-8 h-8 text-warning" />, level: 'INTERMEDIATE', desc: 'Performance-critical components, systems programming.' },
  { name: 'Fullstack Arch', icon: <Code2 className="w-8 h-8 text-warning" />, level: 'ADVANCED', desc: 'API design, database modeling, deployment.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-warning/20 bg-zinc-950">
      <div className="absolute inset-0 bg-hazard-stripes opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-warning tracking-widest uppercase mb-3">
            [01] SYSTEM_SPECS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            ABOUT <span className="text-warning text-neon">ME</span>
          </h3>
          <p className="max-w-3xl mx-auto text-gray-400 font-mono text-lg border-l-4 border-warning pl-6 text-left leading-relaxed bg-black/40 p-6 rounded-md shadow-inner">
            Experienced Fullstack Developer specializing in crafting robust web architectures. 
            My primary stack involves modern JavaScript/TypeScript ecosystems, particularly <span className="text-warning font-semibold">Next.js and React</span> for 
            frontend excellence. I also leverage <span className="text-warning font-semibold">Python</span> for data-heavy backends and <span className="text-warning font-semibold">C++</span> when raw 
            performance is mission-critical. I am driven by creating efficient, scalable, and visually impactful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-gray-800 hover:border-warning/50 rounded-lg p-6 group transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,193,7,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warning to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col h-full">
                <div className="mb-6 p-4 bg-zinc-900 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] border border-zinc-800">
                  {skill.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 font-mono">{skill.name}</h4>
                <div className="text-xs font-mono text-warning/70 mb-3 px-2 py-1 bg-warning/10 inline-block rounded self-start border border-warning/20">
                  LVL: {skill.level}
                </div>
                
                <p className="text-gray-400 font-sans text-sm mt-auto">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
