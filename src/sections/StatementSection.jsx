import { motion } from "framer-motion";
import RedPin from "../components/ui/RedPin";

export default function StatementSection() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#F6F5EF] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle Grid Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#2E7CF6 1px, transparent 1px),
            linear-gradient(90deg, #2E7CF6 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Main Massive Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h2
            className="text-[#1A1A1A] font-[900] text-[40px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Mona Sans', 'Plus Jakarta Sans', sans-serif" }}
          >
            I make DESIGNS<br />
            PEOPLE REMEMBER
          </h2>
        </motion.div>

        {/* Sub-text with horizontal line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p
            className="text-[#1A1A1A] text-[18px] sm:text-[22px] md:text-[24px] font-medium leading-[1.35] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            I design clean websites, apps, and brand systems<br className="hidden sm:block" />
            that help ideas look sharper, feel trusted<br className="hidden sm:block" />
            <span className="inline-block w-8 border-b-2 border-black mb-1 mr-2"></span>
            and work with purpose.
          </p>
        </motion.div>

        {/* Start a project Tilted Card with Red Pin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
          whileHover={{ scale: 1.06, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="relative inline-block cursor-pointer select-none"
        >
          <a
            href="#contact"
            className="block bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] px-8 py-4 border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <span
              className="text-[#1A1A1A] font-bold text-[18px] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Start a project
            </span>
          </a>
          {/* Red Pin */}
          <div className="absolute -top-3.5 -right-2.5 z-20 pointer-events-none">
            <RedPin className="w-7 h-7" rotation={15} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
