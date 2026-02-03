import React from "react";
import Script from "next/script";

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
  return (
    <html lang="en">
      <head>
        {/* Plausible */}
        <Script
          src="https://plausible.io/js/pa-rpYAauHxWVcBt1XGJZ9a2.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible = window.plausible || function () {
              (plausible.q = plausible.q || []).push(arguments)
            };
            plausible.init = plausible.init || function (i) { plausible.o = i || {}; };
            plausible.init();
          `}
        </Script>
      </head>

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
            <div>© {new Date().getFullYear()} YourNextAway. Operated by Diablo Aquila Ltd.</div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/about" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
                About
              </a>
              <a
                href="/privacy"
                style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
              >
                Privacy
              </a>
              <a href="/terms" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
                Terms
              </a>
              <a
                href="/contact"
                style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
              >
                Contact
              </a>
              <a
                href="mailto:hello@yournextaway.com"
                style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
              >
                hello@yournextaway.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}