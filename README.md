# Gtech Studio

Landing Pages Premium para profissionais liberais, pequenas empresas e prestadores de serviços.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript (modo estrito)
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Framer Motion
- Zod + React Hook Form
- Deploy: Vercel

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Script              | Descrição                       |
| ------------------- | ------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento     |
| `npm run build`     | Build de produção               |
| `npm run start`     | Servir o build de produção      |
| `npm run lint`      | ESLint                          |
| `npm run typecheck` | Verificação de tipos TypeScript |

## Estrutura

```
src/
  app/        # Rotas, layout raiz, SEO (robots, sitemap)
  components/ # Componentes reutilizáveis (ui/ = shadcn, sections/ = seções de página)
  features/   # Funcionalidades compostas (ex.: formulário de contato)
  hooks/      # Hooks reutilizáveis
  lib/        # Utilitários e configuração do site
  types/      # Tipos compartilhados
  styles/     # CSS global e design tokens
docs/         # Documentação do produto e arquitetura
```

Documentação completa em [`docs/`](./docs).
