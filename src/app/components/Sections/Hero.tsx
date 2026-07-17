import { infos } from "@/data/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="">
      <article className="container-1 rounded-b-[100] h-[70vh]">
        <div className="p-12 flex flex-col justify-between h-full">
          <div>
            Icons:
            <div>1</div>
          </div>

          <div className="flex w-full justify-between">
            <div>
              <h1>Lorem Ipsum is simply dummy text</h1>
              <h2>Lorem Ipsum is simply dummy text 2</h2>
            </div>
            <div>
              <button>CTA</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
