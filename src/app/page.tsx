"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-indigo-500/20 selection:text-indigo-650 dark:selection:bg-indigo-400/20 dark:selection:text-indigo-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Professional Experience Section */}
      <Experience />

      {/* Projects Section with Case Studies */}
      <Projects />

      {/* Education & Certifications Section */}
      <Education />

      {/* Validated Contact Form Section */}
      <Contact />

      {/* Site Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <BackToTop />
    </main>
  );
}
