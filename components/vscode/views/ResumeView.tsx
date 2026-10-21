'use client';

import React from 'react';
import { getContent } from '@/content/content';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeView() {
  const content = getContent();

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// Adam_Benbouazza_Resume.pdf : official curriculum vitae</span>
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-display">
            Resume / CV
          </h1>

          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Adam_Benbouazza_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] font-mono font-bold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-[#cba6f7]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#181926] hover:bg-[#202231] text-[#a6adc8] hover:text-white border border-[#2b2d42] text-xs font-mono transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* PDF Container / Embed */}
      <div className="rounded-2xl bg-[#161724] border border-[#2b2d42] overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
        <div className="bg-[#11111b] px-4 py-2.5 border-b border-[#2b2d42] flex items-center justify-between text-xs font-mono text-[#a6adc8]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#ef4444]" />
            <span>Adam_Benbouazza_Resume.pdf</span>
          </div>
          <span className="text-[#a6e3a1] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Up to Date (2026)</span>
          </span>
        </div>

        <div className="flex-1 w-full bg-[#11111b] relative min-h-[650px]">
          <iframe
            src="/cv.pdf"
            title="Adam Benbouazza Resume"
            className="w-full h-full min-h-[650px] border-none"
          />
        </div>
      </div>
    </div>
  );
}
