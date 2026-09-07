import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import InteractiveEyes from "./InteractiveEyes";

/**
 * Global Floating Eyes Cursor Follower.
 * Matches Framer's custom cursor effect:
 * - Smoothly follows the mouse cursor with spring physics
 * - Floats slightly offset to the pointer
 * - The pupils inside dynamically track mouse position
 * - Automatically hides when mouse leaves window
 */
export default function EyesCursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.target && e.target.closest && e.target.closest("#services")) {
        setIsVisible(false);
        return;
      }
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY - 14);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease-out",
      }}
    >
      <InteractiveEyes style={{ width: "46px", height: "32px" }} />
    </motion.div>
  );
}

