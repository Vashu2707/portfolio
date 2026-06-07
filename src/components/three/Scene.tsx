'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Aurora from './Aurora';
import Particles from './Particles';
import FloatingSymbols from './FloatingSymbols';

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={['#0a0e27']} />
      <fog attach="fog" args={['#0a0e27', 0, 15]} />
      
      <Suspense fallback={null}>
        <Aurora />
        <Particles />
        <FloatingSymbols />
      </Suspense>
    </Canvas>
  );
}
