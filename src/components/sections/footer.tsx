import Link from "next/link";

import type { NavItem } from "@/types";

interface FooterProps {
  brand: React.ReactNode;
  brandName: string;
  description?: string;
  items: NavItem[];
}

export function Footer({ brand, brandName, description, items }: FooterProps) {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <div className="text-lg font-semibold tracking-tight">{brand}</div>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t">
        <p className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brandName}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
