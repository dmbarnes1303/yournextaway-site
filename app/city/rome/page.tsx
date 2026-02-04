// app/city/rome/page.tsx
import React from "react";

const GYG_ROME_URL =
  "https://www.getyourguide.com/en-gb/rome-l33/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_rome";

export default function RomeCityPage() {
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
      {/* Overlay */}
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
            City guide
          </div>

          <h1
            style={{
              fontSize: "clamp(2.0rem, 4.5vw, 3.2rem)",
              fontWeight: 850,
              letterSpacing: "-0.02em",
              margin: "0 0 10px",
            }}
          >
            Rome
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
            Ancient landmarks, elite food, and a city layout that rewards smart planning. Rome can
            feel chaotic — but if you base yourself right and prebook the big hitters, it’s one of
            the best weekend trips in Europe.
          </p>
        </div>

        {/* Quick CTAs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginTop: 22,
            marginBottom: 18,
          }}
        >
          <a
            href={GYG_ROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "18px",
              borderRadius: 14,
              background: "rgba(30,144,255,0.95)",
              boxShadow: "0 10px 30px rgba(30,144,255,0.25)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontWeight: 850, fontSize: 16 }}>
              GetYourGuide — Top things to do in Rome
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Colosseum, Vatican Museums, day trips, food tours, and skip-the-line tickets.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Browse experiences →
            </div>
          </a>

          <a
            href="/hotels"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "18px",
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
            <div style={{ fontWeight: 850, fontSize: 16 }}>Stay central to win time back</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)" }}>
              Rome’s distances add up fast. A good base saves hours across a weekend.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Check hotels →
            </div>
          </a>
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <SectionCard title="Airport & arrival">
            <ul style={ulStyle}>
              <li>
                <strong>Fiumicino (FCO)</strong> — main airport, best overall connectivity.
              </li>
              <li>
                <strong>Ciampino (CIA)</strong> — often used by low-cost airlines.
              </li>
              <li>Typical flight time from UK: ~2h 15m–2h 40m airborne.</li>
              <li>
                For simplicity: use train links / official transport options — Rome traffic can
                punish taxis at peak times.
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Where to stay">
            <ul style={ulStyle}>
              <li>
                <strong>Centro Storico / Pantheon</strong> — walkable to everything (premium).
              </li>
              <li>
                <strong>Monti</strong> — stylish, great food, near Colosseum.
              </li>
              <li>
                <strong>Prati</strong> — good for Vatican days, calmer evenings.
              </li>
              <li>
                <strong>Trastevere (edge)</strong> — nightlife + character, but watch late-night
                travel times.
              </li>
            </ul>
            <div style={hintStyle}>
              Brutal truth: staying “cheap but far” in Rome backfires — you’ll pay in time and taxi
              money.
            </div>
          </SectionCard>

          <SectionCard title="Getting around">
            <ul style={ulStyle}>
              <li>Walking is best in the historic core (comfortable shoes are non-negotiable).</li>
              <li>Metro helps for big jumps, but doesn’t cover everywhere.</li>
              <li>Buses work, but can be slow in traffic. Build buffer time.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Matchday structure">
            <ul style={ulStyle}>
              <li>Do the heavy sightseeing early (Colosseum/Vatican) to avoid schedule stress.</li>
              <li>Keep the afternoon lighter: food + a shorter experience.</li>
              <li>
                Flow:{" "}
                <a href="/flights" style={linkStyle}>
                  Flights
                </a>{" "}
                →{" "}
                <a href="/hotels" style={linkStyle}>
                  Hotels
                </a>{" "}
                →{" "}
                <a href="/tickets" style={linkStyle}>
                  Experiences
                </a>{" "}
                →{" "}
                <a href="/football-tickets" style={linkStyle}>
                  Match tickets
                </a>
              </li>
            </ul>
          </SectionCard>
        </div>

        {/* Things to do */}
        <SectionCard title="Top things to do">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {[
              "Colosseum + Roman Forum (book ahead)",
              "Vatican Museums + Sistine Chapel (book ahead)",
              "St Peter’s Basilica + dome climb",
              "Trevi Fountain + Spanish Steps walk",
              "Food tour (the highest ‘value’ experience in Rome)",
              "Trastevere evening walk + dinner",
              "Day trip to Tivoli or Pompeii (if you have time)",
              "Gelato crawl (simple, high satisfaction)",
            ].map((t) => (
              <div
                key={t}
                style={{
                  borderRadius: 14,
                  padding: "14px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontWeight: 800 }}>{t}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14 }}>
            <a
              href={GYG_ROME_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "12px 14px",
                borderRadius: 12,
                background: "rgba(30,144,255,0.95)",
                fontWeight: 850,
                fontSize: 13,
              }}
            >
              See all Rome experiences →
            </a>
          </div>
        </SectionCard>

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

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: "18px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
}

const ulStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  color: "rgba(255,255,255,0.86)",
  lineHeight: 1.6,
  fontSize: 13,
};

const hintStyle: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  color: "rgba(255,255,255,0.74)",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  textDecoration: "underline",
};
