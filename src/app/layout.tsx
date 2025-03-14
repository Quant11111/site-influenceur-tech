import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quant11111 - Influenceur Tech",
  description:
    "Site officiel de Quant11111, créateur de contenu tech sur Twitch, YouTube, Instagram, TikTok et GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
