"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-amber-100/50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight shrink-0"
        >
          <span className="text-3xl">🎮</span>
          <span className="text-terracotta">Paralives</span>
          <span className="text-warm-brown">Guide</span>
          <span className="text-muted text-sm font-normal">.wiki</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7 font-semibold text-sm">
          <Link href="/" className="text-terracotta transition border-b-2 border-terracotta pb-1">
            Home
          </Link>
          <Link href="/guides" className="hover:text-terracotta transition">
            Guides
          </Link>
          <Link href="/guides#build-mode" className="hover:text-terracotta transition">
            Build Mode
          </Link>
          <Link href="/guides#characters" className="hover:text-terracotta transition">
            Characters
          </Link>
          <Link href="/guides#careers" className="hover:text-terracotta transition">
            Careers
          </Link>
          <Link href="/guides#achievements-secrets" className="hover:text-terracotta transition">
            Achievements
          </Link>
          <Link href="/about" className="hover:text-terracotta transition">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl p-2 -mr-2 rounded-lg hover:bg-amber-50 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 space-y-1 bg-white border-t border-amber-100/40">
          <Link href="/" className="block px-4 py-3 rounded-xl font-semibold bg-terracotta/10 text-terracotta transition" onClick={() => setIsOpen(false)}>
            🏠 Home
          </Link>
          <Link href="/guides" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            📖 Guides
          </Link>
          <Link href="/guides#build-mode" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            🏠 Build Mode
          </Link>
          <Link href="/guides#characters" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            👤 Characters
          </Link>
          <Link href="/guides#careers" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            💼 Careers
          </Link>
          <Link href="/guides#achievements-secrets" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            🏆 Achievements
          </Link>
          <hr className="border-amber-100/40 my-2" />
          <Link href="/about" className="block px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            📖 About
          </Link>
          <Link href="/privacy" className="block px-4 py-3 rounded-xl text-sm text-muted hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            🔒 Privacy Policy
          </Link>
          <Link href="/contact" className="block px-4 py-3 rounded-xl text-sm text-muted hover:bg-amber-50 transition" onClick={() => setIsOpen(false)}>
            📬 Contact
          </Link>
        </div>
      )}
    </header>
  );
}
