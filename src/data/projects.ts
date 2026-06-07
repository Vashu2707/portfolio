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
    title: 'Academic Management System',
    description:
      'Full-stack web application to manage student records, attendance, and grading using React, Node.js, MongoDB, and Tailwind CSS.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: '#',
    github: 'https://github.com',
  },
  {
    id: '2',
    title: 'Othello Board Game',
    description:
      'Classic Othello/Reversi game using JavaScript and HTML Canvas with dynamic game logic and responsive UI.',
    technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
    link: '#',
    github: 'https://github.com',
  },
  {
    id: '3',
    title: 'Todo-List App',
    description:
      'Minimal task management app with React and local storage, featuring CRUD operations and real-time updates.',
    technologies: ['React', 'JavaScript', 'Local Storage'],
    link: '#',
    github: 'https://github.com',
  },
  {
    id: '4',
    title: 'Rock Paper Scissors',
    description:
      'Interactive game with real-time score tracking, animations, and intuitive UI/UX.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: 'https://github.com',
  },
  {
    id: '5',
    title: 'YouTube Clone',
    description:
      'YouTube clone with video search, playback, and channel view using React and YouTube Data API.',
    technologies: ['React', 'YouTube API', 'Tailwind CSS'],
    link: '#',
    github: 'https://github.com',
  },
];
