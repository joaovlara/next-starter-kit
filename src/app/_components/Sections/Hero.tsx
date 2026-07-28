"use client";

import { useState } from "react";
import { hero } from "../../_data/data";
import Image from "next/image";
import {
  BsBuildingCheck,
  BsShieldCheck,
  BsHouseHeart,
  BsKey,
} from "react-icons/bs";
import { motion, Variants } from "framer-motion";
import SplitText from "../Animations/SplitText";

const icons = [BsBuildingCheck, BsShieldCheck, BsHouseHeart, BsKey];

// Fade para parágrafo e botão
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

// 1. Container para os ícones controlarem o tempo de entrada (Stagger)
const iconGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6,
    },
  },
};

// 2. Animação de "Pop-up" (Pop in / Bounce) de cada ícone
const popUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0 }, // Começa invisível e tamanho 0
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300, // Força da mola
      damping: 15, // Quanto maior, menos balança ao parar
    },
  },
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="px-6 md:p-0">
      <article className="container-1 relative overflow-hidden rounded-b-[70px] md:h-[70vh] h-[80vh] bg-gradient-t-dark b-shadow-secondary">
        {/* Imagem de Fundo com Fade-In */}
        <Image
          src="/images/condominio.jpg"
          alt="Imagem de fundo da seção Hero"
          fill
          priority
          onLoad={() => setIsLoaded(true)}
          className={`object-cover -z-10 transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-60" : "opacity-0"
          }`}
        />

        {/* Conteúdo sobreposto */}
        <div className="p-6 md:p-12 flex flex-col justify-between h-full relative z-10">
          {/* Ícones com Animação Pop-Up em Sequência */}
          <motion.div
            className="flex space-x-3"
            variants={iconGroupVariants}
            initial="hidden"
            animate="visible"
          >
            {icons.map((Icon, index) => (
              <motion.span
                key={index}
                variants={popUpVariants}
                className="bg-dark border-2 border-secondary rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
              >
                <Icon className="text-xl text-secondary" />
              </motion.span>
            ))}
          </motion.div>

          {/* Texto e Ação */}
          <div className="flex flex-col lg:flex-row w-full justify-between space-y-6 gap-1">
            <div>
              <h1>
                <SplitText text={hero.h1} delay={0.18} />
              </h1>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text text-2xl md:text-3xl">{hero.text}</p>
              </motion.div>
            </div>
            <div className="flex flex-col-reverse">
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href={hero.link} className="btn-hero inline-flex">
                  Saiba mais
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
