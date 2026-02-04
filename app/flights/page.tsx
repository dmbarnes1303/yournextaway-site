import React from "react";

export const metadata = {
  title: "Flights for Football Trips (2026) | YourNextAway",
  description:
    "How to find cheaper flights for match weekends: best timing, flexible dates, airport strategy, baggage traps, and how to plan around kickoff changes.",
};

const LINKS = {
  // Replace this with your Aviasales tracking link when ready.
  // (You can put it in now if you already have one.)
  flightsSearchPlaceholder: "https://aviasales.tpm.lv/VYu4OVnV",
  hotels: "/hotels",
  footballTickets: "/football-tickets",
  cityLondon: "/city/london",
  cityParis: "/city/paris",
  cityBarcelona: "/city/barcelona",
  cityMadrid: "/city/madrid",
  cityAmsterdam: "/city/amsterdam",
  cityRome: "/city/rome",
};

function Container({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 980, margin: "0 auto", padding: "44px 20px 56px" }}>{children}</div>;
}

function Card({
  children,
  subtle,
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
        background: subtle ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.05)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        padding: 18,
      }}
    >
      {children}
    </div>
  );
}

function ButtonLink({
  href,
  label,
  tone = "primary",
  note,
}: {
  href: string;
  label: string;
  tone?: "primary" | "ghost";
  note?: string;
}) {
  const primary = tone === "primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "12px 16px",
        borderRadius: 12,
        textDecoration: "none",
        fontWeight: 800,
        letterSpacing: "-0.01em",
        color: primary ? "#0b1220" : "rgba(255,255,255,0.92)",
        background: primary ? "#1e90ff" : "rgba(255,255,255,0.06)",
        border: primary ? "1px solid rgba(255,255,255,0)" : "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <span>{label}</span>
      <span style={{ opacity: primary ? 0.9 : 0.7 }}>↗</span>
      {note ? (
        <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 700, opacity: primary ? 0.9 : 0.75 }}>
          {note}
        </span>
      ) : null}
    </a>
  );
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ color: "rgba(255,255,255,0.88)", textDecoration: "underline" }}>
      {children}
    </a>
  );
}

export default function FlightsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(900px 420px at 15% 0%, rgba(30,144,255,0.18), rgba(0,0,0,0) 55%), radial-gradient(700px 420px at 85% 10%, rgba(255,0,120,0.08), rgba(0,0,0,0) 60%), #05070d",
        color: "#fff",
      }}
    >
      <Container>
        <div style={{ marginBottom: 18 }}>
          <div
            style={{
              display: "inline-flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              fontSize: 12,
              color: "rgba(255,255,255,0.80)",
            }}
          >
            <span>Updated for 2026</span>
            <span style={{ opacity: 0.55 }}>•</span>
            <span>Flight strategy for match weekends</span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.0rem, 4.2vw, 3.1rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            margin: "0 0 14px",
            fontWeight: 900,
          }}
        >
          Flights for football trips: how to get cheaper fares (without getting trapped)
        </h1>

        <p
          style={{
            margin: "0 0 18px",
            maxWidth: 860,
            fontSize: 16,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.86)",
          }}
        >
          Flights are usually the largest variable cost of a football city break. The goal isn’t just to
          find “the cheapest ticket” — it’s to find a flight plan that survives kickoff changes, protects
          your time on the ground, and doesn’t get destroyed by baggage and airport transfer costs.
        </p>

        <Card>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ minWidth: 260 }}>
              <div style={{ fontSize: 13, opacity: 0.75, marginBottom: 6 }}>Quick action</div>
              <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" }}>
                Search flights for your match weekend
              </div>
              <div style={{ marginTop: 8, fontSize: 13, opacity: 0.78, maxWidth: 520 }}>
                Affiliate disclosure: YourNextAway may earn a commission if you book through partner links,
                at no extra cost to you.
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <ButtonLink href={LINKS.flightsSearchPlaceholder} label="Search Flights" tone="primary" />
              <ButtonLink href={LINKS.hotels} label="Plan Hotels" tone="ghost" note="next" />
              <ButtonLink href={LINKS.footballTickets} label="Football Tickets" tone="ghost" note="read" />
            </div>
          </div>
        </Card>

        <div style={{ height: 18 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
            marginBottom: 18,
          }}
        >
          <Card subtle>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>The “kickoff shift” rule</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              If the kickoff time isn’t confirmed, avoid ultra-tight arrivals and returns. Your safest shape is
              <strong> arrive the day before</strong> and return the day after — then tighten once schedules are locked.
            </div>
          </Card>

          <Card subtle>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Best day patterns</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              For most European weekend trips, <strong>Fri–Sun</strong> and <strong>Sat–Mon</strong> are the most common.
              Prices can be lower if you shift by one day or fly very early/late — but only if transport still works.
            </div>
          </Card>

          <Card subtle>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Baggage is the trap</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              The cheapest fare often becomes expensive once you add cabin/hold bags. For city breaks,
              travel light. If you must bring luggage, compare <strong>final totals</strong>, not headline prices.
            </div>
          </Card>
        </div>

        <Card>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: 20,
              letterSpacing: "-0.02em",
              fontWeight: 950,
            }}
          >
            The 8-step flight strategy (use this every trip)
          </h2>

          <ol
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 14.5,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            <li>
              <strong>Anchor the weekend</strong>: pick your match and your best-case travel dates (even if kickoff time isn’t final).
            </li>
            <li>
              <strong>Search a 3-day window</strong>: check ±1 day either side to see if you’re sitting on an expensive “peak” day.
            </li>
            <li>
              <strong>Compare airports</strong>: a cheaper far-out airport can cost more after transfers and time.
            </li>
            <li>
              <strong>Check last flight home</strong>: if you’re returning after a match, late departures might be unrealistic with transport.
            </li>
            <li>
              <strong>Lock a sensible baseline</strong>: if prices look fair, book — don’t obsess over saving £7 and risk losing availability.
            </li>
            <li>
              <strong>Read the baggage rules</strong>: especially on low-cost carriers. One “included” bag can be tiny.
            </li>
            <li>
              <strong>Seat choice is optional</strong>: on short flights, skip add-ons unless you genuinely need them.
            </li>
            <li>
              <strong>Keep proof</strong>: booking confirmation, fare class, and airline policy in case you need to change plans.
            </li>
          </ol>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <ButtonLink href={LINKS.flightsSearchPlaceholder} label="Search Flights" tone="primary" />
            <ButtonLink href={LINKS.hotels} label="Hotels next" tone="ghost" note="plan" />
          </div>
        </Card>

        <div style={{ height: 18 }} />

        <Card subtle>
          <h2 style={{ margin: "0 0 10px", fontSize: 18, letterSpacing: "-0.02em", fontWeight: 950 }}>
            Airport transfers: don’t let a “cheap flight” ruin the plan
          </h2>

          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>
            Before you book, sanity check transfer time and late-night options. A low-cost airport can add 90 minutes each way
            and force expensive taxis after evening matches. If you’re unsure, pick a central airport and recover the budget elsewhere.
          </p>
        </Card>

        <div style={{ height: 18 }} />

        <Card>
          <h2 style={{ margin: "0 0 10px", fontSize: 20, letterSpacing: "-0.02em", fontWeight: 950 }}>
            Start with popular football travel cities
          </h2>

          <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>
            Use these city pages to plan weekend timing, areas to stay, and simple transport logic:
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <InlineLink href={LINKS.cityLondon}>London</InlineLink>
            <InlineLink href={LINKS.cityParis}>Paris</InlineLink>
            <InlineLink href={LINKS.cityBarcelona}>Barcelona</InlineLink>
            <InlineLink href={LINKS.cityMadrid}>Madrid</InlineLink>
            <InlineLink href={LINKS.cityAmsterdam}>Amsterdam</InlineLink>
            <InlineLink href={LINKS.cityRome}>Rome</InlineLink>
          </div>
        </Card>

        <div style={{ height: 18 }} />

        <Card>
          <h2 style={{ margin: "0 0 10px", fontSize: 20, letterSpacing: "-0.02em", fontWeight: 950 }}>
            FAQ
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                q: "When should I book flights for a match weekend?",
                a: "As soon as you have a realistic date window. Prices often rise when availability drops, especially for big clubs and European nights. If kickoff isn’t confirmed, choose a flexible schedule rather than waiting for “the perfect fare.”",
              },
              {
                q: "Is it better to arrive the day of the match?",
                a: "Only if you have plenty of buffer and the match time is confirmed. Same-day arrival is the highest-risk option because delays and airport transfers can wipe you out.",
              },
              {
                q: "What’s the best way to save money fast?",
                a: "Try shifting travel by one day, compare alternate airports, and travel light. Baggage and transfers are usually where budgets explode.",
              },
              {
                q: "Should I book flights before hotels or tickets?",
                a: "For most trips: flexible hotel first, then tickets, then flights. But if flights are unusually cheap and the schedule is stable, booking flights early can work — just avoid tight timing if kickoff could move.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ fontWeight: 900, marginBottom: 6 }}>{item.q}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.70)" }}>
            Disclaimer: This is general travel guidance. Airlines, fares, baggage rules, and schedule changes vary by route and provider.
          </div>
        </Card>
      </Container>
    </main>
  );
}
