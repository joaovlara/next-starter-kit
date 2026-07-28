"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";

// Variantes para entrada da esquerda
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Variantes para entrada da direita
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Sobre() {
  return (
    <main className="overflow-x-hidden">
      <HeaderPage/>

      <section className="px-6 py-12">
        <article className="container-1 flex flex-col gap-16">
          {/* Primeira Linha: Texto na esquerda (vem da esq), Imagem na direita (vem da dir) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3"
            >
              <h2>Título da Primeira Seção</h2>
              <p className="text">
                Descrição do texto para a primeira seção. Explique a história ou
                propósito da empresa de maneira engajadora.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center"
            >
              <Image
                src="/images/image 9.png"
                alt="Descrição da imagem 1"
                width={500}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Segunda Linha: Imagem na esquerda (vem da esq) / Texto na direita (vem da dir) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-2 md:order-1 flex justify-center"
            >
              <Image
                src="/images/image 9.png"
                alt="Descrição da imagem 2"
                width={500}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 md:order-2 space-y-3"
            >
              <h2>Título da Segunda Seção</h2>
              <p className="text">
                Descrição do texto para a segunda seção. Destaque os diferenciais
                ou a visão de futuro da empresa.
              </p>
            </motion.div>
          </div>
        </article>
      </section>

      <CTA />
    </main>
  );
}