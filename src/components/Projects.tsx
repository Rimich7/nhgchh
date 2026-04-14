import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Code2, Cpu, Rocket, Database } from 'lucide-react';

const projects = [
  {
    title: 'NEXUS_CORE',
    desc: 'High-performance e-commerce platform built with Next.js, featuring SSR, incremental static regeneration (ISR), and a complex Redux state management.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Redux', 'Node.js'],
    demo: '#',
    code: '#',
    icon: <Rocket className="w-10 h-10 text-warning" />,
  },
  {
    title: 'DATAFORGE_AI',
    desc: 'Python-based analytics dashboard using React on the frontend. Integrates machine learning models for predictive analysis.',
    tech: ['React', 'Python', 'FastAPI', 'Pandas', 'PostgreSQL'],
    demo: '#',
    code: '#',
    icon: <Database className="w-10 h-10 text-warning" />,
  },
  {
    title: 'SYNERGY_ENGINE',
    desc: 'A real-time collaborative workspace utilizing WebSockets. The backend microservices handle heavy concurrent connections seamlessly.',
    tech: ['React', 'WebSockets', 'Node.js', 'Redis', 'Docker'],
    demo: '#',
    code: '#',
    icon: <Cpu className="w-10 h-10 text-warning" />,
  },
  {
    title: 'QUANTUM_RENDER',
    desc: 'C++ performance module integrated via WebAssembly to render complex 3D visualizations in the browser natively.',
    tech: ['C++', 'WebAssembly', 'React', 'Three.js'],
    demo: '#',
    code: '#',
    icon: <Code2 className="w-10 h-10 text-warning" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black border-t border-warning/30 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,193,7,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,193,7,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-warning tracking-widest uppercase mb-3">
            [02] DEPLOYMENTS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            RECENT <span className="text-warning text-neon">PROJECTS</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 font-mono text-lg border-x-2 border-warning px-6 py-2 bg-black/50 inline-block shadow-inner">
             Executing operational protocols... Viewing active modules.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-warning transition-colors duration-300 shadow-xl"
            >
              {/* Top Bar Warning */}
              <div className="h-10 bg-black border-b border-zinc-800 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="text-xs font-mono text-gray-500">module_{index + 1}.exe</div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-black border border-zinc-800 rounded-md group-hover:border-warning/50 transition-colors shadow-inner">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.code}
                      className="p-2 bg-black border border-zinc-700 rounded-md hover:border-warning hover:text-warning text-gray-400 transition-colors tooltip"
                      aria-label="View Source Code"
                    >
                      <GitBranch className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-black border border-zinc-700 rounded-md hover:border-warning hover:text-warning text-gray-400 transition-colors tooltip"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3 font-mono tracking-tight group-hover:text-warning transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6 font-sans text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black text-xs font-mono text-warning/80 border border-warning/30 rounded-full group-hover:border-warning/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
