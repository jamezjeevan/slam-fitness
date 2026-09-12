import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { gymConfig } from "../../config/gymConfig";

export default function About() {
  const highlights = [
    {
      value: gymConfig.stats.members,
      label: gymConfig.stats.membersLabel,
    },
    {
      value: gymConfig.stats.trainers,
      label: gymConfig.stats.trainersLabel,
    },
    {
      value: gymConfig.stats.programs,
      label: gymConfig.stats.programsLabel,
    },
    {
      value: gymConfig.stats.openDays,
      label: gymConfig.stats.openDaysLabel,
    },
  ];

  const pillars = [
    "Biomechanical assessment and personalized progression tracks",
    "Elite Eleiko & Hammer Strength competition equipment",
    "Comprehensive recovery suite with eucalyptus steam & dry sauna",
    "Supportive high-accountability athletic culture",
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="space-y-2 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>OUR PHILOSOPHY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight"
        >
          MORE THAN A GYM.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-impact text-2xl sm:text-4xl text-zinc-400 tracking-wide"
        >
          A COMMUNITY BUILT FOR TRANSFORMATION.
        </motion.p>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Large Gym Imagery with Layered Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
              alt={`${gymConfig.gymName} training facility`}
              className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Bottom floating badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#111115]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[var(--primary-accent)] tracking-wider block">
                  {gymConfig.gymName}
                </span>
                <span className="text-white font-display font-extrabold text-sm sm:text-base">
                  Luxury Athletic Architecture
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary-accent)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Description & Counters */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong className="text-white">{gymConfig.gymName}</strong>, we believe fitness is not a seasonal resolution—it is a lifelong craft. We have stripped away the friction of traditional commercial gyms to build an immersive temple for human physical advancement.
            </p>
            <p>
              Whether you are an aspiring powerlifter, marathon runner, combat athlete, or busy professional reclaiming vitality, our multidisciplinary training ecosystem gives you the exact tools, recovery modalities, and mentorship required to surpass your goals.
            </p>
          </div>

          {/* Core Pillars checklist */}
          <div className="space-y-3">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">{pillar}</span>
              </div>
            ))}
          </div>

          {/* Animated Statistics Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--primary-accent)] block">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-bold text-zinc-400 tracking-wider block mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Discover More & CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#programs"
              className="px-7 py-3.5 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[var(--primary-accent-glow)]"
            >
              <span>DISCOVER PROGRAMS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all cursor-pointer"
            >
              BOOK FACILITY TOUR
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
