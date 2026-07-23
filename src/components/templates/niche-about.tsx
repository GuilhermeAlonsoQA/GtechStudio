import { Check } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Section } from "@/components/sections/section";
import { NicheVisual } from "@/components/templates/niche-visual";
import type { NicheTemplate } from "@/types";

interface NicheAboutProps {
  id?: string;
  template: NicheTemplate;
}

export function NicheAbout({ id, template }: NicheAboutProps) {
  const { about, business } = template;

  return (
    <Section id={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <NicheVisual
            src={template.images.about}
            alt={`Equipe da ${business.name}`}
            fallbackIcon={
              <template.nicheIcon
                className="size-16"
                strokeWidth={1.25}
                aria-hidden
              />
            }
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 flex flex-col gap-6 lg:order-2">
          {about.eyebrow && (
            <p className="text-sm font-semibold tracking-widest text-brand uppercase">
              {about.eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {about.title}
          </h2>
          <div className="flex flex-col gap-4 text-pretty text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-col gap-3">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                  <Check className="size-3" aria-hidden />
                </span>
                <span className="text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
