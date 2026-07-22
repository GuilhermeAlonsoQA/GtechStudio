import {
  Building2,
  Calculator,
  FileText,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  TrendingDown,
  Users,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const contadores: NicheTemplate = {
  slug: "contadores",
  nicheLabel: "Contadores",
  nicheIcon: Calculator,
  accent: {
    from: "#047857",
    to: "#2dd4bf",
  },
  business: {
    name: "Contare Contabilidade",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Contadores",
    description:
      "Modelo de landing page premium para escritórios de contabilidade: serviços claros, credibilidade e captação de clientes empresariais.",
  },
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Pedir proposta", href: "#contato" },
  hero: {
    eyebrow: "Contabilidade consultiva",
    title: "Sua empresa em dia com o fisco e com o futuro",
    description:
      "Contabilidade completa para pequenas e médias empresas, com atendimento próximo, prazos cumpridos e orientação que gera economia real.",
    primaryCta: { label: "Pedir proposta", href: "#contato" },
    secondaryCta: { label: "Ver serviços", href: "#servicos" },
  },
  stats: [
    { value: "20+", label: "Anos de experiência contábil" },
    { value: "300+", label: "Empresas atendidas" },
    { value: "0", label: "Multas por atraso de obrigações" },
  ],
  services: {
    eyebrow: "Serviços",
    title: "Tudo o que a contabilidade da sua empresa precisa",
    description:
      "Do CNPJ à declaração anual, cuidamos da burocracia para você cuidar do negócio.",
    items: [
      {
        icon: Building2,
        title: "Abertura de Empresa",
        description:
          "CNPJ, alvarás e enquadramento tributário ideal, com orientação completa do primeiro passo em diante.",
      },
      {
        icon: Calculator,
        title: "Contabilidade Mensal",
        description:
          "Escrituração, balancetes e obrigações acessórias entregues no prazo, todos os meses.",
      },
      {
        icon: Users,
        title: "Folha de Pagamento",
        description:
          "Admissões, férias, rescisões e eSocial administrados sem dor de cabeça para você.",
      },
      {
        icon: Landmark,
        title: "Imposto de Renda",
        description:
          "Declarações de pessoa física e jurídica com segurança, aproveitando cada dedução possível.",
      },
      {
        icon: TrendingDown,
        title: "Planejamento Tributário",
        description:
          "Análise do regime ideal — Simples, Presumido ou Real — para pagar apenas o imposto necessário.",
      },
      {
        icon: FileText,
        title: "Regularização",
        description:
          "Empresas com pendências voltam a operar em dia: parcelamentos, certidões e débitos resolvidos.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Empresas que confiam na nossa entrega",
    items: [
      {
        quote:
          "Migramos para a Contare e no primeiro ano economizamos o equivalente a dois meses de impostos com o novo enquadramento.",
        author: "Cliente",
        role: "Comércio varejista",
      },
      {
        quote:
          "Nunca mais perdi um prazo. A equipe avisa, orienta e resolve antes de o problema existir.",
        author: "Cliente",
        role: "Prestador de serviços",
      },
      {
        quote:
          "Abriram minha empresa em uma semana, com todas as licenças, e me explicaram cada etapa em linguagem simples.",
        author: "Cliente",
        role: "Clínica de estética",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas que todo empresário faz",
    items: [
      {
        question: "Quanto custa a contabilidade mensal?",
        answer:
          "O honorário depende do regime tributário, do faturamento e do número de funcionários. Enviamos uma proposta personalizada em até 24 horas após a primeira conversa.",
      },
      {
        question: "Vocês atendem MEI?",
        answer:
          "Sim. Cuidamos da declaração anual do MEI e orientamos a transição para microempresa quando o faturamento cresce.",
      },
      {
        question: "Como funciona a troca de contador?",
        answer:
          "É mais simples do que parece: cuidamos de toda a transição com o escritório anterior, sem interrupção das suas obrigações.",
      },
      {
        question: "O atendimento é online?",
        answer:
          "Sim. Documentos, assinaturas e reuniões podem ser 100% digitais, com atendimento presencial disponível quando você preferir.",
      },
    ],
  },
  cta: {
    title: "Pague menos imposto. Legalmente.",
    description:
      "Envie os dados da sua empresa e receba uma análise gratuita do seu enquadramento tributário.",
    cta: { label: "Pedir análise gratuita", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Fale com um contador",
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
        value: "Av. Exemplo, 500 — Sala 12",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Contabilidade consultiva para pequenas e médias empresas. CRC XX-000000/O.",
};
