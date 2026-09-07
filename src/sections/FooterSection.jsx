import { footerLinks } from "../data/portfolioData";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#F6F5EF] border-t border-gray-200 py-16 pb-28 sm:pb-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span
            className="text-[#1A1A1A] font-extrabold text-[20px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Creatie®
          </span>
          <p
            className="text-gray-500 text-[13px] font-medium mt-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Design that makes people look twice.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#1A1A1A] text-[13px] font-extrabold tracking-wider hover:text-black transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-gray-400 text-[13px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          © 2026 Creatie®. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
