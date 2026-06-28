export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'PayNGo Retail',
    description:
      'Full-stack web application to manage student records, attendance, and grading using React, Node.js, MongoDB, and Tailwind CSS.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Vashu2707/PayNGo',
    github: 'https://github.com/Vashu2707/PayNGo',
  },
  {
    id: '2',
    title: 'Eduque',
    description:
      'Classic Othello/Reversi game using JavaScript and HTML Canvas with dynamic game logic and responsive UI.',
    technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
    link: 'https://eduque.vashu.in/',
    github: 'https://github.com/Vashu2707/Eduque',
  },
  {
    id: '3',
    title: 'Eventics',
    description:
      'Minimal task management app with React and local storage, featuring CRUD operations and real-time updates.',
    technologies: ['React', 'JavaScript', 'Local Storage'],
    link: 'https://eventics.vashu.in/',
    github: 'https://github.com/Vashu2707/Eventics',
  },
  {
    id: '4',
    title: 'Academic Management',
    description:
      'Interactive game with real-time score tracking, animations, and intuitive UI/UX.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://academic-management.vashu.in/',
    github: 'https://github.com/Vashu2707/Academic-Management',
  },
];
