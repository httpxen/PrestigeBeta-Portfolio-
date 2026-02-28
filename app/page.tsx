'use client';

import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';
import CustomCursor from '@/components/CustomCursor'; // ← your cursor component

import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Gallery from '@/components/sections/Gallery';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100 antialiased font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden cursor-none">
      {/* Custom cursor – placed as first child, highest layer */}
      <CustomCursor />

      {/* Background grid */}
      <InteractiveGridPattern
        className="fixed inset-0 z-0"
        cellSize={62}
        glowColor="rgba(234, 179, 8, 0.28)"
        borderColor="rgba(75, 85, 99, 0.22)"
        proximity={160}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-zinc-950/68 z-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}