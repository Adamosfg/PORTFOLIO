'use client';

import React from 'react';
import { SidebarView } from './types';
import { Files, Search, GitBranch, Blocks, Settings, Sparkles, User } from 'lucide-react';

interface ActivityBarProps {
  activeView: SidebarView;
  onSelectView: (view: SidebarView) => void;
  onToggleCopilot: () => void;
  isCopilotOpen: boolean;
}

export default function ActivityBar({
  activeView,
  onSelectView,
  onToggleCopilot,
  isCopilotOpen,
}: ActivityBarProps) {
  const topButtons: Array<{ id: SidebarView; label: string; icon: React.ReactNode; badge?: number }> = [
    {
      id: 'explorer',
      label: 'Explorer (Ctrl+Shift+E)',
      icon: <Files className="w-5 h-5" />,
    },
    {
      id: 'search',
      label: 'Search (Ctrl+Shift+F)',
      icon: <Search className="w-5 h-5" />,
    },
    {
      id: 'git',
      label: 'Source Control (Ctrl+Shift+G)',
      icon: <GitBranch className="w-5 h-5" />,
      badge: 3,
    },
    {
      id: 'extensions',
      label: 'Extensions / Stack (Ctrl+Shift+X)',
      icon: <Blocks className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-12 bg-[#0d0e15] border-r border-[#202231] flex flex-col items-center justify-between py-3 select-none shrink-0 z-20">
      {/* Top Action Icons */}
      <div className="flex flex-col items-center gap-1 w-full">
        {topButtons.map((btn) => {
          const isActive = activeView === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => onSelectView(btn.id)}
              title={btn.label}
              className={`relative w-full h-11 flex items-center justify-center transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-[#6c7086] hover:text-[#cdd6f4]'
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-[#cba6f7] rounded-r" />
              )}
              {btn.icon}

              {btn.badge && (
                <span className="absolute top-2 right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#cba6f7] text-[9px] font-bold text-[#11111b]">
                  {btn.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Action Icons */}
      <div className="flex flex-col items-center gap-1 w-full">
        {/* Copilot toggle button */}
        <button
          onClick={onToggleCopilot}
          title="Adam's Copilot (AI Assistant)"
          className={`relative w-full h-11 flex items-center justify-center transition-colors ${
            isCopilotOpen ? 'text-[#cba6f7]' : 'text-[#6c7086] hover:text-[#cba6f7]'
          }`}
        >
          {isCopilotOpen && (
            <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-[#cba6f7] rounded-r" />
          )}
          <Sparkles className="w-5 h-5" />
        </button>

        {/* Settings button */}
        <button
          onClick={() => onSelectView('settings')}
          title="Settings / Themes"
          className={`relative w-full h-11 flex items-center justify-center transition-colors ${
            activeView === 'settings' ? 'text-white' : 'text-[#6c7086] hover:text-[#cdd6f4]'
          }`}
        >
          {activeView === 'settings' && (
            <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-[#cba6f7] rounded-r" />
          )}
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
