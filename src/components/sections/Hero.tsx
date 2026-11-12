import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Smartphone, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { HeroProfileFrame } from './HeroProfileFrame';
import { TypingText } from '../ui/TypingText';

const headlineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const neverBadgeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 460,
      damping: 18,
      delay: 0.42,
    },
  },
};

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 qa-grid-bg overflow-hidden"
    >
      {/* ── 2. Subtle Animated Background (Glowing Gradient Orbs + Grid) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        {/* Soft Neon-Lime Orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 25, -20, 0],
                  y: [0, -35, 15, 0],
                  scale: [1, 1.12, 0.95, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-lime-accent/10 blur-[110px]"
        />

        {/* Soft Cyan/Emerald Orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -30, 20, 0],
                  y: [0, 25, -25, 0],
                  scale: [1, 1.15, 1, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -right-24 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        {/* Soft Blue Orb */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 20, -15, 0],
                  y: [0, 20, -20, 0],
                  scale: [0.95, 1.08, 0.95, 0.95],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-24 left-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-500/8 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headings, CTA & Trust Indicators */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* "AVAILABLE FOR WORK" badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-divider shadow-sm"
              >
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
              </motion.div>

              {/* 1. Cycling Typing Effect Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-divider shadow-sm"
              >
                <Terminal className="w-3.5 h-3.5 text-lime-accent" />
                <TypingText
                  words={['SQA Engineer', 'API Tester', 'Bug Hunter', 'Fintech QA Specialist']}
                  className="text-lime-accent font-bold text-[11px]"
                />
              </motion.div>
            </div>

            {/* Premium Animated Headline — Strictly 2 Lines */}
            <motion.h1
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-content tracking-[-1px] sm:tracking-[-2px] leading-[1.12]"
            >
              {/* Line 1 */}
              <span className="block whitespace-nowrap">
                {['I', 'break', 'apps', 'so', 'users'].map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block mr-[0.24em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              {/* Line 2 */}
              <span className="block whitespace-nowrap mt-1 sm:mt-2">
                <motion.span
                  variants={neverBadgeVariants}
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-block relative overflow-hidden bg-lime-accent text-dark-bg font-black px-3 sm:px-4 py-0.5 rounded-xl mr-2.5 sm:mr-3 shadow-sm align-baseline cursor-pointer neon-lime-pulse select-none transition-shadow"
                  title="Zero critical bugs escape to production!"
                >
                  <span className="relative z-10">never</span>
                  {/* Luminous Shimmer Light Sweep */}
                  <span
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-headline-shimmer"
                    aria-hidden="true"
                  />
                </motion.span>
                <motion.span variants={wordVariants} className="inline-block">
                  do.
                </motion.span>
              </span>
            </motion.h1>

            {/* Short intro line with [SQA Engineer] badge */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-content-secondary max-w-xl leading-relaxed"
            >
              Hi, I&apos;m <strong className="text-content font-bold">{personalInfo.name}</strong> &mdash;{' '}
              <span className="inline-block px-2 py-0.5 rounded-md font-mono font-bold text-xs sm:text-sm bg-lime-accent text-dark-bg shadow-sm mx-1 align-baseline">
                SQA Engineer
              </span>{' '}
              focused on web, Android, and API testing with Postman. I find edge cases, report high-impact bugs, and give release teams the confidence to ship with quality.
            </motion.p>

            {/* Two Action Buttons with subtle hover/tap scale */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
            >
              <motion.a
                href="#contact"
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-lime-accent text-dark-bg font-heading font-bold text-sm sm:text-base hover:brightness-105 transition-all shadow-sm cursor-pointer"
              >
                <span>Let&apos;s work together</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-card border border-divider hover:border-lime-accent text-content font-heading font-bold text-sm sm:text-base transition-colors cursor-pointer"
              >
                <span className="w-4 h-4 rounded bg-[#0077b5] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                  in
                </span>
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>

            {/* Micro QA Trust Row with dividers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-content-secondary"
            >
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
            </motion.div>
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
