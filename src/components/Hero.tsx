import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warning/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-warning/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-warning/50 bg-warning/10 text-warning font-mono text-sm shadow-[0_0_15px_rgba(255,193,7,0.2)]">
            <ShieldAlert className="w-4 h-4" />
            <span>SYSTEM_ONLINE // ACCESS_GRANTED</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block font-sans text-gray-300">FULLSTACK</span>
            <span className="block text-warning text-neon drop-shadow-md">DEVELOPER</span>
            <span className="block font-mono text-3xl md:text-4xl text-gray-500 mt-2">&lt;Roman /&gt;</span>
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-mono leading-relaxed border-l-2 border-warning pl-4">
            Building robust, scalable web applications with Next.js, React, Python, and C++. Warning: High code quality detected.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center gap-2 bg-warning text-black font-bold font-mono px-6 py-3 rounded-sm hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,193,7,0.4)]"
            >
              <Terminal className="w-5 h-5" />
              VIEW_PROJECTS
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-warning text-warning font-bold font-mono px-6 py-3 rounded-sm hover:bg-warning/10 transition-colors"
            >
              <Cpu className="w-5 h-5" />
              INIT_CONTACT
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto aspect-square flex items-center justify-center"
        >
          {/* Avatar Container with Warning Style */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 group perspective">
            <div className="absolute inset-0 border-4 border-warning/30 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-warning/80 transition-colors" />
            <div className="absolute inset-2 border-2 border-dashed border-gray-600 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-4 bg-hazard-stripes rounded-full opacity-20" />
            
            <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden p-6">
              <div className="w-full h-full bg-zinc-800 rounded-full overflow-hidden border-2 border-warning relative z-20 shadow-[0_0_30px_rgba(255,193,7,0.3)] bg-cover bg-center" style={{ backgroundImage: "url('/avatar.jpg')" }}>
                 {/* Fallback pattern if no image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
            
            {/* Status Indicators */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
            <div className="absolute bottom-10 left-10 px-3 py-1 bg-black border border-warning text-warning text-xs font-mono rounded">
              STATUS: SECURE
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-warning/70 hover:text-warning flex flex-col items-center">
          <span className="font-mono text-xs mb-2">SCROLL_DOWN</span>
          <div className="w-6 h-10 border-2 border-warning/70 rounded-full flex justify-center p-1">
             <div className="w-1 h-2 bg-warning/70 rounded-full"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
