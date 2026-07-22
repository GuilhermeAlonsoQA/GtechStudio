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
      <Reveal className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 text-center text-neutral-50 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/40 to-brand-2/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
        </div>
        <h2 className="relative max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="relative max-w-xl text-pretty text-neutral-400">
            {description}
          </p>
        )}
        <Button
          asChild
          size="lg"
          className="relative rounded-full bg-neutral-50 px-7 text-neutral-950 hover:bg-neutral-200"
        >
          <Link href={cta.href}>
            {cta.label}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </Reveal>
    </Section>
  );
}
