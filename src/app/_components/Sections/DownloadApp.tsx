"use client";

import Image from "next/image";
import SplitText from "../Animations/SplitText";
import { motion, Variants } from "framer-motion";
import AnimatedSeparator from "../Animations/AnimatedSeparator";
import { downloadApp } from "../../_data/data";

// Variantes de animação de fade in para o Framer Motion
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

export default function DownloadApp() {
  return (
    <section className="download-section-container bg-texture-pattern relative overflow-hidden">
      <article className="container-1 relative z-10 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Seção Esquerda: Conteúdo de Texto */}
          <div className="relative space-y-3 text-center md:text-left p-3 lg:p-0 z-10">
            <h2 className="text-xl md:text-5xl">
              <SplitText text={downloadApp.title} delay={0.18} />
            </h2>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <p className="text-sm">{downloadApp.text}</p>
              </div>
            </motion.div>
          </div>

          {/* Seção Direita: Container da Imagem do Celular */}
          <div className="download-phone-wrapper">
            <Image
              src="/images/phone.png"
              alt="Visualização do aplicativo"
              width={500}
              height={800}
              className="download-phone-image"
              priority
            />
          </div>
        </div>
        <AnimatedSeparator />
      </article>
    </section>
  );
}
