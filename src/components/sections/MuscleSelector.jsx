import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  muscleGroupsData,
  workoutOfTheDay,
} from "../../data/muscleWorkoutsData";
import { gymConfig } from "../../config/gymConfig";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Target,
  Zap,
} from "lucide-react";

export default function MuscleSelector() {
  const [selectedMuscle, setSelectedMuscle] = useState("Chest");
  const [showWodModal, setShowWodModal] = useState(false);

  const muscleKeys = ["Chest", "Back", "Arms", "Legs", "Core"];
  const currentMuscle = muscleGroupsData[selectedMuscle];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Target className="w-3.5 h-3.5" />
          <span>TARGETED PHYSIQUE ANATOMY</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          INTERACTIVE MUSCLE EXPLORER
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Target any muscle group to inspect specialized biomechanical movements, optimal rep tempos, and professional coach cues.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Muscle Selector Tabs & Exercise Breakdown (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Muscle Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#111115] border border-white/10">
            {muscleKeys.map((muscle) => {
              const isActive = selectedMuscle === muscle;
              return (
                <button
                  key={muscle}
                  onClick={() => setSelectedMuscle(muscle)}
                  className={`flex-1 min-w-[100px] py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[var(--primary-accent)] text-black shadow-lg shadow-[var(--primary-accent-glow)] scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {muscle}
                </button>
              );
            })}
          </div>

          {/* Muscle Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMuscle}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#111115] border border-white/10 space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Ambient Light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-accent)]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Title & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--primary-accent)]">
                    {currentMuscle.tagline}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {currentMuscle.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300">
                    {currentMuscle.recommendedSplit}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-xs font-bold text-[var(--primary-accent)]">
                    {currentMuscle.intensity}
                  </span>
                </div>
              </div>

              {/* Exercises List */}
              <div className="space-y-3">
                <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
                  Recommended Core Movements:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentMuscle.exercises.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-display font-bold text-sm text-white">
                          {ex.name}
                        </span>
                        <span className="text-[11px] font-bold text-[var(--primary-accent)] px-2 py-0.5 rounded bg-black/40">
                          {ex.sets}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        {ex.focus} • <strong className="text-zinc-300">{ex.reps}</strong>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coach Pro Tip */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-start gap-3">
                <Zap className="w-5 h-5 text-[var(--primary-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase font-bold text-[var(--primary-accent)] tracking-wider block">
                    Coach Biomechanics Cue
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-0.5">
                    {currentMuscle.proTip}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Dynamic Workout of the Day Card (4 cols) */}
        <div className="lg:col-span-4">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#14141a] border-2 border-[var(--primary-accent)]/40 shadow-2xl space-y-6 overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--primary-accent)]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[var(--primary-accent)] text-black text-[10px] font-extrabold uppercase tracking-widest">
                DAILY SPOTLIGHT
              </span>
              <span className="flex items-center gap-1 text-xs text-zinc-400 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[var(--primary-accent)]" />
                {workoutOfTheDay.duration}
              </span>
            </div>

            <div>
              <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                {workoutOfTheDay.title}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
                {workoutOfTheDay.focus}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {workoutOfTheDay.description}
              </p>
            </div>

            {/* WOD Specs */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
              <div className="p-2.5 rounded-xl bg-white/5 text-center">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">LEVEL</span>
                <span className="font-display font-bold text-white">{workoutOfTheDay.level}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 text-center">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">BURN</span>
                <span className="font-display font-bold text-[var(--primary-accent)]">{workoutOfTheDay.calories}</span>
              </div>
            </div>

            {/* View Workout Button */}
            <button
              onClick={() => setShowWodModal(true)}
              className="w-full py-3.5 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--primary-accent-glow)]"
            >
              <span>VIEW WORKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Workout of the Day Full Breakdown Modal */}
      <AnimatePresence>
        {showWodModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWodModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#111115] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowWodModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                aria-label="Close WOD modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs uppercase font-extrabold text-[var(--primary-accent)] tracking-widest block">
                  CIRCUIT PROTOCOL
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {workoutOfTheDay.title}: {workoutOfTheDay.focus}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Estimated duration: {workoutOfTheDay.duration} • Intensity: {workoutOfTheDay.level}
                </p>
              </div>

              {/* Warmup */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
                  Dynamic Warmup (5-8 Mins):
                </span>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {workoutOfTheDay.warmup.map((w, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary-accent)] shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working Sets */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
                  Working Circuit:
                </span>
                <div className="space-y-2.5">
                  {workoutOfTheDay.circuits.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-display font-bold text-white block">
                          {c.movement}
                        </span>
                        <span className="text-zinc-400 text-[11px]">
                          Target: {c.reps} • Rest: {c.rest}
                        </span>
                      </div>
                      <span className="font-bold text-[var(--primary-accent)] px-2 py-1 rounded bg-black/50">
                        {c.sets}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/917947149031?text=${encodeURIComponent("Hello Slam Fitness KNK Road! I am interested in training with the " + workoutOfTheDay.title + " routine.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl font-display font-black text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-opacity text-center flex items-center justify-center cursor-pointer"
                >
                  START TRAINING AT SLAM KNK ROAD
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
