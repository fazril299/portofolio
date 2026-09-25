import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FramerPaperclip } from "../components/ui/StickerChip";

const projectsList = [
  {
    id: "realtab",
    title: "Realtab",
    category: "Real Estate & Web",
    tool: "React / Vercel",
    year: "2026",
    image: "/images/projects/realtab.png",
    rotate: -3.8,
    clipRotate: -12,
    clipRight: "26%",
    description: "Luxury architectural real estate discovery platform featuring curated residential villas, interactive property filters (Buy/Rent/Sell), and modern immersive visual storytelling.",
    liveUrl: "https://perumahan-gray.vercel.app/",
  },
  {
    id: "sneks",
    title: "Air Flexs",
    category: "3D Web & E-Commerce",
    tool: "React / 3D",
    year: "2026",
    image: "/images/projects/sneks.png",
    rotate: 3.5,
    clipRotate: 14,
    clipRight: "24%",
    description: "Interactive 3D footwear showcase featuring spatial pedestal staging, real-time colorway customization, and modern minimalist luxury aesthetics.",
    liveUrl: "https://sneks-git-main-nusan.vercel.app/",
  },
  {
    id: "loop",
    title: "LOOP",
    category: "Creative Studio",
    tool: "React / Vercel",
    year: "2026",
    image: "/images/projects/loop.png",
    rotate: -4.0,
    clipRotate: -10,
    clipRight: "28%",
    description: "Brutalist interactive creative studio showcase featuring dynamic typography, multi-modal layout views (List, Gallery, Loop, Spiral), and theme customization.",
    liveUrl: "https://loop-creative.vercel.app/",
  },
  {
    id: "waxyweb",
    title: "WaxyWeb",
    category: "Branding & Website",
    tool: "Figma",
    year: "2026",
    image: "/images/projects/waxyweb.png",
    rotate: 4.2,
    clipRotate: 15,
    clipRight: "24%",
    description: "Catalyzing Innovation for People with Autism. A vibrant, accessible web experience and comprehensive brand identity.",
    liveUrl: "https://waxyweb.co",
  },
  {
    id: "sunoma",
    title: "Sunoma",
    category: "Branding",
    tool: "Figma",
    year: "2026",
    image: "/images/projects/sunoma.png",
    rotate: -2.5,
    clipRotate: -11,
    clipRight: "26%",
    description: "Cherry Bomb bold beverage packaging concept designed with expressive typography, soft colors, and playful retro nutrition labels.",
    liveUrl: "https://sunoma.co",
  },
];

export default function FullProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 sm:py-32 overflow-hidden select-none bg-[#6EADD8]"
    >
      {/* ── 1. BACKGROUND HILLS & SKY IMAGE ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/hero-bg.png"
          alt="Green hills landscape"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ── 2. TOP FLOATING BLUE "PROJECTS" BADGE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -22 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-14 sm:top-14 left-[20%] sm:left-[28%] md:left-[32%] z-20 pointer-events-auto"
      >
        <div className="relative w-[125px] h-[48px] bg-[#E8F3FF] rounded-xl shadow-xs border border-white flex items-center justify-center pl-[24px] pr-[10px]">
          {/* Blue Circle Badge */}
          <div className="absolute -top-2.5 -left-2.5 w-7 h-7 bg-[#2E7CF6] rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs">
            {/* Camera / Project icon */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
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
            Projects
          </span>
        </div>
      </motion.div>

      {/* ── 3. CENTER HEADLINE: "PROJECTS THAT TELL STORIES" ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-14 sm:pt-8 mb-16 sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1A1A1A] font-[900] text-[40px] sm:text-[60px] md:text-[76px] leading-[0.92] tracking-tight uppercase"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          PROJECTS THAT
          <br />
          TELL STORIES
        </motion.h2>
      </div>

      {/* ── 4. 2-COLUMN PROJECT CARDS GRID (EXACT 443PX FRAMER SIZE MATCH) ── */}
      <div className="relative z-20 max-w-[940px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-x-[43px] gap-y-[54px] justify-items-center items-start">
        {projectsList.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, rotate: project.rotate * 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: project.rotate }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ scale: 1.03, rotate: project.rotate > 0 ? 1 : -1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % 2) * 0.1 }}
            onClick={() => setActiveProject(project)}
            className="relative w-full max-w-[443px] bg-white rounded-[20px] p-3 shadow-[0_4px_28px_rgba(0,0,0,0.16)] border border-white/80 cursor-pointer group flex flex-col justify-between"
          >
            {/* Top Blue Paperclip Pin */}
            <div
              className="absolute -top-4 z-30 w-7 h-10 pointer-events-none"
              style={{
                right: project.clipRight,
                transform: `rotate(${project.clipRotate}deg)`,
              }}
            >
              <FramerPaperclip color="#3E4CFF" />
            </div>

            {/* Browser Window Header with 3 Traffic Light Dots */}
            <div className="flex items-center gap-1.5 px-1 py-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>

            {/* Project Screenshot inside Window */}
            <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-neutral-100 mb-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>

            {/* Bottom Metadata Caption */}
            <div className="flex items-center justify-between px-1.5 py-1">
              <span
                className="text-[#1A1A1A] font-extrabold text-[18px] sm:text-[20px] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {project.title}
              </span>
              <div
                className="flex items-center gap-2 text-neutral-500 font-semibold text-[11.5px] sm:text-[12.5px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>{project.category}</span>
                <span>{project.tool}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── 5. PROJECT DETAIL MODAL (POPUP PREVIEW) ── */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative z-10 w-full max-w-[680px] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200"
            >
              {/* Modal Window Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 bg-neutral-50/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span
                    className="ml-3 text-xs font-semibold text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeProject.title} — Case Study
                  </span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-8 h-8 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-600 hover:bg-neutral-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {activeProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 font-semibold mt-1">
                      <span>{activeProject.category}</span>
                      <span>•</span>
                      <span>{activeProject.tool}</span>
                      <span>•</span>
                      <span>{activeProject.year}</span>
                    </div>
                  </div>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-bold hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
