import { motion } from "framer-motion";
import StickerChip, { CursorClickIcon, PenNibIcon } from "../components/ui/StickerChip";
import { ArrowUpRight } from "lucide-react";
import { openContactModal } from "../components/ui/ContactModal";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-40 bg-[#F6F5EF] overflow-hidden flex flex-col items-center justify-center text-center"
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

      {/* Floating Sticker Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating UI/UX Chip (Top Left) */}
        <div className="absolute top-[15%] left-[8%] sm:left-[12%] hidden md:block">
          <StickerChip
            text="UI/UX Design"
            color="#8BE63C"
            bgColor="#F4F8E8"
            icon={CursorClickIcon}
            rotation={-8}
          />
        </div>

        {/* Floating 3D Design Chip (Bottom Right) */}
        <div className="absolute bottom-[20%] right-[8%] sm:right-[14%] hidden md:block">
          <StickerChip
            text="3D Design"
            color="#D849DF"
            bgColor="#F4EAF5"
            icon={PenNibIcon}
            rotation={10}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Small Tag */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 font-semibold text-[14px] uppercase tracking-[0.2em] mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Have an idea?
        </motion.p>

        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1A1A1A] font-[900] text-[44px] sm:text-[68px] md:text-[84px] leading-[0.95] tracking-tight uppercase mb-8"
          style={{ fontFamily: "'Mona Sans', 'Plus Jakarta Sans', sans-serif" }}
        >
          Let’s build<br />
          something<br />
          memorable
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-600 text-[18px] sm:text-[22px] font-medium max-w-lg mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Let’s turn your vision into a sharp, unforgettable digital experience.
        </motion.p>

        {/* Big Let's Chat Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.3 }}
        >
          <button
            type="button"
            onClick={openContactModal}
            className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white font-extrabold text-[18px] sm:text-[20px] px-10 py-5 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:bg-black transition-all group cursor-pointer"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span>Let's chat</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
