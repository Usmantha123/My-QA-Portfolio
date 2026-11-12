import React from 'react';
import {
  Globe,
  Smartphone,
  Server,
  Bug,
  ShieldCheck,
  CreditCard,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Reveal } from '../ui/Reveal';
import { LottieQA } from '../ui/LottieQA';

const COMPETENCIES = [
  {
    name: 'Web Testing',
    icon: Globe,
    desc: 'Functional cross-browser validation, UI & edge cases',
  },
  {
    name: 'Mobile (Android) Testing',
    icon: Smartphone,
    desc: 'Real device APK testing, ad integration, permissions',
  },
  {
    name: 'API Testing with Postman',
    icon: Server,
    desc: 'Endpoint assertions, status codes, payload integrity',
  },
  {
    name: 'Bug Reporting',
    icon: Bug,
    desc: 'Reproducible JIRA/ClickUp tickets with logs & steps',
  },
  {
    name: 'Regression Testing',
    icon: ShieldCheck,
    desc: 'Release verification, smoke tests, sanity sweeps',
  },
  {
    name: 'Fintech QA',
    icon: CreditCard,
    desc: 'Payment flows, transaction states, calculation logic',
  },
];

const TOOLS = [
  {
    name: 'Postman',
    category: 'API Testing',
    color: '#FF6C37',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-2h-2v2H9v-4h4v-2h-2v2H9V8.5h2v2h2v-2h2v4h-2v2h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: 'Swagger',
    category: 'API Docs & Schema',
    color: '#85EA2D',
    icon: (
      <span className="font-mono font-black text-xs text-[#85EA2D]">
        {'{->}'}
      </span>
    ),
  },
  {
    name: 'JIRA',
    category: 'Defect & Sprint Tracking',
    color: '#2684FF',
    icon: (
      <svg className="w-5 h-5 text-[#2684FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.53 2c0 5.25 4.28 9.53 9.53 9.53H21v-1.9h-.03c-4.22 0-7.64-3.42-7.64-7.63H11.53zM2 11.53c5.25 0 9.53 4.28 9.53 9.53V23h-1.9v-.03c0-4.22-3.42-7.64-7.63-7.64V11.53z" />
      </svg>
    ),
  },
  {
    name: 'ClickUp',
    category: 'Task & QA Management',
    color: '#7B68EE',
    icon: (
      <svg className="w-5 h-5 text-[#7B68EE]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.5 17.5l3.5-3 3.5 3-1.5 1.5-2-1.7-2 1.7-1.5-1.5zm7-7l-3.5-3-3.5 3 1.5 1.5 2-1.7 2 1.7 1.5-1.5z" />
      </svg>
    ),
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ── Left Column (Profile Card + How I Approach Quality) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Card 1: Profile Card */}
            <Reveal delay={0.1}>
              <div className="qa-card p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 bg-surface-card border border-divider hover:border-lime-accent/40 transition-colors">
                {/* Photo in rounded rectangle with subtle border */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden border border-divider shadow-sm bg-surface-secondary">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Column */}
                <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-lime-accent text-dark-bg tracking-wide uppercase">
                    SQA ENGINEER
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-content tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-content-secondary font-mono">
                    <MapPin className="w-3.5 h-3.5 text-content-muted shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-lime-accent font-mono font-semibold pt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    <span>BS Software Engineering (2020-2024)</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: How I Approach Quality + Lottie QA Radar Animation */}
            <Reveal delay={0.2} className="flex-1 flex flex-col">
              <div className="qa-card p-6 sm:p-7 space-y-3.5 bg-surface-card border border-divider flex-1 flex flex-col justify-center relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-heading font-bold text-content flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>How I Approach Quality</span>
                  </h4>
                  {/* Lottie QA Testing Animation */}
                  <div title="Continuous QA Radar & Verification">
                    <LottieQA className="w-8 h-8 opacity-90" />
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-content-secondary leading-relaxed">
                  I&apos;m an SQA Engineer specializing in web, mobile (Android), and API testing with Postman. I focus on finding high-impact defects before release.
                </p>
                <p className="text-xs sm:text-[13px] text-content-secondary leading-relaxed">
                  I test real user flows, validate complex payment and ad-integrated features, write clear, reproducible bug reports in JIRA and ClickUp, and run rigorous regression cycles to keep every release stable and reliable.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column (Core Competencies + Tools & Stack) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Card 3: Core Competencies (3 Columns x 2 Rows) with Hover Lift & Soft Glow */}
            <Reveal delay={0.2}>
              <div className="qa-card p-6 sm:p-7 space-y-4 bg-surface-card border border-divider">
                <div className="flex items-center justify-between border-b border-divider pb-3">
                  <h4 className="text-lg font-heading font-bold text-content tracking-tight">
                    Core Competencies
                  </h4>
                  <span className="text-[11px] font-mono text-lime-accent font-bold uppercase tracking-wider">
                    HANDS-ON
                  </span>
                </div>

                {/* 3-Column Grid with Staggered Delays & Glow Hover */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {COMPETENCIES.map((comp, idx) => {
                    const Icon = comp.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-surface-secondary/70 border border-divider hover:border-lime-accent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(184,244,0,0.18)] transition-all duration-300 flex flex-col justify-between space-y-2 group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-surface-card border border-divider flex items-center justify-center text-lime-accent group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-xs sm:text-[13px] font-heading font-bold text-content leading-snug">
                            {comp.name}
                          </h5>
                          <p className="text-[11px] text-content-secondary leading-snug">
                            {comp.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Card 4: Tools & Stack (4 Columns) with Hover Lift */}
            <Reveal delay={0.3}>
              <div className="qa-card p-6 sm:p-7 space-y-4 bg-surface-card border border-divider">
                <div className="flex items-center justify-between border-b border-divider pb-3">
                  <h4 className="text-lg font-heading font-bold text-content tracking-tight">
                    Tools &amp; Stack
                  </h4>
                  <span className="text-[11px] font-mono text-content-secondary uppercase tracking-wider">
                    DAILY USE
                  </span>
                </div>

                {/* 4 Columns in 1 Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TOOLS.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-secondary/70 border border-divider hover:border-lime-accent/50 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 flex flex-col items-start space-y-2 cursor-default group"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: `${tool.color}15` }}
                      >
                        <span style={{ color: tool.color }}>{tool.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-heading font-bold text-xs sm:text-sm text-content">
                          {tool.name}
                        </div>
                        <div className="text-[10px] font-mono text-content-secondary truncate">
                          {tool.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
