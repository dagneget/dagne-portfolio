'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, Cpu, Database, Network } from 'lucide-react';

interface Tool {
  id: string;
  keyNum: string;
  name: string;
  category: 'Languages' | 'AI & ML' | 'Security & Systems' | 'Development & Cloud';
  usage: 'Daily' | 'Active' | 'Lab';
  description: string;
}

const TOOLS: Tool[] = [
  {
    id: 'python',
    keyNum: '01',
    name: 'Python',
    category: 'Languages',
    usage: 'Daily',
    description: 'Primary language for ML experiments, automated security scripts, and data pipelines.',
  },
  {
    id: 'ts-js',
    keyNum: '02',
    name: 'JavaScript / TypeScript',
    category: 'Languages',
    usage: 'Daily',
    description: 'Modern web standard, type safety, and reactive client-side interfaces.',
  },
  {
    id: 'csharp',
    keyNum: '03',
    name: 'C# / .NET',
    category: 'Languages',
    usage: 'Active',
    description: 'Desktop engineering, strongly-typed business workflows, and Windows applications.',
  },
  {
    id: 'cpp',
    keyNum: '04',
    name: 'C++',
    category: 'Languages',
    usage: 'Lab',
    description: 'Algorithmic fundamentals, memory pointers, and low-level system understanding.',
  },
  {
    id: 'php',
    keyNum: '05',
    name: 'PHP',
    category: 'Languages',
    usage: 'Active',
    description: 'Server-side web applications, session management, and MySQL database integration.',
  },
  {
    id: 'java',
    keyNum: '06',
    name: 'Java',
    category: 'Languages',
    usage: 'Active',
    description: 'Object-oriented software design, design patterns, and enterprise computing concepts.',
  },
  {
    id: 'sklearn',
    keyNum: '07',
    name: 'Scikit-Learn',
    category: 'AI & ML',
    usage: 'Daily',
    description: 'Model training, hyperparameter tuning, feature extraction, and benchmark validation.',
  },
  {
    id: 'nlp',
    keyNum: '08',
    name: 'NLP / Text Processing',
    category: 'AI & ML',
    usage: 'Daily',
    description: 'TF-IDF representations, tokenization, n-grams, and news credibility scoring.',
  },
  {
    id: 'spacy',
    keyNum: '09',
    name: 'SpaCy / PyPDF',
    category: 'AI & ML',
    usage: 'Active',
    description: 'Semi-structured document extraction, regex parsing, and entity recognition pipelines.',
  },
  {
    id: 'nmap',
    keyNum: '10',
    name: 'Nmap',
    category: 'Security & Systems',
    usage: 'Active',
    description: 'Network discovery, port scanning, service version detection, and firewall testing.',
  },
  {
    id: 'wireshark',
    keyNum: '11',
    name: 'Wireshark',
    category: 'Security & Systems',
    usage: 'Active',
    description: 'Packet capture analysis, TCP/IP handshakes, DNS inspection, and anomaly detection.',
  },
  {
    id: 'wazuh',
    keyNum: '12',
    name: 'Wazuh SIEM',
    category: 'Security & Systems',
    usage: 'Active',
    description: 'Endpoint security monitoring, integrity auditing, and centralized threat analysis.',
  },
  {
    id: 'ghidra',
    keyNum: '13',
    name: 'Ghidra',
    category: 'Security & Systems',
    usage: 'Lab',
    description: 'Software reverse engineering, disassembly review, and binary static exploration.',
  },
  {
    id: 'owasp',
    keyNum: '14',
    name: 'OWASP / Web Testing',
    category: 'Security & Systems',
    usage: 'Active',
    description: 'Vulnerability assessment, testing for SQLi, XSS, CSRF, and broken access controls.',
  },
  {
    id: 'react',
    keyNum: '15',
    name: 'React & Tailwind',
    category: 'Development & Cloud',
    usage: 'Daily',
    description: 'Component architecture, responsive styling, and fast interactive web interfaces.',
  },
  {
    id: 'linux-git',
    keyNum: '16',
    name: 'Linux & Git',
    category: 'Development & Cloud',
    usage: 'Daily',
    description: 'Primary development OS, bash shell scripting, and distributed version control.',
  },
];

const CATEGORIES = ['All', 'Languages', 'AI & ML', 'Security & Systems', 'Development & Cloud'] as const;

export default function Stack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTools =
    selectedCategory === 'All'
      ? TOOLS
      : TOOLS.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="py-28 border-b border-[#25272c]/50" id="stack">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#25272c]/60">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#c6ff3d]">// 03</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                The Stack & Engineering Tools
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f1f2ec] tracking-tight">
              The tools I rely on<span className="text-[#c6ff3d]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-[#9197a0] max-w-md font-sans leading-relaxed">
            16 tools across 4 disciplines. The languages, security tools, and ML frameworks I use to build and investigate software.
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
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
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
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative border border-[#25272c] bg-[#14161a] p-5 rounded-md flex flex-col justify-between min-h-[175px] transition-all duration-300 hover:border-[#c6ff3d]/60 hover:bg-[#181b20] hover:-translate-y-1 shadow-sm"
              >
                {/* Key Index & Category */}
                <div>
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
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#f1f2ec] mb-2 group-hover:text-[#c6ff3d] transition-colors">
                    {tool.name}
                  </h3>
                </div>

                {/* Editorial Description */}
                <div>
                  <p className="text-xs text-[#9197a0] font-sans leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#25272c]/70 flex items-center justify-between font-mono text-[9px] text-[#606570]">
                    <span>{tool.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Security Practice Deep Dive Card */}
        <div className="mt-12 p-6 rounded-md border border-[#25272c] bg-gradient-to-r from-[#14161a] to-[#101216] flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-full border border-[#c6ff3d]/30 bg-[#c6ff3d]/10 flex items-center justify-center shrink-0 text-[#c6ff3d]">
            <ShieldCheck size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#c6ff3d] tracking-widest uppercase mb-1">
              <span>Security Practice & Methodologies</span>
            </div>
            <p className="text-sm text-[#9197a0] font-sans leading-relaxed">
              Hands-on security testing with <strong className="text-[#f1f2ec]">Nmap</strong> for network enumeration,{' '}
              <strong className="text-[#f1f2ec]">Wireshark</strong> for live packet flow and protocol inspection,{' '}
              <strong className="text-[#f1f2ec]">Wazuh</strong> for SIEM monitoring and integrity checks, and{' '}
              <strong className="text-[#f1f2ec]">OWASP</strong> best practices for web application vulnerability mitigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
