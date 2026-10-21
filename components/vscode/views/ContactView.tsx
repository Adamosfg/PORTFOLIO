'use client';

import React, { useState } from 'react';
import { getContent } from '@/content/content';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';

export default function ContactView() {
  const content = getContent();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(content.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>/* contact.css : direct channels &amp; professional profiles */</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display">
          Contact
        </h1>
        <p className="font-mono text-xs md:text-sm text-[#a6adc8]">
          <span className="text-[#f38ba8]">.hire-adam</span> &#123;{' '}
          <span className="text-[#89b4fa]">status</span>: <span className="text-[#a6e3a1]">&quot;ready-to-interview&quot;</span>;{' '}
          <span className="text-[#89b4fa]">mobility</span>: <span className="text-[#fab387]">&quot;Europe 🇪🇺 / Remote&quot;</span>; &#125;
        </p>
      </div>

      {/* Main Grid: Code Declaration + Direct Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: CSS-rule styled profile block (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#11111b] border border-[#2b2d42] font-mono text-xs md:text-sm leading-relaxed shadow-xl text-[#cdd6f4] flex flex-col justify-between">
          <div>
            <p className="text-[#f38ba8]">.candidate-contact &#123;</p>
            <div className="pl-6 space-y-2.5 py-3">
              <p>
                <span className="text-[#89b4fa]">developer</span>:{' '}
                <span className="text-[#a6e3a1]">&quot;Adam Benbouazza&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">role</span>:{' '}
                <span className="text-[#a6e3a1]">&quot;Full-Stack &amp; AI Engineer&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">email</span>:{' '}
                <span className="text-[#a6e3a1]">&quot;{content.personal.email}&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">phone</span>:{' '}
                <span className="text-[#a6e3a1]">&quot;{content.personal.phone}&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">base-location</span>:{' '}
                <span className="text-[#a6e3a1]">&quot;Casablanca, Morocco 🇲🇦&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">relocation</span>:{' '}
                <span className="text-[#fab387]">&quot;Open to Europe 🇪🇺&quot;</span>;
              </p>
              <p>
                <span className="text-[#89b4fa]">response-time</span>:{' '}
                <span className="text-[#fab387]">&quot;&lt; 24 hours&quot;</span>;
              </p>
            </div>
            <p className="text-[#f38ba8]">&#125;</p>
          </div>

          <div className="pt-6 border-t border-[#202231] mt-6 flex items-center justify-between text-[11px] text-[#6c7086]">
            <span>availability: Immediate</span>
            <span className="text-[#a6e3a1] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#a6e3a1] animate-pulse" />
              <span>Actively Interviewing</span>
            </span>
          </div>
        </div>

        {/* Right: Interactive Direct Channel Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#cba6f7] transition-all space-y-3 shadow-lg flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#11111b] border border-[#2b2d42] text-[#cba6f7]">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono uppercase text-[#6c7086]">Primary</span>
              </div>
              <h3 className="text-sm font-bold text-white font-mono">Email</h3>
              <p className="text-xs font-mono text-[#a6adc8] truncate">
                {content.personal.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2 px-3 rounded-lg bg-[#11111b] hover:bg-[#202231] border border-[#2b2d42] text-xs font-mono text-[#cdd6f4] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#a6e3a1]" /> : <Copy className="w-3.5 h-3.5 text-[#cba6f7]" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${content.personal.email}`}
                className="py-2 px-3 rounded-lg bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] text-xs font-mono font-bold transition-colors flex items-center justify-center gap-1"
                title="Send Email"
              >
                <span>Write ↗</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#89b4fa] transition-all space-y-3 shadow-lg flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#11111b] border border-[#2b2d42] text-[#89b4fa]">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono uppercase text-[#6c7086]">Professional</span>
              </div>
              <h3 className="text-sm font-bold text-white font-mono">LinkedIn</h3>
              <p className="text-xs font-mono text-[#a6adc8] truncate">
                adam-benbouazza-8b551a222
              </p>
            </div>

            <div className="pt-2">
              <a
                href={content.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-[#11111b] hover:bg-[#202231] border border-[#2b2d42] hover:border-[#89b4fa] text-xs font-mono text-[#89b4fa] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#a6e3a1] transition-all space-y-3 shadow-lg flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#11111b] border border-[#2b2d42] text-[#a6e3a1]">
                  <GithubIcon className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono uppercase text-[#6c7086]">Code</span>
              </div>
              <h3 className="text-sm font-bold text-white font-mono">GitHub</h3>
              <p className="text-xs font-mono text-[#a6adc8] truncate">
                github.com/Adamosfg
              </p>
            </div>

            <div className="pt-2">
              <a
                href={content.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-[#11111b] hover:bg-[#202231] border border-[#2b2d42] hover:border-[#a6e3a1] text-xs font-mono text-[#a6e3a1] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Visit Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="p-5 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#f9e2af] transition-all space-y-3 shadow-lg flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-[#11111b] border border-[#2b2d42] text-[#f9e2af]">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono uppercase text-[#6c7086]">Direct</span>
              </div>
              <h3 className="text-sm font-bold text-white font-mono">Phone / WhatsApp</h3>
              <p className="text-xs font-mono text-[#a6adc8] truncate">
                {content.personal.phone}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleCopyPhone}
                className="flex-1 py-2 px-3 rounded-lg bg-[#11111b] hover:bg-[#202231] border border-[#2b2d42] text-xs font-mono text-[#cdd6f4] hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#a6e3a1]" /> : <Copy className="w-3.5 h-3.5 text-[#f9e2af]" />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
              <a
                href={`tel:${content.personal.phone}`}
                className="py-2 px-3 rounded-lg bg-[#181926] hover:bg-[#202231] border border-[#2b2d42] text-[#f9e2af] text-xs font-mono font-bold transition-colors flex items-center justify-center gap-1"
                title="Call Phone"
              >
                <span>Call ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Download Resume Banner */}
      <div className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#cba6f7]" />
            <span>Need an offline copy of my qualifications?</span>
          </h3>
          <p className="text-xs font-mono text-[#6c7086]">
            Download my full CV including LEONI metrics, education, and technical stack.
          </p>
        </div>

        <a
          href="/cv.pdf"
          download="Adam_Benbouazza_Resume.pdf"
          className="px-5 py-2.5 rounded-xl bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#cba6f7]/20 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download CV (.pdf)</span>
        </a>
      </div>
    </div>
  );
}
