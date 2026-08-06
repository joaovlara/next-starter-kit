import { highlights } from "../../_data/data";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "../Animations/StaggerContainer";

export default function Highlights() {
  return (
    <section className="">
      <StaggerContainer
        className="carousel mx-auto md:max-w-[90%]"
        staggerDelay={0.2}
      >
        {/* Banner Principal */}
        <StaggerItem className="highlight-card-banner bg-gradient-t-dark relative">
          <Image
            src="/images/diferencial-image.jpg"
            alt="Foto do condomínio"
            fill
            className="object-cover -z-10 opacity-60"
            sizes="(max-width: 768px)"
          />
          <h2 className="z-20">
            Nossos <br /> Diferenciais
          </h2>
        </StaggerItem>

        {/* Mapeamento dos Cards */}
        {highlights.slice(0, 3).map((item, index) => {
          const IconComponent = item.icon;
          return (
            <StaggerItem
              key={index}
              className="highlight-card-item b-shadow-primary"
            >
              {IconComponent && (
                <IconComponent size={24} className="text-secondary-2/80" />
              )}
              <h3>{item.title}</h3>
              <p className="text-sm line-clamp-3">{item.description}</p>{" "}
              <span className="text-xs text-secondary/70 pt-3">0{index + 1}</span>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
