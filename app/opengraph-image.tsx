import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F2C4C",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(11,94,168,0.55) 0%, rgba(15,44,76,0) 55%)",
          padding: "72px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#0B5EA8",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
            <span>Credential</span>
            <span style={{ color: "#7FB2E0" }}>Path</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "920px",
            }}
          >
            Credentialed providers, enrolled payers.
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#B9CDE2",
              maxWidth: "860px",
            }}
          >
            Medical credentialing &amp; payer enrollment — from data collection
            to confirmed enrollment.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            fontSize: "24px",
            color: "#DCE8F4",
          }}
        >
          {["CAQH", "NPI", "PECOS", "MEDICARE", "MEDICAID", "AVALITY"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                {badge}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}