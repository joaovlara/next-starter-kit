import Image from "next/image";
import Link from "next/link";
import { footerContacts, rotas, siteLinks } from "@/data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center">
      <section className="p-6">
        <article className="flex justify-center items-center gap-6 p-6 border-b border-primary">
          {siteLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                title={item.name}
                className="bg-secondary hover:bg-primary rounded-full h-15 w-15 flex items-center justify-center hover:scale-110"
              >
                <Icon size="30" aria-hidden="true" />
              </a>
            );
          })}
        </article>

        {/* Grid de conteúdo principal */}
        <article className="container-1 grid grid-cols-1 md:grid-cols-3 gap-8 py-8 items-start">
          {/* Coluna 1: Logo */}
          <div className="flex justify-start items-center w-full">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>

          {/* Coluna 2: Contato com ícones em círculo primary */}
          <div className="flex flex-col gap-3 w-full items-start text-left border-left">
            <h3 className="h2 font-bold mb-2">Contato</h3>
            {footerContacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  {Icon && (
                    <span className="bg-primary text-white p-2 rounded-full flex items-center justify-center shrink-0 w-8 h-8">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                  )}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Coluna 3: Navegação */}
          <nav className="flex flex-col gap-3 w-full text-left border-left">
            <h3 className="h2 font-bold mb-2">Menu</h3>
            <div className="flex flex-col gap-2">
              {rotas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:underline hover:text-secondary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </article>
        <article>
          <p className="text-sm">
            © Todos os direitos reservados {currentYear}
          </p>
        </article>
      </section>
    </footer>
  );
}
