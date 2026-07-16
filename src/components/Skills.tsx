"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Skills() {
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

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
      ),
      skills: ["Java", "PHP", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Framework & Tools",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
      ),
      skills: [
        "Android Studio",
        "Visual Studio Code",
        "Figma",
        "Bootstrap",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Database",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
      ),
      skills: ["MySQL", "SQL Server", "SQLite"],
    },
    {
      title: "AI & Computer Vision",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
      ),
      skills: ["OpenCV", "MTCNN", "FaceNet", "K-Nearest Neighbor (KNN)"],
    },
  ];

  return (
    <section id="skills" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Kompetensi
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Keahlian
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[600px] mx-auto mt-4">
            Daftar teknologi dan perangkat pengembangan yang saya kuasai.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className={`p-4 sm:p-10 flex flex-col rounded-2xl sm:rounded-3xl glass-panel h-full transition-all duration-[800ms] ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${groupIdx * 100}ms` }}
            >
              {/* Category Icon */}
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] text-white flex items-center justify-center mb-4 sm:mb-7 shadow-md sm:shadow-lg shadow-[#b3737b]/10 sm:shadow-[#b3737b]/20 shrink-0">
                {React.cloneElement(group.icon as React.ReactElement<{ className?: string }>, {
                  className: "w-5 h-5 sm:w-6 sm:h-6"
                })}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[1rem] sm:text-[1.35rem] font-semibold text-burgundy mb-3 sm:mb-5">
                {group.title}
              </h3>

              {/* Items List */}
              <ul className="flex flex-col gap-[8px] sm:gap-[14px] list-none">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 sm:gap-3 font-sans text-[0.75rem] sm:text-[0.95rem] text-[#6e585c] font-normal">
                    <span className="w-[4px] h-[4px] sm:w-[6px] sm:h-[6px] bg-rose-gold rounded-full shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
