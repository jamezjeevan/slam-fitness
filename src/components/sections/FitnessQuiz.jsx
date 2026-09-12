import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle, Zap } from "lucide-react";

export default function FitnessQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "",
    frequency: "",
  });

  const goals = [
    { label: "Lose Weight", desc: "Metabolic burn & lean definition", rec: "HIIT + CARDIO CONDITIONING" },
    { label: "Build Muscle", desc: "Hypertrophy & progressive overload", rec: "HYPERTROPHY & MUSCLE GAIN" },
    { label: "Improve Strength", desc: "Maximal power & heavy compounds", rec: "POWERLIFTING & STRENGTH" },
    { label: "Improve Fitness", desc: "Agility, engine & work capacity", rec: "FUNCTIONAL TRAINING & CROSSFIT" },
    { label: "Learn Combat", desc: "Striking, defense & discipline", rec: "BOXING & MMA FOUNDATIONS" },
    { label: "General Wellness", desc: "Joint mobility, posture & longevity", rec: "YOGA & SOMATIC RECOVERY" },
  ];

  const frequencies = [
    { label: "2 - 3 Days / Week", desc: "Full-body compound structure" },
    { label: "4 - 5 Days / Week", desc: "Upper / Lower or Push-Pull-Legs split" },
    { label: "6 Days / Week", desc: "High-volume elite athlete periodization" },
  ];

  const handleSelectGoal = (goal) => {
    setAnswers({ ...answers, goal });
    setStep(2);
  };

  const handleSelectFrequency = (frequency) => {
    setAnswers({ ...answers, frequency });
    setStep(3);
  };

  const handleReset = () => {
    setAnswers({ goal: "", frequency: "" });
    setStep(1);
  };

  // Find recommended program
  const selectedGoalObj = goals.find((g) => g.label === answers.goal);
  const recommendedProgram = selectedGoalObj ? selectedGoalObj.rec : "STRENGTH + HIIT HYBRID";

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto bg-[#111115] border border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary-accent)]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ASSESSMENT</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            WHAT'S YOUR GOAL?
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400">
            Take our 30-second assessment to match your exact schedule with our science-backed training split.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <span
              className={`w-12 h-1.5 rounded-full transition-colors ${
                step >= 1 ? "bg-[var(--primary-accent)]" : "bg-zinc-800"
              }`}
            />
            <span
              className={`w-12 h-1.5 rounded-full transition-colors ${
                step >= 2 ? "bg-[var(--primary-accent)]" : "bg-zinc-800"
              }`}
            />
            <span
              className={`w-12 h-1.5 rounded-full transition-colors ${
                step === 3 ? "bg-[var(--primary-accent)]" : "bg-zinc-800"
              }`}
            />
          </div>
        </div>

        {/* Dynamic Steps with Framer Motion AnimatePresence */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <p className="text-sm font-bold text-center text-zinc-300 uppercase tracking-wider mb-6">
                Step 1: What is your primary fitness goal?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.label}
                    onClick={() => handleSelectGoal(g.label)}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-accent)]/50 hover:bg-white/10 text-left transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <span className="font-display font-black text-base text-white group-hover:text-[var(--primary-accent)] transition-colors">
                        {g.label}
                      </span>
                      <p className="text-xs text-zinc-400 mt-1">{g.desc}</p>
                    </div>
                    <div className="pt-3 flex justify-end">
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[var(--primary-accent)] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <p className="text-sm font-bold text-center text-zinc-300 uppercase tracking-wider mb-6">
                Step 2: How often can you commit to training?
              </p>

              <div className="space-y-3">
                {frequencies.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => handleSelectFrequency(f.label)}
                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--primary-accent)]/50 hover:bg-white/10 text-left transition-all duration-300 group flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <span className="font-display font-black text-lg text-white group-hover:text-[var(--primary-accent)] transition-colors block">
                        {f.label}
                      </span>
                      <span className="text-xs text-zinc-400">{f.desc}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-[var(--primary-accent)] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  ← Back to Step 1
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-6 py-2"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 flex items-center justify-center text-[var(--primary-accent)]">
                <Zap className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold text-zinc-400 tracking-[0.2em] block">
                  YOUR RECOMMENDED PROGRAM
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--primary-accent)]">
                  {recommendedProgram}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400">Primary Goal:</span>
                  <span className="font-bold text-white">{answers.goal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Frequency:</span>
                  <span className="font-bold text-white">{answers.frequency}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/917947149031?text=${encodeURIComponent("Hello Slam Fitness KNK Road! I completed the quiz for " + answers.goal + " (" + answers.frequency + ") and want to start training.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-black text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-95 transition-opacity shadow-lg shadow-[var(--primary-accent-glow)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>START TRAINING NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleReset}
                  className="px-6 py-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RETAKE QUIZ</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
