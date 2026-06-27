'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

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
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/80 text-slate-100 rounded-lg transition-colors backdrop-blur-sm border border-slate-500/30"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <div className="max-w-4xl mx-auto pt-16 md:pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            Resume
          </h2>
          <p className="text-slate-300 text-lg">My education, experience, and professional background</p>
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
              <Building size={24} className="text-slate-300" />
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
                  className="relative bg-[#0b1026]/75 border border-slate-700/40 rounded-lg p-5 md:p-6 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent group-hover:from-white/10 rounded-lg transition-all duration-300" />
                  
                  <div className="relative space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-lg font-semibold text-white group-hover:text-slate-200 transition-colors">
                        {edu.title}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-slate-400 whitespace-nowrap">
                        <Calendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium">{edu.program}</p>
                    <p className="text-slate-400 leading-relaxed pt-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar size={24} className="text-slate-300" />
              Experience
            </h3>
            <motion.div
              whileHover={{ translateY: -4 }}
              className="relative bg-[#0b1026]/75 border border-slate-700/40 rounded-lg p-5 md:p-6 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent group-hover:from-white/10 rounded-lg transition-all duration-300" />
              
              <div className="relative space-y-2">
                <h4 className="text-lg font-semibold text-white group-hover:text-slate-200 transition-colors">
                  Full Stack Development
                </h4>
                <p className="text-slate-300 font-medium">Open Source Contributor & Independent Projects</p>
                <p className="text-slate-400 leading-relaxed pt-2">
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
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1GV032I_EkhV9HIG7mSVg2UoOlHR9y50y"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-slate-100 to-slate-300 hover:from-white hover:to-slate-200 !text-blue-950 font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-white/5"
            >
              <Download size={20} className="!text-blue-950" />
              Download Resume (PDF)
            </motion.a>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-[#0b1026]/75 rounded-lg border border-slate-800 text-center"
          >
            <p className="text-slate-400">
              Download my resume to see the complete list of skills, projects, and certifications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
