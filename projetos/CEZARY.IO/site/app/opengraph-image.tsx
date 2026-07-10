import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        background: "#0A0A0A",
      }}
    >
      <svg width="96" height="96" viewBox="0 0 100 100" fill="#FFFFFF">
        <polygon points="16,14 58,14 85,38 40,38 40,62 85,62 58,86 16,86" />
      </svg>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, color: "#F2F2F2" }}>
          CEZARY.IO
        </div>
        <div style={{ fontSize: 28, color: "#8C8C8C" }}>
          Resultado primeiro. Tecnologia depois.
        </div>
      </div>
    </div>,
    { ...size },
  );
}
