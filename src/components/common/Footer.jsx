import { gymConfig } from "../../config/gymConfig";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "./SocialIcons";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Membership", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const featuredPrograms = [
    { label: "Weight Loss", href: "#programs" },
    { label: "Muscle Gain", href: "#programs" },
    { label: "CrossFit", href: "#programs" },
    { label: "MMA", href: "#programs" },
    { label: "Yoga", href: "#programs" },
    { label: "Personal Training", href: "#programs" },
  ];

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary-accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Logo & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[var(--primary-accent)]" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  {gymConfig.logoText}
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-zinc-500 uppercase -mt-1 block">
                  {gymConfig.gymName}
                </span>
              </div>
            </a>

            <p className="text-sm leading-relaxed text-zinc-400">
              {gymConfig.gymDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={gymConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.socials.facebook}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.socials.youtube}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={gymConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp Concierge"
                title={`WhatsApp Desk: ${gymConfig.whatsappNumber}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display font-bold text-sm tracking-wider uppercase text-white">
              QUICK LINKS
            </h2>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--primary-accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display font-bold text-sm tracking-wider uppercase text-white">
              PROGRAMS
            </h2>
            <ul className="space-y-2.5 text-sm">
              {featuredPrograms.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--primary-accent)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display font-bold text-sm tracking-wider uppercase text-white">
              CONTACT
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary-accent)] mt-1 shrink-0" />
                <span className="leading-relaxed">{gymConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--primary-accent)] shrink-0" />
                <span>{gymConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--primary-accent)] shrink-0" />
                <span>{gymConfig.email}</span>
              </div>
            </div>

            {/* Quick Enquiry Callout */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mt-4">
              <p className="text-xs text-zinc-300 font-semibold mb-2">
                Ready to transform your lifestyle?
              </p>
              <a
                href={gymConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>ENQUIRE ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 {gymConfig.gymName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
