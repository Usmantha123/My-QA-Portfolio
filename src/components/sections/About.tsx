import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Mail, Phone, Calendar, Shield, Award } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT ME"
          title="Quality-Driven QA Engineer"
          subtitle="Ensuring digital products meet the highest standards of reliability, performance, and user satisfaction."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-content flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                Passionate About Software Reliability
              </h3>
              {personalInfo.about.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-content-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </Card>

            {/* Quick Contact & Info Card */}
            <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-content-secondary block">Location</span>
                  <span className="text-sm font-semibold text-content">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-content-secondary block">Experience</span>
                  <span className="text-sm font-semibold text-content">{personalInfo.yearsOfExperience} Years Hands-on QA</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-content-secondary block">Direct Email</span>
                  <span className="text-sm font-semibold text-content truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-content-secondary block">Phone Contact</span>
                  <span className="text-sm font-semibold text-content">{personalInfo.phone}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Core QA Highlights & Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card glow="blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-bold text-content">Core QA Focus</h3>
                <Badge variant="primary">Specialization</Badge>
              </div>
              <ul className="space-y-3">
                {personalInfo.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-secondary/50 border border-divider/50 hover:border-blue-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-content">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* Mindset Card */}
            <Card glow="purple" className="border-l-4 border-l-purple-500">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-purple-400" />
                <h4 className="font-heading font-bold text-sm text-content">QA Mindset</h4>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                &ldquo;Testing is not just finding what doesn&apos;t work, but discovering ways to make what works even more resilient, intuitive, and delightful for end users.&rdquo;
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

