"use client";

import { motion } from "framer-motion";

interface AnimatedSeparatorProps {
  className?: string;
  duration?: number;
  delay?: number;
  direction?: "left" | "right" | "center";
}

export default function AnimatedSeparator({
  className = "separador",
  duration = 0.8,
  delay = 0.2,
  direction = "left",
}: AnimatedSeparatorProps) {
  // Define o ponto de origem da expansão da linha
  const originClass = {
    left: "origin-left",
    right: "origin-right",
    center: "origin-center",
  }[direction];

  return (
    <motion.hr
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration,
        ease: "easeInOut",
        delay,
      }}
      className={`${className} ${originClass}`}
    />
  );
}