import { diferenciais } from "@/src/app/_data/data";
import Image from "next/image";

interface DiferencialItem {
  title: string;
  description: string;
}

export default function Highlights() {
  return (
    <section className="p-6 lg:p-6 lg:py-8">
      {/* Container Principal: Carrossel Scroll no Mobile e Grid/Flex no Desktop */}
      <article className="lg:max-w-[90%] mx-auto flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-none lg:overflow-visible lg:flex-row rounded-2xl lg:rounded-bl-[100px] rounded-tr-[100px] lg:rounded-tr-2xl shadow-sm shadow-secondary-2 gap-6 lg:gap-0">
        {/* Bloco de Imagem e Titulo */}
        <div className="flex-none w-[85vw] max-w-[320px] lg:w-1/4 lg:max-w-none flex flex-col justify-center relative aspect-10/4 md:aspect-4/3 rounded-2xl lg:aspect-square overflow-hidden rounded-tr-[100px] lg:rounded-bl-[100px] snap-start">
          <Image
            src="/images/condominio.jpg"
            alt="nome"
            fill
            className="object-cover z-20"
          />
          {/* Camada de Gradiente */}
          <div className="absolute inset-0 z-30 bg-gradient-r-dark" />

          {/* Conteudo sobreposto */}
          <h2 className="p-4 lg:p-8 relative text-white z-50">
            Nossos <br /> Diferenciais
          </h2>
        </div>

        {/* Mapeamento direto dos Cards mantendo o fluxo no mesmo container de scroll */}
        <div className="contents lg:flex-1 lg:grid lg:grid-cols-3 lg:gap-6 lg:p-6">
          {diferenciais.map((item: DiferencialItem, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`highlight-card ${
                  isEven ? "highlight-card-primary" : "highlight-card-secondary"
                }`}
              >
                <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white mb-2 lg:mb-4 flex justify-center items-center rounded-full">
                  icon
                </div>
                <h3 className="font-semibold text-lg lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}