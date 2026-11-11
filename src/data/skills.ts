export interface Skill {
  name: string;
  status?: 'experienced' | 'learning';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

/*
 * Skills & expertise — grouped by category.
 * Mark tools as 'learning' if you are still building proficiency.
 * TODO: Review each tool's status and adjust accordingly.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Testing Skills',
    iconName: 'Search',
    skills: [
      { name: 'Manual Testing' },
      { name: 'Functional Testing' },
      { name: 'Regression Testing' },
      { name: 'Smoke Testing' },
      { name: 'Sanity Testing' },
      { name: 'UI/UX Testing' },
      { name: 'Exploratory Testing' },
      { name: 'Negative Testing' },
      { name: 'Compatibility Testing' },
      { name: 'Test Case Design' },
    ],
  },
  {
    title: 'Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'ClickUp' },
      { name: 'Jira' },
      { name: 'Postman' },
      { name: 'Android Studio' },
      { name: 'Firebase Crashlytics' },
      { name: 'Chrome DevTools' },
      { name: 'GitHub' },
      // TODO: Add status: 'learning' to tools you are currently learning.
    ],
  },
  {
    title: 'Knowledge Areas',
    iconName: 'BookOpen',
    skills: [
      { name: 'Agile / Scrum' },
      { name: 'SDLC' },
      { name: 'STLC' },
      { name: 'Bug Life Cycle' },
      { name: 'API Testing Fundamentals' },
      { name: 'Test Planning' },
      { name: 'Defect Management' },
    ],
  },
];

