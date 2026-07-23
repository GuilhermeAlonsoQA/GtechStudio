import {
  Brain,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sprout,
  Video,
} from "lucide-react";

import type { NicheTemplate } from "@/types";

const whatsapp = "https://wa.me/5500000000000";

export const psicologos: NicheTemplate = {
  slug: "psicologos",
  nicheLabel: "Psicólogos",
  nicheIcon: Brain,
  accent: {
    from: "#7c3aed",
    to: "#ec4899",
  },
  images: {
    hero: "/images/psicologos/hero.jpg",
    about: "/images/psicologos/about.jpg",
    gallery: [],
  },
  about: {
    eyebrow: "Sobre",
    title: "Um espaço seguro para você ser quem é",
    paragraphs: [
      "Acreditamos que cuidar da saúde mental é um ato de coragem. Por isso oferecemos um ambiente sigiloso e acolhedor, onde você pode se expressar sem julgamentos.",
      "O acompanhamento é construído junto com você, respeitando o seu tempo e a sua história, com abordagens baseadas em evidências.",
    ],
    highlights: [
      "Sigilo absoluto garantido pelo Código de Ética",
      "Atendimento presencial e online com a mesma qualidade",
      "Plano terapêutico personalizado para cada pessoa",
    ],
  },
  business: {
    name: "Espaço Mente Leve",
    whatsapp,
  },
  seo: {
    title: "Modelo de site para Psicólogos",
    description:
      "Modelo de landing page premium para psicólogos: acolhimento desde o primeiro clique, abordagens claras e agendamento simples.",
  },
  nav: [
    { label: "Atendimentos", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  navCta: { label: "Agendar sessão", href: "#contato" },
  hero: {
    eyebrow: "Psicologia clínica",
    title: "Um espaço seguro para cuidar do que você sente",
    description:
      "Atendimento psicológico presencial e online, com escuta acolhedora e um plano terapêutico construído junto com você.",
    primaryCta: { label: "Agendar primeira sessão", href: "#contato" },
    secondaryCta: { label: "Conhecer atendimentos", href: "#servicos" },
  },
  stats: [
    { value: "12+", label: "Anos de prática clínica" },
    { value: "3.000+", label: "Sessões realizadas" },
    { value: "100%", label: "Sigilo e ética profissional" },
  ],
  services: {
    eyebrow: "Atendimentos",
    title: "Cuidado sob medida para cada momento da vida",
    description:
      "Cada pessoa chega com uma história. O acompanhamento é construído a partir da sua.",
    items: [
      {
        icon: Brain,
        title: "Terapia Individual",
        description:
          "Um espaço só seu para elaborar questões, desenvolver autoconhecimento e construir mudanças reais.",
      },
      {
        icon: HeartHandshake,
        title: "Terapia de Casal",
        description:
          "Mediação de conflitos e reconstrução do diálogo para relações mais saudáveis e conscientes.",
      },
      {
        icon: Video,
        title: "Atendimento Online",
        description:
          "Sessões por videochamada com a mesma qualidade e sigilo do atendimento presencial, onde você estiver.",
      },
      {
        icon: ShieldCheck,
        title: "Ansiedade e Estresse",
        description:
          "Estratégias baseadas em evidências para compreender gatilhos e recuperar o equilíbrio no dia a dia.",
      },
      {
        icon: Compass,
        title: "Orientação de Carreira",
        description:
          "Apoio em transições profissionais, escolhas difíceis e construção de um caminho com propósito.",
      },
      {
        icon: Sprout,
        title: "Desenvolvimento Pessoal",
        description:
          "Acompanhamento contínuo para fortalecer autoestima, limites e relações interpessoais.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Histórias de quem encontrou espaço para crescer",
    items: [
      {
        quote:
          "Encontrei um espaço onde posso ser eu mesma sem julgamentos. A terapia mudou a forma como lido com a ansiedade.",
        author: "Paciente",
        role: "Terapia Individual",
      },
      {
        quote:
          "As sessões de casal nos devolveram o diálogo. Saímos de um ciclo de brigas para uma relação de parceria.",
        author: "Casal atendido",
        role: "Terapia de Casal",
      },
      {
        quote:
          "O atendimento online funcionou muito melhor do que eu imaginava. Consistência que finalmente consegui manter.",
        author: "Paciente",
        role: "Atendimento Online",
      },
    ],
  },
  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas comuns antes de começar",
    items: [
      {
        question: "Como funciona a primeira sessão?",
        answer:
          "A primeira sessão é um espaço de acolhimento e escuta: você conta o que te trouxe até aqui e alinhamos juntos os objetivos e o formato do acompanhamento.",
      },
      {
        question: "Qual a frequência das sessões?",
        answer:
          "Em geral as sessões são semanais, com duração de 50 minutos. A frequência pode ser ajustada conforme o momento e a necessidade de cada pessoa.",
      },
      {
        question: "O atendimento online é seguro?",
        answer:
          "Sim. As sessões online seguem as normas do Conselho Federal de Psicologia, em plataforma segura e com o mesmo sigilo do atendimento presencial.",
      },
      {
        question: "Tudo o que eu disser é confidencial?",
        answer:
          "Absolutamente. O sigilo profissional é garantido pelo Código de Ética do psicólogo e protege tudo o que é compartilhado em sessão.",
      },
    ],
  },
  cta: {
    title: "Dar o primeiro passo já é começar a se cuidar",
    description:
      "Agende uma primeira conversa e sinta se o espaço faz sentido para você. Sem compromisso.",
    cta: { label: "Agendar pelo WhatsApp", href: whatsapp },
  },
  contact: {
    eyebrow: "Contato",
    title: "Agende a sua sessão",
    description:
      "Preencha o formulário ou fale direto pelos canais de atendimento.",
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
        label: "Consultório",
        value: "Rua Exemplo, 45 — Sala 3",
        href: "#contato",
      },
    ],
  },
  footerDescription:
    "Atendimento psicológico presencial e online para adultos e casais. CRP 00/00000.",
};
