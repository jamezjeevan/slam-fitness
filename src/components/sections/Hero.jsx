import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Award, Users, Star, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { gymConfig, getLiveGymStatus } from "../../config/gymConfig";

export default function Hero() {
  const liveStatus = getLiveGymStatus();
  const stats = [
    {
      value: gymConfig.stats.rating,
      label: gymConfig.stats.ratingLabel,
      icon: Star,
    },
    {
      value: gymConfig.stats.trainers,
      label: gymConfig.stats.trainersLabel,
      icon: Award,
    },
    {
      value: gymConfig.stats.openDays,
      label: gymConfig.stats.openDaysLabel,
      icon: Clock,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Cinematic Slow Zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Multi-layer Vignette & Ambient Mesh Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/40" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/70 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[var(--primary-accent)]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        <div className="max-w-4xl space-y-6">
          {/* Trust Badges Bar: Rating, Location, Live Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2"
          >
            {/* 5.0 Star Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>5.0★ (41 Ratings)</span>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200 text-xs font-semibold backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
              <span>Shafee Mohammed Road, Thousand Lights, Chennai</span>
            </div>

            {/* Operating status badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open until 10:00 pm (6:00 am - 10:00 pm)</span>
            </div>

            {/* Services Badges */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-[var(--primary-accent)] text-xs font-bold backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Unisex Gym • Get Your Own Trainer</span>
            </div>
          </motion.div>

          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[var(--primary-accent)]">
              {gymConfig.gymTagline}
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
              {gymConfig.gymHeroHeadline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[var(--primary-accent)]">
                {gymConfig.gymHeroHeadline2}
              </span>
            </h1>
          </motion.div>

          {/* Animated Secondary Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-impact text-lg sm:text-2xl lg:text-3xl tracking-[0.12em] text-zinc-300"
          >
            {gymConfig.gymHeroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed"
          >
            {gymConfig.gymDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#programs"
              className="px-8 py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 active:scale-95 transition-all text-center flex items-center justify-center gap-2 shadow-2xl shadow-[var(--primary-accent-glow)] cursor-pointer light-sweep"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={gymConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba5a] text-black transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ENQUIRE NOW WHATSAPP {gymConfig.whatsappNumber}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Statistics Panel & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full md:w-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center md:items-start group hover:border-[var(--primary-accent)]/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                  <Icon className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </span>
                </div>
                <span className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight group-hover:text-[var(--primary-accent)] transition-colors">
                  {stat.value}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Vertical Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-2 text-xs font-impact tracking-[0.2em] text-zinc-400 hover:text-[var(--primary-accent)] transition-colors py-2 cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[var(--primary-accent)]" />
        </motion.a>
      </div>
    </section>
  );
}
