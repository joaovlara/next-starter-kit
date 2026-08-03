"use client";

import { useState } from "react";
import { hero } from "../../_data/data";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SplitText from "../Animations/SplitText";
import { useLoading } from "../../_context/LoadingContext"; 

// Fade para o parágrafo (delay curto após a cortina abrir)
const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3, // Dispara 0.3s após a cortina começar a abrir
    },
  },
};

// Fade para o botão
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.9,
    },
  },
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isPreloaderFinished } = useLoading(); // Obtém o estado global

  return (
    <section className="px-6 md:p-0">
      <article className="container-1 relative overflow-hidden rounded-b-[70px] md:h-[70vh] h-[80vh] bg-gradient-t-dark b-shadow-secondary">
        {/* Imagem de Fundo */}
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
        <div className="p-6 md:p-12 flex flex-col justify-end h-full relative z-10">
          <div className="flex flex-col lg:flex-row w-full justify-between items-end gap-6">
            <div className="flex-1">
              <h1>
                {/* O SplitText só inicia quando o Preloader libera */}
                {isPreloaderFinished ? (
                  <SplitText text={hero.h1} delay={0.1} />
                ) : (
                  <span className="opacity-0">{hero.h1}</span>
                )}
              </h1>
              
              <motion.div
                variants={paragraphVariants}
                initial="hidden"
                animate={isPreloaderFinished ? "visible" : "hidden"}
              >
                <p className="text text-2xl md:text-3xl">{hero.text}</p>
              </motion.div>
            </div>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isPreloaderFinished ? "visible" : "hidden"}
              className="w-full lg:w-auto"
            >
              <a href={hero.link} className="btn-hero inline-flex">
                Saiba mais
              </a>
            </motion.div>
          </div>
        </div>
      </article>
    </section>
  );
}