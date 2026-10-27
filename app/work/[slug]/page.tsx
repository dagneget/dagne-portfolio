import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, FolderGit2, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PROJECTS, getProjectBySlug } from '@/data/projects';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f2ec] selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
      <Navbar />

      <main className="pt-36 pb-28">
        <div className="wrap max-w-4xl">
          {/* Breadcrumbs & Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#25272c]/60 font-mono text-xs text-[#9197a0]">
            <div className="flex items-center gap-2">
              <Link href="/work" className="hover:text-[#c6ff3d] transition-colors inline-flex items-center gap-1.5">
                <ArrowLeft size={13} /> Work
              </Link>
              <span className="text-[#393d45]">/</span>
              <span className="text-[#f1f2ec]">{project.title}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#c6ff3d]">
                {project.number} // {project.total}
              </span>
            </div>
          </div>

          {/* Hero Heading */}
          <div className="mb-12">
            <span className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider block mb-3">
              {project.category} · {project.timeline}
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.06] mb-6">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#9197a0] font-sans leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Soren Hale Diff Metric Banner */}
          <div className="p-6 sm:p-8 rounded-xl border border-[#25272c] bg-[#14161a] mb-12 shadow-xl">
            <div className="font-mono text-[10px] text-[#606570] tracking-widest uppercase mb-3">
              // Performance & Outcome Metric
            </div>

            <div className="sh-diff text-2xl sm:text-4xl mb-2">
              <s>from {project.diff.from}</s>
              <span className="text-base font-sans text-[#606570] mx-2">→</span>
              <b>to {project.diff.to}</b>
            </div>

            <div className="font-mono text-xs text-[#9197a0]">
              Measured outcome: <span className="text-[#f1f2ec] font-semibold">{project.diff.label}</span>
            </div>
          </div>

          {/* Meta Fast Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg border border-[#25272c] bg-[#101216] mb-16 font-mono text-xs">
            <div>
              <span className="text-[#606570] text-[10px] uppercase block mb-1">Role</span>
              <strong className="text-[#f1f2ec]">{project.role}</strong>
            </div>
            <div>
              <span className="text-[#606570] text-[10px] uppercase block mb-1">Timeline</span>
              <strong className="text-[#f1f2ec]">{project.timeline}</strong>
            </div>
            <div>
              <span className="text-[#606570] text-[10px] uppercase block mb-1">Core Tech</span>
              <strong className="text-[#f1f2ec]">{project.tags[0]}</strong>
            </div>
            <div>
              <span className="text-[#606570] text-[10px] uppercase block mb-1">Source Code</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#c6ff3d] hover:underline inline-flex items-center gap-1"
              >
                <span>GitHub Repo</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Deep Narrative Sections */}
          <div className="space-y-12 text-[#9197a0] font-sans leading-relaxed border-t border-[#25272c] pt-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#f1f2ec] mb-4">Project Overview</h2>
              <p className="text-base leading-relaxed text-[#b8bbb2]">{project.longDescription}</p>
            </section>

            {/* Problem & Solution Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[#25272c] bg-[#14161a]">
                <span className="font-mono text-[10px] text-[#606570] uppercase tracking-wider block mb-2">
                  01 // The Problem
                </span>
                <h3 className="text-lg font-serif font-bold text-[#f1f2ec] mb-2">Initial Challenge</h3>
                <p className="text-sm text-[#9197a0] leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-6 rounded-lg border border-[#25272c] bg-[#14161a]">
                <span className="font-mono text-[10px] text-[#c6ff3d] uppercase tracking-wider block mb-2">
                  02 // The Solution
                </span>
                <h3 className="text-lg font-serif font-bold text-[#f1f2ec] mb-2">Engineered System</h3>
                <p className="text-sm text-[#9197a0] leading-relaxed">{project.solution}</p>
              </div>
            </section>

            {/* Technical Architecture */}
            <section className="p-6 sm:p-8 rounded-xl border border-[#25272c] bg-[#14161a]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#c6ff3d] uppercase tracking-wider mb-4">
                <Cpu size={16} /> Architectural Modules
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#b8bbb2]">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#606570]">0{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#f1f2ec] mb-4">Key Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#101216] border border-[#25272c]">
                    <CheckCircle2 size={16} className="text-[#c6ff3d] shrink-0 mt-0.5" />
                    <span className="text-[#f1f2ec]">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Pills */}
            <section className="pt-6 border-t border-[#25272c]">
              <span className="font-mono text-[10px] text-[#606570] uppercase tracking-wider block mb-3">
                Technologies & Tools Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono text-xs text-[#f1f2ec] bg-[#14161a] border border-[#25272c] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Action Callout */}
          <div className="mt-16 p-8 rounded-xl border border-[#25272c] bg-gradient-to-r from-[#14161a] to-[#101216] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#f1f2ec] mb-1">
                Inspect the Codebase
              </h3>
              <p className="text-xs text-[#9197a0] font-sans">
                Review the commits, code structure, and documentation on GitHub.
              </p>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="sh-btn sh-btn-solid"
            >
              <span>Explore on GitHub</span>
              <span className="sh-btn-icon">
                <ArrowUpRight size={16} />
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>

          {/* Prev / Next Case Study Navigation */}
          <div className="mt-16 pt-8 border-t border-[#25272c] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-5 rounded-lg border border-[#25272c] bg-[#101216] hover:border-[#393d45] transition-colors flex flex-col group"
            >
              <span className="font-mono text-[10px] text-[#606570] uppercase mb-1 flex items-center gap-1">
                ← Previous Case Study
              </span>
              <span className="text-lg font-serif font-bold text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-5 rounded-lg border border-[#25272c] bg-[#101216] hover:border-[#393d45] transition-colors flex flex-col text-right group"
            >
              <span className="font-mono text-[10px] text-[#606570] uppercase mb-1 flex items-center justify-end gap-1">
                Next Case Study →
              </span>
              <span className="text-lg font-serif font-bold text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
