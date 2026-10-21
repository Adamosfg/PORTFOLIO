'use client';

import React, { useState, useEffect } from 'react';
import { GitBranch, AlertTriangle, Sparkles, Check, Clock } from 'lucide-react';
import { EditorFileId, SidebarView } from './types';

interface StatusBarProps {
  activeFile: EditorFileId;
  onToggleCopilot: () => void;
  onSelectView: (view: SidebarView) => void;
  onToggleTerminal: () => void;
}

export default function StatusBar({
  activeFile,
  onToggleCopilot,
  onSelectView,
  onToggleTerminal,
}: StatusBarProps) {
  const [time, setTime] = useState<string>('13:37');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const getLanguage = (fileId: EditorFileId) => {
    if (fileId.endsWith('.js')) return 'JavaScript';
    if (fileId.endsWith('.ts') || fileId.endsWith('.tsx')) return 'TypeScript';
    if (fileId.endsWith('.html')) return 'HTML';
    if (fileId.endsWith('.json')) return 'JSON';
    if (fileId.endsWith('.css')) return 'CSS';
    if (fileId.endsWith('.md')) return 'Markdown';
    if (fileId.endsWith('.pdf')) return 'PDF';
    return 'PlainText';
  };

  return (
    <footer className="h-6 bg-[#090a0f] border-t border-[#202231] text-[11px] font-mono flex items-center justify-between px-3 select-none text-[#a6adc8] shrink-0 z-30">
      {/* Left side items */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onSelectView('git')}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
          title="Git Branch: main"
        >
          <GitBranch className="w-3 h-3 text-[#89b4fa]" />
          <span>main</span>
        </button>

        <button
          onClick={onToggleTerminal}
          className="flex items-center gap-1 hover:text-white transition-colors"
          title="0 Errors, 0 Warnings"
        >
          <AlertTriangle className="w-3 h-3 text-[#f9e2af]" />
          <span>0</span>
        </button>

        <span className="hidden sm:inline-block text-[#6c7086]">·</span>

        <span className="hidden sm:inline-block text-[#cdd6f4]">
          Adam&apos;s Portfolio
        </span>
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleCopilot}
          className="flex items-center gap-1 text-[#cba6f7] hover:text-white transition-colors font-medium"
        >
          <Sparkles className="w-3 h-3" />
          <span>Copilot</span>
        </button>

        <span className="hidden md:inline-block">{getLanguage(activeFile)}</span>

        <span className="hidden sm:inline-block">UTF-8</span>

        <span className="hidden md:inline-flex items-center gap-1 text-[#a6e3a1]">
          <Check className="w-3 h-3" />
          <span>Prettier</span>
        </span>

        <button
          onClick={() => onSelectView('settings')}
          className="hidden sm:inline-block hover:text-white transition-colors"
        >
          💜 Adam Dark
        </button>

        <span className="flex items-center gap-1 text-[#6c7086]">
          <Clock className="w-3 h-3" />
          <span>{time}</span>
        </span>
      </div>
    </footer>
  );
}
