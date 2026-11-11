import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  CalendarCheck,
  FileEdit,
  PlayCircle,
  Bug,
  RefreshCw,
  Repeat,
  CheckCheck,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'Reviewing PRDs, user stories, and acceptance criteria to identify test scenarios and eliminate ambiguity early.',
    icon: FileSearch,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    number: '02',
    title: 'Test Planning',
    description:
      'Defining scope, strategy, test deliverables, resource allocation, and targeted device/browser matrices.',
    icon: CalendarCheck,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    number: '03',
    title: 'Test Case Design',
    description:
      'Designing positive, negative, and edge-case test cases with clear preconditions, steps, and expected results.',
    icon: FileEdit,
    color: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500/10',
  },
  {
    number: '04',
    title: 'Test Execution',
    description:
      'Executing test suites on real devices and emulators, capturing logs, network traffic, and UI irregularities.',
    icon: PlayCircle,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    number: '05',
    title: 'Bug Reporting',
    description:
      'Logging actionable defect reports in Jira/ClickUp with clear steps, screenshots, severity, and system logs.',
    icon: Bug,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    number: '06',
    title: 'Retesting',
    description:
      'Validating developer fixes on resolved defects to confirm proper resolution without introducing side effects.',
    icon: RefreshCw,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    number: '07',
    title: 'Regression Testing',
    description:
      'Running comprehensive regression suites to ensure existing functionality remains intact after code changes.',
    icon: Repeat,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    number: '08',
    title: 'QA Sign-Off',
    description:
      'Preparing QA summary reports, verifying release readiness criteria, and formally approving the build for production.',
    icon: CheckCheck,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
];

export const QaProcess: React.FC = () => {
  return (
    <section id="qa-process" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="METHODOLOGY"
          title="My QA Testing Process"
          subtitle="A disciplined, end-to-end testing workflow designed to catch defects early and deliver high-reliability software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col justify-between group hover:border-blue-500/40">
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center font-bold`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-extrabold text-2xl text-content-secondary/30 group-hover:text-blue-500/40 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="font-heading font-bold text-base text-content group-hover:text-blue-400 transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-divider/40 flex items-center justify-between text-[11px] text-content-secondary">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-emerald-400 font-medium">Standardised STLC</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

