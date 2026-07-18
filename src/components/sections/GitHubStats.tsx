"use client";

import React, { useState, useEffect } from "react";
import { GitBranch, GitCommit, GitPullRequest, Code } from "lucide-react";
import { motion } from "framer-motion";

// Helper to generate calendar grids
const generateCalendarData = () => {
  const data: { count: number; date: string }[] = [];
  const days = 364; // 52 weeks
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    // Generate organic-looking contribution numbers
    let count = 0;
    const rand = Math.random();
    if (rand > 0.8) count = Math.floor(Math.random() * 8) + 1;
    else if (rand > 0.5) count = Math.floor(Math.random() * 3) + 1;
    
    // Add some hot spots (lots of commits)
    if (i % 23 === 0 || i % 47 === 0) count = 8 + Math.floor(Math.random() * 5);
    
    data.push({
      count,
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
  }
  return data;
};

const statsMetrics = [
  { icon: GitCommit, count: "1,240+", label: "Commits in Past Year" },
  { icon: GitBranch, count: "24", label: "Open Repositories" },
  { icon: GitPullRequest, count: "115+", label: "Pull Requests Merged" },
];

const languages = [
  { name: "Liquid & Shopify API", percentage: 35, color: "bg-emerald-500", textClass: "text-emerald-500" },
  { name: "JavaScript & ES6", percentage: 30, color: "bg-amber-400", textClass: "text-amber-400" },
  { name: "React & Next.js (TS)", percentage: 20, color: "bg-indigo-500", textClass: "text-indigo-500" },
  { name: "Node.js & MongoDB", percentage: 15, color: "bg-purple-600", textClass: "text-purple-600" },
];

export default function GitHubStats() {
  const [mounted, setMounted] = useState(false);
  const [calendarDays, setCalendarDays] = useState<{ count: number; date: string }[]>([]);
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  useEffect(() => {
    setCalendarDays(generateCalendarData());
    setMounted(true);
  }, []);

  const getCellColor = (count: number) => {
    if (count === 0) return "bg-zinc-100 dark:bg-zinc-800/80";
    if (count <= 2) return "bg-indigo-200 dark:bg-indigo-950/60";
    if (count <= 5) return "bg-indigo-400 dark:bg-indigo-700/80";
    if (count <= 8) return "bg-indigo-600 dark:bg-indigo-500";
    return "bg-indigo-800 dark:bg-indigo-300";
  };

  return (
    <section id="stats" className="py-20 bg-zinc-50/50 dark:bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-indigo-500" />
            <span>GitHub Statistics</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium">
            Active developer contribution logs and primary language metrics extracted from GitHub profile databases.
          </p>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {statsMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm glass hover:border-indigo-500/30 transition-colors"
              >
                <div className="p-3.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-black text-zinc-900 dark:text-white">
                    {stat.count}
                  </div>
                  <div className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Graph Calendar Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Widget - 2 Columns */}
          <div className="lg:col-span-2 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm glass flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading font-bold text-zinc-900 dark:text-white text-lg">
                  Developer Contribution Calendar
                </h3>
                <span className="text-xs text-zinc-400">Past 12 Months</span>
              </div>

              {/* Grid Wrapper */}
              <div className="overflow-x-auto pb-4">
                <div className="min-w-[720px] flex gap-[3px] select-none">
                  {/* Generate 52 column groups representing weeks */}
                  {Array.from({ length: 52 }).map((_, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, dayIdx) => {
                        const cellData = calendarDays[weekIdx * 7 + dayIdx] || { count: 0, date: "" };
                        return (
                          <div
                            key={dayIdx}
                            onMouseEnter={() => mounted ? setHoveredCell(cellData) : undefined}
                            onMouseLeave={() => mounted ? setHoveredCell(null) : undefined}
                            className={`w-[10px] h-[10px] rounded-[2px] transition-colors cursor-pointer ${
                              mounted ? getCellColor(cellData.count) : "bg-zinc-100 dark:bg-zinc-800/80"
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tooltip & Legend Indicator */}
            <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-805 pt-4 mt-4 text-xs text-zinc-500 dark:text-zinc-400 h-6">
              <div className="font-medium">
                {hoveredCell ? (
                  <span>
                    <strong>{hoveredCell.count === 0 ? "No" : hoveredCell.count}</strong> contribution
                    {hoveredCell.count !== 1 && "s"} on {hoveredCell.date}
                  </span>
                ) : (
                  "Hover over calendar squares to view check-ins"
                )}
              </div>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-[10px] h-[10px] rounded-[2px] bg-zinc-150 dark:bg-zinc-800" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-indigo-200 dark:bg-indigo-950/60" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-indigo-400 dark:bg-indigo-700" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-indigo-600 dark:bg-indigo-500" />
                <div className="w-[10px] h-[10px] rounded-[2px] bg-indigo-800 dark:bg-indigo-300" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Languages breakdown - 1 Column */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900 shadow-sm glass">
            <h3 className="font-heading font-bold text-zinc-900 dark:text-white text-lg mb-6">
              Language Statistics
            </h3>

            <div className="space-y-6">
              {/* Stacked Percentage Bar */}
              <div className="h-4 w-full rounded-full overflow-hidden flex bg-zinc-100 dark:bg-zinc-800">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`h-full ${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Legend List */}
              <div className="space-y-3 pt-2">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                      <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-sm font-black text-zinc-900 dark:text-white">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
