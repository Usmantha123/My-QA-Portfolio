import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  Bug,
  Smartphone,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldAlert,
  FileCheck,
} from 'lucide-react';
import { featuredBug } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const LIFE_CYCLE_STEPS = [
  { name: 'New', active: false },
  { name: 'Assigned', active: false },
  { name: 'Open / In Review', active: true },
  { name: 'Fixed', active: false },
  { name: 'Retesting', active: false },
  { name: 'Closed', active: false },
];

export const BugShowcase: React.FC = () => {
  return (
    <section id="bug-showcase" className="py-20 relative bg-surface-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="DEEP DIVE"
          title="Quality Assurance in Action"
          subtitle="A live breakdown of a defect report demonstrating reproducibility, severity analysis, and defect lifecycle tracking."
        />

        {/* Bug Life Cycle Progress Bar */}
        <div className="mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary block text-center mb-3">
            Defect Life Cycle State
          </span>
          <div className="glass p-3 rounded-2xl border border-divider flex items-center justify-between gap-1 overflow-x-auto">
            {LIFE_CYCLE_STEPS.map((step, idx) => (
              <div key={idx} className="flex items-center gap-1 sm:gap-2 shrink-0">
                <div
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    step.active
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md shadow-rose-500/20'
                      : 'bg-surface-secondary text-content-secondary border border-divider/60'
                  }`}
                >
                  {step.active ? (
                    <AlertCircle className="w-3.5 h-3.5" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-content-secondary/40" />
                  )}
                  <span>{step.name}</span>
                </div>
                {idx < LIFE_CYCLE_STEPS.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-content-secondary shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Bug Card */}
        <div className="max-w-4xl mx-auto">
          <Card glow="purple" className="border-rose-500/20 space-y-6">
            {/* Bug Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-divider">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-rose-400">
                    {featuredBug.id}
                  </span>
                  <Badge variant="danger" size="sm">
                    {featuredBug.severity} Severity
                  </Badge>
                  <Badge variant="warning" size="sm">
                    {featuredBug.status}
                  </Badge>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-content">
                  {featuredBug.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <div className="px-3 py-1.5 rounded-xl bg-surface-secondary border border-divider text-xs text-content-secondary flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                  <span>Module: {featuredBug.module}</span>
                </div>
              </div>
            </div>

            {/* Steps to Reproduce */}
            <div>
              <h4 className="text-sm font-heading font-bold text-content mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" /> Steps to Reproduce:
              </h4>
              <div className="bg-surface-secondary/50 rounded-xl p-4 border border-divider/60">
                <ol className="space-y-2 text-sm text-content-secondary">
                  {featuredBug.stepsToReproduce.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Actual vs Expected Results Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <div className="flex items-center gap-2 mb-2 text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider">
                    Actual Result
                  </span>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {featuredBug.actualResult}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider">
                    Expected Result
                  </span>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {featuredBug.expectedResult}
                </p>
              </div>
            </div>

            {/* Evidence & Defect Metadata */}
            <div className="p-4 rounded-xl bg-surface-secondary/40 border border-divider flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-heading font-semibold text-content block">
                    QA Evidence Attached
                  </span>
                  <span className="text-xs text-content-secondary">
                    Logcat logs, screen recording &amp; device metadata captured
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-content-secondary font-mono bg-surface-card px-2.5 py-1 rounded-lg border border-divider/60">
                Reproducibility: 5/5 attempts (100%)
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

