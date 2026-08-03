"use client";

import { motion, Variants } from "framer-motion";
import SplitText from "./Animations/SplitText";
import AnimatedSeparator from "./Animations/AnimatedSeparator";

interface HeaderPageProps {
  title?: string;
  text?: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

const DEFAULT_TITLE = "Header Title";
const DEFAULT_TEXT =
  "Lorem, ipsum udiandae quod repellat. Ququaerat expedita, ea ratione omnis itaque?";

export default function HeaderPage({
  title = DEFAULT_TITLE,
  text = DEFAULT_TEXT,
}: HeaderPageProps) {
  return (
    <section className="p-6">
      <article className="container-1">
        <div className="p-6 space-y-3">
          {/* Título com animação SplitText */}
          <h1 className="md:text-6xl">
            <SplitText text={title} delay={0.12} />
          </h1>

          {/* Parágrafo com animação Fade-In */}
          <motion.p
            className="text"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        </div>
        <AnimatedSeparator direction="center" />
      </article>
    </section>
  );
}
