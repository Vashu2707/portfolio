'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDashboardStore } from '@/store/dashboardStore';
import DashboardTile from './DashboardTile';
import { User, Gamepad2, Zap, FileText, Mail, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const TILES = [
  { id: 0, title: 'Profile', icon: <User size={48} />, gradient: 'bg-gradient-to-br from-blue-700 to-blue-950', page: 'profile' as const },
  { id: 1, title: 'Projects', icon: <Gamepad2 size={48} />, gradient: 'bg-gradient-to-br from-purple-800 to-purple-950', page: 'projects' as const },
  { id: 2, title: 'Skills', icon: <Zap size={48} />, gradient: 'bg-gradient-to-br from-green-700 to-emerald-950', page: 'skills' as const },
  { id: 3, title: 'Resume', icon: <FileText size={48} />, gradient: 'bg-gradient-to-br from-slate-600 to-slate-900', page: 'resume' as const },
  { id: 4, title: 'Blogs', icon: <BookOpen size={48} />, gradient: 'bg-gradient-to-br from-cyan-700 to-cyan-950', page: 'blogs' as const },
  { id: 5, title: 'Contact', icon: <Mail size={48} />, gradient: 'bg-gradient-to-br from-rose-800 to-rose-950', page: 'contact' as const },
];

export default function Navigation() {
  const { activeTile, setActiveTile, currentPage } = useDashboardStore();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle arrow keys when on dashboard
      if (currentPage !== 'dashboard') return;

      if (e.key === 'ArrowRight') {
        const newTile = (activeTile + 1) % TILES.length;
        setActiveTile(newTile);
      } else if (e.key === 'ArrowLeft') {
        const newTile = (activeTile - 1 + TILES.length) % TILES.length;
        setActiveTile(newTile);
      } else if (e.key === 'Enter' || e.key === ' ') {
        // Open the tile page
        const tile = TILES[activeTile];
        if (tile) {
          router.push(`/${tile.page}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeTile, setActiveTile, currentPage, router]);

  // Handle mobile swipe gestures
  useEffect(() => {
    if (!isMobile) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Ensure horizontal swipe is dominant and has enough velocity/distance
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left -> show next tile
          setActiveTile((activeTile + 1) % TILES.length);
        } else {
          // Swipe right -> show previous tile
          setActiveTile((activeTile - 1 + TILES.length) % TILES.length);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, activeTile, setActiveTile]);

  const handleTileClick = (tileId: number) => {
    if (isMobile && activeTile !== tileId) {
      // Focus tile first on mobile
      setActiveTile(tileId);
    } else {
      // Open tile
      const tile = TILES[tileId];
      if (tile) {
        router.push(`/${tile.page}`);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="w-full max-w-7xl px-4 pointer-events-auto flex flex-col justify-center min-h-screen">
        {/* Title */}
        <div className="text-center mb-6 md:mb-12 mt-2 md:mt-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wider">
            VASHU GUPTA
          </h1>
          <p className="text-cyan-200 mt-1.5 font-medium text-xs md:text-base tracking-widest uppercase">Full Stack Developer</p>
        </div>

        {/* Tiles Container */}
        <div className={isMobile ? "w-screen -ml-4 overflow-x-hidden py-8 relative" : ""}>
          <div
            className={
              isMobile
                ? "flex flex-row gap-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            }
            style={isMobile ? {
              transform: `translateX(calc(50vw - ${activeTile * 196}px - 90px))`,
              width: `${TILES.length * 180 + (TILES.length - 1) * 16}px`,
            } : undefined}
          >
            {TILES.map((tile) => (
              <DashboardTile
                key={tile.id}
                title={tile.title}
                icon={tile.icon}
                gradient={tile.gradient}
                isActive={activeTile === tile.id}
                onClick={() => handleTileClick(tile.id)}
              />
            ))}
          </div>
        </div>

        {/* Controls Info (Desktop) */}
        {!isMobile && (
          <div className="text-center mt-12 text-white/60 text-sm tracking-wider uppercase font-medium">
            <p>Click a tile or use <span className="text-cyan-300 font-bold">← →</span> to navigate, <span className="text-cyan-300 font-bold">Enter</span> to open</p>
          </div>
        )}

        {/* Mobile Controller Pill Dock */}
        {isMobile && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6 px-5 py-3 bg-[#0a0e27]/85 border border-white/10 rounded-full shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTile((activeTile - 1 + TILES.length) % TILES.length)}
              className="p-1.5 hover:bg-white/10 rounded-full active:scale-75 transition-all text-white/80"
              aria-label="Previous Tile"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-white">
              <button
                onClick={() => handleTileClick(activeTile)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/35 border border-blue-500/40 rounded-full active:scale-95 transition-all"
              >
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-500 text-slate-950 font-black text-[11px] select-none">✕</span>
                <span>ENTER</span>
              </button>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 opacity-40">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-rose-500 text-rose-500 font-black text-[10px] select-none">◯</span>
                <span>BACK</span>
              </div>
            </div>

            <button
              onClick={() => setActiveTile((activeTile + 1) % TILES.length)}
              className="p-1.5 hover:bg-white/10 rounded-full active:scale-75 transition-all text-white/80"
              aria-label="Next Tile"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
