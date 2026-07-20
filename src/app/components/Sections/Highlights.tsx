import { diferenciais } from "@/data/data";
import Image from "next/image";

export default function Highlights() {
  return (
    <section className="bg-gray-500 text-white lg:py-8 p-8">

      <article className="lg:max-w-[90%] mx-auto bg-gray-300 flex flex-col lg:flex-row lg:rounded-bl-[100px] rounded-tr-[100px] lg:rounded-tr-none">
        
        <div className="flex flex-col justify-center lg:w-1/4 relative aspect-square">
          <Image
            src="/images/image 9.png"
            alt="nome"
            fill
            className="object-cover lg:rounded-bl-[100px] lg:p-0 p-6 rounded-tr-[100px]"
          />
          <h2 className="p-8">
            Nossos <br /> Diferenciais
          </h2>
        </div>

        <div className="flex-1 grid lg:grid-cols-3 gap-6 p-6">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-gray-200 shadow rounded h-full aspect-square justify-between"
            >
              <div className="w-16 h-16 bg-white mb-4 flex justify-center items-center rounded-full">
                icon
              </div>
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

      </article>

    </section>
  );
}
