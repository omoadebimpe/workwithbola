import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const particlesRef = useRef<THREE.Points>();
  const { isDark } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: isDark ? 0x4f46e5 : 0x93c5fd,
      size: 2,
      transparent: true,
      opacity: isDark ? 0.6 : 0.3,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];

          // Wrap around
          if (positions[i] > 10) positions[i] = -10;
          if (positions[i] < -10) positions[i] = 10;
          if (positions[i + 1] > 10) positions[i + 1] = -10;
          if (positions[i + 1] < -10) positions[i + 1] = 10;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update particle colors when theme changes
  useEffect(() => {
    if (particlesRef.current) {
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.color.setHex(isDark ? 0x4f46e5 : 0x93c5fd);
      material.opacity = isDark ? 0.6 : 0.3;
    }
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${
        isDark ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;