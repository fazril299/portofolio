// Exact SVG Doodles & Ornaments Matching Framer Reference Screenshots

// 1. Pink Striped Circle (Top-left doodle)
export function PinkStripedCircle({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="18" fill="#F472B6" stroke="#1A1A1A" strokeWidth="2.5" />
      <g stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round">
        <line x1="8" y1="14" x2="18" y2="6" />
        <line x1="10" y1="24" x2="26" y2="8" />
        <line x1="14" y1="32" x2="32" y2="14" />
        <line x1="22" y1="34" x2="34" y2="22" />
      </g>
    </svg>
  );
}

// 2. Blue Wavy Scribble (Top-left doodle)
export function BlueWaveLine({ className = "w-24 h-6" }) {
  return (
    <svg viewBox="0 0 100 24" fill="none" className={className}>
      <path
        d="M 2 12 Q 10 2, 18 12 T 34 12 T 50 12 T 66 12 T 82 12 T 98 12"
        stroke="#2E7CF6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3. Blue Arc Scales / Waves (Top-right doodle)
export function BlueArcScales({ className = "w-16 h-12" }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className}>
      <path d="M 4 8 C 8 16, 16 16, 20 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 22 8 C 26 16, 34 16, 38 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 40 8 C 44 16, 52 16, 56 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 12 24 C 16 32, 24 32, 28 24" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 30 24 C 34 32, 42 32, 46 24" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 4. Yellow Spring Coil (Top-right doodle)
export function YellowSpringCoil({ className = "w-7 h-10" }) {
  return (
    <svg viewBox="0 0 30 44" fill="none" className={className}>
      <path
        d="M 8 4 C 22 2, 24 14, 12 16 C 24 18, 24 28, 12 30 C 24 32, 22 42, 8 40"
        stroke="#FACC15"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 5. Pen Nib Icon Vector (Fountain pen nib matching Image 1)
export function PenNibDoodle({ className = "w-7 h-9" }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className={className}>
      <path
        d="M12 2C12 2 19.5 12 19.5 18C19.5 22.1 16.1 25.5 12 25.5C7.9 25.5 4.5 22.1 4.5 18C4.5 12 12 2 12 2Z"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="2" x2="12" y2="15" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="#1A1A1A" />
    </svg>
  );
}

// 6. Neon Green Abstract Wireframe Cup / Bowl Shape (Far left)
export function AbstractGreenCup({ className = "w-28 h-28" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Top half bowl */}
      <path
        d="M 12 35 C 12 58, 88 58, 88 35 Z"
        stroke="#CCFF00"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom half bowl */}
      <path
        d="M 16 52 C 16 82, 84 82, 84 52 Z"
        stroke="#CCFF00"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 7. Blue Mouse Cursor Arrow (Left doodle)
export function BlueCursorIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M 4 3 L 19 13 L 12 14.5 L 8.5 21 Z"
        fill="#3B82F6"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 8. Floating Eyes (Looking right)
export function FloatingEyes({ className = "" }) {
  return (
    <div className={`flex items-center gap-1.5 select-none pointer-events-none ${className}`}>
      {/* Left eye */}
      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-end pr-0.5 border border-black shadow-sm">
        <div className="w-2.5 h-2.5 bg-black rounded-full" />
      </div>
      {/* Right eye (slightly larger) */}
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-end pr-0.5 border border-black shadow-sm -mt-1">
        <div className="w-3 h-3 bg-black rounded-full" />
      </div>
    </div>
  );
}

// 9. Lightbulb & Purple Cursor Sticker (Right side doodle)
export function LightbulbPencilDoodle({ className = "w-10 h-10" }) {
  return (
    <div className={`relative ${className} select-none pointer-events-none`}>
      {/* Purple cursor pointer */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#8B5CF6"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        className="absolute -top-1 -left-2 z-10"
      >
        <path d="M4 3L19 13L12 14.5L8.5 21L4 3Z" />
      </svg>
      {/* Lightbulb sticker */}
      <div className="w-7 h-7 rounded-full bg-[#FFA099]/85 border border-[#1A1A1A] flex items-center justify-center shadow-sm">
        <span className="text-[13px] leading-none">💡</span>
      </div>
    </div>
  );
}

// 10. Spikey Coral Red Star (Bottom doodle)
export function CoralRedStar({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" className={className}>
      <path
        d="M 15 2 L 18 10 L 26 8 L 22 15 L 28 20 L 20 22 L 18 30 L 13 24 L 6 27 L 8 19 L 2 15 L 9 11 Z"
        fill="#F87171"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// 11. Yellow Scribble / Wavy line
export function YellowSquiggle({ className = "w-20 h-5" }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={className}>
      <path d="M 2 10 Q 12 2, 22 10 T 42 10 T 62 10 T 78 10" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 12. Dark Circular Pencil/Edit Button
export function PencilEditButton({ className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Edit or view options"
      className={`w-9 h-9 rounded-full bg-[#262626] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    </button>
  );
}

// 13. Dark Grey Cloud Sticker (Left side doodle)
export function DarkGreyCloud({ className = "w-9 h-6" }) {
  return (
    <svg viewBox="0 0 44 28" fill="#4B5563" className={className}>
      <path
        d="M 12 24 C 7 24 3 20 3 15 C 3 10.5 6.5 7 11 6.5 C 13.5 2.5 18.5 0 24 0 C 30.5 0 36 3.8 38 9.5 C 41.5 10.5 44 13.8 44 17.5 C 44 21.5 40.5 24 36 24 Z"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

