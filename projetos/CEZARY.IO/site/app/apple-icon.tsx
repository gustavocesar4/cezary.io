import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
      }}
    >
      <svg width="120" height="120" viewBox="0 0 100 100" fill="#FFFFFF">
        <polygon points="16,14 58,14 85,38 40,38 40,62 85,62 58,86 16,86" />
      </svg>
    </div>,
    { ...size },
  );
}
