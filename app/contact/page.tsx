export const metadata = {
  title: "Contact – YourNextAway",
  description: "Get in touch with the YourNextAway team.",
};

export default function ContactPage() {
  const pageWrap: React.CSSProperties = {
    minHeight: "100vh",
    color: "rgba(255,255,255,0.92)",
    background:
      "radial-gradient(1200px 800px at 50% 0%, rgba(56,189,248,0.16), rgba(0,0,0,0) 55%), linear-gradient(180deg, #030613 0%, #05070d 55%, #04050a 100%)",
    padding: "64px 20px 110px",
  };

  const container: React.CSSProperties = {
    maxWidth: 980,
    margin: "0 auto",
  };

  const h1: React.CSSProperties = {
    fontSize: 44,
    lineHeight: 1.05,
    margin: 0,
    letterSpacing: -0.6,
    textShadow: "0 8px 24px rgba(0,0,0,0.55)",
  };

  const lead: React.CSSProperties = {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 720,
  };

  const card: React.CSSProperties = {
    marginTop: 26,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.45)",
    padding: 22,
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  };

  const row: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
    alignItems: "center",
    justifyContent: "space-between",
  };

  const label: React.CSSProperties = {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 0.9,
    color: "rgba(255,255,255,0.55)",
    marginBottom: 6,
  };

  const value: React.CSSProperties = {
    fontSize: 16,
    color: "rgba(255,255,255,0.92)",
    margin: 0,
  };

  const pill: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background:
      "linear-gradient(180deg, rgba(56,189,248,0.22) 0%, rgba(59,130,246,0.10) 100%)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    whiteSpace: "nowrap",
  };

  const small: React.CSSProperties = {
    marginTop: 14,
    fontSize: 13,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.62)",
  };

  const link: React.CSSProperties = {
    color: "rgba(255,255,255,0.90)",
    textDecoration: "underline",
    textUnderlineOffset: 3,
  };

  return (
    <main style={pageWrap}>
      <div style={container}>
        <h1 style={h1}>Contact</h1>
        <p style={lead}>
          For support, partnership enquiries, or press requests, email us and we’ll get back to you.
        </p>

        <section style={card} aria-label="Contact details">
          <div style={row}>
            <div>
              <div style={label}>Email</div>
              <p style={value}>
                <a href="mailto:hello@yournextaway.com" style={link}>
                  hello@yournextaway.com
                </a>
              </p>
            </div>

            <a href="mailto:hello@yournextaway.com" style={pill}>
              Email us
            </a>
          </div>

          <p style={small}>
            YourNextAway is operated by Diablo Aquila Ltd (United Kingdom). Please don’t send payment
            details by email — we won’t ask for them.
          </p>
        </section>
      </div>
    </main>
  );
}
