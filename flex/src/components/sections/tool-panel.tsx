'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { useTool } from '@/lib/hooks';

export interface ToolField {
  type: 'slider' | 'select' | 'number' | 'text' | 'switch' | 'segmented';
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string }[];
  default?: any;
  placeholder?: string;
  unit?: string;
}

export interface ToolPanelProps {
  title: string;
  subtitle?: string;
  fields: ToolField[];
  layout?: 'inline-hero' | 'two-column' | 'stepper';
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Schema-driven Tool Panel section component
 */
export function ToolPanel({ title, subtitle, fields, layout = 'two-column', id, tone = 'paper', className }: ToolPanelProps) {
  const { state, run } = useTool();
  
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    fields.forEach(f => {
      initial[f.name] = f.default !== undefined ? f.default : '';
    });
    return initial;
  });

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(formData);
  };

  return (
    <Section id={id} tone={tone} className={cn('py-12', className)}>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2">{title}</h2>
          {subtitle && <p className="text-lg font-medium">{subtitle}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-paper-2 p-6 md:p-8 border-4 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label className="block text-sm font-bold uppercase">{field.label}</label>
                
                {field.type === 'text' && (
                  <input
                    type="text"
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                )}

                {field.type === 'number' && (
                  <div className="flex items-center">
                    <input
                      type="number"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(field.name, Number(e.target.value))}
                      placeholder={field.placeholder}
                      className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    {field.unit && <span className="ml-3 font-bold">{field.unit}</span>}
                  </div>
                )}

                {field.type === 'slider' && (
                  <div>
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={formData[field.name]}
                      onChange={(e) => handleChange(field.name, Number(e.target.value))}
                      className="w-full accent-ink"
                    />
                    <div className="flex justify-between mt-2 font-bold text-sm">
                      <span>{field.min}</span>
                      <span>{formData[field.name]} {field.unit}</span>
                      <span>{field.max}</span>
                    </div>
                  </div>
                )}

                {field.type === 'select' && field.options && (
                  <select
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {field.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                )}

                {field.type === 'switch' && (
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={formData[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.checked)}
                        className="sr-only"
                      />
                      <div className={cn("block w-14 h-8 rounded-full border-2 border-ink transition-colors", formData[field.name] ? 'bg-accent' : 'bg-paper')}></div>
                      <div className={cn("dot absolute left-1 top-1 bg-ink w-6 h-6 rounded-full transition-transform", formData[field.name] ? 'transform translate-x-6' : '')}></div>
                    </div>
                  </label>
                )}

                {field.type === 'segmented' && field.options && (
                  <div className="flex border-2 border-ink">
                    {field.options.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleChange(field.name, opt.value)}
                        className={cn("flex-1 py-2 px-4 font-bold uppercase transition-colors border-r-2 border-ink last:border-r-0", 
                          formData[field.name] === opt.value ? 'bg-ink text-paper' : 'bg-paper hover:bg-paper-2'
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            type="submit" 
            disabled={state === 'loading'}
            className="w-full bg-accent text-accent-ink py-4 font-bold uppercase text-lg border-2 border-ink hover:bg-opacity-90 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-70"
          >
            {state === 'loading' ? 'Processing...' : 'Run Tool'}
          </button>
        </form>
      </Container>
    </Section>
  );
}
