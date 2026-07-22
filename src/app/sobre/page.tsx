import React from "react";
import Image from "next/image";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";

export default function Sobre() {
  return (
    <main>
      <HeaderPage />
      <section className="px-6 text-white">
        <article className="container-1 flex flex-col gap-8">
          {/* Primeira Linha: Texto na esquerda, Imagem na direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h2>Título da Primeira Seção</h2>
              <p>Descrição do texto para a primeira seção.</p>
            </div>
            <div>
              <Image
                src="/images/image 9.png"
                alt="Descrição da imagem 1"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Segunda Linha: Imagem na esquerda (desktop) / Texto primeiro (mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/image 9.png"
                alt="Descrição da imagem 2"
                width={500}
                height={300}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2>Título da Segunda Seção</h2>
              <p>Descrição do texto para a segunda seção.</p>
            </div>
          </div>
        </article>
      </section>
      <CTA />
    </main>
  );
}
