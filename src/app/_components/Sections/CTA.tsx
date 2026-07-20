import { infos } from "@/src/app/_data/data";

export default function CTA() {
  return (
    <section className="bg-[url('/images/cta-img.png')] bg-cover bg-center min-h-[30vh] flex items-center justify-center">
      <article className="container-1 w-full flex flex-col md:flex-row justify-between space-y-6">
        <div className="space-y-3">
          <p className="cta-tag">CTA</p>
          <h2 className="h1">Lorem Ipsum is simply text</h2>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn w-full md:w-70">Link</button>
        </div>
      </article>
    </section>
  );
}
