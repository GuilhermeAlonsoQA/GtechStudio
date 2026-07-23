import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta: CtaLink;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface SectionContent<TItem> {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TItem[];
}

export interface NicheTemplate {
  slug: string;
  nicheLabel: string;
  nicheIcon: LucideIcon;
  accent: {
    from: string;
    to: string;
  };
  images: {
    hero: string;
    about: string;
    gallery: string[];
  };
  about: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  business: {
    name: string;
    whatsapp: string;
  };
  seo: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  navCta: CtaLink;
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
  };
  stats: Stat[];
  services: SectionContent<Service>;
  testimonials: SectionContent<Testimonial>;
  faq: SectionContent<FaqItem>;
  cta: {
    title: string;
    description?: string;
    cta: CtaLink;
  };
  contact: SectionContent<ContactChannel>;
  footerDescription: string;
}
