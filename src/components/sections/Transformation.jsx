import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { transformationsData } from "../../data/transformationsData";

function BeforeAfterSlider({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <div className="space-y-6">
      {/* Slider Interactive Frame */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize group"
      >
        {/* After Image (Background full) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.afterImage})` }}
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-impact tracking-widest text-[var(--primary-accent)]">
          AFTER
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${item.beforeImage})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-impact tracking-widest text-zinc-300">
          BEFORE
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Center Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#09090b] border-2 border-[var(--primary-accent)] shadow-2xl flex items-center justify-center text-[var(--primary-accent)] group-hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold text-zinc-400 tracking-wider pointer-events-none">
          Drag to compare
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
            TIMEFRAME
          </span>
          <span className="font-display font-black text-lg sm:text-2xl text-[var(--primary-accent)]">
            {item.timeframe}
          </span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
            WEIGHT
          </span>
          <span className="font-display font-black text-lg sm:text-2xl text-white">
            {item.weightChange}
          </span>
        </div>
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
            COMPOSITION
          </span>
          <span className="font-display font-black text-lg sm:text-2xl text-emerald-400">
            {item.muscleChange}
          </span>
        </div>
      </div>

      {/* Program & Disclaimer Details */}
      <div className="p-4 rounded-2xl bg-[#111115] border border-white/10 text-xs text-zinc-400 space-y-1">
        <div className="flex items-center justify-between text-zinc-300 font-semibold mb-1">
          <span>Target Program:</span>
          <span className="text-[var(--primary-accent)]">{item.programUsed}</span>
        </div>
        <p className="italic text-[11px] leading-relaxed">"{item.quote}"</p>
      </div>
    </div>
  );
}

export default function Transformation() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROVEN PROGRESSION METHOD</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          YOUR TRANSFORMATION STARTS HERE.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Precision periodization meets relentless consistency. Explore our concept athlete transformation models using the interactive comparison slider below.
        </p>

        {/* Clear Guideline Disclaimer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-[11px] text-zinc-400 font-medium">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>Sample concept representation. Individual physiological results vary based on adherence and genetic factors.</span>
        </div>
      </div>

      {/* Transformation Selector Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {transformationsData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? "bg-[var(--primary-accent)] text-black shadow-lg shadow-[var(--primary-accent-glow)]"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            Concept {index + 1} ({item.timeframe})
          </button>
        ))}
      </div>

      {/* Interactive Slider Showcase */}
      <div className="max-w-3xl mx-auto">
        <BeforeAfterSlider item={transformationsData[activeTab]} />
      </div>
    </section>
  );
}
