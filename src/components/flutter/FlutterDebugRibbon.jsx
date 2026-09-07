import { motion } from "framer-motion";

export default function FlutterDebugRibbon({ show = true }) {
  if (!show) return null;

  return (
    <div className="absolute top-0 right-0 z-50 pointer-events-none overflow-hidden w-28 h-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[18px] -right-[32px] w-[130px] rotate-45 bg-[#E53935] text-white text-[10px] font-black tracking-widest text-center py-0.5 shadow-md border-y border-red-700 select-none uppercase"
        style={{ fontFamily: "'Plus Jakarta Sans', monospace" }}
      >
        DEBUG
      </motion.div>
    </div>
  );
}
