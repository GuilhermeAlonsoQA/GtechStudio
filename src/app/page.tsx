import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {siteConfig.name}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Landing Pages Premium que transformam visitantes em clientes
        </h1>
        <p className="max-w-xl text-lg text-pretty text-muted-foreground">
          Presença digital sofisticada para profissionais liberais e pequenas
          empresas. Design elegante, performance extrema e foco total em
          conversão.
        </p>
        <Link
          href={siteConfig.links.whatsapp}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Fale com a gente
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </section>
    </main>
  );
}
