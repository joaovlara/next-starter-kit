"use client";

import { ServiceCard } from "../_components/Cards/ServiceCard";
import { services } from "../_data/data";
import ShinyText from "../_components/Animations/ShinyText";
import Grainient from "../_components/Animations/Grainient";
import HeaderPage from "../_components/HeaderPage";
import AnimatedSeparator from "../_components/Animations/AnimatedSeparator";

export default function GuideStyle() {
  const item = services[0];

  return (
    <main className="bg-dark min-h-screen">
      <HeaderPage />

      <section className="container-1 p-6 space-y-8">
        <div className="space-y-3">
          <h2>Paleta de cores</h2>
          <div className="flex flex-wrap gap-3">
            <div className="bg-primary h-28 w-28 rounded-lg flex items-center justify-center text-xs">
              primary
            </div>
            <div className="bg-secondary h-28 w-28 rounded-lg flex items-center justify-center text-neutral-dark text-xs">
              secondary
            </div>
            <div className="bg-accent h-28 w-28 rounded-lg flex items-center justify-center text-neutral-dark text-xs">
              accent
            </div>
            <div className="bg-neutral h-28 w-28 rounded-lg flex items-center justify-center text-xs">
              neutral
            </div>
            <div className="bg-neutral-dark h-28 w-28 rounded-lg flex items-center justify-center text-xs">
              neutral-dark
            </div>
          </div>
        </div>

        {/* Adicione aqui divs para exibir as b-shodws, borda, e bg-gradients  */}

        {/* Separador */}
        <div className="flex flex-wrap gap-3">
          <AnimatedSeparator />{" "}
        </div>

        {/* Animações React Bits*/}
        <div className="flex flex-wrap gap-3">
          <h1>
            <ShinyText text="ShinyText" />
          </h1>

          <div className="h-70vh w-full">
            <Grainient
              color1="#115945"
              color2="#242424"
              color3="#bf9850"
              timeSpeed={0.5}
              colorBalance={0}
              warpStrength={1}
              warpFrequency={5}
              warpSpeed={2}
              warpAmplitude={50}
              blendAngle={0}
              blendSoftness={0.05}
              rotationAmount={500}
              noiseScale={1}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={1}
              centerX={0}
              centerY={0}
              zoom={0.9}
            />
          </div>

        </div>

        {/* Seção de tipografia */}
        <div>
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <p className="text">
            Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias vitae harum quod, nisi aspernatur totam magni similique
            minima. Inventore maxime accusantium tempora at numquam accusamus
            libero, harum deleniti rerum saepe.
          </p>
          <a href="" className="link-a">
            Link-a
          </a>
        </div>

        {/* Variações de botões */}
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn">
            btn
          </button>
          <button type="button" className="btn-hero">
            btn-hero
          </button>
          <button type="button" className="btn-nav">
            btn-nav
          </button>
          <button type="button" className="btn-primary">
            btn-primary
          </button>
          <button type="button" className="btn-secondary">
            btn-secondary
          </button>
          <button type="button" className="btn-outline">
            btn-outline
          </button>
          <button type="button" className="btn-gradient">
            btn-gradient
          </button>
        </div>

        {/* Renderização de cards */}
        <div className="space-y-4">
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </div>
      </section>
    </main>
  );
}
