import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Flame, Zap, Sparkles } from "lucide-react";
import { programsData, PROGRAM_CATEGORIES } from "../../data/programsData";

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredPrograms =
    selectedCategory === "ALL"
      ? programsData
      : programsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METICULOUS METHODOLOGIES</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            ENGINEERED DISCIPLINES.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Choose your arena. Every module is forged through exercise science, periodized progression, and high-energy coaching.
          </p>
        </div>

        {/* Dynamic Category Pill Counters */}
        <div className="text-xs uppercase font-mono tracking-widest text-zinc-400">
          Showing <span className="text-[var(--primary-accent)] font-bold">{filteredPrograms.length}</span> Training Paths
        </div>
      </div>

      {/* Filter Tabs Horizontal Scrolling Menu */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {PROGRAM_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[var(--primary-accent)] text-black shadow-lg shadow-[var(--primary-accent-glow)]"
                  : "bg-[#111115] text-zinc-400 border border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Programs Grid with Smooth Framer Motion Layout Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredPrograms.map((program) => (
            <motion.div
              layout
              key={program.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl flex flex-col justify-end p-6 cursor-pointer"
              onClick={() => {
                window.open(`https://wa.me/917947149031?text=${encodeURIComponent("Hello! I want to enquire about the " + program.title + " program at Slam KNK Road.")}`, "_blank");
              }}
            >
              {/* Full Background Image with Zoom on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${program.image})` }}
              />

              {/* Dynamic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:via-black/80 transition-all duration-500" />

              {/* Top Badge: Category & Intensity */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-widest text-[var(--primary-accent)]">
                  {program.category}
                </span>

                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[var(--primary-accent)] group-hover:text-black group-hover:border-[var(--primary-accent)] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Content Area with Hover Upward Movement */}
              <div className="relative z-10 space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-[11px] font-semibold text-[var(--primary-accent)] uppercase tracking-wider">
                  {program.tagline}
                </p>

                <h3 className="font-display font-black text-2xl text-white tracking-tight group-hover:text-[var(--primary-accent)] transition-colors">
                  {program.title}
                </h3>

                {/* Description reveal */}
                <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                  {program.description}
                </p>

                {/* Program Details pills */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/15 text-[11px] text-zinc-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                    {program.calories}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
