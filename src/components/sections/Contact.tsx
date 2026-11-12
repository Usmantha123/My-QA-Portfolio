import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Copy, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Reveal } from '../ui/Reveal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Big Lime Card with Scroll Reveal */}
        <Reveal delay={0.1}>
          <div className="rounded-[24px] bg-lime-accent text-dark-bg p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-[4px_4px_0px_0px_#24242b] sm:shadow-[8px_8px_0px_0px_#24242b] border border-lime-dim">
            {/* Subtle Background Accent Circle */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-black/5 pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-bg text-lime-accent text-xs font-mono font-bold tracking-wide uppercase shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>QA ENGINEER FOR HIRE</span>
              </div>

              {/* Big Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-[-2px] leading-[1.05] text-dark-bg">
                Got a build that needs testing?
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-dark-bg/85 font-medium leading-relaxed max-w-2xl">
                I&apos;m actively available for full-time SQA Engineer opportunities, contract testing, and quality assurance audits. Let&apos;s connect to ensure your next release is completely free of critical defects.
              </p>

              {/* Action Buttons with subtle hover/tap scale */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* Primary LinkedIn Button */}
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-dark-bg text-dark-text font-heading font-bold text-sm sm:text-base shadow-[4px_4px_0px_0px_#0a0a0c] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-lime-accent" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 opacity-75" />
                </motion.a>

                {/* Direct Mail Button */}
                <motion.a
                  href={`mailto:${personalInfo.email}?subject=QA%20Engineer%20Opportunity%20-%20Talha%20Usman`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-dark-bg/10 border border-dark-bg/25 text-dark-bg font-heading font-bold text-sm sm:text-base hover:bg-dark-bg/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </motion.a>

                {/* Copy Email Button */}
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-dark-bg/10 border border-dark-bg/25 text-dark-bg font-mono text-xs sm:text-sm font-semibold hover:bg-dark-bg/20 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span className="font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>talhausman605@gmail.com</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Details footer */}
              <div className="pt-6 border-t border-dark-bg/15 flex flex-wrap items-center gap-6 text-xs font-mono text-dark-bg/75">
                <span>Location: Islamabad, Pakistan</span>
                <span>&bull;</span>
                <span>Response time: &lt; 24 hours</span>
                <span>&bull;</span>
                <span>Platforms: Web &bull; Android &bull; APIs</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
