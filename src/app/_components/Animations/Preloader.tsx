'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../../_context/LoadingContext'; 

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { finishPreloader } = useLoading();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const curtainTransition = {
    duration: 0.7,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
          {/* Cortina Esquerda */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={curtainTransition}
            onAnimationStart={finishPreloader} 
            className="absolute top-0 left-0 w-1/2 h-full z-10"
            style={{ backgroundColor: 'var(--color-dark)' }}
          />

          {/* Cortina Direita */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={curtainTransition}
            className="absolute top-0 right-0 w-1/2 h-full z-10"
            style={{ backgroundColor: 'var(--color-dark)' }}
          />

          {/* Conteúdo do Preloader */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 flex flex-col justify-end h-full p-6 md:p-10"
          >
            {/* Spinner Duplo Centralizado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-20 h-20">
                {/* Spinner Fora: Primary (Sentido Horário) */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
                  style={{
                    borderColor: 'var(--color-primary-2)',
                    borderTopColor: 'var(--color-primary)',
                    animationDuration: '1.2s',
                  }}
                />

                {/* Spinner Dentro: Secondary (Sentido Anti-Horário) */}
                <div
                  className="w-11 h-11 rounded-full border-4 border-b-transparent animate-[spin_0.8s_linear_infinite_reverse]"
                  style={{
                    borderColor: 'var(--color-neutral-dark)',
                    borderBottomColor: 'var(--color-secondary)',
                  }}
                />
              </div>
            </div>

            {/* Rodapé: Barra e Percentual */}
            <div
              className="relative z-10 flex items-end justify-between border-t pt-4"
              style={{ borderColor: 'var(--color-neutral-dark)' }}
            >
              <div
                className="h-1.5 w-36 overflow-hidden rounded-full"
                style={{ backgroundColor: 'var(--color-neutral-dark)' }}
              >
                <div
                  className="h-full transition-all duration-100 ease-out rounded-full"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: 'var(--color-secondary)',
                  }}
                />
              </div>
              <span
                className="font-mono text-lg md:text-2xl font-bold tracking-tight"
                style={{ color: 'var(--color-secondary)' }}
              >
                {percent}%
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}