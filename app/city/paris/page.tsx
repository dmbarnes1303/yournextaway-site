// app/city/paris/page.tsx
import React from "react";

const GYG_PARIS_URL =
  "https://www.getyourguide.com/en-gb/paris-l16/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_paris";

export default function ParisCityPage() {
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
            Paris
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
            A top-tier city break: museums, food, landmarks, and easy transport. Use this page to
            plan your weekend around a match date — and fill the gaps with high-value experiences.
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
            href={GYG_PARIS_URL}
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
              GetYourGuide — Top things to do in Paris
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Book museums, tours, and day trips. Best for tight weekend schedules.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Browse experiences →
            </div>
          </a>

          <a
            href="/flights"
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
            <div style={{ fontWeight: 850, fontSize: 16 }}>Compare flights</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)", lineHeight: 1.45 }}>
              Quick routes from the UK. Lock timings first, then hotels.
            </div>
            <div style={{ marginTop: 6, fontWeight: 800, fontSize: 13 }}>
              Check availability →
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
          {/* Airports */}
          <SectionCard title="Airports + typical flight times from the UK">
            <ul style={ulStyle}>
              <li>
                <strong>Paris Charles de Gaulle (CDG)</strong> — largest hub, good for long-haul
                connections.
              </li>
              <li>
                <strong>Paris Orly (ORY)</strong> — often fastest for city access depending on where
                you stay.
              </li>
              <li>
                <strong>Typical flight time:</strong> London → Paris is usually ~1h 10m to 1h 25m
                airborne (allow extra for airport time and transfers).
              </li>
              <li>
                If your match is weekend-fixed, don’t chase the cheapest fare — chase the{" "}
                <strong>best arrival/departure windows</strong>.
              </li>
            </ul>
          </SectionCard>

          {/* Where to stay */}
          <SectionCard title="Where to stay (3–5 areas that actually work)">
            <ul style={ulStyle}>
              <li>
                <strong>Le Marais (3rd/4th)</strong> — walkable, great food, easy Metro links.
              </li>
              <li>
                <strong>Saint-Germain-des-Prés (6th)</strong> — classic Paris vibe, central for
                sightseeing.
              </li>
              <li>
                <strong>Opéra / Grands Boulevards (2nd/9th)</strong> — practical base, shopping,
                fast transport.
              </li>
              <li>
                <strong>Latin Quarter (5th)</strong> — lively, student energy, near major landmarks.
              </li>
              <li>
                <strong>Montmartre (18th)</strong> — scenic, but more hills/steps; choose if you
                want atmosphere over speed.
              </li>
            </ul>
            <div style={hintStyle}>
              Tip: pick accommodation based on{" "}
              <strong>two anchors</strong> — your match area + your main attractions. Paris is big;
              convenience wins.
            </div>
          </SectionCard>

          {/* Getting around */}
          <SectionCard title="Getting around (metro/rail/taxi)">
            <ul style={ulStyle}>
              <li>
                <strong>Metro</strong> — fastest for most trips. Expect stairs; plan for rush hours.
              </li>
              <li>
                <strong>RER</strong> — key for airports and some suburbs; double-check station names.
              </li>
              <li>
                <strong>Walking</strong> — central Paris is extremely walkable once you’re in the
                right area.
              </li>
              <li>
                <strong>Taxi / ride-hail</strong> — useful late evening; allow time around major
                events and weekend peaks.
              </li>
            </ul>
          </SectionCard>

          {/* Matchday planning */}
          <SectionCard title="Matchday planning (neutral trip framing)">
            <ul style={ulStyle}>
              <li>
                Aim to arrive near the venue area{" "}
                <strong>60–90 minutes before kickoff</strong> if you want time for food and
                navigation.
              </li>
              <li>
                Keep your day flexible: book attractions in the{" "}
                <strong>morning or the day before</strong>.
              </li>
              <li>
                Use this site’s pages in order:{" "}
                <a href="/flights" style={linkStyle}>
                  flights
                </a>{" "}
                →{" "}
                <a href="/hotels" style={linkStyle}>
                  hotels
                </a>{" "}
                →{" "}
                <a href="/tickets" style={linkStyle}>
                  experiences
                </a>{" "}
                →{" "}
                <a href="/football-tickets" style={linkStyle}>
                  match tickets
                </a>
                .
              </li>
            </ul>
            <div style={hintStyle}>
              The goal isn’t to cram everything in — it’s to make the trip smooth, punctual, and
              enjoyable.
            </div>
          </SectionCard>
        </div>

        {/* Things to do */}
        <SectionCard title="Top things to do (high-converting ideas)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              {
                title: "Eiffel Tower (or nearby viewpoints)",
                desc: "Book timed access or choose a viewpoint option if you’re tight on time.",
              },
              {
                title: "Louvre Museum",
                desc: "Reserve ahead. If you’re doing one museum, this is the anchor.",
              },
              {
                title: "Musée d’Orsay",
                desc: "More manageable than the Louvre and often a better 2–3 hour visit.",
              },
              {
                title: "Seine River cruise",
                desc: "Perfect evening slot before/after a match day — minimal effort, high payoff.",
              },
              {
                title: "Montmartre + Sacré-Cœur walk",
                desc: "Atmosphere-heavy. Combine with a food stop or short walking tour.",
              },
              {
                title: "Notre-Dame area + Île de la Cité",
                desc: "Great for a structured 60–120 minute walk with photos.",
              },
              {
                title: "Versailles day trip",
                desc: "Do this the day after the match if you have a longer weekend.",
              },
              {
                title: "Food / patisserie tour",
                desc: "High satisfaction. Works well on Saturday mornings.",
              },
              {
                title: "Arc de Triomphe + Champs-Élysées",
                desc: "Easy to pair with shopping and a quick viewpoint stop.",
              },
              {
                title: "Catacombs (if you want something different)",
                desc: "Timed entry is essential; queues can be brutal without booking.",
              },
            ].map((x) => (
              <div
                key={x.title}
                style={{
                  borderRadius: 14,
                  padding: "14px 14px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontWeight: 850, fontSize: 14, marginBottom: 6 }}>
                  {x.title}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.45 }}>
                  {x.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={GYG_PARIS_URL}
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
              See all Paris experiences →
            </a>

            <a
              href="/tickets"
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "12px 14px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                fontWeight: 850,
                fontSize: 13,
              }}
            >
              Tickets & experiences hub →
            </a>
          </div>
        </SectionCard>

        {/* Internal links block */}
        <div
          style={{
            marginTop: 16,
            borderRadius: 16,
            padding: "18px 18px",
            background: "rgba(5,7,13,0.55)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 10 }}>
            Next steps (do this in order)
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {[
              { href: "/flights", title: "Flights", desc: "Lock timings that fit the match window." },
              { href: "/hotels", title: "Hotels", desc: "Choose the right base area, not the cheapest pin." },
              { href: "/tickets", title: "Experiences", desc: "Fill the gaps: museums, tours, day trips." },
              { href: "/football-tickets", title: "Match tickets", desc: "Separate page on purpose for relevance." },
            ].map((x) => (
              <a
                key={x.href}
                href={x.href}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "14px 14px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontWeight: 850, fontSize: 14, marginBottom: 6 }}>
                  {x.title}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.45 }}>
                  {x.desc}
                </div>
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 800, opacity: 0.92 }}>
                  Open →
                </div>
              </a>
            ))}
          </div>
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

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: "18px 18px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontWeight: 850, fontSize: 15, marginBottom: 10 }}>{title}</div>
      <div>{children}</div>
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
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.74)",
};

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  textDecoration: "underline",
};
