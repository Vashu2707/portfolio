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
    id: '0',
    title: 'QRFast',
    description:
      'Full-stack web application for restaurant management, including menu display, order tracking, and payment processing using Next.js, Supabase and Razorpay.',
    technologies: ['Next.js', 'Node.js', 'Supabase', 'Tailwind CSS', 'Razorpay'],
    link: 'https://qrfast.vashu.in/',
    github: 'https://github.com/Vashu2707/qrfast',
  },
  {
    id: '1',
    title: 'PayNGo Retail',
    description:
      'A Computer Vision + Machine Learning application for retail shopping without need of human intervention and cart management.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Vashu2707/PayNGo',
    github: 'https://github.com/Vashu2707/PayNGo',
  },
  {
    id: '2',
    title: 'Eduque',
    description:
      'A full fledged application for schools and educational institutions to manage student records, attendance, and grading using Next.js, Node.js, MongoDB, and Tailwind CSS.',
    technologies: ['Next.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    link: 'https://eduque.vashu.in/',
    github: 'https://github.com/Vashu2707/Eduque',
  },
  {
    id: '3',
    title: 'Eventics',
    description:
      'A web application for event management, allowing users to create, manage, and track events with features like ticketing, scheduling, and attendee management.',
    technologies: ['Next.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    link: 'https://eventics.vashu.in/',
    github: 'https://github.com/Vashu2707/Eventics',
  },
  {
    id: '4',
    title: 'Academic Management',
    description:
      'A web application for managing attendance.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://academic-management.vashu.in/',
    github: 'https://github.com/Vashu2707/Academic-Management',
  },
];
