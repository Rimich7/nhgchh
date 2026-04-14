import { AlertTriangle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-warning/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-hazard-stripes opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <a href="#home" className="flex items-center gap-2 text-warning mb-6 group">
          <AlertTriangle className="w-8 h-8 group-hover:text-neon transition-all" />
          <span className="font-mono font-bold tracking-wider text-2xl group-hover:text-neon transition-all">DEV_ZONE</span>
        </a>
        
        <p className="text-gray-500 font-mono text-sm text-center mb-4 border-b border-zinc-800 pb-4 max-w-md w-full">
          Developed and maintained by Roman.
          <br />
          Fullstack Developer.
        </p>

        <div className="text-gray-600 font-mono text-xs flex gap-4">
          <span>&copy; {currentYear} ALL_RIGHTS_RESERVED</span>
          <span className="text-warning">||</span>
          <span>SYS_VER 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
