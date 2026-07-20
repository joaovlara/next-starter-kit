import { infos } from "@/data/data";

export default function GetApp() {
  return (
    <section>
      <article className="container-1 flex flex-col md:flex-row justify-between items-center p-8">

        <h2 className="">Baixe o nosso app:</h2>

        <div className="flex flex-col md:flex-row gap-4 p-3">
          <button className="btn">
            ANDROID
          </button>
          <button className="btn">
            APPLE iOS
          </button>
        </div>

      </article>
    </section>
  );
}
