'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Plus, Minus, HelpCircle, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQCategory {
  category: string;
  items: {
    number: string;
    question: string;
    answer: string;
  }[];
}

const FAQ_SECTIONS: FAQCategory[] = [
  {
    category: 'Opportunities & Availability',
    items: [
      {
        number: '01',
        question: 'When are you available for internships or engineering roles?',
        answer:
          'I am currently in my fourth year of Software Engineering at Debre Berhan University (graduating January 2027) and am actively available for remote internships, project contracts, and full-time role transitions. I work across flexible schedules with strong overlap for global teams.',
      },
      {
        number: '02',
        question: 'Do you work independently or as part of a distributed team?',
        answer:
          'Both. I am experienced in owning full project implementations from architecture to code and deployment, and equally comfortable collaborating in git-driven engineering teams with pull request reviews, issue tracking, and daily standups.',
      },
    ],
  },
  {
    category: 'Stack & Engineering Approach',
    items: [
      {
        number: '03',
        question: 'What is your primary development stack and philosophy?',
        answer:
          'Python, TypeScript/React, and C# are where I spend the most time. My engineering philosophy is test-driven, type-strict, and security-conscious: write clean code that can be verified, measure benchmarks on real devices, and enforce least privilege in every configuration.',
      },
      {
        number: '04',
        question: 'How do you approach learning unfamiliar technologies?',
        answer:
          'I rely on official documentation, source code inspection, and minimal reproducible experiments rather than tutorial copying. Understanding underlying protocols (HTTP, TCP/IP, POSIX) allows me to pick up new frameworks and languages rapidly.',
      },
    ],
  },
  {
    category: 'Security & Verification',
    items: [
      {
        number: '05',
        question: 'What hands-on experience do you have with security tools?',
        answer:
          'I operate in Linux environments utilizing Nmap for network surface auditing, Wireshark for deep packet stream decoding, Wazuh for SIEM event analysis, and Ghidra for binary reverse engineering. I also follow OWASP guidelines to test for web application security vulnerabilities.',
      },
      {
        number: '06',
        question: 'Can I review your source code and past project repositories?',
        answer:
          'Yes. All featured projects have public repositories on GitHub under github.com/dagneget. Each repository features clear README documentation, modular architecture, and structured commit histories.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    '01': true,
    '03': true,
  });

  const toggle = (num: string) => {
    setOpenIds((prev) => ({ ...prev, [num]: !prev[num] }));
  };

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
              <span className="font-mono text-xs text-[#c6ff3d]">// 05</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              Asked before <br />
              <span className="italic font-normal text-[#9197a0]">every project</span>
              <span className="text-[#c6ff3d]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] font-sans leading-relaxed">
              Clear answers to the questions recruiters, engineering leads, and collaborators usually ask before we connect.
            </p>
          </div>

          {/* Categorized FAQs */}
          <div className="space-y-16 mb-20">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.category}>
                <h2 className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider mb-6 pb-2 border-b border-[#25272c]">
                  // {section.category}
                </h2>

                <div className="divide-y divide-[#25272c]/60 border-b border-[#25272c]/60">
                  {section.items.map((item) => {
                    const isOpen = !!openIds[item.number];
                    return (
                      <div key={item.number} className="transition-colors hover:bg-[#14161a]/30">
                        <button
                          onClick={() => toggle(item.number)}
                          className="w-full py-6 flex items-start sm:items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <span className="font-mono text-xs text-[#606570] group-hover:text-[#c6ff3d] transition-colors pt-0.5 sm:pt-0">
                              {item.number}
                            </span>
                            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                              {item.question}
                            </h3>
                          </div>

                          <span className="p-1.5 rounded border border-[#25272c] bg-[#14161a] text-[#9197a0] group-hover:text-[#f1f2ec] group-hover:border-[#393d45] shrink-0 transition-colors">
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 sm:pl-12 pb-6 pr-6 text-sm sm:text-base text-[#9197a0] font-sans leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Callout */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#f1f2ec] mb-1">
                Have a question not listed here?
              </h3>
              <p className="text-xs text-[#9197a0] font-sans">
                I reply to emails and messages within one working day.
              </p>
            </div>

            <Link href="/contact" className="sh-btn sh-btn-solid">
              <span>Ask Directly</span>
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
