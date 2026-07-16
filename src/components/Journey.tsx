"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Journey() {
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

  const nodes = [
    {
      date: "Fase 1",
      title: "Dasar Pemrograman",
      desc: "Menguasai dasar logika OOP Java, PHP, database, dan pemetaan relasional SQL.",
    },
    {
      date: "Fase 2",
      title: "Pengembangan App",
      desc: "Membangun website dengan Bootstrap, serta aplikasi Android native menggunakan Java.",
    },
    {
      date: "Fase 3",
      title: "Rancangan UI/UX",
      desc: "Memahami kegunaan wireframe Figma, prototipe interaktif, dan kegunaan antarmuka.",
    },
    {
      date: "Fase 4",
      title: "Implementasi AI",
      desc: "Mengintegrasikan deteksi wajah berbasis OpenCV, MTCNN, dan FaceNet.",
    },
  ];

  return (
    <section id="goals" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Rencana Masa Depan
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Tujuan Saya
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[700px] mx-auto mt-4">
            Saya memiliki semangat untuk terus belajar dan mengembangkan kemampuan dalam bidang software, desain, dan AI.
          </p>
        </div>

        {/* Textual Goal Statement */}
        <div
          className={`p-8 sm:p-12 rounded-3xl glass-panel max-w-[900px] mx-auto text-center mb-20 transition-all duration-[1000ms] delay-100 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-sans text-[1.05rem] sm:text-[1.15rem] text-burgundy font-light leading-relaxed">
            Saya percaya bahwa teknologi dapat menjadi solusi untuk berbagai kebutuhan apabila dikembangkan dengan baik. Oleh karena itu, saya terus berusaha menciptakan aplikasi yang tidak hanya memiliki fungsi yang optimal, tetapi juga memberikan pengalaman terbaik bagi setiap pengguna.
            <br />
            <br />
            Saya terbuka terhadap peluang magang, kolaborasi, maupun kesempatan untuk mengembangkan proyek bersama, sehingga dapat terus meningkatkan kemampuan sekaligus memberikan kontribusi positif di dunia teknologi.
          </p>
        </div>

        {/* Journey Timeline Node Line */}
        <div className="relative py-8">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[35px] left-8 right-8 h-[2px] bg-[#ecc8c5] hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {nodes.map((node, i) => (
              <div
                key={node.title}
                className={`flex flex-col items-center text-center group transition-all duration-[800ms] ease-out transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Node Dot Indicator */}
                <div className="w-6 h-6 rounded-full bg-white border-[4px] border-rose-gold shadow-[0_0_10px_rgba(179,115,123,0.3)] mb-6 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-rose-gold group-hover:scale-120 group-hover:shadow-[0_0_15px_rgba(179,115,123,0.6)]"></div>

                {/* Node Date Badge */}
                <span className="font-sans text-[0.85rem] font-semibold text-rose-gold bg-rose-gold/10 py-1 px-4 rounded-full mb-3">
                  {node.date}
                </span>

                {/* Title */}
                <h3 className="font-serif text-[1.15rem] font-semibold text-burgundy mb-2">
                  {node.title}
                </h3>

                {/* Desc */}
                <p className="font-sans text-[0.85rem] text-[#6e585c] font-light leading-relaxed max-w-[240px]">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
