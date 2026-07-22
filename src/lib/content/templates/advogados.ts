import {
  Briefcase,
  Building2,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  Users,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const advogados: NicheTemplate = {
  slug: "advogados",
  nicheLabel: "Advogados",
  nicheIcon: Scale,
  business: {
    name: "Almeida & Prado Advocacia",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Advogados",
    description:
      "Modelo de landing page premium para escritórios de advocacia: atuação clara, autoridade e agendamento de consulta em um clique.",
  },
  nav: [
    { label: "Áreas de atuação", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar consulta", href: "#contato" },
  hero: {
    eyebrow: "Advocacia especializada",
    title: "Defesa técnica e atendimento humano para proteger o que é seu",
    description:
      "Há mais de 15 anos ao lado de pessoas e empresas em questões cíveis, trabalhistas e de família, com transparência em cada etapa do processo.",
    primaryCta: { label: "Agendar consulta", href: "#contato" },
    secondaryCta: { label: "Ver áreas de atuação", href: "#servicos" },
  },
  stats: [
    { value: "15+", label: "Anos de atuação" },
    { value: "1.200+", label: "Casos conduzidos" },
    { value: "98%", label: "Clientes que nos recomendam" },
  ],
  services: {
    eyebrow: "Áreas de atuação",
    title: "Especialistas no que realmente importa para você",
    description:
      "Atuação focada em poucas áreas para entregar profundidade, não volume.",
    items: [
      {
        icon: Scale,
        title: "Direito Civil",
        description:
          "Contratos, responsabilidade civil, cobranças e indenizações conduzidos com estratégia e agilidade.",
      },
      {
        icon: Briefcase,
        title: "Direito Trabalhista",
        description:
          "Defesa de trabalhadores e empresas em reclamações, acordos e consultoria preventiva.",
      },
      {
        icon: Users,
        title: "Direito de Família",
        description:
          "Divórcios, guarda, pensão e inventários tratados com discrição e sensibilidade.",
      },
      {
        icon: Building2,
        title: "Direito Empresarial",
        description:
          "Constituição de empresas, contratos societários e assessoria jurídica contínua.",
      },
      {
        icon: FileText,
        title: "Consultoria Preventiva",
        description:
          "Análise de contratos e riscos antes de assinar, para evitar litígios no futuro.",
      },
      {
        icon: MessageCircle,
        title: "Acompanhamento Próximo",
        description:
          "Atualizações claras sobre o seu processo, sem juridiquês e sem deixar você sem resposta.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem confiou, recomenda",
    items: [
      {
        quote:
          "Fui atendida com clareza do início ao fim. Sempre soube exatamente em que fase estava o meu processo.",
        author: "Mariana C.",
        role: "Cliente — Direito de Família",
      },
      {
        quote:
          "A consultoria preventiva evitou um contrato que teria custado caro à minha empresa. Profissionalismo raro.",
        author: "Ricardo T.",
        role: "Empresário — Direito Empresarial",
      },
      {
        quote:
          "Resolveram minha causa trabalhista com agilidade e me mantiveram informado a cada etapa.",
        author: "João P.",
        role: "Cliente — Direito Trabalhista",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas que recebemos antes da primeira consulta",
    items: [
      {
        question: "A primeira consulta é paga?",
        answer:
          "A consulta inicial de avaliação é agendada sem compromisso. Nela entendemos o seu caso e apresentamos as possibilidades de atuação e os honorários com total transparência.",
      },
      {
        question: "Quanto tempo demora um processo?",
        answer:
          "Depende da área e da complexidade do caso. Na primeira consulta apresentamos uma estimativa realista com base em casos semelhantes que já conduzimos.",
      },
      {
        question: "Vocês atendem online?",
        answer:
          "Sim. Todo o acompanhamento pode ser feito por videochamada e WhatsApp, com a mesma qualidade do atendimento presencial.",
      },
      {
        question: "Como são cobrados os honorários?",
        answer:
          "Os honorários são definidos por escrito antes do início da atuação, conforme a tabela da OAB e a complexidade do caso, sem custos surpresa.",
      },
    ],
  },
  cta: {
    title: "O primeiro passo para resolver o seu caso é uma conversa",
    description:
      "Agende uma consulta de avaliação e receba uma análise honesta sobre as suas possibilidades.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Agende a sua consulta",
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
        value: "Av. Exemplo, 1000 — Centro",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Advocacia especializada em Direito Civil, Trabalhista, de Família e Empresarial. OAB/XX 00.000.",
};
