export default function ContactPage() {
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
    p: { lineHeight: 1.75, opacity: 0.92, margin: "12px 0" },
    card: {
      marginTop: 18,
      padding: "18px 16px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
    },
    row: { display: "flex", flexWrap: "wrap", gap: 12, alignItems: "baseline" },
    label: { width: 140, opacity: 0.75, fontSize: 13 },
    value: { fontSize: 15, opacity: 0.95 },
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
        <h1 style={styles.h1}>Contact</h1>
        <p style={styles.p}>
          For support, partnerships, or affiliate enquiries, use the contact details below.
        </p>

        <div style={styles.card}>
          <div style={styles.row}>
            <div style={styles.label}>Email</div>
            <div style={styles.value}>
              <a href="mailto:hello@yournextaway.com" style={styles.link}>
                hello@yournextaway.com
              </a>
            </div>
          </div>

          <div style={{ height: 12 }} />

          <div style={styles.row}>
            <div style={styles.label}>Operator</div>
            <div style={styles.value}>Diablo Aquila Ltd (UK)</div>
          </div>

          <div style={{ height: 12 }} />

          <div style={styles.row}>
            <div style={styles.label}>Company No</div>
            <div style={styles.value}>17010899</div>
          </div>
        </div>

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