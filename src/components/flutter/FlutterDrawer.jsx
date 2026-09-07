import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User, Briefcase, Layers, MessageSquare, Code2 } from "lucide-react";

export default function FlutterDrawer({ isOpen, onClose, onSelectTab }) {
  const drawerLinks = [
    { id: "hero", label: "Hero & Introduction", icon: Home },
    { id: "about", label: "About Fazriel", icon: User },
    { id: "projects", label: "Featured Projects", icon: Briefcase },
    { id: "services", label: "Design Services", icon: Layers },
    { id: "contact", label: "Contact & Inquiries", icon: MessageSquare },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 300,
            }}
            className="relative z-10 w-[80%] max-w-[320px] h-full bg-[#FBFBFA] shadow-2xl flex flex-col justify-between p-5 border-r border-neutral-200"
          >
            <div>
              {/* Drawer Header (Flutter UserAccountsDrawerHeader style) */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#02569B] shadow-xs">
                    <img
                      src="/images/avatar-user.png"
                      alt="Fazriel Muliawan"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[14px] font-extrabold text-neutral-900 leading-tight">
                      Fazriel Muliawan
                    </h4>
                    <span className="text-[11px] font-semibold text-[#02569B] flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Senior Product Designer
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-neutral-200/70 flex items-center justify-center text-neutral-600 hover:bg-neutral-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase text-neutral-400 tracking-wider px-3 mb-2">
                  Navigation Routes
                </div>
                {drawerLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelectTab(item.id);
                        onClose();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-neutral-700 hover:text-[#02569B] hover:bg-[#02569B]/10 font-semibold text-[13px] transition-all text-left group"
                    >
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-[#02569B] transition-colors" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flutter Drawer Footer */}
            <div className="pt-4 border-t border-neutral-200 space-y-2">
              <div className="p-3 bg-neutral-100 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#02569B]" />
                  <span className="text-[11px] font-bold text-neutral-700">
                    Flutter 3.x Engine
                  </span>
                </div>
                <span className="text-[10px] bg-[#02569B] text-white px-2 py-0.5 rounded-full font-bold">
                  v3.35
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 text-center">
                Crafted with React, Tailwind & Flutter Aesthetics
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
