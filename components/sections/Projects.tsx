'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Jungle Jumper',
    description:
      'High-performance multiplayer framework built for real-time physics synchronization and low-latency input handling.',
    image: '/projects/project-1.jpg',
    tags: ['Unity', 'C#', 'Multiplayer'],
  },
  {
    title: 'Neon Drift',
    description:
      'Stylized arcade racing experience with dynamic track generation, advanced shader effects, and satisfying drift mechanics.',
    image: '/projects/project-2.jpg',
    tags: ['Unity', 'Shader Graph', 'C#', 'Procedural'],
  },
  {
    title: 'Echo Protocol',
    description:
      'Stealth-action prototype with modular level design, AI behavior trees, sound-based detection, and dynamic lighting system.',
    image: '/projects/project-3.jpg',
    tags: ['Unity', 'C#', 'AI', 'Level Design'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-yellow-500/80 font-medium mb-3">
            Portfolio
          </h2>
          <h3 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Project <span className="text-zinc-500">Work</span>
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-md text-zinc-400 text-lg leading-relaxed"
        >
          A collection of technical challenges, gameplay systems, and digital experiences crafted with precision.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 hover:border-zinc-700/50"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-zinc-500 group-hover:text-yellow-500 transition-transform group-hover:-rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-2 text-sm">{project.description}</p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}