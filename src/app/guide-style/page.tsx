import CardHighlight from "../_components/Cards/CardHighlight";
import CardServico from "../_components/Cards/CardServico";

export default function GuideStyle() {
  return (
    <main className="bg-black min-h-screen">
      <section className="container-1 p-6 space-y-8">
        {/* Cores base */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-primary h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            primary
          </div>
          <div className="bg-secondary h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            secondary
          </div>
          <div className="bg-accent h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            accent
          </div>
          <div className="bg-neutral h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            neutral
          </div>
          <div className="bg-neutral-dark h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            neutral-dark
          </div>
        </div>

        {/* Variações de gradientes horizontais */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-gradient h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            bg-gradient
          </div>
          <div className="bg-gradient-primary-accent h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            primary-accent
          </div>
          <div className="bg-gradient-accent-secondary h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            accent-secondary
          </div>
          <div className="bg-gradient-hover h-30 aspect-square flex items-center justify-center text-white text-xs font-mono cursor-pointer">
            gradient-hover
          </div>
        </div>

        {/* Gradientes verticais (baixo para cima) por cor */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-gradient-t-primary h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            t-primary
          </div>
          <div className="bg-gradient-t-secondary h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            t-secondary
          </div>
          <div className="bg-gradient-t-accent h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            t-accent
          </div>
          <div className="bg-gradient-t-neutral h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            t-neutral
          </div>
          <div className="bg-gradient-t-neutral-dark h-30 aspect-square flex items-center justify-center text-white text-xs font-mono">
            t-neutral-dark
          </div>
        </div>

        {/* Bordas estáticas */}
        <div className="flex flex-wrap gap-3">
          <div className="border-2 border-primary h-25 aspect-square"></div>
          <div className="border-2 border-secondary h-25 aspect-square"></div>
          <div className="border-2 border-accent h-25 aspect-square"></div>
        </div>

        {/* Bordas interativas e utilitários */}
        <div className="flex flex-wrap gap-3">
          <div className="border-iz h-25 aspect-square"></div>
          <div className="border-hover-primary h-25 aspect-square cursor-pointer"></div>
          <div className="border-hover-accent h-25 aspect-square cursor-pointer"></div>
        </div>

        {/* Bordas com gradiente e elevação de saturação no hover */}
        <div className="flex flex-wrap gap-3">
          <div className="border-gradient-primary-secondary hover-saturate h-25 aspect-square cursor-pointer flex items-center justify-center text-white text-[10px] font-mono text-center p-1">
            primary-secondary
          </div>
          <div className="border-gradient-primary-accent hover-saturate h-25 aspect-square cursor-pointer flex items-center justify-center text-white text-[10px] font-mono text-center p-1">
            primary-accent
          </div>
          <div className="border-gradient-accent-secondary hover-saturate h-25 aspect-square cursor-pointer flex items-center justify-center text-white text-[10px] font-mono text-center p-1">
            accent-secondary
          </div>
        </div>

        {/* Utilitários de animação */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-neutral h-25 aspect-square hover-lift cursor-pointer flex items-center justify-center text-white text-xs font-mono">
            hover-lift
          </div>
          <div className="bg-neutral h-25 aspect-square hover-scale cursor-pointer flex items-center justify-center text-white text-xs font-mono">
            hover-scale
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
          <a href="" className="link-a">Link-a</a>
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
          <CardHighlight />
          <CardServico />
        </div>
      </section>
    </main>
  );
}