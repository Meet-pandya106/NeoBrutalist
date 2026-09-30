import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { FooterDef } from '@/config/types';

interface PageShellProps {
  children: React.ReactNode;
  footerConfig: FooterDef;
}

export function PageShell({ children, footerConfig }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink transition-colors duration-300">
      <Header />
      <main className="flex-1 flex flex-col pt-[var(--header-h-mobile)] lg:pt-[var(--header-h)]">
        {children}
      </main>
      <Footer {...footerConfig} />
    </div>
  );
}
