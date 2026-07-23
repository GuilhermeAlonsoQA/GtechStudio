import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { NicheVisual } from "@/components/templates/niche-visual";
import { Button } from "@/components/ui/button";
import type { NicheTemplate } from "@/types";

interface NicheHeroProps {
  template: NicheTemplate;
}

export function NicheHero({ template }: NicheHeroProps) {
  const { hero, stats, business } = template;
  const featuredStat = stats[0];

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-neutral-50 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_20%,black,transparent)]" />
        <div className="absolute top-[-20%] right-[-10%] h-[28rem] w-[40rem] rounded-full bg-gradient-to-r from-brand/25 to-brand-2/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal className="flex flex-col items-start gap-6">
          {hero.eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-neutral-300 uppercase backdrop-blur">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2"
              />
              {hero.eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-lg text-lg text-pretty text-neutral-400">
            {hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-7 text-neutral-950 hover:bg-neutral-200"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            {hero.secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-7 text-neutral-50 backdrop-blur hover:bg-white/10 hover:text-neutral-50"
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-neutral-400">
            <span
              className="flex items-center gap-1"
              aria-label="Cinco estrelas de avaliação"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-amber-400 text-amber-400"
                  aria-hidden
                />
              ))}
            </span>
            <span>
              <span className="font-semibold text-neutral-50">
                {featuredStat?.value}
              </span>{" "}
              {featuredStat?.label.toLowerCase()}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <NicheVisual
            src={template.images.hero}
            alt={`${business.name} — ${hero.eyebrow ?? template.nicheLabel}`}
            fallbackIcon={
              <template.nicheIcon
                className="size-16"
                strokeWidth={1.25}
                aria-hidden
              />
            }
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 shadow-lg backdrop-blur sm:block">
            <p className="text-2xl font-semibold bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
              {stats[1]?.value}
            </p>
            <p className="text-xs text-neutral-400">{stats[1]?.label}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
