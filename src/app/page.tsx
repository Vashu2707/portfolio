'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/dashboard/Navigation';

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-3 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
        />
        <p className="text-white text-sm">Loading...</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Navigation />
    </Suspense>
  );
}
