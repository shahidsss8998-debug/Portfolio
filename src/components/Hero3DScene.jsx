import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Detect WebGL capability safely
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

const Hero3DScene = () => {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(() => checkWebGLSupport());

  useEffect(() => {
    if (!webglSupported) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to CSS visualization', e);
      queueMicrotask(() => {
        setWebglSupported(false);
      });
      return;
    }

    // Master Group for mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ─── 1. CORE CRYSTALLINE OBJECT ─────────────────────────────────────
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // Inner Faceted Crystal: Deep Indigo/Violet with Brushed Metallic Specular
    const coreGeometry = new THREE.IcosahedronGeometry(1.24, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4338ca, // Deep indigo violet
      emissive: 0x1e1b4b,
      emissiveIntensity: 0.35,
      metalness: 0.75,
      roughness: 0.22,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
      reflectivity: 0.85,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // Wireframe Outer Cage: Vibrant Electric Violet
    const cageGeometry = new THREE.IcosahedronGeometry(1.34, 0);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    coreGroup.add(cageMesh);

    // Soft Violet Glow Core
    const innerLight = new THREE.PointLight(0xa855f7, 8, 5);
    coreGroup.add(innerLight);

    // ─── 2. GYROSCOPIC ORBITAL RINGS ────────────────────────────────────
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    // Ring 1 (Inner Cyan Ring)
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.028, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Electric cyan
      metalness: 0.85,
      roughness: 0.22,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    // Ring 2 (Middle Electric Violet Ring)
    const ring2Geo = new THREE.TorusGeometry(2.35, 0.024, 16, 140);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6, // Electric violet
      metalness: 0.85,
      roughness: 0.22,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    ringGroup.add(ring2);

    // Ring 3 (Outer Electric Blue Ring)
    const ring3Geo = new THREE.TorusGeometry(2.78, 0.02, 16, 160);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6, // Electric blue
      metalness: 0.8,
      roughness: 0.28,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 5;
    ringGroup.add(ring3);

    // ─── 3. ORBITING SATELLITE CRYSTALS ────────────────────────────────
    const satelliteGroup = new THREE.Group();
    masterGroup.add(satelliteGroup);

    const satellites = [];
    const satCount = 4;
    const satColors = [0x06b6d4, 0x8b5cf6, 0x3b82f6, 0xd946ef];

    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.16, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: satColors[i],
        metalness: 0.8,
        roughness: 0.2,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satelliteGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        orbitRadius: 2.1 + (i % 2) * 0.45,
        speed: 0.7 + i * 0.25,
        phase: (i * Math.PI * 2) / satCount,
        inclination: (i * Math.PI) / 4,
      });
    }

    // ─── 4. FLOATING STARDUST CONSTELLATION ────────────────────────────
    const particleCount = 480;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0xc084fc), // Soft purple
      new THREE.Color(0xffffff), // White
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 4.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // ─── 5. REFINED LIGHTING ────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x0b1029, 1.3);
    scene.add(ambientLight);

    // Electric Violet Key Light (top right)
    const violetLight = new THREE.PointLight(0x8b5cf6, 18, 16);
    violetLight.position.set(4, 3, 4);
    scene.add(violetLight);

    // Electric Cyan Fill Light (bottom left)
    const cyanLight = new THREE.PointLight(0x06b6d4, 16, 16);
    cyanLight.position.set(-4, -2.5, 3);
    scene.add(cyanLight);

    // Electric Blue Cursor Light (tracks mouse in 3D)
    const cursorLight = new THREE.PointLight(0x38bdf8, 14, 12);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    // Subtle Directional Rim Light
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.75);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // ─── 6. INTERACTION & PARALLAX ──────────────────────────────────────
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ─── 7. ANIMATION LOOP ──────────────────────────────────────────────
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Parallax on master group
      masterGroup.rotation.y = mouse.x * 0.42;
      masterGroup.rotation.x = -mouse.y * 0.42;

      // Cursor light tracking
      cursorLight.position.x = mouse.x * 3.4;
      cursorLight.position.y = mouse.y * 3.4;

      // Continuous organic rotation of core crystal
      coreMesh.rotation.x = elapsedTime * 0.22;
      coreMesh.rotation.y = elapsedTime * 0.28;
      cageMesh.rotation.x = -elapsedTime * 0.18;
      cageMesh.rotation.y = -elapsedTime * 0.25;

      // Subtle breathing scale on the core
      const breath = 1 + Math.sin(elapsedTime * 1.6) * 0.03;
      coreGroup.scale.set(breath, breath, breath);

      // Multi-axis rotation of orbital rings
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = -elapsedTime * 0.28;
      ring2.rotation.z = elapsedTime * 0.22;
      ring3.rotation.y = elapsedTime * 0.25;

      // Satellites orbiting
      satellites.forEach((sat) => {
        const angle = elapsedTime * sat.speed + sat.phase;
        sat.mesh.position.x = Math.cos(angle) * sat.orbitRadius;
        sat.mesh.position.y = Math.sin(angle) * Math.sin(sat.inclination) * sat.orbitRadius;
        sat.mesh.position.z = Math.sin(angle) * Math.cos(sat.inclination) * sat.orbitRadius;
        sat.mesh.rotation.x += 0.018;
        sat.mesh.rotation.y += 0.024;
      });

      // Subtle drifting of particles
      particles.rotation.y = elapsedTime * 0.035;
      particles.rotation.x = Math.sin(elapsedTime * 0.07) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // ─── CLEANUP ────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (renderer) {
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [webglSupported]);

  return (
    <div className="relative w-full h-90 sm:h-110 md:h-125 lg:h-140 flex items-center justify-center">
      {/* Soft diffused background halo */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full blur-[90px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)',
        }}
      />

      {webglSupported ? (
        <div
          ref={containerRef}
          className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
          title="Interactive 3D Orbital Core — Move mouse to interact"
        />
      ) : (
        /* WebGL Fallback: Refined Dark Geometric Visualization */
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-[spin_24s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/30 animate-[spin_16s_linear_infinite_reverse]" />
          <div className="absolute inset-10 rounded-full border border-blue-500/35" />
          
          <div className="relative w-24 h-24 rounded-2xl bg-linear-to-tr from-violet-600 to-cyan-500 p-[1.5px] shadow-lg flex items-center justify-center">
            <div className="w-full h-full bg-[#070b1e] rounded-2xl flex items-center justify-center">
              <span className="font-serif italic text-3xl font-bold bg-linear-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                SP
              </span>
            </div>
          </div>
          
          <div className="absolute top-2 left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
        </div>
      )}

      {/* Interactive 3D Hint Badge */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full dev-card text-[10px] font-mono text-slate-400 pointer-events-none select-none border border-white/10 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Core · Mouse Parallax
      </div>
    </div>
  );
};

export default Hero3DScene;
