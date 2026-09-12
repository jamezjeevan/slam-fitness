import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { gymConfig } from "../../config/gymConfig";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    gymConfig.pricing.basic,
    gymConfig.pricing.pro,
    gymConfig.pricing.elite,
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT VALUE TIERS</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          CHOOSE YOUR COMMITMENT.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          No hidden lock-ins. All memberships grant full access to certified fitness coaches, biometric assessments, and state-of-the-art facilities.
        </p>

        {/* Billing Period Toggle */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span
            className={`text-xs uppercase font-bold tracking-wider cursor-pointer ${
              !isAnnual ? "text-white" : "text-zinc-400"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly Billing
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-white/10 p-1 transition-colors border border-white/15 relative focus:outline-none cursor-pointer"
            aria-label="Toggle annual billing"
          >
            <motion.div
              animate={{ x: isAnnual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-[var(--primary-accent)] shadow-md"
            />
          </button>

          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsAnnual(true)}>
            <span
              className={`text-xs uppercase font-bold tracking-wider ${
                isAnnual ? "text-white" : "text-zinc-400"
              }`}
            >
              Annual Billing
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-[10px] font-extrabold text-[var(--primary-accent)] tracking-wide">
              SAVE 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => {
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#14141a] border-2 border-[var(--primary-accent)] shadow-2xl shadow-[var(--primary-accent-glow)] lg:-translate-y-3"
                  : "bg-[#111115] border border-white/10 hover:border-white/25 shadow-xl"
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--primary-accent)] text-black text-[11px] font-display font-extrabold uppercase tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="border-b border-white/10 pb-6">
                  <span className="text-xs uppercase font-bold text-zinc-400 tracking-widest block">
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                      {gymConfig.currencySymbol}
                    </span>
                    <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-xs uppercase font-semibold text-zinc-400">
                      {isAnnual ? "/ YEAR" : plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 block">
                    Included with {plan.name}:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs text-zinc-300">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular
                            ? "bg-[var(--primary-accent)] text-black"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href={`https://wa.me/917947149031?text=${encodeURIComponent("Hello Slam Fitness KNK Road, I would like to join with the " + plan.name + " (" + (isAnnual ? "Annual" : "Monthly") + ") package.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? "bg-[var(--primary-accent)] text-black hover:opacity-90 shadow-lg shadow-[var(--primary-accent-glow)]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  <span>JOIN NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-center text-zinc-400 mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>3-Day Full Money Back Guarantee</span>
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
