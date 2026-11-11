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
    role: 'SQA Engineer',
    company: 'Fyno Technologies',
    startDate: 'Present',
    endDate: 'Present',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Testing mobile applications that carry integrated ads, ensuring smooth rendering across Android devices.',
      'Performing functional, regression and API testing with Postman, with an emphasis on fintech transaction flows.',
      'Logging and tracking defects in JIRA and ClickUp, collaborating with devs for rapid bug triage.',
    ],
    isCurrent: true,
  },
  {
    id: 'exp-2',
    role: 'QA Engineer',
    company: 'Bitech Pvt Ltd',
    startDate: 'From Apr 2026',
    endDate: 'Upcoming',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Quality assurance across web and mobile platforms with end-to-end test execution.',
      'API testing and validation with Postman and Swagger.',
      'Sprint planning, test case authoring, and defect lifecycle management in JIRA.',
    ],
    isCurrent: false,
  },
  {
    id: 'exp-3',
    role: 'QA Engineer',
    company: 'Khastech Solutions',
    startDate: 'Mar 2025',
    endDate: 'Apr 2026',
    location: 'Islamabad, Pakistan',
    responsibilities: [
      'Performed manual testing of web and mobile apps for UI/UX, functionality, and regression.',
      'Conducted API testing with Postman; logged, tracked, and reported bugs in JIRA.',
      'Collaborated closely with developers and product teams for timely defect resolution in Scrum sprints.',
    ],
    isCurrent: false,
  },
];

export const education: EducationEntry[] = [
  {
    id: 'edu-1',
    degree: 'BS Software Engineering',
    institution: 'Islamia College Peshawar',
    startYear: '2020',
    endYear: '2024',
    location: 'Peshawar, Pakistan',
    description: 'Focused on Software Quality Assurance, SDLC/STLC methodologies, database management, and web architecture.',
  },
];

export const certifications: CertificationEntry[] = [];
