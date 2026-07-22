# Arquitetura

## Stack oficial

| Camada       | Tecnologia               | Justificativa                                             |
| ------------ | ------------------------ | --------------------------------------------------------- |
| Framework    | Next.js (App Router)     | SSG/SSR, SEO nativo, otimização de imagens e fontes       |
| Linguagem    | TypeScript (estrito)     | Segurança de tipos e manutenção a longo prazo             |
| Estilo       | Tailwind CSS v4          | Consistência, velocidade e zero CSS morto                 |
| UI           | shadcn/ui                | Componentes acessíveis, copiados para o repositório       |
| Ícones       | Lucide React             | Leve, consistente, tree-shakeable                         |
| Animações    | Framer Motion            | Animações discretas com boa performance                   |
| Validação    | Zod                      | Schemas tipados compartilhados entre cliente e servidor   |
| Formulários  | React Hook Form          | Performance (uncontrolled) e integração com Zod           |
| Deploy       | Vercel                   | Zero-config para Next.js, edge network, previews          |

## Estrutura de pastas

```
src/
  app/        # Apenas rotas, layouts e arquivos de SEO. Sem lógica de negócio.
  components/
    ui/       # Primitivos shadcn/ui (Button, Card, Accordion...)
    sections/ # Seções de landing page (Hero, Pricing, FAQ...)
  features/   # Funcionalidades com estado/lógica (ex.: contact-form/)
  hooks/      # Hooks reutilizáveis
  lib/        # Funções puras, utilitários, configuração do site
  types/      # Tipos e interfaces compartilhados
  styles/     # globals.css com design tokens
```

## Regras

- Cada componente tem uma única responsabilidade.
- `app/` não contém lógica de negócio — apenas composição.
- Seções recebem conteúdo por props; o conteúdo vive fora do componente.
- Templates de nicho são composições da mesma biblioteca de seções; apenas o conteúdo muda.
- Design tokens ficam em `styles/globals.css` (CSS variables + Tailwind v4 `@theme`).

## Design tokens

Paleta neutra (base shadcn "neutral") em OKLCH, com suporte a dark mode via classe `.dark`. Poucas cores, muito espaço em branco, tipografia Geist.
