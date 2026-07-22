import {
  Building2,
  DraftingCompass,
  FileCheck,
  HardHat,
  Home,
  Lamp,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const arquitetos: NicheTemplate = {
  slug: "arquitetos",
  nicheLabel: "Arquitetos",
  nicheIcon: DraftingCompass,
  accent: {
    from: "#c2410c",
    to: "#fbbf24",
  },
  business: {
    name: "Atelier Forma Arquitetura",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Arquitetos",
    description:
      "Modelo de landing page premium para arquitetos: portfólio em destaque, processo claro e captação de projetos residenciais e comerciais.",
  },
  nav: [
    { label: "Projetos", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Orçar projeto", href: "#contato" },
  hero: {
    eyebrow: "Arquitetura autoral",
    title: "Espaços que contam a sua história",
    description:
      "Projetos residenciais e comerciais que unem estética, funcionalidade e orçamento realista — do primeiro traço à entrega da obra.",
    primaryCta: { label: "Orçar meu projeto", href: "#contato" },
    secondaryCta: { label: "Ver o que fazemos", href: "#servicos" },
  },
  stats: [
    { value: "120+", label: "Projetos entregues" },
    { value: "14", label: "Anos de atuação" },
    { value: "100%", label: "Projetos aprovados na prefeitura" },
  ],
  services: {
    eyebrow: "O que fazemos",
    title: "Do conceito à chave na mão",
    description:
      "Cada projeto nasce de uma escuta atenta e vira um espaço com identidade.",
    items: [
      {
        icon: Home,
        title: "Projetos Residenciais",
        description:
          "Casas e apartamentos desenhados para o seu jeito de viver, do estudo preliminar ao executivo.",
      },
      {
        icon: Building2,
        title: "Projetos Comerciais",
        description:
          "Lojas, consultórios e escritórios que traduzem a marca e melhoram a experiência do cliente.",
      },
      {
        icon: Lamp,
        title: "Design de Interiores",
        description:
          "Ambientes completos: layout, iluminação, marcenaria e especificação de acabamentos.",
      },
      {
        icon: DraftingCompass,
        title: "Reformas",
        description:
          "Transformação de espaços existentes com projeto executivo detalhado e compatibilizado.",
      },
      {
        icon: FileCheck,
        title: "Regularização",
        description:
          "Aprovação em prefeitura, habite-se e regularização de obras com agilidade documental.",
      },
      {
        icon: HardHat,
        title: "Acompanhamento de Obra",
        description:
          "Visitas técnicas e gestão de fornecedores para a obra sair fiel ao projeto — e ao orçamento.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Clientes que vivem os espaços que projetamos",
    items: [
      {
        quote:
          "Nossa casa ficou melhor do que imaginávamos. Cada detalhe do projeto tinha um porquê — e coube no orçamento.",
        author: "Cliente",
        role: "Projeto residencial",
      },
      {
        quote:
          "A loja dobrou o movimento depois da reforma. O projeto entendeu exatamente o que a marca precisava.",
        author: "Cliente",
        role: "Projeto comercial",
      },
      {
        quote:
          "O acompanhamento de obra fez toda a diferença: zero surpresas e prazos cumpridos.",
        author: "Cliente",
        role: "Reforma com acompanhamento",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "O que perguntam antes de contratar um projeto",
    items: [
      {
        question: "Quanto custa um projeto de arquitetura?",
        answer:
          "O honorário varia conforme a área e a complexidade, geralmente calculado por metro quadrado. Após a primeira conversa enviamos uma proposta detalhada por etapa.",
      },
      {
        question: "Quais são as etapas do projeto?",
        answer:
          "Briefing, estudo preliminar, anteprojeto, projeto legal (aprovação) e projeto executivo. Você aprova cada etapa antes de seguirmos para a próxima.",
      },
      {
        question: "Vocês cuidam da aprovação na prefeitura?",
        answer:
          "Sim. Elaboramos o projeto legal e conduzimos todo o processo de aprovação e emissão de alvará.",
      },
      {
        question: "Atendem projetos em outras cidades?",
        answer:
          "Sim. As etapas de criação são conduzidas online e as visitas técnicas são combinadas conforme a localização da obra.",
      },
    ],
  },
  cta: {
    title: "Seu projeto começa com uma boa conversa",
    description:
      "Conte o que você imagina e receba uma proposta com etapas, prazos e investimento.",
    cta: { label: "Falar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos tirar seu projeto do papel",
    description:
      "Preencha o formulário ou fale direto pelos nossos canais de atendimento.",
    items: [
      {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Resposta em horário comercial",
        href: whatsapp,
      },
      {
        icon: Phone,
        label: "Telefone",
        value: "(00) 0000-0000",
        href: "tel:+550000000000",
      },
      {
        icon: MapPin,
        label: "Atelier",
        value: "Rua Exemplo, 77 — Studio 2",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Arquitetura residencial e comercial: projeto, interiores, regularização e acompanhamento de obra. CAU A00000-0.",
};
