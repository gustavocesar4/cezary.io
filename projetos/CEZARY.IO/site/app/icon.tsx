import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon gerado a partir do símbolo Corte Preciso — ver identidade/design-guide.md. */
export default function Icon() {
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
      <svg width="22" height="22" viewBox="0 0 100 100" fill="#FFFFFF">
        <polygon points="16,14 58,14 85,38 40,38 40,62 85,62 58,86 16,86" />
      </svg>
    </div>,
    { ...size },
  );
}
