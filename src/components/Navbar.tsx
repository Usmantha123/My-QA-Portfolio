import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileDown, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { personalInfo } from '../data/personal';
import { Button } from './ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'QA Process', href: '#qa-process', id: 'qa-process' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border border-divider shadow-lg shadow-black/5">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center font-heading font-bold text-white text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              TU
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-content text-base tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-content-secondary flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-500 inline" />
                QA Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-surface-secondary/40 p-1 rounded-xl border border-divider/50">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-content-secondary hover:text-content hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions: Theme Toggle & Resume */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-content-secondary hover:text-content hover:bg-surface-secondary border border-transparent hover:border-divider transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500" />
              )}
            </button>

            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<FileDown className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-xl text-content-secondary hover:text-content hover:bg-surface-secondary border border-transparent hover:border-divider"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 p-4 glass rounded-2xl border border-divider shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-400 font-semibold border border-blue-500/30'
                      : 'text-content-secondary hover:text-content hover:bg-surface-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-divider flex items-center justify-between">
                <span className="text-xs text-content-secondary">Resume / CV</span>
                <Button
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon={<FileDown className="w-3.5 h-3.5" />}
                >
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

