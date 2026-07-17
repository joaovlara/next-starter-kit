import { infos } from "@/data/data";

export default function CTA() {
  return (
    <section className="bg-[url('/images/cta-img.png')] bg-cover bg-center h-[40vh] flex items-center justify-center">
      <article className="container-1 w-full flex justify-between">
        <div>
          <p>CTA</p>
          <h2>Lorem Ipsum is simply text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <button className="btn">Link</button>
      </article>
    </section>
  );
}
