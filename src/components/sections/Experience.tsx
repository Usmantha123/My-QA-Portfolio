import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../../data/experience';
import { Reveal } from '../ui/Reveal';

interface WorkItem {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  isCurrent?: boolean;
  description: string;
  points: string[];
}

const WORK_EXPERIENCES: WorkItem[] = [
  {
    id: 'fyno',
    role: 'SQA Engineer',
    company: 'Fyno Technologies',
    dates: '1 July 2026 — Present',
    location: 'Islamabad, Pakistan',
    isCurrent: true,
    description: 'Manual and API testing of mobile applications with ad integration, ensuring zero regressions across Android device builds.',
    points: [
      'Testing mobile applications that carry integrated ads, validating rendering across diverse Android devices.',
      'Performing functional, regression, and API testing using Postman with a focus on fintech user flows.',
      'Logging and tracking defects in JIRA and ClickUp, collaborating with devs for rapid bug triage.',
    ],
  },
  {
    id: 'bitech',
    role: 'QA Engineer',
    company: 'Bitech Pvt Ltd',
    dates: 'From Apr 2026',
    location: 'Islamabad, Pakistan',
    isCurrent: false,
    description: 'End-to-end quality assurance across web and mobile platforms with rigorous API and UI/UX test cycles.',
    points: [
      'Quality assurance across web and mobile platforms with end-to-end test execution.',
      'API testing and validation using Postman and Swagger collections.',
      'Sprint planning, test case authoring, and defect lifecycle management in JIRA.',
    ],
  },
  {
    id: 'khastech',
    role: 'QA Engineer',
    company: 'Khastech Solutions',
    dates: 'Mar 2025 – Apr 2026',
    location: 'Islamabad, Pakistan',
    isCurrent: false,
    description: 'Conducted manual testing of web and mobile apps, Postman API validation, and JIRA defect management in Scrum sprints.',
    points: [
      'Performed manual testing of web and mobile apps for UI/UX, functionality, and regression.',
      'Conducted API testing with Postman; logged, tracked, and reported defects in JIRA.',
      'Collaborated closely with developers and product teams for timely defect resolution in Scrum sprints.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-divider text-xs font-mono font-semibold text-lime-accent">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-content tracking-[-2px]">
              Work Experience &amp; Education
            </h2>
            <p className="text-sm sm:text-base text-content-secondary max-w-xl">
              Hands-on QA engineering roles delivering reliable web, mobile, and API releases across fast-paced environments.
            </p>
          </div>
        </Reveal>

        {/* Experience Row Cards with Staggered Scroll Reveal & Lift */}
        <div className="space-y-4 sm:space-y-6">
          {WORK_EXPERIENCES.map((job, idx) => (
            <Reveal key={job.id} delay={0.12 * idx}>
              <div
                className={`qa-card p-6 sm:p-8 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${
                  job.isCurrent
                    ? 'border-lime-accent/50 bg-surface-card hover:border-lime-accent hover:shadow-[0_0_24px_rgba(184,244,0,0.12)]'
                    : 'hover:border-lime-accent/30'
                }`}
              >
                {/* Left Column: Dates & Current Tag */}
                <div className="lg:w-64 shrink-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-lime-accent" />
                    <span className="font-mono text-xs sm:text-sm font-bold text-content">
                      {job.dates}
                    </span>
                    {job.isCurrent && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-black bg-lime-accent text-dark-bg tracking-wide uppercase shadow-sm">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-content-secondary">
                    <MapPin className="w-3.5 h-3.5 text-content-muted" />
                    <span>{job.location}</span>
                  </div>
                </div>

                {/* Middle/Right Column: Role, Company, Description & Bullet points */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-content tracking-tight">
                      {job.role}
                    </h3>
                    <span className="text-sm sm:text-base font-semibold text-lime-accent font-mono">
                      &bull; {job.company}
                    </span>
                  </div>

                  <p className="text-sm text-content-secondary font-medium leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-content-secondary">
                    {job.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-lime-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education Card */}
        <Reveal delay={0.2}>
          <div className="pt-4">
            <div className="qa-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-lime-accent hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-lime-accent font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC BACKGROUND &bull; 2020 &mdash; 2024</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-content tracking-tight">
                  BS Software Engineering
                </h3>
                <p className="text-sm font-semibold text-content-secondary">
                  Islamia College Peshawar (Chartered University) &bull; Peshawar, Pakistan
                </p>
                <p className="text-xs text-content-secondary max-w-2xl leading-relaxed pt-1">
                  {education[0]?.description ||
                    'Comprehensive study of software testing fundamentals, Software Quality Assurance, SDLC/STLC methodologies, and database systems.'}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-secondary border border-divider text-xs font-mono font-semibold text-content">
                  <span>Graduated 2024</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
