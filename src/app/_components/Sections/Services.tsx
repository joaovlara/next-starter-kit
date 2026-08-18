import { services } from "../../_data/data";
import { ServiceCard } from "../Cards/ServiceCard";
import { StaggerContainer, StaggerItem } from "../Animations/StaggerContainer";

export default function Services() {
  return (
    <section className="md:py-9">
      <StaggerContainer
        className="md:p-0 container-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-3 gap-6 p-6"
        staggerDelay={0.3}
      >
        <div className="md:h-80 flex items-end justify-start md:px-3">
          <h2 className="lg:text-5xl">
            NOSSOS <br className="hidden lg:block" /> SERVIÇOS
          </h2>
        </div>

        {services.map((item) => (
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
