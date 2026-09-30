'use client';

import React from 'react';
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
 * Results Panel section component displaying output of useTool
 */
export function ResultsPanel({ id, tone = 'paper', className }: ResultsPanelProps) {
  const { state, output } = useTool();

  return (
    <Section id={id} tone={tone} className={cn('py-12', className)}>
      <Container>
        <div className="border-4 border-ink bg-paper p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[400px] flex flex-col justify-center">
          
          {state === 'idle' && (
            <div className="text-center opacity-50">
              <p className="text-2xl font-bold uppercase">Run the tool to see results</p>
            </div>
          )}

          {state === 'loading' && (
            <div className="animate-pulse space-y-6 w-full">
              <div className="h-16 bg-muted w-1/3 mx-auto"></div>
              <div className="h-8 bg-muted w-2/3 mx-auto"></div>
              <div className="space-y-4 pt-8 max-w-2xl mx-auto">
                <div className="h-4 bg-muted w-full"></div>
                <div className="h-4 bg-muted w-5/6"></div>
                <div className="h-4 bg-muted w-4/6"></div>
              </div>
            </div>
          )}

          {state === 'error' && (
            <div className="text-center text-red-500 font-bold">
              <p className="text-2xl uppercase">Something went wrong.</p>
              <p>Please try again later.</p>
            </div>
          )}

          {state === 'success' && output && (
            <div className="space-y-8">
              <div className="text-center">
                {output.score !== undefined && (
                  <div className="inline-block text-6xl md:text-8xl font-black bg-accent text-accent-ink px-6 py-2 border-4 border-ink mb-6 transform -rotate-2">
                    {output.score}
                  </div>
                )}
                {output.headline && (
                  <h3 className="text-3xl font-bold uppercase">{output.headline}</h3>
                )}
              </div>

              {output.breakdown && (
                <div className="max-w-2xl mx-auto space-y-4">
                  {output.breakdown.map((item: any, i: number) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1 font-bold text-sm uppercase">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="w-full h-4 bg-muted border-2 border-ink">
                        <div className="h-full bg-ink" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {output.suggestions && output.suggestions.length > 0 && (
                <div className="max-w-2xl mx-auto pt-6 border-t-2 border-ink">
                  <h4 className="font-bold uppercase mb-4">Suggestions</h4>
                  <div className="flex flex-wrap gap-2">
                    {output.suggestions.map((suggestion: string, i: number) => (
                      <span key={i} className="bg-paper-2 border-2 border-ink px-4 py-1 text-sm font-bold uppercase">
                        {suggestion}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-4 pt-8">
                <button className="bg-ink text-paper px-6 py-3 font-bold uppercase hover:bg-opacity-90 transition-colors">
                  Copy Results
                </button>
                <button className="bg-paper border-2 border-ink px-6 py-3 font-bold uppercase hover:bg-paper-2 transition-colors">
                  Share
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
