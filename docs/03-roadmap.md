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

## Sprint 5+ — Backlog

- Demais nichos (Psicólogos, Contadores, Consultores, Arquitetos, Barbearias, Clínicas) — apenas um arquivo de conteúdo cada
- Página índice de portfólio `/modelos` + link "Modelos" na navegação da Gtech
- Guia de captação (Google Business Profile)
- Seção Testimonials na home da Gtech quando houver depoimentos reais
