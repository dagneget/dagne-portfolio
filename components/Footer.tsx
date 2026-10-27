'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0b0c0e] text-[#9197a0] text-xs font-mono border-t border-[#25272c]/50">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Brand & Editorial Column */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <a
              href="#home"
              className="flex items-center gap-3 text-xs tracking-widest text-[#f1f2ec] w-fit"
            >
              <span className="w-6 h-6 border border-[#3b4038] grid place-items-center font-display font-bold text-xs bg-[#14161a]">
                D<span className="text-[#c6ff3d]">.</span>
              </span>
              <span className="font-semibold tracking-[0.16em] uppercase">
                DAGNACHEW GETAHUN
              </span>
            </a>
            <p className="text-[#606570] text-xs font-sans max-w-sm leading-relaxed mt-2">
              Software Engineering student at Debre Berhan University. Dedicated to applied AI/ML systems and cybersecurity resilience.
            </p>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="text-[10px] text-[#606570] tracking-widest uppercase mb-1">
              // Navigation Index
            </span>
            <a href="/work" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              01 · Selected Work
            </a>
            <a href="/about" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              02 · About Me
            </a>
            <a href="/stack" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              03 · The Stack
            </a>
            <a href="/timeline" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              04 · Timeline
            </a>
            <a href="/faq" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              05 · FAQ
            </a>
            <a href="/contact" className="hover:text-[#c6ff3d] transition-colors py-0.5">
              06 · Contact
            </a>
          </div>

          {/* External Links & Back to top */}
          <div className="md:col-span-4 flex flex-col justify-between h-full gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-[#606570] tracking-widest uppercase mb-1">
                // Elsewhere
              </span>
              <a
                href="https://github.com/dagneget"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c6ff3d] transition-colors inline-flex items-center gap-1.5 py-0.5"
              >
                <span>GitHub</span> <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/in/dagnachewget/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c6ff3d] transition-colors inline-flex items-center gap-1.5 py-0.5"
              >
                <span>LinkedIn</span> <ArrowUpRight size={13} />
              </a>
              <a
                href="mailto:dagne.techverse@gmail.com"
                className="hover:text-[#c6ff3d] transition-colors inline-flex items-center gap-1.5 py-0.5"
              >
                <span>Email</span> <ArrowUpRight size={13} />
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#25272c] bg-[#14161a] hover:border-[#393d45] hover:text-[#f1f2ec] rounded text-[11px] transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} className="text-[#c6ff3d]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="pt-8 border-t border-[#25272c]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#606570]">
          <span>
            © {new Date().getFullYear()} Dagnachew Getahun. Written with Next.js, TypeScript & Framer Motion.
          </span>
          <span className="text-[#9197a0]">
            Debre Berhan, Ethiopia · 09°41′ N — 39°32′ E
          </span>
        </div>
      </div>
    </footer>
  );
}
