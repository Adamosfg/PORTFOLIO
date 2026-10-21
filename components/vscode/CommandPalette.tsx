'use client';

import React, { useState, useEffect, useRef } from 'react';
import { EditorFileId } from './types';
import FileIcon from './FileIcon';
import { Search, FileText, Download, Mail, Terminal, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { getContent } from '@/content/content';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFile: (fileId: EditorFileId) => void;
  onToggleTerminal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenFile,
  onToggleTerminal,
}: CommandPaletteProps) {
  const content = getContent();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = [
    {
      type: 'file' as const,
      id: 'projects.js' as EditorFileId,
      title: 'projects.js',
      description: 'Production systems, RAG platforms & telemetry engines',
      iconType: 'javascript' as const,
    },
    {
      type: 'file' as const,
      id: 'skills.json' as EditorFileId,
      title: 'skills.json',
      description: 'FastAPI, Python, React, Next.js, Docker, PostgreSQL, XGBoost',
      iconType: 'json' as const,
    },
    {
      type: 'file' as const,
      id: 'experience.ts' as EditorFileId,
      title: 'experience.ts',
      description: 'LEONI Wiring Systems, Cabinet Médical Privé, SNRT',
      iconType: 'typescript' as const,
    },
    {
      type: 'file' as const,
      id: 'about.html' as EditorFileId,
      title: 'about.html',
      description: 'Education (FSAC Bac+5 Master), certifications & background',
      iconType: 'html' as const,
    },
    {
      type: 'file' as const,
      id: 'home.tsx' as EditorFileId,
      title: 'home.tsx',
      description: 'Digital workspace overview & engineer profile',
      iconType: 'react' as const,
    },
    {
      type: 'file' as const,
      id: 'contact.css' as EditorFileId,
      title: 'contact.css',
      description: 'Email, LinkedIn, phone & direct contact cards',
      iconType: 'css' as const,
    },
    {
      type: 'file' as const,
      id: 'README.md' as EditorFileId,
      title: 'README.md',
      description: 'GitHub markdown profile repository view',
      iconType: 'markdown' as const,
    },
    {
      type: 'file' as const,
      id: 'Adam_Benbouazza_Resume.pdf' as EditorFileId,
      title: 'Adam_Benbouazza_Resume.pdf',
      description: 'Direct download of official Curriculum Vitae (.pdf)',
      iconType: 'pdf' as const,
    },
    {
      type: 'action' as const,
      actionId: 'download_cv',
      title: 'Download Resume (PDF)',
      description: 'Direct PDF download of Adam\'s CV',
      icon: <Download className="w-4 h-4 text-[#cba6f7]" />,
    },
    {
      type: 'action' as const,
      actionId: 'copy_email',
      title: 'Copy Email Address',
      description: content.personal.email,
      icon: <Mail className="w-4 h-4 text-[#89b4fa]" />,
    },
    {
      type: 'action' as const,
      actionId: 'toggle_terminal',
      title: 'Toggle Terminal Panel',
      description: 'Open interactive bash CLI',
      icon: <Terminal className="w-4 h-4 text-[#a6e3a1]" />,
    },
    {
      type: 'action' as const,
      actionId: 'open_github',
      title: 'Open GitHub Profile',
      description: 'github.com/Adamosfg',
      icon: <GithubIcon className="w-4 h-4 text-[#f9e2af]" />,
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (item: (typeof items)[0]) => {
    if (item.type === 'file') {
      onOpenFile(item.id);
      onClose();
    } else {
      if (item.actionId === 'download_cv') {
        window.open('/cv.pdf', '_blank');
      } else if (item.actionId === 'copy_email') {
        navigator.clipboard.writeText(content.personal.email);
      } else if (item.actionId === 'toggle_terminal') {
        onToggleTerminal();
      } else if (item.actionId === 'open_github') {
        window.open(content.personal.github, '_blank');
      }
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#181926] border border-[#313244] rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#2b2d42] bg-[#11111b]">
          <Search className="w-4 h-4 text-[#cba6f7]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a file name or command to run... (e.g. projects, skills, cv)"
            className="flex-1 bg-transparent border-none outline-none text-white text-xs placeholder-[#6c7086] focus:ring-0 p-0"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-[#181926] border border-[#2b2d42] text-[10px] text-[#6c7086]">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-1.5 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-[#6c7086]">
              No matching files or commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isSelected
                      ? 'bg-[#cba6f7] text-[#11111b] font-bold'
                      : 'text-[#cdd6f4] hover:bg-[#202231]'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    {item.type === 'file' ? (
                      <FileIcon type={item.iconType} className="w-4 h-4 shrink-0" />
                    ) : (
                      <span className="shrink-0">{item.icon}</span>
                    )}
                    <div className="truncate">
                      <p className="truncate text-xs">{item.title}</p>
                      <p
                        className={`text-[11px] truncate font-normal ${
                          isSelected ? 'text-[#11111b]/80' : 'text-[#6c7086]'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ml-2 ${
                      isSelected ? 'text-[#11111b]' : 'text-[#6c7086]'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="bg-[#11111b] px-4 py-2 border-t border-[#2b2d42] flex items-center justify-between text-[10px] text-[#6c7086]">
          <span>Navigate: ↑ / ↓</span>
          <span>Select: ↵ Enter</span>
          <span>Close: Esc</span>
        </div>
      </div>
    </div>
  );
}
