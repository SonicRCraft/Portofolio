// ===================================================
// DATA: Skills & Abilities
// ===================================================

export const skillCategories = [
  {
    name: 'Frontend',
    color: '#8b5cf6',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: [
      { name: 'Vue.js', level: 'Expert', pct: 95, icon: 'pi pi-code' },
      { name: 'React', level: 'Advanced', pct: 88, icon: 'pi pi-code' },
      { name: 'TypeScript', level: 'Advanced', pct: 85, icon: 'pi pi-file' },
      { name: 'HTML5 & CSS3', level: 'Expert', pct: 97, icon: 'pi pi-globe' },
      { name: 'Next.js', level: 'Advanced', pct: 82, icon: 'pi pi-forward' },
      { name: 'SCSS / Tailwind', level: 'Expert', pct: 92, icon: 'pi pi-palette' },
    ],
  },
  {
    name: 'Backend',
    color: '#06b6d4',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'Node.js', level: 'Advanced', pct: 84, icon: 'pi pi-server' },
      { name: 'Express.js', level: 'Advanced', pct: 82, icon: 'pi pi-send' },
      { name: 'Laravel / PHP', level: 'Intermediate', pct: 70, icon: 'pi pi-database' },
      { name: 'REST API', level: 'Expert', pct: 93, icon: 'pi pi-link' },
      { name: 'GraphQL', level: 'Intermediate', pct: 68, icon: 'pi pi-sitemap' },
      { name: 'Python', level: 'Intermediate', pct: 65, icon: 'pi pi-code' },
    ],
  },
  {
    name: 'Database',
    color: '#f59e0b',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'MySQL', level: 'Advanced', pct: 87, icon: 'pi pi-database' },
      { name: 'PostgreSQL', level: 'Advanced', pct: 84, icon: 'pi pi-database' },
      { name: 'MongoDB', level: 'Intermediate', pct: 72, icon: 'pi pi-database' },
      { name: 'Firebase', level: 'Advanced', pct: 85, icon: 'pi pi-cloud' },
      { name: 'Supabase', level: 'Intermediate', pct: 70, icon: 'pi pi-cloud' },
      { name: 'Redis', level: 'Beginner', pct: 50, icon: 'pi pi-server' },
    ],
  },
  {
    name: 'Tools',
    color: '#22c55e',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', pct: 95, icon: 'pi pi-github' },
      { name: 'Docker', level: 'Intermediate', pct: 68, icon: 'pi pi-box' },
      { name: 'Figma', level: 'Advanced', pct: 85, icon: 'pi pi-pencil' },
      { name: 'Linux CLI', level: 'Advanced', pct: 80, icon: 'pi pi-desktop' },
      { name: 'Vercel / Netlify', level: 'Advanced', pct: 88, icon: 'pi pi-cloud-upload' },
      { name: 'Jira / Notion', level: 'Advanced', pct: 86, icon: 'pi pi-list' },
    ],
  },
]

// Bar chart data for top proficiencies
export const topSkills = [
  { name: 'Vue.js / React', pct: 92, color: '#a78bfa', gradient: 'linear-gradient(90deg,#8b5cf6,#a78bfa)' },
  { name: 'TypeScript / JavaScript', pct: 88, color: '#38bdf8', gradient: 'linear-gradient(90deg,#06b6d4,#38bdf8)' },
  { name: 'CSS / UI Design', pct: 93, color: '#fbbf24', gradient: 'linear-gradient(90deg,#f59e0b,#fbbf24)' },
  { name: 'Node.js / Backend', pct: 80, color: '#4ade80', gradient: 'linear-gradient(90deg,#22c55e,#4ade80)' },
  { name: 'Database Design', pct: 82, color: '#f87171', gradient: 'linear-gradient(90deg,#ef4444,#f87171)' },
]
