import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lisandrinaiacciu | Site vitrine",
  description:
    "Site vitrine moderne d'une boutique avec presentation, produits et contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
