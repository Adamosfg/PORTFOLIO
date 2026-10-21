import React from 'react';

interface FileIconProps {
  type: 'react' | 'html' | 'javascript' | 'json' | 'typescript' | 'css' | 'markdown' | 'pdf';
  className?: string;
}

export default function FileIcon({ type, className = 'w-4 h-4' }: FileIconProps) {
  switch (type) {
    case 'react':
      return (
        <span className={`inline-flex items-center justify-center text-[#61dafb] font-mono font-bold text-xs ${className}`}>
          ⚛
        </span>
      );
    case 'html':
      return (
        <span className={`inline-flex items-center justify-center text-[#e44d26] font-mono font-bold text-xs ${className}`}>
          &lt;&gt;
        </span>
      );
    case 'javascript':
      return (
        <span className={`inline-flex items-center justify-center bg-[#f7df1e] text-[#1e1e2e] font-bold text-[10px] rounded-[2px] leading-none px-0.5 py-0.5 ${className}`}>
          JS
        </span>
      );
    case 'json':
      return (
        <span className={`inline-flex items-center justify-center text-[#fbc02d] font-mono font-bold text-xs ${className}`}>
          &#123;&#125;
        </span>
      );
    case 'typescript':
      return (
        <span className={`inline-flex items-center justify-center bg-[#3178c6] text-white font-bold text-[10px] rounded-[2px] leading-none px-0.5 py-0.5 ${className}`}>
          TS
        </span>
      );
    case 'css':
      return (
        <span className={`inline-flex items-center justify-center text-[#42a5f5] font-mono font-bold text-xs ${className}`}>
          #
        </span>
      );
    case 'markdown':
      return (
        <span className={`inline-flex items-center justify-center text-[#42b883] font-mono font-bold text-xs ${className}`}>
          M↓
        </span>
      );
    case 'pdf':
      return (
        <span className={`inline-flex items-center justify-center text-[#ef4444] font-mono font-bold text-xs ${className}`}>
          PDF
        </span>
      );
    default:
      return <span className={className}>📄</span>;
  }
}
