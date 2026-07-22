import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { TemplatePreview } from "@/components/templates/template-preview";
import type { NicheTemplate } from "@/types";

interface FeaturedTemplatesProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  templates: NicheTemplate[];
}

export function FeaturedTemplates({
  id,
  eyebrow,
  title,
  description,
  templates,
}: FeaturedTemplatesProps) {
  return (
    <Section id={id} className="border-y bg-muted/30">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <Reveal key={template.slug} delay={index * 0.08}>
            <Link
              href={`/modelos/${template.slug}`}
              className="block transition-transform duration-300 hover:-translate-y-1"
              aria-label={`Ver modelo para ${template.nicheLabel}`}
            >
              <TemplatePreview template={template} />
              <p className="mt-3 text-center text-sm font-medium">
                {template.nicheLabel}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/modelos">
            Ver todos os modelos
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
