'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface NewsletterProps {
  title: string;
  subtitle?: string;
  placeholder?: string;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Newsletter subscription component
 */
export function Newsletter({ title, subtitle, placeholder = 'Enter your email', id, tone = 'paper', className }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1000);
  };

  return (
    <Section id={id} tone={tone} className={cn('py-20', className)}>
      <Container>
        <div className="max-w-2xl mx-auto text-center border-4 border-ink p-8 md:p-12 bg-paper-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">{title}</h2>
          {subtitle && <p className="text-lg font-medium mb-8">{subtitle}</p>}
          
          {status === 'success' ? (
            <div className="bg-accent text-accent-ink p-4 border-2 border-ink font-bold uppercase">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder={placeholder}
                required
                className="flex-1 bg-paper border-2 border-ink p-4 font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-ink text-paper px-8 py-4 font-bold uppercase hover:bg-opacity-90 disabled:opacity-70 transition-colors"
              >
                {status === 'loading' ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-500 font-bold mt-4">Please enter a valid email address.</p>
          )}
        </div>
      </Container>
    </Section>
  );
}
