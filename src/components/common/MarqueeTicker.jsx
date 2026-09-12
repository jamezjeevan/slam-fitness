import { Flame } from "lucide-react";

export default function MarqueeTicker() {
  const tickerPhrases = [
    "SLAM LIFESTYLE AND FITNESS STUDIO",
    "SHAFEE MOHAMMED ROAD • THOUSAND LIGHTS",
    "5.0★ RATED (41 RATINGS)",
    "UNISEX GYM • CHENNAI",
    "GET YOUR OWN TRAINER",
    "WHATSAPP: 7947149031",
    "OPEN 6:00 AM - 10:00 PM DAILY",
    "FITNESS CENTRES • GYMS",
  ];

  return (
    <div className="relative w-full py-4 bg-black/80 border-y border-white/10 overflow-hidden select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...tickerPhrases, ...tickerPhrases].map((phrase, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="font-impact text-xl md:text-2xl tracking-[0.2em] text-zinc-300 hover:text-[var(--primary-accent)] transition-colors">
              {phrase}
            </span>
            <Flame className="w-4 h-4 ml-8 text-[var(--primary-accent)] opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
