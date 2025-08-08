// src/components/TechBackground.jsx
import { motion } from 'framer-motion';
import React, { memo } from 'react';

const SCAN_KEYFRAMES = {
  backgroundPosition: [
    '0% 0%',
    '100% 100%',
    '0% 200%',
    '200% 0%',
  ],
};

const GRID_KEYFRAMES = {
  backgroundPosition: ['0px 0px', '40px 40px'],
};

const PARTICLE_VARIANT = {
  initial: ({ x, y, delay }) => ({
    x,
    y,
    opacity: 0,
    scale: 0.6,
    transition: { delay },
  }),
  animate: {
    opacity: [0, 0.8, 0],
    scale: [0.6, 1, 0.6],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const NUM_PARTICLES = 30;

/* 
 * Renders three layers:
 * 1. “Circuit” scan-line gradient that slowly sweeps.
 * 2. Grid pattern that drifts diagonally.
 * 3. Floating “particles” (blurred dots) for extra depth.
 */
const TechBackground = ({ isDark }) => {
  const particleArray = Array.from({ length: NUM_PARTICLES });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Layer 1 — animated scan-line gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            isDark
              ? 'linear-gradient(135deg,#1a202c15 25%,transparent 25%),linear-gradient(225deg,#1a202c15 25%,transparent 25%),linear-gradient(45deg,#1a202c15 25%,transparent 25%),linear-gradient(315deg,#1a202c15 25%,#262f3f 25%)'
              : 'linear-gradient(135deg,#ffffff12 25%,transparent 25%),linear-gradient(225deg,#ffffff12 25%,transparent 25%),linear-gradient(45deg,#ffffff12 25%,transparent 25%),linear-gradient(315deg,#ffffff12 25%,#f2f5f9 25%)',
          backgroundSize: '64px 64px',
        }}
        animate={SCAN_KEYFRAMES}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* Layer 2 — thin drifting grid */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        animate={GRID_KEYFRAMES}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* Layer 3 — floating blurred particles */}
      {particleArray.map((_, i) => {
        // random starting coordinates
        const x = Math.random() * window.innerWidth * 0.8 - 100;
        const y = Math.random() * window.innerHeight * 0.8 - 100;
        const delay = Math.random() * 8;
        return (
          <motion.span
            key={`p-${i}`}
            className="absolute block rounded-full"
            style={{
              width: 8,
              height: 8,
              background:
                isDark ? 'rgba(99, 230, 255,0.7)' : 'rgba(99, 102, 241,0.7)',
              filter: 'blur(4px)',
            }}
            custom={{ x, y, delay }}
            variants={PARTICLE_VARIANT}
            initial="initial"
            animate="animate"
          />
        );
      })}
    </div>
  );
};

export default memo(TechBackground);
