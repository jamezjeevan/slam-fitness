import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trainersData } from "../../data/trainersData";
import { gymConfig } from "../../config/gymConfig";
import {
  Sparkles,
  ArrowRight,
  X,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { InstagramIcon, TwitterIcon } from "../common/SocialIcons";

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section id="trainers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ELITE COACHING STAFF</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            MASTER COACHES.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Mentorship by certified exercise physiologists and competitive athletic trainers dedicated to engineering your breakthrough.
          </p>
        </div>

        <a
          href={gymConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center gap-2 w-fit cursor-pointer"
        >
          <span>REQUEST PERSONAL COACH</span>
          <ArrowRight className="w-4 h-4 text-[var(--primary-accent)]" />
        </a>
      </div>

      {/* Trainer Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainersData.map((trainer, idx) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative h-[440px] rounded-3xl overflow-hidden border border-white/10 bg-[#111115] shadow-xl flex flex-col justify-end p-6 select-none"
          >
            {/* Trainer Photo with Hover Zoom */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
              style={{ backgroundImage: `url(${trainer.photo})` }}
            />

            {/* Dark Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/75 transition-all duration-500" />

            {/* Social Icons (Top Right) */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a
                href={trainer.socials.instagram}
                className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[var(--primary-accent)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={trainer.socials.twitter}
                className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[var(--primary-accent)] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Experience Pill (Top Left) */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-[var(--primary-accent)]">
                {trainer.experience}
              </span>
            </div>

            {/* Slide-Up Info Panel */}
            <div className="relative z-10 space-y-2 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[var(--primary-accent)] block">
                {trainer.title}
              </span>

              <h3 className="font-display font-black text-2xl text-white tracking-tight">
                {trainer.name}
              </h3>

              <p className="text-xs text-zinc-300 font-medium">
                {trainer.specialization}
              </p>

              {/* View Profile Button */}
              <div className="pt-3">
                <button
                  onClick={() => setSelectedTrainer(trainer)}
                  className="w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-[var(--primary-accent)] hover:text-black text-white border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>VIEW PROFILE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trainer Profile Lightbox / Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrainer(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#111115] border border-white/15 overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              {/* Photo */}
              <div
                className="h-64 md:h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedTrainer.photo})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#111115]" />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                  aria-label="Close trainer modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div>
                  <span className="text-xs uppercase font-extrabold text-[var(--primary-accent)] tracking-widest block">
                    {selectedTrainer.title}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    {selectedTrainer.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-semibold mt-0.5">
                    {selectedTrainer.experience}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider">
                    Specialization
                  </span>
                  <p className="text-xs text-zinc-200 font-medium">
                    {selectedTrainer.specialization}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedTrainer.bio}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider">
                    Certifications & Accreditations
                  </span>
                  <div className="space-y-1">
                    {selectedTrainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/917947149031?text=${encodeURIComponent("Hello! I would like to book a personal training session with " + selectedTrainer.name + " at Slam KNK Road.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-95 transition-opacity text-center flex items-center justify-center cursor-pointer"
                  >
                    BOOK SESSION WITH {selectedTrainer.name}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
