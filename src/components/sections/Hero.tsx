import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, Smartphone } from 'lucide-react';
import { personalInfo } from '../../data/personal';

interface TerminalLine {
  id: number;
  text: string;
  type: 'cmd' | 'pass' | 'fail' | 'release';
}

const TERMINAL_LINES: TerminalLine[] = [
  { id: 1, text: '$ run qa-suite --project fintech', type: 'cmd' },
  { id: 2, text: '✓ Login and auth flow passed', type: 'pass' },
  { id: 3, text: '✓ Payment API (Postman) [200 OK · 42ms]', type: 'pass' },
  { id: 4, text: '✓ Mobile ads rendering validated', type: 'pass' },
  { id: 5, text: '✕ Edge case #42 · bug found, reported', type: 'fail' },
  { id: 6, text: '✓ Regression pack passed (98.6%)', type: 'pass' },
  { id: 7, text: '★ Release ready after fix', type: 'release' },
];

export const Hero: React.FC = () => {
  const [visibleLineCount, setVisibleLineCount] = useState(1);

  useEffect(() => {
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
    }, 650);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 qa-grid-bg overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* "AVAILABLE FOR WORK" badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-divider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-accent" />
              </span>
              <span className="font-mono text-[11px] font-bold tracking-wider text-content uppercase">
                AVAILABLE FOR WORK
              </span>
              <span className="text-content-secondary font-mono text-[11px]">
                &bull; {personalInfo.location}
              </span>
            </div>

            {/* Headline matching image:
                I break apps so users
                [never] do.
            */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-content tracking-[-2px] leading-[1.08]">
              I break apps so users<br className="hidden sm:inline" />
              <span className="inline-block bg-lime-accent text-dark-bg font-black px-3 sm:px-4 py-0.5 rounded-xl mr-2.5 shadow-sm align-baseline">
                never
              </span>
              do.
            </h1>

            {/* Short intro line with [SQA Engineer] badge */}
            <p className="text-sm sm:text-base lg:text-lg text-content-secondary max-w-xl leading-relaxed">
              Hi, I&apos;m <strong className="text-content font-bold">{personalInfo.name}</strong> &mdash;{' '}
              <span className="inline-block px-2 py-0.5 rounded-md font-mono font-bold text-xs sm:text-sm bg-lime-accent text-dark-bg shadow-sm mx-1 align-baseline">
                SQA Engineer
              </span>{' '}
              focused on web, Android, and API testing with Postman. I find edge cases, report high-impact bugs, and give release teams the confidence to ship with quality.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-lime-accent text-dark-bg font-heading font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <span>Let&apos;s work together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-card border border-divider hover:border-lime-accent text-content font-heading font-bold text-sm sm:text-base transition-colors cursor-pointer"
              >
                <span className="w-4 h-4 rounded bg-[#0077b5] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                  in
                </span>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro QA Trust Row with dividers */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-content-secondary">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Critical Escape Rate</span>
              </div>
              <span className="text-divider hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-lime-accent font-bold">&gt;_</span>
                <span>Postman &bull; JIRA &bull; Swagger</span>
              </div>
              <span className="text-divider hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-lime-accent shrink-0" />
                <span>Real Android Devices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glowing Neon Lime Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Terminal Container with Glowing Lime Border matching the image */}
              <div className="rounded-2xl bg-[#0e0e12] border-2 border-lime-accent shadow-[0_0_28px_rgba(184,244,0,0.22)] overflow-hidden transition-all duration-300">
                {/* Traffic-Light Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0d] border-b border-[#24242b]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  </div>
                  <div className="font-mono text-xs font-medium text-dark-muted flex items-center gap-1.5">
                    <span className="text-lime-accent font-bold">&gt;_</span>
                    <span>qa-suite &mdash; talha</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] font-mono text-dark-muted">v2.4</span>
                  </div>
                </div>

                {/* Terminal Body with sequentially appearing lines */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2.5 min-h-[275px] bg-[#0c0c0f]">
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
                          className="px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold flex items-center gap-2 animate-in fade-in duration-200"
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
                          <span className="text-[10px] tracking-wider uppercase bg-dark-bg text-lime-accent px-2 py-0.5 rounded font-mono font-black">
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
                <div className="px-5 py-2.5 bg-[#0a0a0d] border-t border-[#24242b] flex items-center justify-between text-[11px] font-mono text-dark-muted">
                  <span>Target: Android APK &bull; API Backend</span>
                  <span className="text-lime-accent font-bold">QA PASS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
