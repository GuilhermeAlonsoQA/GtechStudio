import type { NicheTemplate } from "@/types";

import { advogados } from "./advogados";
import { dentistas } from "./dentistas";

export const templates: readonly NicheTemplate[] = [advogados, dentistas];

export function getTemplate(slug: string): NicheTemplate | undefined {
  return templates.find((template) => template.slug === slug);
}
