'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, GitCommit, GraduationCap, Calendar, Download, Terminal, Code2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LOGS = [
  {
    hash: 'HEAD → main',
    tag: 'CURRENT ENGAGEMENT',
    role: 'Senior Software Engineering Candidate',
    organization: 'Debre Berhan University, Ethiopia',
    period: '2026 — 2027 (Graduation: Jan 2027)',
    description:
      'Focusing on applied AI/ML pipelines, cloud security posture assessment, and microservice architectures. Synthesizing research and hands-on implementations for final capstone delivery.',
    highlights: [
      'Architecting final capstone project combining ML document extraction and cloud backend',
      'Conducting cloud security audits and IAM least-privilege compliance testing',
      'Maintaining active development repositories across web, ML, and desktop stacks',
    ],
    isHead: true,
  },
  {
    hash: 'commit 5f83c1',
    tag: 'SECURITY LABS',
    role: 'Cloud Security & Threat Intelligence Practice',
    organization: 'Independent Security & Research Labs',
    period: '2025',
    description:
      'Developed Cloud Guard for AWS resource policy scanning. Set up Wazuh SIEM monitoring environments, inspected network traffic with Wireshark, and performed vulnerability audits using OWASP criteria.',
    highlights: [
      'Engineered Cloud Guard: automated scanning for wildcard IAM permissions and public S3 buckets',
      'Deployed Wazuh SIEM to evaluate endpoint file integrity monitoring and authentication logs',
      'Executed packet capture analysis with Wireshark to decode TCP/IP session streams',
    ],
  },
  {
    hash: 'commit 4d19a2',
    tag: 'MACHINE LEARNING',
    role: 'Machine Learning & NLP Engineering',
    organization: 'Model & Extraction Pipelines',
    period: '2024 — 2025',
    description:
      'Engineered the Fake News Detection classifier using Scikit-Learn NLP models with ~94% validation accuracy. Built the automated Resume Extraction engine using regex and semi-structured text parsers.',
    highlights: [
      'Trained text classification models on 40,000+ labeled articles using TF-IDF vectorization',
      'Engineered multi-format resume parser ingesting PDF/DOCX and outputting structured JSON',
      'Developed lightweight Flask REST APIs to serve model inference with sub-second response times',
    ],
  },
  {
    hash: 'commit 2e70b8',
    tag: 'SYSTEMS BUILD',
    role: 'Full-Stack Web & Desktop Application Builds',
    organization: 'Application Projects',
    period: '2023 — 2024',
    description:
      'Engineered the C# .NET Hotel Reservation System with real-time room status tracking. Architected CloseKeep in React/Firebase, and built the PHP/MySQL Tourism Management platform.',
    highlights: [
      'Designed C# .NET desktop application with transactional database locking and room state machines',
      'Built CloseKeep: private social circle PWA in React 19, Tailwind CSS, and Firebase',
      'Delivered PHP/MySQL Tourism portal featuring itinerary catalogs and online guide bookings',
    ],
  },
  {
    hash: 'initial commit',
    tag: 'MATRICULATION',
    role: 'BSc Software Engineering Matriculation',
    organization: 'Debre Berhan University, Ethiopia',
    period: '2023',
    description:
      'Commenced foundational curriculum: data structures & algorithms, computer networks, database management systems, and object-oriented programming in C++, Java, and Python.',
    highlights: [
      'Data Structures & Algorithms in C++ and Java with runtime complexity analysis',
      'Relational Database Management Systems (RDBMS) with SQL schema normalization',
      'Computer Networking fundamentals (OSI Model, TCP/IP, Routing, DNS, HTTP)',
    ],
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f2ec] selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
      <Navbar />

      <main className="pt-36 pb-28">
        <div className="wrap max-w-4xl">
          {/* Header */}
          <div className="mb-14 pb-8 border-b border-[#25272c]/60">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9197a0] hover:text-[#c6ff3d] transition-colors">
                <ArrowLeft size={14} /> Back to Home
              </Link>
              <span className="text-[#393d45]">/</span>
              <span className="font-mono text-xs text-[#c6ff3d]">// 04</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Career Log & Timeline
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              git log <br />
              <span className="italic font-normal text-[#9197a0]">--journey</span>
              <span className="text-[#c6ff3d]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] font-sans leading-relaxed">
              One continuous engineering commit history: advancing from algorithmic foundations at Debre Berhan University to applied AI pipelines, security tooling, and desktop systems.
            </p>
          </div>

          {/* Git Log Stream */}
          <div className="relative border-l border-[#25272c] ml-4 sm:ml-6 space-y-14 pl-6 sm:pl-10 mb-20">
            {LOGS.map((entry, index) => (
              <motion.div
                key={entry.hash}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Commit Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                    entry.isHead
                      ? 'border-[#c6ff3d] bg-[#c6ff3d]'
                      : 'border-[#393d45] bg-[#0b0c0e] group-hover:border-[#c6ff3d]'
                  }`}
                >
                  {entry.isHead && <span className="w-1.5 h-1.5 rounded-full bg-[#0b0c0e]" />}
                </div>

                {/* Commit Meta Strip */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11px] mb-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      entry.isHead
                        ? 'bg-[#c6ff3d]/15 text-[#c6ff3d] border border-[#c6ff3d]/30'
                        : 'bg-[#14161a] text-[#9197a0] border border-[#25272c]'
                    }`}
                  >
                    {entry.hash}
                  </span>

                  <span className="text-[#f1f2ec] font-medium">{entry.organization}</span>
                  <span className="text-[#393d45]">·</span>
                  <span className="text-[#606570]">{entry.period}</span>
                </div>

                {/* Role / Milestone */}
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#f1f2ec] mb-3 group-hover:text-[#c6ff3d] transition-colors">
                  {entry.role}
                </h2>

                {/* Narrative */}
                <p className="text-sm text-[#9197a0] font-sans leading-relaxed mb-4 max-w-2xl">
                  {entry.description}
                </p>

                {/* Highlights List */}
                <div className="p-4 rounded-lg border border-[#25272c] bg-[#14161a] space-y-2">
                  <span className="text-[10px] font-mono text-[#606570] uppercase tracking-wider block">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs text-[#b8bbb2]">
                    {entry.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#c6ff3d]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Resume Snapshot Card */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] mb-16 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#25272c]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#c6ff3d] uppercase tracking-wider">
                <GraduationCap size={16} /> Formal Academic Record
              </div>
              <span className="font-mono text-xs text-[#606570]">CLASS OF 2027</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <span className="text-[#606570] text-[10px] uppercase block mb-1">Institution</span>
                <strong className="text-sm text-[#f1f2ec] block">Debre Berhan University</strong>
                <span className="text-[#9197a0]">College of Computing, Ethiopia</span>
              </div>
              <div>
                <span className="text-[#606570] text-[10px] uppercase block mb-1">Degree Conferred</span>
                <strong className="text-sm text-[#f1f2ec] block">Bachelor of Science in Software Engineering</strong>
                <span className="text-[#9197a0]">Expected Graduation: January 2027</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25272c] font-mono text-xs text-[#9197a0]">
              <span className="text-[#606570] block mb-1">COMPLETED CORE COURSEWORK:</span>
              <span>Data Structures, Algorithms, Network Security, Operating Systems, RDBMS, Software Architecture, Applied Machine Learning, Object-Oriented Software Design.</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#f1f2ec] mb-1">
                Open for Engineering Roles
              </h3>
              <p className="text-xs text-[#9197a0] font-sans">
                Available for internships, research fellowships, and junior software engineer positions.
              </p>
            </div>

            <Link href="/contact" className="sh-btn sh-btn-solid">
              <span>Get in Touch</span>
              <span className="sh-btn-icon">
                <ArrowUpRight size={16} />
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
