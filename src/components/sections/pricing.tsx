import Link from "next/link";
import { Check } from "lucide-react";

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
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

interface PricingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  plans: PricingPlan[];
}

export function Pricing({
  id,
  eyebrow,
  title,
  description,
  plans,
}: PricingProps) {
  return (
    <Section id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08}>
            <Card
              className={cn(
                "relative h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                plan.highlighted && "border-brand/50 shadow-lg"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-xs font-medium text-white">
                  Mais escolhido
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="pt-4">
                  <span className="text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      {plan.period}
                    </span>
                  )}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
