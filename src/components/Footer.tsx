import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, Mail, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-divider bg-surface-secondary/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-divider">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center font-heading font-bold text-white text-sm">
                TU
              </div>
              <span className="font-heading font-bold text-content text-lg">
                {personalInfo.name}
              </span>
            </div>
            <p className="mt-2 text-xs text-content-secondary max-w-sm leading-relaxed">
              &ldquo;Quality is never an accident; it is always the result of intelligent effort.&rdquo;
            </p>
          </div>

          {/* Location & QA Focus */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-divider text-xs text-content-secondary">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Manual &amp; Android QA Specialist &bull; {personalInfo.location}</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-content hover:border-white/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:brightness-110 transition-all shadow-md shadow-blue-500/20"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-content-secondary gap-4">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with precision, tested for quality <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

