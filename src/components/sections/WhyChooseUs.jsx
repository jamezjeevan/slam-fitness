import { motion } from "framer-motion";
import { Users, Target, Dumbbell, Apple, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      number: "01",
      icon: Users,
      heading: "EXPERT TRAINERS",
      description:
        "Professional trainers focused on your progress. Elite coaches with international certifications dedicated to perfecting your biomechanics.",
      accent: "from-blue-500/20 to-transparent",
    },
    {
      number: "02",
      icon: Target,
      heading: "PERSONALIZED PROGRAMS",
      description:
        "Training designed around your goals. Periodized protocols adapted to your lifestyle, body composition, and recovery bandwidth.",
      accent: "from-[var(--primary-accent)]/20 to-transparent",
    },
    {
      number: "03",
      icon: Dumbbell,
      heading: "MODERN EQUIPMENT",
      description:
        "High-quality equipment for effective training. Eleiko competition plates, custom racks, calibrated dumbbells, and medical-grade telemetry.",
      accent: "from-purple-500/20 to-transparent",
    },
    {
      number: "04",
      icon: Apple,
      heading: "NUTRITION GUIDANCE",
      description:
        "Support for training and nutrition. Evidence-based macronutrient breakdowns, micronutrient fueling strategies, and real-world sustainable eating.",
      accent: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE STANDARD OF EXCELLENCE</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          WHY CHOOSE US
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Engineered for individuals who refuse mediocrity. Experience the four foundational pillars that define our training ethos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-[#111115] border border-white/10 overflow-hidden group hover:border-[var(--primary-accent)]/40 transition-all duration-300 shadow-xl"
            >
              {/* Dynamic Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Number Watermark */}
              <span className="font-display font-black text-6xl text-white/5 absolute top-4 right-6 group-hover:text-[var(--primary-accent)]/10 transition-colors pointer-events-none">
                {card.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[var(--primary-accent)]/40 transition-all duration-300">
                <Icon className="w-7 h-7 text-[var(--primary-accent)] transition-transform duration-300 group-hover:rotate-6" />
              </div>

              {/* Content */}
              <h3 className="font-display font-extrabold text-lg text-white mb-3 tracking-tight group-hover:text-[var(--primary-accent)] transition-colors">
                {card.heading}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {card.description}
              </p>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
