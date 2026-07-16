"use client";

import React, { useEffect, useRef, useState } from "react";

export default function UIUX() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const designs = [
    {
      title: "Mobile Application Design",
      category: "iOS & Android Prototyping",
      gradient: "from-[#fff0f2] to-[#ecc8c5]",
      lines: (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-rose-gold/10 pb-2">
            <span className="w-6 h-6 rounded-full bg-rose-gold-light shrink-0"></span>
            <span className="w-16 h-2 bg-rose-gold rounded-full shrink-0"></span>
            <div className="flex gap-[3px]">
              <span className="w-1 h-1 rounded-full bg-rose-gold"></span>
              <span className="w-1 h-1 rounded-full bg-rose-gold"></span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-3 bg-white/80 border border-rose-gold/5 rounded-xl flex flex-col justify-between h-20">
              <span className="w-20 h-2 bg-burgundy/60 rounded-full"></span>
              <span className="w-10 h-4 bg-gradient-to-r from-[#ecc8c5] to-[#b3737b] rounded-full"></span>
            </div>
            <div className="p-3 bg-white/80 border border-rose-gold/5 rounded-xl flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-rose-gold-light shrink-0"></span>
              <div className="flex flex-col gap-1 w-full">
                <span className="w-1/2 h-[6px] bg-[#6e585c]/30 rounded-full"></span>
                <span className="w-1/3 h-[4px] bg-[#6e585c]/15 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Website Design & System",
      category: "Responsive Web Design",
      gradient: "from-[#fffcfd] to-[#ecc8c5]",
      lines: (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-rose-gold/10 pb-2">
            <span className="w-20 h-2 bg-rose-gold rounded-full shrink-0"></span>
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-rose-gold"></span>
              <span className="w-1 h-1 rounded-full bg-rose-gold"></span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-3 bg-white/80 border border-rose-gold/5 rounded-full flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-rose-gold shrink-0"></span>
              <span className="w-24 h-2 bg-[#6e585c]/30 rounded-full"></span>
            </div>
            <div className="p-3 bg-white/80 border border-rose-gold/5 rounded-xl flex flex-col gap-2">
              <span className="w-3/4 h-[6px] bg-[#6e585c]/30 rounded-full"></span>
              <span className="w-1/2 h-[4px] bg-[#6e585c]/15 rounded-full"></span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dashboard Admin UI",
      category: "Interactive Prototype Elements",
      gradient: "from-[#ffeef1] to-[#b3737b]",
      lines: (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-rose-gold/10 pb-2">
            <span className="w-6 h-6 rounded-full bg-burgundy shrink-0"></span>
            <span className="w-10 h-2 bg-rose-gold rounded-full shrink-0"></span>
            <span className="w-10 h-4 bg-rose-gold-light/40 rounded-full shrink-0"></span>
          </div>
          <div className="p-4 bg-white border border-rose-gold/5 rounded-2xl flex flex-col justify-between h-[110px]">
            <span className="w-12 h-2 bg-[#6e585c]/30 rounded-full"></span>
            <span className="w-6 h-1 bg-[#6e585c]/15 rounded-full"></span>
            <span className="w-full h-2 bg-[#6e585c]/30 rounded-full"></span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="uiux" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Desain Visual
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            UI/UX Design
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[700px] mx-auto mt-4">
            Selain mengembangkan aplikasi, saya juga memiliki ketertarikan dalam bidang UI/UX Design. Saya senang merancang antarmuka yang bersih, modern, responsif, dan mudah digunakan oleh pengguna.
          </p>
        </div>

        {/* UI/UX Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 pb-6 lg:pb-0 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {designs.map((design, i) => (
            <div
              key={design.title}
              className={`group relative h-[380px] rounded-3xl glass-panel overflow-hidden snap-start shrink-0 w-[295px] sm:w-[340px] lg:w-auto transition-all duration-[800ms] ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Simulated Device Screen Mockup */}
              <div className={`w-full h-full bg-gradient-to-b ${design.gradient} flex justify-center items-end p-6 relative overflow-hidden`}>
                <div className="w-[90%] h-[90%] bg-white/75 backdrop-blur-md border border-white rounded-[24px_24px_0_0] shadow-2xl p-5 flex flex-col gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {design.lines}
                </div>
              </div>

              {/* Hover Text Banner Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-burgundy via-burgundy/40 to-transparent text-white z-10 flex flex-col justify-end h-[150px] transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-serif text-[1.25rem] text-white font-semibold mb-1">
                  {design.title}
                </h3>
                <span className="font-sans text-[0.8rem] text-rose-gold-light font-medium uppercase tracking-wider">
                  {design.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Hint on Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-4 text-[#6e585c] text-[0.8rem] opacity-60">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse-slow"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          <span>Geser secara horizontal untuk meninjau desain</span>
        </div>
      </div>
    </section>
  );
}
