'use client';

import { motion } from 'framer-motion';
import { useDashboardStore } from '@/store/dashboardStore';
import { ChevronLeft, Download, Calendar, Building } from 'lucide-react';

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

export default function ResumeView() {
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-green-950 via-green-900 to-green-950 overflow-auto p-4"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setCurrentPage('dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-green-800/80 hover:bg-green-700 text-white rounded-lg transition-colors backdrop-blur-sm border border-green-600/50"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <div className="max-w-4xl mx-auto pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            Resume
          </h2>
          <p className="text-white text-lg">My education, experience, and professional background</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Education */}
          <motion.section variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Building size={24} />
              Education
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Bangalore Technological Institute',
                  program: 'B.E. Computer Science',
                  period: '2023 - Present',
                  description: 'Pursuing a comprehensive undergraduate program focused on core computer science areas including data structures, algorithms, and software development.',
                },
                {
                  title: 'R.K. Mission School',
                  program: 'Intermediate - Science Stream',
                  period: '2021 - 2023',
                  description: 'Completed higher secondary education with strong emphasis on Physics, Chemistry, Mathematics, and Computer Science.',
                },
              ].map((edu, idx) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ translateY: -4 }}
                  className="relative bg-gradient-to-br from-green-800/40 to-green-900/40 border border-green-600/50 rounded-lg p-6 hover:border-green-400/80 transition-all backdrop-blur-sm group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:via-green-600/5 group-hover:to-green-600/0 rounded-lg transition-all duration-300" />
                  
                  <div className="relative space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                        {edu.title}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-white whitespace-nowrap">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-white font-medium">{edu.program}</p>
                    <p className="text-white leading-relaxed pt-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar size={24} />
              Experience
            </h3>
            <motion.div
              whileHover={{ translateY: -4 }}
              className="relative bg-gradient-to-br from-green-800/40 to-green-900/40 border border-green-600/50 rounded-lg p-6 hover:border-green-400/80 transition-all backdrop-blur-sm group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/0 to-green-600/0 group-hover:from-green-600/10 group-hover:via-green-600/5 group-hover:to-green-600/0 rounded-lg transition-all duration-300" />
              
              <div className="relative space-y-2">
                <h4 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                  Full Stack Development
                </h4>
                <p className="text-white font-medium">Open Source Contributor & Independent Projects</p>
                <p className="text-white leading-relaxed pt-2">
                  Building full-stack web applications with modern technologies including React, Node.js, 
                  TypeScript, and various databases. Actively contributing to open-source projects.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-green-500/50"
            >
              <Download size={20} />
              Download Resume (PDF)
            </motion.button>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-lg border border-green-600/30"
          >
            <p className="text-white text-center">
              Download my resume to see the complete list of skills, projects, and certifications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
