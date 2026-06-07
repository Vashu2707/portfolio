'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '@/store/dashboardStore';
import DashboardTile from './DashboardTile';
import { User, Gamepad2, Zap, FileText, Mail } from 'lucide-react';

const TILES = [
  { id: 0, title: 'Profile', icon: <User size={48} />, gradient: 'bg-gradient-to-br from-blue-600 to-blue-800', page: 'profile' as const },
  { id: 1, title: 'Projects', icon: <Gamepad2 size={48} />, gradient: 'bg-gradient-to-br from-purple-600 to-purple-800', page: 'projects' as const },
  { id: 2, title: 'Skills', icon: <Zap size={48} />, gradient: 'bg-gradient-to-br from-yellow-600 to-yellow-800', page: 'skills' as const },
  { id: 3, title: 'Resume', icon: <FileText size={48} />, gradient: 'bg-gradient-to-br from-green-600 to-green-800', page: 'resume' as const },
  { id: 4, title: 'Contact', icon: <Mail size={48} />, gradient: 'bg-gradient-to-br from-red-600 to-red-800', page: 'contact' as const },
];

export default function Navigation() {
  const { activeTile, setActiveTile, setCurrentPage, currentPage } = useDashboardStore();

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
          setCurrentPage(tile.page);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeTile, setActiveTile, setCurrentPage, currentPage]);

  const handleTileClick = (tileId: number) => {
    setActiveTile(tileId);
    const tile = TILES[tileId];
    if (tile) {
      setCurrentPage(tile.page);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TILES.map((tile) => (
            <DashboardTile
              key={tile.id}
              id={tile.id}
              title={tile.title}
              icon={tile.icon}
              gradient={tile.gradient}
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
