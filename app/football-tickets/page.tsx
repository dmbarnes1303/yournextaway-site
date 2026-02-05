// app/football-tickets/page.tsx
import React from "react";

export const metadata = {
  title: "Football Match Tickets | YourNextAway",
  description:
    "Buy football match tickets across major European leagues through our trusted ticketing partner.",
};

const SPORTSEVENTS365_URL = "https://www.sportsevents365.com/?a_aid=69834e80ec9d3";

export default function FootballTicketsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070d",
        color: "#ffffff",
        padding: "60px 20px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            marginBottom: 14,
            letterSpacing: "-0.02em",
          }}
        >
          Football Match Tickets
        </h1>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 28,
          }}
        >
          Search and buy football match tickets across major European leagues
          using our official ticketing partner, Sportsevents365.
        </p>

        <a
          href={SPORTSEVENTS365_URL}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "16px 26px",
            background: "#1e90ff",
            color: "#ffffff",
            fontWeight: 800,
            borderRadius: 12,
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          Search Match Tickets
        </a>

        <p
          style={{
            marginTop: 40,
            fontSize: 12,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
          }}
        >
          Affiliate disclosure: YourNextAway may earn a commission when you click
          partner links and make a purchase, at no extra cost to you.
        </p>
      </div>
    </main>
  );
}
