'use client';

import { motion } from 'framer-motion';
import { useDashboardStore } from '@/store/dashboardStore';

interface DashboardTileProps {
  id: number;
  title: string;
  icon?: React.ReactNode;
  gradient: string;
  onClick: () => void;
}

export default function DashboardTile({
  id,
  title,
  icon,
  gradient,
  onClick,
}: DashboardTileProps) {
  const activeTile = useDashboardStore((state) => state.activeTile);
  const isActive = activeTile === id;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1.15 : 0.9,
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 20,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-6 min-h-[240px] flex flex-col items-center justify-center relative overflow-hidden group ${gradient}`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 text-center">
        {icon && <div className="mb-4 text-5xl">{icon}</div>}
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
      </div>

      {/* Focus indicator */}
      {isActive && (
        <motion.div
          layoutId="focus-indicator"
          className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}
