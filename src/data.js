// ============================================================
// EDIT THIS FILE to personalize your portfolio.
// Everything shown on the site comes from here.
// ============================================================

export const profile = {
  name: 'Likhith Varma Kutchalapati',
  shortName: 'Likhith Varma K.',
  headline: 'B.Tech student building with Python, Java & the web',
  tagline: 'Looking for entry-level and internship roles in software development.',
  email: 'likhithvarma17@gmail.com',
  phone: '8555096240',
  // EDIT: paste your full profile URLs. While these are empty, the buttons show [PLACEHOLDER].
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-name'
  github: '',   // e.g. 'https://github.com/your-username'
  // EDIT: put your PDF in the /public folder and name it resume.pdf
  resumeFile: 'resume.pdf',
};

export const about = [
  "I'm a B.Tech student who wants to turn what I learn in class into practical skills. I enjoy solving problems and picking up new tools quickly.",
  "I'm looking for an entry-level role where I can contribute to a team, gain industry experience and keep growing.",
];

export const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'C'] },
  { title: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Core skills', items: ['Problem Solving', 'Communication', 'Teamwork', 'Active Learning'] },
];

// Most recent first
export const education = [
  { title: 'B.Tech', school: 'Satya Institute of Technology and Management', pills: ['2023–2027', 'GPA 6.9'] },
  { title: 'Intermediate', school: 'Narayana Junior College', pills: ['742 marks'] },
  { title: '10th (SSC)', school: 'Narayana English Medium School', pills: ['567 marks'] },
];

// EDIT: replace the placeholders with your real projects.
// For each real project: set placeholder to false and fill in title, description, tech, github and live.
// Delete any card you don't need.
export const projects = [
  {
    placeholder: true,
    title: '[PLACEHOLDER] Project title',
    description: '[PLACEHOLDER] One or two sentences: what the project does and the problem it solves.',
    tech: ['[PLACEHOLDER] Tech', '[PLACEHOLDER] Tech'],
    github: '', // full URL
    live: '',   // full URL
  },
  {
    placeholder: true,
    title: '[PLACEHOLDER] Project title',
    description: '[PLACEHOLDER] One or two sentences: what the project does and the problem it solves.',
    tech: ['[PLACEHOLDER] Tech', '[PLACEHOLDER] Tech'],
    github: '',
    live: '',
  },
  {
    placeholder: true,
    title: '[PLACEHOLDER] Project title',
    description: '[PLACEHOLDER] One or two sentences: what the project does and the problem it solves.',
    tech: ['[PLACEHOLDER] Tech', '[PLACEHOLDER] Tech'],
    github: '',
    live: '',
  },
];

export const strengths = [
  { icon: '⚡', label: 'Quick Learner' },
  { icon: '😊', label: 'Positive Attitude' },
  { icon: '🤝', label: 'Team Player' },
  { icon: '🔄', label: 'Adaptability' },
  { icon: '⏱️', label: 'Time Management' },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'contact', label: 'Contact' },
];
