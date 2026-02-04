// app/football-tickets/page.tsx

import React from "react";

const PAGE = {
  title: "Football Tickets – Compare Options, Prices & Safety Tips | YourNextAway",
  description:
    "A practical guide to buying football tickets for European matches: official club sales, authorised sellers, resale marketplaces, and how to avoid scams.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "1.35rem",
        margin: "34px 0 14px",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 14,
        padding: 18,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
        {children}
      </div>
    </div>
  );
}

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
};

export default function FootballTicketsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070d",
        color: "#fff",
        padding: "46px 20px 60px",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.65)", fontSize: 13 }}>
          YourNextAway / Football Tickets
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 4.6vw, 3.1rem)",
            margin: "10px 0 12px",
            letterSpacing: "-0.02em",
            fontWeight: 900,
          }}
        >
          Football tickets: the safe way to buy (and what to avoid)
        </h1>

        <p
          style={{
            margin: "0 0 18px",
            maxWidth: 860,
            color: "rgba(255,255,255,0.84)",
            lineHeight: 1.7,
            fontSize: 16,
          }}
        >
          European football ticketing is fragmented: some clubs sell to members
          first, some require ID checks, and many big matches sell out fast.
          This page explains your main options — <strong>official</strong>,
          <strong> authorised</strong>, and <strong>resale marketplaces</strong>{" "}
          — plus a practical checklist to avoid scams.
        </p>

        {/* Quick actions (placeholders for now) */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 18,
          }}
        >
          <a
            href="/city/london"
            style={buttonStylePrimary()}
          >
            Start with a city guide
          </a>
          <a
            href="/tickets"
            style={buttonStyleGhost()}
          >
            Things to do & attractions
          </a>
          <a
            href="/flights"
            style={buttonStyleGhost()}
          >
            Flights
          </a>
          <a
            href="/hotels"
            style={buttonStyleGhost()}
          >
            Hotels
          </a>
        </div>

        <SectionTitle>Your 4 ticket paths (ranked by reliability)</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          <Card title="1) Club official sales (best)">
            Use the club’s official ticket site whenever possible. You’ll usually
            get the fairest pricing, the clearest entry rules, and the lowest
            risk of cancellations.
          </Card>

          <Card title="2) Authorised sellers (good)">
            Some clubs and leagues use approved partners. This can be a solid
            route for visitors, especially when member-only access blocks
            general sale.
          </Card>

          <Card title="3) Hospitality packages (pricey but dependable)">
            If standard seats are gone, hospitality can still be a legitimate
            way in — often bundled with food/drink. Expensive, but predictable.
          </Card>

          <Card title="4) Resale marketplaces (variable)">
            Resale can work, but it’s the highest variance option. Policies
            differ by country and club, and “guarantees” vary. Only use reputable
            marketplaces and follow the checklist below.
          </Card>
        </div>

        <SectionTitle>Scam-proof checklist (use this every time)</SectionTitle>
        <ul style={ulStyle()}>
          <li>
            <strong>Match + venue + date/time:</strong> confirm on the club or
            league site. If kickoff isn’t confirmed, expect changes.
          </li>
          <li>
            <strong>Entry rules:</strong> some clubs require ID matching the
            ticket name or restrict transfers.
          </li>
          <li>
            <strong>Delivery method:</strong> prefer official e-tickets, club
            apps, or secure transfer platforms. Be cautious with screenshots.
          </li>
          <li>
            <strong>Fee transparency:</strong> check final price (service fees +
            delivery) before paying.
          </li>
          <li>
            <strong>Payment method:</strong> avoid bank transfer / crypto. Use
            card payments with buyer protection where possible.
          </li>
          <li>
            <strong>Too-good-to-be-true pricing:</strong> if a “sold out” derby
            is oddly cheap, assume it’s fake until proven otherwise.
          </li>
        </ul>

        <SectionTitle>What we’ll add here next</SectionTitle>
        <div
          style={{
            background: "rgba(30,144,255,0.10)",
            border: "1px solid rgba(30,144,255,0.35)",
            borderRadius: 14,
            padding: 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
            marginTop: 10,
          }}
        >
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            Live “Check availability” tools
          </div>
          <div style={{ color: "rgba(255,255,255,0.82)" }}>
            Once your football ticket partner is approved, this page will
            include a simple search + direct comparison links for major European
            fixtures.
          </div>
          <div style={{ marginTop: 10, color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
            Note: We intentionally keep this page content-first (not link-stuffed)
            to avoid “affiliate arbitrage” signals.
          </div>
        </div>

        <SectionTitle>FAQ</SectionTitle>
        <div style={{ display: "grid", gap: 12 }}>
          <Card title="Do tickets get cancelled on resale marketplaces?">
            It can happen. Policies vary. The safest approach is official club
            sales, then authorised sellers, then hospitality.
          </Card>

          <Card title="Should I book travel before I have tickets?">
            For high-demand matches, <strong>no</strong> unless you’re willing to
            treat the trip as a city break even if you don’t get in. If kickoff
            date/time is unconfirmed, keep everything flexible.
          </Card>

          <Card title="How do I plan a football city break around fixtures?">
            Pick a city with multiple clubs or multiple match options during
            your travel window. Start with the city guides and build from there.
          </Card>
        </div>

        <div
          style={{
            marginTop: 34,
            paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.65)",
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          <strong>Affiliate disclosure:</strong> When partner links are added to
          this page, YourNextAway may earn a commission if you click through and
          make a purchase, at no extra cost to you.
        </div>
      </div>
    </main>
  );
}

function buttonStylePrimary(): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    background: "#1e90ff",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.10)",
  };
}

function buttonStyleGhost(): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.9)",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.14)",
  };
}

function ulStyle(): React.CSSProperties {
  return {
    margin: "8px 0 0",
    paddingLeft: 18,
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.84)",
    maxWidth: 860,
  };
}
