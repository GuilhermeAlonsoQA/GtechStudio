import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import { NicheVisual } from "@/components/templates/niche-visual";
import type { NicheTemplate } from "@/types";

interface NicheGalleryProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  template: NicheTemplate;
}

export function NicheGallery({
  id,
  eyebrow,
  title,
  description,
  template,
}: NicheGalleryProps) {
  const { gallery } = template.images;

  if (gallery.length === 0) {
    return null;
  }

  return (
    <Section id={id} className="border-y bg-muted/30">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, index) => (
          <Reveal key={src} delay={index * 0.06}>
            <NicheVisual
              src={src}
              alt={`${template.business.name} — imagem ${index + 1}`}
              fallbackIcon={
                <template.nicheIcon
                  className="size-12"
                  strokeWidth={1.25}
                  aria-hidden
                />
              }
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
