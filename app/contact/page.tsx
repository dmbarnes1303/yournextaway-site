// app/contact/page.tsx
export const metadata = {
  title: "Contact – YourNextAway",
  description: "Contact the YourNextAway team.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "#05070d",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 820,
          borderRadius: 18,
          padding: "26px 22px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 42, letterSpacing: 0.2 }}>Contact</h1>

        <p style={{ marginTop: 12, color: "rgba(255,255,255,0.80)", fontSize: 16, lineHeight: 1.6 }}>
          For enquiries, partnerships, affiliate questions, or press, email us and we’ll get back to you.
        </p>

        <div
          style={{
            marginTop: 18,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 14px",
            borderRadius: 14,
            background: "rgba(0,255,140,0.10)",
            border: "1px solid rgba(0,255,140,0.22)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.85)" }}>Email:</span>
          <a
            href="mailto:hello@yournextaway.com"
            style={{
              color: "rgba(255,255,255,0.95)",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            hello@yournextaway.com
          </a>
        </div>

        <p style={{ marginTop: 18, color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
          Operated by Diablo Aquila Ltd (United Kingdom).
        </p>
      </div>
    </main>
  );
}
