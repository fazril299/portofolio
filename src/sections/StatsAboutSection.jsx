import { motion } from "framer-motion";
import { statistics } from "../data/portfolioData";
import RedPin from "../components/ui/RedPin";
import { BlueCursorIcon, AbstractGreenLoop } from "../components/ui/DecorativeSVGs";
import { FramerPaperclip } from "../components/ui/StickerChip";

export default function StatsAboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 bg-[#F6F5EF] overflow-hidden"
    >
      {/* Subtle Grid Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#2E7CF6 1px, transparent 1px),
            linear-gradient(90deg, #2E7CF6 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating "About" Pill Badge (Top-Left) */}
        <motion.div
          initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-8 left-[12%] sm:left-[18%] z-20 pointer-events-auto"
        >
          <div className="relative w-[120px] h-[48px] bg-[#E8F3FF] rounded-xl shadow-sm border border-white/60 flex items-center justify-center pl-[24px] pr-[12px]">
            {/* Blue Circle Badge */}
            <div className="absolute -top-2.5 -left-2.5 w-8 h-8 bg-[#2E7CF6] rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            {/* Paperclip */}
            <div className="absolute top-[6px] left-[26px] w-[18px] h-[18px] rotate-[10deg]">
              <FramerPaperclip color="#2E7CF6" />
            </div>
            <span
              className="text-[#1A1A1A] font-bold text-[15px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              About
            </span>
          </div>
        </motion.div>

        {/* Blue Cursor Icon (Left area) */}
        <div className="absolute top-[35%] left-[8%] hidden lg:block">
          <BlueCursorIcon className="w-9 h-9 -rotate-12 drop-shadow-md" />
        </div>

        {/* Abstract Green Wireframe Loop (Far left) */}
        <div className="absolute bottom-[10%] left-[2%] w-28 h-28 hidden xl:block opacity-75">
          <AbstractGreenLoop className="w-full h-full rotate-12" />
        </div>

        {/* Floating Eyes (Right middle) */}
        <div className="absolute top-[28%] right-[10%] hidden md:flex gap-2 rotate-12">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
            <div className="w-3 h-3 bg-[#1A1A1A] rounded-full translate-x-1" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md -mt-2 border border-gray-100">
            <div className="w-4 h-4 bg-[#1A1A1A] rounded-full -translate-x-1 -translate-y-1" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-semibold text-[14px] uppercase tracking-[0.15em] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            By The Numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-[#1A1A1A] font-extrabold text-[32px] sm:text-[44px] tracking-tight leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Proven results through thoughtful design execution
          </motion.h2>
        </div>

        {/* 4 Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 35, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative group bg-white rounded-3xl p-8 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between min-h-[260px] overflow-hidden"
            >
              {/* Corner Fold Visual Accent on top right */}
              <div className="absolute top-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 100 100" fill={stat.foldColor} className="absolute top-0 right-0 w-full h-full rounded-tr-3xl">
                  <path d="M 0 0 L 100 100 L 0 100 Z" />
                </svg>
                <svg viewBox="0 0 100 100" fill={stat.badgeColor} className="absolute top-0 right-0 w-full h-full">
                  <path d="M 100 0 L 0 100 L 100 100 Z" />
                </svg>
              </div>

              {/* Stat Number */}
              <div>
                <span
                  className="text-[#1A1A1A] font-[900] text-5xl sm:text-6xl tracking-tighter block mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {stat.number}
                </span>
                <h3
                  className="text-[#1A1A1A] font-bold text-[18px] sm:text-[19px] leading-tight mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {stat.label}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-gray-500 text-[13.5px] leading-relaxed font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.description}
              </p>

              {/* Red Pin on 8+ card */}
              {stat.id === "years-exp" && (
                <div className="absolute -top-3.5 -left-2 z-20 pointer-events-none">
                  <RedPin className="w-7 h-7" rotation={-12} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
