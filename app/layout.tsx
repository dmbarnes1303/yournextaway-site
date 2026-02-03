export const metadata = {
  title: "YourNextAway – Football Trip Planner",
  description:
    "Discover football fixtures. Build trips. Compare flights, hotels and tickets across Europe.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
  };

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {children}

        <footer
          style={{
            background: "#05070d",
            color: "rgba(255,255,255,0.75)",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 13,
            }}
          >
            <div>
              © {new Date().getFullYear()} YourNextAway. Operated by Diablo Aquila Ltd.
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/about" style={linkStyle}>
                About
              </a>
              <a href="/privacy" style={linkStyle}>
                Privacy
              </a>
              <a href="/terms" style={linkStyle}>
                Terms
              </a>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
              <a href="mailto:hello@yournextaway.com" style={linkStyle}>
                hello@yournextaway.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}