import { infos } from "@/src/app/_data/data";

export default function GetApp() {
  return (
    <section className="p-6 pt-0 md:p-0">
      <article className="container-1">
        <div className="flex items-center justify-between gap-3 bg-secondary p-6">
          <p className="text">Baixe o nosso App</p>
          <div className="flex gap-3">
            <a href="" className="btn-app">Google Play</a>
            <a href="" className="btn-app">App Store</a> 
          </div>
        </div>
      </article>
    </section>
  );
}
