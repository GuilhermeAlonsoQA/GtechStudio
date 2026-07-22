import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemplatePreview } from "@/components/templates/template-preview";
import { templates } from "@/lib/content/templates";

export const metadata: Metadata = {
  title: "Modelos",
  description:
    "Conheça os modelos de landing page premium da Gtech Studio para cada nicho: advogados, dentistas, psicólogos, contadores e mais.",
  alternates: {
    canonical: "/modelos",
  },
};

export default function TemplatesPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Modelos"
          title="Um modelo premium para cada profissão"
          description="Navegue pelos modelos demonstrativos e imagine o seu negócio no lugar. Todo o conteúdo é personalizado para você."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <Reveal key={template.slug} delay={index * 0.06}>
              <Card className="h-full gap-4 pt-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
                <CardContent className="px-4">
                  <Link
                    href={`/modelos/${template.slug}`}
                    aria-label={`Ver modelo para ${template.nicheLabel}`}
                  >
                    <TemplatePreview template={template} />
                  </Link>
                </CardContent>
                <CardHeader>
                  <CardTitle>{template.nicheLabel}</CardTitle>
                  <CardDescription>{template.business.name}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {template.seo.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/modelos/${template.slug}`}>
                      Ver modelo completo
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
