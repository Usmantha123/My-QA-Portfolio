import React from 'react';
import { ArrowUpRight, ShieldCheck, Smartphone } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { HeroProfileFrame } from './HeroProfileFrame';

export const Hero: React.FC = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings, CTA & Trust Indicators */}
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

            {/* Headline */}
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

          {/* Right Column: Premium 3D Floating Profile Frame */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroProfileFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
