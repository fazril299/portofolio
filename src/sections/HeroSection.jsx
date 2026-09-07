import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StickerChip, { CursorClickIcon, PenNibIcon } from "../components/ui/StickerChip";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden select-none bg-[#6EADD8] flex flex-col justify-between items-center"
    >
      {/* ── 1. BACKGROUND HILLS & SKY IMAGE ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/hero-bg.png"
          alt="Green hills landscape"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ── 2. TOP NAVBAR BRAND LOGO (CENTER TOP) ── */}
      <header className="relative z-30 w-full hidden sm:flex items-center justify-center pt-6 sm:pt-8 flex-shrink-0">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-[800] text-[18px] sm:text-[21px] tracking-[0.22em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          CREATIE®
        </motion.h2>
      </header>

      {/* ── 4. FLOATING ILLUSTRATION CHIP (UPPER RIGHT HILLSIDE) ── */}
      <div
        className="absolute top-[34%] sm:top-[36%] md:top-[38%] right-[5%] sm:right-[12%] md:right-[18%] z-30 pointer-events-auto"
      >
        <StickerChip
          text="Illustration"
          color="#EC68FD"
          bgColor="#F4EAF5"
          icon={PenNibIcon}
          rotation={6}
          scale={isMobile ? 0.72 : 0.9}
        />
      </div>

      {/* ── 5. MAIN CONTENT CONTAINER: PROFILE CARD & HEADLINE ── */}
      <div className="relative z-20 flex-1 w-full flex flex-col justify-center items-center gap-10 sm:gap-14 p-[18px]">
        {/* Profile Card: Sarah - Product Designer */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <div className="flex items-center gap-3.5 bg-[#1F241E]/40 backdrop-blur-xl border border-white/35 rounded-full px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.2)] min-w-[250px] cursor-pointer hover:bg-black/50 transition-colors">
            {/* User Profile Avatar */}
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 shadow-xs">
              <img
                src="/images/avatar-user.png"
                alt="Fazriel Muliawan"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            <div className="flex flex-col justify-center text-left">
              <span
                className="text-white text-[12.5px] font-bold tracking-tight leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                FAZRIEL MULIAWAN - PRODUCT DESIGNER
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-white/90 text-[11px] font-medium leading-none">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Line Headline with Tilted UI/UX Sticker Badge */}
        <div
          className="relative flex items-center justify-center flex-shrink-0"
          style={{
            width: "min(620px, 92vw)",
            minHeight: "112px",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Chip 1: UI/UX Design (Lime Green, -15° rotation, overlapping G & N of DESIGN and touching T of THAT) */}
          <div
            className="absolute z-30 pointer-events-auto"
            style={{
              top: isMobile ? "-14px" : "-20px",
              left: isMobile ? "24%" : "26%",
            }}
          >
            <StickerChip
              text="UI/UX Design"
              color="#93BA06"
              bgColor="#F4F8E8"
              icon={CursorClickIcon}
              rotation={-15}
              scale={isMobile ? 0.72 : 0.88}
            />
          </div>

          {/* 2-Line Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(34px, 5.2vw, 56px)",
              lineHeight: "clamp(38px, 5.2vw, 56px)",
              letterSpacing: "-2.6px",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textAlign: "center",
              margin: 0,
              padding: 0,
              textShadow: "0 4px 20px rgba(0,0,0,0.22)",
            }}
          >
            DESIGN THAT MAKES<br />
            PEOPLE LOOK TWICE
          </motion.h1>
        </div>
      </div>

      {/* ── 7. BOTTOM SPACER FOR macOS DOCK ── */}
      <div className="h-20 sm:h-24 flex-shrink-0" />
    </section>
  );
}
