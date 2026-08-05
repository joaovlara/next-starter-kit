"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "../../_data/data";
import { StaggerContainer, StaggerItem } from "../Animations/StaggerContainer";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden pb-9">
      <article className="container-1 max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold mb-1">
            {testimonials.eyebrow}
          </span>
          <h2>{testimonials.title}</h2>
        </div>

        {/* Grid Centralizado de Cards */}
        <StaggerContainer
          className="carousel mx-auto md:max-w-[90%] md:grid md:grid-cols-3 md:justify-center md:items-stretch md:overflow-visible md:gap-5 md:py-0"
          staggerDelay={0.15}
        >
          {testimonials.items.map((item) => (
            <StaggerItem
              key={item.id}
              className="testimonial-card-item group relative bg-soft-dark p-6 md:p-7 flex flex-col items-center text-center justify-between transition-all duration-300 md:max-w-[30rem] mx-auto w-full min-h-[280px] md:min-h-[300px] b-shadow-primary-2"
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
