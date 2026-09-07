import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function FlutterAppBar({ activeSection = "Home", onMenuClick }) {
  return (
    <div className="absolute top-3 inset-x-3 z-40 flex justify-center pointer-events-none select-none">
      <motion.header
        initial={{ y: -16, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        className="pointer-events-auto w-full max-w-[390px] h-12 px-2.5 bg-white/90 backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_25px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.03)] rounded-full flex items-center justify-between"
      >
        {/* Leading Widget: Hamburger Menu Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={onMenuClick}
          aria-label="Toggle Menu"
          className="w-8 h-8 rounded-full bg-black/[0.04] hover:bg-black/[0.08] active:bg-black/[0.12] flex items-center justify-center text-neutral-800 transition-colors flex-shrink-0"
        >
          <Menu className="w-4 h-4" strokeWidth={2.4} />
        </motion.button>

        {/* Center: Brand & Active Section */}
        <div className="flex items-center gap-2">
          <span
            className="text-[13px] font-[900] tracking-tight text-[#1A1A1A] uppercase flex items-center gap-1.5"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            CREATIE®
            <span className="w-1.5 h-1.5 rounded-full bg-[#02569B]" />
          </span>

          <span className="text-neutral-300 font-light text-xs">/</span>

          <div className="flex items-center gap-1.5 bg-neutral-100/90 border border-black/[0.04] px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-neutral-700 tracking-wider uppercase">
              {activeSection}
            </span>
          </div>
        </div>

        {/* Trailing Spacer to keep center title precisely centered */}
        <div className="w-8 h-8 flex-shrink-0" />
      </motion.header>
    </div>
  );
}
