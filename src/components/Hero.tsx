"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Side Content */}
        <div
          className={`order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 transform ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[1rem] sm:text-[1.1rem] font-medium text-rose-gold tracking-widest uppercase mb-2 sm:mb-3 flex items-center gap-3">
            Halo, Saya
            <span className="w-10 h-[1px] bg-rose-gold-light"></span>
          </span>
          <h1 className="font-serif text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.15] text-burgundy font-bold mb-4 sm:mb-5">
            Azizahwati Mutmainnah
          </h1>
          <div className="font-sans text-[0.9rem] sm:text-[1.25rem] text-[#6e585c] font-normal mb-6 sm:mb-8 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
            <span>Web Developer</span>
            <span className="text-[#ecc8c5]">•</span>
            <span>Mobile Developer</span>
            <span className="text-[#ecc8c5]">•</span>
            <span>UI/UX Designer</span>
          </div>
          <p className="font-sans text-[0.95rem] sm:text-[1.05rem] text-[#6e585c] font-light leading-relaxed max-w-[580px] mb-8 sm:mb-10">
            Saya adalah mahasiswa yang memiliki minat besar dalam bidang Web Development, Mobile Development, dan UI/UX Design. Saya percaya bahwa teknologi dapat menjadi solusi untuk berbagai kebutuhan apabila dipadukan dengan desain yang baik dan pengalaman pengguna yang nyaman. Melalui setiap proyek, saya terus mengembangkan kemampuan untuk menciptakan produk digital yang modern, fungsional, dan memberikan manfaat bagi banyak orang.
          </p>
          <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-12 flex-wrap justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center py-3 px-7 sm:py-4 sm:px-9 font-medium rounded-full text-white bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] shadow-lg shadow-[#b3737b]/30 hover:shadow-xl hover:shadow-[#b3737b]/45 transition-all duration-300 hover:-translate-y-[2px] text-[0.9rem] sm:text-base"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-7 sm:py-4 sm:px-9 font-medium rounded-full text-burgundy bg-white/45 border border-[#ecc8c5] backdrop-blur-md shadow-md hover:bg-[#ecc8c5]/25 hover:border-rose-gold hover:-translate-y-[2px] transition-all duration-300 text-[0.9rem] sm:text-base"
            >
              Unduh CV
            </a>
          </div>

          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <span className="text-[0.75rem] sm:text-[0.85rem] text-[#6e585c] font-medium tracking-widest uppercase">
              Hubungkan:
            </span>
            <div className="flex gap-3 sm:gap-4">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/izaa665?tab=repositories",
                  icon: (
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/azizahwati-mutmainnah-6482a22ba",
                  icon: (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ),
                },
                {
                  label: "Dribbble",
                  href: "#",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
                    </>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/meiizyaa/",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/60 bg-white/45 flex items-center justify-center text-burgundy transition-all duration-300 hover:bg-gradient-to-br hover:from-[#ecc8c5] hover:to-[#b3737b] hover:text-white hover:border-transparent hover:-translate-y-1 hover:rotate-[8deg]"
                  aria-label={social.label}
                >
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
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Frame & Back Watermark */}
        <div
          className={`col-span-5 lg:col-span-5 relative flex justify-center items-center w-full transition-all duration-1000 delay-300 transform ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Typo Backdrop */}
          <span className="absolute font-serif text-[2rem] sm:text-[7.5rem] lg:text-[8rem] font-bold text-burgundy/5 tracking-wider select-none pointer-events-none z-0 transform -translate-y-[10%]">
            PORTFOLIO
          </span>

          {/* Large Empty Portrait Placeholder */}
          <div className="relative w-full max-w-[130px] h-[175px] sm:max-w-[280px] sm:h-[380px] lg:max-w-[340px] lg:h-[460px] bg-white/20 border border-dashed border-rose-gold rounded-[40px_12px_40px_12px] sm:rounded-[100px_35px_100px_35px] lg:rounded-[120px_40px_120px_40px] shadow-lg sm:shadow-2xl z-10 before:content-[''] before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 sm:before:-top-3 sm:before:-left-3 sm:before:-right-3 sm:before:-bottom-3 before:border before:border-[#ecc8c5]/60 before:rounded-[45px_15px_45px_15px] sm:before:rounded-[110px_40px_110px_40px] lg:before:rounded-[130px_50px_130px_50px] before:pointer-events-none before:z-0">
            <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] sm:top-[15px] sm:left-[15px] sm:right-[15px] sm:bottom-[15px] rounded-[35px_10px_35px_10px] sm:rounded-[90px_25px_90px_25px] lg:rounded-[105px_30px_105px_30px] overflow-hidden z-10 bg-gradient-to-br from-white/70 to-[#fdf2f4]/30">
              <img src="/img/izaa.jpeg" alt="Azizahwati Mutmainnah" className="w-full h-full object-cover" />
            </div>

            {/* SVG Botanical / Floral Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
              {/* Top Right Floral */}
              <svg
                className="absolute -top-[15px] -right-[10px] sm:-top-[40px] sm:-right-[30px] w-[60px] h-[60px] sm:w-[140px] sm:h-[140px] rotate-[15deg] fill-none stroke-rose-gold stroke-[1.2] opacity-75"
                viewBox="0 0 100 100"
              >
                <path d="M50 50 C40 30, 20 30, 30 50 C20 70, 40 70, 50 50 Z" />
                <path d="M50 50 C60 30, 80 30, 70 50 C80 70, 60 70, 50 50 Z" />
                <path d="M50 50 C30 40, 30 20, 50 30 C70 20, 70 40, 50 50 Z" />
                <path d="M50 50 C30 60, 30 80, 50 70 C70 80, 70 60, 50 50 Z" />
                <circle cx="50" cy="50" r="5" className="fill-rose-gold" />
                <path d="M70 50 Q 85 45, 90 20 Q 75 35, 70 50" />
                <path d="M30 50 Q 15 55, 10 80 Q 25 65, 30 50" />
              </svg>

              {/* Bottom Left Floral */}
              <svg
                className="absolute -bottom-[15px] -left-[15px] sm:-bottom-[45px] sm:-left-[40px] w-[70px] h-[70px] sm:w-[160px] sm:h-[160px] -rotate-[10deg] fill-none stroke-rose-gold stroke-[1.2] opacity-75"
                viewBox="0 0 100 100"
              >
                <path d="M50 50 C45 35, 30 30, 35 45 C25 55, 35 65, 50 50 Z" />
                <path d="M50 50 C55 35, 70 30, 65 45 C75 55, 65 65, 50 50 Z" />
                <path d="M50 50 C35 45, 30 60, 45 55 C55 65, 65 55, 50 50 Z" />
                <path d="M50 50 C55 65, 60 80, 50 70 C40 80, 45 65, 50 50 Z" />
                <circle cx="50" cy="50" r="4" className="fill-rose-gold" />
                <path d="M35 45 Q 20 30, 10 40 C 20 50, 30 50, 35 45" />
              </svg>

              {/* Foliage Vines */}
              <svg
                className="hidden sm:block absolute top-[60%] -right-[50px] w-[100px] h-[100px] fill-none stroke-rose-gold stroke-[1.2] opacity-50"
                viewBox="0 0 100 100"
              >
                <path d="M10 90 Q 50 60, 90 10" />
                <path d="M50 60 Q 65 45, 60 30 Q 45 45, 50 60" className="fill-rose-gold-light/40" />
                <path d="M30 75 Q 45 65, 40 50 Q 25 60, 30 75" className="fill-rose-gold-light/40" />
                <path d="M70 45 Q 85 35, 80 20 Q 65 30, 70 45" className="fill-rose-gold-light/40" />
              </svg>
            </div>

            {/* Floating Quote Card */}
            <div className="hidden md:block absolute -bottom-8 -left-10 w-[260px] p-5 rounded-2xl glass-panel animate-float z-30">
              <span className="text-rose-gold font-serif text-[2.5rem] leading-[0.5] block mb-1">
                “
              </span>
              <p className="font-serif italic text-[1rem] text-burgundy leading-snug">
                Code is my language. Design is my passion.
              </p>
              <span className="font-sans text-[0.75rem] text-[#6e585c] tracking-wider uppercase block mt-2 text-right">
                — Azizahwati M.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
