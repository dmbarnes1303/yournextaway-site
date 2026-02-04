export default function TermsPage() {
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
        <h1 style={styles.h1}>Terms of Service</h1>
        <p style={styles.meta}>Last updated: 3 February 2026</p>

        <p style={styles.p}>
          These Terms of Service (“Terms”) apply to YourNextAway (the “Service”), operated by{" "}
          <strong>Diablo Aquila Ltd</strong> (United Kingdom), <strong>Company No: 17010899</strong>.
          By using the Service, you agree to these Terms.
        </p>

        <h2 style={styles.h2}>1. What we provide</h2>
        <p style={styles.p}>
          YourNextAway helps users discover football fixtures and plan trips by linking to third-party
          providers (for example flights, hotels, tickets, experiences, and insurance). We may earn
          commission from partner links (see Affiliate Disclosure).
        </p>

        <h2 style={styles.h2}>2. Affiliate links & third-party providers</h2>
        <ul style={styles.list}>
          <li>
            Purchases are made directly with third-party providers. We do not sell or fulfil travel
            products.
          </li>
          <li>
            Prices, availability, and booking terms are set by providers and may change without notice.
          </li>
          <li>
            We are not responsible for third-party services, delays, cancellations, refunds, or
            disputes.
          </li>
        </ul>

        <h2 style={styles.h2}>3. Accuracy & availability</h2>
        <p style={styles.p}>
          We aim to keep information accurate, but fixtures, schedules, and travel availability can
          change. The Service is provided on an “as is” basis and may be updated, modified, or
          interrupted.
        </p>

        <h2 style={styles.h2}>4. Acceptable use</h2>
        <ul style={styles.list}>
          <li>Do not misuse the Service or attempt to disrupt its operation.</li>
          <li>Do not use automated scraping or abuse partner links.</li>
          <li>Do not upload unlawful content or violate third-party rights.</li>
        </ul>

        <h2 style={styles.h2}>5. Liability</h2>
        <p style={styles.p}>
          To the fullest extent permitted by law, Diablo Aquila Ltd is not liable for indirect or
          consequential losses arising from use of the Service or third-party providers. Nothing in
          these Terms limits liability where it cannot be excluded by law.
        </p>

        <h2 style={styles.h2}>6. Changes</h2>
        <p style={styles.p}>
          We may update these Terms from time to time. Continued use of the Service after changes
          means you accept the updated Terms.
        </p>

        <h2 style={styles.h2}>7. Contact</h2>
        <p style={styles.p}>
          Questions about these Terms:{" "}
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