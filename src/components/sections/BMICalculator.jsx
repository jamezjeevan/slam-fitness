import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, ShieldAlert, Sparkles, Scale, Flame, RefreshCw } from "lucide-react";

export default function BMICalculator() {
  const [activeTool, setActiveTool] = useState("bmi"); // 'bmi' or 'calories'

  // BMI State
  const [bmiInputs, setBmiInputs] = useState({
    age: 26,
    gender: "male",
    height: 178, // cm
    weight: 74, // kg
  });
  const [bmiResult, setBmiResult] = useState(null);

  // Calorie State
  const [calInputs, setCalInputs] = useState({
    age: 26,
    gender: "male",
    height: 178,
    weight: 74,
    activityLevel: 1.55, // Moderate
  });
  const [calResult, setCalResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = Number(bmiInputs.height) / 100;
    const weightInKg = Number(bmiInputs.weight);
    if (!heightInMeters || !weightInKg) return;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const rounded = Number(bmi.toFixed(1));

    let category = "Normal";
    let color = "text-emerald-400";
    let meterPercentage = 50;
    let description = "Optimal body mass ratio for high athletic performance.";

    if (rounded < 18.5) {
      category = "Underweight";
      color = "text-sky-400";
      meterPercentage = 18;
      description = "Consider an increase in lean protein and caloric intake to build foundational muscle.";
    } else if (rounded >= 18.5 && rounded <= 24.9) {
      category = "Normal Weight";
      color = "text-emerald-400";
      meterPercentage = 45;
      description = "Your height-to-weight balance is within the standard healthy athletic range.";
    } else if (rounded >= 25.0 && rounded <= 29.9) {
      category = "Overweight";
      color = "text-amber-400";
      meterPercentage = 72;
      description = "Structured strength and metabolic intervals can help optimize your body composition.";
    } else {
      category = "Obese";
      color = "text-rose-500";
      meterPercentage = 92;
      description = "A customized fitness routine and nutrition coaching are strongly recommended.";
    }

    setBmiResult({
      bmi: rounded,
      category,
      color,
      meterPercentage,
      description,
    });
  };

  const calculateCalories = (e) => {
    e.preventDefault();
    const w = Number(calInputs.weight);
    const h = Number(calInputs.height);
    const a = Number(calInputs.age);
    const mult = Number(calInputs.activityLevel);

    // Mifflin-St Jeor Equation
    let bmr = 10 * w + 6.25 * h - 5 * a;
    if (calInputs.gender === "male") {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    const tdee = Math.round(bmr * mult);

    setCalResult({
      maintenance: tdee,
      fatLoss: Math.round(tdee * 0.82), // ~18% deficit
      muscleGain: Math.round(tdee * 1.12), // ~12% surplus
      bmr: Math.round(bmr),
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Activity className="w-3.5 h-3.5" />
          <span>BIOMETRIC INTELLIGENCE</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          BODY COMPOSITION CALCULATORS
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Obtain instant, science-based estimates for your BMI and daily caloric expenditure to plan your nutrition and workout cycle.
        </p>

        {/* Tool Switcher */}
        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={() => setActiveTool("bmi")}
            className={`px-6 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTool === "bmi"
                ? "bg-[var(--primary-accent)] text-black shadow-lg shadow-[var(--primary-accent-glow)]"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>BMI CALCULATOR</span>
          </button>

          <button
            onClick={() => setActiveTool("calories")}
            className={`px-6 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTool === "calories"
                ? "bg-[var(--primary-accent)] text-black shadow-lg shadow-[var(--primary-accent-glow)]"
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>CALORIE ESTIMATOR</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-[#111115] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-[var(--primary-accent)]/10 rounded-full blur-3xl pointer-events-none" />

        {activeTool === "bmi" ? (
          /* BMI Tool */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Inputs Column */}
            <form onSubmit={calculateBMI} className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="100"
                    value={bmiInputs.age}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Gender
                  </label>
                  <select
                    value={bmiInputs.gender}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18181e] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={bmiInputs.height}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, height: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="250"
                    value={bmiInputs.weight}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, weight: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-[var(--primary-accent-glow)] cursor-pointer"
                >
                  CALCULATE BMI
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-zinc-400 flex items-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Estimate only: BMI does not differentiate between lean muscle mass and fat tissue. Not medical advice.</span>
              </p>
            </form>

            {/* Results Column */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between text-center min-h-[280px]">
              {bmiResult ? (
                <div className="space-y-4 my-auto">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                    YOUR CALCULATED BMI
                  </span>

                  <div className="font-display font-black text-6xl text-white">
                    {bmiResult.bmi}
                  </div>

                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 font-bold text-xs uppercase tracking-wider">
                    Category: <span className={bmiResult.color}>{bmiResult.category}</span>
                  </div>

                  {/* Animated Meter Bar */}
                  <div className="space-y-1 pt-2">
                    <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-rose-500 opacity-60" />
                      <motion.div
                        initial={{ left: "0%" }}
                        animate={{ left: `${Math.min(95, Math.max(5, bmiResult.meterPercentage))}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-0 bottom-0 w-3 -ml-1.5 bg-white shadow-lg rounded-full border-2 border-black"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-zinc-400 font-semibold px-1">
                      <span>Under</span>
                      <span>Normal</span>
                      <span>Over</span>
                      <span>Obese</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 pt-2 leading-relaxed">
                    {bmiResult.description}
                  </p>
                </div>
              ) : (
                <div className="my-auto space-y-3 text-zinc-400 py-6">
                  <Scale className="w-12 h-12 mx-auto text-[var(--primary-accent)] opacity-60" />
                  <p className="text-xs">
                    Input your metrics and click <strong>CALCULATE BMI</strong> to view your biometric analysis and meter.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Calorie Estimator Tool */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <form onSubmit={calculateCalories} className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    value={calInputs.age}
                    onChange={(e) => setCalInputs({ ...calInputs, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Gender
                  </label>
                  <select
                    value={calInputs.gender}
                    onChange={(e) => setCalInputs({ ...calInputs, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18181e] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={calInputs.height}
                    onChange={(e) => setCalInputs({ ...calInputs, height: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={calInputs.weight}
                    onChange={(e) => setCalInputs({ ...calInputs, weight: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Activity Level
                </label>
                <select
                  value={calInputs.activityLevel}
                  onChange={(e) => setCalInputs({ ...calInputs, activityLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#18181e] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                >
                  <option value={1.2}>Sedentary (Little or no exercise)</option>
                  <option value={1.375}>Lightly Active (Exercise 1-3 times/week)</option>
                  <option value={1.55}>Moderately Active (Exercise 4-5 times/week)</option>
                  <option value={1.725}>Very Active (Intense training 6-7 times/week)</option>
                  <option value={1.9}>Elite Athlete (2x heavy training per day)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-95 active:scale-[0.99] transition-all shadow-lg shadow-[var(--primary-accent-glow)] cursor-pointer"
                >
                  ESTIMATE DAILY CALORIES
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 flex items-center gap-1.5 pt-1">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Estimated using Mifflin-St Jeor TDEE formula. Does not replace professional dietary counseling.</span>
              </p>
            </form>

            {/* Calorie Results */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[280px]">
              {calResult ? (
                <div className="space-y-4 my-auto">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block text-center">
                    ESTIMATED DAILY TARGETS
                  </span>

                  {/* Maintenance Target */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                      Daily Maintenance (TDEE)
                    </span>
                    <span className="font-display font-black text-3xl text-white">
                      {calResult.maintenance}{" "}
                      <span className="text-xs text-[var(--primary-accent)]">kcal / day</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                        Fat Loss Deficit
                      </span>
                      <span className="font-display font-black text-xl text-white">
                        {calResult.fatLoss} kcal
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 text-center">
                      <span className="text-[10px] uppercase font-bold text-[var(--primary-accent)] block">
                        Muscle Hypertrophy
                      </span>
                      <span className="font-display font-black text-xl text-white">
                        {calResult.muscleGain} kcal
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 text-center">
                    Basal Metabolic Rate (BMR): {calResult.bmr} kcal
                  </p>
                </div>
              ) : (
                <div className="my-auto space-y-3 text-zinc-400 text-center py-6">
                  <Flame className="w-12 h-12 mx-auto text-[var(--primary-accent)] opacity-60" />
                  <p className="text-xs">
                    Input your daily activity metrics to generate personalized daily calorie and macronutrient targets.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
