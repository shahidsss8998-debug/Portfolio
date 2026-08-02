import React, { useEffect, useRef } from 'react';

/**
 * MistBackground — Fixed volumetric mist layer that sits behind all content.
 * 5 blurred radial-gradient blobs that slowly drift on CSS keyframes.
 * Optional cursor-reactive parallax on desktop (disabled on touch devices).
 */
const MistBackground = () => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // normalized 0-1
  const currentRef = useRef({ x: 0.5, y: 0.5 }); // smoothed

  useEffect(() => {
    // Skip parallax on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) return;

    const updateParallax = () => {
      const container = containerRef.current;
      if (container) {
        // Lerp toward target for smooth movement
        const lerp = 0.04;
        currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * lerp;
        currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * lerp;

        // Convert to px offset (±15px)
        const offsetX = (currentRef.current.x - 0.5) * 30;
        const offsetY = (currentRef.current.y - 0.5) * 30;

        container.style.setProperty('--parallax-x', `${offsetX}px`);
        container.style.setProperty('--parallax-y', `${offsetY}px`);
      }

      rafRef.current = requestAnimationFrame(updateParallax);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mist-container"
      aria-hidden="true"
      style={{
        '--parallax-x': '0px',
        '--parallax-y': '0px',
      }}
    >
      <div
        className="mist-blob mist-blob-1"
        style={{ translate: 'var(--parallax-x) var(--parallax-y)' }}
      />
      <div
        className="mist-blob mist-blob-2"
        style={{ translate: 'calc(var(--parallax-x) * -0.7) calc(var(--parallax-y) * -0.7)' }}
      />
      <div
        className="mist-blob mist-blob-3"
        style={{ translate: 'calc(var(--parallax-x) * 0.5) calc(var(--parallax-y) * -0.5)' }}
      />
      <div
        className="mist-blob mist-blob-4"
        style={{ translate: 'calc(var(--parallax-x) * -0.6) calc(var(--parallax-y) * 0.8)' }}
      />
      <div
        className="mist-blob mist-blob-5"
        style={{ translate: 'calc(var(--parallax-x) * 0.4) calc(var(--parallax-y) * 0.6)' }}
      />
    </div>
  );
};

export default MistBackground;
