'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, GraduationCap, Calendar, MapPin, Award, Terminal, Code2, ShieldCheck, BrainCircuit } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RULES = [
  {
    number: '01',
    rule: 'Measure first, optimize second.',
    description: 'Never assume where latency or vulnerability lives. Profile real network traffic and run verifiable benchmarks before making architectural claims.',
  },
  {
    number: '02',
    rule: 'Least privilege by default.',
    description: 'Whether designing cloud IAM roles, database accounts, or desktop permissions, grant only what is strictly required to execute the task.',
  },
  {
    number: '03',
    rule: 'Types are the first draft of the documentation.',
    description: 'Strict typing in TypeScript, C#, and Python dataclasses catches bugs at compile time and communicates system boundaries clearly.',
  },
  {
    number: '04',
    rule: 'Clean code is code the next engineer can verify.',
    description: 'Avoid clever, opaque hacks. Favor clear variable names, modular separation of concerns, and reproducible setup scripts.',
  },
  {
    number: '05',
    rule: 'Security is not an afterthought layer.',
    description: 'Threat modeling, input sanitization, and encryption belong in the first architectural draft, not tacked on before production deploy.',
  },
  {
    number: '06',
    rule: 'Curiosity without rigor is just noise.',
    description: 'Exploring machine learning and reverse engineering is exciting, but true understanding requires documenting experiments and testing assumptions.',
  },
];

export default function AboutPage() {
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
              <span className="font-mono text-xs text-[#c6ff3d]">// 02</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                About & Engineering Ethos
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              Engineer by study<span className="text-[#c6ff3d]">.</span>
              <br />
              <span className="italic font-normal text-[#9197a0]">Investigator by nature.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] font-sans leading-relaxed">
              I’m a fourth-year Software Engineering student at Debre Berhan University, Ethiopia, exploring the convergence of applied AI/ML, cloud cybersecurity, and resilient software systems.
            </p>
          </div>

          {/* Narrative Chapters */}
          <div className="space-y-12 mb-20 text-[#9197a0] font-sans leading-relaxed">
            <section>
              <span className="font-mono text-xs text-[#c6ff3d] tracking-wider uppercase block mb-2">
                Chapter 01 // The Discovery
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#f1f2ec] mb-4">
                Understanding Systems from the Inside Out
              </h2>
              <p className="text-base leading-relaxed text-[#b8bbb2] mb-4">
                My journey into software engineering began with a persistent curiosity about what happens under the surface of digital applications. Rather than just assembling user interfaces, I was drawn to the mechanics: how data structures govern execution speed, how database transactions guarantee consistency, and how network packets travel across protocols.
              </p>
              <p className="text-base leading-relaxed text-[#b8bbb2]">
                Studying at Debre Berhan University provided a rigorous grounding in computer science foundations: algorithmic complexity, operating systems, and object-oriented principles across C++, Java, and Python.
              </p>
            </section>

            <section>
              <span className="font-mono text-xs text-[#c6ff3d] tracking-wider uppercase block mb-2">
                Chapter 02 // The Investigation
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#f1f2ec] mb-4">
                Security Defense & Packet Analysis
              </h2>
              <p className="text-base leading-relaxed text-[#b8bbb2] mb-4">
                Building software quickly led me to examine how it can be attacked and how to defend it. I set up home security labs exploring network reconnaissance with Nmap, packet inspection with Wireshark, and centralized security event monitoring with Wazuh.
              </p>
              <p className="text-base leading-relaxed text-[#b8bbb2]">
                This investigative practice culminated in projects like Cloud Guard—an automated cloud security scanner designed to enforce IAM least-privilege configurations and prevent cloud storage misconfigurations before deployment.
              </p>
            </section>

            <section>
              <span className="font-mono text-xs text-[#c6ff3d] tracking-wider uppercase block mb-2">
                Chapter 03 // The Intelligence
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#f1f2ec] mb-4">
                Applied Machine Learning & Automation
              </h2>
              <p className="text-base leading-relaxed text-[#b8bbb2]">
                In parallel, I explored how natural language processing and statistical models can automate complex manual workloads. From engineering a ~94% accurate fake news credibility classifier using TF-IDF n-grams to creating automated multi-format CV parsers, I focus on applied, verifiable machine learning that solves pragmatic information bottlenecks.
              </p>
            </section>
          </div>

          {/* Academic Fast Facts Card */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] mb-20 shadow-xl">
            <div className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider mb-6 flex items-center gap-2">
              <Terminal size={14} /> Academic Credentials & Milestones
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[#606570] text-[10px] uppercase block">Program</span>
                  <strong className="text-sm text-[#f1f2ec] font-semibold block">BSc Software Engineering</strong>
                  <span className="text-[#9197a0]">Debre Berhan University, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[#606570] text-[10px] uppercase block">Graduation Date</span>
                  <strong className="text-sm text-[#f1f2ec] font-semibold block">January 2027</strong>
                  <span className="text-[#9197a0]">Senior Year (Final Year Candidate)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[#606570] text-[10px] uppercase block">Location & Remote</span>
                  <strong className="text-sm text-[#f1f2ec] font-semibold block">Debre Berhan, Ethiopia</strong>
                  <span className="text-[#9197a0]">East Africa Time (UTC+3) · Remote Available</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[#606570] text-[10px] uppercase block">Core Focus</span>
                  <strong className="text-sm text-[#f1f2ec] font-semibold block">AI/ML & Cloud Security</strong>
                  <span className="text-[#9197a0]">Methodical · Test-Driven · Curious</span>
                </div>
              </div>
            </div>
          </div>

          {/* Six Rules I Work By (Matching Soren Hale) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#c6ff3d]">// Principles</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f1f2ec]">
                Six rules I work by<span className="text-[#c6ff3d]">.</span>
              </h2>
            </div>
            <p className="text-sm text-[#9197a0] font-sans mb-8">
              The operating principles that guide my decisions, code reviews, and architectural choices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {RULES.map((rule) => (
                <div
                  key={rule.number}
                  className="p-6 rounded-lg border border-[#25272c] bg-[#14161a] hover:border-[#393d45] transition-colors"
                >
                  <span className="font-mono text-xs text-[#c6ff3d] block mb-2">
                    {rule.number}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#f1f2ec] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[#9197a0] font-sans leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Callout */}
          <div className="p-8 rounded-xl border border-[#25272c] bg-[#14161a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#f1f2ec] mb-1">
                Interested in working together?
              </h3>
              <p className="text-xs text-[#9197a0] font-sans">
                Open to software engineering internships and research collaborations.
              </p>
            </div>

            <Link href="/contact" className="sh-btn sh-btn-solid">
              <span>Start a Conversation</span>
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
