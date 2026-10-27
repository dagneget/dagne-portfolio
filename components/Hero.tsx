'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Terminal, ShieldCheck, BrainCircuit, Code2 } from 'lucide-react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 border-b border-[#25272c]/50 overflow-hidden" id="home">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Editorial Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-[#c6ff3d]" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#9197a0]">
                SOFTWARE ENGINEERING · DEBRE BERHAN, ETHIOPIA
              </span>
            </motion.div>

            {/* Editorial Serif & Sans Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl lg:text-[4.4rem] font-serif font-bold text-[#f1f2ec] leading-[1.04] tracking-[-0.03em] mb-7"
            >
              Building intelligent systems<span className="text-[#c6ff3d]">.</span>
              <br />
              <span className="italic font-normal text-[#9197a0]">Securing every layer.</span>
            </motion.h1>

            {/* Concise, Grounded Lede */}
            <motion.p
              variants={fadeUp}
              className="text-[#9197a0] text-base sm:text-lg leading-relaxed max-w-xl font-sans mb-10"
            >
              I’m <strong className="text-[#f1f2ec] font-semibold">Dagnachew Getahun</strong> — a Software Engineering
              student exploring the convergence of <span className="text-[#f1f2ec]">applied AI/ML</span>,{' '}
              <span className="text-[#f1f2ec]">cloud security</span>, and practical software design. Driven by curiosity to
              understand how systems operate, scale, and stay resilient.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a href="#work" className="sh-btn sh-btn-solid">
                <span>Explore Selected Work</span>
                <span className="sh-btn-icon sh-btn-down">
                  <ArrowDownRight size={16} />
                </span>
              </a>

              <a
                href="https://github.com/dagneget"
                target="_blank"
                rel="noreferrer"
                className="sh-btn sh-btn-outline"
              >
                <span>GitHub Profile</span>
                <span className="sh-btn-icon">
                  <ArrowUpRight size={16} />
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <a href="#contact" className="sh-btn sh-btn-outline">
                <span>Get in Touch</span>
                <span className="sh-btn-icon">
                  <ArrowUpRight size={16} />
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative border border-[#25272c] bg-[#14161a] p-3 shadow-2xl transition-all duration-300 hover:border-[#393d45]">
              {/* Top Card Meta */}
              <div className="flex items-center justify-between pb-3 pt-1 px-1 font-mono text-[10px] tracking-widest text-[#9197a0] border-b border-[#25272c]/60">
                <span>FIG. 001 / PROFILE</span>
                <span className="text-[#c6ff3d]/80">DBU · CLASS OF 2027</span>
              </div>

              {/* Graphic Canvas */}
              <div className="relative h-[340px] sm:h-[390px] overflow-hidden bg-gradient-to-b from-[#181b20] via-[#101216] to-[#0b0c0e] flex items-center justify-center my-3 border border-[#25272c]/40">
                {/* Background Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Concentric Ambient Rings */}
                <div className="absolute w-72 h-72 rounded-full border border-[#c6ff3d]/15 animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-96 h-56 rounded-[50%] border border-white/5 rotate-45" />

                {/* Central Monogram */}
                <div className="relative z-10 text-center select-none">
                  <div className="font-serif font-bold text-8xl sm:text-9xl text-[#f1f2ec]/90 tracking-tighter drop-shadow-2xl">
                    D<span className="text-[#c6ff3d]">G</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#9197a0] mt-1">
                    ENGINEER · RESEARCHER
                  </div>
                </div>

                {/* Floating Code Floater Left */}
                <div className="absolute left-3 top-6 bg-[#0b0c0e]/85 backdrop-blur border border-[#25272c] p-2.5 font-mono text-[10px] text-[#9197a0] shadow-xl z-20">
                  <span className="text-[#606570] text-[8px] block mb-0.5">01 // FOCUS MATRIX</span>
                  const stack = [<br />
                  &nbsp;&nbsp;<span className="text-[#c6ff3d]">"AI/ML"</span>,<br />
                  &nbsp;&nbsp;<span className="text-[#c6ff3d]">"Cybersecurity"</span><br />
                  ];
                </div>

                {/* Floating Floater Right */}
                <div className="absolute right-3 bottom-12 bg-[#0b0c0e]/85 backdrop-blur border border-[#25272c] p-2.5 font-mono text-[10px] text-[#9197a0] shadow-xl z-20">
                  <span className="text-[#606570] text-[8px] block mb-0.5">02 // ENVIRONMENT</span>
                  <span className="text-[#f1f2ec] font-semibold">Linux / Python</span>
                  <br />
                  <span className="text-[#c6ff3d] text-[9px]">always.learning()</span>
                </div>

                {/* Bottom Center Stamp */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 bg-[#c6ff3d] text-[#0b0c0e] font-mono text-[9px] font-bold tracking-wider uppercase">
                  <Terminal size={12} /> THINK · CODE · VERIFY
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="flex items-center justify-between pt-2 pb-1 px-1 font-mono text-[10px] tracking-widest text-[#9197a0] border-t border-[#25272c]/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={12} className="text-[#c6ff3d]" /> DEV & SECURITY
                </span>
                <span>09°41′ N — 39°32′ E</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial Numbers / Metrics Strip (Inspired by Soren Hale) */}
        <div className="mt-16 pt-8 border-t border-[#25272c]/70 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#606570] uppercase tracking-widest mb-1">
              01 / Selected Work
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-[#f1f2ec]">07</span>
              <span className="text-xs text-[#9197a0] font-sans">Featured projects</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#606570] uppercase tracking-widest mb-1">
              02 / Core Domains
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-[#f1f2ec]">04</span>
              <span className="text-xs text-[#9197a0] font-sans">AI · Security · Web · C#</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#606570] uppercase tracking-widest mb-1">
              03 / Degree Candidate
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-[#f1f2ec]">2027</span>
              <span className="text-xs text-[#9197a0] font-sans">BSc Software Eng.</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#606570] uppercase tracking-widest mb-1">
              04 / Location & Zone
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-[#c6ff3d]">UTC+3</span>
              <span className="text-xs text-[#9197a0] font-sans">Debre Berhan, ET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
