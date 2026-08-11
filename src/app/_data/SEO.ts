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
const url = "https://izgarantia.com.br";
const title = "IZ Garantia Condominial | Gestão Financeira para Condomínios";
const description =
  "Soluções para condomínios com repasse garantido, cobrança amigável, relatórios completos e gestão financeira mais segura e eficiente.";
const image = `${url}/preview.jpg`;

export const seoConfig: Metadata = {
  title,
  description,
  keywords: [
    "gestão condominial",
    "condomínio",
    "repasse garantido",
    "cobrança amigável",
    "inadimplência zero",
    "IZ Garantia Condominial",
    "administração de condomínios",
  ],
  alternates: {
    canonical: url,
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
  authors: [{ name: "IZ Garantia Condominial", url }],
};
