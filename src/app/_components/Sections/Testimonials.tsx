"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../Animations/StaggerContainer";

const testimonialsData = [
  {
    id: 1,
    nome: "Carlos Eduardo",
    funcao: "Proprietário",
    depoimento:
      "A experiência de morar neste condomínio superou todas as nossas expectativas. O acabamento e a segurança são de primeiríssima qualidade.",
    imagem: "/images/avatars/user1.jpg",
  },
  {
    id: 2,
    nome: "Mariana Siqueira",
    funcao: "Moradora",
    depoimento:
      "A tranquilidade do local aliada à estrutura completa de lazer fez toda a diferença para o bem-estar da minha família.",
    imagem: "/images/avatars/user2.jpg",
  },
  {
    id: 3,
    nome: "Roberto & Ana",
    funcao: "Investidores",
    depoimento:
      "Excelente valorização e gestão extremamente profissional. Todo o suporte oferecido pela equipe passa total confiança.",
    imagem: "/images/avatars/user3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <article className="container-1 max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold mb-1">
            Depoimentos
          </span>
          <h2>O que dizem sobre nós</h2>
        </div>

        {/* Grid Centralizado de Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-stretch"
          staggerDelay={0.15}
        >
          {testimonialsData.map((item) => (
            <StaggerItem
              key={item.id}
              className="group relative bg-soft-dark p-5 flex flex-col items-center text-center justify-between transition-all duration-300 max-w-sm mx-auto w-full b-shadow-primary-2"
            >
              {/* Ícone de Aspas */}
              <div className="mb-2 flex justify-center">
                <Quote className="w-6 h-6 text-secondary/40 transition-colors duration-300" />
              </div>

              {/* Depoimento */}
              <p className="text-olive-300 text-xs md:text-sm leading-relaxed mb-4 italic">
                "{item.depoimento}"
              </p>

              {/* Autor do Depoimento (Em Linha) */}
              <div className="flex flex-row items-center justify-center gap-3 pt-3 border-t border-primary/30 w-full">
                <div className="relative w-9 h-9 rounded-full overflow-hidden  shrink-0">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="w-full h-full bg-primary-2 flex items-center justify-center font-bold text-xs">
                    {item.nome.charAt(0)}
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <h4 className="font-semibold text-olive-300 text-sm leading-snug">
                    {item.nome}
                  </h4>
                  <span className="text-[11px] text-secondary/80">
                    {item.funcao}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </article>
    </section>
  );
}
