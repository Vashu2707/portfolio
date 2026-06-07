'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingSymbols() {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  
  // PS4 symbols - simplified with colored cubes
  const symbols = useMemo(
    () => [
      { name: 'triangle', color: 0x00ff00 },
      { name: 'circle', color: 0xff0000 },
      { name: 'cross', color: 0x0066ff },
      { name: 'square', color: 0xffcc00 },
    ],
    []
  );

  const symbolObjects = useMemo(() => {
    return symbols.map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ),
      rotationVelocity: new THREE.Euler(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ),
    }));
  }, [symbols]);

  useFrame(() => {
    if (!groupRef.current) return;

    timeRef.current += 0.01;

    groupRef.current.children.forEach((child, index) => {
      const obj = symbolObjects[index];

      // Update position
      obj.position.add(obj.velocity);

      // Wrap around edges
      if (obj.position.x > 10) obj.position.x = -10;
      if (obj.position.x < -10) obj.position.x = 10;
      if (obj.position.y > 10) obj.position.y = -10;
      if (obj.position.y < -10) obj.position.y = 10;
      if (obj.position.z > 10) obj.position.z = -10;
      if (obj.position.z < -10) obj.position.z = 10;

      // Update rotation
      obj.rotation.x += obj.rotationVelocity.x;
      obj.rotation.y += obj.rotationVelocity.y;
      obj.rotation.z += obj.rotationVelocity.z;

      // Apply transformations
      child.position.copy(obj.position);
      child.rotation.copy(obj.rotation);

      // Add parallax effect based on camera
      const scale = 0.8 + Math.sin(timeRef.current + index) * 0.2;
      child.scale.setScalar(scale);
    });
  });

  return (
    <group ref={groupRef}>
      {symbols.map((symbol) => (
        <mesh key={symbol.name} position={[0, 0, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshPhongMaterial color={symbol.color} emissive={symbol.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}
