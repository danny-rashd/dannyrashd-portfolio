import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1e1e2e",
          fontFamily: "monospace",
        }}
      >
        {/* accent top bar */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#94e2d5",
            marginBottom: "40px",
            borderRadius: "2px",
          }}
        />

        {/* logo */}
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#94e2d5" }}>&lt;</span>
          <span style={{ color: "#cdd6f4" }}>DR</span>
          <span style={{ color: "#94e2d5" }}> /&gt;</span>
        </div>

        {/* name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#cdd6f4",
            letterSpacing: "-2px",
            lineHeight: "1",
            marginBottom: "20px",
          }}
        >
          Danial Rashid
        </div>

        {/* role */}
        <div
          style={{
            fontSize: "28px",
            color: "#94e2d5",
            marginBottom: "12px",
          }}
        >
          {'// Data Engineer'}
        </div>

        {/* location */}
        <div
          style={{
            fontSize: "20px",
            color: "#a6adc8",
          }}
        >
          {'// Kuala Lumpur, Malaysia'}
        </div>

        {/* bottom url */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "18px",
            color: "#45475a",
          }}
        >
          dannyrashd.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
