import {
  Baby,
  ClipboardCheck,
  HeartPulse,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const clinicas: NicheTemplate = {
  slug: "clinicas",
  nicheLabel: "Clínicas",
  nicheIcon: Stethoscope,
  accent: {
    from: "#0369a1",
    to: "#22d3ee",
  },
  images: {
    hero: "/images/clinicas/hero.jpg",
    about: "/images/clinicas/about.jpg",
    gallery: ["/images/clinicas/1.jpg", "/images/clinicas/2.jpg", "/images/clinicas/3.jpg"],
  },
  about: {
    eyebrow: "Sobre",
    title: "Saúde integrada para toda a família, perto de você",
    paragraphs: [
      "Reunimos diversas especialidades, exames e check-ups em um só lugar, com uma equipe experiente e estrutura moderna.",
      "Agendamento rápido, resultados online e um atendimento que trata você pelo nome, em cada fase da vida.",
    ],
    highlights: [
      "Diversas especialidades em um só lugar",
      "Exames com coleta na própria clínica",
      "Agendamento em minutos pelo WhatsApp",
    ],
  },
  business: {
    name: "Clínica Vitalis",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Clínicas",
    description:
      "Modelo de landing page premium para clínicas de saúde: especialidades organizadas, confiança e agendamento simplificado.",
  },
  nav: [
    { label: "Especialidades", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar consulta", href: "#contato" },
  hero: {
    eyebrow: "Saúde integrada",
    title: "Cuidado completo para a saúde de toda a família",
    description:
      "Especialidades médicas, exames e check-ups em um só lugar, com agendamento rápido e atendimento que trata você pelo nome.",
    primaryCta: { label: "Agendar consulta", href: "#contato" },
    secondaryCta: { label: "Ver especialidades", href: "#servicos" },
  },
  stats: [
    { value: "12", label: "Especialidades disponíveis" },
    { value: "20 mil+", label: "Pacientes atendidos" },
    { value: "48h", label: "Prazo máximo para agendamento" },
  ],
  services: {
    eyebrow: "Especialidades",
    title: "Tudo em um só lugar, perto de você",
    description:
      "Equipe experiente e estrutura moderna para cuidar de cada fase da vida.",
    items: [
      {
        icon: Stethoscope,
        title: "Clínica Geral",
        description:
          "Consultas de rotina, acompanhamento e encaminhamento certeiro para especialidades.",
      },
      {
        icon: HeartPulse,
        title: "Cardiologia",
        description:
          "Prevenção e acompanhamento cardiovascular com eletrocardiograma na própria clínica.",
      },
      {
        icon: ShieldCheck,
        title: "Dermatologia",
        description:
          "Saúde da pele em todas as idades: diagnóstico, tratamento e prevenção.",
      },
      {
        icon: Baby,
        title: "Pediatria",
        description:
          "Acompanhamento do crescimento e do desenvolvimento com atendimento acolhedor para os pequenos.",
      },
      {
        icon: Microscope,
        title: "Exames Laboratoriais",
        description:
          "Coleta na própria clínica e resultados online, sem deslocamentos desnecessários.",
      },
      {
        icon: ClipboardCheck,
        title: "Check-up Completo",
        description:
          "Pacotes de avaliação preventiva com consultas e exames organizados em um único dia.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem cuida da saúde aqui, recomenda",
    items: [
      {
        quote:
          "Consegui consulta em dois dias e saí com os exames colhidos. Organização impressionante.",
        author: "Paciente",
        role: "Clínica Geral",
      },
      {
        quote:
          "A pediatra atende minha filha desde bebê. Confiança que não se encontra em qualquer lugar.",
        author: "Paciente",
        role: "Pediatria",
      },
      {
        quote:
          "O check-up completo em um dia só resolveu o que eu adiava havia anos.",
        author: "Paciente",
        role: "Check-up",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas comuns de novos pacientes",
    items: [
      {
        question: "Vocês atendem convênios?",
        answer:
          "Atendemos os principais convênios da região e também consultas particulares com valores acessíveis. Consulte o seu plano pelo WhatsApp.",
      },
      {
        question: "Como agendo uma consulta?",
        answer:
          "Pelo WhatsApp ou telefone, em menos de dois minutos. Confirmamos data, horário e enviamos um lembrete na véspera.",
      },
      {
        question: "Em quanto tempo saem os resultados dos exames?",
        answer:
          "A maioria dos resultados fica disponível online em até 48 horas, com acesso por senha.",
      },
      {
        question: "A clínica atende urgências?",
        answer:
          "Atendemos encaixes de urgência leve em horário comercial. Para emergências, procure sempre o pronto-socorro mais próximo.",
      },
    ],
  },
  cta: {
    title: "Sua saúde não pode esperar a próxima segunda-feira",
    description:
      "Agende sua consulta em menos de dois minutos pelo WhatsApp.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Agende sua consulta",
    description:
      "Preencha o formulário ou fale direto pelos nossos canais de atendimento.",
    items: [
      {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Agendamento em minutos",
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
        label: "Clínica",
        value: "Av. Exemplo, 2500 — Térreo",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Clínica de saúde integrada: especialidades médicas, exames e check-ups. Responsável técnico: CRM/XX 00000.",
};
