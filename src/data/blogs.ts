export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Building a PlayStation 4 Dashboard in React & Next.js',
    excerpt: 'A technical deep-dive into recreating the classic PS4 system interface using React, Tailwind CSS, and Framer Motion for high-fidelity animations.',
    date: 'June 10, 2026',
    readTime: '6 min read',
    tags: ['React', 'Next.js', 'Framer Motion', 'UI/UX'],
    content: `Recreating an iconic user interface like the PlayStation 4 dashboard in a web browser is a fantastic exercise in motion design and state management. The key to capturing the premium console experience lies in the details: keyboard navigation, spatial sounds, and fluid transitions.

### 1. Spatial & Grid Layouts
The PS4 dashboard features a clean horizontal navigation menu where items expand and contract. In React, we can achieve this using simple CSS Grid and Flexbox layouts. To make it feel authentic:
- Selected items are scaled up (e.g., \`scale: 1.15\`).
- Non-selected items scale down and fade slightly (\`opacity: 0.7\`).
- Smooth transitions are handled dynamically to prevent layout jank.

### 2. Spring Physics for Console Responsiveness
Linear transitions feel lifeless and artificial. In this project, we leverage **Framer Motion's** spring animations to simulate the satisfying physical weight of the UI tiles:
\`\`\`javascript
<motion.div
  animate={{
    scale: isActive ? 1.15 : 0.9,
    opacity: isActive ? 1 : 0.7,
    y: isActive ? 0 : 20,
  }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
\`\`\`
This gives the navigation a responsive, bouncy feel that mirrors the hardware acceleration of the actual console dashboard.

### 3. Full Keyboard Control
No console interface is complete without gamepad or keyboard support. By listening to global \`keydown\` events, we map the left/right arrow keys to navigate the active tile indices, and the Enter or Space key to activate the view. This makes the portfolio feel like a fully functional console application.

Stay tuned for part two, where we will cover integrating Web Audio API to play spatial hover sounds!`
  },
  {
    id: '2',
    title: 'Why Next.js is the Standard for Modern Full-Stack Projects',
    excerpt: 'Exploring how server components, file-system routing, and built-in optimizations make Next.js the framework of choice for modern web applications.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Dev', 'Performance'],
    content: `Next.js has transitioned from a simple SSR library to a fully featured application framework. For full-stack developers, it provides an unparalleled developer experience and end-user performance out-of-the-box.

### Server Components by Default
By rendering components on the server, Next.js significantly reduces the JavaScript bundle size sent to the client. This means faster load times, better Core Web Vitals, and improved SEO ranking.

### Hybrid Rendering Strategies
Whether your page needs Static Site Generation (SSG), Server-Side Rendering (SSR), or Incremental Static Regeneration (ISR), Next.js handles it at a page-by-page level. You don't have to lock your entire application into one rendering paradigm.

### Built-in Optimization
Next.js automatically optimizes images, fonts, and scripts. The \`next/image\` component prevents Cumulative Layout Shift (CLS) by requiring dimensions and serving modern formats (like WebP) dynamically based on the requesting browser.`
  },
  {
    id: '3',
    title: 'Mastering Framer Motion: From Hover Effects to Page Transitions',
    excerpt: 'Learn the principles of creating smooth micro-interactions and route transitions that keep users engaged without compromising accessibility.',
    date: 'May 15, 2026',
    readTime: '4 min read',
    tags: ['Framer Motion', 'CSS', 'JavaScript', 'Design'],
    content: `Adding animation to a website is a double-edged sword. Done correctly, it guides the user's attention and makes interactions feel satisfying. Done poorly, it distracts, degrades performance, and causes motion sickness.

### The Goldilocks Zone of Duration
Animations should be quick enough to feel responsive, but slow enough to be noticed. The industry standard is:
- **Micro-interactions (hovers, clicks):** 100ms - 200ms
- **Page transitions:** 300ms - 500ms
- **Complex illustrative animations:** 500ms+

### Respecting User Preferences
Always check for user settings regarding motion. Many operating systems allow users to specify "Reduced Motion". We can respect this setting using framer-motion's \`useReducedMotion\` hook or by disabling animations when a global preference is set in the state.

\`\`\`javascript
const shouldReduceMotion = useReducedMotion();
const animate = shouldReduceMotion ? {} : { scale: 1.1 };
\`\`\`

By paying attention to performance and accessibility, we can create experiences that are both beautiful and inclusive.`
  }
];
