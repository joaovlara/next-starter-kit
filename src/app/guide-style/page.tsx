export default function GuideStyle() {
  return (
    <div className="container mx-auto py-10 space-y-16">
      
      {/* Paleta de cores */}
      <section>
        <h2 className="section-title">Cores</h2>
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-primary rounded-md"></div>
          <div className="w-24 h-24 bg-secondary rounded-md"></div>
          <div className="w-24 h-24 bg-gray-700 rounded-md"></div>
          <div className="w-24 h-24 bg-gradient rounded-md"></div>
        </div>
      </section>

      {/* Tipografia */}
      <section>
        <h2 className="section-title">Tipografia</h2>
        <h1 className="h1-title">Título H1</h1>
        <p className="text">Este é um texto padrão para corpo.</p>
        <p className="caption">Legenda ou caption discreta.</p>
      </section>

      {/* Botões */}
      <section>
        <h2 className="section-title">Botões</h2>
        <div className="flex gap-4">
          <button className="btn">Botão Primário</button>
          <button className="btn bg-secondary hover:bg-primary">Botão Secundário</button>
          <button className="btn border border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
            Botão Outline
          </button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="section-title">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Card Title</h3>
            <p className="text">Descrição breve do card.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Outro Card</h3>
            <p className="text">Mais conteúdo de exemplo.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Card 3</h3>
            <p className="text">Texto adicional para teste.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
