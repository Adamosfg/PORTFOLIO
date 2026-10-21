'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TerminalTab, EditorFileId } from './types';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2 } from 'lucide-react';
import { getContent } from '@/content/content';

interface TerminalPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFile: (fileId: EditorFileId) => void;
}

export default function TerminalPanel({ isOpen, onClose, onOpenFile }: TerminalPanelProps) {
  const content = getContent();
  const [activeTab, setActiveTab] = useState<TerminalTab>('TERMINAL');
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'error'; text: string }>>([
    { type: 'output', text: 'Welcome to Adam Benbouazza\'s Portfolio Workspace v2.0' },
    { type: 'output', text: 'Type "help" to list available terminal commands or click suggestions below.' },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newHistory = [...history, { type: 'input' as const, text: `$ ${trimmed}` }];

    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available Commands:
  • projects     - Switch to projects.js and view production systems
  • skills       - Display categorized tech stack & tools
  • about        - Show Adam's education & background
  • experience   - View engineering career milestones (LEONI, Healthcare, SNRT)
  • contact      - Display contact email, phone & social profiles
  • cv / resume  - Download official Curriculum Vitae (.pdf)
  • leoni        - Deep-dive telemetry XGBoost anomaly engine specs
  • whoami       - Inspect current visitor session
  • clear        - Clear the terminal screen`,
      });
    } else if (lower === 'projects' || lower === 'ls projects') {
      onOpenFile('projects.js');
      newHistory.push({
        type: 'output',
        text: `Navigated to projects.js. Loaded 8 projects:\n${content.projects
          .map((p, idx) => `  [${idx + 1}] ${p.title} (${p.category || 'System'})`)
          .join('\n')}`,
      });
    } else if (lower === 'skills') {
      onOpenFile('skills.json');
      newHistory.push({
        type: 'output',
        text: `Navigated to skills.json.\nCore Stack: FastAPI, Python, React, TypeScript, Next.js, Docker, PostgreSQL, Redis, XGBoost, Spring Boot 3.`,
      });
    } else if (lower === 'about') {
      onOpenFile('about.html');
      newHistory.push({
        type: 'output',
        text: `Navigated to about.html.\n${content.personal.name} — ${content.personal.role}.\nMaster Bac+5 in AI & CS from FSAC Casablanca. Open to relocate in Europe 🇪🇺.`,
      });
    } else if (lower === 'experience') {
      onOpenFile('experience.ts');
      newHistory.push({
        type: 'output',
        text: `Navigated to experience.ts.\nRoles:\n  • LEONI Wiring Systems (Volvo MEP1) - Full-Stack & AI Engineer\n  • Cabinet Médical Privé - Full-Stack Engineer\n  • SNRT - Web & Data Software Engineer`,
      });
    } else if (lower === 'contact') {
      onOpenFile('contact.css');
      newHistory.push({
        type: 'output',
        text: `Email: ${content.personal.email}\nPhone: ${content.personal.phone}\nLinkedIn: ${content.personal.linkedin}\nGitHub: ${content.personal.github}`,
      });
    } else if (lower === 'cv' || lower === 'resume' || lower === 'cat cv') {
      onOpenFile('Adam_Benbouazza_Resume.pdf');
      newHistory.push({
        type: 'output',
        text: `Downloading Adam_Benbouazza_Resume.pdf...`,
      });
      window.open('/cv.pdf', '_blank');
    } else if (lower === 'leoni') {
      newHistory.push({
        type: 'output',
        text: `[LEONI Automotive Telemetry Engine]\n• Model: XGBoost + TreeSHAP\n• Precision: 85.5% on intermittent crimping scrap\n• Throughput: 50,000+ daily sensory records\n• Latency Reduction: -55% database query time via composite index partitions`,
      });
    } else if (lower === 'whoami') {
      newHistory.push({
        type: 'output',
        text: 'guest@adam-portfolio (visitor session: permissions read-only / guest)',
      });
    } else if (lower.startsWith('sudo')) {
      newHistory.push({
        type: 'output',
        text: 'Access granted! You already have full developer privileges to explore this workspace.',
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `command not found: "${trimmed}". Type "help" for a list of available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div
      className={`border-t border-[#2b2d42] bg-[#11111b] flex flex-col transition-all duration-200 z-30 ${
        isMaximized ? 'h-96' : 'h-64'
      }`}
    >
      {/* Terminal Title Bar / Tabs */}
      <div className="bg-[#181926] px-4 py-1.5 border-b border-[#2b2d42] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1 overflow-x-auto">
          {(['TERMINAL', 'OUTPUT', 'DEBUG CONSOLE', 'PROBLEMS'] as TerminalTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded transition-colors uppercase tracking-wider text-[11px] font-semibold ${
                activeTab === tab
                  ? 'text-white bg-[#11111b] border-t-2 border-[#cba6f7]'
                  : 'text-[#6c7086] hover:text-[#a6adc8]'
              }`}
            >
              {tab === 'PROBLEMS' ? 'PROBLEMS (0)' : tab}
            </button>
          ))}
        </div>

        {/* Panel Controls */}
        <div className="flex items-center gap-2 text-[#a6adc8]">
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-white rounded hover:bg-[#202231]"
            title="Clear Console"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 hover:text-white rounded hover:bg-[#202231]"
            title={isMaximized ? 'Restore Panel' : 'Maximize Panel'}
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:text-white rounded hover:bg-[#202231]"
            title="Close Panel"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="bg-[#141520] px-4 py-1 border-b border-[#202231] flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#a6adc8]">
        <span className="text-[#6c7086]">Quick commands:</span>
        {['help', 'projects', 'skills', 'about', 'contact', 'cv', 'leoni', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-[#181926] hover:bg-[#2b2d42] text-[#89b4fa] border border-[#2b2d42] hover:text-white transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content Body */}
      <div
        className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1.5 text-[#cdd6f4]"
        onClick={() => inputRef.current?.focus()}
      >
        {activeTab === 'TERMINAL' ? (
          <>
            {history.map((item, i) => (
              <div key={i} className="leading-relaxed">
                {item.type === 'input' && (
                  <p className="text-[#a6e3a1] font-semibold">{item.text}</p>
                )}
                {item.type === 'output' && (
                  <pre className="text-[#cdd6f4] whitespace-pre-wrap font-mono">{item.text}</pre>
                )}
                {item.type === 'error' && (
                  <p className="text-[#f38ba8]">{item.text}</p>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#cba6f7] font-bold">adam@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0"
                autoFocus
              />
            </div>
            <div ref={bottomRef} />
          </>
        ) : activeTab === 'PROBLEMS' ? (
          <div className="text-[#a6adc8] p-4 text-center">
            <p className="text-[#a6e3a1] font-bold">✓ No problems detected in the workspace.</p>
            <p className="text-[11px] text-[#6c7086] mt-1">All TypeScript types, linting, and builds are healthy.</p>
          </div>
        ) : activeTab === 'OUTPUT' ? (
          <div className="text-[#a6adc8] space-y-1 text-[11px]">
            <p className="text-[#89b4fa]">[Next.js Build] Ready in 1400ms</p>
            <p className="text-[#a6e3a1]">[Telemetry Engine] Initialized XGBoost model v2.1</p>
            <p className="text-[#6c7086]">[FastAPI Server] Listening on http://localhost:8000</p>
          </div>
        ) : (
          <div className="text-[#a6adc8] text-[11px] p-2">
            <p className="text-[#6c7086]">// Debug console active. 0 breakpoints hit.</p>
          </div>
        )}
      </div>
    </div>
  );
}
