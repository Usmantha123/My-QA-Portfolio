import React from 'react';
import { ShieldCheck, CheckCircle2, Terminal, Bug, Smartphone, Globe, Server, FileText } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const QA_SKILLS = [
  { name: 'Web Testing', icon: Globe, desc: 'Functional cross-browser validation, UI edge cases' },
  { name: 'Mobile (Android) Testing', icon: Smartphone, desc: 'Real device APK testing, ad integration, permissions' },
  { name: 'API Testing with Postman', icon: Server, desc: 'Endpoint assertions, status codes, payload integrity' },
  { name: 'Fintech QA', icon: ShieldCheck, desc: 'Payment flows, transaction states, calculation logic' },
  { name: 'Bug Reporting', icon: Bug, desc: 'Reproducible JIRA/ClickUp tickets with logs & steps' },
  { name: 'Regression Testing', icon: FileText, desc: 'Release verification, smoke tests, sanity sweeps' },
];

const TOOLS_LIST = [
  { name: 'Postman', category: 'API Testing' },
  { name: 'Swagger', category: 'API Docs & Schema' },
  { name: 'JIRA', category: 'Defect & Sprint Tracking' },
  { name: 'ClickUp', category: 'Task & QA Management' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-divider text-xs font-mono font-semibold text-lime-accent">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT TALHA USMAN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-content tracking-[-2px]">
            SQA Engineer with a Precision Mindset
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl">
            Passionate about catching edge cases early, verifying critical business flows, and driving production-grade quality.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Photo Card */}
            <div className="qa-card p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-lime-accent shadow-[4px_4px_0px_0px_#b8f400]">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-lime-accent text-dark-bg uppercase">
                  SQA Engineer
                </span>
                <h3 className="text-xl font-heading font-black text-content">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-content-secondary">
                  Based in {personalInfo.location}
                </p>
                <p className="text-xs text-lime-accent font-semibold pt-1">
                  BS Software Engineering (2020&ndash;2024)
                </p>
              </div>
            </div>

            {/* Narrative Card */}
            <div className="qa-card p-6 sm:p-8 space-y-4">
              <h4 className="text-lg font-heading font-bold text-content flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-lime-accent" />
                <span>How I Approach Quality</span>
              </h4>
              {personalInfo.about.map((p, i) => (
                <p key={i} className="text-sm text-content-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Tools */}
          <div className="lg:col-span-7 space-y-6">
            {/* Core QA Skills Grid */}
            <div className="qa-card p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-divider pb-3">
                <h4 className="text-lg font-heading font-bold text-content">
                  Core Competencies
                </h4>
                <span className="text-xs font-mono text-lime-accent font-bold">
                  HANDS-ON
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {QA_SKILLS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface-secondary border border-divider hover:border-lime-accent/50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-surface-card border border-divider flex items-center justify-center text-lime-accent shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs sm:text-sm font-heading font-bold text-content">
                          {item.name}
                        </h5>
                        <p className="text-[11px] text-content-secondary leading-tight mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Primary QA Tools */}
            <div className="qa-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-divider pb-3">
                <h4 className="text-lg font-heading font-bold text-content">
                  Tools &amp; Stack
                </h4>
                <span className="text-xs font-mono text-content-secondary">
                  DAILY USE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TOOLS_LIST.map((tool, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-surface-secondary border border-divider text-center space-y-1 hover:border-lime-accent transition-colors"
                  >
                    <div className="font-heading font-extrabold text-sm text-content">
                      {tool.name}
                    </div>
                    <div className="text-[10px] font-mono text-content-secondary truncate">
                      {tool.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
