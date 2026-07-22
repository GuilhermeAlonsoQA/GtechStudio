"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { contactFormSchema, type ContactFormValues } from "./schema";

function buildWhatsAppUrl(whatsappHref: string, values: ContactFormValues): string {
  const text = [
    `Olá! Meu nome é ${values.name}.`,
    values.message,
    `Meu e-mail para contato: ${values.email}`,
  ].join("\n\n");

  return `${whatsappHref}?text=${encodeURIComponent(text)}`;
}

interface ContactFormProps {
  whatsappHref?: string;
}

export function ContactForm({
  whatsappHref = siteConfig.links.whatsapp,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFormValues) {
    window.open(
      buildWhatsAppUrl(whatsappHref, values),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Nome</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          placeholder="Seu nome"
          aria-invalid={Boolean(errors.name)}
          {...register("name")}
        />
        {errors.name && (
          <p role="alert" className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">E-mail</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <p role="alert" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Mensagem</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="Conte sobre o seu projeto: área de atuação, objetivo e prazo desejado."
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message && (
          <p role="alert" className="text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        Enviar pelo WhatsApp
        <ArrowRight aria-hidden />
      </Button>
      <p className="text-sm text-muted-foreground">
        Ao enviar, sua mensagem abre pronta no WhatsApp — sem cadastro e sem
        spam.
      </p>
    </form>
  );
}
