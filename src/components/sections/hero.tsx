import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/types";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="py-24 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          {eyebrow && (
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
