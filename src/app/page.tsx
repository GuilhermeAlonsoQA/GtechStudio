import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { ContactForm } from "@/features/contact-form/contact-form";
import {
  contactChannels,
  faq,
  finalCta,
  hero,
  pricing,
  services,
  stats,
} from "@/lib/content/home";

export default function HomePage() {
  return (
    <main>
      <Hero {...hero} />
      <Stats stats={stats} />
      <Services
        id="servicos"
        eyebrow="Serviços"
        title="Tudo o que a sua presença digital precisa"
        description="Do design à publicação, cuidamos de cada detalhe para o seu negócio ser encontrado e escolhido."
        services={services}
      />
      <Pricing
        id="planos"
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        description={pricing.description}
        plans={pricing.plans}
      />
      <Faq
        id="faq"
        eyebrow="Dúvidas frequentes"
        title="Perguntas que recebemos todos os dias"
        items={faq}
      />
      <Cta
        title={finalCta.title}
        description={finalCta.description}
        cta={finalCta.cta}
      />
      <Contact
        id="contato"
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        description="Preencha o formulário ou fale direto pelos nossos canais."
        channels={contactChannels}
      >
        <ContactForm />
      </Contact>
    </main>
  );
}
