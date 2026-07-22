import {
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import type {
  ContactChannel,
  CtaLink,
  FaqItem,
  PricingPlan,
  Service,
  Stat,
} from "@/types";

export const hero = {
  eyebrow: "Gtech Studio",
  title: "Landing Pages Premium que transformam visitantes em clientes",
  description:
    "Presença digital sofisticada para profissionais liberais e pequenas empresas. Design elegante, performance extrema e foco total em conversão.",
  primaryCta: {
    label: "Começar meu projeto",
    href: "/#contato",
  } satisfies CtaLink,
  secondaryCta: {
    label: "Ver serviços",
    href: "/#servicos",
  } satisfies CtaLink,
};

export const services: Service[] = [
  {
    icon: Sparkles,
    title: "Landing Pages Premium",
    description:
      "Páginas de alta conversão com design sofisticado, feitas sob medida para o seu posicionamento e o seu público.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença digital completa e elegante para a sua marca, com todas as informações que o seu cliente procura.",
  },
  {
    icon: Search,
    title: "SEO Técnico",
    description:
      "Estrutura otimizada para o Google: metadados, sitemap, dados estruturados e performance de carregamento.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Configuração e otimização do seu perfil no Google para você ser encontrado por quem busca na sua região.",
  },
  {
    icon: Server,
    title: "Hospedagem",
    description:
      "Seu site no ar em infraestrutura global, com certificado de segurança e carregamento rápido em qualquer lugar.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Atualizações de conteúdo e acompanhamento contínuo para o seu site estar sempre atual e funcionando.",
  },
];

export const stats: Stat[] = [
  { value: "95+", label: "Pontuação de performance no Google Lighthouse" },
  { value: "7 dias", label: "Prazo médio da proposta ao site no ar" },
  { value: "100%", label: "Responsivo em celulares, tablets e desktops" },
];

export const pricing = {
  eyebrow: "Planos",
  title: "Investimento claro, sem surpresas",
  description:
    "Escolha o plano que combina com o momento do seu negócio. Todos incluem design premium, SEO técnico e site responsivo.",
  plans: [
    {
      name: "Essencial",
      description: "Para quem precisa de uma presença digital profissional.",
      price: "R$ 997",
      period: "pagamento único",
      features: [
        "Landing page de seção única",
        "Design premium responsivo",
        "SEO técnico básico",
        "Botão de WhatsApp",
        "Publicação inclusa",
      ],
      cta: { label: "Escolher Essencial", href: siteConfig.links.whatsapp },
    },
    {
      name: "Profissional",
      description: "O mais escolhido: landing page completa para converter.",
      price: "R$ 1.997",
      period: "pagamento único",
      features: [
        "Landing page completa (até 8 seções)",
        "Design premium responsivo",
        "SEO técnico completo",
        "Formulário de contato",
        "Google Business Profile",
        "1 mês de manutenção incluso",
      ],
      highlighted: true,
      cta: { label: "Escolher Profissional", href: siteConfig.links.whatsapp },
    },
    {
      name: "Premium",
      description: "Site institucional completo para marcas estabelecidas.",
      price: "R$ 3.497",
      period: "pagamento único",
      features: [
        "Site institucional (até 5 páginas)",
        "Design premium responsivo",
        "SEO técnico completo",
        "Formulário de contato",
        "Google Business Profile",
        "3 meses de manutenção inclusos",
      ],
      cta: { label: "Escolher Premium", href: siteConfig.links.whatsapp },
    },
  ] satisfies PricingPlan[],
};

export const faq: FaqItem[] = [
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "O prazo médio é de 7 dias úteis a partir da aprovação da proposta e do envio do conteúdo. Projetos maiores, como sites institucionais, podem levar até 15 dias úteis.",
  },
  {
    question: "O que eu preciso enviar para começar?",
    answer:
      "Apenas o básico: logotipo (se tiver), textos ou tópicos sobre o seu negócio e fotos, se desejar usá-las. Ajudamos a organizar e lapidar todo o conteúdo durante o projeto.",
  },
  {
    question: "A hospedagem está inclusa?",
    answer:
      "Sim. Publicamos o seu site em infraestrutura global com certificado de segurança (HTTPS) incluso. O registro do domínio (ex.: seunome.com.br) é feito em seu nome, com a nossa orientação.",
  },
  {
    question: "Posso pedir alterações depois da entrega?",
    answer:
      "Sim. Cada plano inclui uma rodada de ajustes na entrega. Depois disso, alterações pontuais são atendidas pelo serviço de manutenção.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Todos os projetos saem com SEO técnico: estrutura correta de títulos, metadados, sitemap e dados estruturados. Isso prepara o site para indexação — o posicionamento evolui com o tempo e com a qualidade do conteúdo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "50% na aprovação da proposta e 50% na entrega. Aceitamos Pix e cartão de crédito com possibilidade de parcelamento.",
  },
];

export const finalCta = {
  title: "Pronto para ter uma presença digital à altura do seu trabalho?",
  description:
    "Conte sobre o seu projeto e receba uma proposta personalizada em até 24 horas.",
  cta: {
    label: "Falar com a Gtech Studio",
    href: siteConfig.links.whatsapp,
  } satisfies CtaLink,
};

export const contactChannels: ContactChannel[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Resposta em até 24h",
    href: siteConfig.links.whatsapp,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@gtechstudio",
    href: siteConfig.links.instagram,
  },
];
