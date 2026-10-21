'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { getContent } from '@/content/content';

// ponytail: Clean, minimal sticky nav in plain sentence case with zero terminal gimmicks
export default function Navbar() {
  const content = getContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Name / Mark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-text hover:text-accent transition-colors"
          aria-label="Adam Benbouazza - Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-btn bg-surface border border-border text-xs font-mono font-bold text-accent group-hover:border-accent transition-colors">
            AB
          </span>
          <span className="font-semibold text-text">{content.personal.name}</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-text-muted">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Theme Toggle + Download CV */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={content.nav.cvButton.href}
            download="CV_Adam_Benbouazza.pdf"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-btn bg-accent text-accent-contrast hover:opacity-90 transition-opacity"
            aria-label="Download CV as PDF"
          >
            {content.nav.cvButton.label}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-btn border border-border text-text-muted hover:text-text"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {content.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base text-text-muted hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-border">
            <a
              href={content.nav.cvButton.href}
              download="CV_Adam_Benbouazza.pdf"
              className="block w-full text-center py-2.5 text-sm font-semibold rounded-btn bg-accent text-accent-contrast hover:opacity-90"
            >
              {content.nav.cvButton.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
