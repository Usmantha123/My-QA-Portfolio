import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { experiences, education, certifications } from '../../data/experience';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-surface-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="BACKGROUND"
          title="Experience &amp; Education"
          subtitle="My professional career progression, academic background, and continuous QA learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-4 h-8">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-heading font-bold text-content leading-none">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <h4 className="font-heading font-bold text-lg text-content">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-blue-500 block">
                          {exp.company}
                        </span>
                      </div>
                      {exp.isCurrent && (
                        <Badge variant="primary" size="sm">
                          Current Role
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-content-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate === exp.endDate ? exp.startDate : `${exp.startDate} — ${exp.endDate}`}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-content-secondary pt-3 border-t border-divider">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4 h-8">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-heading font-bold text-content leading-none">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="p-6 space-y-3 border-l-4 border-l-purple-500">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-content-secondary flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.startYear} &mdash; {edu.endYear}
                      </span>
                      {edu.location && (
                        <span className="text-xs text-content-secondary flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-content">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-purple-400 mt-0.5">{edu.institution}</p>
                    </div>
                    {edu.description && (
                      <p className="text-xs text-content-secondary pt-2 border-t border-divider leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4 h-8">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-heading font-bold text-content leading-none">Certifications</h3>
              </div>

              {certifications.length > 0 ? (
                certifications.map((cert) => (
                  <Card key={cert.id} className="p-6 space-y-1">
                    <h4 className="font-heading font-bold text-sm text-content">{cert.title}</h4>
                    <p className="text-xs text-emerald-400">{cert.issuer} &bull; {cert.date}</p>
                  </Card>
                ))
              ) : (
                <Card className="p-6 text-center space-y-2 border-dashed">
                  <div className="w-10 h-10 rounded-full bg-surface-secondary text-content-secondary flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-content">
                    Certifications in Progress
                  </h4>
                  <p className="text-xs text-content-secondary max-w-xs mx-auto leading-relaxed">
                    Preparing for industry-standard QA certifications (ISTQB Foundation Level &amp; Postman API testing).
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
