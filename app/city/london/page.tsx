// app/city/london/page.tsx
import React from "react";

export const metadata = {
  title: "London Football City Break Guide (2026) | YourNextAway",
  description:
    "Plan a London football weekend: best areas to stay, airport/rail transfers, getting around, what to do, and a realistic 48-hour itinerary built around match timings.",
};

const TIQETS_URL = "https://tiqets.tpm.lv/GTLRfZIU";
const GYG_LONDON_URL =
  "https://www.getyourguide.com/en-gb/london-l57/?partner_id=MAQJREP&utm_medium=online_publisher";

const OUTBOUND_REL = "nofollow sponsored noopener noreferrer";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: "34px 0 12px",
        fontSize: 20,
        letterSpacing: "-0.02em",
        fontWeight: 900,
      }}
    >
      {children}
    </h2>
  );
}

function Card({
  title,
  children,
  subtle,
}: {
  title?: string;
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 18,
        background: subtle ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {title ? (
        <div style={{ fontWeight: 900, marginBottom: 10, letterSpacing: "-0.01em" }}>
          {title}
        </div>
      ) : null}
      <div style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function PillRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  tone = "ghost",
  external,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "primary" | "ghost";
  external?: boolean;
}) {
  const primary = tone === "primary";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? OUTBOUND_REL : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 14px",
        borderRadius: 12,
        textDecoration: "none",
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "-0.01em",
        color: primary ? "#0b1220" : "rgba(255,255,255,0.92)",
        background: primary ? "#1e90ff" : "rgba(255,255,255,0.06)",
        border: primary ? "1px solid rgba(255,255,255,0)" : "1px solid rgba(255,255,255,0.14)",
      }}
    >
      {children}
      <span style={{ marginLeft: 8, opacity: 0.85 }}>{external ? "↗" : "→"}</span>
    </a>
  );
}

export default function LondonCityPage() {
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
          background: "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 980,
          margin: "0 auto",
          padding: "56px 20px 72px",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 22 }}>
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
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#1e90ff" }} />
            City guide
          </div>

          <h1
            style={{
              fontSize: "clamp(2.1rem, 4.8vw, 3.4rem)",
              fontWeight: 950,
              letterSpacing: "-0.03em",
              margin: "0 0 10px",
            }}
          >
            London
          </h1>

          <p
            style={{
              maxWidth: 820,
              margin: "0 auto",
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.90)",
            }}
          >
            The easiest football city break in Europe for UK travellers: fast connections, endless
            neighbourhood choices, and enough things to do that your trip still works even if
            kickoff times move.
          </p>

          <PillRow>
            <Button href="/flights">Flights</Button>
            <Button href="/hotels">Hotels</Button>
            <Button href="/tickets">Attractions</Button>
            <Button href="/football-tickets">Match tickets</Button>
            <Button href={GYG_LONDON_URL} tone="primary" external>
              Browse London experiences
            </Button>
          </PillRow>
        </div>

        {/* Quick highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginTop: 18,
          }}
        >
          <Card title="Best base for a first visit">
            West End / Soho / Covent Garden — walkable, central, and perfect for a weekend that mixes
            football + sightseeing.
          </Card>
          <Card title="Best value areas">
            Paddington / King’s Cross / Stratford — great transport, lots of hotels, and easier pricing
            than prime central.
          </Card>
          <Card title="Biggest planning risk">
            London is large. Don’t book a “cheap” hotel that turns every journey into 45–60 minutes.
            Central transport access matters more than the room.
          </Card>
        </div>

        <SectionTitle>Getting to London (UK travellers)</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            <li>
              <strong>Train:</strong> If you’re already in the UK, rail is usually the simplest.
              Aim to arrive with buffer if you’ve got a tight match schedule.
            </li>
            <li>
              <strong>Flying in:</strong> Heathrow and Gatwick are the most common for international arrivals.
              City access is strong, but allow time for transfers.
            </li>
            <li>
              <strong>Time buffers:</strong> If the match time isn’t fully confirmed, avoid arriving on the day
              with a tight margin. London travel is reliable overall — but it’s still a big city.
            </li>
          </ul>
        </Card>

        <SectionTitle>Where to stay (areas that actually make sense)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          <Card title="West End / Soho / Covent Garden (best all-round)">
            Best for first-timers and short stays. You’ll be close to dining, theatre, and key transport.
            Expect higher prices but the city-break experience is effortless.
          </Card>

          <Card title="South Bank / Waterloo (walkable, central)">
            Strong for sightseeing and simple transport. Great for a weekend plan that includes museums,
            riverside walks, and quick connections across the city.
          </Card>

          <Card title="Paddington (transport + hotel density)">
            Practical base with loads of hotels and quick rail/underground links. Great if you prioritise
            convenience over nightlife on your doorstep.
          </Card>

          <Card title="King’s Cross / St Pancras (connections)">
            Ideal if you want a “plug in and move” base: national rail, Eurostar, Underground, and easy
            access to multiple zones.
          </Card>

          <Card title="Shoreditch / Spitalfields (food + vibe)">
            Strong nightlife/food scene. Great for groups who want evenings sorted and don’t mind a short
            ride into the West End.
          </Card>

          <Card title="Stratford (value + links)">
            Often better value with solid transport. A good option if central is priced out — just check your
            specific matchday journey time.
          </Card>
        </div>

        <SectionTitle>Getting around (simple, realistic)</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            <li>
              <strong>Pay-as-you-go:</strong> Using contactless or an Oyster card is usually the easiest option.
            </li>
            <li>
              <strong>Matchday timing:</strong> Aim to arrive in the stadium area early. London travel is good,
              but crowd peaks are real.
            </li>
            <li>
              <strong>Late return:</strong> If you’re finishing late, make sure your route back isn’t multiple changes.
              Direct lines reduce stress.
            </li>
          </ul>
        </Card>

        <SectionTitle>Matchday planning (neutral traveller)</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            <li>
              <strong>Buffer everything:</strong> In London you can make almost any plan work — if you leave time.
              Don’t schedule attractions right up to kickoff.
            </li>
            <li>
              <strong>Food plan:</strong> Eat earlier than you think. Matchday crowds make “quick bites” slower.
            </li>
            <li>
              <strong>Kickoff changes:</strong> If the fixture time isn’t confirmed, keep hotels and travel flexible.
            </li>
          </ul>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href="/football-tickets">How to buy match tickets</Button>
            <Button href={GYG_LONDON_URL} tone="primary" external>
              London experiences
            </Button>
          </div>
        </Card>

        <SectionTitle>Top things to do (quick shortlist)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          <Card title="1) British Museum">A top rainy-day win. Easy to fit around almost any itinerary.</Card>
          <Card title="2) Tower of London + Tower Bridge">Classic first-visit pairing.</Card>
          <Card title="3) Westminster (Big Ben + Abbey)">Best done early to avoid crowds.</Card>
          <Card title="4) South Bank walk">Low effort, high payoff. Great at sunset.</Card>
          <Card title="5) National Gallery (Trafalgar Square)">Central and easy to drop in.</Card>
          <Card title="6) Camden">Markets + food + people-watching.</Card>
          <Card title="7) Borough Market">Perfect for a flexible meal stop (go early).</Card>
          <Card title="8) Hyde Park / Kensington Gardens">Best if you need breathing space.</Card>
          <Card title="9) A West End show">Solid evening anchor for a weekend break.</Card>
          <Card title="10) A guided walking tour">The fastest way to “understand” London in 2–3 hours.</Card>
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href={GYG_LONDON_URL} tone="primary" external>
            Book London tours & attractions
          </Button>
          <Button href={TIQETS_URL} external>
            Tiqets: London entry tickets
          </Button>
        </div>

        <SectionTitle>Suggested 48-hour itinerary (built around football)</SectionTitle>
        <Card>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Day 1 (arrival)</div>
              <div>
                Check in → easy walk (South Bank / West End) → dinner → optional show / nightlife.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Day 2 (match day)</div>
              <div>
                Morning museum or market → early lunch → travel to match area with buffer → match →
                late dinner near your base.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>Day 3 (departure)</div>
              <div>
                Quick highlight (Trafalgar Square / Westminster) → airport/rail transfer with time to spare.
              </div>
            </div>
          </div>
        </Card>

        <SectionTitle>FAQ</SectionTitle>
        <div style={{ display: "grid", gap: 12 }}>
          <Card title="Is London expensive for a weekend?">
            It can be — but smart area selection (Paddington, King’s Cross, Stratford) can cut costs without
            wrecking the trip.
          </Card>
          <Card title="Where should I stay if I want the easiest weekend?">
            West End / Covent Garden / South Bank. You’ll be central and transport won’t dominate your schedule.
          </Card>
          <Card title="What’s the most common mistake?">
            Choosing a cheap hotel far out, then losing 2–3 hours a day to travel. In London, location beats room quality.
          </Card>
        </div>

        <div
          style={{
            marginTop: 28,
            paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            fontSize: 12,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.72)",
            textAlign: "center",
          }}
        >
          Affiliate disclosure: YourNextAway may earn a commission when you click partner links and make a purchase,
          at no extra cost to you.
        </div>
      </div>
    </main>
  );
}
