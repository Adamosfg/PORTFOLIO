'use client';

import React, { useState } from 'react';
import { getContent, Project } from '@/content/content';
import { ExternalLink, Sparkles, X, Activity, Server, Database, Cpu } from 'lucide-react';
import { GithubIcon } from '../Icons';
import Link from 'next/link';

export default function ProjectsView() {
  const content = getContent();
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'systems'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = content.projects.filter((project) => {
    if (filter === 'all') return true;
    const cat = (project.category || '').toLowerCase();
    const tags = project.tags.map((t) => t.toLowerCase()).join(' ');
    if (filter === 'ai') {
      return cat.includes('ai') || cat.includes('ml') || tags.includes('xgboost') || tags.includes('rag') || tags.includes('langchain');
    }
    if (filter === 'fullstack') {
      return cat.includes('full stack') || tags.includes('react') || tags.includes('spring boot');
    }
    if (filter === 'systems') {
      return cat.includes('realtime') || cat.includes('caching') || cat.includes('devops') || cat.includes('backend') || tags.includes('redis') || tags.includes('docker');
    }
    return true;
  });

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 font-sans">
      {/* Code Comment Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// projects.js : things I&apos;ve built &amp; shipped</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display">
          Projects
        </h1>
        <p className="font-mono text-xs md:text-sm text-[#a6adc8]">
          <span className="text-[#cba6f7]">const</span>{' '}
          <span className="text-[#89b4fa]">projects</span> = [{' '}
          <span className="text-[#a6e3a1]">...shipped</span>,{' '}
          <span className="text-[#fab387]">...building</span> ]
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#2b2d42]/60 pb-4">
        {[
          { id: 'all', label: 'All Projects', count: content.projects.length },
          { id: 'ai', label: 'AI & Machine Learning', count: 4 },
          { id: 'fullstack', label: 'Full Stack', count: 3 },
          { id: 'systems', label: 'Systems & Realtime', count: 4 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as typeof filter)}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
              filter === tab.id
                ? 'bg-[#cba6f7] text-[#11111b] font-bold shadow-md shadow-[#cba6f7]/20'
                : 'bg-[#181926] text-[#a6adc8] hover:bg-[#202231] hover:text-white border border-[#2b2d42]'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                filter === tab.id ? 'bg-[#11111b]/20 text-[#11111b]' : 'bg-[#11111b] text-[#6c7086]'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid of Cards (Matching the user screenshot!) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => {
          const accentColor = project.accentColor || '#cba6f7';
          return (
            <div
              key={project.slug || index}
              className="group relative rounded-xl bg-[#161724]/90 border border-[#2b2d42] p-6 hover:border-[#45475a] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#cba6f7]/5"
              style={{
                borderTopColor: accentColor,
                borderTopWidth: '2px',
              }}
            >
              {/* Subtle gradient backdrop glow on hover */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20 pointer-events-none"
                style={{ backgroundColor: accentColor }}
              />

              <div className="space-y-4">
                {/* Header row: Icon, Category Breadcrumb, Action links */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-lg bg-[#11111b] border border-[#2b2d42] shadow-inner">
                      {project.icon || '🛸'}
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#cba6f7]">
                        {project.category || 'FULL STACK • AI'}
                      </span>
                      <p className="text-xs text-[#6c7086] font-mono">
                        {project.client} · {project.period}
                      </p>
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#11111b] border border-[#2b2d42] hover:border-[#89b4fa] hover:text-[#89b4fa] text-xs font-mono text-[#a6adc8] transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>GitHub ↗</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#11111b] border border-[#2b2d42] hover:border-[#a6e3a1] hover:text-[#a6e3a1] text-xs font-mono text-[#a6adc8] transition-colors"
                        title="Live Preview / Case Study"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#cba6f7] transition-colors font-display">
                    {project.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-[#a6adc8] leading-relaxed line-clamp-3">
                  {project.outcome}
                </p>

                {/* Key Metric highlight badge */}
                {project.keyStats && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11111b] border border-[#313244] text-xs font-mono text-[#f9e2af]">
                    <Sparkles className="w-3 h-3 text-[#f9e2af]" />
                    <span>{project.keyStats}</span>
                  </div>
                )}
              </div>

              {/* Bottom: Tech tags & Case study button */}
              <div className="pt-6 mt-4 border-t border-[#202231] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#11111b] text-[#cdd6f4] border border-[#2b2d42] hover:border-[#6c7086] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-[#89b4fa] hover:text-[#b4befe] hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Quick Architecture</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Architecture Modal for Project Details */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#181926] border border-[#313244] rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#11111b] text-[#a6adc8] hover:text-white border border-[#2b2d42] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#cba6f7] uppercase tracking-wider">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-[#6c7086]">
                {activeModalProject.client} · {activeModalProject.period} · {activeModalProject.role}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#11111b] border border-[#2b2d42] space-y-2">
              <div className="text-xs font-mono text-[#f9e2af] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Production Impact &amp; Metrics</span>
              </div>
              <p className="text-sm font-semibold text-white">
                {activeModalProject.keyStats}
              </p>
              <p className="text-sm text-[#a6adc8] leading-relaxed">
                {activeModalProject.outcome}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#a6adc8]">
                Architecture Highlights &amp; Stack
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] space-y-1">
                  <div className="text-[#89b4fa] flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>Backend &amp; Ingestion</span>
                  </div>
                  <p className="text-[#a6adc8]">High-throughput async processing with FastAPI / Node.js</p>
                </div>
                <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] space-y-1">
                  <div className="text-[#a6e3a1] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>ML &amp; Inference</span>
                  </div>
                  <p className="text-[#a6adc8]">Model evaluation, SHAP explainability, and sub-100ms inference</p>
                </div>
                <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] space-y-1">
                  <div className="text-[#f9e2af] flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Data &amp; Persistence</span>
                  </div>
                  <p className="text-[#a6adc8]">Indexed time-series tables in PostgreSQL &amp; Redis ring buffer</p>
                </div>
                <div className="p-3 rounded-lg bg-[#11111b] border border-[#2b2d42] space-y-1">
                  <div className="text-[#f38ba8] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Reliability</span>
                  </div>
                  <p className="text-[#a6adc8]">&gt;80% test suite coverage with Docker containerization</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeModalProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#11111b] text-[#cdd6f4] border border-[#2b2d42]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2b2d42] flex items-center justify-between">
              {activeModalProject.caseStudyUrl && activeModalProject.caseStudyUrl.startsWith('/projects/') ? (
                <Link
                  href={activeModalProject.caseStudyUrl}
                  className="px-4 py-2 rounded-lg bg-[#cba6f7] text-[#11111b] text-xs font-mono font-bold hover:bg-[#b4befe] transition-colors"
                >
                  View Full Case Study Page →
                </Link>
              ) : (
                <a
                  href={activeModalProject.githubUrl || 'https://github.com/Adamosfg'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#181926] hover:bg-[#202231] border border-[#2b2d42] text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>View on GitHub ↗</span>
                </a>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-[#11111b] border border-[#2b2d42] text-xs font-mono text-[#a6adc8] hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
