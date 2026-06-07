'use client';

import { motion } from 'framer-motion';
import { useDashboardStore } from '@/store/dashboardStore';
import { ChevronLeft } from 'lucide-react';

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Profile() {
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-auto flex items-center justify-center p-4"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setCurrentPage('dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-blue-800/80 hover:bg-blue-700 text-white rounded-lg transition-colors backdrop-blur-sm border border-blue-600/50"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-blue-700/50 backdrop-blur-sm"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6 text-white"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center pb-6 border-b border-blue-700/30">
            <h2 className="text-5xl font-bold text-white mb-2">
              Vashu Gupta
            </h2>
            <p className="text-lg text-white font-medium">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              About Me
            </h3>
            <p className="text-white leading-relaxed">
              I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. 
              I love creating responsive, performant applications that solve real-world problems and provide 
              excellent user experiences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {[
              { label: 'Location', value: 'India' },
              { label: 'Experience', value: '1+ Years' },
              { label: 'Specialization', value: 'Web Development' },
              { label: 'Focus', value: 'Full Stack' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-lg p-4 border border-blue-600/30 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-sm font-semibold text-white mb-1">{stat.label}</h4>
                <p className="text-white font-medium">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What I Do Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              What I Do
            </h3>
            <ul className="space-y-3">
              {[
                'Build modern web applications with React and Next.js',
                'Design responsive interfaces using TailwindCSS',
                'Develop backend services with Node.js and databases',
                'Create interactive 3D experiences with Three.js',
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex items-start gap-3 text-white"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                    className="text-blue-400 font-bold mt-1"
                  >
                    ▸
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-t border-blue-700/30 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
