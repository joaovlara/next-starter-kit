import React from "react";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";

export default function Servicos() {
  return (
    <main>
      <HeaderPage />
      <section className="px-6">
        <article className="container-1 bg-gray-200">
          Serviços
        </article>
        <CTA />
      </section>
    </main>
  );
}
