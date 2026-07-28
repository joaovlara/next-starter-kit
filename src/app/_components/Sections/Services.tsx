import { servicos } from "@/src/app/_data/data";
import { ServiceCard } from "../Cards/ServiceCard";
import { StaggerContainer, StaggerItem } from "../Animations/StaggerContainer";

export default function Services() {
  return (
    <section className="md:py-9">

      <StaggerContainer
        className="md:p-0 container-1 grid md:grid-cols-4 md:gap-3 gap-6 p-6"
        staggerDelay={0.30}
      >
          <div className="md:h-80 flex items-end justify-start md:px-3">
            <h2>
              NOSSOS <br className="hidden md:block" /> SERVIÇOS
            </h2>
          </div>

        {/* Mapeamento dos Cards de Serviço */}
        {servicos.map((item) => (
          <StaggerItem key={item.id}>
            <ServiceCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
