'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useFlexStore } from '@/lib/store';
import { siteConfig } from '@/config/site.config';
import { Container } from './container';
import type { NavItem } from '@/config/types';

export function Header({ nav }: { nav?: NavItem[] }) {
  const navItems = nav ?? siteConfig.nav;
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen } = useFlexStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setMobileMenuOpen]);

  // Close menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-40 transition-colors duration-300',
          'h-[var(--header-h-mobile)] lg:h-[var(--header-h)]',
          scrolled ? 'bg-paper shadow-active border-b-2 border-line' : 'bg-transparent'
        )}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter uppercase text-ink relative z-50">
              FLEX<span className="text-accent-2">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm tracking-wide uppercase transition-all duration-150',
                      isActive
                        ? 'bg-accent text-accent-ink border-2 border-ink px-3 py-1 font-bold shadow-[2px_2px_0px_var(--ink)]'
                        : 'text-ink hover:bg-ink/5 px-3 py-1 font-bold'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 border-2 border-transparent hover:border-line rounded-full transition-colors text-ink"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full font-bold uppercase text-sm tracking-wide hover:bg-accent hover:text-accent-ink transition-colors border-2 border-ink shadow-brutal"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-2" />
                </span>
                Let's Talk
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-ink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink text-paper transition-transform duration-500 ease-in-out flex flex-col',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-5xl sm:text-7xl font-bold uppercase hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mt-12 flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="p-4 border-2 border-paper rounded-full hover:bg-paper hover:text-ink transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
