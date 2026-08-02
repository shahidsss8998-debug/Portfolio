import { useRef } from 'react';
import { useInView, useAnimation } from 'motion/react';
import { useEffect } from 'react';

/**
 * useScrollReveal — Custom hook for scroll-triggered animations.
 * 
 * Returns a ref to attach to the element, animation controls, and inView state.
 * Triggers animation once when element enters viewport.
 * 
 * @param {Object} options
 * @param {number} options.amount - How much of the element must be visible (0-1). Default: 0.2
 * @param {string} options.margin - Root margin for earlier/later triggering. Default: '0px'
 * @param {boolean} options.once - Whether to only trigger once. Default: true
 */
export function useScrollReveal({ amount = 0.2, margin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount,
    margin,
    once,
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
}

/**
 * Checks if the user prefers reduced motion.
 * Used to disable animations for accessibility.
 */
export function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}
