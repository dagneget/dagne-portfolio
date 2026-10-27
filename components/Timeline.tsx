'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitBranch, Terminal } from 'lucide-react';

interface LogEntry {
  hash: string;
  tag?: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  isHead?: boolean;
}

const ENTRIES: LogEntry[] = [
  {
    hash: 'HEAD → main',
    tag: 'CURRENT FOCUS',
    role: 'Senior Software Engineering Candidate',
    organization: 'Debre Berhan University',
    period: '2026 — 2027 (Graduation: Jan 2027)',
    description:
      'Focusing on applied AI/ML pipelines, cloud security posture assessment, and microservice architectures. Synthesizing research and hands-on implementations for final capstone delivery.',
    isHead: true,
  },
  {
    hash: '5f83c1',
    role: 'Cloud Security & Threat Intelligence Practice',
    organization: 'Independent Security Labs',
    period: '2025',
    description:
      'Developed Cloud Guard for AWS resource policy scanning. Set up Wazuh SIEM monitoring environments, inspected network traffic with Wireshark, and performed vulnerability audits using OWASP criteria.',
  },
  {
    hash: '4d19a2',
    role: 'Machine Learning & NLP Engineering',
    organization: 'Model & Extraction Pipelines',
    period: '2024 — 2025',
    description:
      'Engineered the Fake News Detection classifier using Scikit-Learn NLP models with ~94% validation accuracy. Built the automated Resume Extraction engine using regex and semi-structured text parsers.',
  },
  {
    hash: '2e70b8',
    role: 'Full-Stack Web & Desktop Application Builds',
    organization: 'Systems Projects',
    period: '2023 — 2024',
    description:
      'Engineered the C# .NET Hotel Reservation System with real-time room status tracking. Architected CloseKeep in React/Firebase, and built the PHP/MySQL Tourism Management platform.',
  },
  {
    hash: 'initial commit',
    role: 'BSc Software Engineering Matriculation',
    organization: 'Debre Berhan University, Ethiopia',
    period: '2023',
    description:
      'Commenced foundational curriculum: data structures & algorithms, computer networks, database management systems, and object-oriented programming in C++, Java, and Python.',
  },
];

export default function Timeline() {
  return (
    <section className="py-28 border-b border-[#25272c]/50 bg-[#101216]/30" id="timeline">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#25272c]/60">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#c6ff3d]">// 04</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Milestones & Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f1f2ec] tracking-tight">
              git log <span className="italic font-normal text-[#9197a0]">--journey</span>
              <span className="text-[#c6ff3d]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-[#9197a0] max-w-md font-sans leading-relaxed">
            One continuous trajectory: advancing from algorithmic principles to applied AI pipelines, security tooling, and full-stack software.
          </p>
        </div>

        {/* Git Log Entries */}
        <div className="relative border-l border-[#25272c] ml-3 sm:ml-4 space-y-12 pl-6 sm:pl-8">
          {ENTRIES.map((entry, index) => (
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
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                  entry.isHead
                    ? 'border-[#c6ff3d] bg-[#c6ff3d]'
                    : 'border-[#393d45] bg-[#0b0c0e] group-hover:border-[#c6ff3d]'
                }`}
              >
                {entry.isHead && <span className="w-1.5 h-1.5 rounded-full bg-[#0b0c0e]" />}
              </div>

              {/* Commit Meta Strip */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-[#606570] mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                  entry.isHead
                    ? 'bg-[#c6ff3d]/15 text-[#c6ff3d] border border-[#c6ff3d]/30'
                    : 'bg-[#14161a] text-[#9197a0] border border-[#25272c]'
                }`}>
                  {entry.hash}
                </span>

                <span className="text-[#9197a0] font-medium">{entry.organization}</span>
                <span>·</span>
                <span className="text-[#606570]">{entry.period}</span>
              </div>

              {/* Title / Role */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f1f2ec] mb-2 group-hover:text-[#c6ff3d] transition-colors">
                {entry.role}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#9197a0] font-sans leading-relaxed max-w-2xl">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
