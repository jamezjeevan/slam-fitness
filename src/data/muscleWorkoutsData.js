/**
 * Interactive Muscle Selector & Targeted Workouts Dataset
 * Groups: Chest, Back, Arms, Legs, Core
 */

export const muscleGroupsData = {
  Chest: {
    name: "Chest (Pectorals)",
    tagline: "Upper, Mid & Lower Pec Sculpting",
    intensity: "High Hypertrophy",
    recommendedSplit: "Push Day / Upper Body",
    exercises: [
      { name: "Incline Dumbbell Press", sets: "4 Sets", reps: "8-10 Reps", focus: "Upper clavicular head development" },
      { name: "Barbell Flat Bench Press", sets: "4 Sets", reps: "6-8 Reps", focus: "Compound pressing power & thickness" },
      { name: "Cable Pec Flyes (High to Low)", sets: "3 Sets", reps: "12-15 Reps", focus: "Peak contraction & sternal squeeze" },
      { name: "Weighted Chest Dips", sets: "3 Sets", reps: "To Failure", focus: "Lower chest border definition" },
    ],
    proTip: "Control the 3-second eccentric descent on all pressing movements to stimulate maximum microtrauma and growth.",
  },
  Back: {
    name: "Back (Lats, Traps & Rhomboids)",
    tagline: "V-Taper Width & Spinal Density",
    intensity: "Maximum Strength",
    recommendedSplit: "Pull Day / Posterior Chain",
    exercises: [
      { name: "Barbell Conventional Deadlift", sets: "4 Sets", reps: "5 Reps", focus: "Total posterior chain density" },
      { name: "Wide-Grip Lat Pulldown", sets: "4 Sets", reps: "8-12 Reps", focus: "Upper lat wing expansion" },
      { name: "Chest-Supported T-Bar Row", sets: "4 Sets", reps: "10-12 Reps", focus: "Mid-back thickness & rhomboids" },
      { name: "Single-Arm Dumbbell Row", sets: "3 Sets", reps: "10-12 Reps", focus: "Unilateral lat activation" },
    ],
    proTip: "Initiate every row by depressing and retracting your shoulder blades before bending your elbows.",
  },
  Arms: {
    name: "Arms (Biceps, Triceps & Forearms)",
    tagline: "Peak Biceps & Horseshoe Triceps",
    intensity: "Focused Isolation",
    recommendedSplit: "Upper Body / Arm Specialization",
    exercises: [
      { name: "EZ-Bar Preacher Curls", sets: "4 Sets", reps: "10-12 Reps", focus: "Strict bicep peak isolation" },
      { name: "Overhead Rope Tricep Extension", sets: "4 Sets", reps: "12-15 Reps", focus: "Tricep long head stretch" },
      { name: "Close-Grip Bench Press", sets: "3 Sets", reps: "8-10 Reps", focus: "Tricep lateral and medial head load" },
      { name: "Incline Dumbbell Hammer Curls", sets: "3 Sets", reps: "12 Reps", focus: "Brachialis & forearm thickness" },
    ],
    proTip: "Keep elbows pinned to your sides to prevent shoulder momentum from taking tension off the arm muscles.",
  },
  Legs: {
    name: "Legs (Quads, Hamstrings & Calves)",
    tagline: "Foundational Power & Athletic Wheels",
    intensity: "Extreme Lactate",
    recommendedSplit: "Leg Day / Lower Body",
    exercises: [
      { name: "Barbell Back Squat", sets: "4 Sets", reps: "6-8 Reps", focus: "Quad sweep & core bracing power" },
      { name: "Romanian Deadlift (RDL)", sets: "4 Sets", reps: "8-10 Reps", focus: "Hamstring stretch & glute hinge" },
      { name: "Bulgarian Split Squats", sets: "3 Sets", reps: "10 Reps/leg", focus: "Unilateral quad stability" },
      { name: "Standing Heavy Calf Raises", sets: "4 Sets", reps: "15-20 Reps", focus: "Gastrocnemius diamond definition" },
    ],
    proTip: "Drive your knees outward tracking over your toes and explode through your mid-foot on the ascent.",
  },
  Core: {
    name: "Core (Abdominals & Obliques)",
    tagline: "Chiseled 6-Pack & Rotational Armor",
    intensity: "High Endurance",
    recommendedSplit: "Finisher / Daily Functional",
    exercises: [
      { name: "Hanging Leg Raises", sets: "4 Sets", reps: "12-15 Reps", focus: "Lower abdominal tuck & hip flexors" },
      { name: "Cable Woodchoppers", sets: "3 Sets", reps: "15 Reps/side", focus: "Rotational oblique power" },
      { name: "Ab Wheel Rollouts", sets: "3 Sets", reps: "10-12 Reps", focus: "Full anti-extension anterior core" },
      { name: "Weighted Plank Hold", sets: "3 Sets", reps: "60 Seconds", focus: "Transverse abdominis bracing" },
    ],
    proTip: "Exhale all oxygen at the top of the contraction to forcefully engage your deepest abdominal wall.",
  },
};

export const workoutOfTheDay = {
  title: "WORKOUT OF THE DAY",
  focus: "CHEST + TRICEPS",
  duration: "45 MIN",
  level: "INTERMEDIATE",
  calories: "~480 KCAL",
  description: "A fast-paced push hypertrophy protocol designed to engorge muscle tissue with blood flow while prioritizing heavy compound mechanics.",
  warmup: [
    "5 Min Incline Treadmill Walk",
    "Band Pull-Aparts (2x20)",
    "Arm Circles & Dynamic Chest Openers",
  ],
  circuits: [
    { movement: "Barbell Incline Bench Press", sets: "4 Sets", reps: "8-10", rest: "90 sec" },
    { movement: "Flat Dumbbell Press superset with Pushups", sets: "3 Sets", reps: "10-12 / to failure", rest: "75 sec" },
    { movement: "Cable Flyes (Mid chest height)", sets: "3 Sets", reps: "15 (2-sec squeeze)", rest: "60 sec" },
    { movement: "Dips / Tricep Pushdowns drop set", sets: "3 Sets", reps: "12-15 Reps", rest: "60 sec" },
  ],
};
