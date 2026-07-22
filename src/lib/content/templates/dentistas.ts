import {
  CalendarCheck,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const dentistas: NicheTemplate = {
  slug: "dentistas",
  nicheLabel: "Dentistas",
  nicheIcon: Smile,
  accent: {
    from: "#0e7490",
    to: "#22d3ee",
  },
  business: {
    name: "Clínica Sorriso Prime",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Dentistas",
    description:
      "Modelo de landing page premium para clínicas odontológicas: tratamentos em destaque, confiança e agendamento pelo WhatsApp.",
  },
  nav: [
    { label: "Tratamentos", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar avaliação", href: "#contato" },
  hero: {
    eyebrow: "Odontologia de excelência",
    title: "O sorriso que você sempre quis, com o cuidado que você merece",
    description:
      "Tecnologia de ponta, atendimento acolhedor e planos de tratamento transparentes — tudo para você sorrir com confiança.",
    primaryCta: { label: "Agendar avaliação", href: "#contato" },
    secondaryCta: { label: "Conhecer tratamentos", href: "#servicos" },
  },
  stats: [
    { value: "10+", label: "Anos cuidando de sorrisos" },
    { value: "5.000+", label: "Pacientes atendidos" },
    { value: "4,9★", label: "Avaliação média no Google" },
  ],
  services: {
    eyebrow: "Tratamentos",
    title: "Cuidado completo para a sua saúde bucal",
    description:
      "Da prevenção à estética, tudo em um só lugar, com materiais premium e protocolos rigorosos de biossegurança.",
    items: [
      {
        icon: Sparkles,
        title: "Clareamento Dental",
        description:
          "Protocolos seguros e supervisionados para um sorriso visivelmente mais branco, sem sensibilidade.",
      },
      {
        icon: Smile,
        title: "Ortodontia",
        description:
          "Aparelhos fixos e alinhadores invisíveis com acompanhamento próximo em cada fase do tratamento.",
      },
      {
        icon: ShieldCheck,
        title: "Implantes",
        description:
          "Reabilitação com implantes de alta qualidade, planejamento digital e previsibilidade de resultado.",
      },
      {
        icon: Stethoscope,
        title: "Odontologia Preventiva",
        description:
          "Limpezas, check-ups e orientação personalizada para evitar problemas antes que apareçam.",
      },
      {
        icon: HeartPulse,
        title: "Estética do Sorriso",
        description:
          "Facetas, lentes de contato dental e harmonização do sorriso com naturalidade em primeiro lugar.",
      },
      {
        icon: CalendarCheck,
        title: "Atendimento Facilitado",
        description:
          "Agendamento pelo WhatsApp, horários flexíveis e lembretes para você nunca perder uma consulta.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Sorrisos que falam por nós",
    items: [
      {
        quote:
          "Sempre tive medo de dentista. Aqui fui acolhida desde a recepção e terminei o tratamento sem nenhum trauma.",
        author: "Fernanda L.",
        role: "Paciente — Ortodontia",
      },
      {
        quote:
          "Fiz meu implante com planejamento digital e o resultado ficou perfeito. Recomendo de olhos fechados.",
        author: "Carlos M.",
        role: "Paciente — Implantes",
      },
      {
        quote:
          "O clareamento superou minhas expectativas e o acompanhamento foi impecável do início ao fim.",
        author: "Juliana S.",
        role: "Paciente — Estética",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas que recebemos todos os dias",
    items: [
      {
        question: "A avaliação inicial é gratuita?",
        answer:
          "Sim. Na primeira visita fazemos um exame completo e apresentamos o plano de tratamento com valores e formas de pagamento, sem compromisso.",
      },
      {
        question: "Vocês atendem convênios?",
        answer:
          "Trabalhamos com os principais convênios odontológicos e também oferecemos condições especiais para tratamentos particulares.",
      },
      {
        question: "Posso parcelar o tratamento?",
        answer:
          "Sim. Os tratamentos podem ser parcelados no cartão ou em condições combinadas diretamente com a clínica.",
      },
      {
        question: "Crianças também são atendidas?",
        answer:
          "Sim. Temos atendimento odontopediátrico com abordagem lúdica para as crianças criarem uma relação positiva com o dentista.",
      },
    ],
  },
  cta: {
    title: "Seu novo sorriso começa com uma avaliação",
    description:
      "Agende agora pelo WhatsApp e dê o primeiro passo com quem entende de sorrisos.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Agende a sua avaliação",
    description:
      "Preencha o formulário ou fale direto pelos nossos canais de atendimento.",
    items: [
      {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "Resposta em minutos no horário comercial",
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
        value: "Rua Exemplo, 200 — Centro",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Clínica odontológica com atendimento completo: prevenção, ortodontia, implantes e estética do sorriso. Responsável técnico: CRO/XX 00.000.",
};
