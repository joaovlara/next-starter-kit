"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaApple, FaGooglePlay, FaQrcode } from "react-icons/fa6";
import SplitText from "../Animations/SplitText";
import AnimatedSeparator from "../Animations/AnimatedSeparator";
import { downloadApp } from "../../_data/data";

interface DownloadAppProps {
  title?: string;
  subtitle?: string;
  description?: string;
  appleLink?: string;
  googleLink?: string;
  appleQrText?: string;
  googleQrText?: string;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function DownloadApp({}: DownloadAppProps) {
  return (
    <section className="download-section-container bg-texture-pattern">
      <article className="container-1 relative z-10 w-full space-y-12">        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Primeira Coluna: Textos */}
          <div className="space-y-4 text-left">
            <span className="block text-sm md:text-base font-semibold text-secondary uppercase tracking-widest">
              {downloadApp.subtitle}
            </span>
            <h2 className="text-2xl md:text-5xl text-olive-200">
              <SplitText text={downloadApp.title} delay={0.18} />
            </h2>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text max-w-xl">{downloadApp.description}</p>
            </motion.div>
          </div>

          {/* Segunda Coluna: Grid 2x2 */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="download-grid-2x2">
              {/* Item 1: Botão App Store */}
              <a
                href={downloadApp.appleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-card"
                aria-label="Download App Store"
              >
                <span className="block text-xs uppercase text-olive-300">
                  Disponível na <br /> App Store
                </span>
              </a>

              {/* Item 2: QR Code App Store */}
              <div className="download-grid-card">
                <Image
                  src={downloadApp.appleQrText}
                  alt="QR Code App Store"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Item 3: Botão Google Play */}
              <a
                href={downloadApp.googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-card"
                aria-label="Download Google Play"
              >
                <span className="block text-xs uppercase text-olive-300">
                  Disponível no <br /> Google Play
                </span>
              </a>

              {/* Item 4: QR Code Google Play */}
              <div className="download-grid-card">
                <Image
                  src={downloadApp.googleQrText}
                  alt="QR Code Google Play"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <AnimatedSeparator />
      </article>
    </section>
  );
}
