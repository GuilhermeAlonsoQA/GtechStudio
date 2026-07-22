import type { CtaLink, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Planos", href: "/#planos" },
  { label: "Dúvidas", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

export const navCta: CtaLink = {
  label: "Começar projeto",
  href: "/#contato",
};

export const footerItems: NavItem[] = navItems;
