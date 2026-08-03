'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const curtainTransition = (delay = 0) => ({
    duration: 0.55,
    delay,
    ease: [0.76, 0, 0.24, 1] as const,
  });

  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={curtainTransition(0.12)}
        className="fixed top-0 left-0 w-1/2 h-full z-40 pointer-events-none"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={curtainTransition(0.12)}
        className="fixed top-0 right-0 w-1/2 h-full z-40 pointer-events-none"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={curtainTransition(0.06)}
        className="fixed top-0 left-0 w-1/2 h-full z-[41] pointer-events-none"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={curtainTransition(0.06)}
        className="fixed top-0 right-0 w-1/2 h-full z-[41] pointer-events-none"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={curtainTransition(0)}
        className="fixed top-0 left-0 w-1/2 h-full z-[42] pointer-events-none"
        style={{ backgroundColor: 'var(--color-dark)' }}
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={curtainTransition(0)}
        className="fixed top-0 right-0 w-1/2 h-full z-[42] pointer-events-none"
        style={{ backgroundColor: 'var(--color-dark)' }}
      />
      {children}
    </>
  );
}