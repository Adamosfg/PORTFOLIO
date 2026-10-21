'use client';

import React, { useState } from 'react';
import { getContent } from '@/content/content';
import { Copy, Check, Code, LayoutGrid, Cpu, Server, Layout, Database } from 'lucide-react';

export default function SkillsView() {
  const content = getContent();
  const [viewMode, setViewMode] = useState<'visual' | 'json'>('visual');
  const [copied, setCopied] = useState(false);

  const skillsData = {
    engineer: "Adam Benbouazza",
    stackGroups: content.stackGroups.map((group) => ({
      category: group.name,
      technologies: group.items,
    })),
    specializations: [
      "Industrial Telemetry & Anomaly Detection",
      "Retrieval-Augmented Generation (RAG) & Vector Databases",
      "High-Concurrency Microservices & Event Caching",
      "Enterprise Multi-Tenant Systems with RBAC"
    ],
    tooling: ["Git", "Docker Compose", "Postman", "Linux/Bash", "GitHub Actions", "VS Code"],
  };

  const jsonString = JSON.stringify(skillsData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (name: string) => {
    if (name.includes('AI') || name.includes('Machine')) return <Cpu className="w-4 h-4 text-[#cba6f7]" />;
    if (name.includes('Backend')) return <Server className="w-4 h-4 text-[#89b4fa]" />;
    if (name.includes('Frontend')) return <Layout className="w-4 h-4 text-[#a6e3a1]" />;
    return <Database className="w-4 h-4 text-[#f9e2af]" />;
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// skills.json : tech stack &amp; architectural capabilities</span>
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display">
            Skills
          </h1>

          {/* View Mode Toggle + Copy */}
          <div className="flex items-center gap-2">
            <div className="flex p-1 rounded-lg bg-[#11111b] border border-[#2b2d42]">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-colors ${
                  viewMode === 'visual'
                    ? 'bg-[#cba6f7] text-[#11111b] font-bold'
                    : 'text-[#a6adc8] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Visual</span>
              </button>
              <button
                onClick={() => setViewMode('json')}
                className={`px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-colors ${
                  viewMode === 'json'
                    ? 'bg-[#cba6f7] text-[#11111b] font-bold'
                    : 'text-[#a6adc8] hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Raw JSON</span>
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-[#181926] hover:bg-[#202231] border border-[#2b2d42] text-xs font-mono text-[#a6adc8] hover:text-white transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#a6e3a1]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'visual' ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.stackGroups.map((group) => (
              <div
                key={group.name}
                className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#313244] transition-all space-y-4 shadow-lg"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#202231]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(group.name)}
                    <h2 className="text-lg font-bold text-white font-display">
                      {group.name}
                    </h2>
                  </div>
                  <span className="text-[11px] font-mono text-[#6c7086]">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#11111b] text-[#cdd6f4] border border-[#2b2d42] hover:border-[#cba6f7] hover:text-white transition-all shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Specializations */}
          <div className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] space-y-4">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <span className="text-[#cba6f7]">★</span>
              <span>Engineering Specializations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.specializations.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#11111b] border border-[#2b2d42] flex items-start gap-3"
                >
                  <span className="text-xs font-mono text-[#cba6f7] pt-0.5">0{i + 1}.</span>
                  <p className="text-xs font-mono text-[#cdd6f4] leading-relaxed">
                    {spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* JSON Mode */
        <div className="rounded-2xl bg-[#11111b] border border-[#2b2d42] p-6 font-mono text-xs md:text-sm overflow-x-auto text-[#cdd6f4] shadow-2xl">
          <pre className="leading-relaxed">
            <code>{jsonString}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
