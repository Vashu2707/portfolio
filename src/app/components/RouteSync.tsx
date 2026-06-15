'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useDashboardStore, Page } from '@/store/dashboardStore';

export default function RouteSync() {
  const pathname = usePathname();
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);
  const setActiveTile = useDashboardStore((state) => state.setActiveTile);

  useEffect(() => {
    const path = pathname.split('/')[1] || 'dashboard';
    const validPages: Page[] = ['dashboard', 'profile', 'projects', 'skills', 'resume', 'contact', 'blogs'];
    
    if (validPages.includes(path as Page)) {
      setCurrentPage(path as Page);
      
      // Sync activeTile based on path to preserve dashboard state when returning
      const tileIndex = ['profile', 'projects', 'skills', 'resume', 'blogs', 'contact'].indexOf(path);
      if (tileIndex !== -1) {
        setActiveTile(tileIndex);
      }
    }
  }, [pathname, setCurrentPage, setActiveTile]);

  return null;
}
