"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { aboutHeader } from "../_data/data";
import Testimonials from "../_components/Sections/Testimonials";

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
      <HeaderPage title={aboutHeader.h1} text={aboutHeader.text} />

      <section className="px-6 py-12">
        <article className="container-1 flex flex-col gap-16">
          {/* Primeira Linha: Texto na esquerda (vem da esq), Imagem na direita (vem da dir) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3 bg-texture-pattern"
            >
              <h2>{aboutHeader.section1Title}</h2>
              <p className="text">{aboutHeader.section1Text}</p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center"
            >
              <Image
                src={aboutHeader.image1path}
                alt={aboutHeader.image1Alt}
                width={500}
                height={300}
                className="rounded shadow-lg"
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
                src={aboutHeader.image2path}
                alt={aboutHeader.image2Alt}
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 md:order-2 space-y-3 bg-texture-pattern"
            >
              <h2>{aboutHeader.section2Title}</h2>
              <p className="text">{aboutHeader.section2Text}</p>
            </motion.div>
          </div>
        </article>
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
