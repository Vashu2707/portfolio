'use client';

import { motion } from 'framer-motion';
import { useDashboardStore } from '@/store/dashboardStore';
import { ChevronLeft, Mail, GitBranch, Globe } from 'lucide-react';

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

export default function ContactView() {
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);

  const contacts = [
    {
      label: 'Email',
      value: 'mail@vashu.in',
      link: 'mailto:mail@vashu.in',
      icon: Mail,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/20 group-hover:bg-red-500/30',
      borderColor: 'border-red-600/50 group-hover:border-red-400/80',
    },
    {
      label: 'GitHub',
      value: 'github.com/Vashu2707',
      link: 'https://github.com/Vashu2707',
      icon: GitBranch,
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-600/20 group-hover:bg-gray-600/30',
      borderColor: 'border-gray-600/50 group-hover:border-gray-400/80',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vashu-gupta',
      link: 'https://www.linkedin.com/in/vashu-gupta-3779762a7/',
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600/20 group-hover:bg-blue-600/30',
      borderColor: 'border-blue-600/50 group-hover:border-blue-400/80',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-30 bg-gradient-to-br from-red-950 via-red-900 to-red-950 overflow-auto flex items-center justify-center p-4"
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1.5 }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setCurrentPage('dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-red-800/80 hover:bg-red-700 text-white rounded-lg transition-colors backdrop-blur-sm border border-red-600/50"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-red-900/80 to-red-950/80 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-red-700/50 backdrop-blur-sm"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center pb-6 border-b border-red-700/30">
            <h2 className="text-4xl font-bold text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-white">Feel free to reach out through any channel</p>
          </motion.div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group block p-4 rounded-lg border transition-all backdrop-blur-sm ${contact.bgColor} ${contact.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`p-2 rounded-lg bg-gradient-to-r ${contact.color}`}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>
                    <p className="text-sm text-white font-medium">{contact.label}</p>
                  </div>
                  <p className="text-white font-semibold text-sm break-all group-hover:text-white transition-colors">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Message */}
          <motion.div
            variants={itemVariants}
            className="p-4 bg-red-800/30 rounded-lg border border-red-700/50 text-center"
          >
            <p className="text-white text-sm leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Don&apos;t hesitate to get in touch!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:mail@vashu.in'}
              className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-red-500/50"
            >
              Send Email
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
