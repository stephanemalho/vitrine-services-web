import { ImageResponse } from "next/og";

export const alt =
  "Studio S. — création de sites web sur mesure, rapides et optimisés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#1d1d1b",
          color: "#f9f8f3",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            gap: 18,
          }}
        >
          <div
            style={{
              alignItems: "center",
              border: "2px solid rgba(255,255,255,.6)",
              display: "flex",
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            S
          </div>
          Studio S.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 950,
          }}
        >
          <div
            style={{
              color: "#d8ef52",
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Design · Code · SEO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 0.98,
            }}
          >
            Une présence en ligne qui fait avancer votre activité.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
