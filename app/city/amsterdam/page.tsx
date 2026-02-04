// app/city/amsterdam/page.tsx
import React from "react";

const GYG_AMSTERDAM_URL =
  "https://www.getyourguide.com/en-gb/amsterdam-l136/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_amsterdam";

export default function AmsterdamCityPage() {
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
            Amsterdam
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
            A compact, walkable city built for weekend breaks: canals, museums, food, and football.
            Easy to do Friday–Sunday without overplanning.
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
            href={GYG_AMSTERDAM_URL}
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
              GetYourGuide — Top things to do in Amsterdam
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Canal cruises, museums, day trips, guided walks, and skip-the-line tickets.
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
            <div style={{ fontWeight: 850, fontSize: 16 }}>Pick a practical base</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)" }}>
              Amsterdam is small — the right area saves time, not miles.
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
                <strong>Schiphol (AMS)</strong> — major hub with fast train links into the city.
              </li>
              <li>Typical flight time from UK: ~1h 10m–1h 30m airborne.</li>
              <li>
                Train from the airport is usually the simplest option; taxis can be slow at peak times.
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Where to stay">
            <ul style={ulStyle}>
              <li>
                <strong>Centrum</strong> — central, walkable, busiest.
              </li>
              <li>
                <strong>Jordaan</strong> — pretty, calmer, great food.
              </li>
              <li>
                <strong>De Pijp</strong> — cafés, markets, good value.
              </li>
              <li>
                <strong>Oud-West</strong> — local feel, well connected.
              </li>
            </ul>
            <div style={hintStyle}>
              If it’s your first trip: Jordaan or Centrum is the low-risk play.
            </div>
          </SectionCard>

          <SectionCard title="Getting around">
            <ul style={ulStyle}>
              <li>Walking is easy for the centre.</li>
              <li>Trams fill the gaps quickly.</li>
              <li>Plan extra time for crowds on weekend afternoons.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Matchday structure">
            <ul style={ulStyle}>
              <li>Do museums and canal cruise earlier in the day.</li>
              <li>Keep the evening for food + pre-match logistics.</li>
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
              "Canal cruise (day or sunset)",
              "Rijksmuseum",
              "Van Gogh Museum",
              "Anne Frank House (book early)",
              "Heineken Experience",
              "Jordaan food walk",
              "Red Light District history tour (optional)",
              "Zaanse Schans or Haarlem day trip",
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
              href={GYG_AMSTERDAM_URL}
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
              See all Amsterdam experiences →
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
