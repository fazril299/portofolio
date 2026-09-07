import { motion } from "framer-motion";
import { MessageSquarePlus } from "lucide-react";

export default function FlutterFAB({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      aria-label="Flutter Quick Contact"
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-black/10 select-none cursor-pointer whitespace-nowrap group"
    >
      <MessageSquarePlus className="w-4.5 h-4.5 text-black group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-[13px] font-bold tracking-tight text-black pr-0.5">Let's Talk</span>
    </motion.button>
  );
}
