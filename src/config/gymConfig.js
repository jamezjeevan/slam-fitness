/**
 * CENTRAL CONFIGURATION FOR SKY GYM (SKY FITNESS CENTRE)
 * Thiruvottiyur High Rd, Korukkupet, Old Washermanpet, Chennai
 */

export const gymConfig = {
  // Brand Identity
  gymName: "SKY GYM",
  alternateName: "Sky Fitness Centre",
  branchName: "Thiruvottiyur High Rd, Old Washermanpet",
  gymTagline: "TRAIN • SWEAT • TRANSFORM",
  gymHeroSubtitle: "PREMIER FITNESS CENTRE IN OLD WASHERMANPET & KORUKKUPET, CHENNAI",
  gymHeroHeadline1: "SKY GYM.",
  gymHeroHeadline2: "FITNESS CENTRE.",
  gymDescription:
    "Chennai's premier fitness destination at No.457, Sky Fitness Centre, Thiruvottiyur High Road, Korukkupet, Old Washermanpet. Equipped with top-of-the-line strength gear, certified personal trainers, weight loss & muscle building programs, and an energizing training atmosphere.",

  // Brand Visuals / Logo
  logoText: "SKY GYM",
  logoShort: "SKY",
  defaultTheme: "volt", // options: 'volt', 'gold', 'crimson', 'cyan'
  accentColor: "#CCFF00",

  // Core Classification & Details
  category: "Fitness Centres & Gyms",
  gender: "Unisex",
  fitnessOptions: "Gym & Fitness Centre",
  services: "Personal Training • Weight Loss • Muscle Building",

  // Contact Information
  email: "skygymchennai@gmail.com",
  phone: "9791148321",
  phoneFormatted: "+91 97911 48321",
  whatsappNumber: "9791148321",
  whatsappFormatted: "+91 97911 48321",
  whatsappUrl: "https://wa.me/919791148321?text=Hello%20SKY%20GYM,%20I%20would%20like%20to%20inquire%20about%20gym%20membership%20and%20free%20trial%20pass.",
  whatsappMessage: "Hello! I would like to inquire about membership and trial passes at SKY GYM, Thiruvottiyur High Rd, Old Washermanpet.",
  address: "No.457, Sky Fitness Centre, Thiruvottiyur High Rd, Korukkupet, Old Washermanpet, Chennai, Tamil Nadu 600021",
  locationName: "Old Washermanpet, Chennai",
  googleMapsUrl: "https://maps.google.com/?q=No.457+Sky+Fitness+Centre+Thiruvottiyur+High+Rd+Korukkupet+Old+Washermanpet+Chennai+Tamil+Nadu+600021",

  // Social Links
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp:
      "https://wa.me/919791148321?text=Hello%20SKY%20GYM,%20I%20would%20like%20to%20inquire%20about%20membership",
  },

  // Operating Hours & Live Status Logic
  operatingHours: {
    display: "Mon - Sun: 05:30 AM - 10:30 PM (Open 7 Days)",
    openTime: 5, // 5:30 AM
    closeTime: 23, // 10:30 PM
    closeTimeDisplay: "10:30 PM",
    statusBadge: "Open until 10:30 pm",
    schedule: [
      { day: "Monday - Saturday", hours: "05:30 AM - 10:30 PM", note: "Regular Hours" },
      { day: "Sunday", hours: "06:00 AM - 08:00 PM", note: "Weekend Hours" },
    ],
  },

  // Ratings & Credibility
  ratings: {
    score: "4.9",
    ratingStars: 5,
    count: "150+ Ratings",
    source: "Verified Member Reviews",
    area: "Old Washermanpet, Chennai",
  },

  // Membership Pricing Tiers
  currencySymbol: "₹",
  pricing: {
    basic: {
      name: "BASIC",
      badge: "STARTER",
      monthlyPrice: "1,499",
      annualPrice: "14,999",
      period: "/ MONTH",
      description:
        "Full access to our fitness floor, cardio equipment, and strength training zones on Thiruvottiyur High Rd.",
      features: [
        "Full access to gym floor & free weights",
        "Locker room & private shower access",
        "Initial fitness & body composition assessment",
        "Free high-speed member Wi-Fi",
        "Access during all regular operational hours",
      ],
      isPopular: false,
    },
    pro: {
      name: "PRO",
      badge: "MOST POPULAR",
      monthlyPrice: "2,499",
      annualPrice: "24,999",
      period: "/ MONTH",
      description:
        "Our flagship membership engineered for accelerated transformations with personal coaching support.",
      features: [
        "Everything in Basic tier",
        "Unlimited group conditioning & HIIT sessions",
        "2 Personal Training sessions per month",
        "Customized nutrition guidance plan",
        "Steam room & recovery lounge access",
        "Priority branch access",
      ],
      isPopular: true,
    },
    elite: {
      name: "ELITE",
      badge: "ALL-INCLUSIVE",
      monthlyPrice: "3,999",
      annualPrice: "39,999",
      period: "/ MONTH",
      description:
        "The pinnacle fitness experience with dedicated coaching, biometric tracking, and accelerated results.",
      features: [
        "Everything in Pro tier",
        "Dedicated 1-on-1 Personal Trainer",
        "Weekly biometric scans & caliper tracking",
        "Customized nutrition & macro guidance",
        "Complimentary towel service & locker",
        "VIP guest passes (4 passes / month)",
      ],
      isPopular: false,
    },
  },

  // Highlight Statistics
  stats: {
    members: "3,500+",
    membersLabel: "ACTIVE MEMBERS",
    trainers: "12+",
    trainersLabel: "CERTIFIED COACHES",
    programs: "15+",
    programsLabel: "FITNESS MODULES",
    rating: "4.9★",
    ratingLabel: "GOOGLE RATING",
    overallRatingText: "4.9 / 5 (150+ Reviews)",
    openDays: "7 DAYS",
    openDaysLabel: "05:30 AM - 10:30 PM",
  },

  // Free Pass Promotional Banner
  freePassOffer: {
    badge: "FREE TRIAL PASS",
    heading: "YOUR FIRST WORKOUT IS FREE.",
    subheading: "CLAIM YOUR PASS AT SKY GYM",
    description: "Experience North Chennai's premier fitness centre at No.457, Thiruvottiyur High Road, Old Washermanpet. Try our equipment and meet our coaching team with zero commitment.",
    cta: "CLAIM FREE PASS",
  },
};

/**
 * Helper to compute live gym status (OPEN / CLOSED) based on current clock time
 */
export function getLiveGymStatus() {
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen =
    currentHour >= gymConfig.operatingHours.openTime &&
    currentHour < gymConfig.operatingHours.closeTime;

  return {
    isOpen,
    statusText: isOpen ? "OPEN NOW" : "CLOSED NOW",
    statusBadgeColor: isOpen ? "bg-emerald-500" : "bg-rose-500",
    detail: isOpen
      ? `Open until 10:30 PM`
      : `Opens at 05:30 AM`,
  };
}
