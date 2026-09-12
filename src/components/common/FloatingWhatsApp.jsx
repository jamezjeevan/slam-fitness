import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, CheckCheck, ExternalLink } from "lucide-react";
import { gymConfig } from "../../config/gymConfig";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: `Hello! Welcome to ${gymConfig.gymName} (KNK Road, Thousand Lights). 5.0★ Rated Unisex Fitness Studio. How can our team assist you today?`,
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickPrompts = [
    "Enquire Now on WhatsApp",
    "Get Your Own Trainer",
    "Unisex Gym Membership",
    "Operating Hours (6 AM - 10 PM)",
    "KNK Road Location",
  ];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    if (text === "Enquire Now on WhatsApp") {
      window.open(gymConfig.whatsappUrl, "_blank");
      return;
    }

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: text,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Simulated instant concierge reply
    setTimeout(() => {
      let replyText = `Thank you for asking about "${text}"! Slam Lifestyle And Fitness Studio on KNK Road is open 7 days a week (6:00 AM to 10:00 PM). Tap "Open in WhatsApp" for instant assistance!`;
      
      if (text.toLowerCase().includes("trainer") || text.toLowerCase().includes("coach")) {
        replyText = `Our 'Get Your Own Trainer' service pairs you with certified personal coaches for 1-on-1 body transformations, customized strength protocols, and nutrition guidance. Contact WhatsApp 7947149031 to book!`;
      } else if (text.toLowerCase().includes("pric") || text.toLowerCase().includes("member")) {
        replyText = `We offer Basic Unisex Gym access and Pro/Elite Personal Coaching packages. Contact WhatsApp 7947149031 for current membership options!`;
      } else if (text.toLowerCase().includes("hour") || text.toLowerCase().includes("time")) {
        replyText = `We are open 7 days a week: 6:00 AM - 10:00 PM. (Note: On public holidays like Ganesh Chaturthi, business hours may be affected).`;
      } else if (text.toLowerCase().includes("location") || text.toLowerCase().includes("knk") || text.toLowerCase().includes("road")) {
        replyText = `We are located on Khader Nawaz Khan (KNK) Road, Thousand Lights, Chennai. Rated 5.0★ with 41+ verified reviews!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: replyText,
          time: "Just now",
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Interactive WhatsApp Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="mb-4 w-[340px] sm:w-[380px] rounded-3xl bg-[#111115] border border-white/15 shadow-2xl overflow-hidden flex flex-col h-[520px]"
          >
            {/* WhatsApp Styled Header */}
            <div className="bg-[#0b141a] p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0b141a]" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white flex items-center gap-1.5">
                    <span>SLAM KNK Road Concierge</span>
                  </h4>
                  <p className="text-[10px] text-[#25D366] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online • WhatsApp: 7947149031
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Top Bar */}
            <div className="bg-[#0f1f18] px-4 py-2 border-b border-[#25D366]/20 flex items-center justify-between text-[11px]">
              <span className="text-zinc-300">Enquire Now: <strong className="text-white">7947149031</strong></span>
              <a
                href={gymConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold text-[#25D366] hover:underline flex items-center gap-1"
              >
                <span>OPEN IN WHATSAPP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0d0d12]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#005c4b] text-white rounded-br-none"
                        : "bg-[#1f2c34] text-zinc-200 rounded-bl-none border border-white/5"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-zinc-400 mt-1">
                      <span>{msg.time}</span>
                      {msg.sender === "user" && (
                        <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[#111115] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[10px] text-zinc-300 font-medium whitespace-nowrap border border-white/5 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Message Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#0b141a] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about training, gym, timings..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#25D366]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] text-black hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="flex items-center justify-end">
        {!isOpen && (
          <a
            href={gymConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mr-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111115] border border-[#25D366]/40 text-xs font-semibold text-white shadow-2xl hover:bg-[#25D366]/10 transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <div>
              <span className="block font-bold text-white">Enquire Now WhatsApp</span>
              <span className="block text-[10px] text-[#25D366] font-mono">
                {gymConfig.whatsappNumber}
              </span>
            </div>
          </a>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label="Open WhatsApp Concierge"
        >
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          )}
          {isOpen ? (
            <X className="w-6 h-6 relative z-10 text-black" />
          ) : (
            <MessageCircle className="w-6 h-6 relative z-10 fill-current text-black" />
          )}
        </button>
      </div>
    </div>
  );
}
