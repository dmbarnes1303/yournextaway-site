// app/city/madrid/page.tsx
import React from "react";

const GYG_MADRID_URL =
  "https://www.getyourguide.com/en-gb/madrid-l146/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_madrid";

export default function MadridCityPage() {
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
            Madrid
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
            Big-city energy, late nights, world-class art, and football heritage.
            Madrid is ideal for a Friday–Sunday trip built around a single match.
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
            href={GYG_MADRID_URL}
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
              GetYourGuide — Top things to do in Madrid
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Museums, palace tours, tapas, day trips, and skip-the-line tickets.
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
            <div style={{ fontWeight: 850, fontSize: 16 }}>
              Choose a smart base
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)" }}>
              Central districts save you time and transport stress.
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
                <strong>Madrid-Barajas (MAD)</strong> — large, efficient, metro +
                rail access.
              </li>
              <li>
                Typical flight time from UK: ~2h 20m airborne.
              </li>
              <li>
                Metro or Cercanías train beats taxi at peak times.
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Where to stay">
            <ul style={ulStyle}>
              <li>
                <strong>Sol / Gran Vía</strong> — ultra-central, walkable.
              </li>
              <li>
                <strong>Malasaña</strong> — bars, cafés, younger crowd.
              </li>
              <li>
                <strong>La Latina</strong> — tapas-heavy, traditional feel.
              </li>
              <li>
                <strong>Chueca</strong> — lively, well connected.
              </li>
            </ul>
            <div style={hintStyle}>
              If in doubt: Sol or Gran Vía = lowest-risk base.
            </div>
          </SectionCard>

          <SectionCard title="Getting around">
            <ul style={ulStyle}>
              <li>Metro = fast, cheap, simple.</li>
              <li>Walking works well inside the centre.</li>
              <li>Taxis good late night after matches.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Matchday structure">
            <ul style={ulStyle}>
              <li>Lock match time first.</li>
              <li>Book museums / palace earlier in the day.</li>
              <li>Evenings = food, bars, light sightseeing.</li>
              <li>
                Flow:{" "}
                <a href="/flights" style={linkStyle}>Flights</a> →{" "}
                <a href="/hotels" style={linkStyle}>Hotels</a> →{" "}
                <a href="/tickets" style={linkStyle}>Experiences</a> →{" "}
                <a href="/football-tickets" style={linkStyle}>Match tickets</a>
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
              "Prado Museum",
              "Royal Palace of Madrid",
              "Reina Sofía Museum",
              "Retiro Park",
              "Tapas or food tour",
              "Bernabéu or stadium tour",
              "Toledo day trip",
              "Segovia day trip",
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
              href={GYG_MADRID_URL}
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
              See all Madrid experiences →
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
          Affiliate disclosure: YourNextAway may earn a commission when you click
          partner links and make a purchase, at no extra cost to you.
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
      <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 10 }}>
        {title}
      </div>
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
