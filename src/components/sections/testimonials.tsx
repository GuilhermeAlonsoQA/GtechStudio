import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialsProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  id,
  eyebrow,
  title,
  description,
  testimonials,
}: TestimonialsProps) {
  return (
    <Section id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 0.08}>
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md">
              <CardContent className="flex-1">
                <blockquote className="text-pretty text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardFooter className="flex-col items-start gap-0.5">
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
