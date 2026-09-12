import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gymConfig } from "../../config/gymConfig";
import { Dumbbell } from "lucide-react";

export default function PageLoader({ onComplete }) {
  const [step, setStep] = useState(1); // 1: Logo, 2: Tagline, 3: Exit

  useEffect(() => {
    // Step 1: Logo reveal for 1.1s
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1100);

    // Step 2: Tagline reveal for 1.3s
    const timer2 = setTimeout(() => {
      setStep(3);
    }, 2400);

    // Step 3: Complete callback after exit
    const timer3 = setTimeout(() => {
      onComplete?.();
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#09090b] text-white px-6 select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[var(--primary-accent)]/10 blur-[120px] pointer-events-none" />

          {/* Logo Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center text-center mb-6"
          >
            <div className="w-16 h-16 mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-accent)]/20 to-transparent" />
              <Dumbbell className="w-8 h-8 text-[var(--primary-accent)]" />
            </div>

            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white flex items-center gap-2">
              <span>{gymConfig.logoText}</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold mt-1">
              {gymConfig.gymName}
            </p>
          </motion.div>

          {/* Tagline Reveal Stage */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center"
              >
                <div className="h-[2px] w-24 mx-auto mb-5 bg-gradient-to-r from-transparent via-[var(--primary-accent)] to-transparent" />
                <p className="font-impact text-lg md:text-2xl tracking-[0.25em] text-zinc-300">
                  TRAIN <span className="text-[var(--primary-accent)]">•</span> SWEAT{" "}
                  <span className="text-[var(--primary-accent)]">•</span> TRANSFORM
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress loader bar */}
          <div className="absolute bottom-12 w-48 h-1 bg-zinc-800/80 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
              className="h-full bg-[var(--primary-accent)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
