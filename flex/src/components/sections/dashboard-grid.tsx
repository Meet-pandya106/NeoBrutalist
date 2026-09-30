'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface Metric {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ChartData {
  labels: string[];
  values: number[];
}

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

export interface DashboardGridProps {
  title: string;
  metrics: Metric[];
  chartData?: ChartData;
  tableData?: TableData;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Dashboard Grid section component
 */
export function DashboardGrid({ title, metrics, chartData, tableData, id, tone = 'paper', className }: DashboardGridProps) {
  return (
    <Section id={id} tone={tone} className={cn('py-12', className)}>
      <Container>
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">{title}</h2>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div
              key={i}
              data-anim="reveal-up"
              data-anim-delay={String(i * 0.08)}
              className="border-4 border-ink p-6 bg-paper shadow-brutal hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="text-xs font-mono font-bold uppercase text-ink/80 tracking-wider mb-2">{metric.label}</h3>
              <p className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-ink tabular-nums">{metric.value}</p>
              {metric.change && (
                <div className={cn("mt-4 inline-block px-2.5 py-1 text-xs font-bold uppercase border-2", 
                  metric.trend === 'up' ? "bg-ok/20 border-ink text-ink" :
                  metric.trend === 'down' ? "bg-danger/20 border-ink text-ink" :
                  "bg-paper-2 border-ink text-ink"
                )}>
                  {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '-'} {metric.change}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Simple SVG Chart */}
          {chartData && chartData.labels.length > 0 && (
            <div className="border-4 border-ink p-6 bg-paper-2">
              <h3 className="font-bold uppercase mb-6">Overview</h3>
              <div className="h-64 flex items-end gap-2">
                {chartData.values.map((val, i) => {
                  const max = Math.max(...chartData.values);
                  const height = `${(val / max) * 100}%`;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full group">
                      <div 
                        className="w-full bg-accent border-2 border-ink group-hover:bg-ink transition-colors relative"
                        style={{ height }}
                      >
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-bold bg-ink text-paper text-xs py-1 px-2 pointer-events-none transition-opacity z-10">
                          {val}
                        </span>
                      </div>
                      <span className="text-xs font-bold mt-2 text-center truncate">{chartData.labels[i]}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Data Table */}
          {tableData && tableData.headers.length > 0 && (
            <div className="border-4 border-ink bg-paper overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-ink bg-ink text-paper">
                    {tableData.headers.map((h, i) => (
                      <th key={i} className="p-4 font-mono font-bold uppercase text-xs tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink last:border-b-0 hover:bg-paper-2">
                      {row.map((cell, j) => (
                        <td key={j} className="p-4 font-medium">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
