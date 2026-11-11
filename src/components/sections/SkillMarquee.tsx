import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SKILLS_LIST = [
  'Web Testing',
  'Mobile (Android) Testing',
  'API Testing with Postman',
  'Fintech QA',
  'JIRA',
  'ClickUp',
  'Swagger',
  'Bug Reporting',
  'Regression Testing',
  'Cross-Device Validation',
  'Edge-Case Discovery',
];

export const SkillMarquee: React.FC = () => {
  return (
    <section aria-label="Skills & Tools Marquee" className="border-y border-divider bg-surface-secondary/40 py-6 overflow-hidden relative select-none">
      <div className="marquee-wrapper marquee-mask flex items-center">
        {/* Track 1 */}
        <div className="marquee-track">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={`t1-${index}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-surface-card border border-divider hover:border-lime-accent text-xs sm:text-sm font-mono font-semibold text-content whitespace-nowrap transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Cloned for continuous seamless loop) */}
        <div className="marquee-track" aria-hidden="true">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={`t2-${index}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-surface-card border border-divider hover:border-lime-accent text-xs sm:text-sm font-mono font-semibold text-content whitespace-nowrap transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
