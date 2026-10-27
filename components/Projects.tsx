'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
  FileText,
  Users,
  ShieldAlert,
  Building,
  Compass,
  FolderGit2,
  Terminal,
} from 'lucide-react';

import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';


function CardGraphic({ tone }: { tone: Project['tone'] }) {
  if (tone === 'cloud') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#c6ff3d]">
            <ShieldCheck size={14} /> CLOUD_GUARD.DAEMON
          </span>
          <span>AWS REGION: US-EAST-1</span>
        </div>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="p-4 bg-[#14161a] border border-[#25272c] rounded space-y-2 font-mono text-[10px]">
            <div className="text-[#606570]">// SCAN SUMMARY</div>
            <div className="flex justify-between text-[#f1f2ec]">
              <span>IAM Policies</span> <span className="text-[#c6ff3d]">✓ 0 EXPOSURES</span>
            </div>
            <div className="flex justify-between text-[#f1f2ec]">
              <span>S3 Bucket ACLs</span> <span className="text-[#c6ff3d]">✓ SECURED</span>
            </div>
            <div className="flex justify-between text-[#f1f2ec]">
              <span>Security Groups</span> <span className="text-[#f1f2ec]">12 CHECKED</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-28 h-28 rounded-full border border-[#c6ff3d]/20 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#c6ff3d]/40 animate-[spin_30s_linear_infinite]" />
              <ShieldCheck size={36} className="text-[#c6ff3d]" />
            </div>
            <span className="font-mono text-[9px] text-[#9197a0] mt-2 uppercase">
              POSTURE: ENFORCED
            </span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>AUDIT ENGINE: PYTHON 3.12</span>
          <span className="text-[#c6ff3d]">OUTPUT: POSTURE_VERIFIED</span>
        </div>
      </div>
    );
  }

  if (tone === 'ml') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#a9d4b2]">
            <BrainCircuit size={14} /> NLP_INFERENCE_PIPELINE
          </span>
          <span>TF-IDF + CLASSIFIER</span>
        </div>

        <div className="my-6 space-y-3 font-mono text-[11px]">
          <div className="p-3 bg-[#14161a] border border-[#25272c] rounded text-[#9197a0]">
            <span className="text-[#606570] text-[9px] block mb-1">EVALUATED STATEMENT</span>
            &ldquo;Global energy consortium publishes third-party validated quarterly audit.&rdquo;
          </div>

          <div className="p-3 bg-[#14161a] border border-[#25272c] rounded flex items-center justify-between">
            <div>
              <span className="text-[#606570] text-[9px] block">CLASSIFICATION VERDICT</span>
              <span className="text-[#c6ff3d] font-bold text-sm">AUTHENTIC (CREDIBLE)</span>
            </div>
            <div className="text-right">
              <span className="text-[#606570] text-[9px] block">CONFIDENCE SCORE</span>
              <span className="text-[#f1f2ec] font-bold">94.2%</span>
            </div>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>TRAINED ON 40K+ LABELED SAMPLES</span>
          <span className="text-[#a9d4b2]">VALIDATION: 0.94 F1-SCORE</span>
        </div>
      </div>
    );
  }

  if (tone === 'resume') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#e7d6c3]">
            <FileText size={14} /> ENTITY_EXTRACTOR_v2
          </span>
          <span>DOC PARSER · REGEX & NLP</span>
        </div>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-[#14161a] border border-[#25272c] rounded font-mono text-[10px] space-y-1.5 text-[#9197a0]">
            <div className="text-[#606570]">// INGESTED PDF STREAM</div>
            <div className="text-[#f1f2ec]">NAME: Dagnachew Getahun</div>
            <div className="text-[#c6ff3d]">SKILLS: Python, React, AWS</div>
            <div className="text-[#f1f2ec]">EDU: BSc Software Eng.</div>
            <div className="text-[#9197a0]">EXP: Security & ML Labs</div>
          </div>

          <div className="p-3 bg-[#14161a] border border-[#25272c] rounded font-mono text-[10px] text-[#606570] space-y-1">
            <div>// JSON SCHEMA MATCH</div>
            <div className="text-[#f1f2ec]">&#123;</div>
            <div className="pl-2">&quot;candidate_fit&quot;: <span className="text-[#c6ff3d]">0.96</span>,</div>
            <div className="pl-2">&quot;entities_parsed&quot;: <span className="text-[#c6ff3d]">18</span></div>
            <div className="text-[#f1f2ec]">&#125;</div>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>FORMATS: PDF, DOCX, TXT</span>
          <span className="text-[#e7d6c3]">SCHEMA: STRUCTURED_JSON</span>
        </div>
      </div>
    );
  }

  if (tone === 'social') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#e8b4c6]">
            <Users size={14} /> CLOSEKEEP_PWA
          </span>
          <span>PRIVATE CIRCLES ENGINE</span>
        </div>

        <div className="my-5 flex flex-col sm:flex-row items-center justify-around gap-4 p-4 bg-[#14161a] border border-[#25272c] rounded">
          <div className="flex -space-x-2">
            {['D', 'A', 'M', 'K'].map((init, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[#14161a] bg-[#25272c] flex items-center justify-center font-mono text-xs font-bold text-[#c6ff3d]"
              >
                {init}
              </div>
            ))}
          </div>

          <div className="font-mono text-xs text-center sm:text-left">
            <span className="text-[#f1f2ec] font-bold block">Private Inner Circle</span>
            <span className="text-[#606570] text-[10px]">Realtime Activity Timeline</span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>REACT 19 + FIREBASE</span>
          <span className="text-[#e8b4c6]">ZERO ALGORITHMIC NOISE</span>
        </div>
      </div>
    );
  }

  if (tone === 'insurance') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#f1f2ec]">
            <ShieldAlert size={14} className="text-[#c6ff3d]" /> INSURE_TECH_CORE
          </span>
          <span>POLICY & CLAIMS ENGINE</span>
        </div>

        <div className="my-5 p-4 bg-[#14161a] border border-[#25272c] rounded font-mono text-xs space-y-2">
          <div className="flex justify-between items-center text-[10px] text-[#606570]">
            <span>POLICY: POL-88219-ET</span>
            <span className="text-[#c6ff3d]">ACTIVE STATUS</span>
          </div>
          <div className="h-1.5 w-full bg-[#25272c] rounded-full overflow-hidden">
            <div className="h-full bg-[#c6ff3d] w-3/4" />
          </div>
          <div className="flex justify-between text-[10px] text-[#9197a0] pt-1">
            <span>Claim Intake</span>
            <span>Underwriting</span>
            <span className="text-[#c6ff3d]">Approved</span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>RELATIONAL DATABASE SCHEMA</span>
          <span className="text-[#f1f2ec]">ROLE-BASED AUTHORIZATION</span>
        </div>
      </div>
    );
  }

  if (tone === 'hotel') {
    return (
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
          <span className="flex items-center gap-1.5 text-[#a9c5ad]">
            <Building size={14} className="text-[#c6ff3d]" /> HOTEL_RESERVATION.EXE
          </span>
          <span>C# .NET DESKTOP SYSTEM</span>
        </div>

        <div className="my-5 p-4 bg-[#14161a] border border-[#25272c] rounded">
          <div className="font-mono text-[10px] text-[#606570] mb-2">
            // ROOM STATUS MATRIX (FLOORS 1 - 4)
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
            {[
              'OCC', 'RES', 'AVAL', 'AVAL', 'OCC', 'CLEAN',
              'AVAL', 'RES', 'OCC', 'AVAL', 'OCC', 'RES',
            ].map((st, i) => (
              <div
                key={i}
                className={`p-1.5 rounded text-center font-mono text-[8px] font-bold border ${
                  st === 'AVAL'
                    ? 'bg-[#c6ff3d]/15 text-[#c6ff3d] border-[#c6ff3d]/30'
                    : st === 'OCC'
                    ? 'bg-[#25272c] text-[#f1f2ec] border-[#393d45]'
                    : 'bg-[#101216] text-[#9197a0] border-[#25272c]'
                }`}
              >
                {st}
              </div>
            ))}
          </div>
        </div>

        <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
          <span>ACID SQL TRANSACTIONS</span>
          <span className="text-[#a9c5ad]">DESKTOP GUI (WPF/WINFORMS)</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex items-center justify-between border-b border-[#25272c] pb-3 text-[10px] font-mono text-[#9197a0]">
        <span className="flex items-center gap-1.5 text-[#d8b48d]">
          <Compass size={14} className="text-[#c6ff3d]" /> TOURISM_PORTAL_WEB
        </span>
        <span>PHP & MYSQL STACK</span>
      </div>

      <div className="my-5 p-4 bg-[#14161a] border border-[#25272c] rounded font-mono text-xs space-y-2">
        <div className="text-[10px] text-[#606570]">// DESTINATION CATALOG</div>
        <div className="flex justify-between text-[#f1f2ec]">
          <span>Simien Mountains Trek</span> <span className="text-[#c6ff3d]">5-DAY TOUR</span>
        </div>
        <div className="flex justify-between text-[#9197a0]">
          <span>Lalibela Rock Churches</span> <span>GUIDED ITINERARY</span>
        </div>
      </div>

      <div className="font-mono text-[10px] text-[#606570] flex items-center justify-between pt-2 border-t border-[#25272c]">
        <span>E-COMMERCE & RESERVATIONS</span>
        <span className="text-[#d8b48d]">RESPONSIVE CLIENT PORTAL</span>
      </div>
    </div>
  );
}

function ProjectDeckCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Soren Hale Stacking Card Law:
  // Card sticks at (88px + index * 14px) and as next card stacks over it,
  // it scales down slightly (1 -> 0.96) and dims subtly.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const dimOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.25, 0.55]);

  return (
    <li
      ref={cardRef}
      className="sticky list-none"
      style={{
        top: `calc(88px + ${index * 16}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{
          scale,
          transformOrigin: '50% 0%',
        }}
        className="group relative rounded-2xl border border-[#25272c] bg-[#14161a] shadow-2xl overflow-hidden transition-colors duration-300 hover:border-[#393d45]"
      >
        {/* Soren Hale dim overlay that darkens card as it gets stacked underneath */}
        <motion.div
          style={{ opacity: dimOpacity }}
          className="absolute inset-0 bg-[#060708] rounded-2xl pointer-events-none z-30 transition-opacity"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-9 lg:p-11 items-center">
          {/* ==================================================== */}
          {/* LEFT: Project Meta, Title, Diff Metric, Tags & CTA   */}
          {/* ==================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Meta Top Line */}
              <div className="flex items-center justify-between font-mono text-xs text-[#606570] mb-4 pb-3 border-b border-[#25272c]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#c6ff3d]">{project.number}</span>
                  <span>of {project.total}</span>
                  <span className="text-[#393d45]">·</span>
                  <span className="text-[#f1f2ec] font-medium">{project.title}</span>
                </div>
                <span className="text-[10px] text-[#9197a0] uppercase">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.08] mb-4">
                {project.title}
              </h3>

              {/* Narrative Lede */}
              <p className="text-sm sm:text-base text-[#9197a0] font-sans leading-relaxed mb-6 max-w-xl">
                {project.description}
              </p>

              {/* Role Line */}
              <div className="font-mono text-xs text-[#606570] mb-6">
                Role: <span className="text-[#f1f2ec]">{project.role}</span>
              </div>
            </div>

            <div>
              {/* Soren Hale Diff Metric (before struck through in violet -> after in lime) */}
              <div className="mb-6 pt-4 border-t border-[#25272c]">
                <div className="sh-diff mb-1">
                  <s>from {project.diff.from}</s>
                  <span className="text-sm font-sans text-[#606570] mx-1">→</span>
                  <b>to {project.diff.to}</b>
                </div>
                <div className="font-mono text-[10px] text-[#606570] uppercase tracking-wider">
                  {project.diff.label}
                </div>
              </div>

              {/* Tags & Action Button Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#25272c]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono text-[#b8bbb2] bg-[#101216] border border-[#25272c] rounded-md transition-colors group-hover:border-[#393d45]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Soren Hale Button with Dual Sliding Arrow & GitHub Link */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="sh-btn sh-btn-solid"
                    aria-label={`Open case study for ${project.title}`}
                  >
                    <span>Open case</span>
                    <span className="sh-btn-icon">
                      <ArrowUpRight size={16} />
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-[#25272c] bg-[#101216] text-[#9197a0] hover:text-[#c6ff3d] hover:border-[#393d45] transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FolderGit2 size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT: High-Fidelity UI Graphic & Code Preview Canvas */}
          {/* ==================================================== */}
          <div className="lg:col-span-6">
            <div className="relative min-h-[340px] sm:min-h-[400px] rounded-xl overflow-hidden bg-[#0b0c0e] border border-[#25272c] p-5 sm:p-7 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.02]">
              {/* Background Geometric Grid */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              <CardGraphic tone={project.tone} />
            </div>
          </div>
        </div>
      </motion.article>
    </li>
  );
}

export default function Projects() {
  return (
    <section className="py-28 border-b border-[#25272c]/50 relative" id="work">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#25272c]/60">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#c6ff3d]">// 01</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Selected Work & Engineering Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f1f2ec] tracking-tight">
              Products with <span className="italic font-normal text-[#9197a0]">intent</span>
              <span className="text-[#c6ff3d]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-[#9197a0] max-w-md font-sans leading-relaxed">
            Seven real engineering initiatives across applied machine learning, cloud security, and software systems. Each card stacks as you scroll down the page.
          </p>
        </div>

        {/* ========================================================= */}
        {/* Soren Hale Stacking Deck (`ul.shwk-deck`)                 */}
        {/* ========================================================= */}
        <ul className="flex flex-col gap-8 sm:gap-10 pb-20 p-0 m-0">
          {PROJECTS.map((project, index) => (
            <ProjectDeckCard
              key={project.number}
              project={project}
              index={index}
              total={PROJECTS.length}
            />
          ))}
        </ul>

        {/* Work Footer Banner */}
        <div className="mt-16 pt-8 border-t border-[#25272c]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9197a0]">
          <div className="flex items-center gap-2">
            <FolderGit2 size={16} className="text-[#c6ff3d]" />
            <span>All repository links point directly to active development workspaces.</span>
          </div>

          <a
            href="https://github.com/dagneget"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#c6ff3d] hover:underline"
          >
            <span>Browse Full GitHub Archive</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
