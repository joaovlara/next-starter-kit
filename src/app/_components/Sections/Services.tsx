import { infos, servicos } from "@/src/app/_data/data";
import { ServiceCard } from "../Cards/ServiceCard";

export default function Services() {
  return (
    <section className="md:py-9">
      <article className="md:p-0 container-1 grid md:grid-cols-4 md:gap-3 gap-6 p-6">
        {/* Bloco de Titulo */}
        <div className="md:h-80 flex items-end justify-start md:px-3">
          <h2 className="h1">
            NOSSOS <br className="hidden md:block" /> SERVIÇOS
          </h2>
        </div>

        {/* Mapeamento dos Cards de Servico */}
        {servicos.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </article>
    </section>
  );
}
