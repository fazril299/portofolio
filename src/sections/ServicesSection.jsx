import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
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
  DarkGreyCloud,
} from "../components/ui/DecorativeSVGs";
import InteractiveEyes from "../components/ui/InteractiveEyes";

// ── 1. EXACT FRAMER PHOSPHOR ICONS (FROM FRAMER SOURCE) ──

function LayoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 3.75 4.5 L 20.25 4.5 C 20.664 4.5 21 4.836 21 5.25 L 21 18.75 C 21 19.164 20.664 19.5 20.25 19.5 L 3.75 19.5 C 3.336 19.5 3 19.164 3 18.75 L 3 5.25 C 3 4.836 3.336 4.5 3.75 4.5 Z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M 3 9.75 L 21 9.75" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 9.75 9.75 L 9.75 19.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CursorClickIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 9 1.5 L 9 2.25" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 1.5 9 L 2.25 9" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 12 1.5 L 12.75 3" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 1.5 12 L 3 12.75" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M 15.22 12.97 C 15.044 12.8 14.967 12.545 15.013 12.3 L 19.8 10.6 C 20.08 10.47 20.25 10.18 20.24 9.87 C 20.22 9.57 20.02 9.3 19.73 9.2 L 4.73 4.3 C 4.46 4.22 4.17 4.29 3.98 4.49 C 3.78 4.69 3.71 4.98 3.79 5.24 L 8.69 20.25 C 8.79 20.54 9.06 20.74 9.36 20.76 C 9.67 20.77 9.95 20.6 10.08 20.32 L 11.75 15.97 C 11.85 15.74 12.06 15.58 12.3 15.53 C 12.54 15.48 12.8 15.56 12.97 15.74 L 17.78 20.55 C 18.07 20.84 18.55 20.84 18.84 20.55 L 20.03 19.36 C 20.32 19.07 20.32 18.59 20.03 18.3 Z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodesandboxLogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 12.36 2.34 L 20.61 6.86 C 20.85 6.99 21 7.24 21 7.52 L 21 16.48 C 21 16.76 20.85 17.01 20.61 17.14 L 12.36 21.66 C 12.14 21.78 11.86 21.78 11.64 21.66 L 3.39 17.14 C 3.15 17.01 3 16.76 3 16.48 L 3 7.52 C 3 7.24 3.15 6.99 3.39 6.86 L 11.64 2.34 C 11.86 2.22 12.14 2.22 12.36 2.34 Z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="12" x2="12" y2="21.75" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 3 11.79 L 7.5 14.25 L 7.5 19.39" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 21 11.79 L 16.5 14.25 L 16.5 19.39" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 7.8 4.45 L 12 6.75 L 16.2 4.45" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 3.1 7.13 L 12 12 L 20.9 7.13" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FramerLogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 5.25 9.75 L 5.25 15.75 L 12 22.5 L 12 15.75 L 18.75 15.75 L 5.25 3.75 L 18.75 3.75 L 18.75 9.75 Z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="1.5" x2="12" y2="5.25" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="3" y="5.25" width="18" height="15" rx="2.25" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.75" cy="9" r="1.125" fill="white" />
      <circle cx="15" cy="9" r="1.125" fill="white" />
      <rect x="6.75" y="13.5" width="10.5" height="3.75" rx="1.875" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10.125" y1="13.5" x2="10.125" y2="17.25" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      <line x1="13.875" y1="13.5" x2="13.875" y2="17.25" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

// Custom Cursor Arrow (Yellow with blue border, matching Framer original)
function ServicePointerArrow({ className = "" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
    >
      <path
        d="M6 3L23 11.5L14.5 15L11 23.5L6 3Z"
        fill="#FFD233"
        stroke="#1E40AF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── 2. EXACT FRAMER SERVICES DATA WITH PREVIEW IMAGES ──

const servicesList = [
  {
    id: "web-design",
    title: "Website Design",
    bgColor: "rgb(251, 231, 227)",
    badgeColor: "rgb(232, 162, 166)",
    icon: <LayoutIcon />,
    image: "/images/services/website-design.png",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    bgColor: "rgb(217, 231, 245)",
    badgeColor: "rgb(74, 150, 237)",
    icon: <CursorClickIcon />,
    image: "/images/services/ui-ux-design.png",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    bgColor: "rgb(243, 238, 190)",
    badgeColor: "rgb(232, 210, 16)",
    icon: <CodesandboxLogoIcon />,
    image: "/images/services/brand-identity.png",
  },
  {
    id: "framer-builds",
    title: "Framer Builds",
    bgColor: "rgb(220, 245, 224)",
    badgeColor: "rgb(82, 222, 133)",
    icon: <FramerLogoIcon />,
    image: "/images/services/framer-builds.png",
  },
  {
    id: "ai-exploration",
    title: "AI Exploration",
    bgColor: "rgb(235, 230, 243)",
    badgeColor: "rgb(129, 104, 253)",
    icon: <RobotIcon />,
    image: "/images/services/ai-exploration.png",
  },
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeMobileService, setActiveMobileService] = useState(null);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const springConfig = { damping: 28, stiffness: 360, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest("#services")) {
        setActiveMobileService(null);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("touchstart", handleOutsideClick, { passive: true });
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <section
      id="services"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onPointerMove={(e) => {
        if (e.pointerType === "mouse") {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      }}
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#F6F5EF] overflow-hidden select-none"
    >
      {/* ── CSS BLUE GRID LINES BACKGROUND ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(#2E7CF6 1px, transparent 1px),
            linear-gradient(90deg, #2E7CF6 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* ── FLOATING DOODLES MATCHING SCREENSHOT 1 ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Top-Left: Pink Striped Circle */}
        <div className="absolute top-[9%] left-[6%] sm:left-[7%]">
          <PinkStripedCircle className="w-8 h-8" />
        </div>

        {/* Top-Left: Blue Wavy Scribble */}
        <div className="absolute top-[9%] left-[19%] sm:left-[21%] hidden sm:block">
          <BlueWaveLine className="w-24 h-6" />
        </div>

        {/* Mid-Left: Dark Grey Cloud Sticker */}
        <div className="absolute top-[26%] left-[14%] sm:left-[16%]">
          <DarkGreyCloud className="w-9 h-6" />
        </div>

        {/* Far-Left: Neon Green Wireframe Cup */}
        <div className="absolute top-[33%] left-[2%] sm:left-[3%] hidden lg:block opacity-90">
          <AbstractGreenCup className="w-28 h-28" />
        </div>

        {/* Left: Blue Mouse Cursor Arrow */}
        <div className="absolute top-[68%] left-[10%] sm:left-[11%] hidden md:block">
          <BlueCursorIcon className="w-8 h-8" />
        </div>

        {/* Bottom-Left: Yellow Squiggle */}
        <div className="absolute bottom-[12%] left-[1%] sm:left-[2%] hidden lg:block">
          <YellowSquiggle className="w-20 h-5" />
        </div>

        {/* Top-Center-Right: Yellow Spring Coil */}
        <div className="absolute top-[17%] right-[32%] sm:right-[35%] hidden md:block">
          <YellowSpringCoil className="w-7 h-10" />
        </div>

        {/* Top-Right: Pen Nib Icon (Floating directly next to Website Design card) */}
        <div className="absolute top-[38%] right-[11%] sm:right-[13%] hidden lg:block z-20">
          <PenNibDoodle className="w-6 h-8" />
        </div>

        {/* Top-Right: Blue Arc Scales */}
        <div className="absolute top-[8%] right-[5%] sm:right-[7%]">
          <BlueArcScales className="w-16 h-12" />
        </div>

        {/* Right: Interactive Eyes (Stationary, tracking cursor) */}
        <div className="absolute top-[34%] right-[3%] sm:right-[5%] z-20">
          <InteractiveEyes />
        </div>

        {/* Right: Yellow Squiggle Below Eyes */}
        <div className="absolute top-[42%] right-[6%] sm:right-[8%] hidden sm:block">
          <YellowSquiggle className="w-18 h-5" />
        </div>

        {/* Right: Lightbulb & Pencil */}
        <div className="absolute top-[62%] right-[4%] sm:right-[6%] flex items-center gap-2 z-20">
          <LightbulbPencilDoodle className="w-10 h-10" />
        </div>

        {/* Bottom Right Confetti Cluster */}
        <div className="absolute bottom-[14%] right-[22%]">
          <CoralRedStar className="w-7 h-7" />
        </div>
        <div className="absolute bottom-[13%] right-[15%] w-3.5 h-3.5 bg-[#6EE7B7] rounded-[3px] rotate-12 hidden sm:block shadow-xs" />
        <div className="absolute bottom-[11%] right-[10%] w-7 h-4 bg-[#FCA5A5] -rotate-12 rounded-[2px] hidden sm:block shadow-xs" />
        <div className="absolute bottom-[6%] right-[13%] w-3.5 h-3.5 bg-[#60A5FA] rotate-45 hidden sm:block shadow-xs" />
      </div>

      {/* ── CENTER SERVICES CONTENT (MATCHING SCREENSHOT 1) ── */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-14 pb-20 flex flex-col items-center">
        
        {/* Headline Container with Anchored Tilted Services Sticker Badge */}
        <div className="relative inline-block mb-10 sm:mb-14">
          {/* Tilted "Services" Sticker pinned on top-left of the title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -22 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-11 sm:-top-13 left-2 sm:left-4 z-30 pointer-events-auto"
          >
            <div className="relative w-[130px] sm:w-[142px] h-[46px] sm:h-[50px] bg-[#E8F3FF] rounded-xl sm:rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center pl-[26px] pr-[12px]">
              {/* Blue Circle Badge with Book Icon */}
              <div className="absolute -top-2.5 -left-2.5 w-7 h-7 sm:w-8 sm:h-8 bg-[#2E7CF6] rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10" />
                  <path d="M6 10h10" />
                </svg>
              </div>

              {/* Blue Paperclip */}
              <div className="absolute top-[3px] left-[26px] w-[18px] h-[18px] rotate-[10deg]">
                <FramerPaperclip color="#2E7CF6" />
              </div>

              {/* Text */}
              <span
                className="text-[#1A1A1A] font-extrabold text-[14px] sm:text-[15px] ml-1"
                style={{ fontFamily: "'Mona Sans', 'Plus Jakarta Sans', sans-serif" }}
              >
                Services
              </span>

              {/* Top-Right Black Tack Pin Dot */}
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#1A1A1A] font-[900] text-[42px] sm:text-[64px] md:text-[76px] leading-[0.92] tracking-tight uppercase"
            style={{ fontFamily: "'Mona Sans', 'Plus Jakarta Sans', sans-serif" }}
          >
            WHERE I<br />
            CAN HELP YOU
          </motion.h2>
        </div>

        {/* ── 5 SERVICE ROWS: EXACT 700PX WIDTH, 12PX BORDER RADIUS, 4PX FLAT SHADOW ── */}
        <div className="w-full max-w-[700px] flex flex-col gap-4">
          {servicesList.map((service, idx) => {
            const isSelected = activeMobileService?.id === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.015, y: -2 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                onMouseEnter={() => {
                  setHoveredService(service);
                }}
                onMouseLeave={() => {
                  setHoveredService(null);
                }}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") {
                    setHoveredService(service);
                  }
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === "mouse") {
                    setHoveredService(null);
                  }
                }}
                onClick={() => {
                  setActiveMobileService((prev) => (prev?.id === service.id ? null : service));
                }}
                className="relative w-full flex items-center justify-between px-6 py-[22px] cursor-pointer transition-all select-none"
                style={{
                  backgroundColor: service.bgColor,
                  borderRadius: "12px",
                  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.14)",
                  zIndex: isSelected ? 40 : 1,
                }}
              >
                {/* Service Title with Mona Sans font */}
                <span
                  className="text-[#252525] font-semibold text-[22px] sm:text-[24px] tracking-tight text-left"
                  style={{
                    fontFamily: '"Mona Sans", "Plus Jakarta Sans", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "-1px",
                    lineHeight: "100%",
                  }}
                >
                  {service.title}
                </span>

                {/* Exact Framer Badge: 41px, 1.7px White Border, 9.3px -3.72px Flat Retro Sticker Shadow */}
                <div
                  className="w-[41px] h-[41px] rounded-full flex items-center justify-center flex-shrink-0 relative select-none"
                  style={{
                    backgroundColor: service.badgeColor,
                    border: "1.7px solid rgb(255, 255, 255)",
                    boxShadow: "9.3px -3.72px 0px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Floating Preview Card on Mobile / Touch */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75, y: 15, rotate: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0, rotate: -1 }}
                      exit={{ opacity: 0, scale: 0.75, y: 10, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 420, damping: 26 }}
                      className="absolute -bottom-8 sm:-bottom-10 left-3 sm:left-6 z-50 pointer-events-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMobileService(null);
                      }}
                    >
                      <div className="relative">
                        {/* White border card with drop shadow matching Framer */}
                        <div
                          className="w-[145px] sm:w-[172px] aspect-[483/609] bg-white rounded-[22px] p-1 border-[3.5px] sm:border-[4px] border-white overflow-hidden"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.28) 0px 10px 32px 0px",
                          }}
                        >
                          <div className="w-full h-full rounded-[18px] overflow-hidden bg-neutral-900">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="eager"
                            />
                          </div>
                        </div>

                        {/* Pointer Arrow anchored to bottom-left */}
                        <div className="absolute -bottom-2.5 -left-3.5 pointer-events-none z-10">
                          <ServicePointerArrow />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ── DESKTOP FLOATING CURSOR CARD (FOLLOWS MOUSE WITH SPRING) ── */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed top-0 left-0 pointer-events-none z-[9999] select-none hidden md:block"
            style={{
              x: smoothX,
              y: smoothY,
              transform: "translate(-20px, -230px)",
            }}
          >
            <div className="relative">
              <div
                className="w-[172px] aspect-[483/609] bg-white rounded-[24px] p-1 border-[4px] border-white overflow-hidden"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.28) 0px 12px 36px 0px",
                }}
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-neutral-900">
                  <img
                    src={hoveredService.image}
                    alt={hoveredService.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Cursor arrow at mouse pointer position */}
              <div className="absolute -bottom-2 -left-3 pointer-events-none z-10">
                <ServicePointerArrow />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


