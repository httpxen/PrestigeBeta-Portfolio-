"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Gallery items with categories, titles, and years
const galleryItems = [
  { id: 1, category: "Photo Restoration", src: "/gallery/restoration-1.jpg", title: "Vintage Revival", year: "2021" },
  { id: 2, category: "Photo Restoration", src: "/gallery/restoration-2.jpg", title: "Color Restoration", year: "2022" },
  { id: 3, category: "Graphic Art", src: "/gallery/art-1.jpg", title: "Sunset Silhouette", year: "2023" },
  { id: 4, category: "Graphic Art", src: "/gallery/art-2.jpg", title: "Abstract Form", year: "2022" },
  { id: 5, category: "Graphic Art", src: "/gallery/art-3.jpg", title: "Burning Skies", year: "2022" },
  { id: 6, category: "Fliers", src: "/gallery/flier-1.jpg", title: "Coding Logic", year: "2022" },
  { id: 7, category: "Fliers", src: "/gallery/flier-2.jpg", title: "History of C", year: "2022" },
  { id: 8, category: "Photoshop", src: "/gallery/edit-1.jpg", title: "Portrait Concept", year: "2019" },
  { id: 9, category: "Photoshop", src: "/gallery/edit-2.jpg", title: "Fashion Spread", year: "2019" },
  { id: 10, category: "Graphic Design", src: "/gallery/design-1.jpg", title: "Cyber Punk Style", year: "2023" },
  { id: 11, category: "Graphic Design", src: "/gallery/design-2.jpg", title: "Webinar Poster", year: "2025" },
  { id: 12, category: "3D Modeling", src: "/gallery/blender1.png", title: "3D Crownr", year: "2023" },
  { id: 13, category: "3D Modeling", src: "/gallery/spidertesla.png", title: "Spider Tesla", year: "2023" },
  { id: 14, category: "3D Modeling", src: "/gallery/ss1.png", title: "3D Texture", year: "2023" },
  { id: 15, category: "3D Modeling", src: "/gallery/Kitchen.png", title: "3D Kitchen", year: "2023" },
  { id: 16, category: "Krita", src: "/gallery/kairo.png", title: "2D Painting", year: "2021" },
  { id: 17, category: "3D Modeling", src: "/gallery/ultimatespidertesla.png", title: "Ultimate Spider Tesla", year: "2026" },
  { id: 18, category: "3D Modeling", src: "/gallery/liligant.png", title: "Liligant 3D", year: "2023" },
];

const categories = ["All", "Photo Restoration", "Graphic Art", "Fliers", "Photoshop", "Graphic Design","3D Modeling","Krita"];

type GalleryItem = typeof galleryItems[number];

export default function LuxuryGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [cursorText, setCursorText] = useState("");
  const containerRef = useRef(null);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section 
      id="gallery"
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 overflow-hidden selection:bg-yellow-500 selection:text-black"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-yellow-600" />
              <span className="text-yellow-600 font-mono text-[10px] uppercase tracking-[0.5em]">Selected Works</span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-light tracking-tighter leading-none uppercase text-white">
              The <span className="font-black italic text-zinc-800 hover:text-yellow-500 transition-colors duration-700">Gallery</span>
            </h2>
          </div>

          <nav className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 text-[10px] uppercase tracking-tighter transition-all border ${
                  activeCategory === cat ? "bg-white text-black border-white" : "text-zinc-500 border-zinc-800 hover:border-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </header>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                onHover={() => setCursorText("View Project")} 
                onLeave={() => setCursorText("")} 
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal - Adjusted size & close button */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 md:p-10 cursor-default"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Circular Close Button */}
                <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-14 right-4 md:-top-16 md:right-8 
                            flex items-center justify-center w-12 h-12 md:w-14 md:h-14 
                            rounded-full bg-transparent border-2 border-white/70 text-white 
                            text-3xl md:text-4xl font-thin leading-none 
                            hover:bg-yellow-500 hover:border-yellow-500 hover:text-black 
                            hover:scale-110 transition-all duration-300 shadow-lg z-50"
                aria-label="Close gallery view"
                >
                ×
                </button>

              {/* Image - Controlled size, not too big */}
              <div className="relative bg-zinc-900/40 rounded-xl overflow-hidden shadow-2xl border border-zinc-800/60 w-full max-w-[90vw] md:max-w-4xl max-h-[75vh] flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  width={1400}
                  height={1800}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-5 text-center text-white pointer-events-none">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                  {selectedItem.title}
                </h3>
                <p className="mt-1.5 text-zinc-400 text-sm md:text-base uppercase tracking-widest font-mono">
                  {selectedItem.category} • {selectedItem.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  item,
  onHover,
  onLeave,
  onClick,
}: {
  item: GalleryItem;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="break-inside-avoid group cursor-pointer relative"
    >
      <div className="relative overflow-hidden bg-zinc-900 aspect-[4/5]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
          />
        </motion.div>

        <div className="absolute top-4 right-4 overflow-hidden">
          <motion.div 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            className="bg-white text-black p-2 rounded-full"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start border-t border-zinc-900 pt-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight uppercase group-hover:text-yellow-500 transition-colors text-white">
            {item.title}
          </h3>
          <p className="text-[10px] text-zinc-600 font-mono mt-1 uppercase tracking-widest">{item.category}</p>
        </div>
        <span className="text-[10px] font-mono text-zinc-700">/ {item.id < 10 ? `0${item.id}` : item.id}</span>
      </div>
    </motion.div>
  );
}