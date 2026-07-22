import {
  BarChart3,
  Compass,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const consultores: NicheTemplate = {
  slug: "consultores",
  nicheLabel: "Consultores",
  nicheIcon: Target,
  accent: {
    from: "#1d4ed8",
    to: "#38bdf8",
  },
  business: {
    name: "Vetor Consultoria",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Consultores",
    description:
      "Modelo de landing page premium para consultores de negócios: método claro, resultados em evidência e agenda de diagnóstico.",
  },
  nav: [
    { label: "Soluções", href: "#servicos" },
    { label: "Resultados", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar diagnóstico", href: "#contato" },
  hero: {
    eyebrow: "Consultoria de gestão",
    title: "Clareza para decidir, método para crescer",
    description:
      "Consultoria prática para pequenas e médias empresas: diagnóstico direto, plano de ação executável e acompanhamento até o resultado.",
    primaryCta: { label: "Agendar diagnóstico", href: "#contato" },
    secondaryCta: { label: "Conhecer soluções", href: "#servicos" },
  },
  stats: [
    { value: "80+", label: "Empresas transformadas" },
    { value: "10+", label: "Anos de experiência em gestão" },
    { value: "3x", label: "Retorno médio sobre o investimento" },
  ],
  services: {
    eyebrow: "Soluções",
    title: "Da análise ao resultado, com método",
    description:
      "Nada de relatório engavetado: cada entrega vira ação com responsável e prazo.",
    items: [
      {
        icon: Compass,
        title: "Diagnóstico Empresarial",
        description:
          "Raio-x completo do negócio: finanças, processos, equipe e mercado em um relatório objetivo.",
      },
      {
        icon: Target,
        title: "Planejamento Estratégico",
        description:
          "Metas claras, indicadores certos e um plano de execução que a equipe inteira entende.",
      },
      {
        icon: BarChart3,
        title: "Gestão Financeira",
        description:
          "Fluxo de caixa, precificação e margem sob controle para decisões baseadas em números.",
      },
      {
        icon: Workflow,
        title: "Processos e Produtividade",
        description:
          "Mapeamento e redesenho de processos para eliminar retrabalho e ganhar escala.",
      },
      {
        icon: GraduationCap,
        title: "Treinamento de Equipes",
        description:
          "Capacitação prática de líderes e times para sustentar a mudança depois da consultoria.",
      },
      {
        icon: TrendingUp,
        title: "Mentoria de Gestão",
        description:
          "Acompanhamento mensal do empresário com foco em decisões, prioridades e resultados.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Resultados",
    title: "Quem aplicou o método, colheu resultado",
    items: [
      {
        quote:
          "Em seis meses saímos do vermelho e passamos a decidir com base em indicadores, não em achismo.",
        author: "Cliente",
        role: "Indústria de alimentos",
      },
      {
        quote:
          "O diagnóstico mostrou gargalos que nem imaginávamos. O plano de ação pagou a consultoria no primeiro trimestre.",
        author: "Cliente",
        role: "Rede de varejo",
      },
      {
        quote:
          "A mentoria mensal virou o momento mais importante do meu mês como gestora.",
        author: "Cliente",
        role: "Empresa de serviços",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "O que empresários perguntam antes de contratar",
    items: [
      {
        question: "Como funciona o diagnóstico inicial?",
        answer:
          "É uma imersão de 1 a 2 semanas no seu negócio: entrevistas, análise de números e processos. Ao final você recebe um relatório com prioridades e um plano de ação proposto.",
      },
      {
        question: "Consultoria funciona para empresa pequena?",
        answer:
          "Sim — é onde o impacto costuma ser maior. O método é adaptado ao porte e ao orçamento, com foco no que gera resultado mais rápido.",
      },
      {
        question: "Quanto tempo dura um projeto?",
        answer:
          "Projetos típicos duram de 3 a 6 meses, com encontros semanais ou quinzenais. A mentoria de gestão é contínua, com ciclos mensais.",
      },
      {
        question: "O atendimento pode ser remoto?",
        answer:
          "Sim. Diagnóstico, reuniões e acompanhamento funcionam muito bem por videochamada, com visitas presenciais combinadas quando necessário.",
      },
    ],
  },
  cta: {
    title: "Seu negócio merece decisões com clareza",
    description:
      "Agende uma conversa de diagnóstico e saia com pelo menos três pontos de melhoria mapeados.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre a sua empresa",
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
        label: "Escritório",
        value: "Av. Exemplo, 1200 — Conj. 34",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Consultoria de gestão para pequenas e médias empresas: diagnóstico, estratégia, finanças e processos.",
};
