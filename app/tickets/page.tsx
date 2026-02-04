// app/tickets/page.tsx
import React from "react";

const TIQETS_URL = "https://tiqets.tpm.lv/GTLRfZIU";

const GYG = {
  london:
    "https://www.getyourguide.com/en-gb/london-l57/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_london",
  paris:
    "https://www.getyourguide.com/en-gb/paris-l16/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_paris",
  barcelona:
    "https://www.getyourguide.com/en-gb/barcelona-l145/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_barcelona",
  madrid:
    "https://www.getyourguide.com/en-gb/madrid-l146/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_madrid",
  amsterdam:
    "https://www.getyourguide.com/en-gb/amsterdam-l136/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_amsterdam",
  rome:
    "https://www.getyourguide.com/en-gb/rome-l33/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_rome",
};

export default function TicketsPage() {
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
            "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.90))",
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
            Tickets & experiences (not football match tickets)
          </div>

          <h1
            style={{
              fontSize: "clamp(2.0rem, 4.5vw, 3.2rem)",
              fontWeight: 850,
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
            }}
          >
            Tickets & Experiences
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
            Book attractions, tours, museums and day trips in your destination city.
            This page is intentionally separate from football match tickets.
          </p>
        </div>

        {/* Primary partner CTAs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
            marginTop: 22,
            marginBottom: 18,
          }}
        >
          <a
            href={GYG.london}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "18px 18px",
              borderRadius: 14,
              background: "rgba(30,144,255,0.95)",
              boxShadow: "0 10px 30px rgba(30,144,255,0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontWeight: 850, fontSize: 16 }}>
              GetYourGuide — Browse experiences by city
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Tours, museums, attractions, day trips. Choose your city below for the best match.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Pick a city →
            </div>
          </a>

          <a
            href={TIQETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "18px 18px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontWeight: 850, fontSize: 16 }}>
              Tiqets — Instant entry tickets
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)", lineHeight: 1.45 }}>
              Great for museums and timed-entry attractions. Mobile tickets, quick checkout.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Find tickets →
            </div>
          </a>
        </div>

        {/* City shortcuts */}
        <div
          style={{
            borderRadius: 16,
            padding: "18px 18px",
            background: "rgba(5,7,13,0.55)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            marginBottom: 18,
          }}
        >
          <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 8 }}>
            Choose your city (GetYourGuide)
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            {[
              { name: "London", href: GYG.london, note: "Top attractions + tours" },
              { name: "Paris", href: GYG.paris, note: "Landmarks + museums" },
              { name: "Barcelona", href: GYG.barcelona, note: "Architecture + beach days" },
              { name: "Madrid", href: GYG.madrid, note: "Art + food + day trips" },
              { name: "Amsterdam", href: GYG.amsterdam, note: "Canals + museums + nightlife" },
              { name: "Rome", href: GYG.rome, note: "Ancient sites + Vatican" },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "14px 14px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontWeight: 850, fontSize: 14, marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.80)", lineHeight: 1.45 }}>
                  {c.note}
                </div>
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 800, opacity: 0.92 }}>
                  Browse experiences →
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>
            Prefer reading first? Use the{" "}
            <a
              href="/city"
              style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
            >
              city guides
            </a>{" "}
            then book from each page.
          </div>
        </div>

        {/* Clarity / FAQ */}
        <div
          style={{
            borderRadius: 16,
            padding: "18px 18px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: 16,
          }}
        >
          <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 10 }}>FAQ</div>

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>
              Is this page for football match tickets?
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.84)", lineHeight: 1.55 }}>
              No. This page is for attractions and experiences. For football match tickets, use{" "}
              <a
                href="/football-tickets"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "underline" }}
              >
                /football-tickets
              </a>
              .
            </div>
          </div>

          <div style={{ marginBottom: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>
              What should I book first?
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.84)", lineHeight: 1.55 }}>
              Book one “anchor” experience (museum / landmark / tour), then leave flexibility for
              food, walking, and the match-day schedule.
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div
          style={{
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
