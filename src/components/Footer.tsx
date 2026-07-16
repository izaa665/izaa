"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-burgundy/5 py-12 border-t border-[#b3737b]/10 text-center shrink-0">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-8 flex flex-col items-center gap-4">
        <a href="#" className="font-serif text-[1.5rem] font-bold text-burgundy tracking-wide">
          AM
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#ecc8c5] to-[#b3737b] inline-block ml-1"></span>
        </a>
        <p className="font-sans text-[0.9rem] text-[#6e585c] font-light flex items-center gap-2">
          Didesain & Dikembangkan dengan
          <span className="text-[#e25b74] animate-pulse-heart inline-block">❤️</span>
          oleh Azizahwati Mutmainnah
        </p>
        <p className="font-sans text-[0.8rem] text-[#6e585c]/65 font-light">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi. Dibuat sesuai dengan panduan minimalis modern.
        </p>
      </div>
    </footer>
  );
}
