"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Stats() {
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

  const stats = [
    { number: "7+", label: "Proyek Selesai", subtext: "Selesai & Berfungsi Baik" },
    { number: "4", label: "Fokus Teknologi", subtext: "Web, Mobile, UI/UX, AI" },
    { number: "1+", label: "Tahun Belajar", subtext: "Eksplorasi Dunia IT" },
    { number: "1", label: "Proyek Berjalan", subtext: "Dalam Pengembangan" },
  ];

  return (
    <section id="stats" className="py-8 relative z-10" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-4 sm:p-9 text-center rounded-2xl sm:rounded-3xl glass-panel relative overflow-hidden transition-all duration-[800ms] ease-out transform before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#ecc8c5] before:to-[#b3737b] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-[1.8rem] sm:text-[3rem] font-bold bg-gradient-to-r from-[#b3737b] to-[#54162b] bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="font-sans text-[0.8rem] sm:text-[0.95rem] font-medium text-burgundy tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="font-sans text-[0.65rem] sm:text-[0.8rem] text-[#6e585c] font-light">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
