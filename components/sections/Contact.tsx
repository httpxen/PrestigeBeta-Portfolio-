'use client';

import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaLinkedin,
  FaEnvelope 
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto text-center relative overflow-hidden">
      {/* Background Aesthetic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter uppercase italic bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Ready for <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Player 2?</span>
        </h2>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-mono leading-relaxed">
          // Looking for a dev to help ship your next title? 
          <br /> 
          Current Status: <span className="text-green-400 font-bold tracking-widest animate-pulse">AVAILABLE FOR QUESTING</span>
        </p>

        {/* 5-Column Grid for Socials */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {/* Facebook */}
          <ContactCard 
            href="https://www.facebook.com/lenard.gaspi" 
            icon={<FaFacebookF size={26} />} 
            label="Facebook" 
            color="hover:border-blue-600/50 hover:shadow-blue-600/20"
          />

          {/* Instagram */}
          <ContactCard 
            href="https://www.instagram.com/lenarddoesart/" 
            icon={<FaInstagram size={26} />} 
            label="Instagram" 
            color="hover:border-pink-500/50 hover:shadow-pink-500/20"
          />

          {/* TikTok */}
          <ContactCard 
            href="https://www.tiktok.com/@lenardgaspi" 
            icon={<FaTiktok size={26} />} 
            label="Tiktok" 
            color="hover:border-zinc-100/50 hover:shadow-zinc-100/20"
          />

          {/* YouTube */}
          <ContactCard 
            href="https://youtube.com/@prestigebeta6900?si=VwESpELzCOzvQWYl" 
            icon={<FaYoutube size={26} />} 
            label="Youtube" 
            color="hover:border-red-600/50 hover:shadow-red-600/20"
          />

          {/* LinkedIn */}
          <ContactCard 
            href="https://linkedin.com/in/yourprofile" 
            icon={<FaLinkedin size={28} />} 
            label="LinkedIn" 
            color="hover:border-blue-500/50 hover:shadow-blue-500/20"
          />
        </div>

        {/* System Status Footer */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          System Stable : Response Latency Low
        </div>
      </motion.div>
    </section>
  );
}

// Reusable Contact Card Component
function ContactCard({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  return (
    <motion.a
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center gap-4 p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-md group ${color}`}
    >
      <div className="text-zinc-400 group-hover:text-white transition-colors duration-300 drop-shadow-sm group-hover:scale-110">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-cyan-400 transition-colors duration-300 leading-none text-center">
        {label}
      </span>
    </motion.a>
  );
}