export type EditorFileId =
  | 'home.tsx'
  | 'about.html'
  | 'projects.js'
  | 'skills.json'
  | 'experience.ts'
  | 'contact.css'
  | 'README.md'
  | 'Adam_Benbouazza_Resume.pdf';

export interface EditorTab {
  id: EditorFileId;
  title: string;
  iconType: 'react' | 'html' | 'javascript' | 'json' | 'typescript' | 'css' | 'markdown' | 'pdf';
  language: string;
}

export type SidebarView = 'explorer' | 'search' | 'git' | 'extensions' | 'settings';

export type TerminalTab = 'TERMINAL' | 'OUTPUT' | 'DEBUG CONSOLE' | 'PROBLEMS';
