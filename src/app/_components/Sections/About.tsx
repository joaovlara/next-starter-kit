"use client";

import { about } from "../../_data/data";
import { motion, Variants } from "framer-motion";
import SplitText from "../Animations/SplitText";
import AnimatedSeparator from "../Animations/AnimatedSeparator";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 1.2,
    },
  },
};

export default function About() {
  return (
    <section className="min-h-[35vh] flex items-center justify-center p-6">
      <article className="container-1 text-center space-y-3">
        <h2 className="h1">
          <SplitText text={about.h2} delay={0.18} />
        </h2>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text text-xl upper mb-12">{about.text}</p>
        </motion.div>
        <AnimatedSeparator />
      </article>
    </section>
  );
}
