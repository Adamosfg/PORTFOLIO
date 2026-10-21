'use client';

import React from 'react';
import { getContent } from '@/content/content';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceView() {
  const content = getContent();

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* Code Header */}
      <div className="space-y-1">
        <p className="font-mono text-sm text-[#6c7086] flex items-center gap-2">
          <span>// experience.ts : engineering roles &amp; production impact</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display">
          Experience
        </h1>
        <p className="font-mono text-xs md:text-sm text-[#a6adc8]">
          <span className="text-[#cba6f7]">interface</span>{' '}
          <span className="text-[#f9e2af]">CareerTimeline</span> &#123;{' '}
          <span className="text-[#89b4fa]">roles</span>: <span className="text-[#f9e2af]">ProductionRole</span>[]; &#125;
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-[#2b2d42]">
        {content.experience.map((item, index) => (
          <div
            key={index}
            className="relative pl-10 md:pl-14 group"
          >
            {/* Timeline node */}
            <div className="absolute left-2 md:left-4 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#181926] border-2 border-[#cba6f7] group-hover:scale-125 transition-transform" />

            <div className="p-6 md:p-8 rounded-2xl bg-[#161724] border border-[#2b2d42] hover:border-[#45475a] transition-all space-y-4 shadow-xl">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#202231] pb-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white font-display">
                    {item.role}
                  </h2>
                  <p className="text-sm font-semibold text-[#cba6f7] flex items-center gap-2 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#a6adc8]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#89b4fa]" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#f9e2af]" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 text-xs md:text-sm text-[#cdd6f4] leading-relaxed">
                {item.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#a6e3a1] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
