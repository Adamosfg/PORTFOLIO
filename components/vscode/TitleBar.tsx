'use client';

import React from 'react';
import { Search, Sparkles, Terminal, Download } from 'lucide-react';
import { PanelLeftIcon, GithubIcon } from './Icons';
import { getContent } from '@/content/content';

interface TitleBarProps {
  onOpenCommandPalette: () => void;
  onToggleTerminal: () => void;
  onToggleSidebar: () => void;
  onToggleCopilot: () => void;
  onResetView?: () => void;
}

export default function TitleBar({
  onOpenCommandPalette,
  onToggleTerminal,
  onToggleSidebar,
  onToggleCopilot,
  onResetView,
}: TitleBarProps) {
  const content = getContent();

  const handleToggleFullscreen = () => {
    if (typeof document !== 'undefined') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <header className="h-10 bg-[#141520] border-b border-[#202231] flex items-center justify-between px-3 select-none text-xs font-mono shrink-0 z-30">
      {/* Left: Window Controls + Menu Items */}
      <div className="flex items-center gap-4">
        {/* macOS Traffic Dots */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={onResetView}
            title="Close / Reset to home.tsx"
            className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80 transition-opacity"
          />
          <button
            onClick={onToggleTerminal}
            title="Minimize / Toggle Terminal"
            className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:opacity-80 transition-opacity"
          />
          <button
            onClick={handleToggleFullscreen}
            title="Toggle Fullscreen"
            className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Top Menu Dropdown items */}
        <div className="hidden md:flex items-center gap-3 text-[#a6adc8] text-[12px]">
          <button
            onClick={onOpenCommandPalette}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            File
          </button>
          <button
            onClick={onOpenCommandPalette}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            Edit
          </button>
          <button
            onClick={onToggleSidebar}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            View
          </button>
          <button
            onClick={onOpenCommandPalette}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            Go
          </button>
          <button
            onClick={onToggleTerminal}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            Run
          </button>
          <button
            onClick={onToggleTerminal}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            Terminal
          </button>
          <button
            onClick={onOpenCommandPalette}
            className="hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors"
          >
            Help
          </button>
          <button
            onClick={onToggleCopilot}
            className="text-[#cba6f7] hover:text-white px-1.5 py-0.5 rounded hover:bg-[#202231] transition-colors font-semibold flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            <span>Copilot</span>
          </button>
        </div>
      </div>

      {/* Center: Command Palette search input (Matches screenshot!) */}
      <div className="flex-1 max-w-sm sm:max-w-md mx-2">
        <button
          onClick={onOpenCommandPalette}
          className="w-full flex items-center justify-between px-3 py-1 rounded-md bg-[#0f1017] border border-[#2b2d42] hover:border-[#45475a] text-[#6c7086] hover:text-[#cdd6f4] transition-all group"
        >
          <div className="flex items-center gap-2 truncate">
            <Search className="w-3.5 h-3.5 text-[#6c7086] group-hover:text-[#cba6f7] transition-colors shrink-0" />
            <span className="truncate text-xs">
              adam-benbouazza : portfolio
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#6c7086] shrink-0 font-sans">
            <kbd className="px-1 py-0.2 rounded bg-[#181926] border border-[#2b2d42]">Ctrl</kbd>
            <kbd className="px-1 py-0.2 rounded bg-[#181926] border border-[#2b2d42]">P</kbd>
          </div>
        </button>
      </div>

      {/* Right: Window / Utility Controls */}
      <div className="flex items-center gap-1.5 text-[#a6adc8]">
        <button
          onClick={onToggleSidebar}
          title="Toggle Sidebar (Ctrl+B)"
          className="p-1.5 rounded hover:bg-[#202231] hover:text-white transition-colors"
        >
          <PanelLeftIcon className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onToggleTerminal}
          title="Toggle Terminal Panel (`)"
          className="p-1.5 rounded hover:bg-[#202231] hover:text-white transition-colors"
        >
          <Terminal className="w-3.5 h-3.5" />
        </button>

        <a
          href="/cv.pdf"
          download="Adam_Benbouazza_Resume.pdf"
          title="Download Resume"
          className="p-1.5 rounded hover:bg-[#202231] hover:text-white transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-[#89b4fa]" />
        </a>

        <a
          href={content.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="p-1.5 rounded hover:bg-[#202231] hover:text-white transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#a6e3a1]" />
        </a>
      </div>
    </header>
  );
}
