'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { useDashboardStore } from '@/store/dashboardStore';
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
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 overflow-auto p-4"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setCurrentPage('dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-purple-800/80 hover:bg-purple-700 text-white rounded-lg transition-colors backdrop-blur-sm border border-purple-600/50"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <div className="max-w-5xl mx-auto pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-white text-lg">Showcase of my recent work and creative solutions</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10 group-hover:to-purple-600/0 rounded-lg transition-all duration-300" />
              
              <motion.div
                animate={{
                  y: hoveredId === project.id ? -4 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative bg-purple-800/40 rounded-lg p-6 border border-purple-600/50 hover:border-purple-400/80 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-white transition-colors">
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
                        className="p-2 bg-purple-700/50 hover:bg-purple-600 rounded-lg transition-colors"
                        title="GitHub"
                      >
                        <GitBranch size={18} className="text-white" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-purple-700/50 hover:bg-purple-600 rounded-lg transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-white mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white px-3 py-1 rounded-full font-medium"
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
          className="mt-12 p-6 bg-gradient-to-r from-purple-800/30 to-purple-900/30 rounded-lg border border-purple-600/30 text-center"
        >
          <p className="text-white">
            More projects coming soon! Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
