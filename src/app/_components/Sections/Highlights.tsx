import { diferenciais } from "@/src/app/_data/data";
import Image from "next/image";

export default function Highlights() {
  return (
    <section className="text-white p-6 lg:p-6 lg:py-8">
      <article className="lg:max-w-[90%] mx-auto bg-gray-300 flex flex-col lg:flex-row lg:rounded-bl-[100px] rounded-tr-[100px] lg:rounded-tr-none">
        {/* Bloco de Imagem e Titulo */}
        <div className="flex flex-col justify-center lg:w-1/4 relative aspect-4/3 lg:aspect-square">
          <Image
            src="/images/image 9.png"
            alt="nome"
            fill
            className="object-cover lg:rounded-bl-[100px] p-3 lg:p-0 rounded-tr-[100px]"
          />
          <h2 className="p-4 lg:p-8">
            Nossos <br /> Diferenciais
          </h2>
        </div>

        {/* Grid de Diferenciais */}
        <div className="flex-1 grid lg:grid-cols-3 gap-3 lg:gap-6 p-3 lg:p-6">
          {diferenciais.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="w-10 h-10 lg:w-16 lg:h-16 bg-white mb-2 lg:mb-4 flex justify-center items-center rounded-full">
                icon
              </div>
              <h3 className="font-semibold text-lg lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
