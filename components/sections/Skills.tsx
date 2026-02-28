'use client';

import { motion } from 'framer-motion';
import CsharpIcon from '@/components/icons/CsharpIcon';
import { FaUnity } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiCanva, SiKrita } from 'react-icons/si';

const skills = [
  { icon: FaUnity, label: 'Unity', colorClass: 'text-yellow-400' },
  { icon: CsharpIcon, label: 'C#', colorClass: 'text-purple-400' },
  { icon: SiHtml5, label: 'HTML', colorClass: 'text-orange-500' },
  { icon: SiCss3, label: 'CSS', colorClass: 'text-blue-400' },
  { icon: SiCanva, label: 'Canva', colorClass: 'text-sky-400' },
  { icon: SiKrita, label: 'Krita', colorClass: 'text-purple-500' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-zinc-950/40 border-t border-b border-zinc-800/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tight bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Tech Stack & Tools
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 20,
            }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="group w-64 flex-shrink-0 bg-zinc-900/80 border border-zinc-800/70 rounded-2xl p-6 text-center hover:border-yellow-700/60 hover:bg-zinc-900/95 transition-all duration-300 backdrop-blur-sm"
              >
                <skill.icon
                  className={`mx-auto mb-4 ${skill.colorClass} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  size={44}
                />
                <p className="font-medium text-base whitespace-nowrap">
                  {skill.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}