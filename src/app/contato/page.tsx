import Image from "next/image";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import { footerContacts, rotas, siteLinks } from "@/data/data";

export default function ContatoPage() {
  return (
    <main>
      <HeaderPage />
      <section className="px-6">
        <article className="container-1 bg-gray-400 grid md:grid-cols-2 mb-6">
          <div className="flex flex-col gap-3 w-full md:text-left bg-gray-200 p-6">
            <h3 className="h2">Contato</h3>
            {footerContacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2"
                >
                  {Icon && <Icon aria-hidden="true" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
          <div className="flex items-center justify-center p-6">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
        </article>
      </section>
      <CTA />
    </main>
  );
}
