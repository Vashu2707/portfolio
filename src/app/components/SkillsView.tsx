'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/data/skills';
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

export default function SkillsView() {
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/50';
      case 'advanced':
        return 'from-yellow-600 to-yellow-700';
      case 'intermediate':
        return 'from-yellow-700 to-yellow-800/70';
      default:
        return 'from-yellow-800 to-yellow-900/50';
    }
  };

  const getLevelLabel = (level: string) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-yellow-950 via-yellow-900 to-yellow-950 overflow-auto p-4"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setCurrentPage('dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-yellow-800/80 hover:bg-yellow-700 text-white rounded-lg transition-colors backdrop-blur-sm border border-yellow-600/50"
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
            Skills & Expertise
          </h2>
          <p className="text-white text-lg">My technical expertise organized by proficiency level</p>
        </motion.div>

        {/* Level Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 flex flex-wrap gap-2 justify-center"
        >
          <motion.button
            onClick={() => setSelectedLevel(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedLevel === null
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                : 'bg-yellow-800/50 text-white hover:bg-yellow-800'
            }`}
          >
            All Skills
          </motion.button>
          {['expert', 'advanced', 'intermediate', 'beginner'].map((level) => (
            <motion.button
              key={level}
              onClick={() => setSelectedLevel(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all capitalize ${
                selectedLevel === level
                  ? `bg-gradient-to-r ${getLevelColor(level)} text-white`
                  : 'bg-yellow-800/50 text-white hover:bg-yellow-800'
              }`}
            >
              {getLevelLabel(level)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const filteredSkills = selectedLevel
              ? categorySkills.filter((s) => s.level === selectedLevel)
              : categorySkills;

            if (filteredSkills.length === 0) return null;

            return (
              <motion.div key={category} variants={itemVariants} className="group">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
                >
                  <span className="inline-block w-1 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
                  {category}
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`relative group/skill`}
                    >
                      <div
                        className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white transition-all cursor-default shadow-md`}
                      >
                        {skill.name}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                      >
                        {getLevelLabel(skill.level)}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Expert Skills', value: skills.filter((s) => s.level === 'expert').length },
            { label: 'Advanced Skills', value: skills.filter((s) => s.level === 'advanced').length },
            { label: 'Intermediate', value: skills.filter((s) => s.level === 'intermediate').length },
            { label: 'Categories', value: Object.keys(groupedSkills).length },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.05 }}
              className="bg-gradient-to-br from-yellow-800/50 to-yellow-900/50 rounded-lg p-4 text-center border border-yellow-600/30"
            >
              <motion.p className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </motion.p>
              <p className="text-white text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
