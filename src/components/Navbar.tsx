"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      threshold: 0.25,
      rootMargin: "0px 0px -25% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id") || "");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { label: "Tentang Saya", href: "#about", id: "about" },
    { label: "Keahlian", href: "#skills", id: "skills" },
    { label: "Proyek", href: "#projects", id: "projects" },
    { label: "UI/UX Design", href: "#uiux", id: "uiux" },
    { label: "Galeri", href: "#gallery", id: "gallery" },
    { label: "Tujuan", href: "#goals", id: "goals" },
    { label: "Hubungi Saya", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 flex items-center ${
        isScrolled
          ? "bg-[#fffcfd]/75 backdrop-blur-md h-[70px] border-b border-[#b3737b]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-[1.8rem] font-bold text-burgundy tracking-wide flex items-center gap-2"
        >
          AM
          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#ecc8c5] to-[#b3737b]"></span>
        </a>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle lg:hidden flex flex-col gap-[6px] cursor-pointer p-1"
          aria-label="Toggle Menu Navigasi"
        >
          <span
            className={`w-[25px] h-[2px] bg-burgundy transition-all duration-300 ${
              isOpen ? "transform translate-y-[8px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[2px] bg-burgundy transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-[25px] h-[2px] bg-burgundy transition-all duration-300 ${
              isOpen ? "transform -translate-y-[8px] -rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-sans text-[0.95rem] text-[#6e585c] hover:text-burgundy relative py-1 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-gold after:transition-all after:duration-200 hover:after:w-full ${
                  activeSection === link.id ? "text-burgundy after:w-full" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-sans text-[0.85rem] font-medium border border-[#ecc8c5] text-burgundy py-[10px] px-6 rounded-full bg-white/45 backdrop-blur-sm transition-all duration-300 hover:bg-[#ecc8c5]/25 hover:border-rose-gold hover:-translate-y-[2px]"
            >
              Kontak
            </a>
          </li>
        </ul>

        {/* Mobile Nav Drawer */}
        <div
          className={`fixed top-0 right-0 w-[280px] h-screen bg-[#fffcfd]/98 backdrop-blur-md border-l border-[#b3737b]/10 shadow-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 z-40 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-sans text-[1.1rem] text-[#6e585c] hover:text-burgundy transition-colors ${
                activeSection === link.id ? "text-burgundy font-medium" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-sans text-[0.95rem] font-medium border border-[#ecc8c5] text-burgundy py-[10px] px-8 rounded-full bg-white/45 backdrop-blur-sm transition-all duration-300 hover:bg-[#ecc8c5]/25 hover:border-rose-gold"
          >
            Kontak
          </a>
        </div>
      </div>
    </header>
  );
}
