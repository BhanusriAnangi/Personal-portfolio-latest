"use client";

import React from "react";
import { User, ShieldCheck, Zap, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: Terminal,
    title: "Full Stack Development",
    desc: "Proficient in React, Next.js, Angular, Node.js, Express.js, and MongoDB. Building end-to-end applications from custom UIs to robust APIs.",
  },
  {
    icon: Zap,
    title: "Shopify & Theme Customization",
    desc: "Extensive experience building custom Shopify stores. Expert in Liquid, custom sections, metafields, Shopify CLI, and Shopify Admin/Storefront APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Architecture & Practices",
    desc: "Adhere to MVC patterns, clean architecture principles, and strict modularity. Prioritize writing readable, maintainable, and highly-scalable code.",
  },
  {
    icon: Database,
    title: "Performance & DB Optimization",
    desc: "Optimizing database queries with Mongoose, configuring caches, and optimizing frontend load speeds (lazy loading, code-splitting).",
  },
];

const metrics = [
  { value: "2+", label: "Years Experience" },
  { value: "4+", label: "Real-World Projects" },
  { value: "95%", label: "Average Performance" },
  { value: "3+", label: "Live Shopify Deployments" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-indigo-500" />
            <span>About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            A developer dedicated to writing modular, fast, and secure web applications.
          </p>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative & Stats - 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">
              Who is <span className="text-gradient">Bhanu Sri</span>?
            </h3>
            <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed">
              I am a results-driven Full Stack Developer based in Hyderabad, India, with <strong>2+ years of professional experience</strong> building and maintaining scalable web applications and high-converting custom Shopify storefronts. Having worked at firms like <strong>Adab Digital</strong> and <strong>Codetek Software Solutions</strong>, I have developed a strong mastery across both backend services and frontend UI interfaces.
            </p>
            <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed">
              My technical expertise spans modern frameworks like <strong>React.js, Next.js, Vue.js and Angular</strong>, backend technologies like <strong>Node.js, Express.js, and RESTful APIs</strong>, databases such as <strong>MongoDB (Mongoose)</strong>, and custom Shopify development using <strong>Liquid templates, JSON schema, Shopify CLI, and app integrations</strong>. I love translating complex designs and requirements into high-performance, accessible digital solutions.
            </p>
            <p className="text-zinc-650 dark:text-zinc-300 leading-relaxed">
              I am passionate about <strong>Clean Architecture</strong> principles, modular code structure, and optimizing storefront search, checkout, and caching mechanisms. I aim to deliver robust products that elevate business workflows and client satisfaction.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-sm hover:border-indigo-500/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-heading font-black text-indigo-600 dark:text-indigo-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-450 dark:text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Pillars / Strengths - 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-heading font-bold text-zinc-900 dark:text-white mb-2">
              My Primary Pillars
            </h4>
            <div className="space-y-4">
              {strengths.map((strength, idx) => {
                const Icon = strength.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-zinc-900 dark:text-white text-base">
                        {strength.title}
                      </h5>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
