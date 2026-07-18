"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Adab Digital",
    location: "Hyderabad, India (Remote/Hybrid)",
    duration: "June 2024 - Present",
    description:
      "Design, develop, and maintain high-performance web applications using React.js, Angular, Next.js, Node.js, Express.js, and MongoDB. Lead custom Shopify storefront migrations and theme development.",
    bullets: [
      "Engineered custom Shopify store components, Liquid templates, and JSON schemas for live production stores, improving checkout conversion rate and page speed performance metrics.",
      "Developed robust custom storefront capabilities using Shopify CLI, Metafields, and Metaobjects to support customized product options.",
      "Built clean backend RESTful APIs with Node.js and Express.js and integrated JWT and OAuth authentication mechanisms to secure client portals.",
      "Ensured codebase scalability and modularity by enforcing Clean Architecture and MVC design principles.",
      "Worked closely with cross-functional design and product teams to translate pixel-perfect mockups into highly accessible HTML/Tailwind web views.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Codetek Software Solutions",
    location: "Hyderabad, India",
    duration: "June 2023 - June 2024",
    description:
      "Built and maintained full-stack MERN (MongoDB, Express.js, React, Node.js) web applications. Focused on backend query optimization, reusable UI components, and API validation.",
    bullets: [
      "Developed responsive single-page web applications (SPAs) in React.js, resulting in a 30% speed boost through code-splitting, lazy loading, and image assets optimization.",
      "Created secure CRUD REST APIs integrated with Mongoose ODM schemas, handling data operations for internal dashboards.",
      "Conducted extensive API unit testing and debugging using Postman, ensuring error-free endpoints and optimal request/response latency.",
      "Collaborated inside Agile sprints to write modular frontend widgets, conduct source code reviews, and maintain version control with Git/GitHub.",
      "Deployed and configured application backends on cloud platforms (Azure Web Services), setting up custom environment variables and databases.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-55/30 dark:bg-zinc-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-500" />
            <span>Professional Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            My career timeline as a software developer, showing roles, contributions, and achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Indicator Ring */}
              <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 p-2 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 text-indigo-500 shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow relative glass">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-zinc-450 dark:text-zinc-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base text-zinc-650 dark:text-zinc-300 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
