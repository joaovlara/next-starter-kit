"use client";

import { useState } from "react";
import { hero } from "../../_data/data";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SplitText from "../Animations/SplitText";

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

        {/* Conteúdo sobreposto alinhado na parte inferior */}
        <div className="p-6 md:p-12 flex flex-col justify-end h-full relative z-10">
          {/* Texto e Ação */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-end gap-6">
            <div className="flex-1">
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

            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
