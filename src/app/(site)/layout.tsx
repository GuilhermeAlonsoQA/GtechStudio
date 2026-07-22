import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";
import { footerItems, navCta, navItems } from "@/lib/content/site";
import { siteConfig } from "@/lib/site-config";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar brand={siteConfig.name} items={navItems} cta={navCta} />
      {children}
      <Footer
        brand={siteConfig.name}
        description={siteConfig.description}
        items={footerItems}
      />
      <WhatsAppButton href={siteConfig.links.whatsapp} />
    </>
  );
}
