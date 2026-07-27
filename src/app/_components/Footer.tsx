import Image from "next/image";
import Link from "next/link";
import { footerContacts, rotas, siteLinks } from "@/data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center">
      <section className="p-6">
        <article className="flex justify-center items-center gap-6 md:p-6">
          {siteLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                title={item.name}
                className="bg-secondary hover:bg-primary rounded-full h-15 w-15 flex items-center justify-center"
              >
                <Icon size="30" aria-hidden="true" />
              </a>
            );
          })}
        </article>
        <article className="container-1 grid grid-cols-1 md:grid-cols-3 space-y-9 justify-items-center md:justify-items-start items-start">
          {/* Coluna 1: Logo */}
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>

          {/* Coluna 2: Contato */}
          <div className="flex flex-col gap-3 w-full justify-center items-center md:items-start md:text-left border-left">
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

          {/* Coluna 3: Navegação */}
          <nav className="flex flex-col gap-3 w-full md:text-left border-left">
            <h3 className="h2">Menu</h3>
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
          </p>{" "}
        </article>
      </section>
    </footer>
  );
}
