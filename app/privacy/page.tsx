export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1020", color: "white", padding: "56px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: "0 0 10px", fontWeight: 800 }}>Privacy Policy</h1>
        <p style={{ opacity: 0.8, margin: "0 0 26px" }}>Last updated: 3 February 2026</p>

        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway (“we”, “us”, “our”) is operated by <strong>Diablo Aquila Ltd</strong> (United Kingdom).
          This policy explains how we collect, use, store, and protect your information.
        </p>

        <h2 style={{ marginTop: 28 }}>1. Information We Collect</h2>
        <ul style={{ lineHeight: 1.8, opacity: 0.92 }}>
          <li>Email address (if you contact us or join updates)</li>
          <li>Device and app usage data</li>
          <li>IP address</li>
          <li>Approximate location (city/country level)</li>
          <li>Analytics and performance data</li>
          <li>Affiliate click tracking data</li>
        </ul>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We do <strong>not</strong> collect payment card details, government ID, or precise GPS location.
        </p>

        <h2 style={{ marginTop: 28 }}>2. How We Use Your Data</h2>
        <ul style={{ lineHeight: 1.8, opacity: 0.92 }}>
          <li>Operate and improve the app</li>
          <li>Provide app features</li>
          <li>Respond to support requests</li>
          <li>Analyse usage trends</li>
          <li>Track affiliate referrals</li>
          <li>Prevent abuse and fraud</li>
        </ul>

        <h2 style={{ marginTop: 28 }}>3. Affiliate & Advertising Tracking</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway contains affiliate links and may display advertising. Third-party partners may use cookies or
          tracking technologies to measure performance and conversions. We do not control third-party privacy practices.
        </p>

        <h2 style={{ marginTop: 28 }}>4. Cookies & Similar Technologies</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          Our website and app may use cookies and SDKs for analytics, performance, and affiliate attribution. You can
          disable cookies in your browser settings.
        </p>

        <h2 style={{ marginTop: 28 }}>5. Data Storage & Security</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We use reasonable technical and organisational measures to protect your data. No system is 100% secure.
        </p>

        <h2 style={{ marginTop: 28 }}>6. Data Sharing</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We do not sell your personal data. We may share limited data with analytics providers, hosting providers,
          affiliate networks, and legal authorities if required by law.
        </p>

        <h2 style={{ marginTop: 28 }}>7. Your Rights (UK & GDPR)</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          You may request access, correction, deletion, or restriction of processing by emailing{" "}
          <a href="mailto:hello@yournextaway.com" style={{ color: "white" }}>
            hello@yournextaway.com
          </a>
          .
        </p>

        <h2 style={{ marginTop: 28 }}>8. Children</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway is intended for users <strong>16 years and older</strong>. We do not knowingly collect data from
          children under 16.
        </p>

        <h2 style={{ marginTop: 28 }}>9. Changes</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We may update this policy. Continued use means acceptance of changes.
        </p>

        <h2 style={{ marginTop: 28 }}>10. Contact</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          Diablo Aquila Ltd —{" "}
          <a href="mailto:hello@yournextaway.com" style={{ color: "white" }}>
            hello@yournextaway.com
          </a>
        </p>
      </div>
    </main>
  );
}
