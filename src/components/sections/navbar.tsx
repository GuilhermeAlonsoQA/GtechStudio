"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CtaLink, NavItem } from "@/types";

interface NavbarProps {
  brand: React.ReactNode;
  items: NavItem[];
  cta: CtaLink;
}

export function Navbar({ brand, items, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/85 text-neutral-50 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-white text-neutral-950 hover:bg-neutral-200"
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-50 hover:bg-white/10 hover:text-neutral-50 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Principal (celular)"
        >
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full bg-white text-neutral-950 hover:bg-neutral-200"
              >
                <Link href={cta.href} onClick={() => setOpen(false)}>
                  {cta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
