'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

interface QuestionItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQS: QuestionItem[] = [
  {
    id: 'roles',
    number: '01',
    question: 'What opportunities and roles are you currently open to?',
    answer:
      'I am actively open to software engineering internships, junior developer positions, and research roles centered on AI/ML pipelines or cloud/cybersecurity defense. I am comfortable working in distributed teams and coordinating across global time zones.',
  },
  {
    id: 'balance',
    number: '02',
    question: 'How do you balance AI/ML, cybersecurity, and software engineering?',
    answer:
      'I view them as complementary pillars of modern computing. Machine learning requires robust software architecture to serve predictions reliably; software systems require rigorous security controls to withstand adversarial attacks; and security monitoring relies heavily on statistical and ML-driven anomaly detection.',
  },
  {
    id: 'security-tools',
    number: '03',
    question: 'What is your practical experience with cybersecurity tools?',
    answer:
      'I work in Linux environments with tools like Nmap for network reconnaissance and port discovery, Wireshark for deep packet inspection and protocol decoding, Wazuh for SIEM event ingestion and integrity checking, and Ghidra for introductory reverse engineering. I also apply OWASP security standards to assess web application vulnerabilities.',
  },
  {
    id: 'code-review',
    number: '04',
    question: 'Where can I inspect your project codebases and repositories?',
    answer:
      'All my active and featured repositories are published on my GitHub profile at github.com/dagneget. You are welcome to review the commit history, directory structures, and code implementations across my projects.',
  },
  {
    id: 'graduation',
    number: '05',
    question: 'What is your graduation timeline and current academic standing?',
    answer:
      'I am in my fourth year of the Bachelor of Science in Software Engineering program at Debre Berhan University (DBU), Ethiopia, with expected graduation in January 2027. I am actively available for remote internships, project contracts, and team contributions.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('roles');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-28 border-b border-[#25272c]/50" id="faq">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#25272c]/60">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#c6ff3d]">// 05</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Questions & Answers
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f1f2ec] tracking-tight">
              Common questions<span className="text-[#c6ff3d]">.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-[#9197a0] max-w-md font-sans leading-relaxed">
            The core details teams, mentors, and collaborators usually ask before we connect. If you have an inquiry not covered here, feel free to reach out.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#25272c]/60 border-y border-[#25272c]/60 max-w-4xl mx-auto">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-[#14161a]/30">
                <button
                  onClick={() => toggle(item.id)}
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
    </section>
  );
}
