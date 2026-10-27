'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Terminal, Cpu, Database, Network } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Tool {
  id: string;
  keyNum: string;
  name: string;
  category: 'Languages' | 'AI & ML' | 'Security & Systems' | 'Development & Cloud';
  usage: 'Daily' | 'Active' | 'Lab';
  years: string;
  description: string;
  why: string;
}

const TOOLS: Tool[] = [
  {
    id: 'python',
    keyNum: '01',
    name: 'Python',
    category: 'Languages',
    usage: 'Daily',
    years: '3+ years',
    description: 'Primary language for machine learning pipelines, security scripting, and automation.',
    why: 'Rich scientific ecosystem (NumPy, Scikit-Learn) and unmatched speed for prototyping security tools.',
  },
  {
    id: 'ts-js',
    keyNum: '02',
    name: 'JavaScript / TypeScript',
    category: 'Languages',
    usage: 'Daily',
    years: '3 years',
    description: 'Modern web standard, static type safety, and reactive frontend architectures.',
    why: 'Strict mode with zero any. Types document interfaces and eliminate runtime null bugs.',
  },
  {
    id: 'csharp',
    keyNum: '03',
    name: 'C# / .NET',
    category: 'Languages',
    usage: 'Active',
    years: '2 years',
    description: 'Desktop engineering, strongly-typed business workflows, and Windows applications.',
    why: 'Rock-solid OOP architectural patterns and native desktop GUI performance.',
  },
  {
    id: 'cpp',
    keyNum: '04',
    name: 'C++',
    category: 'Languages',
    usage: 'Lab',
    years: '2 years',
    description: 'Algorithmic foundations, memory management, and low-level system understanding.',
    why: 'Teaches what pointers and allocations actually cost at the hardware boundary.',
  },
  {
    id: 'php',
    keyNum: '05',
    name: 'PHP',
    category: 'Languages',
    usage: 'Active',
    years: '2 years',
    description: 'Server-side web applications, session handling, and relational database systems.',
    why: 'Pragmatic, battle-tested backend architecture powering robust web portals.',
  },
  {
    id: 'java',
    keyNum: '06',
    name: 'Java',
    category: 'Languages',
    usage: 'Active',
    years: '2 years',
    description: 'Object-oriented software design, design patterns, and enterprise paradigms.',
    why: 'Strong typing and rigorous design pattern principles taught in academic coursework.',
  },
  {
    id: 'sklearn',
    keyNum: '07',
    name: 'Scikit-Learn',
    category: 'AI & ML',
    usage: 'Daily',
    years: '2 years',
    description: 'Model training, hyperparameter tuning, feature extraction, and benchmark validation.',
    why: 'Clean API for classical statistical learning, cross-validation, and metrics evaluation.',
  },
  {
    id: 'nlp',
    keyNum: '08',
    name: 'NLP / Text Preprocessing',
    category: 'AI & ML',
    usage: 'Daily',
    years: '2 years',
    description: 'TF-IDF representations, tokenization, n-grams, and news credibility scoring.',
    why: 'Essential toolkit for transforming unstructured linguistic text into vector spaces.',
  },
  {
    id: 'spacy',
    keyNum: '09',
    name: 'SpaCy / PyPDF',
    category: 'AI & ML',
    usage: 'Active',
    years: '2 years',
    description: 'Semi-structured document extraction, regex parsing, and entity recognition pipelines.',
    why: 'Production-ready document ingestion that runs locally without cloud latency or subscription fees.',
  },
  {
    id: 'nmap',
    keyNum: '10',
    name: 'Nmap',
    category: 'Security & Systems',
    usage: 'Active',
    years: '2 years',
    description: 'Network discovery, port scanning, service version detection, and firewall testing.',
    why: 'The standard for host reconnaissance and identifying open, unhardened ports.',
  },
  {
    id: 'wireshark',
    keyNum: '11',
    name: 'Wireshark',
    category: 'Security & Systems',
    usage: 'Active',
    years: '2 years',
    description: 'Packet capture analysis, TCP/IP handshakes, DNS inspection, and anomaly detection.',
    why: 'Shows exactly what is crossing the wire without relying on application-level assumptions.',
  },
  {
    id: 'wazuh',
    keyNum: '12',
    name: 'Wazuh SIEM',
    category: 'Security & Systems',
    usage: 'Active',
    years: '1.5 years',
    description: 'Endpoint security monitoring, integrity auditing, and centralized threat analysis.',
    why: 'Open-source SIEM that gives visibility into endpoint file changes and authentication events.',
  },
  {
    id: 'ghidra',
    keyNum: '13',
    name: 'Ghidra',
    category: 'Security & Systems',
    usage: 'Lab',
    years: '1 year',
    description: 'Software reverse engineering, disassembly review, and binary static exploration.',
    why: 'NSA-developed decompiler for analyzing compiled binaries and binary formats.',
  },
  {
    id: 'owasp',
    keyNum: '14',
    name: 'OWASP / Web Testing',
    category: 'Security & Systems',
    usage: 'Active',
    years: '2 years',
    description: 'Vulnerability assessment: testing for SQLi, XSS, CSRF, and broken access controls.',
    why: 'Standard methodology to audit web applications against top attack surfaces.',
  },
  {
    id: 'react',
    keyNum: '15',
    name: 'React & Tailwind',
    category: 'Development & Cloud',
    usage: 'Daily',
    years: '3 years',
    description: 'Component architecture, responsive styling, and fast interactive web interfaces.',
    why: 'Declarative component state paired with rapid utility CSS styling.',
  },
  {
    id: 'linux-git',
    keyNum: '16',
    name: 'Linux & Git',
    category: 'Development & Cloud',
    usage: 'Daily',
    years: '4 years',
    description: 'Daily driver operating system, bash shell scripting, and distributed version control.',
    why: 'POSIX environment for running servers, managing daemons, and tracking every commit.',
  },
];

const CATEGORIES = ['All', 'Languages', 'AI & ML', 'Security & Systems', 'Development & Cloud'] as const;

export default function StackPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTools =
    selectedCategory === 'All'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f2ec] selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
      <Navbar />

      <main className="pt-36 pb-28">
        <div className="wrap max-w-5xl">
          {/* Header */}
          <div className="mb-14 pb-8 border-b border-[#25272c]/60">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9197a0] hover:text-[#c6ff3d] transition-colors">
                <ArrowLeft size={14} /> Back to Home
              </Link>
              <span className="text-[#393d45]">/</span>
              <span className="font-mono text-xs text-[#c6ff3d]">// 03</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                The Stack & Tool Matrix
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              Sixteen tools, <br />
              <span className="italic font-normal text-[#9197a0]">used on purpose</span>
              <span className="text-[#c6ff3d]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] max-w-2xl font-sans leading-relaxed">
              The languages, security analyzers, and machine learning toolkits I choose deliberately. Each card lists how often it is used and why it earns its place on the board.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? TOOLS.length : TOOLS.filter((t) => t.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#c6ff3d] text-[#0b0c0e] font-semibold shadow-md shadow-[#c6ff3d]/10'
                      : 'bg-[#14161a] border border-[#25272c] text-[#9197a0] hover:text-[#f1f2ec] hover:border-[#393d45]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-[#0b0c0e]/80' : 'text-[#606570]'}`}>
                    {count < 10 ? `0${count}` : count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Keyboard / Tool Board Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <AnimatePresence>
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative border border-[#25272c] bg-[#14161a] p-5 rounded-md flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-[#c6ff3d]/60 hover:bg-[#181b20] hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    {/* Key Index & Usage Badge */}
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#606570] mb-3">
                      <span className="group-hover:text-[#c6ff3d] transition-colors">
                        key {tool.keyNum} of 16
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${
                          tool.usage === 'Daily'
                            ? 'bg-[#c6ff3d]/15 text-[#c6ff3d] border border-[#c6ff3d]/30'
                            : tool.usage === 'Active'
                            ? 'bg-[#9197a0]/15 text-[#b8bbb2] border border-[#9197a0]/30'
                            : 'bg-[#606570]/15 text-[#9197a0]'
                        }`}
                      >
                        {tool.usage}
                      </span>
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#f1f2ec] mb-1 group-hover:text-[#c6ff3d] transition-colors">
                      {tool.name}
                    </h3>
                    <div className="font-mono text-[10px] text-[#606570] mb-2">{tool.years}</div>

                    {/* Description */}
                    <p className="text-xs text-[#9197a0] font-sans leading-relaxed mb-3">
                      {tool.description}
                    </p>
                  </div>

                  {/* Why it earns its place */}
                  <div className="pt-2 border-t border-[#25272c]/70">
                    <p className="text-[11px] font-mono text-[#606570] leading-snug">
                      <span className="text-[#c6ff3d]">Rationale:</span> {tool.why}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Security Deep Dive Card */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-gradient-to-r from-[#14161a] to-[#101216] flex flex-col sm:flex-row items-start gap-6 mb-16">
            <div className="w-12 h-12 rounded-full border border-[#c6ff3d]/30 bg-[#c6ff3d]/10 flex items-center justify-center shrink-0 text-[#c6ff3d]">
              <ShieldCheck size={26} />
            </div>
            <div>
              <span className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider block mb-1">
                Security Methodology & Lab Practice
              </span>
              <p className="text-sm text-[#9197a0] font-sans leading-relaxed mb-3">
                Hands-on network scanning with <strong className="text-[#f1f2ec]">Nmap</strong> for service discovery, packet capture analysis with <strong className="text-[#f1f2ec]">Wireshark</strong>, SIEM telemetry with <strong className="text-[#f1f2ec]">Wazuh</strong>, and web defense audits following <strong className="text-[#f1f2ec]">OWASP</strong> principles.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-[#606570]">
                <span>• Port Enumeration</span>
                <span>• Protocol Analysis</span>
                <span>• Least Privilege</span>
                <span>• Binary Inspection</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#f1f2ec] mb-1">
                See these tools in action
              </h3>
              <p className="text-xs text-[#9197a0] font-sans">
                Explore the project case studies where these technologies were applied.
              </p>
            </div>

            <Link href="/work" className="sh-btn sh-btn-solid">
              <span>View Case Studies</span>
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
