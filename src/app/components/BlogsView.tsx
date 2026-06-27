'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { blogs, Blog } from '@/data/blogs';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';

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

export default function BlogsView() {
  const router = useRouter();
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Custom renderer to format the blog post body cleanly
  const renderContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, index) => {
      // 1. Headers
      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold text-sky-200 mt-8 mb-4 border-b border-sky-800/30 pb-2">
            {block.replace('### ', '')}
          </h3>
        );
      }

      // 2. Code blocks
      if (block.startsWith('```')) {
        const lines = block.split('\n');
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre key={index} className="bg-sky-950/40 border border-sky-800/40 rounded-xl p-4 my-6 overflow-x-auto text-sm text-sky-100 font-mono shadow-inner">
            <code className="block">{code}</code>
          </pre>
        );
      }

      // 3. Bullet lists
      if (block.includes('\n- ')) {
        const lines = block.split('\n');
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-5 text-sky-100/90 leading-relaxed pl-2">
            {lines.map((line, idx) => (
              <li key={idx} className="marker:text-sky-400">
                {line.replace('- ', '')}
              </li>
            ))}
          </ul>
        );
      }
      if (block.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-5 text-sky-100/90 leading-relaxed pl-2">
            <li className="marker:text-sky-400">{block.replace('- ', '')}</li>
          </ul>
        );
      }

      // 4. Inline code replacement (e.g. `scale: 1.15`)
      const parts = block.split('`');
      if (parts.length > 1) {
        return (
          <p key={index} className="text-sky-100/90 leading-relaxed mb-5 text-base md:text-lg">
            {parts.map((part, idx) => {
              if (idx % 2 === 1) {
                return (
                  <code key={idx} className="bg-sky-950/60 border border-sky-800/40 px-1.5 py-0.5 rounded text-sm text-sky-300 font-mono font-medium">
                    {part}
                  </code>
                );
              }
              return part;
            })}
          </p>
        );
      }

      // 5. Normal paragraph
      return (
        <p key={index} className="text-sky-100/90 leading-relaxed mb-5 text-base md:text-lg">
          {block}
        </p>
      );
    });
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
      {/* Animated background gradient circle */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => {
          if (selectedBlog) {
            setSelectedBlog(null);
          } else {
            router.push('/');
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-sky-950/50 hover:bg-sky-900/80 text-sky-200 rounded-lg transition-colors backdrop-blur-sm border border-sky-500/30"
      >
        <ChevronLeft size={20} />
        {selectedBlog ? 'Back to Blogs' : 'Back'}
      </motion.button>

      <div className="max-w-4xl mx-auto pt-16 md:pt-24 pb-16 px-2">
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            // Blog Listing View
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-12 text-center">
                <h2 className="text-5xl font-bold text-white mb-3 tracking-tight">
                  Blogs
                </h2>
                <p className="text-sky-200 text-lg">My thoughts, guides, and tech insights</p>
              </div>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {blogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredId(blog.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedBlog(blog)}
                    className="cursor-pointer group relative"
                  >
                    {/* Shadow overlay hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 via-sky-600/0 to-sky-600/0 group-hover:from-sky-600/15 group-hover:to-sky-600/0 rounded-xl transition-all duration-300" />

                    <motion.div
                      animate={{
                        y: hoveredId === blog.id ? -4 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="relative bg-[#0b1026]/75 rounded-xl p-5 md:p-8 border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                    >
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-sky-300 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {blog.date}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-gray-200 mb-5 leading-relaxed text-sm md:text-base">
                        {blog.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-sky-950/40 border border-sky-750/30 text-sky-200 px-3 py-1 rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="flex items-center gap-1 text-sm font-semibold text-sky-300 group-hover:text-sky-100 transition-colors">
                          Read Post
                          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            // Blog Detail View
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0b1026]/75 rounded-2xl p-5 md:p-10 border border-sky-500/30 backdrop-blur-md shadow-2xl"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-sky-300 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} />
                  {selectedBlog.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                <span className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {selectedBlog.readTime}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                <span className="flex items-center gap-1.5 text-sky-300 font-medium">
                  <BookOpen size={15} />
                  Article
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8 border-b border-sky-800/40 pb-6">
                {selectedBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs md:text-sm bg-gradient-to-r from-sky-400 to-cyan-500 text-slate-950 px-3 py-1 rounded-full font-bold shadow-md shadow-sky-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Styled post body */}
              <div className="prose prose-invert max-w-none">
                {renderContent(selectedBlog.content)}
              </div>

              <div className="mt-12 pt-8 border-t border-sky-850/40 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBlog(null)}
                  className="flex items-center gap-1.5 text-sky-300 hover:text-sky-100 font-semibold transition-colors"
                >
                  <ChevronLeft size={18} />
                  Back to List
                </motion.button>

                <p className="text-xs text-sky-300/50">
                  © {new Date().getFullYear()} Vashu Gupta
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
