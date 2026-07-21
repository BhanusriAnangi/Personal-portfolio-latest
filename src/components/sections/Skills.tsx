"use client";

import React from "react";
import { Laptop, Server, ShoppingBag, Wrench, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    icon: Laptop,
    glowColor: "from-blue-500/20 to-indigo-500/20",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js 15", level: 90 },
      { name: "Angular", level: 80 },
      { name: "Vue.js", level: 80 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Server,
    glowColor: "from-emerald-500/20 to-teal-500/20",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "MongoDB & Mongoose", level: 88 },
      { name: "JWT Authentication", level: 90 },
      { name: "Nest.js", level: 70 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Shopify Development",
    icon: ShoppingBag,
    glowColor: "from-pink-500/20 to-purple-500/20",
    skills: [
      { name: "Liquid Templates", level: 95 },
      { name: "Theme Customization", level: 95 },
      { name: "Custom Sections / JSON", level: 95 },
      { name: "Metafields & Metaobjects", level: 90 },
      { name: "Shopify CLI", level: 88 },
      { name: "Shopify Admin API", level: 85 },
      { name: "Storefront API", level: 80 },
      { name: "Shopify Functions", level: 80 },
      { name: "App Integration", level: 90 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    glowColor: "from-amber-500/20 to-orange-500/20",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "GitHub Actions (CI/CD)", level: 85 },
      { name: "Postman", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "AWS Services", level: 70 },
      { name: "Vercel Deployments", level: 90 },
      { name: "Firebase & Azure", level: 78 },
      { name: "Webflow & WordPress", level: 80 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decorative grids */}
      <div className="absolute inset-0 bg-grid-zinc-950/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <BarChart2 className="w-8 h-8 text-indigo-500" />
            <span>Skills & Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            A breakdown of languages, frameworks, developer tools, and e-commerce platforms I work with.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((categoryData, catIdx) => {
            const Icon = categoryData.icon;
            return (
              <motion.div
                key={catIdx}
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900/50 p-6 md:p-8 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/20 transition-all group glass"
              >
                {/* Accent glow on top left corner */}
                <div
                  className={`absolute -top-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br ${categoryData.glowColor} blur-2xl group-hover:scale-150 transition-transform duration-500`}
                />

                {/* Card Title */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white">
                    {categoryData.category}
                  </h3>
                </div>

                {/* Skills Badges and Bars */}
                <div className="space-y-4 relative z-10">
                  {categoryData.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-zinc-700 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">{skill.level}%</span>
                      </div>
                      {/* Progress Bar Container */}
                      <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
