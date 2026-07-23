import {
  CalendarCheck,
  Crown,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const barbearias: NicheTemplate = {
  slug: "barbearias",
  nicheLabel: "Barbearias",
  nicheIcon: Scissors,
  accent: {
    from: "#b91c1c",
    to: "#f59e0b",
  },
  images: {
    hero: "/images/barbearias/hero.jpg",
    about: "/images/barbearias/about.jpg",
    gallery: ["/images/barbearias/1.jpg", "/images/barbearias/2.jpg", "/images/barbearias/3.jpg"],
  },
  about: {
    eyebrow: "Sobre",
    title: "Tradição de barbearia com conforto de clube",
    paragraphs: [
      "Aqui o corte é levado a sério: barbeiros experientes, produtos premium e aquele ambiente onde dá gosto sentar na cadeira e relaxar.",
      "Horário marcado pelo WhatsApp, sem fila e sem espera, para você cuidar do visual no seu tempo.",
    ],
    highlights: [
      "Barbeiros experientes e produtos premium",
      "Agendamento pelo WhatsApp, sem fila",
      "Plano de assinatura com horário preferencial",
    ],
  },
  business: {
    name: "Barbearia Navalha de Ouro",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Barbearias",
    description:
      "Modelo de landing page premium para barbearias: serviços, planos de assinatura e agendamento pelo WhatsApp em um clique.",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar horário", href: "#contato" },
  hero: {
    eyebrow: "Barbearia clássica",
    title: "Corte afiado, atendimento de primeira",
    description:
      "Tradição de barbearia com conforto de clube: cadeira boa, conversa boa e um corte que você sai querendo mostrar.",
    primaryCta: { label: "Agendar horário", href: "#contato" },
    secondaryCta: { label: "Ver serviços", href: "#servicos" },
  },
  stats: [
    { value: "8+", label: "Anos de tradição no bairro" },
    { value: "15 mil+", label: "Cortes realizados" },
    { value: "4,9★", label: "Avaliação média no Google" },
  ],
  services: {
    eyebrow: "Serviços",
    title: "Do clássico ao moderno, sempre na régua",
    description:
      "Barbeiros experientes, produtos premium e horário marcado sem fila.",
    items: [
      {
        icon: Scissors,
        title: "Corte de Cabelo",
        description:
          "Clássico, degradê ou personalizado — alinhado ao seu estilo e ao formato do seu rosto.",
      },
      {
        icon: Sparkles,
        title: "Barba Completa",
        description:
          "Toalha quente, navalha e finalização com produtos premium para uma barba impecável.",
      },
      {
        icon: Crown,
        title: "Combo Corte + Barba",
        description:
          "O ritual completo com preço especial: saia renovado da cadeira em uma sessão só.",
      },
      {
        icon: Star,
        title: "Tratamentos",
        description:
          "Hidratação capilar, alinhamento e cuidados para couro e fios sempre saudáveis.",
      },
      {
        icon: CalendarCheck,
        title: "Assinatura Mensal",
        description:
          "Cortes ilimitados com horário preferencial e desconto em produtos. Cancele quando quiser.",
      },
      {
        icon: Gift,
        title: "Dia do Noivo",
        description:
          "Pacote completo para noivos e padrinhos no grande dia, com direito a espumante.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "A palavra de quem senta na cadeira",
    items: [
      {
        quote:
          "Melhor corte da cidade, sem exagero. Horário marcado é horário cumprido.",
        author: "Cliente",
        role: "Assinante mensal",
      },
      {
        quote:
          "A barba com toalha quente virou meu programa de sexta. Atendimento nota dez.",
        author: "Cliente",
        role: "Combo corte + barba",
      },
      {
        quote:
          "Fiz o Dia do Noivo com meus padrinhos e foi um dos melhores momentos do casamento.",
        author: "Cliente",
        role: "Dia do Noivo",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Antes de agendar, todo mundo pergunta",
    items: [
      {
        question: "Precisa agendar ou aceita encaixe?",
        answer:
          "Trabalhamos com horário marcado pelo WhatsApp para você não pegar fila. Havendo cadeira livre, o encaixe é bem-vindo.",
      },
      {
        question: "Como funciona a assinatura mensal?",
        answer:
          "Você paga um valor fixo por mês e corta quantas vezes quiser, com horário preferencial e desconto em produtos. Sem fidelidade.",
      },
      {
        question: "Quais formas de pagamento aceitam?",
        answer:
          "Pix, cartão de débito e crédito. A assinatura pode ser recorrente no cartão.",
      },
      {
        question: "Atendem crianças?",
        answer:
          "Sim. Corte infantil com paciência e capricho — de preferência nos horários da manhã, mais tranquilos.",
      },
    ],
  },
  cta: {
    title: "Bora ficar na régua?",
    description:
      "Agende pelo WhatsApp e chegue na hora marcada. Sem fila, sem espera.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Agende seu horário",
    description:
      "Chame no WhatsApp ou apareça para conhecer o espaço.",
    items: [
      {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Resposta rápida em horário comercial",
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
        label: "Barbearia",
        value: "Rua Exemplo, 310 — Centro",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Barbearia clássica com agendamento por WhatsApp, assinatura mensal e atendimento de primeira. Seg a sáb, 9h às 20h.",
};
