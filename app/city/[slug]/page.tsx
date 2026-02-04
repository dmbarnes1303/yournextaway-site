// app/city/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { CITY_GUIDES, type CitySlug } from "../cities";

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
        <div
          style={{
            fontWeight: 900,
            marginBottom: 10,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
      ) : null}
      <div style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function PillRow({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>{children}</div>;
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

// Next 16 can provide params as a Promise in certain dynamic routes.
// So we treat it as async and await it.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await Promise.resolve(params);
  const slug = resolved.slug as CitySlug;

  const city = CITY_GUIDES[slug];
  if (!city) return {};

  return {
    title: city.seoTitle,
    description: city.seoDescription,
  };
}

export default async function CitySlugPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await Promise.resolve(params);
  const slug = resolved.slug as CitySlug;

  const city = CITY_GUIDES[slug];
  if (!city) return notFound();

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
            City Guide
          </div>

          <h1
            style={{
              fontSize: "clamp(2.1rem, 4.8vw, 3.4rem)",
              fontWeight: 950,
              letterSpacing: "-0.03em",
              margin: "0 0 10px",
            }}
          >
            {city.name}
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
            {city.kicker}
          </p>

          <PillRow>
            <Button href="/flights">Flights</Button>
            <Button href="/hotels">Hotels</Button>
            <Button href="/tickets">Tickets &amp; Experiences</Button>
            <Button href="/football-tickets">Football Tickets</Button>
            <Button href={city.links.gyg} tone="primary" external>
              Browse {city.name} Experiences
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
          {city.highlights.map((h) => (
            <Card key={h.title} title={h.title}>
              {h.body}
            </Card>
          ))}
        </div>

        <SectionTitle>Getting There</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            {city.sections.gettingThere.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <SectionTitle>Where to Stay</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {city.sections.whereToStay.map((a) => (
            <Card key={a.title} title={a.title}>
              {a.body}
            </Card>
          ))}
        </div>

        <SectionTitle>Getting Around</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            {city.sections.gettingAround.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <SectionTitle>Matchday Planning (Neutral Traveller)</SectionTitle>
        <Card>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.75 }}>
            {city.sections.matchday.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href="/football-tickets">How to Buy Football Tickets</Button>
            <Button href={city.links.gyg} tone="primary" external>
              {city.name} Experiences
            </Button>
          </div>
        </Card>

        <SectionTitle>Top Things to Do</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          {city.sections.topThings.map((t) => (
            <Card key={t.title} title={t.title}>
              {t.body}
            </Card>
          ))}
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button href={city.links.gyg} tone="primary" external>
            Book Tours &amp; Attractions
          </Button>
          <Button href={city.links.tiqets} external>
            Tiqets: Entry Tickets
          </Button>
        </div>

        <SectionTitle>Suggested 48-Hour Itinerary</SectionTitle>
        <Card>
          <div style={{ display: "grid", gap: 12 }}>
            {city.sections.itinerary48h.map((i) => (
              <div key={i.day}>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>{i.day}</div>
                <div>{i.body}</div>
              </div>
            ))}
          </div>
        </Card>

        <SectionTitle>FAQ</SectionTitle>
        <div style={{ display: "grid", gap: 12 }}>
          {city.sections.faq.map((f) => (
            <Card key={f.q} title={f.q}>
              {f.a}
            </Card>
          ))}
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
          Affiliate disclosure: YourNextAway may earn a commission when you click partner links and make a purchase, at no extra
          cost to you.
        </div>
      </div>
    </main>
  );
}
