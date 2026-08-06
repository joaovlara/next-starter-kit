"use client";

import { cta } from "../../_data/data";
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
      delay: 0.9,
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

      <article className="container-1 w-full flex flex-col justify-between relative z-10">
        <div className="space-y-6">

          <h3 className="text-3xl upp md:text-5xl">
            <SplitText text={cta.h2} delay={0.3} />
          </h3>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href={cta.linkCta} className="btn-cta w-full md:w-70 inline-flex justify-center">
              {cta.buttonLabel}
            </a>
          </motion.div>
        </div>
      </article>
    </section>
  );
}
