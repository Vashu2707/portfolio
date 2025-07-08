"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [unstacked, setUnstacked] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => setUnstacked(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const cardBase = "bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-12 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden flex-1 min-h-[180px] sm:min-h-[260px] cursor-pointer";

  // Overlay for blur effect
  const Overlay = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 backdrop-blur-lg bg-black/30"
      style={{ pointerEvents: 'auto' }}
      onClick={() => setOpenCard(null)}
    />
  );

  return (
    <main className="w-full max-w-2xl mx-auto py-8 px-2 sm:px-6 flex flex-col gap-6 sm:gap-10 min-h-[70vh] justify-center relative">
      {openCard !== null && <Overlay />}
      {/* Skills Section */}
      <motion.section
        initial={{ y: 0, zIndex: 40 }}
        animate={openCard === 0
          ? { scale: 1.15, zIndex: 50, x: 0, y: 0 }
          : unstacked
            ? { y: 0, zIndex: 10 }
            : { y: 0, zIndex: 40 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={cardBase + (openCard === 0 ? ' ring-4 ring-primary' : '')}
        style={{ minHeight: '180px', position: 'relative', zIndex: openCard === 0 ? 50 : undefined }}
        onClick={() => setOpenCard(openCard === 0 ? null : 0)}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-2 text-primary">Skills</h2>
        {openCard === 0 && (
          <div className="mb-4 text-gray-600 dark:text-gray-300 text-base space-y-2">
            <div><span className="font-semibold">JavaScript/TypeScript</span> – Proficient in writing clean, modular code for web applications using both dynamic and strongly typed scripting languages.</div>
            <div><span className="font-semibold">Next.js/React.js</span> – Experienced in building performant, SEO-friendly, and scalable front-end applications using modern React frameworks.</div>
            <div><span className="font-semibold">Node.js/Bun</span> – Skilled in developing fast and efficient backend services and APIs with JavaScript runtime environments.</div>
            <div><span className="font-semibold">Tailwind CSS</span> – Adept at creating responsive, utility-first UI designs with minimal custom CSS using Tailwind.</div>
            <div><span className="font-semibold">MongoDB</span> – Hands-on experience with NoSQL databases for building scalable, document-based data models.</div>
            <div><span className="font-semibold">MySQL</span> – Knowledgeable in designing and managing relational databases using SQL queries and schema optimization.</div>
            <div><span className="font-semibold">HTML</span> – Strong foundation in semantic HTML5 for building structured and accessible web content.</div>
            <div><span className="font-semibold">CSS</span> – Capable of styling and animating responsive web interfaces with modern CSS techniques.</div>
          </div>
        )}
        <ul className="flex flex-wrap gap-3 text-gray-700 dark:text-gray-200 items-center">
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><path d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16z" fill="#F7DF1E"/><path d="M21.5 23.5c-1.1 0-2.1-.6-2.5-1.5l1.7-1c.2.4.6.8 1.2.8.6 0 1-.3 1-.8 0-.5-.4-.7-1.2-1l-.4-.2c-1.2-.5-2-1.1-2-2.4 0-1.2 1-2.1 2.4-2.1 1 0 1.7.3 2.2 1.2l-1.6 1c-.2-.4-.5-.6-.9-.6-.4 0-.7.2-.7.6 0 .4.2.6.9.9l.4.2c1.4.6 2.2 1.2 2.2 2.5 0 1.4-1.1 2.2-2.6 2.2zm-7.2-.2c-.2.4-.4.8-.9.8-.5 0-.8-.2-1-.8l-2.2-8.2h2.2l1.2 5.2 1.2-5.2h2.2l-2.2 8.2z" fill="#000"/></svg>
            JavaScript / TypeScript
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#61DAFB"/><path d="M16 22c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" fill="#fff"/><path d="M16 6c-2.2 0-4.2.7-5.7 1.8C8.2 9.2 7.5 10.5 7.5 12c0 1.5.7 2.8 2.8 4.2C12.8 17.3 14.8 18 16 18s3.2-.7 5.7-1.8C23.8 14.8 24.5 13.5 24.5 12c0-1.5-.7-2.8-2.8-4.2C20.2 6.7 18.2 6 16 6z" fill="#222"/></svg>
            React.js / Next.js
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#43853D"/><path d="M16 6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#fff"/><path d="M20 18.5c-.6 0-1.1-.2-1.5-.6l1-1.2c.2.2.5.3.8.3.4 0 .7-.2.7-.6 0-.3-.2-.5-.7-.7l-.2-.1c-.7-.3-1.2-.6-1.2-1.3 0-.7.6-1.2 1.5-1.2.6 0 1.1.2 1.4.7l-1 .9c-.1-.2-.3-.3-.5-.3-.3 0-.5.1-.5.3 0 .2.1.3.5.5l.2.1c.8.3 1.3.6 1.3 1.4 0 .8-.7 1.3-1.6 1.3zm-5.2-.1c-.1.3-.3.5-.7.5-.4 0-.6-.2-.7-.5l-1.5-5.5h1.5l.8 3.5.8-3.5h1.5l-1.5 5.5z" fill="#fff"/></svg>
            Node.js / Bun
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#38BDF8"/><path d="M16 8l-8 4.5v7l8 4.5 8-4.5v-7L16 8zm0 2.2l6 3.3-6 3.3-6-3.3 6-3.3zm-6 5.1l6 3.3v6.6l-6-3.3v-6.6zm8 9.9v-6.6l6-3.3v6.6l-6 3.3z" fill="#fff"/></svg>
            Tailwind CSS
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#47A248"/><path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.7c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z" fill="#fff"/><path d="M20.5 17.5c-.5 0-.9-.2-1.2-.5l.8-.9c.1.1.3.2.4.2.2 0 .3-.1.3-.2 0-.1-.1-.2-.3-.3l-.1-.1c-.4-.2-.7-.4-.7-.8 0-.4.3-.7.8-.7.3 0 .6.1.7.4l-.7.6c-.1-.1-.2-.1-.3-.1-.1 0-.2.1-.2.1 0 .1.1.1.3.2l.1.1c.5.2.8.4.8.9 0 .5-.4.8-.9.8zm-3.2-.1c-.1.2-.2.3-.5.3-.3 0-.4-.1-.5-.3l-1-3.7h1l.5 2.3.5-2.3h1l-1 3.7z" fill="#fff"/></svg>
            MongoDB
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#00758F"/><path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.7c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z" fill="#fff"/><path d="M20.5 17.5c-.5 0-.9-.2-1.2-.5l.8-.9c.1.1.3.2.4.2.2 0 .3-.1.3-.2 0-.1-.1-.2-.3-.3l-.1-.1c-.4-.2-.7-.4-.7-.8 0-.4.3-.7.8-.7.3 0 .6.1.7.4l-.7.6c-.1-.1-.2-.1-.3-.1-.1 0-.2.1-.2.1 0 .1.1.1.3.2l.1.1c.5.2.8.4.8.9 0 .5-.4.8-.9.8zm-3.2-.1c-.1.2-.2.3-.5.3-.3 0-.4-.1-.5-.3l-1-3.7h1l.5 2.3.5-2.3h1l-1 3.7z" fill="#fff"/></svg>
            MySQL
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#E44D26"/><path d="M16 8l-8 1.5 1.5 13 6.5 1.5 6.5-1.5L24 9.5 16 8zm0 13.2l-5.2-1.2-.4-4.2h2.1l.2 2.2 3.3.7 3.3-.7.2-2.2h2.1l-.4 4.2-5.2 1.2zm5.2-6.2h-10.4l-.2-2.2h10.8l-.2 2.2z" fill="#fff"/></svg>
            HTML
          </li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#1572B6"/><path d="M16 8l-8 1.5 1.5 13 6.5 1.5 6.5-1.5L24 9.5 16 8zm0 13.2l-5.2-1.2-.4-4.2h2.1l.2 2.2 3.3.7 3.3-.7.2-2.2h2.1l-.4 4.2-5.2 1.2zm5.2-6.2h-10.4l-.2-2.2h10.8l-.2 2.2z" fill="#fff"/></svg>
            CSS
          </li>
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ y: 0, zIndex: 30 }}
        animate={openCard === 1
          ? { scale: 1.15, zIndex: 50, x: 0, y: 0 }
          : unstacked
            ? { y: 0, zIndex: 10 }
            : { y: -180, zIndex: 30 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={cardBase + (openCard === 1 ? ' ring-4 ring-secondary' : '')}
        style={{ minHeight: '180px', position: 'relative', zIndex: openCard === 1 ? 50 : undefined }}
        onClick={() => setOpenCard(openCard === 1 ? null : 1)}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-2 text-secondary">Projects</h2>
        {openCard === 1 && (
          <div className="mb-4 text-gray-600 dark:text-gray-300 text-base space-y-3">
            <div>
              <span className="font-semibold">Academic Management System</span><br />
              Built a full-stack web application to manage student records, attendance, and grading using React, Node.js, MongoDB, and Tailwind CSS, with role-based access for admin, teachers, and students.
            </div>
            <div>
              <span className="font-semibold">Othello Board Game</span><br />
              Developed a classic Othello/Reversi game using JavaScript and HTML Canvas with dynamic game logic, move validation, and a responsive UI for two-player mode.
            </div>
            <div>
              <span className="font-semibold">Todo-List</span><br />
              Created a minimal and efficient task management app with React and local storage, featuring CRUD operations, real-time updates, and responsive design.
            </div>
            <div>
              <span className="font-semibold">Rock Paper Scissors</span><br />
              Implemented an interactive game using HTML, CSS, and JavaScript with real-time score tracking, animations, and intuitive UI/UX.
            </div>
            <div>
              <span className="font-semibold">YouTube Clone</span><br />
              Cloned the core features of YouTube using React and the YouTube Data API, including video search, playback, channel view, and responsive layout.
            </div>
          </div>
        )}
        {openCard !== 1 && (
          <ul className="space-y-2 text-gray-700 dark:text-gray-200">
            <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors font-semibold">Academic Management System</li>
            <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Othello Board Game</li>
            <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Todo-List</li>
            <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Rock Paper Scissors</li>
            <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">YouTube Clone</li>
          </ul>
        )}
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ y: 0, zIndex: 20 }}
        animate={openCard === 2
          ? { scale: 1.15, zIndex: 50, x: 0, y: 0 }
          : unstacked
            ? { y: 0, zIndex: 10 }
            : { y: -360, zIndex: 20 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={cardBase + (openCard === 2 ? ' ring-4 ring-accent' : '')}
        style={{ minHeight: '180px', position: 'relative', zIndex: openCard === 2 ? 50 : undefined }}
        onClick={() => setOpenCard(openCard === 2 ? null : 2)}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-2 text-accent">Education</h2>
        {openCard === 2 && (
          <div className="mb-4 text-gray-600 dark:text-gray-300 text-base space-y-4">
            <div>
              <div className="font-bold text-lg">Bangalore Technological Institute</div>
              <div>Bachelor of Engineering in Computer Science</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">2023 – Present</div>
              <div className="mt-1">Currently pursuing a comprehensive undergraduate program focused on core areas of computer science including data structures, algorithms, and software development. Actively participating in technical clubs and coding competitions to enhance practical knowledge and team collaboration skills.</div>
            </div>
            <div>
              <div className="font-bold text-lg">R.K. Mission School</div>
              <div>Intermediate (Science Stream)</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">2021 – 2023</div>
              <div className="mt-1">Completed higher secondary education with a strong emphasis on Physics, Chemistry, Mathematics, and Computer Science. Developed foundational problem-solving and analytical skills, and participated in science fairs and academic seminars.</div>
            </div>
            <div>
              <div className="font-bold text-lg">Holy Cross School</div>
              <div>High School</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">2019 – 2021</div>
              <div className="mt-1">Gained a solid grounding in core subjects including Mathematics, Science, and English. Excelled in academic performance and participated in various school-level competitions and co-curricular activities.</div>
            </div>
          </div>
        )}
        {openCard !== 2 && (
          <ul className="space-y-2 text-gray-700 dark:text-gray-200">
            <li className="border-l-4 border-accent pl-3 hover:bg-accent/10 rounded transition-colors font-semibold">Bangalore Technological Institute</li>
            <li className="border-l-4 border-accent pl-3 hover:bg-accent/10 rounded transition-colors">R.K. Mission School</li>
            <li className="border-l-4 border-accent pl-3 hover:bg-accent/10 rounded transition-colors">Holy Cross School</li>
          </ul>
        )}
      </motion.section>

      {/* Socials Section */}
      <motion.section
        initial={{ y: 0, zIndex: 10 }}
        animate={openCard === 3
          ? { scale: 1.15, zIndex: 50, x: 0, y: 0 }
          : unstacked
            ? { y: 0, zIndex: 10 }
            : { y: -540, zIndex: 10 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={cardBase + (openCard === 3 ? ' ring-4 ring-primary' : '')}
        style={{ minHeight: '180px', position: 'relative', zIndex: openCard === 3 ? 50 : undefined }}
        onClick={() => setOpenCard(openCard === 3 ? null : 3)}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-2 text-primary">Socials</h2>
        {openCard === 3 && (
          <p className="mb-4 text-gray-600 dark:text-gray-300 text-base">Connect with me on these platforms to see more of my work or get in touch.</p>
        )}
        <ul className="flex flex-row gap-6 text-gray-700 dark:text-gray-200 items-center justify-center">
          <li>
            <a href="https://github.com/Vashu2707" className="inline-flex items-center gap-3 font-semibold hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-gray-800 dark:text-gray-100"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vashu-gupta-3779762a7/" className="inline-flex items-center gap-3 font-semibold hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700 dark:text-blue-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </li>
        </ul>
      </motion.section>
    </main>
  );
}
