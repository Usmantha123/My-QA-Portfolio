import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  CheckCircle,
  AlertTriangle,
  FileText,
  X,
  ExternalLink,
  Layers,
  Wrench,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { projects, Project } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CASE STUDIES"
          title="Featured QA Projects"
          subtitle="Explore in-depth testing scenarios, bug investigations, test case design, and Android application validation."
        />

        {/* Illustrative Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-3.5 rounded-xl glass border border-blue-500/20 bg-blue-500/5 flex items-center gap-3 text-xs sm:text-sm text-content-secondary"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span>
            <strong>Illustrative QA Case Studies:</strong> The scenarios below reflect real-world Android testing methods, structured test cases, and reproducible defect reports.
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between group">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="primary" size="sm">
                      PROJECT 0{index + 1}
                    </Badge>
                    <span className="text-xs text-content-secondary flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-content group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Testing Scope Tags */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-content-secondary block mb-2">
                      Testing Scope
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.testingAreas.map((area, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-surface-secondary text-xs text-content font-medium border border-divider/60"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tools & Action */}
                <div className="pt-4 border-t border-divider/60 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Wrench className="w-3.5 h-3.5 text-content-secondary shrink-0" />
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-[11px] text-content-secondary">
                        {tool}{i < project.tools.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="outline"
                    size="sm"
                    icon={<ChevronRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    View Case Study
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-surface-card rounded-2xl border border-divider shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-divider">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="primary">{selectedProject.category}</Badge>
                    <span className="text-xs text-content-secondary">QA Case Study</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-content">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-xl text-content-secondary hover:text-content hover:bg-surface-secondary border border-divider transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 1. Overview */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> 1. Project Overview &amp; Objectives
                </h4>
                <p className="text-sm text-content-secondary leading-relaxed mb-3">
                  {selectedProject.caseStudy.overview}
                </p>
                <div className="bg-surface-secondary/40 rounded-xl p-3 border border-divider/50 space-y-1.5">
                  <span className="text-xs font-semibold text-content block">Key Testing Objectives:</span>
                  <ul className="space-y-1 text-xs text-content-secondary">
                    {selectedProject.caseStudy.objectives.map((obj, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Test Environment & Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-secondary/40 border border-divider/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-2 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" /> Test Environment
                  </span>
                  <ul className="space-y-1 text-xs text-content-secondary">
                    {selectedProject.caseStudy.testEnvironment.map((env, i) => (
                      <li key={i}>&bull; {env}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-surface-secondary/40 border border-divider/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Testing Approach
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {selectedProject.caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* 3. Sample Test Cases */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Sample Test Cases Designed
                </h4>
                <div className="space-y-3">
                  {selectedProject.caseStudy.sampleTestCases.map((tc) => (
                    <div
                      key={tc.id}
                      className="p-4 rounded-xl bg-surface-secondary/50 border border-divider space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-bold text-blue-400">{tc.id}</span>
                        <Badge variant="primary" size="sm">
                          Priority: {tc.priority}
                        </Badge>
                      </div>
                      <p className="font-semibold text-content text-sm">{tc.title}</p>
                      <p className="text-content-secondary">
                        <strong className="text-content">Preconditions:</strong> {tc.precondition}
                      </p>
                      <div>
                        <strong className="text-content block mb-1">Steps:</strong>
                        <ol className="list-decimal list-inside space-y-0.5 text-content-secondary">
                          {tc.steps.map((st, i) => (
                            <li key={i}>{st}</li>
                          ))}
                        </ol>
                      </div>
                      <p className="text-emerald-400/90 pt-1 border-t border-divider/50">
                        <strong>Expected Result:</strong> {tc.expectedResult}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Identified Bugs */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Discovered Defects &amp; Bug Reports
                </h4>
                <div className="space-y-3">
                  {selectedProject.caseStudy.identifiedBugs.map((bug) => (
                    <div
                      key={bug.id}
                      className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-rose-400">{bug.id}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="danger" size="sm">
                            {bug.severity} Severity
                          </Badge>
                          <Badge variant="default" size="sm">
                            {bug.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="font-semibold text-content text-sm">{bug.title}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-2.5 rounded-lg bg-surface-card border border-divider">
                          <span className="text-[10px] uppercase font-bold text-rose-400 block mb-1">
                            Actual Result
                          </span>
                          <p className="text-content-secondary">{bug.actualResult}</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-card border border-divider">
                          <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                            Expected Result
                          </span>
                          <p className="text-content-secondary">{bug.expectedResult}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Summary */}
              <div className="pt-4 border-t border-divider">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-content-secondary mb-1">
                  QA Summary &amp; Outcome
                </h4>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {selectedProject.caseStudy.summary}
                </p>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-2">
                <Button onClick={() => setSelectedProject(null)} variant="primary" size="md">
                  Close Case Study
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

