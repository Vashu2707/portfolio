'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDashboardStore } from '@/store/dashboardStore';
import DashboardTile from './DashboardTile';
import { User, Gamepad2, Zap, FileText, Mail, BookOpen } from 'lucide-react';

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

  const handleTileClick = (tileId: number) => {
    setActiveTile(tileId);
    const tile = TILES[tileId];
    if (tile) {
      router.push(`/${tile.page}`);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="w-full max-w-7xl px-4 pointer-events-auto">
        {/* Title */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            VASHU GUPTA
          </h1>
          <p className="text-white mt-2">Full Stack Developer</p>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

        {/* Controls Info */}
        <div className="text-center mt-12 text-white text-sm">
          <p>Click a tile or use ← → to navigate, Enter to open</p>
        </div>
      </div>
    </div>
  );
}
