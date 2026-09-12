import { motion } from "framer-motion";
import { facilitiesData } from "../../data/facilitiesData";
import {
  Dumbbell,
  Flame,
  Activity,
  Zap,
  Sparkles,
  Award,
  ShieldCheck,
  Car,
  Wifi,
} from "lucide-react";

export default function Facilities() {
  const iconMap = {
    Dumbbell,
    Flame,
    Activity,
    Zap,
    Sparkles,
    Award,
    ShieldCheck,
    Car,
    Wifi,
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WORLD-CLASS ENVIRONMENT</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          LUXURY AMENITIES & FACILITIES
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Engineered for high performance and restorative recovery. Every square foot is curated with the finest athletic hardware and hospitality.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilitiesData.map((item, idx) => {
          const Icon = iconMap[item.icon] || Dumbbell;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              className="group p-6 sm:p-7 rounded-3xl bg-[#111115] border border-white/10 hover:border-[var(--primary-accent)]/40 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle top badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary-accent)] group-hover:scale-110 group-hover:bg-[var(--primary-accent)]/10 transition-all duration-300">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-zinc-400 tracking-wider group-hover:text-[var(--primary-accent)] transition-colors">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2 tracking-tight group-hover:text-[var(--primary-accent)] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom decorative accent */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
