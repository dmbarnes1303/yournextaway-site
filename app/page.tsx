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
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
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
            marginBottom: 36,
          }}
        >
          Discover football fixtures. Build trips. Compare flights, hotels and
          tickets across Europe.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
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
              background: "#2a2a2a",
              border: "1px solid #555",
              fontWeight: 600,
            }}
          >
            Android App — Coming Soon
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            fontSize: 12,
            opacity: 0.6,
          }}
        >
          © 2026 YourNextAway. All rights reserved.
        </div>
      </div>
    </main>
  );
}