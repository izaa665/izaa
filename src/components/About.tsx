"use client";

import React, { useEffect, useRef, useState } from "react";

export default function About() {
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

  const personalInfo = [
    {
      label: "Nama Lengkap",
      value: "Azizahwati Mutmainnah",
      icon: (
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      ),
    },
    {
      label: "Pendidikan",
      value: "IT Student",
      icon: (
        <>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </>
      ),
    },
    {
      label: "Lokasi",
      value: "Indonesia",
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      label: "Fokus Utama",
      value: "Web, Mobile, UI/UX & AI",
      icon: (
        <>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </>
      ),
    },
    {
      label: "Alamat Email",
      value: "azzhmutmainnah06@gmail.com",
      icon: (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Biografi
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Tentang Saya
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[600px] mx-auto mt-4">
            Perkenalan diri singkat, visi, dan minat saya dalam dunia teknologi.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Biography Text (Left) */}
          <div
            className={`lg:col-span-7 flex flex-col transition-all duration-[1000ms] delay-100 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-serif text-[1.75rem] font-semibold text-burgundy mb-6 leading-snug">
              Membangun produk digital yang fungsional dan estetis secara visual.
            </h3>
            <div className="font-sans text-[1.05rem] text-[#6e585c] font-light leading-relaxed mb-8 space-y-5">
              <p>
                Perkenalkan, saya Azizahwati Mutmainnah, seorang mahasiswa yang memiliki minat besar dalam dunia teknologi, khususnya <strong>Web Development, Mobile Development, UI/UX Design, serta Artificial Intelligence</strong>.
              </p>
              <p>
                Saya percaya bahwa sebuah aplikasi yang baik bukan hanya mampu menyelesaikan suatu permasalahan, tetapi juga harus mudah digunakan, memiliki tampilan yang menarik, serta memberikan pengalaman terbaik bagi penggunanya.
              </p>
              <p>
                Selama masa perkuliahan, saya aktif mengembangkan berbagai proyek sebagai media pembelajaran sekaligus untuk meningkatkan kemampuan dalam membangun aplikasi, mulai dari tahap analisis kebutuhan, perancangan antarmuka, pengembangan sistem, hingga implementasi. Saya juga senang mempelajari teknologi baru agar dapat terus berkembang mengikuti perkembangan dunia digital.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[
                "Web Development",
                "Mobile Development",
                "UI/UX Design",
                "Artificial Intelligence",
              ].map((badge) => (
                <span
                  key={badge}
                  className="py-2 px-5 rounded-full bg-rose-gold/10 text-burgundy font-sans font-medium text-[0.85rem]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Info List Card (Right) */}
          <div
            className={`lg:col-span-5 transition-all duration-[1000ms] delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-panel">
              <h3 className="font-serif text-[1.4rem] font-semibold text-burgundy mb-6">
                Informasi Personal
              </h3>
              <div className="flex flex-col gap-4">
                {personalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-5 flex items-center gap-5 rounded-2xl glass-panel shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-rose-gold-light/35 flex items-center justify-center text-burgundy shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {info.icon}
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[0.75rem] font-medium text-[#6e585c] uppercase tracking-wider">
                        {info.label}
                      </span>
                      <span className="font-sans text-[0.95rem] font-medium text-burgundy break-all">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
