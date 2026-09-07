import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/portfolioData";
import { Plus } from "lucide-react";
import { FramerPaperclip } from "../components/ui/StickerChip";
import InteractiveEyes from "../components/ui/InteractiveEyes";
import {
  PinkStripedCircle,
  BlueWaveLine,
  BlueArcScales,
  YellowSpringCoil,
  PenNibDoodle,
  AbstractGreenCup,
  LightbulbPencilDoodle,
  CoralRedStar,
  YellowSquiggle,
} from "../components/ui/DecorativeSVGs";
import { openContactModal } from "../components/ui/ContactModal";

function FloatingFAQCard({ faq, isOpen, onToggle, className = "", style = {} }) {
  return (
    <div
      className={`${isOpen ? "z-40" : "z-30"} pointer-events-auto select-none ${className}`}
      style={style}
    >
      <div
        onClick={onToggle}
        className="cursor-pointer rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
        style={{
          backgroundColor: faq.bgColor,
          boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 0.12)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="py-3.5 px-5 sm:px-6 flex items-center justify-between gap-4">
          <span
            className="text-[#121212] font-semibold text-[15px] sm:text-[16px] md:text-[17px] tracking-tight leading-snug"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-6 h-6 flex items-center justify-center text-[#121212] flex-shrink-0"
          >
            <Plus className="w-5 h-5 stroke-[2.2]" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="px-5 sm:px-6 pb-4 pt-1 text-[#2A2A2A] text-[13.5px] sm:text-[14.5px] leading-relaxed font-normal border-t border-black/8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // The 4 main cards for desktop placement matching Image 1
  const cardFramer = faqs.find((f) => f.id === "framer-build") || faqs[0];
  const cardDesign = faqs.find((f) => f.id === "what-design") || faqs[1];
  const cardVisuals = faqs.find((f) => f.id === "only-visuals") || faqs[2];
  const cardNeed = faqs.find((f) => f.id === "need-from-me") || faqs[3];

  return (
    <section
      id="faqs"
      className="relative w-full py-20 sm:py-28 md:py-32 bg-[#F6F5EF] overflow-hidden select-none"
    >
      {/* ── 1. AUTHENTIC BLUE GRID GRAPH PAPER BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-85"
        style={{
          backgroundImage: "url('/images/framer-grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
          backgroundPosition: "center top",
        }}
      />

      {/* ── 2. DESKTOP SCATTERED LAYOUT (MATCHING IMAGE 1) ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto min-h-[640px] md:min-h-[700px] hidden md:flex flex-col items-center justify-center px-6">
        
        {/* Decorative SVG Doodles & Interactive Eyes around Canvas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Left: Interactive Eyes */}
          <div className="absolute top-[2%] left-[4%] pointer-events-auto">
            <InteractiveEyes style={{ width: "64px", height: "48px" }} />
          </div>

          {/* Top Left: Pink Striped Circle */}
          <div className="absolute top-[11%] left-[7.5%]">
            <PinkStripedCircle className="w-7 h-7" />
          </div>

          {/* Upper Left: Blue Wave Line */}
          <div className="absolute top-[9%] left-[23%]">
            <BlueWaveLine className="w-20 h-5" />
          </div>

          {/* Middle Left: Dark Doodle Cloud */}
          <div className="absolute top-[32%] left-[17%] opacity-80">
            <svg width="28" height="22" viewBox="0 0 40 30" fill="none">
              <path
                d="M10 24H30C34.4 24 38 20.4 38 16C38 11.9 34.9 8.5 30.8 8.1C29.8 3.5 25.7 0 20.8 0C16.8 0 13.3 2.3 11.6 5.8C10.7 5.3 9.7 5 8.6 5C4.4 5 1 8.4 1 12.6C1 14.5 1.7 16.3 2.9 17.6C1.7 18.9 1 20.6 1 22.5C1 23.3 1.2 24 1.5 24.7"
                fill="#4B5563"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Far Left: Abstract Lime Green Cup / Slices */}
          <div className="absolute top-[38%] left-[2.5%] opacity-90">
            <AbstractGreenCup className="w-24 h-24" />
          </div>

          {/* Bottom Left: Yellow Squiggle */}
          <div className="absolute bottom-[9%] left-[2%]">
            <YellowSquiggle className="w-20 h-5" />
          </div>

          {/* Top Right: Yellow Spring Coil + Pen Nib */}
          <div className="absolute top-[18%] right-[22%] flex items-center gap-3">
            <YellowSpringCoil className="w-6 h-9" />
            <PenNibDoodle className="w-6 h-8" />
          </div>

          {/* Top Right: Blue Arc Scales */}
          <div className="absolute top-[7%] right-[5%]">
            <BlueArcScales className="w-14 h-10" />
          </div>

          {/* Middle Right: Right Interactive Eyes */}
          <div className="absolute top-[38%] right-[3%] pointer-events-auto">
            <InteractiveEyes style={{ width: "64px", height: "48px" }} />
          </div>

          {/* Middle Right: Yellow Zigzag Squiggle */}
          <div className="absolute top-[48%] right-[8%]">
            <YellowSquiggle className="w-18 h-5" />
          </div>

          {/* Lower Right: Lightbulb & Pencil Sticker */}
          <div className="absolute bottom-[34%] right-[4.5%]">
            <LightbulbPencilDoodle className="w-9 h-9" />
          </div>

          {/* Bottom Right: Coral Red Star */}
          <div className="absolute bottom-[11%] right-[25%]">
            <CoralRedStar className="w-6 h-6" />
          </div>

          {/* Confetti (Green square, pink ribbon, blue diamond) */}
          <div className="absolute bottom-[13%] left-[24%] flex items-center gap-3 opacity-90">
            <div className="w-3.5 h-3.5 bg-[#4ADE80] rounded-xs rotate-12" />
            <div className="w-6 h-3 bg-[#F472B6] -rotate-12 rounded-xs" />
            <div className="w-3 h-3 bg-[#38BDF8] rotate-45" />
          </div>
        </div>

        {/* Center Title with Tilted FAQs Badge */}
        <div className="relative flex flex-col items-center justify-center text-center my-auto py-12 z-10">
          {/* Tilted FAQs badge overlapping top-left of title */}
          <div className="absolute -top-7 left-[12%] lg:left-[18%] -rotate-[15deg] z-30 pointer-events-auto select-none">
            <div className="relative h-[42px] px-4 bg-[#E8F3FF] rounded-xl shadow-xs border border-white flex items-center gap-2.5">
              {/* Cyan Circle Badge with Question / Help icon */}
              <div className="w-6 h-6 rounded-full bg-[#2E7CF6] flex items-center justify-center text-white text-[12px] font-bold shadow-xs">
                ?
              </div>
              {/* Paperclip */}
              <div className="w-4 h-4 -ml-1 rotate-12">
                <FramerPaperclip color="#2E7CF6" />
              </div>
              <span
                className="text-[#1A1A1A] font-bold text-[14px] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                FAQs
              </span>
            </div>
          </div>

          <h2
            className="text-[#1A1A1A] font-[900] text-[52px] lg:text-[68px] leading-[0.92] tracking-tight uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ANSWER BEFORE<br />
            WE STARTS
          </h2>
        </div>

        {/* ── 4 Floating Pastel Pill Cards (Exact coordinates matching Image 1) ── */}
        
        {/* 1. Lime Yellow Green: "Do you build in framer?" (Top-Right / Center-Top) */}
        <FloatingFAQCard
          faq={cardFramer}
          isOpen={openId === cardFramer.id}
          onToggle={() => toggleFAQ(cardFramer.id)}
          className="absolute top-[5%] right-[20%] lg:right-[26%] w-[310px] lg:w-[330px]"
        />

        {/* 2. Soft Pastel Pink: "What can you design?" (Upper-Left / Center-Left) */}
        <FloatingFAQCard
          faq={cardDesign}
          isOpen={openId === cardDesign.id}
          onToggle={() => toggleFAQ(cardDesign.id)}
          className="absolute top-[17%] left-[18%] lg:left-[24%] w-[290px] lg:w-[310px]"
        />

        {/* 3. Soft Pastel Mint: "Do you only design visuals?" (Lower-Left / Bottom-Left) */}
        <FloatingFAQCard
          faq={cardVisuals}
          isOpen={openId === cardVisuals.id}
          onToggle={() => toggleFAQ(cardVisuals.id)}
          className="absolute bottom-[17%] left-[8%] lg:left-[11%] w-[330px] lg:w-[350px]"
        />

        {/* 4. Soft Pastel Yellow: "What do you need from me?" (Lower-Right / Bottom-Right) */}
        <FloatingFAQCard
          faq={cardNeed}
          isOpen={openId === cardNeed.id}
          onToggle={() => toggleFAQ(cardNeed.id)}
          className="absolute bottom-[23%] right-[4%] lg:right-[8%] w-[330px] lg:w-[350px]"
        />
      </div>

      {/* ── 3. MOBILE RESPONSIVE ACCORDION VIEW (< 768px) ── */}
      <div className="relative z-10 w-full max-w-[580px] mx-auto px-5 sm:px-8 block md:hidden">
        
        {/* Mobile Title with FAQs Badge */}
        <div className="text-center mb-10 relative flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E8F3FF] border border-white rounded-xl shadow-xs mb-4 -rotate-3">
            <div className="w-5 h-5 rounded-full bg-[#2E7CF6] flex items-center justify-center text-white text-[11px] font-bold">
              ?
            </div>
            <span className="text-[#1A1A1A] font-bold text-[13px]">FAQs</span>
          </div>

          <h2
            className="text-[#1A1A1A] font-[900] text-[34px] sm:text-[42px] leading-tight tracking-tight uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ANSWER BEFORE<br />
            WE STARTS
          </h2>
        </div>

        {/* Mobile Accordion Stack with Beautiful Pastel Colors */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq) => (
            <FloatingFAQCard
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
