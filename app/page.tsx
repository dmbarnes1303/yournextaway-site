export default function HomePage() {
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
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.62), rgba(0,0,0,0.88))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
          color: "#ffffff",
          textAlign: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
        }}
      >
        <img
          src="/logo.png"
          alt="YourNextAway Logo"
          style={{ width: 140, height: 140, marginBottom: 24 }}
        />

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          YourNextAway
        </h1>

        <p
          style={{
            maxWidth: 720,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            opacity: 0.95,
            marginBottom: 28,
          }}
        >
          Discover football fixtures. Build city breaks around match dates. Compare flights, hotels,
          tickets, and experiences across Europe.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 10,
              background: "#1e90ff",
              fontWeight: 700,
            }}
          >
            iOS App — Coming Soon
          </div>

          <div
            style={{
              padding: "14px 28px",
              borderRadius: 10,
              background: "rgba(42,42,42,0.75)",
              border: "1px solid rgba(255,255,255,0.22)",
              fontWeight: 700,
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            Android App — Coming Soon
          </div>
        </div>

        <p
          style={{
            maxWidth: 760,
            fontSize: 13,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.74)",
            margin: 0,
          }}
        >
          Affiliate disclosure: YourNextAway may earn a commission when you click partner links and
          make a purchase, at no extra cost to you.
        </p>
      </div>
    </main>
  );
}
