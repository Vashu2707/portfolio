'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const timeRef = useRef(0);

  // Determine particle count based on device
  const particleCount = useMemo(() => {
    if (typeof window === 'undefined') return 2000;
    const cores = navigator.hardwareConcurrency || 4;
    return cores > 4 ? 3000 : 2000;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [particleCount]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return vel;
  }, [particleCount]);

  useFrame(() => {
    if (!meshRef.current) return;

    timeRef.current += 0.01;

    for (let i = 0; i < particleCount; i++) {
      // Update position
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      // Wrap around edges
      if (positions[i * 3] > 10) positions[i * 3] = -10;
      if (positions[i * 3] < -10) positions[i * 3] = 10;
      if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
      if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
      if (positions[i * 3 + 2] > 10) positions[i * 3 + 2] = -10;
      if (positions[i * 3 + 2] < -10) positions[i * 3 + 2] = 10;

      // Set matrix
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.scale.setScalar(0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[new THREE.SphereGeometry(1, 8, 8), new THREE.MeshBasicMaterial({ color: 0x4a90e2 }), particleCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={0x4a90e2} />
    </instancedMesh>
  );
}
