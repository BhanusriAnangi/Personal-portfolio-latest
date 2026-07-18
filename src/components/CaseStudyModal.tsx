"use client";

import React, { useEffect } from "react";
import { X, Github, ExternalLink, Code2, ShieldAlert, Award, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ProjectData = {
  title: string;
  tagline: string;
  category: "Shopify" | "Full Stack";
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  responsibilities: string[];
  tech: string[];
  challenges: string;
  impact: string;
  github?: string;
  demo?: string;
};

type CaseStudyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
};

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-y-auto z-10 glass"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between z-20">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                  {project.category} Project Case Study
                </span>
                <h2 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mt-0.5">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Main Narrative (2/3 width) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Tagline & Overview */}
                <div className="space-y-3">
                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 italic">
                    &ldquo;{project.tagline}&rdquo;
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Business Problem */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    Business Problem
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    The Solution
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-indigo-500" />
                    Key Features Implemented
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-300">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges Faced */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-500" />
                    Technical Challenges
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>

              {/* Right Column: Meta Info, Tech Stack & Impact (1/3 width) */}
              <div className="space-y-8 bg-zinc-50 dark:bg-zinc-950 p-6 rounded-xl border border-zinc-150 dark:border-zinc-800/80">
                {/* Call To Actions */}
                <div className="flex flex-col gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md transition-colors w-full"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                </div>

                {/* Business Impact / Metrics */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Results & Impact
                  </h4>
                  <div className="p-4 bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 rounded-lg flex gap-3 items-start">
                    <Award className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-800 dark:text-emerald-400 font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold rounded bg-zinc-200 dark:bg-zinc-850 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    My Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
