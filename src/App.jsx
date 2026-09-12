import { useState, useEffect } from "react";
import { gymConfig } from "./config/gymConfig";

// Common Components
import CustomCursor from "./components/common/CustomCursor";
import PageLoader from "./components/common/PageLoader";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import BackToTop from "./components/common/BackToTop";
import MarqueeTicker from "./components/common/MarqueeTicker";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Programs from "./components/sections/Programs";
import Transformation from "./components/sections/Transformation";
import MuscleSelector from "./components/sections/MuscleSelector";
import Trainers from "./components/sections/Trainers";
import Pricing from "./components/sections/Pricing";
import BMICalculator from "./components/sections/BMICalculator";
import FitnessQuiz from "./components/sections/FitnessQuiz";
import Facilities from "./components/sections/Facilities";
import Gallery from "./components/sections/Gallery";
import Reviews from "./components/sections/Reviews";
import Branches from "./components/sections/Branches";
import Contact from "./components/sections/Contact";

export default function App() {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);
  const [activeTheme, setActiveTheme] = useState(gymConfig.defaultTheme);

  // Apply theme dataset to html root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative selection:bg-[var(--primary-accent)] selection:text-black">
      {/* Intro Fullscreen Loader */}
      {!isLoaderFinished && (
        <PageLoader onComplete={() => setIsLoaderFinished(true)} />
      )}

      {/* Desktop Magnetic Follow Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphic Header */}
      <Navbar
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />

      {/* Main Content Area */}
      <main className="relative z-10 overflow-hidden">
        {/* Fullscreen Hero Section */}
        <Hero />

        {/* Continuous Animated Marquee Ticker */}
        <MarqueeTicker />

        {/* Editorial About Section */}
        <About />

        {/* Why Choose Us Cards */}
        <WhyChooseUs />

        {/* Fitness Programs with Filter Tabs */}
        <Programs />

        {/* Interactive Draggable Transformation Slider */}
        <Transformation />

        {/* Interactive Muscle Group Explorer & WOD Spotlight */}
        <MuscleSelector />

        {/* Elite Master Coaches / Trainers */}
        <Trainers />

        {/* Membership Pricing Tiers */}
        <Pricing />

        {/* Interactive Biometric BMI & Calorie Estimator */}
        <BMICalculator />

        {/* Fitness Goal Quiz */}
        <FitnessQuiz />

        {/* Modern Facilities & Amenities Showcase */}
        <Facilities />

        {/* Fullscreen Masonry Gallery & Lightbox Viewer */}
        <Gallery />

        {/* Member Testimonials & Review Carousel */}
        <Reviews />

        {/* Branch Campuses & Map Placeholder */}
        <Branches />

        {/* Direct Contact Desk & Inquiry Form */}
        <Contact />
      </main>

      {/* 4-Column Luxury Footer */}
      <Footer />

      {/* Fixed WhatsApp Pulse Widget */}
      <FloatingWhatsApp />

      {/* Scroll to Top Trigger */}
      <BackToTop />
    </div>
  );
}
