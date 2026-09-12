import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../../data/galleryData";
import { Sparkles, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VISUAL SHOWCASE</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          THE SANCTUARY IN FRAMES
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          A glimpse into the energy, architecture, and intense focus that fuels our training floor day and night.
        </p>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {galleryData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setActiveImageIndex(idx)}
            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl cursor-pointer ${item.span}`}
          >
            {/* Background Image with Zoom */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

            {/* View Icon (Centered on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                <Eye className="w-6 h-6 text-[var(--primary-accent)]" />
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-5 left-5 right-5 z-10 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--primary-accent)] block">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-[var(--primary-accent)] transition-colors">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 z-20 focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)] z-20 transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)] z-20 transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Active Image Container */}
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryData[activeImageIndex].image}
                alt={galleryData[activeImageIndex].title}
                className="max-h-[80vh] w-auto object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-[var(--primary-accent)] tracking-widest block">
                    {galleryData[activeImageIndex].category}
                  </span>
                  <h4 className="font-display font-black text-xl text-white">
                    {galleryData[activeImageIndex].title}
                  </h4>
                </div>
                <span className="text-xs text-zinc-400 font-bold">
                  {activeImageIndex + 1} / {galleryData.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
