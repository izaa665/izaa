"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Gallery() {
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

  const galleryItems = [
    {
      title: "Mobile App Design",
      desc: "Desain antarmuka mobile yang bersih, modern, dan berfokus pada kemudahan akses pengguna.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 mb-3 opacity-75">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: "Website Design",
      desc: "Rancangan arsitektur layout desktop interaktif dengan grid adaptif.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 mb-3 opacity-75">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      )
    },
    {
      title: "Dashboard Admin",
      desc: "Struktur antarmuka panel pengelola dengan widget data statistik informatif.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 mb-3 opacity-75">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      )
    },
    {
      title: "Landing Page",
      desc: "Desain halaman promosi satu kolom dengan tingkat konversi call-to-action yang tinggi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 mb-3 opacity-75">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      )
    },
    {
      title: "Design System",
      desc: "Konsistensi tipografi, palette warna, dan grid pustaka tombol UI.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10 mb-3 opacity-75">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="gallery" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Kumpulan Karya
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Galeri Karya
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[700px] mx-auto mt-4">
            Bagian ini berisi dokumentasi berbagai hasil karya yang telah saya kerjakan, mulai dari aplikasi mobile, website, hingga desain UI/UX.
          </p>
        </div>

        {/* 2-Column Responsive Image Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 transition-all duration-[1000ms] delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="aspect-square rounded-2xl overflow-hidden relative shadow-md group glass-panel"
            >
              {/* Visual Back */}
              <div className="w-full h-full bg-gradient-to-tr from-[#fff0f2] to-[#ecc8c5] flex flex-col items-center justify-center text-burgundy p-4 text-center transition-transform duration-500 group-hover:scale-105">
                <div className="scale-75 sm:scale-100 mb-1 sm:mb-2">{item.icon}</div>
                <span className="font-serif text-[0.8rem] sm:text-[1.1rem] font-semibold">
                  {item.title}
                </span>
              </div>

              {/* Hover Mask Info */}
              <div className="absolute top-0 left-0 w-full h-full bg-burgundy/85 backdrop-blur-[3px] flex flex-col justify-center items-center p-4 text-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif text-[0.85rem] sm:text-[1.2rem] font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-[0.6rem] sm:text-[0.85rem] text-rose-gold-light leading-relaxed font-light break-words w-full px-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
