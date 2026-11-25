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

const featuredProjects = [
  {
    id: 'breaktime',
    name: 'BreakTime',
    tag: 'Progressive Web App · Cafe Ordering',
    image: '/breaktime.png',
    liveLink: 'https://breaktime0.netlify.app',
    githubLink: 'https://github.com/shahidsss8998-debug/BreakTime.git',
    desc: 'Real-time ordering flow, dynamic admin dashboard, and automated email order routing.',
  },
  {
    id: 'spoonful',
    name: 'Spoonful Restaurant',
    tag: 'Full-Stack Platform · MongoDB',
    image: '/spoonful.png',
    liveLink: 'https://spoonful0.netlify.app',
    githubLink: 'https://github.com/shahidsss8998-debug/jsproject-frontend.git',
    desc: 'Interactive culinary menu browsing with Express.js backend APIs and automated order management.',
  },
  {
    id: 'rainbow',
    name: 'Rainbow Holidays',
    tag: 'Mobile-First · WhatsApp Booking',
    image: '/Rainbow.png',
    liveLink: 'https://rainbowholidays.netlify.app/',
    githubLink: 'https://github.com/shahidsss8998-debug/Rainbow-Holidays.git',
    desc: 'Modern fleet showcase with instant WhatsApp reservation for tour travellers and cruisers.',
  },
];

const Project3DShowcase = () => {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(() => checkWebGLSupport());
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = featuredProjects[activeProjectIndex];

  // Store texture switcher function in a ref so button clicks update 3D texture without re-mounting Three.js
  const updateTextureRef = useRef(null);

  useEffect(() => {
    if (!webglSupported) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let isVisible = true;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

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
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL failed for project 3D showcase', e);
      queueMicrotask(() => {
        setWebglSupported(false);
      });
      return;
    }

    // Master Group for perspective tilt
    const showcaseGroup = new THREE.Group();
    scene.add(showcaseGroup);

    // ─── TEXTURE LOADER & PRELOADING ──────────────────────────────────
    const textureLoader = new THREE.TextureLoader();
    const textures = {};
    featuredProjects.forEach((p) => {
      textures[p.id] = textureLoader.load(p.image);
      textures[p.id].generateMipmaps = true;
      textures[p.id].minFilter = THREE.LinearMipmapLinearFilter;
    });

    // ─── 1. LAPTOP DEVICE MOCKUP (SPACE GREY / TITANIUM) ──────────────
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(-0.35, -0.1, 0);
    showcaseGroup.add(laptopGroup);

    // Laptop Lid / Screen Bezel
    const screenWidth = 2.4;
    const screenHeight = 1.5;
    const bezelThickness = 0.04;

    const bezelGeo = new THREE.BoxGeometry(screenWidth + 0.1, screenHeight + 0.1, bezelThickness);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x181c2e, // Space grey dark titanium
      metalness: 0.85,
      roughness: 0.25,
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    laptopGroup.add(bezelMesh);

    // Laptop Screen Display Mesh (Displays active screenshot)
    const screenGeo = new THREE.PlaneGeometry(screenWidth, screenHeight);
    const screenMat = new THREE.MeshBasicMaterial({
      map: textures[featuredProjects[0].id] || null,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = bezelThickness / 2 + 0.002;
    laptopGroup.add(screenMesh);

    // Laptop Base
    const baseWidth = screenWidth + 0.16;
    const baseDepth = 1.55;
    const baseThickness = 0.04;
    const baseGeo = new THREE.BoxGeometry(baseWidth, baseThickness, baseDepth);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x121626,
      metalness: 0.9,
      roughness: 0.25,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(0, -screenHeight / 2 - 0.02, baseDepth / 2 - 0.05);
    laptopGroup.add(baseMesh);

    // Laptop Trackpad indentation
    const trackpadGeo = new THREE.PlaneGeometry(0.7, 0.45);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x0f1220,
      roughness: 0.35,
    });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.rotation.x = -Math.PI / 2;
    trackpadMesh.position.set(0, baseThickness / 2 + 0.002, 0.45);
    baseMesh.add(trackpadMesh);

    // Angle the laptop lid
    laptopGroup.rotation.x = 0.12;
    laptopGroup.rotation.y = 0.22;

    // ─── 2. SMARTPHONE DEVICE MOCKUP ──────────────────────────────────
    const phoneGroup = new THREE.Group();
    phoneGroup.position.set(1.4, -0.32, 0.45);
    showcaseGroup.add(phoneGroup);

    const phoneWidth = 0.68;
    const phoneHeight = 1.35;
    const phoneThickness = 0.04;

    const phoneFrameGeo = new THREE.BoxGeometry(phoneWidth + 0.04, phoneHeight + 0.04, phoneThickness);
    const phoneFrameMat = new THREE.MeshStandardMaterial({
      color: 0x241d49, // Dark purple-tinted chassis
      metalness: 0.85,
      roughness: 0.2,
    });
    const phoneFrame = new THREE.Mesh(phoneFrameGeo, phoneFrameMat);
    phoneGroup.add(phoneFrame);

    const phoneScreenGeo = new THREE.PlaneGeometry(phoneWidth, phoneHeight);
    const phoneScreenMat = new THREE.MeshBasicMaterial({
      map: textures[featuredProjects[0].id] || null,
    });
    const phoneScreen = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreen.position.z = phoneThickness / 2 + 0.002;
    phoneGroup.add(phoneScreen);

    // Angle phone towards camera
    phoneGroup.rotation.y = -0.28;
    phoneGroup.rotation.x = 0.08;
    phoneGroup.rotation.z = -0.04;

    // ─── 3. REFINED STUDIO LIGHTING ───────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x0f1638, 1.6);
    scene.add(ambientLight);

    const studioKey = new THREE.DirectionalLight(0xffffff, 2.2);
    studioKey.position.set(3, 5, 4);
    scene.add(studioKey);

    const violetAccent = new THREE.PointLight(0x8b5cf6, 8, 10);
    violetAccent.position.set(-2, 2, 2);
    scene.add(violetAccent);

    const cyanAccent = new THREE.PointLight(0x06b6d4, 8, 10);
    cyanAccent.position.set(2, -1, 3);
    scene.add(cyanAccent);

    // Expose texture updater to parent component
    updateTextureRef.current = (projectId) => {
      if (textures[projectId]) {
        screenMat.map = textures[projectId];
        screenMat.needsUpdate = true;
        phoneScreenMat.map = textures[projectId];
        phoneScreenMat.needsUpdate = true;
      }
    };

    // ─── 4. MOUSE PARALLAX ────────────────────────────────────────────
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // ─── 5. ANIMATION LOOP ────────────────────────────────────────────
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Group perspective tilt
      showcaseGroup.rotation.y = mouse.x * 0.22;
      showcaseGroup.rotation.x = -mouse.y * 0.14;

      // Subtle breathing float
      laptopGroup.position.y = -0.1 + Math.sin(elapsedTime * 1.2) * 0.03;
      phoneGroup.position.y = -0.32 + Math.cos(elapsedTime * 1.4) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

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

      bezelGeo.dispose();
      bezelMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      trackpadGeo.dispose();
      trackpadMat.dispose();
      phoneFrameGeo.dispose();
      phoneFrameMat.dispose();
      phoneScreenGeo.dispose();
      phoneScreenMat.dispose();
      Object.values(textures).forEach((t) => t.dispose());
    };
  }, [webglSupported]);

  // Handle project change from UI tabs
  const handleSelectProject = (index) => {
    setActiveProjectIndex(index);
    if (updateTextureRef.current) {
      updateTextureRef.current(featuredProjects[index].id);
    }
  };

  return (
    <div className="w-full rounded-3xl dev-card p-6 sm:p-8 mb-16 shadow-2xl relative overflow-hidden border border-white/10">
      {/* Header bar for 3D Showcase */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-3 border-b border-white/10 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
            Interactive 3D Preview
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Responsive Device <span className="italic text-purple-400">Perspective</span>
          </h3>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#070b1e] border border-white/10 self-start sm:self-auto">
          {featuredProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${activeProjectIndex === idx
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md shadow-purple-500/20'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              {proj.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas / WebGL Fallback Container */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center">
        {webglSupported ? (
          <div
            ref={containerRef}
            className="w-full h-full cursor-grab active:cursor-grabbing select-none"
            title="3D Device Mockup — Move mouse to tilt perspective"
          />
        ) : (
          /* WebGL Fallback: 2D Device Mockups */
          <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center gap-4">
            <div className="w-3/4 rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-[#090e26] p-1.5">
              <img
                src={activeProject.image}
                alt={activeProject.name}
                className="w-full h-auto rounded object-cover"
              />
            </div>
            <div className="w-1/4 rounded-xl border border-white/15 overflow-hidden shadow-2xl bg-[#090e26] p-1">
              <img
                src={activeProject.image}
                alt={activeProject.name}
                className="w-full h-auto rounded object-cover"
              />
            </div>
          </div>
        )}

        {/* Ambient hint indicator */}
        <div className="absolute bottom-2 right-4 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Interactive 3D Perspective · Laptop & Mobile
        </div>
      </div>

      {/* Active Project Metadata Bar */}
      <div className="pt-5 mt-1 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-serif italic text-xl sm:text-2xl text-white">
              {activeProject.name}
            </span>
            <span className="text-xs font-mono text-purple-300 px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20">
              {activeProject.tag}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            {activeProject.desc}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={activeProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 transition-opacity shadow-md shadow-purple-500/20"
          >
            <span>Live Demo</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={activeProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white dev-card border border-white/10 hover:border-purple-500/30 transition-colors"
          >
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3DShowcase;
