# Next Starter Kit

Projeto starter kit para criação de sites com Next.js e Tailwind CSS.

## Estrutura principal

- `src/app/` - pasta onde fica o layout da aplicação e as páginas.
  - `layout.tsx` define o wrapper global do projeto.
  - `page.tsx` é a página inicial.

- `src/components/` - componentes reutilizáveis de interface.
  - `Navbar.tsx`, `Footer.tsx`, `WppButton.tsx` são componentes globais.
  - `src/components/Sections/` agrupa seções de página como `Hero.tsx`, `About.tsx`, `Services.tsx` e `CTA.tsx`.

- `src/data/` - dados do site.
  - `data.ts` contém conteúdo e informações usados pelas seções e componentes.
  - `SEO.ts` guarda parâmetros de SEO e metadados.

- `src/app/globals.css` - estilos globais do projeto, incluindo configurações base do Tailwind e customizações.

## Onde encontrar

### Data

As informações do site estão centralizadas em:

- `src/data/data.ts`
- `src/data/SEO.ts`

Use esses arquivos para atualizar textos, números, títulos, descrições e links do site.

### Styles

Os estilos ficam em:

- `src/app/globals.css`

Aqui você pode ajustar cores, tipografia, espaçamentos e outras regras globais do Tailwind.

### Components

Os componentes estão em:

- `src/components/` para componentes reutilizáveis gerais
- `src/components/Sections/` para as seções da landing page

A lógica de layout e composição pode ser alterada em `src/app/page.tsx` e `src/app/layout.tsx`.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Personalização

- Adicione novas seções em `src/components/Sections/`.
- Atualize o conteúdo em `src/data/data.ts`.
- Ajuste estilos em `src/app/globals.css`.
- Edite a estrutura da página em `src/app/page.tsx`.
