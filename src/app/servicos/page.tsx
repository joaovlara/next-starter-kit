import React from "react";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { infos, servicos } from "@/src/app/_data/data";
import { ServiceCardPage } from "../_components/Cards/ServiceCardPage";

export default function ServicosPage() {
  return (
    <main>
      <HeaderPage />
      <section className="p-6">
        <article className="container-1 grid md:grid-cols-3 gap-3 p-0">
          {servicos.map((item) => (
            <ServiceCardPage
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </article>
      </section>
      <CTA />
    </main>
  );
}
