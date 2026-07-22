import type { NicheTemplate } from "@/types";

interface TemplatePreviewProps {
  template: NicheTemplate;
}

export function TemplatePreview({ template }: TemplatePreviewProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
      <div className="flex items-center gap-1.5 border-b bg-muted/50 px-3 py-2">
        <span aria-hidden className="size-2 rounded-full bg-red-400/70" />
        <span aria-hidden className="size-2 rounded-full bg-amber-400/70" />
        <span aria-hidden className="size-2 rounded-full bg-green-400/70" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md border bg-background px-2.5 py-0.5 text-[10px] text-muted-foreground">
          gtechstudio.com.br/modelos/{template.slug}
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/20 to-brand-2/20 blur-2xl" />
        </div>

        <div className="relative flex items-center justify-between border-b px-4 py-2.5">
          <span className="flex items-center gap-1.5">
            <span className="flex size-5 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <template.nicheIcon className="size-3" aria-hidden />
            </span>
            <span className="max-w-28 truncate text-[10px] font-semibold">
              {template.business.name}
            </span>
          </span>
          <span aria-hidden className="flex items-center gap-2">
            <span className="h-1 w-6 rounded-full bg-muted-foreground/30" />
            <span className="h-1 w-6 rounded-full bg-muted-foreground/30" />
            <span className="rounded-full bg-primary px-2 py-1 text-[8px] font-medium text-primary-foreground">
              {template.navCta.label}
            </span>
          </span>
        </div>

        <div className="relative flex flex-col items-center gap-2.5 px-6 py-7 text-center">
          {template.hero.eyebrow && (
            <span className="inline-flex items-center gap-1 rounded-full border bg-background/70 px-2 py-0.5 text-[8px] font-medium tracking-wider text-muted-foreground uppercase">
              <span
                aria-hidden
                className="size-1 rounded-full bg-gradient-to-r from-brand to-brand-2"
              />
              {template.hero.eyebrow}
            </span>
          )}
          <p className="max-w-56 text-sm leading-snug font-semibold tracking-tight text-balance">
            {template.hero.title}
          </p>
          <span aria-hidden className="mt-1 flex items-center gap-1.5">
            <span className="rounded-full bg-primary px-2.5 py-1 text-[8px] font-medium text-primary-foreground">
              {template.hero.primaryCta.label}
            </span>
            <span className="rounded-full border px-2.5 py-1 text-[8px] text-muted-foreground">
              {template.hero.secondaryCta?.label ?? "Saiba mais"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
