// Exact Authentic Framer Red Push Pin SVG
export default function RedPin({ className = "w-6 h-6", rotation = 0 }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
      <svg viewBox="0 0 18 22" fill="none" className="w-full h-full drop-shadow-md">
        <g clipPath="url(#rpinClip)">
          {/* Shadow underneath */}
          <path d="M3.707 17.918L5.542 18.88L3.99 20.723L2.915 20.205L3.707 17.918Z" fill="black" fillOpacity="0.39" />
          {/* Main Pin Base */}
          <circle cx="8.129" cy="12.194" r="7.605" transform="rotate(-2.593 8.129 12.194)" fill="#DC2626" />
          {/* Pin Shadow Gradient */}
          <path d="M5.578 6.269L14.207 11.027L10.627 13.831C8.433 13.461 7.437 12.913 5.997 11.399L5.578 6.269Z" fill="#B91C1C" />
          {/* Pin Cap Highlight */}
          <circle cx="11.295" cy="6.23" r="5.965" transform="rotate(-2.593 11.295 6.23)" fill="#EF4444" />
        </g>
        <defs>
          <clipPath id="rpinClip">
            <rect width="17" height="20.397" fill="white" transform="translate(0 0.769) rotate(-2.593)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
