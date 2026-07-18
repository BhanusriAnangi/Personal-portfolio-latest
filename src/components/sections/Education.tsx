"use client";

import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const educationItems = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Electronics and Communication Engineering (ECE)",
    school: "Siddhartha Institute of Engineering and Technology",
    duration: "2019 - 2023",
    grade: "CGPA: 7.2 / 10",
  },
  {
    degree: "Intermediate in MPC (Maths, Physics, Chemistry)",
    school: "Narayana Junior College",
    duration: "2017 - 2019",
    grade: "Score: 919 / 1000",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Cardinal Gracious High School",
    duration: "2017",
    grade: "GPA: 8.5 / 10",
  },
];

const certifications = [
  {
    title: "Best UI Developer Award",
    issuer: "Codetek Software Solutions",
    year: "2023",
    desc: "Awarded for exceptional user interface design, visual styling excellence, and responsive layout performance optimization.",
  },
  {
    title: "Certified JAVA Developer Associate",
    issuer: "Credential ID: JDAC-24",
    year: "2024",
    desc: "Demonstrated strong knowledge of OOP principles, structures, multi-threading, databases, and algorithms.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-55/10 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-indigo-500" />
            <span>Education & Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            Academic achievements, professional courses, hackathons, and certifications.
          </p>
        </div>

        {/* Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-500" />
              Academic History
            </h3>
            
            <div className="space-y-6 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              {educationItems.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative space-y-2 group"
                >
                  {/* Circle Indicator on timeline */}
                  <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border border-white dark:border-zinc-950 group-hover:scale-150 transition-transform" />
                  
                  <div className="flex items-center gap-2 text-xs text-zinc-450 dark:text-zinc-500 font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  <h4 className="text-lg font-heading font-bold text-zinc-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {edu.degree}
                  </h4>
                  {edu.major && (
                    <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {edu.major}
                    </div>
                  )}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{edu.school}</span>
                  </p>
                  <span className="inline-block mt-1 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                    {edu.grade}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-indigo-500" />
              Certifications & Awards
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow relative glass"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-indigo-650 dark:text-indigo-400 font-bold uppercase tracking-wider">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{cert.issuer}</span>
                      </div>
                      <h4 className="text-lg font-heading font-bold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-850 px-2 py-1 rounded shrink-0 border border-zinc-200 dark:border-zinc-800">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
