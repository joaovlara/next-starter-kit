"use client";

import { getApp } from "../../_data/data";
import { motion, Variants } from "framer-motion";
import AnimatedSeparator from "../Animations/AnimatedSeparator";

// Animação para a frase "Baixe o nosso App"
const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Container pai dos botões para gerenciar o stagger
const buttonGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Intervalo entre os botões
      delayChildren: 0.2, // Pequeno atraso após a frase aparecer
    },
  },
};

// Animação individual dos botões + Interação de Hover
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function GetApp() {
  return (
    <section className="px-6 pt-0 md:p-0">
      <article className="container-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6">
          {/* Texto surgindo da esquerda */}
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text uppercase font-semibold"
          >
            Baixe o nosso App
          </motion.p>

          {/* Grupo de botões em sequência */}
          <motion.div
            variants={buttonGroupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-3"
          >
            {getApp.map((item) => {
              const IconComponent = item.icon;

              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  variants={buttonVariants}
                  whileTap={{ scale: 0.98 }}
                  className="btn-app flex justify-center items-center transition-shadow"
                >
                  {IconComponent ? <IconComponent className="mr-2" /> : null}
                  {item.name}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <AnimatedSeparator />
      </article>
    </section>
  );
}
