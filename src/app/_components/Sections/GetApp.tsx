import { infos } from "@/src/app/_data/data";

export default function GetApp() {
  return (
    <section>
      <article className="container-1 flex flex-col md:flex-row justify-between md:items-center px-6">
        <h2 className="">Baixe o nosso app:</h2>

        <div className="flex md:flex-row gap-4 pt-3 md:p-0">
          <button className="btn">ANDROID</button>
          <button className="btn">APPLE iOS</button>
        </div>
      </article>
    </section>
  );
}
