'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';

const TOPICS = [
  'Applied AI / Machine Learning',
  'Cloud Security & DevSecOps',
  'Software Development & Architecture',
  'Internship / Engineering Opportunity',
];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Debre Berhan, Ethiopia is UTC+3 (East Africa Time)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const mailtoHref = `mailto:dagne.techverse@gmail.com?subject=${encodeURIComponent(
    `Inquiry regarding ${selectedTopic}`
  )}&body=${encodeURIComponent(
    `Hello Dagnachew,\n\nI came across your portfolio and would like to discuss: ${selectedTopic}.\n\nBest regards,\n`
  )}`;

  return (
    <section className="py-28 border-b border-[#25272c]/50" id="contact">
      <div className="wrap">
        <div className="border border-[#25272c] bg-[#14161a] p-8 sm:p-14 rounded-lg relative overflow-hidden shadow-2xl">
          {/* Subtle Background Monogram Watermark */}
          <div className="absolute right-[-20px] bottom-[-40px] select-none pointer-events-none font-serif text-[180px] sm:text-[240px] font-bold text-white/[0.02] leading-none">
            DG
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left Column: Heading & Topic Picker */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#c6ff3d]">// 06</span>
                  <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                    Get in Touch · Start a Conversation
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-tight mb-6">
                  Have a challenging problem to solve<span className="text-[#c6ff3d]">?</span>
                </h2>

                <p className="text-base text-[#9197a0] font-sans leading-relaxed max-w-xl mb-8">
                  Whether you are seeking a software engineering intern, exploring an applied AI/ML initiative, or discussing cloud security defense, my inbox is open.
                </p>

                {/* Quick Topic Picker (Soren Hale Style) */}
                <div className="mb-8">
                  <span className="font-mono text-[10px] text-[#606570] tracking-widest uppercase block mb-3">
                    Select an inquiry focus:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                            isSelected
                              ? 'bg-[#c6ff3d] text-[#0b0c0e] font-semibold border border-[#c6ff3d]'
                              : 'bg-[#101216] border border-[#25272c] text-[#9197a0] hover:text-[#f1f2ec] hover:border-[#393d45]'
                          }`}
                        >
                          {isSelected && <CheckCircle2 size={13} className="text-[#0b0c0e]" />}
                          <span>{topic}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Direct Mail Action Button */}
              <div>
                <a
                  href={mailtoHref}
                  className="sh-btn sh-btn-solid"
                >
                  <span>Start Conversation via Email</span>
                  <span className="sh-btn-icon">
                    <ArrowUpRight size={16} />
                    <ArrowUpRight size={16} />
                  </span>
                </a>
                <p className="mt-3 font-mono text-[10px] text-[#606570]">
                  Pre-fills inquiry for: <span className="text-[#f1f2ec]">{selectedTopic}</span>
                </p>
              </div>
            </div>

            {/* Right Column: Channels & Local Time */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#25272c] pt-8 lg:pt-0 lg:pl-10">
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-[#606570] tracking-widest uppercase block mb-2">
                  Direct Channels
                </span>

                {/* Email Link */}
                <a
                  href="mailto:dagne.techverse@gmail.com"
                  className="group flex items-center justify-between p-3.5 rounded bg-[#101216] border border-[#25272c] hover:border-[#c6ff3d]/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#c6ff3d]" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-[#606570] uppercase">Email</span>
                      <span className="text-xs sm:text-sm font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                        dagne.techverse@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#606570] group-hover:text-[#c6ff3d] transition-colors" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com/in/dagnachewget/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded bg-[#101216] border border-[#25272c] hover:border-[#c6ff3d]/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-[#c6ff3d]" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-[#606570] uppercase">LinkedIn</span>
                      <span className="text-xs sm:text-sm font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                        linkedin.com/in/dagnachewget
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#606570] group-hover:text-[#c6ff3d] transition-colors" />
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/dagneget"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded bg-[#101216] border border-[#25272c] hover:border-[#c6ff3d]/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-[#c6ff3d]" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-[#606570] uppercase">GitHub</span>
                      <span className="text-xs sm:text-sm font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                        github.com/dagneget
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#606570] group-hover:text-[#c6ff3d] transition-colors" />
                </a>
              </div>

              {/* Location & Local Clock (Matching Soren Hale Reference) */}
              <div className="mt-8 pt-6 border-t border-[#25272c]">
                <div className="flex items-center justify-between font-mono text-xs text-[#9197a0] mb-2">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className="text-[#c6ff3d]" /> Debre Berhan, ET
                  </span>
                  <span className="flex items-center gap-1.5 text-[#f1f2ec]">
                    <Clock size={14} className="text-[#c6ff3d]" /> {localTime || '12:00:00'} (EAT)
                  </span>
                </div>
                <p className="font-mono text-[10px] text-[#606570]">
                  UTC+3 · Typical response time within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
