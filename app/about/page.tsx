export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1020", color: "white", padding: "56px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: "0 0 10px", fontWeight: 800 }}>About YourNextAway</h1>

        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway helps football fans discover fixtures, plan trips, and compare flights, hotels and tickets across
          Europe.
        </p>

        <ul style={{ lineHeight: 1.8, opacity: 0.92 }}>
          <li>Find upcoming matches</li>
          <li>Explore cities and clubs</li>
          <li>Build trip ideas around dates</li>
          <li>Compare travel options</li>
        </ul>

        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway is operated by <strong>Diablo Aquila Ltd</strong> (United Kingdom).
        </p>

        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          Contact:{" "}
          <a href="mailto:hello@yournextaway.com" style={{ color: "white" }}>
            hello@yournextaway.com
          </a>
        </p>
      </div>
    </main>
  );
}
