'use client';

import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50 px-6 font-jakarta">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-3 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Brand / Logo - GWD. Style */}
        <a href="#" className="flex items-center group">
          <span className="text-2xl font-[900] tracking-tighter text-white transition-all duration-300 group-hover:tracking-normal">
            LG<span className="text-yellow-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {['About', 'Projects', 'Gallery', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-[12px] font-semibold text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-zinc-950 text-[12px] font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 active:scale-95 shadow-lg shadow-white/5"
          >
            Let's Talk
          </a>
        </div>

      </nav>
    </div>
  );
}