export interface Skill {
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Language', level: 'expert' },
  { name: 'TypeScript', category: 'Language', level: 'advanced' },
  { name: 'HTML5', category: 'Language', level: 'expert' },
  { name: 'CSS3', category: 'Language', level: 'advanced' },

  // Frontend
  { name: 'React.js', category: 'Frontend', level: 'expert' },
  { name: 'Next.js', category: 'Frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'expert' },
  { name: 'Framer Motion', category: 'Frontend', level: 'intermediate' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'advanced' },
  { name: 'Express.js', category: 'Backend', level: 'intermediate' },
  { name: 'Bun', category: 'Backend', level: 'intermediate' },

  // Databases
  { name: 'MongoDB', category: 'Database', level: 'advanced' },
  { name: 'MySQL', category: 'Database', level: 'advanced' },
  { name: 'Firebase', category: 'Database', level: 'intermediate' },

  // Tools & Others
  { name: 'Git', category: 'Tools', level: 'advanced' },
  { name: 'Three.js', category: 'Tools', level: 'intermediate' },
  { name: 'GSAP', category: 'Tools', level: 'intermediate' },
];
