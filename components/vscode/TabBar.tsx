'use client';

import React from 'react';
import { EditorFileId, EditorTab } from './types';
import FileIcon from './FileIcon';
import { X, ChevronRight } from 'lucide-react';

interface TabBarProps {
  openTabs: EditorTab[];
  activeFile: EditorFileId;
  onSelectTab: (fileId: EditorFileId) => void;
  onCloseTab: (fileId: EditorFileId, e: React.MouseEvent) => void;
}

export default function TabBar({
  openTabs,
  activeFile,
  onSelectTab,
  onCloseTab,
}: TabBarProps) {
  return (
    <div className="bg-[#11121b] border-b border-[#202231] select-none text-xs font-mono shrink-0">
      {/* Horizontal Tabs Scrollable Row */}
      <div className="flex items-center overflow-x-auto scrollbar-none border-b border-[#202231]/60">
        {openTabs.map((tab) => {
          const isActive = tab.id === activeFile;
          return (
            <div
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`group flex items-center gap-2 px-3.5 py-2 border-r border-[#202231] cursor-pointer transition-colors relative shrink-0 ${
                isActive
                  ? 'bg-[#181926] text-white font-medium'
                  : 'bg-[#11121b] text-[#6c7086] hover:bg-[#151622] hover:text-[#cdd6f4]'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#cba6f7]" />
              )}

              <FileIcon type={tab.iconType} className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate max-w-[130px]">{tab.title}</span>

              {/* Close Tab 'x' */}
              <button
                onClick={(e) => onCloseTab(tab.id, e)}
                className={`p-0.5 rounded hover:bg-[#2b2d42] hover:text-white transition-opacity ${
                  isActive ? 'opacity-80 hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
                title="Close Tab"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Breadcrumb line (Matches screenshot: 'aahana-bobade > src > projects.js') */}
      <div className="px-4 py-1 bg-[#141520] border-b border-[#202231]/40 flex items-center gap-1.5 text-[11px] text-[#6c7086]">
        <span>adam-benbouazza</span>
        <ChevronRight className="w-3 h-3 text-[#45475a]" />
        <span>src</span>
        <ChevronRight className="w-3 h-3 text-[#45475a]" />
        <span className="text-[#cdd6f4] font-medium">{activeFile}</span>
      </div>
    </div>
  );
}
