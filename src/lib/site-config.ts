export const siteConfig = {
  name: "Gtech Studio",
  shortName: "Gtech",
  description:
    "Landing Pages Premium para profissionais liberais e pequenas empresas. Design sofisticado, performance extrema e presença digital que converte.",
  url: "https://gtechstudio.com.br",
  locale: "pt-BR",
  links: {
    whatsapp: "https://wa.me/5500000000000",
    email: "contato@gtechstudio.com.br",
    instagram: "https://instagram.com/gtechstudio",
  },
} as const;

export type SiteConfig = typeof siteConfig;
