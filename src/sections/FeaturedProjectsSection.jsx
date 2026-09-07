import { motion } from "framer-motion";
import { featuredProjects } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 bg-[#F6F5EF] overflow-hidden"
    >
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

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Editorial Section Intro Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 font-semibold text-[14px] sm:text-[15px] uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Featured Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#1A1A1A] font-[800] text-[34px] sm:text-[46px] md:text-[54px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Mona Sans', 'Plus Jakarta Sans', sans-serif" }}
          >
            Not just visuals.<br />
            <span className="text-[#1A1A1A]/80">I make digital things look alive</span>
          </motion.h2>
        </div>

        {/* Featured Projects Stack */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row items-center gap-8 lg:gap-14 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              {/* Project Image Container */}
              <div
                className="w-full lg:w-[58%] rounded-[20px] sm:rounded-[26px] overflow-hidden aspect-[16/10] relative flex items-center justify-center"
                style={{ backgroundColor: project.bgColor }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Project Metadata & CTA */}
              <div className="w-full lg:w-[42%] flex flex-col justify-between py-2 text-left">
                <div>
                  {/* Category & Year Badges */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#1A1A1A] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-gray-400 font-bold text-[13px]">
                      {project.year}
                    </span>
                    <span className="bg-[#8BE63C]/20 text-[#437A12] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className="text-[#1A1A1A] font-extrabold text-[32px] sm:text-[42px] tracking-tight mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-md"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* View Case Study Button */}
                <div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold text-[14px] sm:text-[15px] px-6 py-3 rounded-full hover:bg-black transition-all hover:gap-3 group/btn"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
