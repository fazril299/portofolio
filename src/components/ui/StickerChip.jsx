import { motion } from "framer-motion";

// Folded Ear (exact Framer SVG, attached to the top-right of the pill)
export function FoldedCorner({ color = "#93BA06" }) {
  return (
    <svg
      viewBox="0 0 18.109 18.301"
      className="w-[18px] h-[19px] overflow-visible select-none pointer-events-none"
    >
      <g>
        {/* Soft shadow underneath */}
        <path
          d="M 2.03 2.5 L 18.109 13.94 L 3.804 14.25 C 1.323 14.304 -0.515 11.96 0.13 9.564 Z"
          fill="rgb(0,0,0)"
          opacity="0.3"
        />
        {/* Colored fold */}
        <path
          d="M 2 2.501 L 18.079 13.941 L 7.104 18.06 C 4.68 18.97 2.092 17.188 2.075 14.6 L 2 2.5 Z"
          fill={color}
        />
        {/* Dark back triangle */}
        <path d="M 18.08 13.76 L 2 2.32 L 15.76 0 Z" fill="rgb(33, 33, 33)" />
      </g>
    </svg>
  );
}

// Framer Paperclip with shadow and colored stroke (exact Framer SVG path #2641542506)
export function FramerPaperclip({ color = "#93BA06" }) {
  return (
    <div className="relative w-[24px] h-[25px] select-none pointer-events-none">
      {/* Soft shadow */}
      <svg
        viewBox="0 0 24 24"
        className="absolute inset-0 w-full h-full translate-y-[1px]"
      >
        <g transform="translate(3.776, 3)">
          <path
            d="M 11.224 4.5 L 3.414 12.44 C 2.843 13.028 2.85 13.966 3.43 14.546 C 4.009 15.125 4.947 15.132 5.535 14.561 L 14.846 5.122 C 16.017 3.95 16.017 2.05 14.846 0.879 C 13.674 -0.293 11.774 -0.293 10.603 0.879 L 1.292 10.318 C -0.441 12.08 -0.429 14.909 1.318 16.656 C 3.065 18.404 5.895 18.415 7.656 16.682 L 15.349 9"
            fill="none"
            stroke="rgba(0, 0, 0, 0.28)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      {/* Colored clip */}
      <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full">
        <g transform="translate(3.776, 3)">
          <path
            d="M 11.224 4.5 L 3.414 12.44 C 2.843 13.028 2.85 13.966 3.43 14.546 C 4.009 15.125 4.947 15.132 5.535 14.561 L 14.846 5.122 C 16.017 3.95 16.017 2.05 14.846 0.879 C 13.674 -0.293 11.774 -0.293 10.603 0.879 L 1.292 10.318 C -0.441 12.08 -0.429 14.909 1.318 16.656 C 3.065 18.404 5.895 18.415 7.656 16.682 L 15.349 9"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

// Click Cursor with Sparkles (exact Framer SVG symbol #636125695)
export function CursorClickIcon({ color = "#ffffff", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Sparkles */}
      <line x1="9" y1="1.5" x2="9" y2="2.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1.5" y1="9" x2="2.25" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="1.5" x2="12.75" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1.5" y1="12" x2="3" y2="12.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow */}
      <g transform="translate(3.758, 3.755)">
        <path
          d="M 11.462 9.215 C 11.286 9.04 11.209 8.789 11.255 8.545 C 11.301 8.301 11.465 8.095 11.693 7.996 L 16.044 6.326 C 16.324 6.199 16.497 5.914 16.483 5.607 C 16.468 5.3 16.268 5.033 15.977 4.934 L 0.971 0.033 C 0.705 -0.049 0.416 0.023 0.22 0.22 C 0.023 0.416 -0.049 0.705 0.033 0.971 L 4.931 15.98 C 5.031 16.271 5.297 16.471 5.604 16.486 C 5.911 16.5 6.196 16.326 6.323 16.047 L 7.994 11.696 C 8.093 11.468 8.298 11.304 8.542 11.258 C 8.786 11.212 9.037 11.289 9.212 11.465 L 14.023 16.275 C 14.315 16.568 14.79 16.568 15.083 16.275 L 16.273 15.089 C 16.565 14.796 16.565 14.321 16.273 14.028 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// 3D Isometric Box Icon (exact Framer SVG symbol #1537972964)
export function Box3DIcon({ color = "#ffffff", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M 9.36 0.092 L 17.61 4.609 C 17.85 4.74 17.999 4.992 18 5.265 L 18 14.231 C 17.999 14.505 17.85 14.756 17.61 14.888 L 9.36 19.405 C 9.136 19.527 8.864 19.527 8.64 19.405 L 0.39 14.888 C 0.15 14.756 0.001 14.505 0 14.231 L 0 5.265 C 0.001 4.992 0.15 4.74 0.39 4.609 L 8.64 0.092 C 8.864 -0.031 9.136 -0.031 9.36 0.092 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3, 2.252)"
      />
      <line x1="12" y1="12" x2="12" y2="21.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 0 0 L 8.893 4.869 L 17.786 0" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(3.107, 7.131)" />
    </svg>
  );
}

// Pen Nib Icon (exact Framer SVG symbol #2658193374 with clean outline strokes matching image 1)
export function PenNibIcon({ color = "#ffffff", size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Pen nib outline body */}
      <path
        d="M 0 15.75 L 13.073 13.571 C 13.337 13.527 13.558 13.346 13.652 13.095 L 15.75 7.5 L 8.25 0 L 2.655 2.098 C 2.404 2.192 2.223 2.413 2.179 2.677 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.75, 4.5)"
      />
      {/* Breather hole */}
      <path
        d="M 0 1.875 C 0 0.839 0.839 0 1.875 0 C 2.911 0 3.75 0.839 3.75 1.875 C 3.75 2.911 2.911 3.75 1.875 3.75 C 0.839 3.75 0 2.911 0 1.875 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(9.75, 10.5)"
      />
      {/* Slit line from tip to breather hole */}
      <path
        d="M 0 6.549 L 6.548 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.751, 13.701)"
      />
      {/* Collar curve at back */}
      <path
        d="M 7.5 10.5 L 10.281 7.719 C 10.573 7.427 10.573 6.952 10.281 6.659 L 3.844 0.219 C 3.551 -0.073 3.076 -0.073 2.783 0.219 L 0 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(12, 1.5)"
      />
    </svg>
  );
}

export default function StickerChip({
  text = "UI/UX Design",
  color = "#93BA06",
  bgColor = "#F4F8E8",
  icon: Icon = CursorClickIcon,
  rotation = 0,
  scale = 1,
  className = "",
  style = {},
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, rotate: rotation - 8 }}
      animate={{ opacity: 1, scale: scale, rotate: rotation }}
      transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: scale * 1.05,
        rotate: rotation + (rotation < 0 ? -2 : 2),
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      whileTap={{ scale: scale * 0.96 }}
      className={`relative inline-block select-none cursor-pointer ${className}`}
      style={{
        width: "161px",
        height: "77px",
        ...style,
      }}
    >
      {/* ── 1. TITLE-CHIP PILL (SOLID LIGHT BG, NO WHITE BORDER, EXACT 7.44PX RADIUS) ── */}
      <div
        className="absolute bottom-0 left-0 w-[162px] h-[49px] rounded-[7.44px] flex items-center justify-center pl-7 pr-3 overflow-visible"
        style={{
          backgroundColor: bgColor,
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.04)",
        }}
      >
        <span
          className="text-[#212121] font-semibold text-[17.5px] whitespace-nowrap tracking-tight leading-none text-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {text}
        </span>

        {/* ── FOLDED CORNER (SITS FLUSH AT TOP-RIGHT OF PILL) ── */}
        <div className="absolute -top-[1px] -right-[1px] z-10">
          <FoldedCorner color={color} />
        </div>
      </div>

      {/* ── 2. CIRCLE BADGE (OVERLAPPING PILL TOP-LEFT WITH CRISP WHITE 1.7PX BORDER) ── */}
      <div
        className="absolute top-[2px] left-[6px] w-[41px] h-[41px] rounded-full flex items-center justify-center border-[1.7px] border-white z-20"
        style={{
          backgroundColor: color,
          boxShadow: "-2px 3px 2px 0px rgba(0, 0, 0, 0.24)",
        }}
      >
        <Icon color="#ffffff" size={20} />
      </div>

      {/* ── 3. PAPERCLIP (CLIPPING OVER TOP EDGE BETWEEN BADGE AND TEXT) ── */}
      <div className="absolute top-[16px] left-[42px] z-30 pointer-events-none rotate-[14deg]">
        <FramerPaperclip color={color} />
      </div>
    </motion.div>
  );
}
