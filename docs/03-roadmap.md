# Roadmap de Sprints

## Sprint 1 — Fundação ✅

- Scaffold Next.js + TypeScript estrito + Tailwind v4
- Arquitetura de pastas oficial
- Stack completa instalada (shadcn/ui, Lucide, Framer Motion, Zod, RHF)
- Design tokens (paleta neutra, dark mode)
- Layout raiz com SEO completo (metadata, Open Graph, Twitter Card, canonical, robots, sitemap)
- Página inicial mínima com CTA
- Documentação inicial

## Sprint 2 — Biblioteca de componentes ✅

- Primitivos shadcn/ui: Button, Card, Accordion, Input, Textarea, Label
- Seções: Navbar, Hero, Services, Stats, Testimonials, Pricing, FAQ, CTA, Contact, Footer
- WhatsApp Button flutuante
- Animações discretas de entrada (Framer Motion via `Reveal`, com suporte a `prefers-reduced-motion`)

## Sprint 3 — Site institucional da Gtech Studio ✅

- Home completa composta pelas seções (Hero, Stats, Services, Pricing, FAQ, CTA, Contact)
- Conteúdo separado dos componentes em `src/lib/content/`
- Formulário de contato (RHF + Zod) com envio via WhatsApp pré-preenchido
- Schema.org (Organization) no layout raiz
- Navbar, Footer e WhatsApp Button no layout (compartilhados por futuras páginas)
- Nota: seção Testimonials fica fora da home até existirem depoimentos reais de clientes

## Sprint 4 — Sistema de templates por nicho ✅

- Tipo `NicheTemplate`: todo o conteúdo de um nicho em um único objeto tipado
- Composição `NicheLanding`: uma página inteira montada a partir da biblioteca de seções
- Rota dinâmica `/modelos/[slug]` com SSG (`generateStaticParams`) e metadata por template
- Route group `(site)`: navbar/footer da Gtech separados do chrome dos templates
- Banner de demonstração com CTA "Quero um site assim" nos templates
- Template Advogados (`/modelos/advogados`) e Dentistas (`/modelos/dentistas`)
- Sitemap atualizado com as rotas dos modelos

## Sprint 5 — Portfólio e expansão de nichos ✅

- Página índice `/modelos` com cards de todos os templates
- Link "Modelos" na navegação da Gtech
- 6 novos nichos: Psicólogos, Contadores, Consultores, Arquitetos, Barbearias e Clínicas
- Campo `nicheIcon` no tipo `NicheTemplate` para os cards do portfólio
- Sitemap com 10 URLs (home + índice + 8 modelos)
- Todos os 8 nichos do master prompt concluídos

## Sprint 6 — CI, deploy e Open Graph ✅

- GitHub Actions: CI (lint + typecheck + build) em cada push e PR
- Deploy automático na Vercel via secret `VERCEL_TOKEN` (produção em gtech-studio.vercel.app)
- Imagem Open Graph gerada com next/og
- Correção de acessibilidade no Reveal (prefers-reduced-motion)

## Sprint 7 — Identidade visual e refinamento premium ✅

- Logo autêntico: monograma G geométrico com gradiente da marca (indigo → violeta)
- Tokens `brand`/`brand-2` aplicados cirurgicamente (hero, stats, eyebrows, ícones, selo de plano)
- Hero com glow radial, grade de pontos e badge em pílula; CTA como ilha escura com glow
- Galeria `/modelos` com mockups de navegador gerados em CSS/SVG por template
- Templates de nicho com identidade própria na navbar (ícone em tile + nome)

## Sprint 9 — Arquitetura pronta para fotografia ✅

- Componente `NicheVisual`: usa `next/image` quando a foto existe em `public/`
  e cai graciosamente para um painel de gradiente com o ícone do nicho até a
  foto ser enviada (aparece sozinha ao subir o arquivo)
- Hero dos templates redesenhado em duas colunas (texto + visual, com selo de
  confiança flutuante e avaliação em estrelas)
- Novas seções por template: `Sobre` (texto + imagem + diferenciais) e
  `Galeria` (grade de imagens)
- Conteúdo `about` próprio para cada um dos 8 nichos
- Convenção de imagens documentada em `public/images/README.md`
- Alt text descritivo em todas as imagens (SEO/acessibilidade)

## Sprint 10+ — Backlog

- Substituir os placeholders pelas fotos reais de cada nicho (upload em `public/images/`)
- Hero fotográfico também na home da Gtech quando houver imagem institucional

- Guia de captação (Google Business Profile)
- Seção Testimonials na home da Gtech quando houver depoimentos reais
- Imagem Open Graph com a identidade visual
- Endpoint de e-mail para o formulário (Resend ou similar)
- Imagens ilustrativas por nicho quando houver banco de assets
- CI (lint + typecheck + build) via GitHub Actions
