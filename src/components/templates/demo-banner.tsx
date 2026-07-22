import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DemoBannerProps {
  nicheLabel: string;
}

export function DemoBanner({ nicheLabel }: DemoBannerProps) {
  return (
    <div className="bg-gradient-to-r from-brand to-brand-2 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center text-sm">
        <p>
          Modelo demonstrativo para {nicheLabel} — conteúdo fictício, criado
          pela Gtech Studio.
        </p>
        <Link
          href="/#contato"
          className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
        >
          Quero um site assim
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
