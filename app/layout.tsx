// app/layout.tsx
import React from "react";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "YourNextAway – Football Trip Planner",
  description:
    "Discover football fixtures. Build city breaks around match dates. Compare flights, hotels, tickets, and experiences across Europe.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        {/* Agoda / AGD domain verification */}
        <meta name="agd-partner-manual-verification" content="" />
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
          background: "#05070d",
        }}
      >
        {/* Plausible (simple + safe) */}
        <Script
          src="https://plausible.io/js/pa-rpYAauHxWVcBt1XGJZ9a2.js"
          strategy="afterInteractive"
        />

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
              © {year} YourNextAway · Operated by Diablo Aquila Ltd (UK) · Company No: 17010899
            </div>

            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/about" style={footerLinkStyle()}>
                About
              </Link>
              <Link href="/privacy" style={footerLinkStyle()}>
                Privacy
              </Link>
              <Link href="/terms" style={footerLinkStyle()}>
                Terms
              </Link>
              <Link href="/contact" style={footerLinkStyle()}>
                Contact
              </Link>
              <a href="mailto:hello@yournextaway.com" style={footerLinkStyle()}>
                hello@yournextaway.com
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}

function footerLinkStyle(): React.CSSProperties {
  return {
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
  };
}
