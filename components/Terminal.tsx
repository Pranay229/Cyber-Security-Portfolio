'use client';

import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  className?: string;
}

export default function Terminal({ lines, className = '' }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, lines]);

  return (
    <div className={`glass-card p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-primary/20">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-muted-foreground">terminal</span>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-secondary">$</span>
            <span className="text-foreground/90">{line}</span>
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex items-start space-x-2">
            <span className="text-secondary">$</span>
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
