'use client';

import React from 'react';
import { getContent } from '@/content/content';
import { Terminal, Star, GitFork, BookOpen, ExternalLink, Download } from 'lucide-react';

export default function ReadmeView() {
  const content = getContent();

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// README.md : repository profile &amp; technical overview</span>
        </p>
      </div>

      <div className="p-6 md:p-10 rounded-2xl bg-[#161724] border border-[#2b2d42] space-y-6 shadow-xl text-[#cdd6f4]">
        {/* Header badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-[#11111b] border border-[#2b2d42] text-[11px] font-mono text-[#89b4fa]">
            role: Full-Stack &amp; AI Engineer
          </span>
          <span className="px-2.5 py-1 rounded bg-[#11111b] border border-[#2b2d42] text-[11px] font-mono text-[#a6e3a1]">
            status: Open to relocate in Europe 🇪🇺
          </span>
          <span className="px-2.5 py-1 rounded bg-[#11111b] border border-[#2b2d42] text-[11px] font-mono text-[#f9e2af]">
            degree: Bac+5 Master CS &amp; AI
          </span>
        </div>

        <div className="border-b border-[#2b2d42] pb-6 space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white font-display">
            Hi, I&apos;m {content.personal.name} 👋
          </h1>
          <p className="text-base text-[#a6adc8] leading-relaxed">
            {content.hero.tagline}
          </p>
        </div>

        {/* What I Do */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">
            🚀 What I Do
          </h2>
          <ul className="space-y-2 text-sm text-[#cdd6f4] list-disc list-inside">
            <li>
              <strong>Industrial Machine Learning:</strong> Designing XGBoost, SHAP, and RAG architectures that operate under real-time telemetry constraints.
            </li>
            <li>
              <strong>High-Throughput Backends:</strong> Asynchronous microservices with FastAPI, Spring Boot 3, and Node.js with PostgreSQL &amp; Redis.
            </li>
            <li>
              <strong>Interactive Frontends:</strong> Modern responsive web applications built with Next.js, React, TypeScript, and Tailwind CSS.
            </li>
          </ul>
        </div>

        {/* Flagship Production Systems */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">
            ⚡ Flagship Production Systems
          </h2>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] flex justify-between items-center">
              <span className="text-white font-bold">LEONI Automotive Telemetry &amp; Anomaly Engine</span>
              <span className="text-[#a6e3a1]">85.5% precision · -55% DB latency</span>
            </div>
            <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] flex justify-between items-center">
              <span className="text-white font-bold">Cabinet Médical Clinical Hub &amp; Scheduling</span>
              <span className="text-[#89b4fa]">0% collisions · Pessimistic lock</span>
            </div>
            <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] flex justify-between items-center">
              <span className="text-white font-bold">SNRT High-Concurrency Newsflash &amp; Telemetry Feed</span>
              <span className="text-[#fab387]">&lt;200ms WebSocket push</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-4 border-t border-[#2b2d42] flex flex-wrap items-center gap-3">
          <a
            href={content.personal.cvUrl}
            download="Adam_Benbouazza_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] font-mono font-bold text-xs transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV (PDF)</span>
          </a>
          <a
            href={content.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#11111b] border border-[#2b2d42] hover:border-[#89b4fa] text-[#cdd6f4] text-xs font-mono transition-colors flex items-center gap-2"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
