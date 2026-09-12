import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { branchesData } from "../../data/branchesData";
import { gymConfig } from "../../config/gymConfig";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  Check,
  X,
  Compass,
  Car,
} from "lucide-react";

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState(branchesData[0]);
  const [directionsModalBranch, setDirectionsModalBranch] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCallClick = (e, phone) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="branches" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STRATEGIC TRAINING SITES</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          FIND YOUR GYM.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Conveniently located high-performance campuses designed with expansive square footage and private member amenities.
        </p>

        {copiedPhone && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mt-2"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Branch phone copied to clipboard!</span>
          </motion.div>
        )}
      </div>

      {/* Interactive Campus Map & Location Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Branch Cards List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {branchesData.map((branch) => {
            const isSelected = selectedBranch.id === branch.id;
            return (
              <motion.div
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#14141a] border-2 border-[var(--primary-accent)] shadow-xl shadow-[var(--primary-accent-glow)]"
                    : "bg-[#111115] border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-extrabold text-xl text-white">
                        {branch.name}
                      </h3>
                      {branch.isFlagship && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-[10px] font-bold text-[var(--primary-accent)] uppercase">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 font-semibold mt-0.5">
                      {branch.tagline}
                    </p>
                  </div>

                  <span className="text-xs text-[var(--primary-accent)] font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {branch.hours}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-zinc-300 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--primary-accent)] shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[var(--primary-accent)] shrink-0" />
                    <span>{branch.phone}</span>
                  </div>
                </div>

                {/* Branch Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {branch.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] text-zinc-400"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Client-Side Safe Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirectionsModalBranch(branch);
                    }}
                    className="px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>GET DIRECTIONS</span>
                  </button>

                  <button
                    onClick={(e) => handleCallClick(e, branch.phone)}
                    className="px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL: {branch.phone}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Interactive Map Placeholder (5 cols) */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-white/10 bg-[#111115] shadow-2xl h-[480px] lg:h-[620px] flex flex-col justify-between p-6">
          {/* Map Preview Image Backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale contrast-125"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/30" />

          {/* Top Pin HUD */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-zinc-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-ping" />
              <span>INTERACTIVE MAP VIEW</span>
            </div>

            <span className="text-[11px] font-mono text-zinc-400">
              {selectedBranch.coordinates}
            </span>
          </div>

          {/* Central Map Pin Pointer Graphic */}
          <div className="relative z-10 my-auto text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-full bg-black/80 border-2 border-[var(--primary-accent)] flex items-center justify-center text-[var(--primary-accent)] shadow-2xl animate-bounce">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="inline-block px-4 py-1.5 rounded-2xl bg-black/90 border border-white/15 backdrop-blur-md">
              <h4 className="font-display font-extrabold text-sm text-white">
                {selectedBranch.name}
              </h4>
              <p className="text-[11px] text-zinc-400">{selectedBranch.address}</p>
            </div>
          </div>

          {/* Bottom Card Summary */}
          <div className="relative z-10 p-4 rounded-2xl bg-[#14141a]/95 border border-white/10 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-semibold">Active Campus:</span>
              <span className="font-bold text-[var(--primary-accent)]">
                {selectedBranch.name}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Open 7 days a week. Dedicated covered member parking available for all registered guests.
            </p>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      <AnimatePresence>
        {directionsModalBranch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDirectionsModalBranch(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#111115] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 space-y-5"
            >
              <button
                onClick={() => setDirectionsModalBranch(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-accent)] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>TRANSIT & DIRECTIONS GUIDE</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white">
                {directionsModalBranch.name}
              </h3>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">Full Address:</span>
                  <p className="text-zinc-400">{directionsModalBranch.address}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-white block flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                    Parking & Valet:
                  </span>
                  <p className="text-zinc-400">
                    Dedicated multi-level covered parking directly accessible from Main Entrance B.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(directionsModalBranch.name + " " + directionsModalBranch.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 text-center flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>OPEN GOOGLE MAPS</span>
                </a>

                <button
                  onClick={() => setDirectionsModalBranch(null)}
                  className="px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
