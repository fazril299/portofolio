import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, RotateCw, Mail, X } from "lucide-react";
import { contactConfig } from "../../data/portfolioData";

export const openContactModal = () => {
  window.dispatchEvent(new CustomEvent("open-contact-modal"));
};

export const closeContactModal = () => {
  window.dispatchEvent(new CustomEvent("close-contact-modal"));
};

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-contact-modal", handleOpen);
    window.addEventListener("close-contact-modal", handleClose);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      window.removeEventListener("close-contact-modal", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Silakan lengkapi Nama dan Email Anda.");
      return;
    }

    setIsSubmitting(true);

    const messageText = `Halo Fazriel! 👋\n\nSaya menghubungi Anda dari website portfolio:\n\n👤 Nama: ${formData.name}\n📧 Email: ${formData.email}\n💬 Pesan: ${formData.message || "(Tidak ada pesan khusus)"}\n\nTerima kasih!`;
    const targetPhone = contactConfig.whatsappNumber || "6281234567890";
    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(messageText)}`;

    window.open(waUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-5 select-none overflow-y-auto">
          {/* ── BACKDROP ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* ── MODAL WINDOW (BROWSER STYLE) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
            className="relative w-full max-w-[580px] max-h-[92vh] flex flex-col bg-white rounded-[20px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-black/10 overflow-hidden z-10 my-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* ── TOP BROWSER BAR (STICKY) ── */}
            <div className="w-full h-[46px] bg-[#F5F5F7] border-b border-black/[0.08] px-4 sm:px-5 flex items-center justify-between flex-shrink-0">
              {/* macOS Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center group cursor-pointer"
                  title="Close"
                >
                  <X className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              {/* Center Address Pill Capsule */}
              <div className="flex items-center justify-between bg-white border border-black/[0.08] rounded-md px-3 py-1 w-[210px] sm:w-[250px] shadow-2xs">
                <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                  <Search className="w-3 h-3 text-gray-400" />
                  <span className="font-medium text-[#444]">Contact</span>
                </div>
                <RotateCw className="w-2.5 h-2.5 text-gray-400" />
              </div>

              {/* Right Mail Badge */}
              <div className="w-5 h-5 rounded-[5px] bg-[#2E7CF6] flex items-center justify-center shadow-xs">
                <Mail className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* ── MODAL SCROLLABLE CONTENT ── */}
            <div className="px-5 py-4 sm:px-8 sm:py-5 overflow-y-auto flex-1 overscroll-contain">
              {/* Header Title */}
              <div className="mb-4">
                <h2
                  className="text-[#1A1A1A] font-bold text-[24px] sm:text-[28px] tracking-tight leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Contact
                </h2>
                <p className="text-[#8E8E8E] text-[13px] sm:text-[14px] mt-1 font-normal leading-relaxed">
                  Open to projects, collabs, or concepts - let’s bring ideas alive.
                </p>
              </div>

              {/* Two Column Info: Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-3.5 mb-3.5 border-b border-black/[0.08]">
                {/* Email */}
                <div>
                  <p className="text-[12px] text-gray-500 font-medium mb-0.5">Email:</p>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-[14px] font-semibold text-[#1A1A1A] hover:text-[#2E7CF6] transition-colors"
                  >
                    {contactConfig.email}
                  </a>
                </div>

                {/* Phone Number */}
                <div>
                  <p className="text-[12px] text-gray-500 font-medium mb-0.5">Phone Number</p>
                  <a
                    href={`https://wa.me/${contactConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] font-semibold text-[#1A1A1A] hover:text-[#2E7CF6] transition-colors"
                  >
                    {contactConfig.phone}
                  </a>
                </div>
              </div>

              {/* Form Section: Get In Touch */}
              <form onSubmit={handleSubmit} className="pt-1">
                <h3 className="text-[#1A1A1A] font-bold text-[14px] mb-3 tracking-tight">
                  Get In Touch:
                </h3>

                {/* Name */}
                <div className="mb-3">
                  <label className="block text-[12.5px] font-medium text-[#1A1A1A] mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-black focus:bg-white rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A1A1A] placeholder-gray-400 outline-none transition-all font-normal"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="block text-[12.5px] font-medium text-[#1A1A1A] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter you email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-black focus:bg-white rounded-lg px-3.5 py-2.5 text-[14px] text-[#1A1A1A] placeholder-gray-400 outline-none transition-all font-normal"
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="block text-[12.5px] font-medium text-[#1A1A1A] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAFA] border border-gray-200 focus:border-black focus:bg-white rounded-lg px-3.5 py-2 text-[14px] text-[#1A1A1A] placeholder-gray-400 outline-none transition-all font-normal resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2A2A2A] hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer text-[14.5px] shadow-sm hover:shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isSubmitting ? "Membuka WhatsApp..." : "Submit"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
