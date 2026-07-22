import React from "react";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { infos, servicos } from "@/src/app/_data/data";

export default function ServicosPage() {
  return (
    <main>
      <HeaderPage />
      <section className="px-6">
        <article className="container-1 grid md:grid-cols-3 gap-3 p-0">
          {servicos.map((item) => (
            <div
              id="usar um id para cada para a URL"
              key={item.title}
              className="bg-gray-200 w-full h-30 md:h-75"
            >
              {item.title} Card que abre e fecha
            </div>
          ))}
        </article>
      </section>
      <CTA />
    </main>
  );
}
