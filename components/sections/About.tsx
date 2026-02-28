'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-yellow-500/6 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-400 font-mono tracking-widest text-sm uppercase"
            >
              Available for Hire & Collaboration
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-white">
              Lenard Gaspi<span className="text-yellow-500">.</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-zinc-400 tracking-tight italic">
              Game Developer & Graphic Designer
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-zinc-300 leading-relaxed text-lg border-l-2 border-zinc-800/70 pl-6">
            <p>
              Bridging the intersection of{' '}
              <span className="text-yellow-400 font-medium">robust systems architecture</span> and{' '}
              <span className="text-yellow-400 font-medium">immersive user experience</span>. I deliver
              end-to-end production solutions for cross-platform titles, focusing on{' '}
              <span className="text-yellow-400 font-medium">performant engineering</span> and refined
              gameplay aesthetics.
            </p>
            <p>
              My goal is to create products that are as{' '}
              <span className="text-yellow-300 font-medium">scalable</span> as they are{' '}
              <span className="text-yellow-300 font-medium">engaging</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-yellow-900/20"
            >
              Explore Projects
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Lenard_CV.pdf"
              download="Lenard_Gaspi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-zinc-700 hover:border-yellow-500/60 bg-zinc-900/70 text-zinc-200 py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 hover:shadow-yellow-900/10"
            >
              <FaDownload className="group-hover:text-yellow-400 transition-colors" />
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 border border-yellow-500/20 rounded-[2.5rem] group-hover:border-yellow-500/50 transition-colors duration-500" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/10 blur-3xl -z-10" />

            <motion.div
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-950"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/Lenard.png"
                alt="Lenard Gaspi - Game Developer & Graphic Designer"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}