import type { NicheTemplate } from "@/types";

import { advogados } from "./advogados";
import { arquitetos } from "./arquitetos";
import { barbearias } from "./barbearias";
import { clinicas } from "./clinicas";
import { consultores } from "./consultores";
import { contadores } from "./contadores";
import { dentistas } from "./dentistas";
import { psicologos } from "./psicologos";

export const templates: readonly NicheTemplate[] = [
  advogados,
  dentistas,
  psicologos,
  contadores,
  consultores,
  arquitetos,
  barbearias,
  clinicas,
];

export function getTemplate(slug: string): NicheTemplate | undefined {
  return templates.find((template) => template.slug === slug);
}
