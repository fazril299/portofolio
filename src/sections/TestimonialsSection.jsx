import { motion } from "framer-motion";
import {
  PinkStripedCircle,
  BlueWaveLine,
  YellowSquiggle,
  BlueCursorIcon,
  PenNibDoodle,
  LightbulbPencilDoodle,
  CoralRedStar,
} from "../components/ui/DecorativeSVGs";
import InteractiveEyes from "../components/ui/InteractiveEyes";

// Exact SVGs extracted directly from Framer original source
function RedPushpinTack({ className = "" }) {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-sm ${className}`}
    >
      <g clipPath="url(#clip0_pin_reviews)">
        <path
          d="M3.70703 17.9176L5.5419 18.8795L3.98965 20.7232L2.91495 20.2053L3.70703 17.9176Z"
          fill="black"
          fillOpacity="0.39"
        />
        <circle
          cx="8.12909"
          cy="12.1944"
          r="7.60526"
          transform="rotate(-2.59339 8.12909 12.1944)"
          fill="#DC2626"
        />
        <path
          d="M5.57812 6.26921L14.2066 11.0271L10.6267 13.831C8.43331 13.4613 7.43689 12.9125 5.99732 11.3989L5.57812 6.26921Z"
          fill="#B91C1C"
        />
        <circle
          cx="11.2951"
          cy="6.2296"
          r="5.96491"
          transform="rotate(-2.59339 11.2951 6.2296)"
          fill="#EF4444"
        />
      </g>
      <defs>
        <clipPath id="clip0_pin_reviews">
          <rect
            width="17"
            height="20.3974"
            fill="white"
            transform="translate(0 0.769212) rotate(-2.59339)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function OrangeCornerPeel({ className = "" }) {
  return (
    <svg
      width="64"
      height="85"
      viewBox="0 0 71 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M69.6788 4.3395L64.3066 92.6167L32.1668 90.6608L69.6788 4.3395Z"
        fill="#00303C"
      />
      <path
        opacity="0.2"
        d="M32.5677 91.1173L14.5981 46.3344C13.334 43.1842 14.5605 39.5829 17.4847 37.859L68.6115 7.71747L32.5677 91.1173Z"
        fill="black"
      />
      <path
        d="M33.0232 90.7135C17.7833 84.6554 10.6158 78.9291 3.9554 65.9803C2.54598 63.2402 3.32853 59.9112 5.69043 57.9322L70.1327 3.93766L33.0232 90.7135Z"
        fill="#FB7F03"
      />
    </svg>
  );
}

function FiveYellowStars({ className = "h-4 w-auto" }) {
  return (
    <svg
      viewBox="0 0 87 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M 16.206 8.487 L 13.055 10.948 L 13.785 14.895 C 13.825 15.109 13.802 15.33 13.716 15.531 C 13.631 15.732 13.488 15.903 13.306 16.022 C 13.123 16.142 12.909 16.204 12.691 16.202 C 12.473 16.201 12.261 16.134 12.08 16.011 L 8.79 13.757 L 5.293 15.679 C 5.101 15.783 4.883 15.828 4.667 15.808 C 4.45 15.788 4.244 15.705 4.074 15.568 C 3.905 15.432 3.779 15.248 3.714 15.04 C 3.649 14.833 3.646 14.61 3.707 14.401 L 4.823 10.545 L 1.927 7.788 C 1.77 7.638 1.66 7.445 1.612 7.233 C 1.563 7.021 1.579 6.799 1.656 6.595 C 1.733 6.392 1.868 6.216 2.044 6.088 C 2.221 5.961 2.431 5.889 2.648 5.881 L 6.628 5.755 L 8.338 2.129 C 8.431 1.932 8.58 1.766 8.767 1.653 C 8.954 1.541 9.17 1.486 9.388 1.497 C 9.606 1.508 9.816 1.583 9.991 1.713 C 10.167 1.844 10.299 2.023 10.372 2.229 L 11.719 6.004 L 15.667 6.518 C 15.883 6.547 16.086 6.639 16.25 6.783 C 16.414 6.926 16.532 7.115 16.589 7.325 C 16.646 7.536 16.64 7.758 16.571 7.965 C 16.502 8.172 16.374 8.354 16.202 8.488 Z"
        fill="#FCBB40"
      />
      <g transform="translate(17.199 -0.158)">
        <path
          d="M 16.202 8.487 L 13.051 10.948 L 13.781 14.895 C 13.822 15.109 13.798 15.33 13.712 15.531 C 13.627 15.732 13.484 15.903 13.302 16.022 C 13.119 16.142 12.905 16.204 12.687 16.202 C 12.469 16.201 12.257 16.134 12.076 16.011 L 8.786 13.757 L 5.289 15.679 C 5.097 15.783 4.88 15.828 4.663 15.808 C 4.446 15.788 4.24 15.705 4.07 15.568 C 3.901 15.432 3.776 15.248 3.71 15.04 C 3.645 14.833 3.643 14.61 3.703 14.401 L 4.819 10.545 L 1.923 7.788 C 1.766 7.638 1.656 7.445 1.608 7.233 C 1.56 7.021 1.575 6.799 1.652 6.595 C 1.729 6.392 1.864 6.216 2.04 6.088 C 2.217 5.961 2.427 5.889 2.644 5.881 L 6.624 5.755 L 8.334 2.129 C 8.427 1.932 8.576 1.766 8.763 1.653 C 8.95 1.541 9.167 1.486 9.385 1.497 C 9.603 1.508 9.813 1.583 9.988 1.713 C 10.163 1.844 10.295 2.023 10.368 2.229 L 11.715 6.004 L 15.664 6.518 C 15.88 6.547 16.082 6.639 16.246 6.783 C 16.41 6.926 16.528 7.115 16.585 7.325 C 16.642 7.536 16.636 7.758 16.567 7.965 C 16.498 8.172 16.37 8.354 16.198 8.488 Z"
          fill="#FCBB40"
        />
      </g>
      <g transform="translate(34.398 -0.314)">
        <path
          d="M 16.206 8.487 L 13.055 10.948 L 13.785 14.895 C 13.826 15.109 13.802 15.33 13.716 15.531 C 13.631 15.732 13.488 15.903 13.306 16.022 C 13.123 16.142 12.909 16.204 12.691 16.202 C 12.473 16.201 12.261 16.134 12.08 16.011 L 8.79 13.757 L 5.293 15.679 C 5.101 15.783 4.884 15.828 4.667 15.808 C 4.45 15.788 4.244 15.705 4.074 15.568 C 3.905 15.432 3.78 15.248 3.714 15.04 C 3.649 14.833 3.647 14.61 3.707 14.401 L 4.823 10.545 L 1.927 7.788 C 1.77 7.638 1.66 7.445 1.612 7.233 C 1.564 7.021 1.579 6.799 1.656 6.595 C 1.733 6.392 1.868 6.216 2.044 6.088 C 2.221 5.961 2.431 5.889 2.648 5.881 L 6.628 5.755 L 8.338 2.129 C 8.431 1.932 8.58 1.766 8.767 1.653 C 8.954 1.541 9.171 1.486 9.389 1.497 C 9.607 1.508 9.816 1.583 9.992 1.713 C 10.167 1.844 10.299 2.023 10.372 2.229 L 11.719 6.004 L 15.667 6.518 C 15.883 6.547 16.086 6.639 16.25 6.783 C 16.414 6.926 16.532 7.115 16.589 7.325 C 16.646 7.536 16.64 7.758 16.571 7.965 C 16.502 8.172 16.374 8.354 16.202 8.488 Z"
          fill="#FCBB40"
        />
      </g>
      <path
        d="M 67.804 8.015 L 64.653 10.476 L 65.383 14.422 C 65.423 14.636 65.399 14.858 65.314 15.058 C 65.228 15.259 65.085 15.43 64.903 15.549 C 64.721 15.669 64.507 15.732 64.289 15.73 C 64.071 15.728 63.858 15.661 63.678 15.539 L 60.387 13.284 L 56.89 15.206 C 56.699 15.31 56.481 15.355 56.264 15.335 C 56.047 15.316 55.841 15.232 55.672 15.096 C 55.502 14.959 55.377 14.775 55.312 14.568 C 55.246 14.36 55.244 14.137 55.305 13.928 L 56.42 10.072 L 53.525 7.316 C 53.367 7.165 53.258 6.972 53.209 6.76 C 53.161 6.548 53.176 6.326 53.253 6.123 C 53.33 5.919 53.465 5.743 53.642 5.616 C 53.819 5.489 54.029 5.416 54.246 5.408 L 58.225 5.282 L 59.936 1.657 C 60.029 1.459 60.178 1.293 60.365 1.181 C 60.552 1.068 60.768 1.014 60.986 1.024 C 61.204 1.035 61.414 1.11 61.589 1.241 C 61.764 1.371 61.897 1.55 61.97 1.756 L 63.317 5.532 L 67.265 6.045 C 67.481 6.074 67.684 6.166 67.848 6.31 C 68.011 6.454 68.129 6.643 68.186 6.853 C 68.243 7.063 68.237 7.286 68.168 7.492 C 68.1 7.699 67.971 7.881 67.8 8.015 Z"
        fill="#FCBB40"
      />
      <path
        d="M 85.003 8.857 L 81.852 11.317 L 82.582 15.264 C 82.622 15.478 82.598 15.7 82.513 15.9 C 82.428 16.101 82.285 16.272 82.102 16.391 C 81.92 16.511 81.706 16.573 81.488 16.572 C 81.27 16.57 81.058 16.503 80.877 16.381 L 77.587 14.126 L 74.09 16.048 C 73.898 16.152 73.68 16.197 73.463 16.177 C 73.247 16.157 73.041 16.074 72.871 15.937 C 72.702 15.801 72.576 15.617 72.511 15.409 C 72.446 15.202 72.443 14.979 72.504 14.77 L 73.62 10.914 L 70.724 8.157 C 70.567 8.007 70.457 7.814 70.409 7.602 C 70.36 7.39 70.376 7.168 70.453 6.965 C 70.529 6.761 70.665 6.585 70.841 6.458 C 71.018 6.33 71.228 6.258 71.445 6.25 L 75.425 6.124 L 77.135 2.498 C 77.228 2.301 77.377 2.135 77.564 2.023 C 77.751 1.91 77.967 1.856 78.185 1.866 C 78.403 1.877 78.613 1.952 78.788 2.082 C 78.963 2.213 79.096 2.392 79.169 2.598 L 80.516 6.373 L 84.464 6.887 C 84.68 6.916 84.883 7.008 85.047 7.152 C 85.211 7.296 85.329 7.484 85.386 7.695 C 85.443 7.905 85.436 8.127 85.368 8.334 C 85.299 8.541 85.171 8.723 84.999 8.857 Z"
        fill="#FCBB40"
      />
    </svg>
  );
}

// Framer Original Doodles
function YellowSpringDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 126 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4422 24.6352C22.6878 4.97065 54.2977 -1.06996 65.4178 14.6776C67.2942 17.3232 67.4322 17.4493 69.3751 17.3814C80.673 17.0528 93.2811 28.2815 95.419 40.5949C95.8203 42.8046 95.9584 42.9307 98.7286 44.0649C123.78 54.2463 114.825 88.1449 85.9923 92.3962C77.4047 93.6491 77.0408 85.4979 86.7199 83.5157C109.892 78.8068 116.313 59.782 97.2332 52.3992L95.8903 51.8899L94.408 56.6081C90.5612 68.8469 77.0671 74.6965 72.5296 66.0304C67.2249 55.926 76.6672 42.3971 89.0504 42.4781C91.1972 42.4994 91.1972 42.4994 89.351 39.0666C85.425 31.5605 69.5177 21.7219 69.9722 27.065C71.5449 45.6135 51.0391 60.1115 46.2216 43.856C43.9687 36.2295 48.5221 27.0033 57.3926 21.2945C61.0511 18.9333 60.9494 18.6657 55.9667 16.2085C42.3797 9.49842 20.3098 17.8921 14.7715 31.8836C12.3534 38.0554 10.3764 31.127 13.4422 24.6352ZM50.4321 40.6603C52.1758 46.0561 64.9264 38.2276 65.5937 31.3679C66.0986 26.2612 65.4571 25.8884 60.3833 28.4698C54.068 31.7017 49.3834 37.4323 50.4321 40.6603ZM75.8596 59.8377C77.6217 63.6012 86.2277 60.27 89.6772 54.4973C91.7589 50.9864 91.6447 50.7659 88.1965 51.1852C81.396 52.092 74.445 56.9351 75.8596 59.8377Z"
        fill="#FFDE05"
      />
    </svg>
  );
}

function GreenCupDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 167 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108.248 8.18548C97.6275 13.2719 37.9955 36.7827 14.4407 51.5597C5.44027 57.2019 7.36955 56.9442 13.7735 65.5167C20.4902 74.566 22.0562 76.1868 27.3495 79.8366C45.0949 92.0645 59.0287 89.6612 60.5631 89.879C58.3474 91.2986 55.0799 93.6534 47.9577 97.814C41.6771 101.485 41.7916 101.173 45.5711 107.242C59.5181 129.423 92.0498 141.102 115.971 130.079C118.333 128.987 115.189 124.164 106.448 127.006C93.0734 131.371 75.6793 127.945 62.9383 118.476C59.772 116.12 48.1849 103.058 48.6608 102.393C52.6676 97.1002 139.576 57.4986 139.984 57.8423C143.867 60.4913 147.662 77.3543 146.695 87.3118C145.613 98.3443 134.058 114.791 122.367 121.755C118.112 124.272 121.091 127.421 126.898 126.468C135.176 125.111 151.134 106.475 154.517 94.3609C157.136 84.8365 154.983 69.6405 149.97 62.2481C141.674 49.9959 141.537 49.9598 129.343 55.9497C120.819 60.1642 120.215 60.3219 121.805 57.9488C129.577 46.4057 129.387 22.9079 123.547 11.7198C119.072 2.88939 114.39 5.24179 108.248 8.18548ZM118.062 17.783C122.531 35.5329 120.229 61.1412 101.556 69.2498C69.8355 83.0192 66.7939 87.8015 47.5878 81.27C36.465 77.4614 19.7288 64.1292 18.0973 57.6491C16.9573 53.3767 96.5264 20.141 110.032 13.9946C116.839 10.8831 116.26 10.6266 118.062 17.783Z"
        fill="#C4E727"
      />
    </svg>
  );
}

function BlueRaindropsDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 175 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M78.9379 62.2008C76.7504 60.2758 75.1318 57.0382 74.5193 54.457C73.6881 50.782 78.6755 45.7948 82.7443 54.5886C85.8505 61.3261 89.1754 62.157 91.8442 56.8632C94.5129 51.5257 99.5879 51.6573 97.9692 56.9948C96.0004 63.6448 84.2754 66.8383 78.9379 62.2008Z"
        fill="#7CC2F6"
      />
      <path
        d="M126.887 64.7819C119.756 70.1194 111.137 66.3569 109.912 57.3444C109.125 51.6131 115.687 51.6567 118.05 57.3879C121.025 64.6067 123.737 63.9504 125.225 55.6379C125.706 52.8817 128.637 51.3945 130.3 53.0569C132.531 55.2882 130.606 61.9819 126.887 64.7819Z"
        fill="#7CC2F6"
      />
      <path
        d="M107.549 82.7624C102.124 88.4061 90.4431 84.7749 88.4744 76.8561C87.3806 72.5249 94.2056 72.9623 97.5743 77.4248C99.3243 79.7873 100.637 80.8814 100.593 80.8376C101.074 81.2751 101.862 81.231 102.256 80.706C102.649 80.181 103.481 78.5624 104.049 77.0749C105.318 73.8811 108.774 71.9123 110.349 73.4873C111.487 74.6248 109.737 80.4874 107.549 82.7624Z"
        fill="#7CC2F6"
      />
      <path
        d="M109.344 96.5004C107.288 92.4317 110.176 89.369 114.113 91.5128C115.076 92.0378 116.257 93.3942 117.351 95.1879C121.244 101.532 122.119 101.707 124.525 96.588C125.794 93.8755 126.407 93.3068 128.2 93.3068C131.788 93.3068 130.082 100.482 125.838 103.151C119.669 107.088 113.457 104.594 109.344 96.5004Z"
        fill="#7CC2F6"
      />
      <path
        d="M99.0204 117.807C101.733 117.544 102.389 117.85 105.058 120.65C108.514 124.282 111.533 122.007 112.102 115.313C112.277 113.125 113.939 112.775 115.383 114.569C120.895 121.569 108.47 131.194 100.639 125.988C96.6578 123.319 95.6079 118.113 99.0204 117.807Z"
        fill="#7CC2F6"
      />
      <path
        d="M49.4061 48.8132C50.1061 49.6007 51.375 51.3944 52.2063 52.8819C55.75 59.2694 56.8 59.2256 60.7375 52.6631C64.2375 46.8006 68.2625 47.6321 66.1187 53.7133C63.3187 61.6758 52.25 64.6505 47.1312 58.8317C40 50.738 45.6436 44.657 49.4061 48.8132Z"
        fill="#7CC2F6"
      />
      <path
        d="M63.1001 72.7879C63.9751 73.5754 65.3313 75.1066 66.075 76.2003C70.0125 82.0191 71.4127 81.8443 74.3002 75.2818C76.0939 71.1693 81.3437 69.7691 80.25 75.9816C78.1937 87.3566 59.1625 87.2693 57.1063 74.6255C56.5813 71.4318 60.2564 70.2504 63.1001 72.7879Z"
        fill="#7CC2F6"
      />
      <path
        d="M78.4569 92.6937C79.1569 93.0437 81.2569 94.8376 83.0506 96.5876C88.7819 102.188 91.2756 102.188 93.5506 96.3688C94.6006 93.7001 94.9942 93.3499 96.7005 93.3499C100.2 93.3499 99.2818 99.9123 95.4318 102.45C87.5568 107.612 73.3818 102.362 73.3818 94.2685C73.4256 92.5185 76.3569 91.5999 78.4569 92.6937Z"
        fill="#7CC2F6"
      />
    </svg>
  );
}

function ConfettiDoodle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 115 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M59 47.5L42 38L61 13L86.5 25L89.5 7L114.5 14.5L92 43L65.5 32.5L59 47.5Z"
        fill="#FEC0C1"
      />
      <path
        d="M3.5 27L0 7.5L20 0L26.5 21.5L3.5 27Z"
        fill="#65E996"
      />
      <path
        d="M52.5 100L42 85L55.5 72.5L66.5 85L52.5 100Z"
        fill="#469BFF"
      />
    </svg>
  );
}

// Single Card Component matching Framer specs
function TestimonialCard({ card, style = {}, className = "" }) {
  return (
    <motion.div
      className={`bg-white rounded-[14px] p-7 sm:p-8 flex flex-col justify-between cursor-pointer border border-black/[0.04] relative select-none ${className}`}
      style={{
        boxShadow: "12px 6px 0px 0px rgba(0, 0, 0, 0.12)",
        minHeight: "440px",
        ...style,
      }}
      whileHover={{
        rotate: 0,
        y: -6,
        scale: 1.015,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
    >
      {/* Top-Left Red Pushpin Tack */}
      <RedPushpinTack className="absolute top-3.5 left-3.5 z-30" />

      {/* Bottom-Right Orange Corner Peel */}
      <OrangeCornerPeel className="absolute -bottom-[3px] -right-[5px] z-20 pointer-events-none" />

      {/* Card Upper Content */}
      <div className="relative z-10 pt-4">
        {/* 1. Author Row (Avatar + Name & Role) */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-black/[0.08]">
            <img
              src={card.avatar}
              alt={card.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4
              className="text-[#272727] font-medium text-[13.5px] leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {card.name}
            </h4>
            <p
              className="text-[#272727]/55 font-medium text-[11.5px] leading-tight mt-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {card.role}
            </p>
          </div>
        </div>

        {/* 2. Main Headline Quote */}
        <h3
          className="text-[#252525] font-semibold text-[23px] sm:text-[24px] tracking-[-0.03em] leading-[1.12] mb-5"
          style={{ fontFamily: "'Mona Sans', sans-serif" }}
        >
          {card.headline}
        </h3>

        {/* 3. Rating Stars & Brand Logo */}
        <div className="flex items-center gap-3 mb-5">
          <FiveYellowStars className="h-4 w-auto" />
          <div className="h-5 flex items-center pl-1">
            <img
              src={card.logo}
              alt={card.logoAlt}
              className={`${card.logoHeight} w-auto object-contain`}
              loading="lazy"
            />
          </div>
        </div>

        {/* 4. Feedback Paragraph */}
        <p
          className="text-[#272727]/70 text-[13.5px] sm:text-[14px] leading-[1.45] font-normal"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {card.feedback}
        </p>
      </div>

      {/* Space for bottom peel */}
      <div className="h-4" />
    </motion.div>
  );
}

const reviewCards = [
  {
    id: "card-sarah",
    name: "Sarah M.",
    role: "Founder",
    avatar: "/images/reviews/sarah.png",
    logo: "/images/reviews/logo-fitas.png",
    logoAlt: "Fitas",
    logoHeight: "h-[18px]",
    headline: "“The website finally feels like our brand.”",
    feedback: "She turned our idea into a polished website that felt premium, and easy to understand.",
    desktopRotate: -3,
  },
  {
    id: "card-daniel",
    name: "Daniel R.",
    role: "Product Lead",
    avatar: "/images/reviews/daniel.png",
    logo: "/images/reviews/logo-bond.png",
    logoAlt: "Bond",
    logoHeight: "h-[20px]",
    headline: "“The flow became much easier to use.”",
    feedback: "She cleaned up the user journey, and made the product feel more focused and professional.",
    desktopRotate: 3.5,
  },
  {
    id: "card-ayesha",
    name: "Ayesha K.",
    role: "Creative Director",
    avatar: "/images/reviews/ayesha.png",
    logo: "/images/reviews/logo-arsha.png",
    logoAlt: "Arsha.",
    logoHeight: "h-[18px]",
    headline: "“Sharp design without overcomplicating it.”",
    feedback: "The final design looked modern, but still felt practical. Everything was ready to hand off.",
    desktopRotate: -4.5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden select-none"
    >
      {/* Background Subtle Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(#2E7CF6 1px, transparent 1px),
            linear-gradient(90deg, #2E7CF6 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* ─── SURROUNDING TOP DOODLES ─── */}
      <div className="absolute top-8 left-6 sm:left-14 pointer-events-none">
        <PinkStripedCircle className="w-8 h-8 rotate-[-12deg]" />
      </div>
      <div className="absolute top-6 left-28 sm:left-48 pointer-events-none">
        <BlueWaveLine className="w-24 h-6 rotate-[-4deg]" />
      </div>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          {/* Tilted "Reviews" Chip / Sticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -17 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block bg-[#E5F2FA] text-[#212121] px-5 py-1.5 rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-2.5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              letterSpacing: "-0.3px",
            }}
          >
            Reviews
          </motion.div>

          {/* Bold Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A1A] uppercase tracking-[-1.5px] leading-[100%]"
            style={{
              fontFamily: "'Mona Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5.2vw, 54px)",
            }}
          >
            CLIENTS LIKED
            <br />
            THE PIXELS
          </motion.h2>
        </div>

        {/* ─── DESKTOP / TABLET CANVAS (>= 860px) - EXACT IMAGE 1 LAYOUT ─── */}
        <div className="hidden md:block relative w-full h-[1060px] mx-auto overflow-visible">
          
          {/* 1. Left Doodles */}
          <div className="absolute top-[280px] -left-8 lg:-left-2 pointer-events-none">
            <GreenCupDoodle className="w-32 lg:w-36 h-auto" />
          </div>
          <div className="absolute top-[490px] left-6 lg:left-12 pointer-events-none">
            <BlueCursorIcon className="w-8 h-8" />
          </div>
          <div className="absolute top-[720px] left-2 lg:left-6 pointer-events-none">
            <YellowSquiggle className="w-24 h-6 rotate-[6deg]" />
          </div>

          {/* 2. CARD 1: Sarah M. (Top Left) */}
          <div
            className="absolute z-10 w-[312px]"
            style={{
              top: "20px",
              left: "40px",
            }}
          >
            <TestimonialCard
              card={reviewCards[0]}
              style={{ rotate: reviewCards[0].desktopRotate }}
            />
          </div>

          {/* 3. CARD 2: Daniel R. (Center Staggered) */}
          <div
            className="absolute z-20 w-[312px]"
            style={{
              top: "230px",
              left: "370px",
            }}
          >
            <TestimonialCard
              card={reviewCards[1]}
              style={{ rotate: reviewCards[1].desktopRotate }}
            />
          </div>

          {/* 4. CARD 3: Ayesha K. (Bottom Left - Matching Image 1) */}
          <div
            className="absolute z-30 w-[312px]"
            style={{
              top: "560px",
              left: "60px",
            }}
          >
            <TestimonialCard
              card={reviewCards[2]}
              style={{ rotate: reviewCards[2].desktopRotate }}
            />
          </div>

          {/* 5. RIGHT-SIDE DOODLES & INTERACTIVE EYES (Matching Image 1) */}
          {/* Pen Nib Icon (Outline) */}
          <div className="absolute top-[130px] right-[310px] lg:right-[340px] pointer-events-none rotate-[-15deg]">
            <PenNibDoodle className="w-7 h-9" />
          </div>

          {/* Yellow Spring Doodle */}
          <div className="absolute top-[125px] right-[240px] lg:right-[270px] pointer-events-none rotate-[8deg]">
            <YellowSpringDoodle className="w-12 h-10" />
          </div>

          {/* Blue Raindrops Top Right */}
          <div className="absolute top-[40px] right-[40px] lg:right-[60px] pointer-events-none">
            <BlueRaindropsDoodle className="w-24 lg:w-28 h-auto" />
          </div>

          {/* INTERACTIVE EYES (Tracks cursor & blinks) */}
          <div className="absolute top-[260px] right-[30px] lg:right-[50px] rotate-[-10deg] pointer-events-none z-20">
            <InteractiveEyes style={{ width: "70px", height: "55px" }} />
          </div>

          {/* Yellow Squiggle below eyes */}
          <div className="absolute top-[365px] right-[60px] lg:right-[80px] pointer-events-none">
            <YellowSquiggle className="w-24 h-6 rotate-[-5deg]" />
          </div>

          {/* Lightbulb & Purple Cursor Sticker */}
          <div className="absolute top-[440px] right-[85px] lg:right-[105px] pointer-events-none">
            <LightbulbPencilDoodle />
          </div>

          {/* Coral Spikey Star/Flower */}
          <div className="absolute top-[640px] right-[260px] lg:right-[290px] pointer-events-none">
            <CoralRedStar className="w-7 h-7" />
          </div>

          {/* Confetti Doodle Bottom Right */}
          <div className="absolute top-[720px] right-[50px] lg:right-[70px] pointer-events-none">
            <ConfettiDoodle className="w-18 lg:w-22 h-auto rotate-[10deg]" />
          </div>

        </div>

        {/* ─── MOBILE STACKED FLOW (< 860px) ─── */}
        <div className="flex md:hidden flex-col items-center justify-center gap-10 py-6">
          {/* Mobile Eyes */}
          <div className="flex items-center justify-center mb-2">
            <InteractiveEyes style={{ width: "65px", height: "50px" }} />
          </div>

          {reviewCards.map((card) => (
            <div key={card.id} className="w-full max-w-[312px]">
              <TestimonialCard
                card={card}
                style={{ rotate: card.desktopRotate }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

