import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gymConfig, getLiveGymStatus } from "../../config/gymConfig";
import { Dumbbell, Menu, X, ArrowRight, Sparkles, Clock, Palette } from "lucide-react";

export default function Navbar({ activeTheme, onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const liveStatus = getLiveGymStatus();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "PROGRAMS", href: "#programs" },
    { label: "TRAINERS", href: "#trainers" },
    { label: "MEMBERSHIP", href: "#pricing" },
    { label: "GALLERY", href: "#gallery" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "CONTACT", href: "#contact" },
  ];

  const themeOptions = [
    { id: "volt", name: "Electric Volt", color: "#CCFF00" },
    { id: "gold", name: "Luxury Gold", color: "#E5A93C" },
    { id: "crimson", name: "Crimson Beast", color: "#FF2A54" },
    { id: "cyan", name: "Cyber Cyan", color: "#00F0FF" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Gym Home"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-accent)]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Dumbbell className="w-5 h-5 text-[var(--primary-accent)] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-[var(--primary-accent)] transition-colors">
                {gymConfig.logoText}
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-zinc-400 uppercase -mt-1">
                {gymConfig.gymName}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-[0.15em] font-bold text-zinc-300 hover:text-[var(--primary-accent)] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Live status, Theme accent picker, Enquire CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Gym Status */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
              title={liveStatus.detail}
            >
              <span
                className={`w-2 h-2 rounded-full ${liveStatus.statusBadgeColor} animate-pulse`}
              />
              <span className="font-bold tracking-wider">{liveStatus.statusText}</span>
            </div>

            {/* Quick Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)]/40 transition-all focus:outline-none"
                title="Customize Accent Color"
                aria-label="Theme Color Switcher"
              >
                <Palette className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {showThemePicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 p-2 rounded-2xl bg-[#121216] border border-white/15 shadow-2xl z-50"
                  >
                    <p className="text-[10px] uppercase font-bold text-zinc-400 px-2 py-1 tracking-wider">
                      Accent Color
                    </p>
                    <div className="space-y-1 mt-1">
                      {themeOptions.map((th) => (
                        <button
                          key={th.id}
                          onClick={() => {
                            onThemeChange(th.id);
                            setShowThemePicker(false);
                          }}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                            activeTheme === th.id
                              ? "bg-white/10 text-white font-bold"
                              : "text-zinc-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/20"
                            style={{ backgroundColor: th.color }}
                          />
                          <span>{th.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Enquire Now Button */}
            <a
              href={gymConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="relative px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[var(--primary-accent-glow)] flex items-center gap-1.5 cursor-pointer light-sweep"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg font-display font-bold text-[11px] uppercase tracking-wider bg-[var(--primary-accent)] text-black"
            >
              ENQUIRE
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--primary-accent)]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden"
          >
            <div className="space-y-6">
              {/* Gym Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                <span
                  className={`w-2 h-2 rounded-full ${liveStatus.statusBadgeColor} animate-pulse`}
                />
                <span className="font-bold tracking-wider">{liveStatus.statusText}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{liveStatus.detail}</span>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-4 pt-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-impact text-3xl tracking-wider text-zinc-300 hover:text-[var(--primary-accent)] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[var(--primary-accent)] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                  Accent Color
                </span>
                <div className="flex items-center gap-2">
                  {themeOptions.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => onThemeChange(th.id)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        activeTheme === th.id
                          ? "border-white scale-110"
                          : "border-transparent opacity-60"
                      }`}
                      style={{ backgroundColor: th.color }}
                      aria-label={th.name}
                    />
                  ))}
                </div>
              </div>

              <a
                href={gymConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-[var(--primary-accent)] text-black flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary-accent-glow)]"
              >
                <span>ENQUIRE ON WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
