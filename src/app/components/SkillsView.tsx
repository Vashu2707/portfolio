'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
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

export default function SkillsView() {
  const router = useRouter();

  // Unified skill style
  const skillStyle = 'from-emerald-500/20 to-cyan-500/10 border border-emerald-400/50 text-emerald-100 shadow-md shadow-emerald-500/10';

  const getLevelLabel = (level: string) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

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
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2.5 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-100 rounded-lg transition-colors backdrop-blur-sm border border-emerald-500/20"
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
            Skills & Expertise
          </h2>
          <p className="text-slate-300 text-lg">A comprehensive collection of my technical capabilities</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="relative group/skill"
            >
              <div
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold bg-gradient-to-r ${skillStyle} transition-all cursor-default flex flex-col items-center gap-1`}
              >
                <span className="text-white">{skill.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400/70 font-bold">
                  {skill.category} <span className="md:hidden text-emerald-300">• {getLevelLabel(skill.level)}</span>
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none border border-slate-800 z-50 shadow-xl"
              >
                Proficiency: {getLevelLabel(skill.level)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
