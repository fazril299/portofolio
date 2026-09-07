import { motion } from "framer-motion";
import { Home, User, Briefcase, Layers, MessageSquare } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "services", label: "Services", icon: Layers },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

export default function FlutterNavigationBar({ activeTab, onSelectTab }) {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-xl border-t border-black/[0.07] px-2 py-1.5 flex items-center justify-around select-none shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className="relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all flex-1"
          >
            {/* Flutter Active Indicator Pill */}
            {isActive && (
              <motion.div
                layoutId="flutterNavIndicator"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="absolute inset-0 bg-[#02569B]/10 rounded-2xl"
              />
            )}

            <motion.div
              animate={{
                scale: isActive ? 1.12 : 1,
                y: isActive ? -1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <Icon
                className={`w-[21px] h-[21px] transition-colors ${
                  isActive ? "text-[#02569B]" : "text-neutral-400"
                }`}
                strokeWidth={isActive ? 2.4 : 1.9}
              />
            </motion.div>

            <span
              className={`relative z-10 text-[10px] mt-0.5 tracking-tight font-medium transition-colors ${
                isActive ? "text-[#02569B] font-bold" : "text-neutral-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
