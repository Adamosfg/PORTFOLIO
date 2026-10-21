'use client';

import React, { useState, useEffect } from 'react';
import { EditorFileId, EditorTab, SidebarView } from './types';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import StatusBar from './StatusBar';
import TerminalPanel from './TerminalPanel';
import CommandPalette from './CommandPalette';
import CopilotDrawer from './CopilotDrawer';

// Views
import ProjectsView from './views/ProjectsView';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import SkillsView from './views/SkillsView';
import ExperienceView from './views/ExperienceView';
import ContactView from './views/ContactView';
import ReadmeView from './views/ReadmeView';
import ResumeView from './views/ResumeView';

const ALL_TABS: Record<EditorFileId, EditorTab> = {
  'projects.js': {
    id: 'projects.js',
    title: 'projects.js',
    iconType: 'javascript',
    language: 'JavaScript',
  },
  'home.tsx': {
    id: 'home.tsx',
    title: 'home.tsx',
    iconType: 'react',
    language: 'TypeScript React',
  },
  'about.html': {
    id: 'about.html',
    title: 'about.html',
    iconType: 'html',
    language: 'HTML',
  },
  'skills.json': {
    id: 'skills.json',
    title: 'skills.json',
    iconType: 'json',
    language: 'JSON',
  },
  'experience.ts': {
    id: 'experience.ts',
    title: 'experience.ts',
    iconType: 'typescript',
    language: 'TypeScript',
  },
  'contact.css': {
    id: 'contact.css',
    title: 'contact.css',
    iconType: 'css',
    language: 'CSS',
  },
  'README.md': {
    id: 'README.md',
    title: 'README.md',
    iconType: 'markdown',
    language: 'Markdown',
  },
  'Adam_Benbouazza_Resume.pdf': {
    id: 'Adam_Benbouazza_Resume.pdf',
    title: 'Resume.pdf',
    iconType: 'pdf',
    language: 'PDF',
  },
};

export default function VSCodeWorkspace() {
  // Start with projects.js active, matching the user's inspiration screenshot!
  const [activeFile, setActiveFile] = useState<EditorFileId>('projects.js');
  const [openTabs, setOpenTabs] = useState<EditorTab[]>([
    ALL_TABS['home.tsx'],
    ALL_TABS['about.html'],
    ALL_TABS['projects.js'],
  ]);

  const [activeView, setActiveView] = useState<SidebarView>('explorer');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+P or Cmd+P: Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Ctrl+` or Cmd+`: Toggle Terminal
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      // Ctrl+B or Cmd+B: Toggle Sidebar
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle URL hash on load (e.g. #projects, #skills, etc.)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'projects') openFile('projects.js');
    else if (hash === 'skills' || hash === 'stack') openFile('skills.json');
    else if (hash === 'about') openFile('about.html');
    else if (hash === 'experience') openFile('experience.ts');
    else if (hash === 'contact') openFile('contact.css');
  }, []);

  const openFile = (fileId: EditorFileId) => {
    if (fileId === 'Adam_Benbouazza_Resume.pdf') {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Adam_Benbouazza_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    setActiveFile(fileId);
    // Add to open tabs if not present
    if (!openTabs.some((t) => t.id === fileId)) {
      setOpenTabs((prev) => [...prev, ALL_TABS[fileId]]);
    }
  };

  const closeTab = (fileId: EditorFileId, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = openTabs.filter((t) => t.id !== fileId);
    if (remaining.length === 0) {
      // Keep home.tsx open if all closed
      setOpenTabs([ALL_TABS['home.tsx']]);
      setActiveFile('home.tsx');
    } else {
      setOpenTabs(remaining);
      if (activeFile === fileId) {
        setActiveFile(remaining[remaining.length - 1].id);
      }
    }
  };

  const handleSelectSidebarView = (view: SidebarView) => {
    if (activeView === view && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setActiveView(view);
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#13141f] text-[#cdd6f4] select-none font-sans">
      {/* 1. Top Window Frame / Title Bar */}
      <TitleBar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
        onResetView={() => openFile('home.tsx')}
      />

      {/* 2. Main Middle Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Activity Bar (Far left vertical strip) */}
        <ActivityBar
          activeView={activeView}
          onSelectView={handleSelectSidebarView}
          onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
          isCopilotOpen={isCopilotOpen}
        />

        {/* Collapsible Sidebar */}
        <Sidebar
          activeFile={activeFile}
          onOpenFile={openFile}
          activeView={activeView}
          onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
          isOpen={isSidebarOpen}
        />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#13141f] overflow-hidden">
          {/* Tabs & Breadcrumb bar */}
          <TabBar
            openTabs={openTabs}
            activeFile={activeFile}
            onSelectTab={(id) => setActiveFile(id)}
            onCloseTab={closeTab}
          />

          {/* Editor Content Scroll Container */}
          <main className="flex-1 overflow-y-auto select-text bg-[#13141f]">
            {activeFile === 'projects.js' && <ProjectsView />}
            {activeFile === 'home.tsx' && (
              <HomeView
                onOpenFile={openFile}
                onOpenTerminal={() => setIsTerminalOpen(true)}
              />
            )}
            {activeFile === 'about.html' && <AboutView />}
            {activeFile === 'skills.json' && <SkillsView />}
            {activeFile === 'experience.ts' && <ExperienceView />}
            {activeFile === 'contact.css' && <ContactView />}
            {activeFile === 'README.md' && <ReadmeView />}
            {activeFile === 'Adam_Benbouazza_Resume.pdf' && <ResumeView />}
          </main>

          {/* Interactive Collapsible Terminal Panel at Bottom */}
          <TerminalPanel
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
            onOpenFile={openFile}
          />
        </div>

        {/* Copilot Assistant Drawer */}
        <CopilotDrawer
          isOpen={isCopilotOpen}
          onClose={() => setIsCopilotOpen(false)}
          onOpenFile={openFile}
        />
      </div>

      {/* 3. Bottom Status Bar */}
      <StatusBar
        activeFile={activeFile}
        onToggleCopilot={() => setIsCopilotOpen((prev) => !prev)}
        onSelectView={handleSelectSidebarView}
        onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
      />

      {/* 4. Command Palette (Ctrl+P) Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenFile={openFile}
        onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
      />
    </div>
  );
}
