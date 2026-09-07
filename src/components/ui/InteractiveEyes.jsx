import { useEffect, useState, useRef } from "react";

/**
 * Pixel-perfect Framer "Interactive Eyes" Component (Dy from Framer).
 * Exactly matches https://mobile-staple-583092.framer.app/ & Image 1:
 * - Two circular sclera eyes (#FFFFFF)
 * - Two black pupils that dynamically track the mouse cursor across the screen
 * - Smooth lerp movement with requestAnimationFrame (smoothness: 0.18)
 * - Natural periodic double-blinking effect every 3000ms
 * - Responsive viewBox and sizing
 */
export default function InteractiveEyes({
  className = "",
  scleraColor = "#ffffff",
  pupilColor = "#000000",
  outline = false,
  outlineColor = "#000000",
  outlineWidth = 2,
  eyeRadius = 120,
  pupilRadius = 46,
  gap = 260,
  margin = 4,
  smoothness = 0.18,
  background = "transparent",
  blinking = true,
  blinkInterval = 3000,
  mouseCoords = null,
  style = {},
}) {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ w: 70, h: 55 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [pupils, setPupils] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  // 1. Observe container size
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setSize({ w: rect.width, h: rect.height });
        }
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Mouse tracking listener
  useEffect(() => {
    if (mouseCoords) {
      mouseRef.current = { x: mouseCoords.x, y: mouseCoords.y };
      return;
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseCoords]);

  // 3. Periodic double-blink animation
  useEffect(() => {
    if (!blinking) return;
    let timer;
    let subTimer1, subTimer2, subTimer3;

    const doBlink = () => {
      setIsBlinking(true);
      subTimer1 = setTimeout(() => {
        setIsBlinking(false);
        subTimer2 = setTimeout(() => {
          setIsBlinking(true);
          subTimer3 = setTimeout(() => {
            setIsBlinking(false);
            timer = setTimeout(doBlink, blinkInterval);
          }, 110);
        }, 110);
      }, 110);
    };

    timer = setTimeout(doBlink, blinkInterval);
    return () => {
      clearTimeout(timer);
      clearTimeout(subTimer1);
      clearTimeout(subTimer2);
      clearTimeout(subTimer3);
    };
  }, [blinking, blinkInterval]);

  // 4. Geometry calculation
  const totalW = gap + 2 * eyeRadius;
  const totalH = 2 * eyeRadius;
  const scale = size.w > 0 && size.h > 0 ? Math.min(size.w / totalW, size.h / totalH, 1) : 0.2;
  const R = eyeRadius * scale;
  const rP = Math.min(pupilRadius * scale, R - margin - 1);
  const scaledGap = gap * scale;
  const cxL = size.w / 2 - scaledGap / 2;
  const cxR = size.w / 2 + scaledGap / 2;
  const cy = size.h / 2;
  const maxOffset = Math.max(0, R - rP - margin);

  // 5. Smooth requestAnimationFrame tracking loop
  useEffect(() => {
    let animId;
    const currentPupils = {
      left: { x: cxL, y: cy },
      right: { x: cxR, y: cy },
    };

    const loop = () => {
      if (containerRef.current && size.w > 0 && size.h > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const relX = mouseRef.current.x - rect.left;
        const relY = mouseRef.current.y - rect.top;

        const calcTarget = (centerX, centerY) => {
          const dx = relX - centerX;
          const dy = relY - centerY;
          const dist = Math.hypot(dx, dy) || 1;
          const clamped = Math.min(maxOffset, dist) / dist;
          return {
            x: centerX + dx * clamped,
            y: centerY + dy * clamped,
          };
        };

        const targetL = calcTarget(cxL, cy);
        const targetR = calcTarget(cxR, cy);

        const lerp = (a, b, t) => a + (b - a) * t;
        const factor = Math.max(0.05, Math.min(1, smoothness));

        currentPupils.left.x = lerp(currentPupils.left.x, targetL.x, factor);
        currentPupils.left.y = lerp(currentPupils.left.y, targetL.y, factor);
        currentPupils.right.x = lerp(currentPupils.right.x, targetR.x, factor);
        currentPupils.right.y = lerp(currentPupils.right.y, targetR.y, factor);

        setPupils({
          left: { x: currentPupils.left.x, y: currentPupils.left.y },
          right: { x: currentPupils.right.x, y: currentPupils.right.y },
        });
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [cxL, cxR, cy, maxOffset, size.w, size.h, smoothness]);

  return (
    <div
      ref={containerRef}
      className={`select-none pointer-events-none drop-shadow-sm ${className}`}
      style={{
        width: "70px",
        height: "55px",
        background,
        ...style,
      }}
    >
      {size.w > 0 && size.h > 0 && (
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="xMidYMid meet"
          className="overflow-visible"
        >
          {/* Sclera White Circles */}
          <circle
            cx={cxL}
            cy={cy}
            r={R}
            fill={scleraColor}
            stroke={outline ? outlineColor : "none"}
            strokeWidth={outline ? outlineWidth : 0}
          />
          <circle
            cx={cxR}
            cy={cy}
            r={R}
            fill={scleraColor}
            stroke={outline ? outlineColor : "none"}
            strokeWidth={outline ? outlineWidth : 0}
          />

          {/* Pupils with Dynamic Position & Blink */}
          {isBlinking ? (
            <>
              <ellipse
                cx={pupils.left.x || cxL}
                cy={pupils.left.y || cy}
                rx={rP}
                ry={rP * 0.18}
                fill={pupilColor}
              />
              <ellipse
                cx={pupils.right.x || cxR}
                cy={pupils.right.y || cy}
                rx={rP}
                ry={rP * 0.18}
                fill={pupilColor}
              />
            </>
          ) : (
            <>
              <circle
                cx={pupils.left.x || cxL}
                cy={pupils.left.y || cy}
                r={rP}
                fill={pupilColor}
              />
              <circle
                cx={pupils.right.x || cxR}
                cy={pupils.right.y || cy}
                r={rP}
                fill={pupilColor}
              />
            </>
          )}
        </svg>
      )}
    </div>
  );
}

