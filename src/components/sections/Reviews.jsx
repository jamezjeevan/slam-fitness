import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviewsData } from "../../data/reviewsData";
import { gymConfig } from "../../config/gymConfig";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section
      id="reviews"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ATHLETE ADVOCACY</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
            WHAT OUR MEMBERS SAY.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Real discipline. Consistent effort. Uncompromised standards. Read sample feedback from active club members.
          </p>
        </div>

        {/* Overall Rating Badge */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
          <div className="w-12 h-12 rounded-xl bg-[var(--primary-accent)] text-black font-display font-black text-xl flex items-center justify-center">
            {gymConfig.stats.rating}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[var(--primary-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider block mt-0.5">
              OVERALL SCORE {gymConfig.stats.overallRatingText}
            </span>
          </div>
        </div>
      </div>

      {/* Main Review Spotlight Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-[#111115] border border-white/10 p-8 sm:p-14 shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary-accent)]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Large Quote Watermark */}
          <Quote className="absolute -bottom-6 right-8 w-40 h-40 text-white/5 pointer-events-none" />

          {/* Animated Review Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Stars */}
              <div className="flex items-center gap-1.5 text-[var(--primary-accent)]">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-display font-bold text-xl sm:text-2xl text-white leading-relaxed italic">
                "{currentReview.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.memberName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--primary-accent)]"
                />
                <div>
                  <h4 className="font-display font-extrabold text-lg text-white">
                    {currentReview.memberName}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                    <span className="text-[var(--primary-accent)] font-semibold">
                      {currentReview.program}
                    </span>
                    <span>•</span>
                    <span>{currentReview.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8 relative z-10">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? "w-8 bg-[var(--primary-accent)]"
                      : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-black hover:bg-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-black hover:bg-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
