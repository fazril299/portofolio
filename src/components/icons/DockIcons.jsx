// Ultra High Precision 1:1 Apple macOS Big Sur / Sonoma Dock Icons
// Rendered as clean transparent SVG without any clipping or rectangular artifacts

export function NotesIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Soft paper gradient */}
        <linearGradient id="notesBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5EFE6" />
        </linearGradient>
        {/* Yellow header gradient matching macOS Notes */}
        <linearGradient id="notesYellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDE40" />
          <stop offset="100%" stopColor="#F6B800" />
        </linearGradient>
        <clipPath id="notesClip">
          <rect width="100" height="100" rx="22" />
        </clipPath>
      </defs>

      <g clipPath="url(#notesClip)">
        {/* Base Note Paper */}
        <rect width="100" height="100" fill="url(#notesBgGrad)" />

        {/* Yellow Header Banner */}
        <rect width="100" height="26" fill="url(#notesYellowGrad)" />

        {/* Perforation dotted line */}
        <line
          x1="0"
          y1="29.5"
          x2="100"
          y2="29.5"
          stroke="#C89D00"
          strokeWidth="1.2"
          strokeDasharray="2.5 2"
          opacity="0.5"
        />

        {/* 2 Subtle Ruled Lines */}
        <line x1="0" y1="48" x2="100" y2="48" stroke="#DCD6CC" strokeWidth="1.4" />
        <line x1="0" y1="67" x2="100" y2="67" stroke="#DCD6CC" strokeWidth="1.4" />

        {/* Inner Border */}
        <rect width="100" height="100" rx="22" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}

export function PhotosIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="photosClip">
          <rect width="100" height="100" rx="22" />
        </clipPath>
        <filter id="photosDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.12" />
        </filter>
      </defs>

      <g clipPath="url(#photosClip)">
        {/* Pure White Background */}
        <rect width="100" height="100" fill="#FFFFFF" />

        {/* 8 macOS Photos Petals with authentic color blend */}
        <g transform="translate(50, 50)" filter="url(#photosDrop)">
          {/* 1. Red */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#FF3B30" opacity="0.9" />
          {/* 2. Orange */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#FF9500" opacity="0.9" transform="rotate(45)" />
          {/* 3. Yellow */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#FFCC00" opacity="0.9" transform="rotate(90)" />
          {/* 4. Green */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#34C759" opacity="0.9" transform="rotate(135)" />
          {/* 5. Light Blue / Cyan */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#5AC8FA" opacity="0.9" transform="rotate(180)" />
          {/* 6. Blue */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#007AFF" opacity="0.9" transform="rotate(225)" />
          {/* 7. Purple */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#5856D6" opacity="0.9" transform="rotate(270)" />
          {/* 8. Pink */}
          <ellipse cx="0" cy="-21" rx="8.5" ry="16.5" fill="#AF52DE" opacity="0.9" transform="rotate(315)" />

          {/* Center White Pin Hole */}
          <circle cx="0" cy="0" r="3.2" fill="#FFFFFF" />
        </g>

        {/* Inner Border */}
        <rect width="100" height="100" rx="22" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}

export function FinderIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="finderBlueBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#25A0FA" />
          <stop offset="100%" stopColor="#0073E6" />
        </linearGradient>
        <linearGradient id="finderWhiteFace" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5EDF6" />
        </linearGradient>
        <clipPath id="finderClip">
          <rect width="100" height="100" rx="22" />
        </clipPath>
      </defs>

      <g clipPath="url(#finderClip)">
        {/* Left Blue Background */}
        <rect width="100" height="100" fill="url(#finderBlueBg)" />

        {/* Right Half Profile Face */}
        <path
          d="M50 0H100V100H50V63C53.5 63 56.5 59.5 56.5 56V43C56.5 39.5 50 36.5 50 33V0Z"
          fill="url(#finderWhiteFace)"
        />

        {/* Nose divider line */}
        <path
          d="M50 0V33C50 36.5 56.5 39.5 56.5 43V56C56.5 59.5 50 63 50 67V100"
          stroke="#111827"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left Eye */}
        <ellipse cx="27" cy="44" rx="3.5" ry="5.5" fill="#111827" />

        {/* Right Eye */}
        <ellipse cx="73" cy="44" rx="3.5" ry="5.5" fill="#111827" />

        {/* Finder Smile Curve */}
        <path
          d="M26 64C33 76 67 76 74 64"
          stroke="#111827"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Border */}
        <rect width="100" height="100" rx="22" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}

export function MailIcon({ className = "w-full h-full" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mailBlueBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2BA5FF" />
          <stop offset="100%" stopColor="#0076F5" />
        </linearGradient>
        <linearGradient id="envFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E5EDF6" />
        </linearGradient>
        <filter id="env3DShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodOpacity="0.25" />
        </filter>
        <clipPath id="mailClip">
          <rect width="100" height="100" rx="22" />
        </clipPath>
      </defs>

      <g clipPath="url(#mailClip)">
        {/* Blue Background */}
        <rect width="100" height="100" fill="url(#mailBlueBgGrad)" />

        {/* 3D Envelope */}
        <g transform="translate(14, 25)" filter="url(#env3DShadow)">
          {/* Envelope Main Body */}
          <rect width="72" height="49" rx="6.5" fill="url(#envFaceGrad)" stroke="#B8CCE4" strokeWidth="0.8" />

          {/* Top Flap Triangular Fold Lines */}
          <path
            d="M2 3L36 31L70 3"
            stroke="#95B2D4"
            strokeWidth="2.2"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Bottom Corner Diagonal Lines */}
          <path
            d="M2 46L27 24"
            stroke="#A3BDDB"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M70 46L45 24"
            stroke="#A3BDDB"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* Inner Border */}
        <rect width="100" height="100" rx="22" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" fill="none" />
      </g>
    </svg>
  );
}
