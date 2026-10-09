// ===================================================
// DATA: Skills & Abilities
// ===================================================

export const skillCategories = [
  {
    name: 'Backend',
    color: '#e5e5e5',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    skills: [
      { name: 'Go (Golang)', level: 'Advanced', pct: 85, icon: 'pi pi-code' },
      { name: 'Python', level: 'Advanced', pct: 85, icon: 'pi pi-code' },
      { name: 'Django', level: 'Advanced', pct: 85, icon: 'pi pi-server' },
      { name: 'FastAPI', level: 'Advanced', pct: 80, icon: 'pi pi-server' },
      { name: 'Node.js', level: 'Intermediate', pct: 75, icon: 'pi pi-server' },
    ],
  },
  {
    name: 'Database & Cloud',
    color: '#a3a3a3',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', pct: 85, icon: 'pi pi-database' },
      { name: 'Oracle OCI', level: 'Advanced', pct: 80, icon: 'pi pi-cloud' },
      { name: 'MySQL / SQL Server', level: 'Advanced', pct: 80, icon: 'pi pi-database' },
      { name: 'Prisma / GORM', level: 'Advanced', pct: 80, icon: 'pi pi-sitemap' },
    ],
  },
  {
    name: 'Frontend',
    color: '#d4d4d4',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: [
      { name: 'React.js', level: 'Intermediate', pct: 75, icon: 'pi pi-code' },
      { name: 'Next.js', level: 'Intermediate', pct: 75, icon: 'pi pi-forward' },
      { name: 'JavaScript', level: 'Advanced', pct: 85, icon: 'pi pi-code' },
      { name: 'HTML & CSS', level: 'Advanced', pct: 85, icon: 'pi pi-globe' },
    ],
  },
  {
    name: 'DevOps & AI',
    color: '#737373',
    icon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
    skills: [
      { name: 'n8n & LangChain', level: 'Advanced', pct: 85, icon: 'pi pi-sitemap' },
      { name: 'CI/CD (Jenkins, GitLab)', level: 'Advanced', pct: 80, icon: 'pi pi-server' },
      { name: 'Docker / Microservices', level: 'Advanced', pct: 80, icon: 'pi pi-box' },
      { name: 'Git & GitHub', level: 'Advanced', pct: 85, icon: 'pi pi-github' },
    ],
  },
]

// Bar chart data for top proficiencies
export const topSkills = [
  { name: 'Go / Python', pct: 85, color: '#e5e5e5', gradient: 'linear-gradient(90deg,#737373,#e5e5e5)' },
  { name: 'Django / FastAPI', pct: 85, color: '#d4d4d4', gradient: 'linear-gradient(90deg,#525252,#d4d4d4)' },
  { name: 'PostgreSQL / Database', pct: 85, color: '#a3a3a3', gradient: 'linear-gradient(90deg,#404040,#a3a3a3)' },
  { name: 'n8n / AI Automation', pct: 80, color: '#737373', gradient: 'linear-gradient(90deg,#262626,#737373)' },
  { name: 'CI/CD & DevOps', pct: 80, color: '#525252', gradient: 'linear-gradient(90deg,#171717,#525252)' },
]
