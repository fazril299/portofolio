import { motion } from "framer-motion";
import RedPin from "../components/ui/RedPin";
import { FramerPaperclip } from "../components/ui/StickerChip";
import {
  PinkStripedCircle,
  BlueWaveLine,
  BlueArcScales,
  YellowSpringCoil,
  PenNibDoodle,
  AbstractGreenCup,
  BlueCursorIcon,
  LightbulbPencilDoodle,
  CoralRedStar,
  YellowSquiggle,
} from "../components/ui/DecorativeSVGs";
import InteractiveEyes from "../components/ui/InteractiveEyes";
import { openContactModal } from "../components/ui/ContactModal";

function CornerFold() {
  return (
    <div className="absolute -top-[3px] -right-[4px] w-[60px] h-[60px] pointer-events-none z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-full h-full">
        <path
          d="M 0 3.092 L 60.008 56.916 L 22.099 65.622 C 17.768 66.617 13.457 63.892 12.497 59.554 Z"
          fill="rgb(0,0,0)"
          opacity="0.2"
        />
        <path
          d="M 0 3 L 56 57 C 32.002 58.304 28.621 58.621 11.081 59.574 C 6.67 59.814 2.898 56.432 2.658 52.02 Z"
          fill="#C7FB03"
        />
        <path
          d="M 56 58 L 0.003 3.093 L 39.973 3.027 C 48.82 3.012 56 10.18 56 19.027 Z"
          fill="#00252E"
        />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#F6F5EF] overflow-hidden select-none"
    >
      {/* ── AUTHENTIC FRAMER BLUE GRID GRAPH PAPER BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-85"
        style={{
          backgroundImage: "url('/images/framer-grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
          backgroundPosition: "center top",
        }}
      />

      {/* ── FLOATING DOODLES MATCHING SCREENSHOT 2 & 3 ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        
        {/* Top-Left: Pink Striped Circle */}
        <div className="absolute top-[5%] left-[4%] sm:left-[6%]">
          <PinkStripedCircle className="w-8 h-8" />
        </div>

        {/* Top-Left: Blue "About" Pill Sticker (-18° Rotation) */}
        <div
          className="absolute top-[7%] sm:top-[8%] left-[6%] sm:left-[9%] md:left-[11%] z-20 pointer-events-auto -rotate-[18deg]"
        >
          <div className="relative w-[115px] h-[46px] bg-[#E8F3FF] rounded-xl shadow-xs border border-white flex items-center justify-center pl-[24px] pr-[10px] hover:scale-105 transition-transform">
            {/* Blue Circle Badge */}
            <div className="absolute -top-2 -left-2 w-7 h-7 bg-[#2E7CF6] rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            {/* Paperclip */}
            <div className="absolute top-[4px] left-[24px] w-[18px] h-[18px] rotate-[10deg]">
              <FramerPaperclip color="#2E7CF6" />
            </div>
            <span
              className="text-[#1A1A1A] font-bold text-[14px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              About
            </span>
          </div>
        </div>

        {/* Top-Left: Blue Wavy Scribble */}
        <div className="absolute top-[8%] left-[26%] sm:left-[28%] hidden md:block">
          <BlueWaveLine className="w-24 h-6" />
        </div>

        {/* Top-Right: Blue Arc Scales */}
        <div className="absolute top-[8%] right-[8%] sm:right-[12%]">
          <BlueArcScales className="w-16 h-12" />
        </div>

        {/* Top-Right: Pen Nib Icon + Yellow Spring Coil */}
        <div className="absolute top-[19%] right-[22%] sm:right-[24%] flex items-center gap-3 hidden md:flex">
          <PenNibDoodle className="w-6 h-8" />
          <YellowSpringCoil className="w-7 h-10" />
        </div>

        {/* Far-Left: Neon Green Wireframe Cup */}
        <div className="absolute top-[38%] left-[2%] sm:left-[5%] hidden lg:block opacity-90">
          <AbstractGreenCup className="w-28 h-28" />
        </div>

        {/* Left: Blue Mouse Cursor Arrow */}
        <div className="absolute top-[58%] left-[12%] sm:left-[14%] hidden md:block">
          <BlueCursorIcon className="w-8 h-8" />
        </div>

        {/* Cloud Emoji (Left Middle) */}
        <div className="absolute top-[32%] left-[18%] text-3xl hidden md:block select-none">
          ☁️
        </div>

        {/* Right: Interactive Eyes (Tracking Cursor) */}
        <div className="absolute top-[38%] right-[5%] sm:right-[8%] z-20">
          <InteractiveEyes />
        </div>

        {/* Right: Lightbulb & Pencil + Yellow Scribble */}
        <div className="absolute top-[48%] right-[5%] sm:right-[8%] flex items-center gap-2 z-20">
          <LightbulbPencilDoodle className="w-10 h-10" />
          <YellowSquiggle className="w-16 h-5 hidden sm:block" />
        </div>

        {/* Bottom Right: Coral Red Star */}
        <div className="absolute bottom-[20%] right-[28%] sm:right-[30%]">
          <CoralRedStar className="w-7 h-7" />
        </div>

        {/* Bottom Left: Yellow Scribble */}
        <div className="absolute bottom-[22%] left-[3%] sm:left-[5%] hidden lg:block">
          <YellowSquiggle className="w-20 h-5" />
        </div>
      </div>

      {/* ── CENTRAL STATEMENT CONTENT (SCREENSHOT 2) ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-8 pb-16 flex flex-col items-center">
        
        {/* Massive Headline */}
        <h2
          className="text-[#1A1A1A] font-[900] text-[42px] sm:text-[64px] md:text-[76px] leading-[0.95] tracking-tight uppercase mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          I MAKE DESIGNS<br />
          PEOPLE REMEMBER
        </h2>

        {/* Subtitle with Horizontal Dash */}
        <div
          className="max-w-2xl mx-auto mb-10 text-[#1A1A1A] text-[18px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <p>I design clean websites, apps, and brand systems</p>
          <p>that help ideas look sharper, feel trusted</p>
          <p className="flex items-center justify-center gap-2 mt-1">
            <span className="inline-block w-8 border-b-[3px] border-black"></span>
            <span>and work with purpose.</span>
          </p>
        </div>

        {/* Tilted "Start a project" Card with Red Pin */}
        <div
          className="relative inline-block cursor-pointer select-none -rotate-[4deg] hover:rotate-0 transition-transform"
        >
          <button
            type="button"
            onClick={openContactModal}
            className="block bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] px-8 py-3.5 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <span
              className="text-[#1A1A1A] font-bold text-[17px] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Start a project
            </span>
          </button>
          {/* Red Pin */}
          <div className="absolute -top-3.5 -right-2 z-20 pointer-events-none">
            <RedPin className="w-7 h-7" rotation={15} />
          </div>
        </div>
      </div>

      {/* ── STAGGERED STATS CARDS (AUTHENTIC FRAMER OFFSET SHADOW) ── */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-col gap-8 md:gap-10 max-w-[720px] ml-4 sm:ml-12 md:ml-20">
          
          {/* Card 1: 8+ Years of Experience */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-2xl p-7 border border-black/10 -rotate-[3deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            style={{
              boxShadow: "24px 12px 0px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Corner Fold Accent */}
            <CornerFold />

            {/* Red Pin */}
            <div className="absolute top-[10px] left-[12px] z-20 pointer-events-none">
              <RedPin className="w-[18px] h-[22px]" rotation={-3} />
            </div>

            <h3 className="text-[#1A1A1A] font-[900] text-5xl sm:text-6xl tracking-tighter mb-1 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              8+
            </h3>
            <p className="text-[#1A1A1A] font-bold text-[18px] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Years of Experience
            </p>
            <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Designing websites, apps, and digital experiences with a clear focus on usability.
            </p>
          </div>

          {/* Card 2: 12+ Industries explored */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[360px] self-end mr-4 sm:mr-12 bg-white rounded-2xl p-7 border border-black/10 rotate-[2deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            style={{
              boxShadow: "24px 12px 0px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Corner Fold Accent */}
            <CornerFold />

            {/* Red Pin */}
            <div className="absolute top-[10px] left-[12px] z-20 pointer-events-none">
              <RedPin className="w-[18px] h-[22px]" rotation={-3} />
            </div>

            <h3 className="text-[#1A1A1A] font-[900] text-5xl sm:text-6xl tracking-tighter mb-1 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              12+
            </h3>
            <p className="text-[#1A1A1A] font-bold text-[18px] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Industries explored
            </p>
            <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Worked across SaaS, fintech, AI, agencies, finance, and creative businesses.
            </p>
          </div>

          {/* Card 3: 40+ Projects Designed */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[360px] ml-2 sm:ml-8 bg-white rounded-2xl p-7 border border-black/10 -rotate-[2deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            style={{
              boxShadow: "24px 12px 0px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Corner Fold Accent */}
            <CornerFold />

            {/* Red Pin */}
            <div className="absolute top-[10px] left-[12px] z-20 pointer-events-none">
              <RedPin className="w-[18px] h-[22px]" rotation={-3} />
            </div>

            <h3 className="text-[#1A1A1A] font-[900] text-5xl sm:text-6xl tracking-tighter mb-1 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              40+
            </h3>
            <p className="text-[#1A1A1A] font-bold text-[18px] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Projects Designed
            </p>
            <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              From landing pages to mobile apps, and complete Framer website systems.
            </p>
          </div>

          {/* Card 4: 100% Framer Native */}
          <div
            className="relative w-full max-w-[340px] sm:max-w-[360px] self-end mr-2 sm:mr-8 bg-white rounded-2xl p-7 border border-black/10 rotate-[2deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300"
            style={{
              boxShadow: "24px 12px 0px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Corner Fold Accent */}
            <CornerFold />

            {/* Red Pin */}
            <div className="absolute top-[10px] left-[12px] z-20 pointer-events-none">
              <RedPin className="w-[18px] h-[22px]" rotation={-3} />
            </div>

            <h3 className="text-[#1A1A1A] font-[900] text-5xl sm:text-6xl tracking-tighter mb-1 mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              100%
            </h3>
            <p className="text-[#1A1A1A] font-bold text-[18px] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Framer Native
            </p>
            <p className="text-gray-500 text-[13.5px] leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Responsive Framer websites designed, built, and published.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
