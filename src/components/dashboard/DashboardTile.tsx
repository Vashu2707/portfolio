'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

interface DashboardTileProps {
  title: string;
  icon?: React.ReactNode;
  gradient: string;
  isActive: boolean;
  onClick: () => void;
}

function DashboardTileComponent({
  title,
  icon,
  gradient,
  isActive,
  onClick,
}: DashboardTileProps) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1.15 : 0.9,
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 20,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 md:p-6 min-h-[200px] h-[200px] md:h-auto md:min-h-[240px] w-[180px] min-w-[180px] shrink-0 md:w-auto md:min-w-0 md:shrink flex flex-col items-center justify-center relative overflow-hidden group ${gradient}`}
      role="button"
      tabIndex={0}
      style={{ willChange: 'transform, opacity' }}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        {icon && <div className="mb-2 md:mb-4 text-4xl md:text-5xl">{icon}</div>}
        <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
      </div>

      {/* Focus indicator - animated smoothly on GPU via opacity/scale (no layoutId to prevent layout thrashing) */}
      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.95,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none"
        style={{ willChange: 'transform, opacity' }}
      />
    </motion.div>
  );
}

export const DashboardTile = memo(DashboardTileComponent);
export default DashboardTile;
