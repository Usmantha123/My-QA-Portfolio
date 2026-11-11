import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/personal';

interface TerminalLine {
  id: number;
  text: string;
  type: 'cmd' | 'pass' | 'fail' | 'release';
}

const TERMINAL_LINES: TerminalLine[] = [
  { id: 1, text: '$ run qa-suite --project fintech', type: 'cmd' },
  { id: 2, text: '✔ Login and auth flow passed', type: 'pass' },
  { id: 3, text: '✔ Payment API (Postman) [200 OK · 42ms]', type: 'pass' },
  { id: 4, text: '✔ Mobile ads rendering validated', type: 'pass' },
  { id: 5, text: '✖ Edge case #42 · bug found, reported', type: 'fail' },
  { id: 6, text: '✔ Regression pack passed (98.6%)', type: 'pass' },
  { id: 7, text: '★ Release ready after fix', type: 'release' },
];

export const Hero: React.FC = () => {
  const [visibleLineCount, setVisibleLineCount] = useState(1);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleLineCount(TERMINAL_LINES.length);
      return;
    }

    const interval = setInterval(() => {
      setVisibleLineCount((prev) => {
        if (prev < TERMINAL_LINES.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 qa-grid-bg overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* "Available for work" badge with pulsing dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-divider shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-accent" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wide text-content uppercase">
                Available for work
              </span>
              <span className="text-content-secondary font-mono text-xs">
                &bull; {personalInfo.location}
              </span>
            </div>

            {/* Main Headline with rotated lime box for "never" */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold text-content tracking-[-2px] leading-[1.05]">
              I break apps so users{' '}
              <span className="inline-block bg-lime-accent text-dark-bg font-black px-2.5 sm:px-3 py-0.5 rounded-lg -rotate-2 shadow-[3px_3px_0px_#24242b] mx-1">
                never
              </span>{' '}
              do.
            </h1>

            {/* Short intro line */}
            <p className="text-base sm:text-lg lg:text-xl text-content-secondary max-w-2xl leading-relaxed">
              Hi, I&apos;m <strong className="text-content font-bold">{personalInfo.name}</strong> &mdash;{' '}
              <span className="inline-block px-2.5 py-0.5 rounded-md font-mono font-bold text-xs sm:text-sm bg-lime-accent text-dark-bg shadow-sm tracking-wide align-middle">
                SQA Engineer
              </span>{' '}
              specializing in web, mobile (Android), and API testing with Postman. I dig deep into edge cases so your production releases stay rock solid.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="btn-lime inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base cursor-pointer"
              >
                <span>Let&apos;s work together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-qa inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro QA Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-content-secondary border-t border-divider">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-lime-accent" />
                <span>Zero Critical Escape Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-lime-accent" />
                <span>Postman &bull; JIRA &bull; Swagger</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-lime-accent" />
                <span>Real Android Devices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fake Terminal Card with lime offset shadow */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Terminal Container with offset lime shadow */}
              <div className="rounded-[20px] bg-dark-surface border border-dark-border shadow-[4px_4px_0px_0px_#b8f400] sm:shadow-[8px_8px_0px_0px_#b8f400] overflow-hidden transition-all duration-300">
                {/* Traffic-Light Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d10] border-b border-dark-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  </div>
                  <div className="font-mono text-xs font-medium text-dark-muted flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-lime-accent" />
                    <span>qa-suite &mdash; talha</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] font-mono text-dark-muted">v2.4</span>
                  </div>
                </div>

                {/* Terminal Body with sequentially appearing lines */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 min-h-[280px] bg-dark-bg/95">
                  {TERMINAL_LINES.slice(0, visibleLineCount).map((line) => {
                    if (line.type === 'cmd') {
                      return (
                        <div key={line.id} className="text-dark-text font-bold flex items-center gap-2">
                          <span className="text-lime-accent font-black">&gt;</span>
                          <span>{line.text}</span>
                        </div>
                      );
                    }
                    if (line.type === 'fail') {
                      return (
                        <div
                          key={line.id}
                          className="px-2.5 py-1.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold flex items-center gap-2 animate-in fade-in duration-200"
                        >
                          <span>{line.text}</span>
                        </div>
                      );
                    }
                    if (line.type === 'release') {
                      return (
                        <div
                          key={line.id}
                          className="px-3 py-2 rounded-lg bg-lime-accent text-dark-bg font-extrabold flex items-center justify-between shadow-sm animate-in fade-in duration-200 mt-2"
                        >
                          <span>{line.text}</span>
                          <span className="text-[10px] tracking-wider uppercase bg-dark-bg text-lime-accent px-2 py-0.5 rounded font-mono">
                            PASS
                          </span>
                        </div>
                      );
                    }
                    // default pass line
                    return (
                      <div
                        key={line.id}
                        className="text-emerald-400 font-medium flex items-center gap-2 animate-in fade-in duration-200"
                      >
                        <span>{line.text}</span>
                      </div>
                    );
                  })}

                  {/* Blinking cursor */}
                  {visibleLineCount < TERMINAL_LINES.length && (
                    <div className="flex items-center gap-1 text-lime-accent">
                      <span className="animate-pulse">_</span>
                    </div>
                  )}
                </div>

                {/* Terminal Footer status bar */}
                <div className="px-5 py-2.5 bg-[#0d0d10] border-t border-dark-border flex items-center justify-between text-[11px] font-mono text-dark-muted">
                  <span>Target: Android APK &bull; API Backend</span>
                  <span className="text-lime-accent font-semibold">QA PASS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
