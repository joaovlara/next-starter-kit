import { diferenciais } from "@/src/app/_data/data";
import Image from "next/image";

export default function Highlights() {
  return (
    <section className="">
      <article className="container-1 carousel">
        <div className="relative min-w-[80vw] sm:min-w-[50vw] md:min-w-0 aspect-square snap-center overflow-hidden flex items-end p-6">
          <Image
            src="/images/condominio.jpg"
            alt="Foto do condomínio"
            fill
            className="object-cover -z-10 opacity-60"
            sizes="(max-width: 768px)"
          />
          {/* Texto sobreposto */}
          <h2 className="relative z-20">
            Nossos <br /> Diferenciais
          </h2>
        </div>

        {/* Mapeamento das outras 3 colunas (Cards) */}
        {diferenciais.slice(0, 3).map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="min-w-[80vw] sm:min-w-[50vw] md:min-w-0 aspect-square snap-center bg-neutral p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {IconComponent && <IconComponent size={32} />}
                <h3 className="">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <span className="text-xs">0{index + 1}</span>
            </div>
          );
        })}
      </article>
    </section>
  );
}
