'use client';

import React from 'react';
import Image from 'next/image';
import { getContent } from '@/content/content';
import { Sparkles, Terminal, FileText, ArrowRight, Code2, Globe, Cpu, Database, Mail } from 'lucide-react';
import { EditorFileId } from '../types';

interface HomeViewProps {
  onOpenFile: (fileId: EditorFileId) => void;
  onOpenTerminal?: () => void;
}

export default function HomeView({ onOpenFile, onOpenTerminal }: HomeViewProps) {
  const content = getContent();

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// home.tsx : digital profile &amp; active status</span>
        </p>
      </div>

      {/* Hero Profile Header */}
      <div className="relative rounded-2xl bg-[#161724]/90 border border-[#2b2d42] p-6 md:p-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cba6f7]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          {/* Avatar with Status Ring */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-[#cba6f7]/40 shadow-xl relative bg-[#181926]">
              <Image
                src={content.personal.avatarUrl}
                alt={content.personal.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
            {/* Status indicator */}
            <span
              className="absolute -bottom-1 -right-1 flex h-4 w-4"
              title="Open to Europe Relocation &amp; Remote"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a6e3a1] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#a6e3a1] border-2 border-[#11111b]" />
            </span>
          </div>

          {/* Headline details */}
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#11111b] text-[#a6e3a1] border border-[#a6e3a1]/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#a6e3a1]" />
                <span>Open to relocate in Europe · Casablanca, Morocco</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#181926] text-[#89b4fa] border border-[#313244]">
                Bac+5 Master AI &amp; CS
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-display">
              {content.personal.name}
            </h1>

            <p className="text-base md:text-lg text-[#cdd6f4] max-w-2xl font-medium leading-relaxed">
              {content.personal.role}. I design and deploy robust machine learning systems, high-throughput microservices, and reactive full-stack web applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenFile('projects.js')}
                className="px-4 py-2 rounded-lg bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#cba6f7]/20"
              >
                <span>View projects.js</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={content.personal.cvUrl}
                download="Adam_Benbouazza_Resume.pdf"
                className="px-4 py-2 rounded-lg bg-[#181926] hover:bg-[#202231] text-white border border-[#2b2d42] text-xs font-mono transition-colors flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#89b4fa]" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => onOpenFile('contact.css')}
                className="px-4 py-2 rounded-lg bg-[#181926] hover:bg-[#202231] text-[#a6adc8] hover:text-white border border-[#2b2d42] text-xs font-mono transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#f9e2af]" />
                <span>Get in touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Code Snippet Card */}
      <div className="rounded-2xl bg-[#11111b] border border-[#2b2d42] overflow-hidden shadow-xl">
        <div className="bg-[#181926] px-4 py-2.5 border-b border-[#2b2d42] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-[#cba6f7]" />
            <span className="font-mono text-xs text-[#a6adc8]">engineer.config.ts</span>
          </div>
          <span className="font-mono text-[10px] text-[#6c7086]">TypeScript 5.7</span>
        </div>

        <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-[#cdd6f4]">
          <p>
            <span className="text-[#cba6f7]">export const</span>{' '}
            <span className="text-[#89b4fa]">engineer</span>:{' '}
            <span className="text-[#f9e2af]">EngineerProfile</span> = &#123;
          </p>
          <div className="pl-6 space-y-1">
            <p>
              <span className="text-[#89b4fa]">name</span>:{' '}
              <span className="text-[#a6e3a1]">&quot;Adam Benbouazza&quot;</span>,
            </p>
            <p>
              <span className="text-[#89b4fa]">primaryDomain</span>:{' '}
              <span className="text-[#a6e3a1]">&quot;Machine Learning &amp; Full-Stack Systems&quot;</span>,
            </p>
            <p>
              <span className="text-[#89b4fa]">education</span>:{' '}
              <span className="text-[#a6e3a1]">&quot;Master&apos;s Bac+5 in CS &amp; AI (FSAC Casablanca)&quot;</span>,
            </p>
            <p>
              <span className="text-[#89b4fa]">flagshipProject</span>:{' '}
              <span className="text-[#a6e3a1]">&quot;Automotive Anomaly Engine @ LEONI Wiring Systems (85.5% precision)&quot;</span>,
            </p>
            <p>
              <span className="text-[#89b4fa]">keySkills</span>: [
              <span className="text-[#a6e3a1]">&quot;FastAPI&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;Python&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;React&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;TypeScript&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;Docker&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;PostgreSQL&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;XGBoost&quot;</span>,{' '}
              <span className="text-[#a6e3a1]">&quot;Redis&quot;</span>],
            </p>
            <p>
              <span className="text-[#89b4fa]">availability</span>:{' '}
              <span className="text-[#fab387]">&quot;Immediate / Relocation to Europe 🇪🇺&quot;</span>,
            </p>
          </div>
          <p>&#125;;</p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Model Precision', value: '85.5%', note: 'Scrap root-cause anomaly detection at LEONI' },
          { label: 'Daily Telemetry', value: '50k+', note: 'Industrial sensors streamed and indexed' },
          { label: 'WebSocket Push', value: '<200ms', note: 'Real-time broadcast alerts at SNRT' },
          { label: 'Booking Conflicts', value: '0%', note: 'Prevented via DB locking at Cabinet Médical' },
        ].map((metric, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-[#161724] border border-[#2b2d42] space-y-1 hover:border-[#cba6f7]/50 transition-colors"
          >
            <p className="text-2xl md:text-3xl font-black text-[#cba6f7] font-display">
              {metric.value}
            </p>
            <p className="text-xs font-bold text-white font-mono">{metric.label}</p>
            <p className="text-[11px] text-[#6c7086] leading-snug">{metric.note}</p>
          </div>
        ))}
      </div>

      {/* Fast Navigation Quick-Picks */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs uppercase tracking-wider text-[#a6adc8]">
          Quick Workspace Directory
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onOpenFile('projects.js')}
            className="p-4 rounded-xl bg-[#161724] border border-[#2b2d42] hover:border-[#f7df1e] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-[#f7df1e] text-[#11111b] font-bold text-[10px] px-1 py-0.5 rounded">
                JS
              </span>
              <span className="text-xs font-mono text-[#6c7086] group-hover:text-white">→</span>
            </div>
            <p className="font-mono text-xs font-bold text-white">projects.js</p>
            <p className="text-[11px] text-[#6c7086] mt-1">8 Production Systems &amp; AI Engines</p>
          </button>

          <button
            onClick={() => onOpenFile('skills.json')}
            className="p-4 rounded-xl bg-[#161724] border border-[#2b2d42] hover:border-[#fbc02d] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#fbc02d] font-bold text-xs font-mono">&#123;&#125;</span>
              <span className="text-xs font-mono text-[#6c7086] group-hover:text-white">→</span>
            </div>
            <p className="font-mono text-xs font-bold text-white">skills.json</p>
            <p className="text-[11px] text-[#6c7086] mt-1">Tech Stack &amp; Architecture Tools</p>
          </button>

          <button
            onClick={() => onOpenFile('experience.ts')}
            className="p-4 rounded-xl bg-[#161724] border border-[#2b2d42] hover:border-[#3178c6] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-[#3178c6] text-white font-bold text-[10px] px-1 py-0.5 rounded">
                TS
              </span>
              <span className="text-xs font-mono text-[#6c7086] group-hover:text-white">→</span>
            </div>
            <p className="font-mono text-xs font-bold text-white">experience.ts</p>
            <p className="text-[11px] text-[#6c7086] mt-1">LEONI, Cabinet Médical, SNRT</p>
          </button>

          <button
            onClick={() => onOpenFile('about.html')}
            className="p-4 rounded-xl bg-[#161724] border border-[#2b2d42] hover:border-[#e44d26] text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#e44d26] font-bold text-xs font-mono">&lt;&gt;</span>
              <span className="text-xs font-mono text-[#6c7086] group-hover:text-white">→</span>
            </div>
            <p className="font-mono text-xs font-bold text-white">about.html</p>
            <p className="text-[11px] text-[#6c7086] mt-1">Education, Certifications, Bio</p>
          </button>
        </div>
      </div>
    </div>
  );
}
