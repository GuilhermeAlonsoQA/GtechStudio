import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";
import { DemoBanner } from "@/components/templates/demo-banner";
import { ContactForm } from "@/features/contact-form/contact-form";
import type { NicheTemplate } from "@/types";

interface NicheLandingProps {
  template: NicheTemplate;
}

export function NicheLanding({ template }: NicheLandingProps) {
  return (
    <>
      <DemoBanner nicheLabel={template.nicheLabel} />
      <Navbar
        brand={template.business.name}
        items={template.nav}
        cta={template.navCta}
      />
      <main>
        <Hero {...template.hero} />
        <Stats stats={template.stats} />
        <Services
          id="servicos"
          eyebrow={template.services.eyebrow}
          title={template.services.title}
          description={template.services.description}
          services={template.services.items}
        />
        <Testimonials
          id="depoimentos"
          eyebrow={template.testimonials.eyebrow}
          title={template.testimonials.title}
          description={template.testimonials.description}
          testimonials={template.testimonials.items}
        />
        <Faq
          id="faq"
          eyebrow={template.faq.eyebrow}
          title={template.faq.title}
          description={template.faq.description}
          items={template.faq.items}
        />
        <Cta
          title={template.cta.title}
          description={template.cta.description}
          cta={template.cta.cta}
        />
        <Contact
          id="contato"
          eyebrow={template.contact.eyebrow}
          title={template.contact.title}
          description={template.contact.description}
          channels={template.contact.items}
        >
          <ContactForm whatsappHref={template.business.whatsapp} />
        </Contact>
      </main>
      <Footer
        brand={template.business.name}
        description={template.footerDescription}
        items={template.nav}
      />
      <WhatsAppButton href={template.business.whatsapp} />
    </>
  );
}
