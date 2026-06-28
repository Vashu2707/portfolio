export interface Skill {
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export const skills: Skill[] = [
 // Programming Languages
  { name: 'JavaScript', category: 'Programming Language', level: 'expert' },
  { name: 'TypeScript', category: 'Programming Language', level: 'advanced' },
  { name: 'Python', category: 'Programming Language', level: 'intermediate' },

  // Markup & Styling
  { name: 'HTML5', category: 'Markup', level: 'expert' },
  { name: 'CSS3', category: 'Styling', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'Styling', level: 'expert' },

  // Frontend Frameworks & Libraries
  { name: 'React.js', category: 'Frontend', level: 'expert' },
  { name: 'Next.js', category: 'Frontend', level: 'advanced' },
  { name: 'Framer Motion', category: 'Frontend', level: 'intermediate' },
  { name: 'GSAP', category: 'Frontend', level: 'intermediate' },
  { name: 'Three.js', category: 'Frontend', level: 'intermediate' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'advanced' },
  { name: 'Express.js', category: 'Backend', level: 'intermediate' },
  { name: 'Bun', category: 'Backend', level: 'intermediate' },

  // Databases
  { name: 'MongoDB', category: 'Database', level: 'advanced' },
  { name: 'MySQL', category: 'Database', level: 'advanced' },
  { name: 'Firebase', category: 'Database', level: 'intermediate' },

  // AI & LLM
  { name: 'OpenAI API', category: 'AI/LLM', level: 'advanced' },
  { name: 'Google Gemini API', category: 'AI/LLM', level: 'advanced' },
  { name: 'LangChain', category: 'AI/LLM', level: 'intermediate' },
  { name: 'RAG', category: 'AI/LLM', level: 'intermediate' },
  { name: 'Prompt Engineering', category: 'AI/LLM', level: 'advanced' },
  { name: 'Vector Databases', category: 'AI/LLM', level: 'intermediate' },

  // DevOps & Tools
  { name: 'Git', category: 'Tools', level: 'advanced' },
  { name: 'GitHub', category: 'Tools', level: 'advanced' },
  { name: 'Vercel', category: 'Tools', level: 'advanced' },
  { name: 'Postman', category: 'Tools', level: 'advanced' },
  { name: 'Docker', category: 'Tools', level: 'intermediate' },
];
