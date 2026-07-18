"use client";

import React, { useState } from "react";
import { FolderGit2, Github, ExternalLink, Info, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyModal, { ProjectData } from "../CaseStudyModal";

const projects: ProjectData[] = [
  {
    title: "Aptronix E-commerce Platform",
    tagline: "Live Apple Reseller Shopify storefront optimization and custom component architecture.",
    category: "Shopify",
    overview: "A high-performance custom theme optimization and feature implementation for Aptronix, India's leading Apple Premium Reseller. The storefront handles millions of monthly visitors and features custom checkout streams, dynamic specifications selectors, and localized brick-and-mortar store inventory indicators.",
    problem: "The client suffered from sluggish load times on mobile devices, complex multi-variant configuration friction (e.g. storage capacity, color, and service plan variants), and an unoptimized cart checkout funnel, raising cart abandonment rates.",
    solution: "Designed and engineered a custom Liquid-based theme overlay with a lightweight vanilla JavaScript state engine. Modeled granular variants specifications using Shopify Metafields and Metaobjects, avoiding heavy plugins and lowering render times.",
    features: [
      "Custom product variant configuration layout",
      "Dynamic real-time store inventory display",
      "Optimized AJAX slideout cart with order upsells",
      "Advanced predictive search and tag filter systems",
      "Responsive, accessible mobile catalog drawer",
    ],
    responsibilities: [
      "Wrote custom Liquid template files and JSON schema configurations using Shopify CLI.",
      "Coded dynamic variant state logic in native ES6 JavaScript.",
      "Optimized static files, fonts, and images, lowering page weight.",
      "Integrated Shopify Admin and Storefront APIs to automate bulk price syncs.",
    ],
    tech: ["Shopify CLI", "Liquid", "JavaScript", "Shopify Admin API", "Metafields", "Metaobjects", "AJAX Cart", "Tailwind CSS"],
    challenges: "Synchronizing intricate Apple product variant bundles without bloating Liquid templates or triggering DOM performance flags. Resolved by building a client-side JavaScript engine that matches selected variant hashes to cache details in under 10ms.",
    impact: "Drove mobile conversion rates up by 22% and reduced Google Lighthouse PageSpeed interactive delay by 1.8 seconds.",
    demo: "https://aptronixindia.com/",
    github: "https://github.com/bhanuannagi1",
  },
  {
    title: "Bake Beauty Store",
    tagline: "Premium cosmetics brand theme development with customized visual builders.",
    category: "Shopify",
    overview: "A visually striking Shopify storefront built for Bake Beauty, a modern cosmetic and skincare company. Designed to support media-rich banner grids, customizable product specification tabs, and high-speed collection filtering.",
    problem: "Generic Shopify templates did not convey the brand's aesthetic. Additionally, the marketing team was unable to configure landing pages or product description layouts without developer assistance.",
    solution: "Developed a bespoke theme using Shopify CLI, configuring modular drag-and-drop sections. Integrated Tailwind CSS for modular layouts, yielding a clean skincare design catalog with custom JSON schemas.",
    features: [
      "Custom drag-and-drop section customizers for marketing",
      "Dynamic interactive skincare recommendation quiz",
      "Performance-tuned collection grid lazy loading",
      "Media-rich product galleries with video integration",
      "Integrated customer review modules and rewards systems",
    ],
    responsibilities: [
      "Designed and coded custom theme sections and collection filters.",
      "Set up dynamic video-on-scroll scripts using browser Intersection Observers.",
      "Implemented SEO structures (JSON-LD structured data and meta tags).",
      "Optimized theme assets for mobile page speed scores.",
    ],
    tech: ["Shopify CLI", "Liquid", "JavaScript", "Tailwind CSS", "JSON Templates", "SEO Optimization", "CSS Grid"],
    challenges: "Serving multiple high-definition skincare tutorial videos on product pages without delaying layout rendering. Resolved by coding an intersection-based player launcher that loads iframe videos only when visible.",
    impact: "Achieved a 94+ Lighthouse Mobile Performance score and decreased bounce rate on collection views by 15%.",
    demo: "https://bakedbeauty.in/?srsltid=AfmBOooo4LuRTHMb0jv7RcA7C560B3ZyoOrw4VlVX1ltgOrSgg0E1mMD",
    github: "https://github.com/bhanuannagi1",
  },
  {
    title: "G-1 Nutrition Store",
    tagline: "Custom checkout function rules and dynamic inventory indicators.",
    category: "Shopify",
    overview: "A specialized health and fitness supplement e-commerce site featuring customized Shopify Functions for pricing discounts, dynamic product banners, and automated stock alerts.",
    problem: "Standard Shopify checkout limits did not support custom tier-discounts based on mix-and-match supplement flavors. The team also needed clear real-time stock alerts to avoid back-ordering.",
    solution: "Leveraged Shopify Functions API to write custom server-side discount logic. Modeled dynamic stock alert badges utilizing metafield thresholds and AJAX inventory queries on product load.",
    features: [
      "Shopify Functions custom checkout pricing rules",
      "AJAX-driven real-time low stock indicator flags",
      "Subscription flow integrations for monthly supplements",
      "Flexible dynamic grid sections for product benefits",
    ],
    responsibilities: [
      "Scripted discount query logic using Shopify Functions schema rules.",
      "Built custom sections for supplement ingredient specs and reviews.",
      "Integrated subscription APIs (Recharge/Shopify Subscriptions).",
    ],
    tech: ["Shopify Functions", "Liquid", "Shopify CLI", "Metafields", "GraphQL", "AJAX", "Responsive Design"],
    challenges: "Building custom billing rules inside Shopify's checkout engine. Resolved by coding input/output schemas matching Shopify's billing specifications and testing with graphql-mocks.",
    impact: "Increased bulk supplements checkout rates by 28% and reduced out-of-stock checkouts by 95%.",
    demo: "https://g-1nutrition.co.uk/",
    github: "https://github.com/bhanuannagi1",
  },
 
  {
    title: "Somany Ceramics",
    tagline: "Next-generation enterprise portal connecting dealers with real-time stock access and streamlined order management.",
    category: "Full Stack",
    overview: "A high-performance B2B distributor portal and order management system built for Somany Ceramics. Designed to connect thousands of dealers and distributors nationwide with real-time inventory checks, trade discounts, order placement pipelines, and instant shipment tracking.",
    problem: "Dealers and distributors struggled with slow phone/email order confirmations, a lack of real-time inventory visibility across regional warehouses, and delayed access to account statements, resulting in transaction friction.",
    solution: "Built a responsive Single Page Application (SPA) using Vue.js for real-time dealer interactions. Powered the application with a robust PHP Laravel backend API, deploying the stack on AWS utilizing RDS PostgreSQL for transaction integrity, S3 for high-res product catalogs, and Redis for caching.",
    features: [
      "Real-time tile & bathware product catalog with dynamic stock status",
      "Automated B2B dealer pricing engine with custom trade volume discounts",
      "Interactive digital showroom helper and instant invoice generator",
      "Order tracking system integrated with major domestic logistics APIs",
    ],
    responsibilities: [
      "Developed the responsive frontend dashboard using Vue.js 3, Pinia, and Tailwind CSS.",
      "Engineered high-throughput REST APIs in PHP Laravel with strict request validations.",
      "Configured AWS RDS PostgreSQL database indexes and Amazon S3 asset uploading.",
      "Integrated AWS CloudFront CDN caching to speed up high-definition tile image delivery.",
    ],
    tech: ["Vue.js 3", "Laravel 11", "PHP", "AWS RDS", "Amazon S3", "Redis", "Pinia", "Tailwind CSS"],
    challenges: "Serving thousands of high-definition tile and sanitaryware catalog photos without hurting page load speed. Resolved by implementing progressive image loading in Vue.js, configuring AWS CloudFront CDN caching, and utilizing Redis key-value caching in Laravel to reduce database load.",
    impact: "Increased dealer order processing speed by 45%, eliminated stock level discrepancies, and reduced page interactive delay by 1.8 seconds.",
    github: "https://github.com/bhanuannagi1",
    demo: "https://www.somanyceramics.com/",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Shopify" | "Full Stack">("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const openCaseStudy = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-zinc-55/10 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <FolderGit2 className="w-8 h-8 text-indigo-500" />
            <span>Featured Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            Explore professional projects spanning high-converting custom Shopify storefronts and scalable full-stack web applications.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-semibold text-zinc-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </div>
          {(["All", "Shopify", "Full Stack"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95 ${
                filter === cat
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-350 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="group flex flex-col justify-between h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-805 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/20 overflow-hidden transition-all glass"
              >
                {/* Upper Content */}
                <div className="p-6">
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-450 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.tagline}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-650 dark:text-zinc-350 border border-zinc-200 dark:border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-zinc-100 dark:bg-zinc-800/50 text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Lower Card Actions */}
                <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-150 dark:border-zinc-805 flex items-center justify-between gap-2 mt-auto">
                  {/* Read Case Study Button */}
                  <button
                    onClick={() => openCaseStudy(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors py-1.5"
                  >
                    <Info className="w-4 h-4" />
                    Case Study
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Lightbox Modal */}
      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </section>
  );
}
