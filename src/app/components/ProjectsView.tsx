'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ExternalLink, GitBranch } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ProjectsView() {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'transform, opacity' }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-[#070b19]/95 via-[#0b1026]/95 to-[#0e1430]/95 overflow-y-auto p-4 py-16 md:py-8 backdrop-blur-md"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-fuchsia-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-fuchsia-950/50 hover:bg-fuchsia-900/80 text-fuchsia-200 rounded-lg transition-colors backdrop-blur-sm border border-fuchsia-500/30"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <div className="max-w-5xl mx-auto pt-16 md:pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-fuchsia-200 text-lg">Showcase of my recent work and creative solutions</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 via-fuchsia-600/5 to-fuchsia-600/0 group-hover:from-fuchsia-600/20 group-hover:via-fuchsia-600/10 group-hover:to-fuchsia-600/0 rounded-lg transition-all duration-300" />
              
              <motion.div
                animate={{
                  y: hoveredId === project.id ? -4 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative bg-[#0b1026]/75 rounded-lg p-5 md:p-6 border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-fuchsia-950/40 hover:bg-fuchsia-900/80 border border-fuchsia-500/25 rounded-lg transition-colors"
                        title="GitHub"
                      >
                        <GitBranch size={18} className="text-fuchsia-200" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-fuchsia-950/40 hover:bg-fuchsia-900/80 border border-fuchsia-500/25 rounded-lg transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} className="text-fuchsia-200" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-gradient-to-r from-fuchsia-500/80 to-purple-500/80 hover:from-fuchsia-400 hover:to-purple-400 border border-fuchsia-400/30 text-white px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-[#0b1026]/75 rounded-lg border border-fuchsia-500/20 text-center"
        >
          <p className="text-fuchsia-200">
            More projects coming soon! Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
