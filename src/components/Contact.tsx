"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    // Simulate Network Request
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        text: "Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda kembali.",
      });
      setName("");
      setEmail("");
      setMessage("");

      // Auto-hide success banner after 5 seconds
      setTimeout(() => {
        setStatus({ type: "", text: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Konsultasi & Kolaborasi
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Hubungi Saya
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[700px] mx-auto mt-4">
            Hubungi saya untuk diskusi proyek baru, kolaborasi riset, atau penawaran kerja sama.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Details (Left) */}
          <div
            className={`lg:col-span-5 flex flex-col gap-8 transition-all duration-[1000ms] delay-100 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-sans text-[1.05rem] text-[#6e585c] font-light leading-relaxed">
              Terima kasih telah mengunjungi portofolio saya. Apabila Anda tertarik untuk berdiskusi, berkolaborasi, atau memiliki pertanyaan mengenai proyek yang telah saya kerjakan, jangan ragu untuk menghubungi saya melalui media sosial yang tersedia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
              {/* Email Card */}
              <a
                href="mailto:azzhmutmainnah06@gmail.com"
                className="p-4 sm:p-6 flex items-center gap-4 rounded-2xl glass-panel shadow-sm text-decoration-none transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-xl bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] text-white flex items-center justify-center shadow-md shadow-[#b3737b]/15 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-[0.65rem] sm:text-[0.75rem] font-medium text-[#6e585c] uppercase tracking-wider">
                    Email Saya
                  </span>
                  <span className="font-sans text-[0.8rem] sm:text-[1rem] font-semibold text-burgundy truncate">
                    azzhmutmainnah06@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6287785837340"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 flex items-center gap-4 rounded-2xl glass-panel shadow-sm text-decoration-none transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-md shadow-[#128C7E]/15 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-[0.65rem] sm:text-[0.75rem] font-medium text-[#6e585c] uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <span className="font-sans text-[0.8rem] sm:text-[1rem] font-semibold text-burgundy truncate">
                    0877-8583-7340
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="#"
                className="p-4 sm:p-6 flex items-center gap-4 rounded-2xl glass-panel shadow-sm text-decoration-none transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white flex items-center justify-center shadow-md shadow-[#004182]/15 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-[0.65rem] sm:text-[0.75rem] font-medium text-[#6e585c] uppercase tracking-wider">
                    LinkedIn
                  </span>
                  <span className="font-sans text-[0.8rem] sm:text-[1rem] font-semibold text-burgundy truncate">
                    Azizahwati Mutmainnah
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/meiizyaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 flex items-center gap-4 rounded-2xl glass-panel shadow-sm text-decoration-none transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-xl bg-gradient-to-br from-[#E1306C] to-[#C13584] text-white flex items-center justify-center shadow-md shadow-[#C13584]/15 shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-sans text-[0.65rem] sm:text-[0.75rem] font-medium text-[#6e585c] uppercase tracking-wider">
                    Instagram
                  </span>
                  <span className="font-sans text-[0.8rem] sm:text-[1rem] font-semibold text-burgundy truncate">
                    @meiizyaa
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form (Right) */}
          <div
            className={`lg:col-span-7 transition-all duration-[1000ms] delay-200 transform w-full ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-panel relative">
              {/* Form Status Notification */}
              {status.text && (
                <div
                  className={`p-4 rounded-xl mb-6 font-sans text-[0.9rem] font-medium transition-all duration-300 ${
                    status.type === "success"
                      ? "bg-[#e1fbf2] text-[#0e8a5f]"
                      : "bg-[#fde8e8] text-[#9b1c1c]"
                  }`}
                >
                  {status.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-[0.85rem] font-semibold text-burgundy tracking-wide">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-sans text-[0.95rem] py-[14px] px-[20px] rounded-xl bg-white/60 border border-[#b3737b]/25 text-burgundy outline-none focus:border-rose-gold focus:bg-white focus:shadow-md focus:shadow-rose-gold-light/15 transition-all duration-300"
                    placeholder="Masukkan nama..."
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-[0.85rem] font-semibold text-burgundy tracking-wide">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-sans text-[0.95rem] py-[14px] px-[20px] rounded-xl bg-white/60 border border-[#b3737b]/25 text-burgundy outline-none focus:border-rose-gold focus:bg-white focus:shadow-md focus:shadow-rose-gold-light/15 transition-all duration-300"
                    placeholder="nama@domain.com"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-[0.85rem] font-semibold text-burgundy tracking-wide">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="font-sans text-[0.95rem] py-[14px] px-[20px] rounded-xl bg-white/60 border border-[#b3737b]/25 text-burgundy outline-none focus:border-rose-gold focus:bg-white focus:shadow-md focus:shadow-rose-gold-light/15 transition-all duration-300 resize-y min-h-[120px]"
                    placeholder="Tulis rincian pesan Anda di sini..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 px-8 font-medium rounded-full text-white bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] shadow-lg shadow-[#b3737b]/30 hover:shadow-xl hover:shadow-[#b3737b]/45 transition-all duration-300 hover:-translate-y-[2px] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan Sekarang"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
