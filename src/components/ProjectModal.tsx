"use client";

import React, { useEffect } from "react";

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = "hidden"; // Lock background scroll
    }
    return () => {
      document.body.style.overflow = ""; // Unlock
    };
  }, [projectId]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!projectId) return null;

  // Project data mapping
  const projectData: Record<
    string,
    {
      title: string;
      category: string;
      techs: string[];
      status: string;
      description: string;
      role: string;
      timeline: string;
      liveUrl?: string;
      githubUrl?: string;
    }
  > = {
    qland: {
      title: "Qland – Aplikasi Pembelajaran Al-Qur'an",
      category: "Aplikasi Android Mobile",
      techs: ["Java", "Android Studio", "SQLite", "XML"],
      status: "Selesai",
      description:
        "Qland merupakan aplikasi Android yang dirancang sebagai media pembelajaran Al-Qur'an dengan tampilan modern dan interaktif. Aplikasi ini menyediakan berbagai fitur untuk membantu pengguna dalam membaca, mempelajari, dan menghafal Al-Qur'an melalui pengalaman belajar yang lebih menarik. Fitur Utama mencakup Membaca Al-Qur'an, Audio Murottal, Bookmark Hafalan, Quiz Interaktif, dan Progress Pembelajaran.",
      role: "Developer & Designer",
      timeline: "Selesai",
    },
    smartattendance: {
      title: "Smart Attendance – Face Recognition Attendance System",
      category: "Kecerdasan Buatan & Computer Vision",
      techs: ["Python", "Flask", "OpenCV", "MTCNN", "FaceNet", "KNN", "MySQL"],
      status: "Selesai",
      description:
        "Smart Attendance merupakan sistem absensi berbasis pengenalan wajah yang memanfaatkan teknologi Computer Vision dan Machine Learning. Sistem ini menggunakan MTCNN untuk mendeteksi wajah, FaceNet untuk menghasilkan face embedding, serta algoritma K-Nearest Neighbor (KNN) untuk mengenali identitas pengguna sebelum proses absensi dilakukan secara otomatis. Dirancang untuk meningkatkan efisiensi proses absensi sekaligus meminimalkan potensi kecurangan. Fitur Utama mencakup Face Detection, Face Recognition, Absensi Otomatis, Dashboard Admin, dan Riwayat Kehadiran.",
      role: "Developer & Designer",
      timeline: "Selesai",
      githubUrl: "https://github.com/izaa665/Smart_Attendance",
    },
    photobox: {
      title: "PhotoBox – Aplikasi Web Photo Booth (Photomatics)",
      category: "Aplikasi Web",
      techs: ["React.js", "Vite", "HTML5 Canvas", "PHP", "PHPMailer"],
      status: "Selesai",
      description:
        "PhotoBox merupakan aplikasi web photo booth interaktif (seperti photomatics) yang memungkinkan pengguna melakukan pengambilan foto langsung secara online menggunakan webcam atau kamera perangkat mereka. Aplikasi ini dilengkapi dengan filter warna estetis, opsi template kolase grid foto, penghitung waktu mundur (countdown), serta fitur untuk mengunduh hasil kolase foto secara instan. Fitur Utama mencakup Pengambilan Foto Real-time, Filter Estetis (Retro, B&W, Warm), Pilihan Grid/Layout Kolase, Countdown Timer, dan Unduh Foto Instan.",
      role: "Developer",
      timeline: "Selesai",
    },
    smartcafe: {
      title: "Sraddha Coffee – Website Pemesanan Menu",
      category: "E-Commerce / F&B",
      techs: ["PHP", "MySQL", "JavaScript", "CSS"],
      status: "Selesai",
      description:
        "Sraddha Coffee merupakan website pemesanan makanan dan minuman digital yang memudahkan pelanggan melakukan pemesanan langsung dari meja mereka. Setiap pesanan masuk langsung terkirim ke panel admin kasir secara real-time untuk pelayanan yang lebih cepat dan efisien. Fitur Utama mencakup Menu Digital Interaktif, Pemesanan Mandiri dari Meja, Keranjang Belanja, Cetak Invoice Transaksi, dan Halaman Administrasi Kasir.",
      role: "Developer",
      timeline: "Selesai",
      liveUrl: "https://projekcafe.vercel.app/",
      githubUrl: "https://github.com/izaa665/Brew-Bites",
    },
    laundrymgmt: {
      title: "CleanWave Laundry – Website Jasa Laundry",
      category: "Landing Page",
      techs: ["HTML", "CSS", "JavaScript"],
      status: "Selesai",
      description:
        "CleanWave Laundry merupakan website profil usaha jasa laundry modern untuk memperkenalkan paket layanan cuci premium, daftar harga, alur cara kerja cuci, serta kemudahan memesan jasa laundry langsung terintegrasi WhatsApp. Fitur Utama mencakup Landing Page Informasi Bisnis, Daftar Harga Paket Laundry, Alur Cara Kerja, dan Integrasi WhatsApp Direct Order.",
      role: "Developer",
      timeline: "Selesai",
      liveUrl: "https://laundry-rho-six.vercel.app/",
    },
    webservice: {
      title: "FunCode – Website Jasa Pembuatan Website",
      category: "Landing Page",
      techs: ["HTML", "CSS", "JavaScript"],
      status: "Selesai",
      description:
        "FunCode merupakan landing page interaktif yang digunakan untuk mengenalkan penawaran jasa pembuatan website premium secara profesional. Website ini dilengkapi dengan perincian layanan, profil perusahaan, serta tombol melayang konsultasi instan WhatsApp. Fitur Utama mencakup Landing Page Promosi, Profil Bisnis, Detail Paket Layanan, dan Tombol Melayang Konsultasi WhatsApp.",
      role: "Developer & Designer",
      timeline: "Selesai",
      liveUrl: "https://funcode-jasa.vercel.app/",
      githubUrl: "https://github.com/izaa665/FunTech",
    },
  };

  const project = projectData[projectId];
  if (!project) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed top-0 left-0 w-full h-full bg-[#54162b]/35 backdrop-blur-md z-[2000] flex items-center justify-center p-6 animate-fade-in"
    >
      <div className="w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-3xl glass-panel relative p-8 sm:p-10 animate-zoom-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#b3737b]/10 flex items-center justify-center text-burgundy cursor-pointer hover:bg-rose-gold hover:text-white hover:rotate-90 transition-all duration-300"
          aria-label="Tutup Rincian Proyek"
        >
          &times;
        </button>

        {/* Title & Info */}
        <h2 className="font-serif text-[1.8rem] sm:text-[2rem] font-bold text-burgundy mb-2 leading-snug">
          {project.title}
        </h2>
        <span className="font-sans text-[0.85rem] font-semibold text-rose-gold uppercase tracking-wider block mb-6">
          {project.category}
        </span>

        {/* Scrollable Images Container (Carousel) */}
        <div className="w-full mb-6 flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 hide-scrollbar">
          {[1, 2, 3].map((index) => (
            <div 
              key={index} 
              className="w-[85%] sm:w-[90%] shrink-0 h-[220px] rounded-2xl bg-gradient-to-br from-rose-gold-light/20 to-[#b3737b]/15 flex flex-col items-center justify-center text-burgundy border border-white/50 snap-center relative overflow-hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-12 h-12 mb-2 opacity-70"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                <path d="M12 18L12 6M6 12L18 12" strokeDasharray="2 2"></path>
              </svg>
              <span className="font-serif text-[1.2rem] font-semibold">
                Gambar {index}
              </span>
              <span className="font-sans text-[0.75rem] text-[#6e585c] mt-2">
                (Ganti dengan tag &lt;img&gt; nanti)
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="font-sans text-[1rem] text-[#6e585c] font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-b border-[#b3737b]/15 pb-6 mb-8">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[0.75rem] font-semibold text-[#6e585c] uppercase tracking-wider">
              Peran Saya
            </span>
            <span className="font-sans text-[0.95rem] font-medium text-burgundy">
              {project.role}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-sans text-[0.75rem] font-semibold text-[#6e585c] uppercase tracking-wider">
              Durasi Kerja
            </span>
            <span className="font-sans text-[0.95rem] font-medium text-burgundy">
              {project.timeline}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-sans text-[0.75rem] font-semibold text-[#6e585c] uppercase tracking-wider">
              Status Proyek
            </span>
            <span className="font-sans text-[0.95rem] font-medium text-burgundy">
              {project.status}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-sans text-[0.75rem] font-semibold text-[#6e585c] uppercase tracking-wider">
              Teknologi
            </span>
            <div className="flex gap-[6px] flex-wrap mt-1">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="font-sans text-[0.75rem] font-medium py-[2px] px-[8px] rounded bg-rose-gold/10 text-burgundy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl || "#"}
            target={project.liveUrl ? "_blank" : undefined}
            rel={project.liveUrl ? "noopener noreferrer" : undefined}
            className={`flex-grow inline-flex items-center justify-center py-3 px-6 font-medium rounded-full text-white bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] transition-all duration-300 ${project.liveUrl ? "hover:shadow-lg hover:shadow-[#b3737b]/20 hover:-translate-y-[2px]" : "opacity-50 cursor-not-allowed"}`}
          >
            Lihat Demo Live
          </a>
          <a
            href={project.githubUrl || "#"}
            target={project.githubUrl ? "_blank" : undefined}
            rel={project.githubUrl ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center justify-center py-3 px-6 font-medium rounded-full text-burgundy bg-white/45 border border-[#ecc8c5] transition-all duration-300 ${project.githubUrl ? "hover:bg-[#ecc8c5]/25 hover:-translate-y-[2px]" : "opacity-50 cursor-not-allowed"}`}
          >
            Kode Sumber
          </a>
        </div>
      </div>
    </div>
  );
}
