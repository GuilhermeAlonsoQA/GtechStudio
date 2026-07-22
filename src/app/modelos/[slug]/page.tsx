import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NicheLanding } from "@/components/templates/niche-landing";
import { getTemplate, templates } from "@/lib/content/templates";

interface TemplatePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return {};
  }

  return {
    title: template.seo.title,
    description: template.seo.description,
    alternates: {
      canonical: `/modelos/${template.slug}`,
    },
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  return <NicheLanding template={template} />;
}
