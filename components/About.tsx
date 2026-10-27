'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, MapPin, Calendar, Award, Code2, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section className="py-28 border-b border-[#25272c]/50 bg-[#101216]/50" id="about">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Editorial Art */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#c6ff3d]">// 02</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                About & Engineering Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#f1f2ec] tracking-tight mb-8">
              Engineer by study<span className="text-[#c6ff3d]">.</span>
              <br />
              <span className="italic font-normal text-[#9197a0]">Investigator by nature.</span>
            </h2>

            {/* Editorial Code / Monogram Block */}
            <div className="border border-[#25272c] bg-[#14161a] p-6 rounded-md">
              <div className="flex items-center justify-between border-b border-[#25272c] pb-3 mb-4 font-mono text-[10px] text-[#606570]">
                <span className="flex items-center gap-1.5 text-[#c6ff3d]">
                  <Terminal size={13} /> DBU.DEV_LOG
                </span>
                <span>STATUS: ACTIVE_STUDENT</span>
              </div>

              <p className="font-mono text-xs text-[#9197a0] leading-relaxed mb-4">
                &ldquo;Curiosity is the starting point. I learn by dissecting systems, inspecting network packets, training models, and writing code that is clean, verifiable, and resilient.&rdquo;
              </p>

              <div className="flex items-center justify-between font-mono text-[10px] text-[#606570] pt-3 border-t border-[#25272c]">
                <span>SPECIALIZATION</span>
                <span className="text-[#f1f2ec]">AI/ML & CYBERSECURITY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Fast Facts */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg sm:text-xl font-serif text-[#f1f2ec] leading-relaxed mb-6 font-normal">
              I am currently in my fourth year of studying <strong className="font-semibold text-[#f1f2ec]">Software Engineering</strong> at{' '}
              <span className="text-[#c6ff3d]">Debre Berhan University</span>, Ethiopia. My work revolves around building real-world software while continuously exploring how to secure it against threats and augment it with machine intelligence.
            </p>

            <div className="space-y-4 text-sm text-[#9197a0] font-sans leading-relaxed mb-10">
              <p>
                Rather than treating software as a black box, I am captivated by what happens under the surface — how network traffic flows between endpoints, how data structures impact runtime throughput, and how applied machine learning can automate tedious document understanding and content verification.
              </p>
              <p>
                My projects range from cloud infrastructure security auditing and automated natural language processors to full-stack web applications and robust C# desktop reservation systems. I approach engineering with a rigorous, investigative mindset: measure first, architect thoughtfully, and verify rigorously.
              </p>
            </div>

            {/* Academic & Professional Fast Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-[#25272c] py-6 mb-8 font-mono">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#606570] uppercase tracking-wider block">Degree & Program</span>
                  <strong className="text-xs text-[#f1f2ec] block font-semibold">BSc Software Engineering</strong>
                  <span className="text-[11px] text-[#9197a0]">Debre Berhan University (DBU)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#606570] uppercase tracking-wider block">Expected Graduation</span>
                  <strong className="text-xs text-[#f1f2ec] block font-semibold">January 2027</strong>
                  <span className="text-[11px] text-[#9197a0]">Senior Year (Year 4)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#606570] uppercase tracking-wider block">Location & Remote</span>
                  <strong className="text-xs text-[#f1f2ec] block font-semibold">Debre Berhan, Ethiopia</strong>
                  <span className="text-[11px] text-[#9197a0]">Available for Global Remote Roles</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award size={18} className="text-[#c6ff3d] mt-1 shrink-0" />
                <div>
                  <span className="text-[10px] text-[#606570] uppercase tracking-wider block">Core Strengths</span>
                  <strong className="text-xs text-[#f1f2ec] block font-semibold">System Defense & AI/ML</strong>
                  <span className="text-[11px] text-[#9197a0]">Curious · Methodical · Thorough</span>
                </div>
              </div>
            </div>

            {/* LinkedIn & Social Action */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/dagnachewget/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono text-[#c6ff3d] hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://github.com/dagneget"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-mono text-[#9197a0] hover:text-[#f1f2ec] transition-colors"
              >
                <span>View GitHub Repos</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
