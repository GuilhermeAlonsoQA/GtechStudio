import { Reveal } from "@/components/animation/reveal";
import { Section } from "@/components/sections/section";
import type { Stat } from "@/types";

interface StatsProps {
  id?: string;
  stats: Stat[];
}

export function Stats({ id, stats }: StatsProps) {
  return (
    <Section id={id} className="border-y bg-muted/40 py-14 sm:py-16">
      <dl className="grid gap-10 text-center sm:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="flex flex-col gap-2">
              <dd className="order-1 bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="order-2 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
