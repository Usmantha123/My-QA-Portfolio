import React from 'react';
import { Globe, Smartphone, Server, Wallet, Building2, Layers, GraduationCap, Users } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    title: 'Web Testing',
    icon: Globe,
    description: 'Cross-browser functional testing, responsive layouts, regression validation, and UI/UX edge-case discovery.',
    tags: ['Cross-Browser', 'UI/UX', 'Regression'],
  },
  {
    num: '02',
    title: 'Mobile Testing',
    icon: Smartphone,
    description: 'Hands-on Android APK testing on real hardware, permission handling, ad-render verification, and app stability.',
    tags: ['Android', 'Real Devices', 'Ad Testing'],
  },
  {
    num: '03',
    title: 'API Testing',
    icon: Server,
    description: 'RESTful endpoint validation, Postman assertions, Swagger documentation checks, and payload verification.',
    tags: ['Postman', 'Swagger', 'Status Codes'],
  },
  {
    num: '04',
    title: 'Fintech QA',
    icon: Wallet,
    description: 'Rigorous verification of checkout flows, transaction edge-cases, payment gateway states, and data consistency.',
    tags: ['Payments', 'Transactions', 'Data Integrity'],
  },
];

const STATS = [
  {
    value: '3',
    label: 'Companies',
    sub: 'Fyno, Bitech, Khastech',
    icon: Building2,
  },
  {
    value: 'Web + Mobile',
    label: 'Platforms',
    sub: 'Android APKs & Web Apps',
    icon: Layers,
  },
  {
    value: 'BS SE',
    label: 'Education',
    sub: 'Islamia College Peshawar',
    icon: GraduationCap,
  },
  {
    value: '500+',
    label: 'Connections',
    sub: 'Active QA Network',
    icon: Users,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-divider text-xs font-mono font-semibold text-lime-accent">
            <span>CORE SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-content tracking-[-2px]">
            Quality Engineering Services
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-xl">
            Targeted manual testing, API validation, and defect management designed to keep software reliable from sprint to production.
          </p>
        </div>

        {/* 4 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                className="qa-card p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm font-bold text-lime-accent px-2.5 py-1 rounded bg-lime-accent/10 border border-lime-accent/20">
                      {srv.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-divider flex items-center justify-center text-content group-hover:text-lime-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-content tracking-tight">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-divider flex flex-wrap gap-2">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-secondary text-content-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="qa-card p-5 sm:p-6 text-center space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-divider mx-auto flex items-center justify-center text-lime-accent mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-content tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs font-bold text-lime-accent uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-content-secondary truncate">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

