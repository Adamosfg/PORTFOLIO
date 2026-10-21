'use client';

import React from 'react';
import { getContent } from '@/content/content';
import { GraduationCap, Award, Globe2, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutView() {
  const content = getContent();

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>&lt;!-- about.html : background, education &amp; credentials --&gt;</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display">
          About Me
        </h1>
        <p className="font-mono text-xs md:text-sm text-[#a6adc8]">
          &lt;<span className="text-[#f38ba8]">meta</span>{' '}
          <span className="text-[#fab387]">name</span>=&quot;<span className="text-[#a6e3a1]">engineer-bio</span>&quot;{' '}
          <span className="text-[#fab387]">content</span>=&quot;<span className="text-[#a6e3a1]">Adam Benbouazza</span>&quot; /&gt;
        </p>
      </div>

      {/* Narrative Section */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161724] border border-[#2b2d42] space-y-4 shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold text-white font-display flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#cba6f7]" />
          <span>Engineering Philosophy &amp; Background</span>
        </h2>
        <div className="space-y-3 text-sm md:text-base text-[#cdd6f4] leading-relaxed">
          <p>
            I am a Full-Stack Developer &amp; AI Engineer who thrives at the intersection of production systems and applied machine learning. Rather than treating ML as an isolated academic notebook, I focus on deploying robust inference engines into real-world industrial and clinical architectures.
          </p>
          <p>
            During my PFE internship at <strong>LEONI Wiring Systems</strong> for the Volvo MEP1 vehicle assembly project, I built an end-to-end telemetry supervision dashboard paired with an XGBoost anomaly detection pipeline achieving <strong>85.5% precision</strong> and <strong>-55% query latency</strong> across 50,000+ daily sensory records.
          </p>
          <p>
            I hold a Master&apos;s degree in Computer Science and Artificial Intelligence (Bac+5) from <strong>FSAC Casablanca</strong>. I am currently based in Morocco and actively open to relocation opportunities across Europe or remote roles.
          </p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#89b4fa]" />
          <span>Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.education.map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#89b4fa]/50 transition-colors space-y-2 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#11111b] text-[#89b4fa] border border-[#2b2d42]">
                  {edu.period}
                </span>
                <span className="text-xs font-mono text-[#6c7086]">{edu.location}</span>
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {edu.degree}
              </h3>
              <p className="text-xs font-mono text-[#a6adc8]">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Credentials */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
          <Award className="w-5 h-5 text-[#f9e2af]" />
          <span>Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.certifications.map((cert, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#f9e2af]/50 transition-colors space-y-2 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#11111b] text-[#f9e2af] border border-[#2b2d42]">
                  {cert.year}
                </span>
                <span className="text-xs font-mono text-[#a6e3a1] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-display">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-[#a6adc8]">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages & Collaboration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] space-y-3">
          <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#a6e3a1]" />
            <span>Languages</span>
          </h2>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between p-2.5 rounded-lg bg-[#11111b] border border-[#2b2d42]">
              <span className="text-white font-bold">English</span>
              <span className="text-[#a6e3a1]">Full Professional Proficiency</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-[#11111b] border border-[#2b2d42]">
              <span className="text-white font-bold">French</span>
              <span className="text-[#89b4fa]">Bilingual / Fluent</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-[#11111b] border border-[#2b2d42]">
              <span className="text-white font-bold">Arabic</span>
              <span className="text-[#cba6f7]">Native</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#161724] border border-[#2b2d42] space-y-3">
          <h2 className="text-base font-bold text-white font-display flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#cba6f7]" />
            <span>Engineering Values</span>
          </h2>
          <ul className="space-y-2 text-xs font-mono text-[#cdd6f4]">
            <li className="flex items-center gap-2">
              <span className="text-[#a6e3a1]">✓</span>
              <span>Measurable benchmarks over intuition</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#a6e3a1]">✓</span>
              <span>Zero-downtime reliability &amp; test coverage</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#a6e3a1]">✓</span>
              <span>Clean API contracts &amp; typed documentation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#a6e3a1]">✓</span>
              <span>Adaptive learning of emerging AI tools</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
