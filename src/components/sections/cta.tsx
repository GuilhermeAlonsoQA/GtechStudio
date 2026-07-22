import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/types";

interface CtaProps {
  id?: string;
  title: string;
  description?: string;
  cta: CtaLink;
}

export function Cta({ id, title, description, cta }: CtaProps) {
  return (
    <Section id={id}>
      <Reveal className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground sm:py-20">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-pretty text-primary-foreground/80">
            {description}
          </p>
        )}
        <Button asChild size="lg" variant="secondary" className="rounded-full">
          <Link href={cta.href}>
            {cta.label}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}
