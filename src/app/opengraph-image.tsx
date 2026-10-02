import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = profile.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#09090b",
          backgroundImage: "radial-gradient(#27272a 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa", fontFamily: "monospace" }}>vmb/</div>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, marginTop: 16 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa", marginTop: 8 }}>
          {`${profile.role} · ${profile.tagline}`}
        </div>
      </div>
    ),
    size
  );
}
