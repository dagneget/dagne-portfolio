'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Mail, Linkedin, Github, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TOPICS = [
  'Applied AI / Machine Learning',
  'Cloud Security & DevSecOps',
  'Software Development & Architecture',
  'Internship / Engineering Opportunity',
];

const TIMELINES = [
  'Immediate (< 1 month)',
  'Upcoming Academic Term',
  'Full-Time Post Graduation (Jan 2027)',
  'Open Exploration',
];

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>(TOPICS[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(TIMELINES[0]);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
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
    `Inquiry regarding ${selectedTopic} (${selectedTimeline})`
  )}&body=${encodeURIComponent(
    `Hello Dagnachew,\n\nI would like to discuss: ${selectedTopic}.\nTimeline preference: ${selectedTimeline}.\n\nBest regards,\n`
  )}`;

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
              <span className="font-mono text-xs text-[#c6ff3d]">// 06</span>
              <span className="font-mono text-[11px] text-[#9197a0] tracking-widest uppercase">
                Contact & Inquiry
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#f1f2ec] tracking-tight leading-[1.04] mb-6">
              Tell me what you <br />
              <span className="italic font-normal text-[#9197a0]">are building</span>
              <span className="text-[#c6ff3d]">.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9197a0] font-sans leading-relaxed">
              Whether you have a software engineering role, an AI/ML research initiative, or a security audit to discuss, select your focus below to start the conversation.
            </p>
          </div>

          {/* Interactive Project Inquiry Card */}
          <div className="p-8 sm:p-12 rounded-2xl border border-[#25272c] bg-[#14161a] shadow-2xl mb-16 relative overflow-hidden">
            <div className="space-y-8">
              {/* Step 01: Focus Topic */}
              <div>
                <span className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider block mb-3">
                  01 // What is the primary focus?
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {TOPICS.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
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

              {/* Step 02: Timeline */}
              <div className="pt-6 border-t border-[#25272c]">
                <span className="font-mono text-xs text-[#c6ff3d] uppercase tracking-wider block mb-3">
                  02 // Desired timeline?
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {TIMELINES.map((time) => {
                    const isSelected = selectedTimeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTimeline(time)}
                        className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-[#c6ff3d] text-[#0b0c0e] font-semibold border border-[#c6ff3d]'
                            : 'bg-[#101216] border border-[#25272c] text-[#9197a0] hover:text-[#f1f2ec] hover:border-[#393d45]'
                        }`}
                      >
                        {isSelected && <CheckCircle2 size={13} className="text-[#0b0c0e]" />}
                        <span>{time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 03: Action */}
              <div className="pt-8 border-t border-[#25272c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-mono text-[#606570] uppercase tracking-wider block mb-1">
                    Inquiry Summary
                  </span>
                  <p className="text-xs font-mono text-[#f1f2ec]">
                    {selectedTopic} <span className="text-[#606570]">·</span> {selectedTimeline}
                  </p>
                </div>

                <a href={mailtoHref} className="sh-btn sh-btn-solid">
                  <span>Send Email Message</span>
                  <span className="sh-btn-icon">
                    <ArrowUpRight size={16} />
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Communication Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            <a
              href="mailto:dagne.techverse@gmail.com"
              className="p-6 rounded-xl border border-[#25272c] bg-[#14161a] hover:border-[#c6ff3d]/60 transition-colors group flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between text-[#606570] mb-4">
                <Mail size={20} className="text-[#c6ff3d]" />
                <ArrowUpRight size={16} className="group-hover:text-[#c6ff3d] transition-colors" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#606570] uppercase block">Direct Email</span>
                <strong className="text-xs font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                  dagne.techverse@gmail.com
                </strong>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/dagnachewget/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-[#25272c] bg-[#14161a] hover:border-[#c6ff3d]/60 transition-colors group flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between text-[#606570] mb-4">
                <Linkedin size={20} className="text-[#c6ff3d]" />
                <ArrowUpRight size={16} className="group-hover:text-[#c6ff3d] transition-colors" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#606570] uppercase block">LinkedIn</span>
                <strong className="text-xs font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                  linkedin.com/in/dagnachewget
                </strong>
              </div>
            </a>

            <a
              href="https://github.com/dagneget"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl border border-[#25272c] bg-[#14161a] hover:border-[#c6ff3d]/60 transition-colors group flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between text-[#606570] mb-4">
                <Github size={20} className="text-[#c6ff3d]" />
                <ArrowUpRight size={16} className="group-hover:text-[#c6ff3d] transition-colors" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#606570] uppercase block">GitHub</span>
                <strong className="text-xs font-mono text-[#f1f2ec] group-hover:text-[#c6ff3d] transition-colors">
                  github.com/dagneget
                </strong>
              </div>
            </a>
          </div>

          {/* Location & Local Clock Card (Soren Hale Pattern) */}
          <div className="p-6 rounded-xl border border-[#25272c] bg-[#101216] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9197a0]">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#c6ff3d]" />
              <span>Debre Berhan, Ethiopia · 09°41′ N — 39°32′ E</span>
            </div>

            <div className="flex items-center gap-2 text-[#f1f2ec]">
              <Clock size={16} className="text-[#c6ff3d]" />
              <span>Local time: {localTime || '12:00:00'} (UTC+3, EAT)</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
