"use client";

import Image from "next/image";
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

export default function DownloadApp({}: DownloadAppProps) {
  return (
    <section className="download-section-container bg-texture-pattern relative overflow-hidden">
      <article className="container-1 relative z-10 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Seção Esquerda: Conteúdo de Texto */}
          <div className="relative space-y-3 text-center md:text-left p-3 lg:p-0 z-10">
            <h2 className="text-3xl md:text-4xl">
              <SplitText text={downloadApp.title} delay={0.18} />
            </h2>
            <div className="relative z-10">
              <p className="text">{downloadApp.text}</p>
            </div>
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
