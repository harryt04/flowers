import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://justbecauseflowers.com"),
  title: "Just Because Flowers | Spreading Sunshine, One Bouquet at a Time",
  description:
    "Fresh, thoughtful bouquets at local farmers markets. Bring joy and connection into everyday life.",
  openGraph: {
    title: "Just Because Flowers",
    description:
      "Spreading Sunshine, One Bouquet at a Time. Fresh bouquets, warm moments, and joyful connection.",
    url: "https://justbecauseflowers.com",
    siteName: "Just Because Flowers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Just Because Flowers bouquet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Because Flowers",
    description:
      "Fresh, thoughtful bouquets at local farmers markets and beyond.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
