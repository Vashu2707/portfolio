'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'transform, opacity' }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-[#070b19]/95 via-[#0b1026]/95 to-[#0e1430]/95 overflow-auto flex items-center justify-center p-4 backdrop-blur-md"
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
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-cyan-950/50 hover:bg-cyan-900/80 text-cyan-200 rounded-lg transition-colors backdrop-blur-sm border border-cyan-500/30"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-[#0b1026]/75 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6 text-white"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center pb-6 border-b border-cyan-500/20">
            <h2 className="text-5xl font-bold text-white mb-2">
              Vashu Gupta
            </h2>
            <p className="text-lg text-cyan-200 font-medium">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full" />
              About Me
            </h3>
            <p className="text-gray-200 leading-relaxed">
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
                className="bg-cyan-950/20 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-950/30 transition-all duration-300"
              >
                <h4 className="text-sm font-semibold text-cyan-300 mb-1">{stat.label}</h4>
                <p className="text-white font-medium">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What I Do Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full" />
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
                  className="flex items-start gap-3 text-gray-200"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                    className="text-cyan-400 font-bold mt-1"
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
            className="pt-4 border-t border-cyan-500/20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
