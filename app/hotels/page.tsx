import React from "react";

export const metadata = {
  title: "Hotels for Football Trips (2026) | YourNextAway",
  description:
    "Where to stay for a football trip: best areas, match weekend tips, budgeting, and how to avoid common hotel mistakes when kickoffs move.",
};

const LINKS = {
  // Keep these as placeholders until Booking.com (or another hotel partner) approves.
  // When approved, replace with your tracking URL(s).
  bookingPlaceholder: "https://www.booking.com",
  // Helpful internal links
  footballTickets: "/football-tickets",
  flights: "/flights",
  cityLondon: "/city/london",
  cityParis: "/city/paris",
  cityBarcelona: "/city/barcelona",
  cityMadrid: "/city/madrid",
  cityAmsterdam: "/city/amsterdam",
  cityRome: "/city/rome",
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "44px 20px 56px" }}>
      {children}
    </div>
  );
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

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} style={{ color: "rgba(255,255,255,0.88)", textDecoration: "underline" }}>
      {children}
    </a>
  );
}

export default function HotelsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(900px 420px at 15% 0%, rgba(30,144,255,0.18), rgba(0,0,0,0) 55%), radial-gradient(700px 420px at 85% 10%, rgba(255,180,0,0.10), rgba(0,0,0,0) 60%), #05070d",
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
            <span>Hotel strategy for match weekends</span>
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
          Hotels for football trips: where to stay (and what to avoid)
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
          Match weekends create a predictable hotel pattern: prices spike, availability drops,
          and kickoff times can move. The best approach is not “find the cheapest room” — it’s
          choosing the right <strong>area</strong> for your plan, then booking with the right
          <strong> flexibility</strong> so you don’t get burned if schedules change.
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
                Check hotel availability for your match weekend
              </div>
              <div style={{ marginTop: 8, fontSize: 13, opacity: 0.78, maxWidth: 520 }}>
                Affiliate note: hotel partner links are being added as approvals complete. This is
                a direct link for now.
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <ButtonLink href={LINKS.bookingPlaceholder} label="Check Availability (Hotels)" tone="primary" />
              <ButtonLink href={LINKS.flights} label="Plan Flights" tone="ghost" note="next" />
              <ButtonLink href={LINKS.footballTickets} label="Football Tickets" tone="ghost" note="read" />
            </div>
          </div>

          <div
            style={{
              marginTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.10)",
              paddingTop: 14,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              fontSize: 13,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            <span style={{ fontWeight: 800, color: "rgba(255,255,255,0.92)" }}>
              Affiliate disclosure:
            </span>
            <span>
              YourNextAway may earn a commission if you click partner links and book, at no extra
              cost to you.
            </span>
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
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Best default area</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              If you’re unsure, book near a <strong>central transport hub</strong> (main station or
              major metro junction). It keeps your trip flexible and reduces the risk of a stressful
              late-night return.
            </div>
          </Card>

          <Card subtle>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Kickoff times can move</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              TV scheduling and cup competitions can shift dates and times. Prioritise hotels with
              <strong> free cancellation</strong> or a flexible rate if the fixture isn’t fully confirmed yet.
            </div>
          </Card>

          <Card subtle>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>The hidden cost</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.80)" }}>
              Cheap rooms can cost more in the end if they’re far from transport. On match weekends,
              taxi surcharges and late-night routes add up. Pay attention to <strong>location</strong>, not just price.
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
            Where to stay on a match weekend (simple decision tree)
          </h2>

          <div
            style={{
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              marginTop: 12,
            }}
          >
            {[
              {
                title: "If it’s your first time in the city",
                body:
                  "Stay central. You’ll get better transport, more food options, and less risk if you need to change plans. This is the safest default for most trips.",
              },
              {
                title: "If you’re focused on nightlife / late dining",
                body:
                  "Stay in a central neighbourhood with late options, not near a quiet stadium district. The match lasts a few hours; your city break lasts all weekend.",
              },
              {
                title: "If you want the lowest stress on matchday",
                body:
                  "Stay near a direct metro/rail line to the stadium. You don’t need to be next to it — just avoid multi-change routes that fall apart late at night.",
              },
              {
                title: "If you’re budget constrained",
                body:
                  "Look one zone out from the centre, but anchor your search around a major station or metro interchange. Avoid suburbs without fast transport on weekends.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ fontWeight: 900, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <ButtonLink href={LINKS.bookingPlaceholder} label="Check Availability (Hotels)" tone="primary" />
            <ButtonLink href={LINKS.footballTickets} label="Tickets first?" tone="ghost" note="read" />
          </div>
        </Card>

        <div style={{ height: 18 }} />

        <Card subtle>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: 18,
              letterSpacing: "-0.02em",
              fontWeight: 950,
            }}
          >
            Match-weekend booking checklist (use this every time)
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 13.5,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            <li>
              <strong>Cancellation policy:</strong> if kickoff isn’t confirmed, prioritise flexible rates.
            </li>
            <li>
              <strong>Transport reality:</strong> check weekend late-night options back to your area.
            </li>
            <li>
              <strong>Check-in window:</strong> avoid tight timings if you’re arriving close to kickoff.
            </li>
            <li>
              <strong>Fees:</strong> confirm taxes and service fees before booking.
            </li>
            <li>
              <strong>Room type:</strong> ensure “private bathroom” and “air conditioning” are clearly listed if needed.
            </li>
          </ul>
        </Card>

        <div style={{ height: 18 }} />

        <Card>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: 20,
              letterSpacing: "-0.02em",
              fontWeight: 950,
            }}
          >
            Quick city jump (start with these)
          </h2>

          <p style={{ margin: "0 0 12px", fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}>
            If you’re planning a weekend break, start with one of the most popular football travel cities:
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
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: 20,
              letterSpacing: "-0.02em",
              fontWeight: 950,
            }}
          >
            FAQ
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                q: "Should I book the hotel before I have tickets?",
                a: "If the match is a major one, hotels can sell out early — but tickets can also be hard. The safest method is booking a flexible hotel rate first, then confirming tickets, then locking flights.",
              },
              {
                q: "Do match weekends increase prices?",
                a: "Yes. Big clubs, derbies, European nights, and summer tournament travel can all push prices up. The earlier you book (with flexibility), the better your options.",
              },
              {
                q: "Is it better to stay near the stadium?",
                a: "Only if it’s on a fast transport line and you want absolute simplicity on matchday. Otherwise, central areas usually give a better city-break experience.",
              },
              {
                q: "What’s the biggest mistake people make?",
                a: "Booking a non-refundable hotel before kickoff is confirmed, then getting stuck when the time/date shifts. Flexibility matters early; lock it in later.",
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

          <div
            style={{
              marginTop: 14,
              fontSize: 12.5,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.70)",
            }}
          >
            Disclaimer: Information is general guidance for travel planning. Hotel policies and local
            transport services vary by city and provider.
          </div>
        </Card>
      </Container>
    </main>
  );
}
