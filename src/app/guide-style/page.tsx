"use client";

import CardHighlight from "../_components/Cards/CardHighlight";
import CardServico from "../_components/Cards/CardServico";

export default function GuideStyle() {
  return (
    <main className="container">
      <section className="container-1 p-6 space-y-6">
        <div className="flex flex-wrap gap-1">
          <div className="bg-primary h-30 aspect-square"></div>
          <div className="bg-secondary h-30 aspect-square"></div>
          <div className="bg-accent h-30 aspect-square"></div>
          <div className="bg-neutral h-30 aspect-square"></div>
          <div className="bg-neutral-dark h-30 aspect-square"></div>
        </div>

        <div className="flex flex-wrap gap-1">
          <div className="bg-gradient h-30 aspect-square"></div>
        </div>

        <div className="flex flex-wrap gap-1">
          <div className="border-iz h-30 aspect-square"></div>
        </div>

        <div>
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <p className="text">
            Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias vitae harum quod, nisi aspernatur totam magni similique
            minima. Inventore maxime accusantium tempora at numquam accusamus
            libero, harum deleniti rerum saepe.
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          <button className="btn">teste</button>
          <button className="btn-hero">teste</button>
          <button className="btn-nav">teste</button>
        </div>

        <div>
          <CardHighlight />
          <CardServico />
        </div>
      </section>
    </main>
  );
}
