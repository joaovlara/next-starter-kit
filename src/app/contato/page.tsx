"use client";

import Image from "next/image";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { contato, contactHeader } from "../_data/data";
import {
  StaggerContainer,
  StaggerItem,
} from "../_components/Animations/StaggerContainer";

export default function ContatoPage() {
  return (
    <main>
      <HeaderPage title={contactHeader.title} text={contactHeader.text} />

      <section className="px-6">
        <StaggerContainer
          className="container-1 grid md:grid-cols-2 mb-6 gap-6 md:gap-0"
          staggerDelay={0.2}
        >
          <StaggerItem className="flex flex-col gap-3 w-full md:text-left bg-primary-2 p-6 rounded md:rounded-r-none">
            <h3 className="h2">{contactHeader.contactTitle}</h3>
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

          <StaggerItem className="flex items-center justify-center p-0 md:p-0 bg-primary-2/20 rounded md:rounded-l-none overflow-hidden min-h-87">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.1071594579552!2d-46.63487143037172!3d-23.588955669631726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b073afcaf%3A0xff22529e97137990!2sAv.%20Lins%20de%20Vasconcelos%2C%203464%20-%20Sl%2051%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004112-002!5e0!3m2!1spt-BR!2sbr!4v1785787987733!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-87 border-0"
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
