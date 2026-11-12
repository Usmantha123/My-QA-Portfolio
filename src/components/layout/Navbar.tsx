import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/personal';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface/85 border-b border-divider transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo: [TU] Talha Usman [ SQA ] */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group"
            aria-label="Talha Usman Homepage"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-lime-accent text-dark-bg font-mono font-black text-xs tracking-tight shadow-sm group-hover:scale-105 transition-transform">
              TU
            </span>
            <span className="font-heading font-extrabold text-content text-base sm:text-lg tracking-tight">
              Talha Usman
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-surface-card border border-divider text-content-secondary">
              SQA
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-content-secondary hover:text-content transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle + Hire Me */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-9 h-9 rounded-full bg-surface-card border border-divider flex items-center justify-center text-content-secondary hover:text-content transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Lime "Hire Me ↗" Pill Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 px-4 sm:px-5 py-2 rounded-full bg-lime-accent text-dark-bg font-heading font-bold text-xs sm:text-sm hover:brightness-105 hover:scale-[1.02] active:scale-95 transition-all shadow-sm"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl md:hidden bg-surface-card border border-divider text-content hover:text-lime-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-divider space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-content hover:bg-surface-card hover:text-lime-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-surface-card border border-divider text-content-secondary hover:text-content"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
