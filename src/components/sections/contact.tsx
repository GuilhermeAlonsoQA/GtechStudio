import Link from "next/link";

import { Reveal } from "@/components/animation/reveal";
import { Section, SectionHeader } from "@/components/sections/section";
import type { ContactChannel } from "@/types";

interface ContactProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  channels: ContactChannel[];
  children?: React.ReactNode;
}

export function Contact({
  id,
  eyebrow,
  title,
  description,
  channels,
  children,
}: ContactProps) {
  return (
    <Section id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mx-auto mt-14 grid max-w-4xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="flex flex-col gap-6">
          {channels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              className="group flex items-start gap-4"
            >
              <channel.icon
                className="mt-1 size-5 text-muted-foreground"
                aria-hidden
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-sm text-muted-foreground">
                  {channel.label}
                </span>
                <span className="font-medium group-hover:underline">
                  {channel.value}
                </span>
              </span>
            </Link>
          ))}
        </Reveal>
        {children && <Reveal delay={0.1}>{children}</Reveal>}
      </div>
    </Section>
  );
}
