'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEnvelope } from 'react-icons/fa';
import ContactModal from './ContactModal';   // adjust path kung iba ang folder structure mo

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-transparent to-zinc-950/60 pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium tracking-wider uppercase">
            Game Developer • Graphic Artist
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
            Lenard Gaspi
          </span>
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="text-xl md:text-3xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Building Games in <span className="text-yellow-400 font-medium">Unity</span> • 
          3D & Multimedia Design 
          Crafting immersive digital content
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="group bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 shadow-xl shadow-yellow-900/30 flex items-center gap-3"
          >
            <FaRocket className="group-hover:rotate-12 transition-transform" />
            Explore My Games
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsModalOpen(true)}
            className="group border-2 border-yellow-500/60 hover:border-yellow-400 text-yellow-300 hover:text-yellow-200 font-bold text-lg py-5 px-12 rounded-full transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <FaEnvelope className="group-hover:scale-110 transition-transform" />
            Let’s Collaborate
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="mt-20 text-zinc-500 text-sm tracking-widest uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-yellow-500/70 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}