"use client";

import React, { useEffect, useState } from "react";
import { Download, Mail, ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React & Next.js Developer",
  "Shopify Theme Engineer",
  "MERN Stack Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id: string) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg"
    >
      {/* Decorative Blob 1 */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      {/* Decorative Blob 2 */}
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-6"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span>Available for Roles & Projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-zinc-900 dark:text-white"
        >
          Hi, I&apos;m <span className="text-gradient">Bhanu Sri</span>
        </motion.h1>

        {/* Typed Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 sm:h-12 mt-4 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-zinc-600 dark:text-zinc-350"
        >
          <span>I am a&nbsp;</span>
          <span className="text-zinc-900 dark:text-white border-r-2 border-indigo-500 dark:border-indigo-400 pr-1 cursor-blink">
            {displayText}
          </span>
        </motion.div>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
        >
          Results-driven Full Stack Developer with 2+ years of experience building scalable web applications and custom Shopify stores. Specializing in MERN stack, custom storefront architectures, performance optimization, and crafting premium, responsive UI/UX.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <a
            href="/Bhanu resume.pdf"
            download="Anangi_Bhanu_Sri_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <button
            onClick={() => handleScrollTo("projects")}
            className="flex items-center justify-center gap-1 w-full sm:w-auto px-6 py-3 border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-800 dark:text-zinc-200 font-medium rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
          >
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-800 dark:text-zinc-200 font-medium rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Scroll down mouse indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none hidden sm:flex"
        >
          <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-semibold">
            Scroll Down
          </span>
          <ArrowDown className="w-4 h-4 text-indigo-500 animate-bounce mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
