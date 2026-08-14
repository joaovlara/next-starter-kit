import Image from "next/image";
import Link from "next/link";
import { social, routes, contato } from "../_data/data";
import { StaggerContainer, StaggerItem } from "./Animations/StaggerContainer";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center">
      <section className="px-6">
        {/* 1. Animação sequencial dos Ícones de Redes Sociais */}
        <StaggerContainer
          className="flex justify-center items-center gap-3 md:gap-6 p-6 border-b border-primary"
          staggerDelay={0.1}
        >
          {social.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.name}>
                <a
                  href={item.url}
                  aria-label={item.name}
                  title={item.name}
                  className="bg-primary hover:bg-secondary rounded-full h-15 w-15 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon size="30" aria-hidden="true" />
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* 2. Animação sequencial das 3 Colunas da Grid */}
        <StaggerContainer
          className="container-1 grid grid-cols-1 md:grid-cols-3 gap-8 py-8 items-start"
          staggerDelay={0.2}
        >
          {/* Coluna 1: Logo */}
          <StaggerItem className="flex justify-center items-center h-full w-full">
            <Image
              src="/images/iz-simbolo-01.png"
              alt="Logo"
              width={160}
              height={160}
              className="rounded-full"
            />
          </StaggerItem>

          {/* Coluna 2: Contato */}
          <StaggerItem className="flex flex-col gap-3 w-full items-start text-left border-left">
            <h3 className="h2 font-bold mb-2">Contato</h3>
            {contato.map((item) => {
              const Icon = item.icon;
              

              return (
                <a
                  key={item.name}
                  href={item.url ? item.url : item.value}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  {Icon && (
                    <span className="bg-primary-2 p-2 rounded-full flex items-center justify-center shrink-0 w-8 h-8">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                  )}
                  <span>{item.value}</span>
                </a>
              );
            })}
          </StaggerItem>

          {/* Coluna 3: Navegação */}
          <StaggerItem>
            <nav className="flex flex-col gap-3 w-full text-left border-left">
              <h3 className="h2 font-bold mb-2">Menu</h3>
              <div className="flex flex-col gap-2">
                {routes.map((item) => (
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
          </StaggerItem>
        </StaggerContainer>

        {/* Direitos Reservados */}
        <article className="p-3">
          <p className="text-sm">
            © Todos os direitos reservados {currentYear}
          </p>
        </article>
      </section>
    </footer>
  );
}
