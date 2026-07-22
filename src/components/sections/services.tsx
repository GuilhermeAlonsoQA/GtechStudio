import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/types";

interface ServicesProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  services: Service[];
}

export function Services({
  id,
  eyebrow,
  title,
  description,
  services,
}: ServicesProps) {
  return (
    <Section id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
              <CardHeader>
                <span className="mb-3 inline-flex size-10 items-center justify-center rounded-lg border bg-muted/60">
                  <service.icon className="size-5 text-brand" aria-hidden />
                </span>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
