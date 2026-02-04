// app/city/barcelona/page.tsx
import React from "react";

const GYG_BARCELONA_URL =
  "https://www.getyourguide.com/en-gb/barcelona-l45/?partner_id=MAQJREP&utm_medium=online_publisher&utm_campaign=city_barcelona";

export default function BarcelonaCityPage() {
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
            Barcelona
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
            A perfect football-city break: beaches, architecture, late dinners, and a walkable core.
            Use this page to plan a clean weekend around match time — without overcomplicating it.
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
            href={GYG_BARCELONA_URL}
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
              GetYourGuide — Top things to do in Barcelona
            </div>
            <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.45 }}>
              Sagrada Família, Park Güell, food tours, day trips, and skip-the-line options.
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
            <div style={{ fontWeight: 850, fontSize: 16 }}>Choose a smart base</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.86)", lineHeight: 1.45 }}>
              Barcelona is easy if you stay central. Pick the right neighbourhood first.
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
          <SectionCard title="Airports + typical flight times from the UK">
            <ul style={ulStyle}>
              <li>
                <strong>Barcelona El Prat (BCN)</strong> — main airport, direct metro/train/bus links.
              </li>
              <li>
                <strong>Typical flight time:</strong> London → Barcelona is usually ~2h 00m to 2h 25m
                airborne (plus transfers).
              </li>
              <li>
                Early arrival + late return is the classic “max weekend” play — don’t sacrifice that
                for a slightly cheaper fare.
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Where to stay (3–5 areas that actually work)">
            <ul style={ulStyle}>
              <li>
                <strong>Eixample</strong> — the safest “easy-mode” base: central, grid layout, good
                transport.
              </li>
              <li>
                <strong>Gothic Quarter</strong> — ultra central and atmospheric (can be noisy; choose
                carefully).
              </li>
              <li>
                <strong>El Born</strong> — food + bars + walkable to sights; great for weekend energy.
              </li>
              <li>
                <strong>Gràcia</strong> — calmer vibe, local feel, still well-connected.
              </li>
              <li>
                <strong>Barceloneta</strong> — beach-first trips; great in warm months.
              </li>
            </ul>
            <div style={hintStyle}>
              If you’re unsure: stay in <strong>Eixample</strong>. It’s the lowest-risk choice for
              transport, safety, and timing.
            </div>
          </SectionCard>

          <SectionCard title="Getting around (metro/rail/taxi)">
            <ul style={ulStyle}>
              <li>
                <strong>Metro</strong> — fast, cheap, reliable. Your default option.
              </li>
              <li>
                <strong>Walking</strong> — Barcelona is very walkable in the core (Eixample + old town).
              </li>
              <li>
                <strong>Taxis</strong> — excellent for late evenings; allow time after big events.
              </li>
              <li>
                <strong>Airport transfer</strong> — plan it once and forget it. Don’t “wing it” with a
                tight match schedule.
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="Matchday planning (neutral trip framing)">
            <ul style={ulStyle}>
              <li>
                Treat match time as the hard constraint. Build sightseeing around it, not the other
                way round.
              </li>
              <li>
                Book your main attractions in the <strong>morning</strong> or{" "}
                <strong>the day before</strong> (skip fixed timed slots near kickoff).
              </li>
              <li>
                Use this site in order:{" "}
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
              Barcelona is late-night friendly — but don’t sabotage yourself: keep the morning after
              the match flexible.
            </div>
          </SectionCard>
        </div>

        {/* Things to do */}
        <SectionCard title="Top things to do (high-converting ideas)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "Sagrada Família (timed entry)",
                desc: "Book ahead. This is the #1 ‘don’t leave it to chance’ attraction.",
              },
              {
                title: "Park Güell",
                desc: "Best paired with a short guided option if you want context.",
              },
              {
                title: "Casa Batlló or Casa Milà (La Pedrera)",
                desc: "Gaudí architecture with strong evening slots for weekend planning.",
              },
              {
                title: "Gothic Quarter walking tour",
                desc: "High value per hour. Great as a first-morning orientation.",
              },
              {
                title: "Las Ramblas + La Boqueria",
                desc: "Short visit, big ‘Barcelona’ feel. Go earlier to avoid crowds.",
              },
              {
                title: "Montjuïc cable car / viewpoints",
                desc: "Easy win for photos. Time it around sunset if possible.",
              },
              {
                title: "Food / tapas tour",
                desc: "Reliable conversion category. Works perfectly on Friday night.",
              },
              {
                title: "Beach time (Barceloneta)",
                desc: "Keep this flexible — it’s your ‘reset’ between plans.",
              },
              {
                title: "Day trip: Montserrat",
                desc: "Best for longer weekends; a strong ‘one big extra’ experience.",
              },
              {
                title: "Day trip: Girona or Tarragona",
                desc: "If you’ve done Barcelona before, this makes the trip feel new.",
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
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.45,
                  }}
                >
                  {x.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={GYG_BARCELONA_URL}
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
              See all Barcelona experiences →
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
              { href: "/flights", title: "Flights", desc: "Lock timings that fit the weekend window." },
              { href: "/hotels", title: "Hotels", desc: "Pick the right base area (Eixample is ‘easy mode’)." },
              { href: "/tickets", title: "Experiences", desc: "Slot in 1–2 attractions around match time." },
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
