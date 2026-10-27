'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, FolderGit2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PROJECTS, Project } from '@/data/projects';

const CATEGORIES = ['All', 'AI & ML', 'Cloud Security', 'Web & Desktop'] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI & ML') return p.category.includes('AI') || p.category.includes('Extraction');
    if (selectedCategory === 'Cloud Security') return p.category.includes('Security');
    if (selectedCategory === 'Web & Desktop') return p.category.includes('Desktop') || p.category.includes('Web') || p.category.includes('Frontend');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f2ec] selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
      <Navbar />

      <main className="pt-36 pb-28">
        <div className="wrap">
          {/* Header Eyebrow & Title */}
          <div className="mb-14 pb-8 border-b border-[#25272c]/60">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9197a0] hover:text-[#c6ff3d] transition-colors">
                <ArrowLeft size={14} /> Back to Home
              </Link>
              <span className="text-[#393d45]">/</span>
              <span className="font-mono text-xs text-[#c6ff3d]">// 01</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Work Archive
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              Seven products, <br />
              <span className="italic font-normal text-[#9197a0]">each one measured</span>
              <span className="text-[#c6ff3d]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] max-w-2xl font-sans leading-relaxed">
              Every project starts with an unverified or manual baseline and ends with working, measured software. Open any case study for the technical breakdown.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => {
                      if (cat === 'AI & ML') return p.category.includes('AI') || p.category.includes('Extraction');
                      if (cat === 'Cloud Security') return p.category.includes('Security');
                      if (cat === 'Web & Desktop') return p.category.includes('Desktop') || p.category.includes('Web') || p.category.includes('Frontend');
                      return true;
                    }).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#c6ff3d] text-[#0b0c0e] font-semibold'
                      : 'bg-[#14161a] border border-[#25272c] text-[#9197a0] hover:text-[#f1f2ec] hover:border-[#393d45]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-[#0b0c0e]/80' : 'text-[#606570]'}`}>
                    0{count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Project List Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-xl border border-[#25272c] bg-[#14161a] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#c6ff3d]/60 hover:bg-[#181b20] hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between font-mono text-xs text-[#606570] mb-4 pb-3 border-b border-[#25272c]">
                      <span className="font-bold text-[#c6ff3d]">
                        {project.number} // {project.total}
                      </span>
                      <span className="text-[#9197a0] text-[10px] uppercase">{project.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f1f2ec] mb-3 group-hover:text-[#c6ff3d] transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-[#9197a0] font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Diff Metric */}
                    <div className="mb-6 pt-3 border-t border-[#25272c]">
                      <div className="sh-diff mb-1 text-xl sm:text-2xl">
                        <s>from {project.diff.from}</s>
                        <span className="text-xs font-sans text-[#606570] mx-1">→</span>
                        <b>to {project.diff.to}</b>
                      </div>
                      <div className="font-mono text-[9px] text-[#606570] uppercase tracking-wider">
                        {project.diff.label}
                      </div>
                    </div>
                  </div>

                  {/* Foot Action Row */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[9px] font-mono text-[#b8bbb2] bg-[#101216] border border-[#25272c] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#25272c] flex items-center justify-between">
                      <Link
                        href={`/work/${project.slug}`}
                        className="sh-btn sh-btn-solid text-xs h-10 px-4"
                      >
                        <span>Read case study</span>
                        <span className="sh-btn-icon w-6 h-6">
                          <ArrowUpRight size={14} />
                          <ArrowUpRight size={14} />
                        </span>
                      </Link>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-[#9197a0] hover:text-[#c6ff3d] inline-flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
