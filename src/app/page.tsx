'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useDashboardStore } from '@/store/dashboardStore';
import Navigation from '@/components/dashboard/Navigation';

// Lazy load page views
const Profile = lazy(() => import('./components/Profile'));
const ProjectsView = lazy(() => import('./components/ProjectsView'));
const SkillsView = lazy(() => import('./components/SkillsView'));
const ResumeView = lazy(() => import('./components/ResumeView'));
const ContactView = lazy(() => import('./components/ContactView'));

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
  const currentPage = useDashboardStore((state) => state.currentPage);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      {currentPage === 'dashboard' && <Navigation />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'projects' && <ProjectsView />}
      {currentPage === 'skills' && <SkillsView />}
      {currentPage === 'resume' && <ResumeView />}
      {currentPage === 'contact' && <ContactView />}
    </Suspense>
  );
}
