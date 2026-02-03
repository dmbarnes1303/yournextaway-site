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
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.85))",
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
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="YourNextAway Logo"
          style={{
            width: 140,
            height: 140,
            marginBottom: 24,
          }}
        />

        {/* Title */}
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

        {/* Tagline */}
        <p
          style={{
            maxWidth: 640,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            opacity: 0.95,
            marginBottom: 28,
          }}
        >
          Discover football fixtures. Build trips. Compare flights, hotels and tickets across
          Europe.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 22,
          }}
        >
          <div
            style={{
              padding: "14px 28px",
              borderRadius: 10,
              background: "#1e90ff",
              fontWeight: 600,
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
              fontWeight: 600,
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            Android App — Coming Soon
          </div>
        </div>

        {/* Affiliate disclosure (homepage) */}
        <p
          style={{
            maxWidth: 760,
            fontSize: 13,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.72)",
            margin: 0,
          }}
        >
          Affiliate disclosure: YourNextAway may earn a commission from partner links at no extra
          cost to you.
        </p>
      </div>
    </main>
  );
}