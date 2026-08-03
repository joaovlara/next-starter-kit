"use client";

import React, { useState, useEffect } from "react";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { services } from "../_data/data";
import { ServiceCardPage } from "../_components/Cards/ServiceCardPage";
import { ServiceModal } from "../_components/Cards/ServiceModal";
import { StaggerContainer, StaggerItem } from "../_components/Animations/StaggerContainer";

export default function ServicosPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Escuta a hash da URL para abrir o modal correto
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveId(hash || null);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenModal = (id: string) => {
    setActiveId(id);
    window.history.pushState(null, "", `#${id}`);
  };

  const handleCloseModal = () => {
    setActiveId(null);
    window.history.pushState(null, "", window.location.pathname);
  };

  const activeService = services.find(
    (s) => (s.id || s.title.toLowerCase().replace(/\s+/g, "-")) === activeId,
  );

  return (
    <main className="min-h-screen">
      <HeaderPage />

      <section className="px-6">
        <div className="container-1 mx-auto p-0">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center mb-10">
            <span className="uppercase text-secondary font-semibold mb-1">
              O que oferecemos
            </span>
            <h2>Nossos Serviços Exclusivos</h2>
          </div>

          {/* Grid de Serviços */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.9}
          >
            {services.map((item) => {
              const serviceId =
                item.id || item.title.toLowerCase().replace(/\s+/g, "-");

              return (
                <StaggerItem key={serviceId}>
                  <ServiceCardPage
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    onClick={() => handleOpenModal(serviceId)}
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Modal de Detalhes */}
      <ServiceModal
        service={activeService}
        isOpen={!!activeService}
        onClose={handleCloseModal}
      />

      <CTA />
    </main>
  );
}
