"use client";

import { infos } from "@/src/app/_data/data";
import Image from "next/image";
import ShinyText from "../Animations/ShinyText";

export default function CTA() {
  return (
    // Usa clip-path para criar o contêiner de corte do parallax
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

      {/* Conteúdo da Seção */}
      <article className="container-1 w-full flex flex-col justify-between space-y-6 relative z-10">
        <div className="space-y-3">
          <p className="cta-tag">CTA</p>
          <h3 className="h1">
            <ShinyText text="ShinyText" />
          </h3>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="btn-cta w-full md:w-70">Fale Conosco</button>
        </div>
      </article>
    </section>
  );
}