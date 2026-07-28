"use client";

import Image from "next/image";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { social } from "../_data/data";
import { StaggerContainer, StaggerItem,} from "../_components/Animations/StaggerContainer";

export default function ContatoPage() {
  return (
    <main>
      <HeaderPage
        title="Entre em Contato"
        text="Estamos prontos para atende-lo. Escolha o canal de sua preferência ou agende uma reunião."
      />

      <section className="px-6">
        <StaggerContainer
          className="container-1 grid md:grid-cols-2 mb-6 gap-6 md:gap-0"
          staggerDelay={0.2}
        >
          <StaggerItem className="flex flex-col gap-3 w-full md:text-left bg-primary-2 p-6 rounded-2xl md:rounded-r-none">
            <h3 className="h2">Contato</h3>
            <StaggerContainer
              className="flex flex-col gap-6 mt-2"
              staggerDelay={0.1}
            >
              {social.map((item) => {
                const Icon = item.icon;

                return (
                  <StaggerItem key={item.name}>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 border-b border-primary pb-2 hover:opacity-80 transition-opacity"
                    >
                      <div className="flex items-center justify-center rounded-full bg-primary p-2">
                        {Icon && <Icon aria-hidden="true" />}
                      </div>
                      <p>{item.name}</p>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </StaggerItem>

          <StaggerItem className="flex items-center justify-center p-6 bg-primary-2/20 rounded-2xl md:rounded-l-none">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </StaggerItem>
        </StaggerContainer>
      </section>

      <CTA />
    </main>
  );
}
