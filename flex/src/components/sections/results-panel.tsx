'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { useTool } from '@/lib/hooks';

export interface ResultsPanelProps {
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Enhanced Results Panel displaying synthesized multi-channel editorial packets,
 * copy-to-clipboard functionality, and quality metrics breakdown.
 */
export function ResultsPanel({ id, tone = 'paper', className }: ResultsPanelProps) {
  const { state, output } = useTool();
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const channels = (output as any)?.channels ?? [];
  const qualityScore = (output as any)?.qualityScore;

  const handleCopy = (text: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2500);
    }
  };

  return (
    <Section id={id} tone={tone} className={cn('py-12', className)}>
      <Container>
        <div className="border-4 border-ink bg-paper p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px]">
          
          {state === 'idle' && (
            <div className="text-center py-16 opacity-75">
              <span className="inline-block bg-accent text-accent-ink px-4 py-1 text-xs font-mono font-bold tracking-widest uppercase border-2 border-ink mb-4">
                READY FOR INPUT
              </span>
              <p className="text-2xl md:text-3xl font-bold uppercase">
                Input your concept above and click &ldquo;Synthesize Content Packet&rdquo;
              </p>
              <p className="font-mono text-sm mt-2 text-[var(--muted)] max-w-lg mx-auto">
                Transforms raw domain notes into audience-calibrated, multi-channel publishing assets.
              </p>
            </div>
          )}

          {state === 'loading' && (
            <div className="py-16 text-center space-y-6">
              <div className="inline-block text-2xl font-black bg-accent text-accent-ink px-6 py-3 border-4 border-ink animate-bounce uppercase">
                ⚡ SYNTHESIZING EDITORIAL PACKET...
              </div>
              <p className="font-mono text-sm uppercase tracking-wider text-[var(--muted)]">
                Calibrating Audience Psychology • Stripping Generic Tropes • Formatting Native Channels
              </p>
              <div className="max-w-md mx-auto h-3 bg-muted border-2 border-ink overflow-hidden">
                <div className="h-full bg-accent animate-pulse w-full"></div>
              </div>
            </div>
          )}

          {state === 'error' && (
            <div className="text-center py-12 text-red-600 font-bold space-y-3">
              <p className="text-2xl uppercase">Synthesis interrupted</p>
              <p className="font-mono text-sm">Please check your inputs and try again.</p>
            </div>
          )}

          {state === 'success' && output && (
            <div className="space-y-10">
              
              {/* Header Banner & Score */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-4 border-ink pb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="bg-ink text-paper text-xs font-mono font-bold px-3 py-1 uppercase tracking-wider">
                      EDITORIAL ENGINE v2.0
                    </span>
                    <span className="bg-accent text-accent-ink text-xs font-mono font-bold px-3 py-1 uppercase border-2 border-ink">
                      PUBLICATION READY
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                    {output.headline || 'CONTENT PACKET GENERATED'}
                  </h3>
                  {(output as any).summary && (
                    <p className="font-medium text-base md:text-lg mt-2 text-[var(--muted)]">
                      {(output as any).summary}
                    </p>
                  )}
                </div>

                {output.score !== undefined && (
                  <div className="text-center bg-accent text-accent-ink p-4 border-4 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    <div className="font-mono text-xs uppercase font-black tracking-widest">
                      IMPACT SCORE
                    </div>
                    <div className="text-5xl md:text-6xl font-black leading-none my-1">
                      {output.score}<span className="text-2xl md:text-3xl">/100</span>
                    </div>
                    <div className="font-mono text-[10px] uppercase font-bold tracking-tight">
                      HIGH SIGNAL-TO-NOISE
                    </div>
                  </div>
                )}
              </div>

              {/* Multi-Channel Content Cards */}
              {channels.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-black text-xl uppercase tracking-wider">
                      SYNCHRONIZED DISTRIBUTION CHANNELS
                    </h4>
                    <span className="text-xs font-mono uppercase bg-paper-2 px-2 py-1 border border-ink">
                      SELECT FORMAT TO INSPECT & COPY
                    </span>
                  </div>

                  {/* Channel Tabs */}
                  <div className="flex flex-wrap border-2 border-ink bg-paper-2">
                    {channels.map((ch: any, idx: number) => (
                      <button
                        key={ch.id || idx}
                        onClick={() => setActiveChannelIndex(idx)}
                        className={cn(
                          'px-5 py-3 font-bold uppercase text-xs md:text-sm tracking-wider transition-all border-r-2 border-ink last:border-r-0 cursor-pointer',
                          activeChannelIndex === idx
                            ? 'bg-accent text-accent-ink font-black shadow-inner'
                            : 'hover:bg-paper'
                        )}
                      >
                        {ch.platform}
                      </button>
                    ))}
                  </div>

                  {/* Active Channel Display */}
                  {channels[activeChannelIndex] && (
                    <div className="border-4 border-ink bg-paper p-6 md:p-8 space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-ink pb-4">
                        <div>
                          <span className="bg-ink text-paper text-[10px] font-mono font-bold px-2 py-0.5 uppercase mr-2">
                            {channels[activeChannelIndex].format}
                          </span>
                          <h4 className="text-xl md:text-2xl font-black uppercase mt-1">
                            {channels[activeChannelIndex].title}
                          </h4>
                        </div>
                        
                        <button
                          onClick={() => handleCopy(
                            `${channels[activeChannelIndex].hook}\n\n${channels[activeChannelIndex].body}`,
                            channels[activeChannelIndex].platform
                          )}
                          className="bg-ink text-paper hover:bg-accent hover:text-accent-ink px-5 py-2.5 font-bold uppercase text-xs tracking-wider border-2 border-ink transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer shrink-0"
                        >
                          {copiedText === channels[activeChannelIndex].platform ? '✓ COPIED TO CLIPBOARD!' : 'COPY CHANNEL'}
                        </button>
                      </div>

                      {/* Hook */}
                      <div className="bg-paper-2 p-4 border-2 border-ink">
                        <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted)] block mb-1">
                          OPENING HOOK
                        </span>
                        <p className="font-bold text-base md:text-lg">
                          {channels[activeChannelIndex].hook}
                        </p>
                      </div>

                      {/* Body */}
                      <div className="bg-paper p-5 border-2 border-ink">
                        <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted)] block mb-2">
                          BODY CONTENT & STRUCTURAL PACING
                        </span>
                        <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap leading-relaxed text-[var(--ink)]">
                          {channels[activeChannelIndex].body}
                        </pre>
                      </div>

                      {/* Metrics & Tags */}
                      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2 border-t-2 border-ink">
                        <div className="flex gap-2 flex-wrap">
                          {channels[activeChannelIndex].tags?.map((tag: string, i: number) => (
                            <span key={i} className="text-xs font-mono font-bold bg-paper-2 px-2.5 py-1 border border-ink">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {channels[activeChannelIndex].metrics?.map((m: any, i: number) => (
                            <div key={i} className="text-right">
                              <span className="text-[10px] font-mono uppercase text-[var(--muted)] block">{m.label}</span>
                              <span className="text-xs font-bold font-mono">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quality Metrics Grid */}
              {qualityScore && (
                <div className="border-3 border-ink bg-paper-2 p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b-2 border-ink pb-3">
                    <h4 className="font-black text-lg md:text-xl uppercase tracking-wider">
                      EDITORIAL QUALITY ASSESSMENT
                    </h4>
                    <span className="bg-ink text-paper font-mono font-bold text-xs px-3 py-1 uppercase">
                      OVERALL RATING: {qualityScore.total} / {qualityScore.max}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                    {qualityScore.items?.map((item: any, i: number) => (
                      <div key={i} className="bg-paper border-2 border-ink p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-bold text-xs uppercase leading-tight">{item.category}</h5>
                            <span className="bg-accent text-accent-ink text-[11px] font-mono font-black px-1.5 py-0.5 border border-ink">
                              {item.score}/{item.maxScore}
                            </span>
                          </div>
                          <p className="text-[11px] font-mono text-[var(--muted)] leading-tight">
                            {item.note}
                          </p>
                        </div>
                        <div className="w-full h-2 bg-muted border border-ink mt-3">
                          <div className="h-full bg-ink" style={{ width: `${(item.score / item.maxScore) * 100}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Breakdown Bars */}
              {output.breakdown && (
                <div className="space-y-4 pt-4 border-t-2 border-ink">
                  <h4 className="font-black text-lg uppercase tracking-wider">
                    STRUCTURAL BENCHMARKS
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {output.breakdown.map((item: any, i: number) => (
                      <div key={i} className="bg-paper-2 p-3 border-2 border-ink">
                        <div className="flex justify-between mb-1 font-bold text-xs uppercase">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="w-full h-3 bg-muted border-2 border-ink">
                          <div className="h-full bg-accent" style={{ width: `${item.value}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {output.suggestions && output.suggestions.length > 0 && (
                <div className="bg-paper p-5 border-2 border-ink space-y-2">
                  <h5 className="font-mono text-xs font-black uppercase tracking-wider text-[var(--muted)]">
                    PUBLISHING RECOMMENDATIONS:
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {output.suggestions.map((suggestion: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase">
                        <span className="text-accent-ink bg-accent w-4 h-4 rounded-full flex items-center justify-center text-[10px] border border-ink shrink-0">✓</span>
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Global Actions */}
              <div className="flex flex-wrap justify-center gap-4 pt-6 border-t-4 border-ink">
                <button 
                  onClick={() => {
                    const allContent = channels.map((c: any) => `## ${c.platform}\n\n${c.hook}\n\n${c.body}`).join('\n\n---\n\n');
                    handleCopy(allContent, 'ALL CHANNELS');
                  }}
                  className="bg-accent text-accent-ink border-2 border-ink px-8 py-3.5 font-black uppercase text-sm tracking-wider hover:bg-opacity-90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  {copiedText === 'ALL CHANNELS' ? '✓ ALL CHANNELS COPIED!' : 'COPY FULL EDITORIAL PACKET (MARKDOWN)'}
                </button>
                <a 
                  href="#workflow"
                  className="bg-paper border-2 border-ink px-6 py-3.5 font-bold uppercase text-sm tracking-wider hover:bg-paper-2 transition-all cursor-pointer inline-flex items-center"
                >
                  EXPLORE WORKFLOW &rarr;
                </a>
              </div>

            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
