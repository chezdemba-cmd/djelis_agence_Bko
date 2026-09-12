import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "DJELI'S — IA, digital et technologies à Bamako";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1622",
          padding: "80px",
          color: "#F2F1EC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "#F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 700,
              color: "#16283A",
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
              DJELI&apos;S
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 4,
                color: "#F5A623",
                marginTop: 4,
              }}
            >
              IA • DIGITAL • TECHNOLOGIES
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            L&apos;IA ET LE DIGITAL AU SERVICE DE VOTRE BUSINESS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 2,
            color: "rgba(242,241,236,0.6)",
          }}
        >
          <span>{site.baseline}</span>
          <span>{site.location.toUpperCase()}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
