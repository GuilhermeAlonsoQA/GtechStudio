import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/types";

interface HeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

function TitleWithHighlight({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  const index = highlight ? title.indexOf(highlight) : -1;

  if (!highlight || index === -1) {
    return <>{title}</>;
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
        {highlight}
      </span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export function Hero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute top-[-30%] left-1/2 h-[30rem] w-[54rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/20 to-brand-2/20 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase backdrop-blur">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2"
              />
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <TitleWithHighlight title={title} highlight={highlight} />
          </h1>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-background/60 px-7 backdrop-blur"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
