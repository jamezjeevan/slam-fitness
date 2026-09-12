import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gymConfig } from "../../config/gymConfig";
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Sparkles,
  Clock,
  Compass,
  X,
  Award,
  Users,
  Dumbbell,
  UserCheck,
} from "lucide-react";

export default function Contact() {
  const [showDirections, setShowDirections] = useState(false);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT CONCIERGE & ENQUIRY Desk</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          CONNECT WITH {gymConfig.gymName}.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Reach out directly via Call or WhatsApp for instant enquiries on membership options, Get Your Own Trainer services, and facility tours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Contact Information & Action Buttons (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-[#111115] border border-white/10 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[var(--primary-accent)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  ★ 5.0 (41 Ratings)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-[var(--primary-accent)] text-[11px] font-bold flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  Unisex Gym
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 text-[11px] font-medium flex items-center gap-1">
                  <Dumbbell className="w-3 h-3 text-[var(--primary-accent)]" />
                  Fitness Centres • Gyms
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px] font-bold flex items-center gap-1">
                  <UserCheck className="w-3 h-3" />
                  Get Your Own Trainer
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                {gymConfig.gymName}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Khader Nawaz Khan Road (KNK Road), Thousand Lights, Chennai
              </p>
            </div>

            <div className="space-y-4 text-sm text-zinc-300">
              <div
                onClick={() => setShowDirections(true)}
                className="flex items-start gap-3 cursor-pointer group p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--primary-accent)]/30 transition-all"
              >
                <MapPin className="w-5 h-5 text-[var(--primary-accent)] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs uppercase font-bold text-zinc-400 block">Address</span>
                  <span className="font-medium text-white group-hover:text-[var(--primary-accent)] transition-colors">
                    {gymConfig.address}
                  </span>
                  <span className="text-xs text-zinc-400 block">Thousand Lights, Chennai</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${gymConfig.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <Phone className="w-5 h-5 text-[var(--primary-accent)] shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">Call Desk</span>
                    <span className="font-bold text-white text-xs">{gymConfig.phoneFormatted}</span>
                  </div>
                </a>

                <a
                  href={gymConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#25D366] block">WhatsApp Now</span>
                    <span className="font-bold text-white text-xs">7947149031</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <a
              href={`tel:${gymConfig.phone}`}
              className="py-3.5 px-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DESK</span>
            </a>

            <a
              href={gymConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba5a] text-black transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#25D366]/20 font-extrabold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WHATSAPP</span>
            </a>

            <button
              onClick={() => setShowDirections(true)}
              className="py-3.5 px-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5 cursor-pointer font-extrabold"
            >
              <Navigation className="w-4 h-4" />
              <span>DIRECTIONS</span>
            </button>
          </div>
        </div>

        {/* Right Column: Operating Hours & Schedule (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-[#111115] border border-white/10 shadow-xl space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--primary-accent)]" />
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  OPERATING HOURS SCHEDULE
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold uppercase">
                Open until 10:00 pm
              </span>
            </div>

            <p className="text-xs text-zinc-400">
              Visit our facility anytime during operational hours for direct walk-ins and consultation with our personal coaches.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white">SAT (Today)</span>
                <span className="text-xs font-bold text-[var(--primary-accent)]">6:00 am - 10:00 pm</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white">SUN</span>
                <span className="text-xs font-semibold text-zinc-300">6:00 am - 10:00 pm</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">MON, 14th Sep</span>
                  <span className="text-xs font-semibold text-zinc-300">6:00 am - 10:00 pm</span>
                </div>
                <p className="text-[11px] text-amber-400 font-medium">
                  (Ganesh Chaturthi) Business Hours may be affected
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white">TUE - FRI</span>
                <span className="text-xs font-semibold text-zinc-300">6:00 am - 10:00 pm</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href={gymConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--primary-accent-glow)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENQUIRE NOW WHATSAPP 7947149031</span>
            </a>
          </div>
        </div>
      </div>

      {/* Directions modal */}
      <AnimatePresence>
        {showDirections && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDirections(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md rounded-3xl bg-[#111115] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 space-y-4"
            >
              <button
                onClick={() => setShowDirections(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-accent)] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>LOCATION & ACCESS</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white">
                {gymConfig.gymName} Main Center
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-300 space-y-2">
                <p>
                  <strong className="text-white">Address:</strong> {gymConfig.address}
                </p>
                <p>
                  <strong className="text-white">Hours:</strong> {gymConfig.operatingHours.display}
                </p>
                <p className="text-zinc-400 text-[11px]">
                  Visit our front concierge desk upon arrival on KNK Road.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={gymConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 text-center flex items-center justify-center gap-1.5 cursor-pointer font-extrabold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>OPEN GOOGLE MAPS</span>
                </a>
                <button
                  onClick={() => setShowDirections(false)}
                  className="px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
