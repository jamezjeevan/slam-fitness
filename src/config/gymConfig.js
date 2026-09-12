/**
 * CENTRAL CONFIGURATION FOR SLAM LIFESTYLE AND FITNESS STUDIO
 * Khader Nawaz Khan Road (KNK Road), Thousand Lights, Chennai
 */

export const gymConfig = {
  // Brand Identity
  gymName: "Slam Lifestyle And Fitness Studio",
  alternateName: "Slam Fitness Studio KNK Road",
  branchName: "KNK Road, Thousand Lights, Chennai",
  gymTagline: "UNISEX GYM • GET YOUR OWN TRAINER • CHENNAI",
  gymHeroSubtitle: "PREMIER 5.0★ UNISEX FITNESS STUDIO ON KNK ROAD, THOUSAND LIGHTS",
  gymHeroHeadline1: "SLAM FITNESS.",
  gymHeroHeadline2: "KNK ROAD CHENNAI.",
  gymDescription:
    "Slam Lifestyle And Fitness Studio at Khader Nawaz Khan Road (KNK Road), Thousand Lights, Chennai. Rated 5.0 Stars with 41 verified ratings. Featuring high-grade strength equipment, certified personal coaches, Get Your Own Trainer services, and an elite unisex training environment.",

  // Brand Visuals / Logo
  logoText: "SLAM FITNESS",
  logoShort: "SLAM",
  defaultTheme: "volt", // options: 'volt', 'gold', 'crimson', 'cyan'
  accentColor: "#CCFF00",

  // Core Classification & Details
  category: "Fitness Centres, Gyms",
  gender: "Unisex",
  fitnessOptions: "Gym",
  services: "Get Your Own Trainer",

  // Contact Information
  email: "slamfitnessknk@gmail.com",
  phone: "7947149031",
  phoneFormatted: "+91 79471 49031",
  whatsappNumber: "7947149031",
  whatsappFormatted: "+91 79471 49031",
  whatsappUrl:
    "https://wa.me/917947149031?text=Hello%20Slam%20Fitness%20KNK%20Road,%20I%20would%20like%20to%20enquire%20about%20membership%20and%20personal%20training.",
  whatsappMessage:
    "Hello! I would like to enquire about membership and Get Your Own Trainer at Slam Lifestyle And Fitness Studio, KNK Road, Thousand Lights, Chennai.",
  address: "Khader Nawaz Khan Road (KNK Road), Thousand Lights, Chennai, Tamil Nadu 600006",
  locationName: "Thousand Lights, Chennai",
  googleMapsUrl:
    "https://maps.google.com/?q=Slam+Lifestyle+And+Fitness+Studio+Khader+Nawaz+Khan+Road+Thousand+Lights+Chennai",

  // Social Links
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp:
      "https://wa.me/917947149031?text=Hello%20Slam%20Fitness%20KNK%20Road,%20I%20would%20like%20to%20enquire%20about%20membership",
  },

  // Operating Hours & Live Status Logic
  operatingHours: {
    display: "Mon - Sun: 06:00 AM - 10:00 PM (Open 7 Days)",
    openTime: 6, // 6:00 AM
    closeTime: 22, // 10:00 PM
    closeTimeDisplay: "10:00 PM",
    statusBadge: "Open until 10:00 pm",
    holidayNotice: "(Ganesh Chaturthi) Business Hours may be affected",
    schedule: [
      { day: "SAT (Today)", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
      { day: "SUN", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
      {
        day: "MON, 14th Sep",
        hours: "6:00 am - 10:00 pm",
        note: "(Ganesh Chaturthi) Business Hours may be affected",
      },
      { day: "TUE", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
      { day: "WED", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
      { day: "THU", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
      { day: "FRI", hours: "6:00 am - 10:00 pm", note: "Open Regular Hours" },
    ],
  },

  // Ratings & Credibility
  ratings: {
    score: "5.0",
    ratingStars: 5,
    count: "41 Ratings",
    source: "Verified Member Ratings",
    area: "Thousand Lights, Chennai",
  },

  // Membership Pricing Tiers
  currencySymbol: "₹",
  pricing: {
    basic: {
      name: "BASIC",
      badge: "STARTER",
      monthlyPrice: "1,999",
      annualPrice: "19,999",
      period: "/ MONTH",
      description:
        "Full access to our fitness floor, cardio equipment, and strength training zones on KNK Road.",
      features: [
        "Full access to gym floor & heavy weights",
        "Locker room & private shower access",
        "Initial fitness & movement assessment",
        "High-speed member Wi-Fi & locker facilities",
        "Access during all operational hours (6 AM - 10 PM)",
      ],
      isPopular: false,
    },
    pro: {
      name: "PRO",
      badge: "MOST POPULAR",
      monthlyPrice: "3,499",
      annualPrice: "34,999",
      period: "/ MONTH",
      description:
        "Our flagship membership engineered for accelerated transformations with personal coaching support.",
      features: [
        "Everything in Basic tier",
        "Unlimited functional fitness & conditioning sessions",
        "2 Personal Training sessions per month",
        "Customized nutrition & diet guidance",
        "Steam room & recovery lounge access",
        "Priority locker & shower amenities",
      ],
      isPopular: true,
    },
    elite: {
      name: "ELITE",
      badge: "ALL-INCLUSIVE",
      monthlyPrice: "5,499",
      annualPrice: "54,999",
      period: "/ MONTH",
      description:
        "The pinnacle fitness experience with dedicated 1-on-1 personal trainer, biometric tracking, and accelerated results.",
      features: [
        "Everything in Pro tier",
        "Get Your Own Trainer — Dedicated 1-on-1 coaching",
        "Weekly biometric body composition tracking",
        "Customized macro nutrition & supplementation plan",
        "Dedicated locker & towel service",
        "Direct coach WhatsApp support 7 days a week",
      ],
      isPopular: false,
    },
  },

  // Highlight Statistics
  stats: {
    members: "1,200+",
    membersLabel: "ACTIVE MEMBERS",
    trainers: "15+",
    trainersLabel: "CERTIFIED COACHES",
    programs: "20+",
    programsLabel: "FITNESS MODULES",
    rating: "5.0★",
    ratingLabel: "41 RATINGS",
    overallRatingText: "5.0 / 5 (41 Ratings)",
    openDays: "7 DAYS",
    openDaysLabel: "06:00 AM - 10:00 PM",
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
    detail: isOpen ? `Open until 10:00 PM` : `Opens at 06:00 AM`,
  };
}
