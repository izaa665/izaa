"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import UIUX from "@/components/UIUX";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

import Gallery from "@/components/Gallery";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string>("");

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-element");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects onSelectProject={(id) => setSelectedProject(id)} />
        <UIUX />
        <Gallery />
        <Journey />
        <Contact />
      </main>
      <Footer />

      {/* Lightbox details modal */}
      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject("")}
      />
    </>
  );
}
