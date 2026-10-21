'use client';

import React, { useState } from 'react';
import { getContent } from '@/content/content';
import { Sparkles, X, Send, Bot, User, ArrowRight } from 'lucide-react';
import { EditorFileId } from './types';

interface CopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFile: (fileId: EditorFileId) => void;
}

interface ChatMessage {
  sender: 'user' | 'copilot';
  text: string;
  actionFile?: EditorFileId;
  actionText?: string;
}

export default function CopilotDrawer({ isOpen, onClose, onOpenFile }: CopilotDrawerProps) {
  const content = getContent();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'copilot',
      text: `Hello! I am Adam's Copilot. Ask me anything about Adam Benbouazza's experience at LEONI, his AI & Full-Stack architecture, or his availability for Europe relocation.`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    'How does the LEONI anomaly detection work?',
    "What is Adam's tech stack?",
    'Is Adam available to relocate to Europe?',
    'Tell me about his education and degrees',
    'How do I contact Adam for an interview?',
  ];

  const answerQuery = (query: string) => {
    const q = query.toLowerCase();
    let reply = '';
    let actionFile: EditorFileId | undefined;
    let actionText: string | undefined;

    if (q.includes('leoni') || q.includes('anomaly') || q.includes('xgboost')) {
      reply =
        'At LEONI Wiring Systems (Volvo MEP1), Adam built an end-to-end industrial telemetry supervision dashboard and deployed an XGBoost anomaly detection model with TreeSHAP explainability. It achieved 85.5% precision in diagnosing intermittent crimping defects and cut query latency by 55% across 50,000+ daily sensory records.';
      actionFile = 'projects.js';
      actionText = 'View LEONI Project in projects.js';
    } else if (q.includes('stack') || q.includes('skill') || q.includes('tools') || q.includes('technology')) {
      reply =
        'Adam specializes in AI & Full-Stack Engineering:\n• AI / ML: FastAPI, Python, XGBoost, Scikit-Learn, SHAP, RAG Architectures, FAISS, Pinecone, LLM APIs\n• Backend: FastAPI (asyncio), Java (Spring Boot 3), Node.js, WebSockets, RESTful APIs, Docker\n• Frontend: React, Next.js (App Router), TypeScript, Tailwind CSS\n• Data: PostgreSQL (composite indexing, partitions), Redis, MySQL';
      actionFile = 'skills.json';
      actionText = 'Browse all skills in skills.json';
    } else if (q.includes('relocate') || q.includes('europe') || q.includes('location') || q.includes('available')) {
      reply =
        'Yes! Adam is based in Casablanca, Morocco and is actively available and open to relocate across Europe or work remotely for high-impact AI & Full-Stack software engineering positions.';
      actionFile = 'about.html';
      actionText = 'Read Bio in about.html';
    } else if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('study')) {
      reply =
        'Adam holds a Master\'s in Computer Science & Artificial Intelligence (Bac+5) from Université Hassan II de Casablanca (FSAC, 2024-2026), and a Bachelor\'s in Applied Computer Science from Université Mundiapolis (2021-2024). He also holds certifications from DeepLearning.AI and AWS.';
      actionFile = 'about.html';
      actionText = 'Check Education in about.html';
    } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('interview')) {
      reply =
        `You can contact Adam directly at ${content.personal.email} or call +212 610 257 511. You can also view his LinkedIn or GitHub profiles.`;
      actionFile = 'contact.css';
      actionText = 'Open contact.css';
    } else {
      reply =
        `Adam Benbouazza is a Full-Stack Developer & AI Engineer with hands-on experience in manufacturing anomaly detection, multi-practitioner healthcare scheduling, and real-time broadcasting feeds. Check out his projects or download his CV!`;
      actionFile = 'projects.js';
      actionText = 'Explore projects.js';
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: query },
      { sender: 'copilot', text: reply, actionFile, actionText },
    ]);
    setInputVal('');
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    answerQuery(inputVal.trim());
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#161724] border-l border-[#2b2d42] shadow-2xl flex flex-col font-sans animate-in slide-in-from-right duration-200">
      {/* Header */}
      <div className="p-4 bg-[#11111b] border-b border-[#2b2d42] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#cba6f7]/10 text-[#cba6f7]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
              <span>Adam&apos;s Copilot</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#cba6f7] text-[#11111b] font-bold">
                AI
              </span>
            </h3>
            <p className="text-[10px] text-[#6c7086] font-mono">Portfolio Knowledge Assistant</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-[#202231] text-[#a6adc8] hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages list */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col space-y-1.5 ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center gap-1.5 text-[10px] text-[#6c7086]">
              {msg.sender === 'copilot' ? (
                <>
                  <Bot className="w-3 h-3 text-[#cba6f7]" />
                  <span>Copilot</span>
                </>
              ) : (
                <>
                  <User className="w-3 h-3 text-[#89b4fa]" />
                  <span>You</span>
                </>
              )}
            </div>

            <div
              className={`p-3 rounded-xl max-w-[90%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#cba6f7] text-[#11111b] font-medium'
                  : 'bg-[#11111b] border border-[#2b2d42] text-[#cdd6f4]'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {msg.actionFile && (
                <button
                  onClick={() => {
                    onOpenFile(msg.actionFile!);
                    onClose();
                  }}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#89b4fa] hover:text-white underline"
                >
                  <span>{msg.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested quick questions */}
      <div className="p-3 bg-[#11111b] border-t border-[#2b2d42] space-y-1.5">
        <p className="text-[10px] font-mono text-[#6c7086]">Suggested questions:</p>
        <div className="flex flex-wrap gap-1.5">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => answerQuery(prompt)}
              className="text-[10px] font-mono px-2 py-1 rounded bg-[#181926] hover:bg-[#202231] border border-[#2b2d42] text-[#a6adc8] hover:text-white transition-colors text-left"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input box */}
      <form onSubmit={handleSend} className="p-3 bg-[#11111b] border-t border-[#2b2d42] flex items-center gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask a question about Adam..."
          className="flex-1 bg-[#181926] border border-[#2b2d42] rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-[#6c7086] focus:border-[#cba6f7] focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] transition-colors"
          title="Send Question"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
