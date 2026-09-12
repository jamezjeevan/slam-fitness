import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gymConfig } from "../../config/gymConfig";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Navigation,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  Check,
  Compass,
  X,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Membership Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showDirections, setShowDirections] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(gymConfig.phone);
    showToast(`Phone ${gymConfig.phone} copied to clipboard!`);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(gymConfig.email);
    showToast(`Email ${gymConfig.email} copied to clipboard!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Membership Inquiry",
        message: "",
      });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--primary-accent)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT CONCIERGE ACCESS</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
          CONNECT WITH {gymConfig.gymName}.
        </h2>

        <p className="text-sm sm:text-base text-zinc-400">
          Our team is available 7 days a week to assist with membership inquiries, facility walkthroughs, and personal coaching consultations.
        </p>

        {/* Action Toast Feedback */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mt-2"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Information & Action Buttons (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#111115] border border-white/10 space-y-6 shadow-xl">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
                  ★ 5.0 (41 Ratings)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--primary-accent)]/15 border border-[var(--primary-accent)]/30 text-[var(--primary-accent)] text-[11px] font-bold">
                  Unisex Gym
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 text-[11px] font-medium">
                  Fitness Centres • Gyms
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px] font-bold">
                  Get Your Own Trainer
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-white tracking-tight">
                {gymConfig.gymName} Concierge Desk
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Khader Nawaz Khan Road (KNK Road), Thousand Lights, Chennai
              </p>
            </div>

            <div className="space-y-4 text-sm text-zinc-300">
              <div
                onClick={() => setShowDirections(true)}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <MapPin className="w-5 h-5 text-[var(--primary-accent)] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs uppercase font-bold text-zinc-400 block">Address</span>
                  <span className="font-medium text-white group-hover:text-[var(--primary-accent)] transition-colors">
                    {gymConfig.address}
                  </span>
                  <span className="text-xs text-zinc-400 block">Thousand Lights, Chennai</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--primary-accent)] shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase font-bold text-zinc-400 block">Call Desk</span>
                  <a
                    href={`tel:${gymConfig.phone}`}
                    className="font-medium text-white hover:text-[var(--primary-accent)] transition-colors"
                  >
                    {gymConfig.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                <div className="flex-1">
                  <span className="text-xs uppercase font-bold text-zinc-400 block">WhatsApp Enquiry</span>
                  <a
                    href={gymConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#25D366] hover:underline flex items-center gap-1.5"
                  >
                    <span>Enquire Now WhatsApp {gymConfig.phone}</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[var(--primary-accent)] flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Operating Hours
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold uppercase">
                    Open until 10:00 pm
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-300 pt-1 divide-y divide-white/5">
                  <div className="flex justify-between font-semibold text-white pt-1">
                    <span>SAT (Today)</span>
                    <span className="text-[var(--primary-accent)]">6:00 am - 10:00 pm</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>SUN</span>
                    <span>6:00 am - 10:00 pm</span>
                  </div>
                  <div className="pt-1">
                    <div className="flex justify-between font-medium">
                      <span>MON, 14th Sep</span>
                      <span>6:00 am - 10:00 pm</span>
                    </div>
                    <span className="text-[10px] text-amber-400 font-medium block mt-0.5">
                      (Ganesh Chaturthi) Business Hours may be affected
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>TUE - FRI</span>
                    <span>6:00 am - 10:00 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/10">
              <a
                href={`tel:${gymConfig.phone}`}
                className="py-3 px-2 rounded-xl font-display font-bold text-[11px] uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL DESK</span>
              </a>

              <a
                href={gymConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-2 rounded-xl font-display font-bold text-[11px] uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba5a] text-black transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#25D366]/30"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WHATSAPP</span>
              </a>

              <button
                onClick={() => setShowDirections(true)}
                className="py-3 px-2 rounded-xl font-display font-bold text-[11px] uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>DIRECTIONS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111115] border border-white/10 shadow-xl space-y-6">
            <div>
              <h3 className="font-display font-black text-2xl text-white tracking-tight">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Have specific questions about personal coaching, corporate memberships, or scheduling? Drop us a line.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display font-black text-2xl text-white">
                  MESSAGE RECEIVED
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Thank you for contacting {gymConfig.gymName}. Your inquiry has been registered in the concierge portal. Our team will connect with you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={gymConfig.email}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={gymConfig.phone}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18181e] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                    >
                      <option value="Membership Inquiry">Membership Inquiry</option>
                      <option value="Personal Training">Personal Training Consultation</option>
                      <option value="Corporate Membership">Corporate Wellness</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness goals or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[var(--primary-accent)]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--primary-accent-glow)]"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Directions modal */}
      <AnimatePresence>
        {showDirections && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDirections(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md rounded-3xl bg-[#111115] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 space-y-4"
            >
              <button
                onClick={() => setShowDirections(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-accent)] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>LOCATION & ACCESS</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white">
                {gymConfig.gymName} Main Center
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-300 space-y-2">
                <p>
                  <strong className="text-white">Address:</strong> {gymConfig.address}
                </p>
                <p>
                  <strong className="text-white">Hours:</strong> {gymConfig.operatingHours.display}
                </p>
                <p className="text-zinc-400 text-[11px]">
                  Visit our front concierge desk upon arrival on KNK Road.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={gymConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-[var(--primary-accent)] text-black hover:opacity-90 text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>OPEN GOOGLE MAPS</span>
                </a>
                <button
                  onClick={() => setShowDirections(false)}
                  className="px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
