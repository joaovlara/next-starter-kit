"use client";

import Image from "next/image";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { contato } from "../_data/data";
import {
  StaggerContainer,
  StaggerItem,
} from "../_components/Animations/StaggerContainer";

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
          <StaggerItem className="flex flex-col gap-3 w-full md:text-left bg-primary-2 p-6 rounded md:rounded-r-none">
            <h3 className="h2">Contato</h3>
            <StaggerContainer
              className="flex flex-col gap-6 mt-2"
              staggerDelay={0.1}
            >
              {contato.map((item) => {
                const Icon = item.icon;

                return (
                  <StaggerItem key={item.name}>
                    <a
                      href={item.value}
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

          <StaggerItem className="flex items-center justify-center p-0 md:p-0 bg-primary-2/20 rounded md:rounded-l-none overflow-hidden min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.428741134916!2d-46.636807988423655!3d-23.58895196251926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ba6ffbb574d%3A0x12ec02b378a4ad62!2sSP%20CONDO%20COBRAN%C3%87AS%20GARANTIDAS%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1785343292483!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[350px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <CTA />
    </main>
  );
}
