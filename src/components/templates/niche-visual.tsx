"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface NicheVisualProps {
  src: string;
  alt: string;
  fallbackIcon: ReactNode;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Renders the niche photo when the file exists in /public, and gracefully
 * falls back to a branded gradient panel (accent colours + niche icon) until
 * the real photo is uploaded. Uploading the file at `src` makes the photo
 * appear with no code change.
 */
export function NicheVisual({
  src,
  alt,
  fallbackIcon,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: NicheVisualProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-4/3 overflow-hidden rounded-2xl border bg-muted",
        className
      )}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand to-brand-2">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <span className="relative text-white/90">{fallbackIcon}</span>
        </div>
      )}
    </div>
  );
}
