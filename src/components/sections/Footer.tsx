"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Subtitle */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="font-heading font-black text-lg text-gradient hover:opacity-90 transition-opacity"
          >
            BHANU SRI
          </a>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1.5 font-medium">
            Full Stack Developer | React & Shopify Engineer
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">
          <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-indigo-500 transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, "skills")} className="hover:text-indigo-500 transition-colors">
            Skills
          </a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, "experience")} className="hover:text-indigo-500 transition-colors">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, "projects")} className="hover:text-indigo-500 transition-colors">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="hover:text-indigo-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Social Badges and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/BhanusriAnangi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-450 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="View Github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhanu-sri-anangi-2963b3248/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-455 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="View LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:bhanuannagi1@gmail.com"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-455 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
            &copy; {new Date().getFullYear()} Bhanu Sri. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
