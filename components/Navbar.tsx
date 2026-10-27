'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '/work', anchor: '#work', number: '01' },
  { label: 'About', href: '/about', anchor: '#about', number: '02' },
  { label: 'Stack', href: '/stack', anchor: '#stack', number: '03' },
  { label: 'Timeline', href: '/timeline', anchor: '#timeline', number: '04' },
  { label: 'FAQ', href: '/faq', anchor: '#faq', number: '05' },
  { label: 'Contact', href: '/contact', anchor: '#contact', number: '06' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0c0e]/92 backdrop-blur-md border-b border-[#25272c]/80 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-[#25272c]/40 py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          {/* Editorial Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-xs tracking-widest font-mono text-[#f1f2ec] transition-colors"
            aria-label="Dagnachew Getahun — Home"
          >
            <span className="w-7 h-7 border border-[#3b4038] group-hover:border-[#c6ff3d] group-hover:rotate-[-6deg] transition-all duration-300 grid place-items-center font-serif font-bold text-sm bg-[#14161a]">
              D<span className="text-[#c6ff3d]">.</span>
            </span>
            <span className="font-semibold tracking-[0.16em] uppercase hidden sm:inline-block">
              DAGNACHEW GETAHUN
            </span>
            <span className="font-semibold tracking-[0.16em] uppercase sm:hidden">
              DAGNACHEW
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (isHome && pathname === item.href);
              const targetUrl = isHome ? item.anchor : item.href;
              return (
                <Link
                  key={item.href}
                  href={targetUrl}
                  className={`text-xs tracking-wider transition-colors duration-200 relative py-1 flex items-center gap-1.5 font-mono ${
                    isActive ? 'text-[#c6ff3d]' : 'text-[#9197a0] hover:text-[#f1f2ec]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-[9px] transition-colors ${
                      isActive ? 'text-[#c6ff3d]' : 'text-[#606570]'
                    }`}
                  >
                    {item.number}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c6ff3d]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Availability Status & Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#25272c] bg-[#14161a]/70 hover:border-[#3b4038] transition-colors text-[11px] font-mono text-[#b8bbb2]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff3d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff3d]" />
              </span>
              <span>Available for internships</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-[#f1f2ec] hover:text-[#c6ff3d] hover:bg-[#14161a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c6ff3d]"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0b0c0e]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono text-[#606570] tracking-widest uppercase border-b border-[#25272c] pb-3">
                // Navigation Index
              </span>

              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline justify-between py-3 border-b border-[#1c1e23] text-2xl font-serif text-[#f1f2ec] hover:text-[#c6ff3d] transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-[#9197a0]">{item.number}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-[#25272c]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#b8bbb2]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff3d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff3d]" />
                </span>
                <span>Open for engineering opportunities</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#9197a0]">
                <span>Debre Berhan, Ethiopia</span>
                <a
                  href="mailto:dagne.techverse@gmail.com"
                  className="text-[#c6ff3d] inline-flex items-center gap-1 hover:underline"
                >
                  Write an email <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
