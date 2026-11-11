/*
 * ─── Experience & Education ───
 * Extracted directly from your CV
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  location?: string;
  description?: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-1',
    role: 'QA Engineer',
    company: 'Fyno Technologies',
    startDate: 'Present',
    endDate: 'Present',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Test web and mobile applications for functionality, usability and cross-device compatibility.',
      'Perform functional, regression and API testing using Postman, with a focus on FinTech application flows.',
      'Test ad-related features and verify them across devices and environments.',
      'Log and track bugs in Jira and ClickUp, and work with developers to get them resolved quickly.',
    ],
    isCurrent: true,
  },
  {
    id: 'exp-2',
    role: 'QA Engineer',
    company: 'Khastech Solutions',
    startDate: 'Mar 2025',
    endDate: 'Apr 2026',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Performed manual testing of web and mobile apps for UI/UX and functionality issues.',
      'Conducted API testing with Postman; tracked and reported bugs in Jira.',
      'Collaborated with developers and product teams for timely defect resolution.',
      'Participated in Scrum meetings and sprint planning.',
    ],
    isCurrent: false,
  },
];

export const education: EducationEntry[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Islamia College Peshawar (Chartered University)',
    startYear: '2020',
    endYear: '2024',
    location: 'Peshawar, Pakistan',
    description: 'Focused on Software Engineering fundamentals, Software Quality Assurance, SDLC/STLC methodologies, and database systems.',
  },
];

export const certifications: CertificationEntry[] = [];
