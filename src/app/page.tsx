"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [unstacked, setUnstacked] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setUnstacked(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const cardBase = "bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-12 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden flex-1 min-h-[180px] sm:min-h-[260px]";

  return (
    <main className="w-full max-w-2xl mx-auto py-8 px-2 sm:px-6 flex flex-col gap-6 sm:gap-10 min-h-[70vh] justify-center">
      {/* Skills Section */}
      <motion.section
        initial={{ y: 0, zIndex: 40 }}
        animate={unstacked ? { y: 0, zIndex: 10 } : { y: 0, zIndex: 40 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cardBase}
        style={{ minHeight: '180px', position: 'relative' }}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-4 text-primary">Skills</h2>
        <ul className="flex flex-wrap gap-3 text-gray-700">
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">JavaScript / TypeScript</li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">React / Next.js</li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">Node.js</li>
          <li className="bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">Tailwind CSS</li>
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ y: 0, zIndex: 30 }}
        animate={unstacked ? { y: 0, zIndex: 10 } : { y: -180, zIndex: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={cardBase}
        style={{ minHeight: '180px', position: 'relative' }}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-4 text-secondary">Projects</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Portfolio Website</li>
          <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Todo App</li>
          <li className="border-l-4 border-secondary pl-3 hover:bg-secondary/10 rounded transition-colors">Blog Platform</li>
        </ul>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ y: 0, zIndex: 20 }}
        animate={unstacked ? { y: 0, zIndex: 10 } : { y: -360, zIndex: 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={cardBase}
        style={{ minHeight: '180px', position: 'relative' }}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-4 text-accent">Education</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="border-l-4 border-accent pl-3 hover:bg-accent/10 rounded transition-colors">Bachelor of Technology, Computer Science</li>
          <li className="border-l-4 border-accent pl-3 hover:bg-accent/10 rounded transition-colors">XYZ University</li>
        </ul>
      </motion.section>

      {/* Socials Section */}
      <motion.section
        initial={{ y: 0, zIndex: 10 }}
        animate={unstacked ? { y: 0, zIndex: 10 } : { y: -540, zIndex: 10 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className={cardBase}
        style={{ minHeight: '180px', position: 'relative' }}
      >
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-2xl font-extrabold mb-4 text-primary">Socials</h2>
        <ul className="flex flex-col gap-2 text-gray-700">
          <li><a href="https://github.com/vashugupta112" className="inline-flex items-center gap-2 underline text-blue-600 font-semibold hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">GitHub<span className="i-mdi-github" /></a></li>
          <li><a href="https://linkedin.com/in/vashugupta112" className="inline-flex items-center gap-2 underline text-blue-600 font-semibold hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn<span className="i-mdi-linkedin" /></a></li>
        </ul>
      </motion.section>
    </main>
  );
}
