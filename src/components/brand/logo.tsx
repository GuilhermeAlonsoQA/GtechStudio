import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="gtech-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#0a0a0a" />
      <path
        d="M 20 9.07 A 8 8 0 1 0 24 16"
        fill="none"
        stroke="url(#gtech-brand)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M 24 16 H 16.5"
        stroke="url(#gtech-brand)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight">
        Gtech<span className="text-muted-foreground"> Studio</span>
      </span>
    </span>
  );
}
