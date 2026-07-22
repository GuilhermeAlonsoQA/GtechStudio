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
          gap: 32,
          backgroundColor: "#171717",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            backgroundColor: "#fafafa",
            color: "#171717",
            fontSize: 56,
            fontWeight: 600,
          }}
        >
          G
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600 }}>
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
