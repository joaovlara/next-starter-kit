import { diferenciais } from "@/src/app/_data/data";
import Image from "next/image";

export default function Highlights() {
  return (
    <section className="">
      <article className="container-1 carousel md:p-0 gap-6">
        <div className="highlight-card-banner bg-gradient-t-dark">
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
            <div key={index} className="highlight-card-item b-shadow-secondary">
              {IconComponent && (
                <IconComponent size={32} className="text-secondary" />
              )}
              <h3 className="">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <span className="text-xs text-secondary pt-3">0{index + 1}</span>
            </div>
          );
        })}
      </article>
    </section>
  );
}
