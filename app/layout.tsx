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
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
