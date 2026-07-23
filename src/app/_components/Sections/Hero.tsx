import { infos } from "@/src/app/_data/data";
import Image from "next/image";
import {
  BsBuildingCheck,
  BsShieldCheck,
  BsHouseHeart,
  BsKey,
} from "react-icons/bs";

const icons = [BsBuildingCheck, BsShieldCheck, BsHouseHeart, BsKey];

export default function Hero() {
  return (
    <section className="px-6 md:p-0">
      {/* Container com posicionamento relativo e overflow oculta para comportar a imagem */}
      <article className="container-1 relative overflow-hidden rounded-b-[70px] md:h-[70vh] h-[80vh]">
        {/* Imagem de Fundo */}
        <Image
          src="/images/hero-bg.png"
          alt="Imagem de fundo da seção Hero"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Conteúdo sobreposto */}
        <div className="p-6 md:p-12 flex flex-col justify-between h-full relative z-10">
          {/* Ícones */}
          <div className="flex space-x-3">
            {icons.map((Icon, index) => (
              <span
                key={index}
                className="bg-gray-500 border rounded-full h-10 w-10 flex items-center justify-center shadow"
              >
                <Icon className="text-xl" />
              </span>
            ))}
          </div>

          {/* Texto e Ação */}
          <div className="flex flex-col md:flex-row w-full justify-between space-y-6">
            <div>
              <h1>
                Lorem Ipsum is <br /> simply dummy text
              </h1>
              <p className="text text-3xl">Lorem Ipsum is simply dummy text</p>
            </div>
            <div className="flex flex-col-reverse">
              <button className="btn-hero">Btn-hero</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
