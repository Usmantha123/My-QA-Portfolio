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
  'Ad-Rendering Verification',
  'Edge-Case Discovery',
];

export const SkillMarquee: React.FC = () => {
  return (
    <div className="border-y border-divider bg-surface-secondary/40 py-4 overflow-hidden relative select-none">
      <div className="marquee-container flex items-center">
        {/* Set 1 */}
        <div className="marquee-content">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={`m1-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card border border-divider text-xs sm:text-sm font-mono font-semibold text-content whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Duplicate for continuous seamless loop) */}
        <div className="marquee-content" aria-hidden="true">
          {SKILLS_LIST.map((skill, index) => (
            <div
              key={`m2-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card border border-divider text-xs sm:text-sm font-mono font-semibold text-content whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
