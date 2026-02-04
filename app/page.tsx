export default function HomePage() {
  const year = new Date().getFullYear();

  const styles: Record<string, React.CSSProperties> = {
    page: {
      minHeight: "100vh",
      backgroundImage: "url('/stadium.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.88))",
    },
    content: {
      position: "relative",
      zIndex: 1,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px",
      color: "#ffffff",
      textAlign: "center",
    },
    logo: {
      width: 132,
      height: 132,
      marginBottom: 22,
      borderRadius: 24,
    },
    title: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: 850,
      margin: "0 0 14px",
      letterSpacing: "-0.02em",
    },
    tagline: {
      maxWidth: 720,
      fontSize: "1.08rem",
      lineHeight: 1.65,
      opacity: 0.95,
      margin: "0 0 26px",
    },
    buttonsRow: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: 18,
    },
    buttonPrimary: {
      padding: "14px 24px",
      borderRadius: 12,
      background: "#1e90ff",
      fontWeight: 700,
      letterSpacing: "0.01em",
      boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
      userSelect: "none",
    },
    buttonSecondary: {
      padding: "14px 24px",
      borderRadius: 12,
      background: "rgba(25,25,25,0.55)",
      border: "1px solid rgba(255,255,255,0.20)",
      fontWeight: 700,
      letterSpacing: "0.01em",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      userSelect: "none",
    },
    disclosure: {
      maxWidth: 820,
      fontSize: 13,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.76)",
      margin: 0,
    },
    footer: {
      position: "relative",
      zIndex: 1,
      padding: "14px 18px",
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between",
      color: "rgba(255,255,255,0.70)",
      fontSize: 12,
      borderTop: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(0,0,0,0.22)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
    footerLeft: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center",
    },
    footerRight: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      alignItems: "center",
    },
    link: {
      color: "rgba(255,255,255,0.78)",
      textDecoration: "none",
    },
    dot: { opacity: 0.55 },
  };

  return (
    <main style={styles.page}>
      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Main content */}
      <div style={styles.content}>
        <img src="/logo.png" alt="YourNextAway Logo" style={styles.logo} />

        <h1 style={styles.title}>YourNextAway</h1>

        <p style={styles.tagline}>
          Discover football fixtures. Build city breaks around match dates. Compare
          flights, hotels, tickets, and experiences across Europe.
        </p>

        <div style={styles.buttonsRow}>
          <div style={styles.buttonPrimary}>iOS App — Coming Soon</div>
          <div style={styles.buttonSecondary}>Android App — Coming Soon</div>
        </div>

        <p style={styles.disclosure}>
          Affiliate disclosure: YourNextAway may earn a commission when you click partner links and
          make a purchase, at no extra cost to you.
        </p>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLeft}>
          <span>© {year} YourNextAway</span>
          <span style={styles.dot}>•</span>
          <span>Operated by Diablo Aquila Ltd (UK)</span>
          <span style={styles.dot}>•</span>
          <span>Company No: 17010899</span>
        </div>

        <div style={styles.footerRight}>
          <a href="/about" style={styles.link}>
            About
          </a>
          <a href="/privacy" style={styles.link}>
            Privacy
          </a>
          <a href="/terms" style={styles.link}>
            Terms
          </a>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
          <a href="mailto:hello@yournextaway.com" style={styles.link}>
            hello@yournextaway.com
          </a>
        </div>
      </footer>
    </main>
  );
}
