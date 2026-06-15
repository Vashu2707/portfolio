'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const contacts = [
    {
      label: 'Email',
      value: 'mail@vashu.in',
      link: 'mailto:mail@vashu.in',
      icon: Mail,
      color: 'from-rose-400 to-pink-500',
      bgColor: 'bg-rose-950/20 group-hover:bg-rose-950/30',
      borderColor: 'border-rose-500/30 group-hover:border-rose-400/50',
    },
    {
      label: 'GitHub',
      value: 'github.com/Vashu2707',
      link: 'https://github.com/Vashu2707',
      icon: GitBranch,
      color: 'from-slate-400 to-slate-500',
      bgColor: 'bg-slate-950/20 group-hover:bg-slate-950/30',
      borderColor: 'border-slate-500/30 group-hover:border-slate-400/50',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vashu-gupta',
      link: 'https://www.linkedin.com/in/vashu-gupta-3779762a7/',
      icon: Globe,
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-950/20 group-hover:bg-cyan-950/30',
      borderColor: 'border-cyan-500/30 group-hover:border-cyan-400/50',
    },
  ];

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
          transition={{ duration: 8, repeat: Infinity, delay: 1.5 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-rose-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3.5 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-rose-950/50 hover:bg-rose-900/80 text-rose-200 rounded-lg transition-colors backdrop-blur-sm border border-rose-500/30"
      >
        <ChevronLeft size={20} />
        Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-[#0b1026]/75 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md transition-all duration-300"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center pb-6 border-b border-rose-500/20">
            <h2 className="text-4xl font-bold text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-rose-200">Feel free to reach out through any channel</p>
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
                  whileHover={{ scale: 1.03, translateY: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group block p-4 rounded-lg border transition-all duration-300 backdrop-blur-sm ${contact.bgColor} ${contact.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`p-2 rounded-lg bg-gradient-to-r ${contact.color}`}
                    >
                      <Icon size={20} className="text-slate-950" />
                    </motion.div>
                    <p className="text-sm text-rose-200 font-medium">{contact.label}</p>
                  </div>
                  <p className="text-white font-semibold text-sm break-all group-hover:text-rose-300 transition-colors duration-300">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Message */}
          <motion.div
            variants={itemVariants}
            className="p-4 bg-rose-950/20 rounded-lg border border-rose-500/20 text-center"
          >
            <p className="text-rose-200 text-sm leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Don&apos;t hesitate to get in touch!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'mailto:mail@vashu.in'}
              className="w-full px-4 py-3 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-300 hover:to-pink-400 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-rose-500/20 hover:shadow-rose-400/40"
            >
              Send Email
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
