import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Landing Pages Premium`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.35), transparent)",
          color: "#fafafa",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="9" fill="#171717" />
          <path
            d="M 20 9.07 A 8 8 0 1 0 24 16"
            fill="none"
            stroke="url(#g)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 24 16 H 16.5"
            stroke="url(#g)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#a3a3a3" }}>
          Landing Pages Premium
        </div>
      </div>
    ),
    size
  );
}
