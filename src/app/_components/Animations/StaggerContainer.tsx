"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // Tempo entre a aparição de cada filho em segundos
  yOffset?: number; // Distância vertical do efeito de entrada
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

// Configuração flexível do container
const getContainerVariants = (staggerDelay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

// Configuração individual do item
const getItemVariants = (yOffset: number): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.2,
  yOffset = 30,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={getContainerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Passamos o yOffset para o contexto dos itens via custom prop ou inline */}
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  // Variantes padrão do item (pode ajustar o yOffset se desejar)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}