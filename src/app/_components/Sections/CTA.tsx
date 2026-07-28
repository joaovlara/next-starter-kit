"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SplitText from "../Animations/SplitText";

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
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

export default function CTA() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center p-6 overflow-hidden [clip-path:inset(0)]">
      {/* Imagem Fixa de Fundo */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src="/images/condominio.jpg"
          alt="Condomínio"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <article className="container-1 w-full flex flex-col justify-between space-y-6 relative z-10">
        <div className="space-y-3">
          <p className="cta-tag">CTA</p>

          <h3 className="h1">
            <SplitText text="Lorem Ipsum is simply dummy text" delay={0.18} />
          </h3>

          <p className="text">
            <SplitText
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              delay={0.28}
            />
          </p>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <button className="btn-cta w-full md:w-70">Fale Conosco</button>
          </motion.div>
        </div>
      </article>
    </section>
  );
}
