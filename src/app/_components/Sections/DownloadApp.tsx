"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import SplitText from "../Animations/SplitText";
import AnimatedSeparator from "../Animations/AnimatedSeparator";
import { downloadApp } from "../../_data/data";
import { MdArrowOutward } from "react-icons/md";

interface DownloadAppProps {
  title?: string;
  subtitle?: string;
  description?: string;
  appleLink?: string;
  googleLink?: string;
  appleQrText?: string;
  googleQrText?: string;
}

export default function DownloadApp({}: DownloadAppProps) {
  return (
    <section className="download-section-container bg-texture-pattern relative overflow-hidden">
      <article className="container-1 relative z-10 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Primeira Coluna: Textos com imagem de fundo */}
          <div className="relative space-y-3 text-left p-4 lg:p-0 z-10">
            {/* Imagem de Fundo Ajustada */}
            <Image
              src="/images/phone.png"
              alt="Padrão de fundo"
              fill
              className="absolute -z-10 md:object-left scale-125 md: md:scale-170 opacity-15"
            />

            <span className="block text-sm md:text-base font-semibold text-secondary uppercase tracking-widest relative z-10">
              {downloadApp.subtitle}
            </span>
            <h2 className="text-2xl md:text-5xl text-olive-200 relative z-10">
              <SplitText text={downloadApp.title} delay={0.18} />
            </h2>
            <div className="relative z-10">
              <p className="text max-w-xl">{downloadApp.description}</p>
            </div>
          </div>

          {/* Segunda Coluna: Grid Ajustado */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {/* --- LINHA 1: BOTÕES DE LINK (RETANGULARES) --- */}
              <a
                href={downloadApp.appleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-card"
                aria-label="Download App Store"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-olive-300">
                    Disponível na App Store
                  </span>
                </div>
                <MdArrowOutward className="text-xs text-olive-300" />
              </a>

              <a
                href={downloadApp.googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn-card"
                aria-label="Download Google Play"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-olive-300">
                    Disponível no Google Play
                  </span>
                </div>
                <MdArrowOutward className="text-xs text-olive-300" />
              </a>

              {/* --- LINHA 2: QR CODES (QUADRADOS) --- */}
              <div className="download-grid-card ">
                <Image
                  src={downloadApp.appleQrText}
                  alt="QR Code App Store"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="download-grid-card ">
                <Image
                  src={downloadApp.googleQrText}
                  alt="QR Code Google Play"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <AnimatedSeparator />
      </article>
    </section>
  );
}