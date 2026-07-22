import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome")
    .max(100, "Nome muito longo"),
  email: z.email("Informe um e-mail válido"),
  message: z
    .string()
    .min(10, "Conte um pouco sobre o seu projeto (mínimo 10 caracteres)")
    .max(1000, "Mensagem muito longa"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
