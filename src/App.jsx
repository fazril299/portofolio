import { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FullProjectsSection from "./sections/FullProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import Dock from "./components/ui/Dock";
import FlutterMobileApp from "./components/flutter/FlutterMobileApp";
import EyesCursorFollower from "./components/ui/EyesCursorFollower";
import ContactModal from "./components/ui/ContactModal";

function PortfolioContent() {
  return (
    <div className="w-full bg-[#F6F5EF] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      {/* ── 1. HERO SECTION ── */}
      <HeroSection />

      {/* ── 2. STATEMENT & STATS (ABOUT) SECTION ── */}
      <AboutSection />

      {/* ── 3. PROJECTS THAT TELL STORIES ── */}
      <FullProjectsSection />

      {/* ── 4. WHERE I CAN HELP YOU - SERVICES ── */}
      <ServicesSection />

      {/* ── 5. CLIENTS LIKED THE PIXELS - REVIEWS ── */}
      <TestimonialsSection />

      {/* ── 6. ANSWER BEFORE WE STARTS - FAQS ── */}
      <FAQSection />

      {/* ── 7. FINAL CALL TO ACTION ── */}
      <FinalCTASection />
    </div>
  );
}

export default function App() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        /* ── 1. NATIVE FLUTTER MOBILE APP VIEW (Active on Mobile Viewports < 768px) ── */
        <div className="w-full h-full">
          <FlutterMobileApp>
            <PortfolioContent />
          </FlutterMobileApp>
        </div>
      ) : (
        /* ── 2. DESKTOP FULL WEB PORTFOLIO (Active on Desktop >= 768px) ── */
        <div className="w-full min-h-screen bg-[#F6F5EF] relative select-none">
          <EyesCursorFollower />
          <PortfolioContent />
          <Dock />
        </div>
      )}

      {/* ── GLOBAL CONTACT POPUP MODAL (AUTHENTIC FRAMER BROWSER WINDOW) ── */}
      <ContactModal />
    </>
  );
}
