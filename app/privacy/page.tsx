export default function PrivacyPage() {
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
    h2: { marginTop: 30, marginBottom: 10, fontSize: 20, fontWeight: 800 },
    ul: { lineHeight: 1.85, opacity: 0.92, margin: "10px 0 0 18px" },
    card: {
      marginTop: 18,
      padding: "16px 16px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
    },
    link: { color: "white" },
    footer: {
      marginTop: 36,
      paddingTop: 18,
      borderTop: "1px solid rgba(255,255,255,0.10)",
      opacity: 0.78,
      lineHeight: 1.6,
      fontSize: 13,
    },
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.meta}>Last updated: 3 February 2026</p>

        <p style={styles.p}>
          YourNextAway (“we”, “us”, “our”) is operated by{" "}
          <strong>Diablo Aquila Ltd</strong> (United Kingdom), <strong>Company No: 17010899</strong>.
          This policy explains how we collect, use, store, and protect your information.
        </p>

        <div style={styles.card}>
          <h2 style={{ ...styles.h2, marginTop: 0 }}>Affiliate Disclosure</h2>
          <p style={{ ...styles.p, marginTop: 8 }}>
            YourNextAway contains affiliate links. This means we may earn a commission when you
            click links to third-party providers (for example flights, hotels, tickets, experiences,
            or insurance) and make a purchase, at no additional cost to you.
          </p>
          <p style={styles.p}>
            These commissions help fund development and operation of the platform.
          </p>
        </div>

        <h2 style={styles.h2}>1. Information We Collect</h2>
        <ul style={styles.ul}>
          <li>Email address (if you contact us or join updates)</li>
          <li>Device and app usage data</li>
          <li>IP address</li>
          <li>Approximate location (city/country level)</li>
          <li>Analytics and performance data</li>
          <li>Affiliate click tracking data</li>
        </ul>
        <p style={styles.p}>
          We do <strong>not</strong> collect payment card details, government ID, or precise GPS
          location.
        </p>

        <h2 style={styles.h2}>2. How We Use Your Data</h2>
        <ul style={styles.ul}>
          <li>Operate and improve the app</li>
          <li>Provide app features</li>
          <li>Respond to support requests</li>
          <li>Analyse usage trends</li>
          <li>Track affiliate referrals</li>
          <li>Prevent abuse and fraud</li>
        </ul>

        <h2 style={styles.h2}>3. Affiliate & Advertising Tracking</h2>
        <p style={styles.p}>
          YourNextAway may include affiliate links and may display advertising. Third-party partners
          can use cookies or other tracking technologies to measure performance and conversions. We
          do not control third-party privacy practices.
        </p>

        <h2 style={styles.h2}>4. Cookies & Similar Technologies</h2>
        <p style={styles.p}>
          Our website and app may use cookies and SDKs for analytics, performance, and affiliate
          attribution. You can disable cookies in your browser settings, but some features may not
          function as intended.
        </p>

        <h2 style={styles.h2}>5. Data Storage & Security</h2>
        <p style={styles.p}>
          We use reasonable technical and organisational measures to protect your data. No system is
          100% secure.
        </p>

        <h2 style={styles.h2}>6. Data Sharing</h2>
        <p style={styles.p}>
          We do not sell your personal data. We may share limited data with analytics providers,
          hosting providers, affiliate networks, and legal authorities if required by law.
        </p>

        <h2 style={styles.h2}>7. Your Rights (UK & GDPR)</h2>
        <p style={styles.p}>
          You may request access, correction, deletion, or restriction of processing by emailing{" "}
          <a href="mailto:hello@yournextaway.com" style={styles.link}>
            hello@yournextaway.com
          </a>
          .
        </p>

        <h2 style={styles.h2}>8. Children</h2>
        <p style={styles.p}>
          YourNextAway is intended for users <strong>16 years and older</strong>. We do not knowingly
          collect data from children under 16.
        </p>

        <h2 style={styles.h2}>9. Changes</h2>
        <p style={styles.p}>
          We may update this policy from time to time. Continued use means acceptance of the updated
          policy.
        </p>

        <h2 style={styles.h2}>10. Contact</h2>
        <p style={styles.p}>
          Diablo Aquila Ltd (UK), Company No: 17010899 —{" "}
          <a href="mailto:hello@yournextaway.com" style={styles.link}>
            hello@yournextaway.com
          </a>
        </p>

        <div style={styles.footer}>
          Tip for affiliate approvals: Keep your About / Privacy / Terms / Contact pages accessible
          from the homepage footer at all times (not hidden behind menus).
        </div>
      </div>
    </main>
  );
}

