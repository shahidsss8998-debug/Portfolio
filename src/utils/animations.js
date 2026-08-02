/**
 * Ethereal Mist — Shared Animation Variants
 * 
 * All variants use organic, decelerate easing and blur-to-sharp transitions
 * to create the "condensing from mist" aesthetic.
 */

// Smooth decelerate easing — feels organic and natural
const mistEasing = [0.16, 1, 0.3, 1];

/**
 * Condense from mist — element starts blurred and faint, resolves to crisp.
 * Used for: hero text, section headers, general scroll reveals.
 */
export const mistCondense = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.8,
      ease: mistEasing,
    },
  },
};

/**
 * Slide in from left/right with blur — element glides in horizontally.
 * Used for: project cards, split-layout reveals.
 * Pass `custom` = 'left' | 'right' to control direction.
 */
export const mistSlideIn = {
  hidden: (direction = 'left') => ({
    opacity: 0,
    filter: 'blur(10px)',
    x: direction === 'left' ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    x: 0,
    transition: {
      duration: 0.7,
      ease: mistEasing,
    },
  },
};

/**
 * Disperse from mist — element scales up from slightly smaller with blur.
 * Used for: tech stack pills, skill icons, social icons.
 */
export const mistDisperse = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.5,
      ease: mistEasing,
    },
  },
};

/**
 * Stagger container — parent variant that staggers children.
 * Used as parent wrapper around groups of animated elements.
 */
export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Fade up — simpler variant for less prominent elements.
 * Used for: footer, less critical content.
 */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: mistEasing,
    },
  },
};

/**
 * Draw line — for timeline/separator animations.
 * Animates scaleY from 0 to 1.
 */
export const drawLine = {
  hidden: {
    scaleY: 0,
    originY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: mistEasing,
    },
  },
};

/**
 * Draw horizontal line — for separator animations.
 * Animates scaleX from 0 to 1 (from center).
 */
export const drawLineHorizontal = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: mistEasing,
    },
  },
};

/**
 * Pulse glow — for timeline dots and indicators.
 */
export const pulseGlow = {
  initial: {
    boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.4)',
  },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(168, 85, 247, 0.4)',
      '0 0 0 8px rgba(168, 85, 247, 0)',
      '0 0 0 0 rgba(168, 85, 247, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};
