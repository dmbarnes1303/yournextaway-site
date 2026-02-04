export default function AboutPage() {
  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      background: "#0b1020",
      color: "white",
      padding: "56px 20px",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
    },
    container: { maxWidth: 920, margin: "0 auto" },
    h1: { fontSize: 40, margin: "0 0 10px", fontWeight: 850, letterSpacing: "-0.02em" },
    meta: { opacity: 0.8, margin: "0 0 26px", lineHeight: 1.6 },
    p: { lineHeight: 1.75, opacity: 0.92, margin: "12px 0" },
    h2: { marginTop: 26, marginBottom: 10, fontSize: 20, fontWeight: 800 },
    card: {
      marginTop: 18,
      padding: "16px 16px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
    },
    list: { lineHeight: 1.85, opacity: 0.92, margin: "10px 0 0 18px" },
    link: { color: "white" },
    footer: {
      marginTop: 34,
      paddingTop: 18,
      borderTop: "1px solid rgba(255,255,255,0.10)",
      opacity: 0.8,
      lineHeight: 1.6,
      fontSize: 13,
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>About</h1>
        <p style={styles.meta}>
          YourNextAway is operated by <strong>Diablo Aquila Ltd</strong> (United Kingdom),{" "}
          <strong>Company No: 17010899</strong>.
        </p>

        <div style={styles.card}>
          <p style={{ ...styles.p, marginTop: 0 }}>
            <strong>YourNextAway</strong> is a football-first travel planning platform for people
            who want to build short breaks around fixtures across Europe — without the hassle of
            juggling tabs.
          </p>
          <p style={styles.p}>
            The goal is simple: help you spot matches, pick a city, and compare the travel pieces
            that make the weekend work — flights, hotels, tickets, and experiences.
          </p>
        </div>

        <h2 style={styles.h2}>What the platform will do</h2>
        <ul style={styles.list}>
          <li>Discover upcoming fixtures across key European leagues</li>
          <li>Build short-break trip ideas around match dates</li>
          <li>Compare travel options via trusted partner links</li>
          <li>Save favourites and get alerts as plans firm up</li>
        </ul>

        <h2 style={styles.h2}>Affiliate links (how we keep it free)</h2>
        <p style={styles.p}>
          Some links on YourNextAway are affiliate links. If you click a partner link and make a
          purchase, we may earn a commission at no extra cost to you. This helps fund development
          and keep the platform running.
        </p>

        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.p}>
          For support or partnership enquiries, email{" "}
          <a href="mailto:hello@yournextaway.com" style={styles.link}>
            hello@yournextaway.com
          </a>
          .
        </p>

        <div style={styles.footer}>
          Diablo Aquila Ltd (UK) — Company No: 17010899 —{" "}
          <a href="mailto:hello@yournextaway.com" style={styles.link}>
            hello@yournextaway.com
          </a>
        </div>
      </div>
    </main>
  );
}