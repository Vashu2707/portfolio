'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Aurora() {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!meshRef.current) return;

    // Create shader material for aurora effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scale: { value: 1 },
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;

        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float scale;
        varying vec3 vPosition;
        varying vec3 vNormal;

        float noise(vec3 p) {
          return sin(p.x * 0.5 + time * 0.3) * cos(p.y * 0.7 + time * 0.2) * sin(p.z * 0.3);
        }

        void main() {
          vec3 color = vec3(0.1, 0.3, 0.8);
          float n = noise(vPosition * 2.0);
          float alpha = 0.3 + n * 0.2;
          
          // Add glow effect
          vec3 glow = vec3(0.2, 0.5, 1.0) * (0.5 + 0.5 * sin(time * 0.5));
          
          gl_FragColor = vec4(color + glow * 0.3, alpha);
        }
      `,
      transparent: true,
      wireframe: false,
    });

    meshRef.current.material = material;
  }, []);

  useFrame(() => {
    if (meshRef.current && meshRef.current.material instanceof THREE.ShaderMaterial) {
      timeRef.current += 0.01;
      meshRef.current.material.uniforms.time.value = timeRef.current;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[4, 4, 4]}>
      <icosahedronGeometry args={[1, 4]} />
    </mesh>
  );
}
