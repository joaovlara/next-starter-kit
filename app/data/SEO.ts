/**
 * Configuração de SEO global para o projeto.
 *
 * Como editar:
 * - Altere a constante `url` para refletir o domínio do seu site.
 * - Atualize `title` e `description` para o nome e descrição padrão do projeto.
 * - A constante `image` deriva da `url` e aponta para a imagem de preview (Open Graph/Twitter).
 * - Use este arquivo para manter consistência de metadados em todas as páginas.
 * - Para páginas dinâmicas, você pode importar `seoConfig` e sobrescrever os campos necessários.
 */

import type { Metadata } from "next";

// Variáveis globais
const url = "url";
const title = "Titulo";
const description = "Descrição";
const image = `${url}/preview.png`;

export const seoConfig: Metadata = {
  title,
  description,
  keywords: ["Next.js", "ReactJs", "TailwindCSS"],
  alternates: {
    canonical: url,
    languages: {
      "pt-BR": url,
      "en-US": `${url}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  authors: [{ name: "João Lara", url: "" }],
};
