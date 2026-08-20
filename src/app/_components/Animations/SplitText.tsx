"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  highlightClass?: string;
  secondaryHighlightClass?: string;
}

export default function SplitText({
  text = "",
  className = "",
  delay = 0.03,
  highlightClass = "text-primary-3",
  secondaryHighlightClass = "text-secondary-2",
}: SplitTextProps) {
  if (!text) return null;
  const chunks = text.split(/(\*.*?\*|#.*?#)/g);
  const words = chunks.flatMap((chunk) => {
    if (!chunk) return [];

    let currentClass = "";
    let cleanText = chunk;
    if (chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2) {
      currentClass = highlightClass;
      cleanText = chunk.slice(1, -1);
    } 
    else if (chunk.startsWith("#") && chunk.endsWith("#") && chunk.length > 4) {
      currentClass = secondaryHighlightClass;
      cleanText = chunk.slice(2, -2);
    }
    const wordsInChunk = cleanText.split(/\s+/).filter(Boolean);

    return wordsInChunk.map((word) => ({
      text: word,
      className: currentClass,
    }));
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((wordObj, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] whitespace-nowrap ${wordObj.className}`}
        >
          {wordObj.text}
        </motion.span>
      ))}
    </motion.span>
  );
}