'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useDashboardStore, Page } from '@/store/dashboardStore';

export default function RouteSync() {
  const pathname = usePathname();
  const router = useRouter();
  const setCurrentPage = useDashboardStore((state) => state.setCurrentPage);
  const setActiveTile = useDashboardStore((state) => state.setActiveTile);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Route Synchronization
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

  // Swipe-to-go-back gesture
  useEffect(() => {
    if (pathname === '/' || pathname === '/dashboard') return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Swipe right (left to right) to go back
      // Requires horizontal sweep of at least 80px and must be dominant horizontal
      if (diffX > 80 && Math.abs(diffX) > Math.abs(diffY)) {
        router.push('/');
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pathname, router]);

  // Render floating back dock for subpages on mobile
  if (isMobile && pathname !== '/' && pathname !== '/dashboard') {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-5 py-3 bg-[#0a0e27]/90 border border-white/10 rounded-full shadow-2xl backdrop-blur-md">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/35 rounded-full active:scale-95 transition-all text-white text-xs font-semibold tracking-widest cursor-pointer"
        >
          <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-rose-500 text-rose-500 font-black text-[10px] leading-none select-none">◯</span>
          <span>BACK</span>
        </button>
      </div>
    );
  }

  return null;
}
