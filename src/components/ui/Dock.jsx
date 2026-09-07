import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const framerSpring = {
  type: "spring",
  bounce: 0.2,
  duration: 0.6,
  delay: 0,
};

const dockApps = [
  { src: "/images/dock/dock-notes.png", label: "About", href: "#about" },
  { src: "/images/dock/dock-photos.png", label: "Projects", href: "#projects" },
  { src: "/images/dock/dock-finder.png", label: "Services", href: "#services" },
  { src: "/images/dock/dock-mail.png", label: "Contact", href: "#contact" },
];

function DockItem({ src, label, href, index }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (window.__lenis && typeof window.__lenis.scrollTo === "function") {
        window.__lenis.scrollTo(target, { duration: 1.1, offset: 0 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.25 + index * 0.05,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      whileHover={{ scale: 1.15, y: -6, transition: framerSpring }}
      whileTap={{ scale: 0.94 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex items-center justify-center flex-shrink-0 select-none cursor-pointer"
      style={{ width: 54, height: 54, transformOrigin: "bottom center" }}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-contain rounded-[16px] drop-shadow-sm select-none pointer-events-none"
        loading="eager"
        decoding="async"
      />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.13 }}
            className="absolute pointer-events-none whitespace-nowrap z-50"
            style={{
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.95)",
              color: "#111",
              fontSize: 12,
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Dock() {
  return (
    /* Fixed Centered macOS Dock */
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto">
      <div
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          backgroundColor: "rgba(247, 247, 247, 0.38)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "20px",
          boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.18), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4)",
          padding: "8px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {dockApps.map((app, i) => (
          <DockItem key={app.label} {...app} index={i} />
        ))}
      </div>
    </div>
  );
}
