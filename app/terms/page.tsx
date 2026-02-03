export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1020", color: "white", padding: "56px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: "0 0 10px", fontWeight: 800 }}>Terms of Service</h1>
        <p style={{ opacity: 0.8, margin: "0 0 26px" }}>Last updated: 3 February 2026</p>

        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          By using YourNextAway, you agree to these Terms. YourNextAway is operated by <strong>Diablo Aquila Ltd</strong>{" "}
          (United Kingdom). If you do not agree, do not use the Services.
        </p>

        <h2 style={{ marginTop: 28 }}>1. Service Description</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          YourNextAway provides football fixture discovery, travel planning tools, and links to third-party services. We
          do not sell tickets, flights, or hotels directly.
        </p>

        <h2 style={{ marginTop: 28 }}>2. Eligibility</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>You must be at least <strong>16 years old</strong>.</p>

        <h2 style={{ marginTop: 28 }}>3. No Guarantees</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We do not guarantee the accuracy of third-party data, availability of matches, or prices shown by partners.
          Purchases are between you and the provider.
        </p>

        <h2 style={{ marginTop: 28 }}>4. Affiliate Relationships</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          Some links generate commission. This does not affect prices you pay.
        </p>

        <h2 style={{ marginTop: 28 }}>5. Future Paid Features</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We may introduce subscriptions or premium features in the future. Details will be presented before purchase.
        </p>

        <h2 style={{ marginTop: 28 }}>6. Prohibited Use</h2>
        <ul style={{ lineHeight: 1.8, opacity: 0.92 }}>
          <li>Abuse the service</li>
          <li>Attempt to hack or reverse engineer</li>
          <li>Use bots or scraping</li>
          <li>Use the app for unlawful purposes</li>
        </ul>

        <h2 style={{ marginTop: 28 }}>7. Intellectual Property</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          All branding, logos, design, and content belong to Diablo Aquila Ltd. You may not copy or redistribute without
          permission.
        </p>

        <h2 style={{ marginTop: 28 }}>8. Limitation of Liability</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We are not liable for missed matches, cancelled events, financial losses, or third-party service failures. Use
          at your own risk.
        </p>

        <h2 style={{ marginTop: 28 }}>9. Termination</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          We may suspend access for abuse or violations.
        </p>

        <h2 style={{ marginTop: 28 }}>10. Governing Law</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>United Kingdom law applies.</p>

        <h2 style={{ marginTop: 28 }}>11. Contact</h2>
        <p style={{ lineHeight: 1.7, opacity: 0.92 }}>
          <a href="mailto:hello@yournextaway.com" style={{ color: "white" }}>
            hello@yournextaway.com
          </a>
        </p>
      </div>
    </main>
  );
}
