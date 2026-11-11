import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileDown,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  Bug,
  Smartphone,
  CheckCircle,
  FileText,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  // Profile image is set permanently via personalInfo.photoUrl (public/profile.jpg)
  const profileImage = personalInfo.photoUrl || '';

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.animatedTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden hero-grid"
    >
      {/* Floating QA Badges (Desktop) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex items-center gap-3 absolute top-36 left-12 xl:left-24 bg-surface-card px-4 py-2.5 rounded-2xl border border-divider shadow-lg shadow-black/5"
      >
        <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <Bug className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-heading font-bold text-content block">Defect Hunter</span>
          <span className="text-[11px] font-medium text-content-secondary">Manual &amp; Regression</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex items-center gap-3 absolute bottom-32 left-16 xl:left-32 bg-surface-card px-4 py-2.5 rounded-2xl border border-divider shadow-lg shadow-black/5"
      >
        <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-heading font-bold text-content block">Android Testing</span>
          <span className="text-[11px] font-medium text-content-secondary">Real Device &amp; Emulators</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden lg:flex items-center gap-3 absolute top-44 right-12 xl:right-24 bg-surface-card px-4 py-2.5 rounded-2xl border border-divider shadow-lg shadow-black/5"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-heading font-bold text-content block">QA Sign-Off</span>
          <span className="text-[11px] font-medium text-content-secondary">Zero Critical Bugs</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden lg:flex items-center gap-3 absolute bottom-28 right-16 xl:right-32 bg-surface-card px-4 py-2.5 rounded-2xl border border-divider shadow-lg shadow-black/5"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-heading font-bold text-content block">Structured Test Cases</span>
          <span className="text-[11px] font-medium text-content-secondary">100% Traceability</span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="bg-surface-card px-4 py-1.5 rounded-full border border-divider shadow-sm flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-content-secondary">
              Available for Opportunities &bull; {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Profile Avatar — Static Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 relative w-28 h-28 sm:w-32 sm:h-32"
        >
          {/* Profile Circle */}
          <div className="relative w-full h-full rounded-full bg-surface-card p-1 border-2 border-divider flex items-center justify-center overflow-hidden shadow-lg">
            {profileImage ? (
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center font-heading font-bold text-3xl text-white shadow-inner">
                TU
              </div>
            )}
          </div>

          {/* Verification Badge */}
          <div className="absolute -bottom-1 -right-1 bg-surface-card p-1.5 rounded-full border border-divider shadow-md">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
          </div>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-content"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Animated Professional Title */}
        <div className="h-10 sm:h-12 my-3 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xl sm:text-2xl font-heading font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              {personalInfo.animatedTitles[titleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Supporting Headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-heading font-semibold text-content max-w-2xl mx-auto"
        >
          {personalInfo.headline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-sm sm:text-base text-content-secondary max-w-xl mx-auto leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View My Work
          </Button>
          <Button
            href={personalInfo.resumeUrl}
            target="_blank"
            size="lg"
            variant="secondary"
            icon={<FileDown className="w-4 h-4" />}
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4 text-content-secondary"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-surface-card border border-divider hover:text-blue-600 hover:border-blue-500/40 shadow-sm transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-surface-card border border-divider hover:text-content hover:border-divider shadow-sm transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Me"
            className="p-2.5 rounded-xl bg-surface-card border border-divider hover:text-purple-600 hover:border-purple-500/40 shadow-sm transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-content-secondary hover:text-content transition-colors animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
