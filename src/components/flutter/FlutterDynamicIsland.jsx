import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlutterDynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex justify-center w-full z-40">
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
        className={`bg-black text-white cursor-pointer select-none overflow-hidden transition-shadow ${
          isExpanded
            ? "w-[290px] h-[78px] rounded-[30px] p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
            : "w-[124px] h-[33px] rounded-full px-3 py-1 hover:w-[134px]"
        }`}
        style={{
          boxShadow: "0 4px 18px rgba(0,0,0,0.45)",
        }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* Idle Compact Pill */
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full flex items-center justify-between"
            >
              {/* Camera cutout with reflection glint */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1624] border border-[#1b2b48]" />
                  <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 rounded-full bg-blue-300 opacity-60" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0c]" />
              </div>

              {/* Flutter Cyan Micro Pulse */}
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54C5F8] animate-pulse" />
                <span className="text-[9px] font-bold tracking-tight text-[#54C5F8]">FLT</span>
              </div>
            </motion.div>
          ) : (
            /* Expanded Dynamic Island (Flutter Active State) */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Flutter Icon Badge */}
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#02569B] to-[#0175C2] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                      <path d="M14.314 0L2.3 12 6.8 16.5 21.7 1.41zM14.3 14.828L9.8 19.328 14.3 23.828h7.4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[12px] font-bold text-white leading-tight">
                      Flutter Engine 3.x
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium leading-none mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Running 60 FPS • BouncingPhysics
                    </span>
                  </div>
                </div>

                {/* Animated Equalizer Wave */}
                <div className="flex items-end gap-0.5 h-4 pr-1">
                  <span className="w-0.5 h-3 bg-[#54C5F8] rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-0.5 h-4 bg-[#54C5F8] rounded-full animate-bounce [animation-delay:0.25s]" />
                  <span className="w-0.5 h-2 bg-[#54C5F8] rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="w-0.5 h-3.5 bg-[#54C5F8] rounded-full animate-bounce [animation-delay:0.15s]" />
                </div>
              </div>

              {/* Dynamic Island Footer with Hot Reload shortcut */}
              <div className="flex items-center justify-between text-[10px] text-white/60 pt-1 border-t border-white/10">
                <span className="truncate">iPhone 14 Pro Max • Scaffold</span>
                <span className="text-white/40 text-[9px]">Tap to minimize</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
