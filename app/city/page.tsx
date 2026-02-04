// app/city/page.tsx
import React from "react";

export default function CityIndexPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/stadium.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 980,
          margin: "0 auto",
          padding: "56px 20px 64px",
          color: "#fff",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              fontSize: 12,
              color: "rgba(255,255,255,0.82)",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#1e90ff",
                display: "inline-block",
              }}
            />
            City guides
          </div>

          <h1
            style={{
              fontSize: "clamp(2.0rem, 4.5vw, 3.2rem)",
              fontWeight: 850,
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
            }}
          >
            Choose a city
          </h1>

          <p
            style={{
              maxWidth: 820,
              margin: "0 auto",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.90)",
            }}
          >
            Quick, practical city guides for building a football weekend away: airports, where to
            stay, how to get around, and what to book.
          </p>
        </div>

        {/* City grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12,
            marginBottom: 18,
          }}
        >
          {[
            { name: "London", href: "/city/london", note: "Easy transport, endless options" },
            { name: "Paris", href: "/city/paris", note: "Landmarks + simple metro navigation" },
            { name: "Barcelona", href: "/city/barcelona", note: "Architecture, beaches, food" },
            { name: "Madrid", href: "/city/madrid", note: "Art triangle + tapas culture" },
            { name: "Amsterdam", href: "/city/amsterdam", note: "Walkable, canals, museums" },
            { name: "Rome", href: "/city/rome", note: "Big hitters — prebook the essentials" },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "16px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ fontWeight: 850, fontSize: 16, marginBottom: 6 }}>{c.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>
                {c.note}
              </div>
              <div style={{ marginTop: 12, fontSize: 12, fontWeight: 800, opacity: 0.92 }}>
                Open guide →
              </div>
            </a>
          ))}
        </div>

        {/* Next actions */}
        <div
          style={{
            borderRadius: 16,
            padding: "18px",
            background: "rgba(5,7,13,0.55)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 8 }}>
            Build your trip (fast)
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              color: "rgba(255,255,255,0.86)",
              lineHeight: 1.6,
              fontSize: 13,
            }}
          >
            <li>
              Start with{" "}
              <a
                href="/flights"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
              >
                flights
              </a>{" "}
              and{" "}
              <a
                href="/hotels"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
              >
                hotels
              </a>{" "}
              for your dates.
            </li>
            <li>
              Then book 1–2 things on{" "}
              <a
                href="/tickets"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
              >
                tickets & experiences
              </a>{" "}
              around your match.
            </li>
            <li>
              Match tickets live on{" "}
              <a
                href="/football-tickets"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
              >
                football-tickets
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Disclosure */}
        <div
          style={{
            marginTop: 18,
            textAlign: "center",
            fontSize: 12,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Affiliate disclosure: YourNextAway may earn a commission when you click partner links and
          make a purchase, at no extra cost to you.
        </div>
      </div>
    </main>
  );
}
