'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

export interface ContactFormProps {
  title: string;
  email?: string;
  phone?: string;
  address?: string;
  id?: string;
  tone?: 'paper' | 'paper-2' | 'ink' | 'accent';
  className?: string;
}

/**
 * Contact Form section component
 */
export function ContactForm({ title, email, phone, address, id, tone = 'paper', className }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <Section id={id} tone={tone} className={cn('py-16 lg:py-24', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">{title}</h2>
            <div className="space-y-6">
              {email && (
                <div>
                  <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Email</h4>
                  <a href={`mailto:${email}`} className="text-lg font-medium hover:underline">{email}</a>
                </div>
              )}
              {phone && (
                <div>
                  <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Phone</h4>
                  <a href={`tel:${phone}`} className="text-lg font-medium hover:underline">{phone}</a>
                </div>
              )}
              {address && (
                <div>
                  <h4 className="text-sm font-bold uppercase mb-1 opacity-70">Address</h4>
                  <p className="text-lg font-medium whitespace-pre-line">{address}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-accent text-accent-ink p-8 border-4 border-ink font-bold uppercase text-xl text-center">
                Message sent successfully! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">Name</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">Email</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold uppercase mb-2">Subject</label>
                  <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-paper border-2 border-ink p-3 font-medium focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full bg-ink text-paper py-4 font-bold uppercase text-lg hover:bg-opacity-90 disabled:opacity-70 transition-colors">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
