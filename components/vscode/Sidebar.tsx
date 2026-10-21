'use client';

import React, { useState } from 'react';
import { EditorFileId, SidebarView } from './types';
import FileIcon from './FileIcon';
import {
  ChevronDown,
  ChevronRight,
  GitBranch,
  Search,
  Sparkles,
  CheckCircle,
  ExternalLink,
  Sliders,
  Palette,
  Download,
} from 'lucide-react';
import { getContent } from '@/content/content';

interface SidebarProps {
  activeFile: EditorFileId;
  onOpenFile: (fileId: EditorFileId) => void;
  activeView: SidebarView;
  onToggleCopilot: () => void;
  isOpen: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({
  activeFile,
  onOpenFile,
  activeView,
  onToggleCopilot,
  isOpen,
  onCloseMobile,
}: SidebarProps) {
  const content = getContent();
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleFileClick = (fileId: EditorFileId) => {
    if (fileId === 'Adam_Benbouazza_Resume.pdf') {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Adam_Benbouazza_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onCloseMobile?.();
      return;
    }
    onOpenFile(fileId);
    onCloseMobile?.();
  };

  const files: Array<{
    id: EditorFileId;
    name: string;
    iconType: 'react' | 'html' | 'javascript' | 'json' | 'typescript' | 'css' | 'markdown' | 'pdf';
  }> = [
    { id: 'home.tsx', name: 'home.tsx', iconType: 'react' },
    { id: 'about.html', name: 'about.html', iconType: 'html' },
    { id: 'projects.js', name: 'projects.js', iconType: 'javascript' },
    { id: 'skills.json', name: 'skills.json', iconType: 'json' },
    { id: 'experience.ts', name: 'experience.ts', iconType: 'typescript' },
    { id: 'contact.css', name: 'contact.css', iconType: 'css' },
    { id: 'README.md', name: 'README.md', iconType: 'markdown' },
    { id: 'Adam_Benbouazza_Resume.pdf', name: 'Adam_Benbouazza_Resume.pdf', iconType: 'pdf' },
  ];

  const gitCommits = [
    {
      hash: '9f2a4e1',
      msg: 'feat(leoni): anomaly engine XGBoost 85.5% precision & TreeSHAP',
      time: 'Feb 2026',
    },
    {
      hash: '7c1d3b0',
      msg: 'feat(auth): clinical scheduling pessimistic transaction lock',
      time: 'Mar 2025',
    },
    {
      hash: '3e8a21c',
      msg: 'feat(realtime): snrt live telemetry websocket push <200ms',
      time: 'May 2024',
    },
    {
      hash: '1b4f99a',
      msg: 'feat(rag): bilingual enterprise vector search with Pinecone & FAISS',
      time: '2025',
    },
    {
      hash: '5d92e10',
      msg: 'feat(infra): docker compose & postgresql partitioning schemas',
      time: '2024',
    },
  ];

  const extensions = [
    { name: 'FastAPI (Python)', publisher: 'tiangolo', desc: 'High-performance async APIs', stars: '5.0' },
    { name: 'React 19 & Next.js', publisher: 'Vercel', desc: 'Server components & App Router', stars: '5.0' },
    { name: 'Docker & Compose', publisher: 'Docker Inc.', desc: 'Production containerization', stars: '4.9' },
    { name: 'PostgreSQL & Redis', publisher: 'Database Tools', desc: 'Indexing, partitioning, pub/sub', stars: '4.9' },
    { name: 'XGBoost & SHAP', publisher: 'ML Community', desc: 'Explainable gradient boosting', stars: '4.8' },
    { name: 'TypeScript', publisher: 'Microsoft', desc: 'Strict static type validation', stars: '5.0' },
  ];

  return (
    <aside className="w-64 bg-[#0f1017] border-r border-[#202231] flex flex-col justify-between select-none shrink-0 text-xs font-mono z-10 h-full">
      {/* View: Explorer (Default) */}
      {activeView === 'explorer' && (
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Sidebar Title */}
            <div className="px-4 py-3 text-[11px] font-semibold tracking-wider text-[#6c7086] uppercase flex items-center justify-between border-b border-[#202231]/50">
              <span>EXPLORER</span>
              <span className="text-[10px] text-[#45475a]">ADAM-WORKSPACE</span>
            </div>

            {/* Accordion: PORTFOLIO */}
            <div className="py-2">
              <button
                onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
                className="w-full flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-[#cdd6f4] hover:bg-[#181926] tracking-wider uppercase transition-colors"
              >
                {isPortfolioExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 text-[#6c7086]" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-[#6c7086]" />
                )}
                <span>PORTFOLIO</span>
              </button>

              {/* File List */}
              {isPortfolioExpanded && (
                <div className="mt-1 space-y-0.5">
                  {files.map((file) => {
                    const isActive = activeFile === file.id;
                    const isResume = file.id === 'Adam_Benbouazza_Resume.pdf';
                    return (
                      <button
                        key={file.id}
                        onClick={() => handleFileClick(file.id)}
                        title={isResume ? 'Download Adam_Benbouazza_Resume.pdf' : file.name}
                        className={`w-full flex items-center justify-between px-6 py-1.5 transition-colors text-left truncate group ${
                          isActive
                            ? 'bg-[#1e1e2e] text-white font-semibold border-l-2 border-[#cba6f7]'
                            : 'text-[#a6adc8] hover:bg-[#161724] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileIcon type={file.iconType} className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{file.name}</span>
                        </div>

                        {isResume && (
                          <Download className="w-3.5 h-3.5 text-[#89b4fa] opacity-70 group-hover:opacity-100 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Bottom of Sidebar: Copilot button & Git info (Matches screenshot!) */}
          <div className="p-3 border-t border-[#202231] space-y-2 bg-[#0d0e15]">
            <button
              onClick={onToggleCopilot}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#181926] hover:bg-[#202231] border border-[#2b2d42] text-[#cba6f7] hover:text-white transition-all shadow-sm group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#cba6f7] group-hover:rotate-12 transition-transform" />
                <span className="font-semibold text-xs">Adam&apos;s Copilot</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#cba6f7] text-[#11111b] font-bold">
                AI
              </span>
            </button>

            <div className="flex items-center justify-between px-2 text-[11px] text-[#6c7086]">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#89b4fa]" />
                <span>main</span>
              </span>
              <span className="text-[#a6e3a1]">↑1 +3</span>
            </div>
          </div>
        </div>
      )}

      {/* View: Search */}
      {activeView === 'search' && (
        <div className="p-3 space-y-3 h-full overflow-y-auto">
          <div className="text-[11px] font-semibold text-[#6c7086] uppercase tracking-wider">
            SEARCH WORKSPACE
          </div>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#6c7086]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across files..."
              className="w-full pl-8 pr-3 py-1.5 rounded bg-[#181926] border border-[#2b2d42] text-xs text-white placeholder-[#6c7086] focus:border-[#cba6f7] focus:outline-none"
            />
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-[10px] text-[#6c7086] uppercase">Matching files:</p>
            {files
              .filter((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((file) => (
                <button
                  key={file.id}
                  onClick={() => handleFileClick(file.id)}
                  className="w-full flex items-center justify-between p-2 rounded hover:bg-[#181926] text-left text-[#cdd6f4]"
                >
                  <div className="flex items-center gap-2">
                    <FileIcon type={file.iconType} className="w-3.5 h-3.5" />
                    <span>{file.name}</span>
                  </div>
                  {file.id === 'Adam_Benbouazza_Resume.pdf' && (
                    <Download className="w-3.5 h-3.5 text-[#89b4fa]" />
                  )}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* View: Git / Source Control */}
      {activeView === 'git' && (
        <div className="p-3 space-y-3 h-full overflow-y-auto">
          <div className="text-[11px] font-semibold text-[#6c7086] uppercase tracking-wider flex items-center justify-between">
            <span>SOURCE CONTROL</span>
            <span className="text-[#a6e3a1]">main</span>
          </div>

          <div className="space-y-2 pt-1">
            <p className="text-[10px] text-[#6c7086] uppercase">Commit Log (5 commits)</p>
            {gitCommits.map((c, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#161724] border border-[#2b2d42] space-y-1"
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#89b4fa] font-bold">{c.hash}</span>
                  <span className="text-[#6c7086]">{c.time}</span>
                </div>
                <p className="text-[11px] text-[#cdd6f4] leading-snug">{c.msg}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View: Extensions */}
      {activeView === 'extensions' && (
        <div className="p-3 space-y-3 h-full overflow-y-auto">
          <div className="text-[11px] font-semibold text-[#6c7086] uppercase tracking-wider">
            INSTALLED EXTENSIONS ({extensions.length})
          </div>

          <div className="space-y-2">
            {extensions.map((ext, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#161724] border border-[#2b2d42] space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs">{ext.name}</span>
                  <span className="text-[#f9e2af] text-[10px]">★ {ext.stars}</span>
                </div>
                <p className="text-[11px] text-[#6c7086]">{ext.desc}</p>
                <p className="text-[10px] text-[#89b4fa]">{ext.publisher}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View: Settings */}
      {activeView === 'settings' && (
        <div className="p-3 space-y-4 h-full overflow-y-auto">
          <div className="text-[11px] font-semibold text-[#6c7086] uppercase tracking-wider flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-[#cba6f7]" />
            <span>THEME &amp; SETTINGS</span>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] text-[#a6adc8]">Active Theme</p>
            <div className="p-3 rounded-lg bg-[#181926] border border-[#cba6f7] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-xs">💜 Adam Dark (VS Code)</span>
                <span className="w-2 h-2 rounded-full bg-[#a6e3a1]" />
              </div>
              <p className="text-[10px] text-[#6c7086]">Catppuccin &amp; Tokyo Night inspired dark theme</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] text-[#a6adc8]">Editor Preferences</p>
            <div className="p-3 rounded-lg bg-[#161724] border border-[#2b2d42] space-y-2 text-[11px] text-[#cdd6f4]">
              <div className="flex justify-between">
                <span>Font Family</span>
                <span className="text-[#89b4fa]">JetBrains Mono</span>
              </div>
              <div className="flex justify-between">
                <span>Tab Size</span>
                <span className="text-[#a6e3a1]">2 spaces</span>
              </div>
              <div className="flex justify-between">
                <span>Format on Save</span>
                <span className="text-[#cba6f7]">Prettier (true)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
