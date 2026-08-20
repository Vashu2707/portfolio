export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Bun", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Redis", category: "Databases" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "GitHub Actions", category: "Cloud & DevOps" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "Cloudflare", category: "Tools" },
  { name: "Vim", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Linux", category: "Tools" },
];
