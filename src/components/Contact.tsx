import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-zinc-950 border-t border-warning/20">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-warning tracking-widest uppercase mb-3">
            [03] COMM_LINK
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            ESTABLISH <span className="text-warning text-neon">CONNECTION</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400 font-mono text-lg border-l-4 border-warning pl-4 bg-black/40 p-4 shadow-inner">
            Awaiting input... Feel free to reach out via secure channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-black border border-zinc-800 p-8 rounded-lg shadow-xl relative overflow-hidden group hover:border-warning/50 transition-colors">
              <div className="absolute top-0 right-0 w-20 h-20 bg-warning/5 rounded-bl-full group-hover:bg-warning/10 transition-colors" />
              <h4 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <MapPin className="text-warning" />
                SECURE_CHANNELS
              </h4>
              
              <div className="space-y-6">
                <a href="mailto:fustroman23@mail.ru" className="flex items-center gap-4 group/item">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded group-hover/item:border-warning group-hover/item:text-warning transition-colors shadow-inner text-gray-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">EMAIL_ADDRESS</p>
                    <p className="text-white font-medium group-hover/item:text-warning transition-colors">fustroman23@mail.ru</p>
                  </div>
                </a>
                
                <a href="tel:+79180094649" className="flex items-center gap-4 group/item">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded group-hover/item:border-warning group-hover/item:text-warning transition-colors shadow-inner text-gray-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">VOICE_COMMS</p>
                    <p className="text-white font-medium group-hover/item:text-warning transition-colors">+7 (918) 009-46-49</p>
                  </div>
                </a>
                
                <a href="https://t.me/Rimich23" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/item">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded group-hover/item:border-warning group-hover/item:text-warning transition-colors shadow-inner text-gray-400">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">ENCRYPTED_MESSAGING</p>
                    <p className="text-white font-medium group-hover/item:text-warning transition-colors">@Rimich23 (Telegram)</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-black border border-zinc-800 p-8 rounded-lg shadow-xl flex flex-col gap-6 relative" onSubmit={(e) => e.preventDefault()}>
               <div className="absolute top-0 left-0 w-full h-1 bg-hazard-sm opacity-50"></div>
              <h4 className="text-2xl font-bold text-white mb-2 font-mono">SEND_DATA_PACKET</h4>
              
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Sender_ID (Name)</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-warning focus:ring-1 focus:ring-warning transition-all placeholder-gray-600 font-mono"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Return_Address (Email)</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-warning focus:ring-1 focus:ring-warning transition-all placeholder-gray-600 font-mono"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Payload (Message)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:outline-none focus:border-warning focus:ring-1 focus:ring-warning transition-all placeholder-gray-600 font-mono resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-warning text-black font-bold font-mono px-6 py-4 rounded hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 group mt-2 shadow-[0_0_15px_rgba(255,193,7,0.3)]"
              >
                <span>TRANSMIT</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
