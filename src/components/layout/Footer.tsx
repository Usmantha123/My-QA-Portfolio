import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-divider bg-surface-secondary/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-divider">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-lime-accent text-dark-bg font-mono font-black text-xs">
              TU
            </span>
            <div>
              <span className="font-heading font-extrabold text-content text-base">
                {personalInfo.name}
              </span>
              <span className="text-content-secondary font-mono text-xs block">
                SQA Engineer &bull; {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-content hover:border-divider transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-surface-card border border-divider text-content-secondary hover:text-lime-accent hover:border-lime-accent/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-lime-accent text-dark-bg hover:brightness-110 transition-all font-bold cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-content-secondary gap-4">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. SQA Engineer.
          </p>
          <p className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-lime-accent" />
            <span>Built for speed, tested for quality</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
