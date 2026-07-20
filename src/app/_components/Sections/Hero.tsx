import { infos } from "@/src/app/_data/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-6 md:p-0">
      <article className="container-1 rounded-b-[100] md:h-[70vh] h-[80vh] bg-gray-200">
        <div className="p-6 md:p-12 flex flex-col justify-between h-full">
          <div>
            Icons:
            <div>1</div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between space-y-6">
            <div>
              <h1>Lorem Ipsum is <br /> simply dummy text</h1>
              <p className="text text-3xl">Lorem Ipsum is simply dummy text 2</p>
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