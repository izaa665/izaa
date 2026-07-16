"use client";

import React, { useEffect, useRef, useState } from "react";

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
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
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "qland",
      title: "Qland – Aplikasi Pembelajaran Al-Qur'an",
      desc: "Qland merupakan aplikasi Android yang dirancang sebagai media pembelajaran Al-Qur'an dengan tampilan modern dan interaktif.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "Android",
      techs: ["Java", "Android Studio", "SQLite", "XML"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11 mb-3 opacity-85">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <circle cx="12" cy="10" r="3" strokeDasharray="3 3"></circle>
          <path d="M9 10 Q12 7, 15 10" />
        </svg>
      )
    },
    {
      id: "smartattendance",
      title: "Smart Attendance – Face Recognition Attendance System",
      desc: "Sistem absensi berbasis pengenalan wajah yang memanfaatkan teknologi Computer Vision dan Machine Learning untuk absensi otomatis.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "Web Application",
      techs: ["Python", "Flask", "OpenCV", "MTCNN", "FaceNet", "KNN", "MySQL"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11 mb-3 opacity-85">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
          <path d="M9 13h.01M15 13h.01" strokeWidth="3"></path>
        </svg>
      )
    },
    {
      id: "photobox",
      title: "PhotoBox – Aplikasi Web Photo Booth (Photomatics)",
      desc: "Aplikasi web photo booth interaktif (seperti photomatics) untuk mengambil foto langsung secara online menggunakan webcam dengan filter estetis dan unduh kolase instan.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "Web Application",
      techs: ["React.js", "Vite", "HTML5 Canvas", "PHP", "PHPMailer"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-11 h-11 mb-3 opacity-85">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      )
    },
    {
      id: "smartcafe",
      title: "Sraddha Coffee – Website Pemesanan Menu",
      desc: "Website pemesanan makanan dan minuman digital yang mempermudah pelanggan memesan langsung dari meja.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "E-Commerce / F&B",
      techs: ["PHP", "MySQL", "JavaScript", "CSS"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-11 h-11 mb-3 opacity-85">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    {
      id: "laundrymgmt",
      title: "CleanWave Laundry – Website Jasa Laundry",
      desc: "Website profil usaha CleanWave Laundry untuk mengenalkan paket cuci premium, daftar harga layanan, dan kemudahan pemesanan via WhatsApp.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "Landing Page",
      techs: ["HTML", "CSS", "JavaScript"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-11 h-11 mb-3 opacity-85">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6" stroke-dasharray="4 2"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      id: "webservice",
      title: "FunCode – Website Jasa Pembuatan Website",
      desc: "Landing page interaktif untuk mengenalkan jasa web development premium dari FunCode, terintegrasi tombol chat langsung via WhatsApp.",
      status: "Selesai",
      statusClass: "bg-[#e1fbf2] text-[#0e8a5f]",
      category: "Landing Page",
      techs: ["HTML", "CSS", "JavaScript"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-11 h-11 mb-3 opacity-85">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      )
    },
    {
      id: "gametopup",
      title: "Topup Gaming – Website Top Up Game",
      desc: "Platform pembelian produk digital dan layanan top up voucher game yang sedang dikembangkan secara modern.",
      status: "Pengembangan",
      statusClass: "bg-[#fff0e1] text-[#c06300]",
      category: "E-Commerce",
      techs: ["PHP", "MySQL", "JavaScript", "CSS"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-11 h-11 mb-3 opacity-85">
          <line x1="6" y1="12" x2="18" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="18"></line>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 relative transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-sans text-[0.85rem] font-semibold text-rose-gold tracking-widest uppercase mb-2 block">
            Studi Kasus
          </span>
          <h2 className="font-serif text-[2.2rem] sm:text-[3.2rem] font-bold text-burgundy relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:width-[60px] after:h-[2px] after:bg-gradient-to-r after:from-[#ecc8c5] after:to-[#b3737b]">
            Project
          </h2>
          <p className="font-sans text-[1.05rem] text-[#6e585c] font-light max-w-[700px] mx-auto mt-4">
            Selama proses belajar dan pengembangan kemampuan, saya telah mengerjakan berbagai proyek dalam bidang pengembangan aplikasi mobile dan website.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => project.id !== "gametopup" && onSelectProject(project.id)}
              className={`group flex flex-col rounded-3xl glass-panel overflow-hidden cursor-pointer transition-all duration-[800ms] ease-out transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${project.id === "gametopup" ? "cursor-not-allowed" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Graphic Mock Image Wrapper */}
              <div className="relative w-full h-[200px] bg-[#fdf5f6] overflow-hidden shrink-0">
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className={`py-1 px-3 rounded-full font-sans font-semibold text-[0.75rem] uppercase tracking-wide ${project.statusClass}`}>
                    {project.status}
                  </span>
                  <span className="py-1 px-3 rounded-full font-sans font-medium text-[0.75rem] text-rose-gold bg-white/60 border border-rose-gold/15">
                    {project.category}
                  </span>
                </div>
                {/* Mock Visual */}
                <div className="w-full h-full flex flex-col items-center justify-center text-rose-gold bg-gradient-to-br from-rose-gold-light/30 to-[#b3737b]/15 p-8 text-center transition-transform duration-500 group-hover:scale-105">
                  {project.icon}
                  <span className="font-serif text-[1.15rem] font-semibold text-burgundy">
                    {project.category} UI
                  </span>
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Techs list */}
                <div className="flex gap-[6px] flex-wrap mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[0.72rem] font-medium py-[3px] px-[10px] rounded-[6px] bg-white/60 border border-rose-gold/10 text-rose-gold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Title */}
                <h3 className="font-serif text-[1.35rem] font-semibold text-burgundy mb-3 group-hover:text-rose-gold transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Desc */}
                <p className="font-sans text-[0.92rem] text-[#6e585c] font-light leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>
                {/* Footer Action */}
                <div className="mt-auto flex items-center justify-between">
                  {project.id === "gametopup" ? (
                    <span className="inline-flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-burgundy/40">
                      Dalam Pengembangan
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-burgundy transition-colors duration-200 group-hover:text-rose-gold">
                      Detail Proyek
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
