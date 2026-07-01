import type { Metadata } from "next";
import { Playfair_Display, Nunito, Dancing_Script, Pacifico } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-cta",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunshineflowerbar.com"),
  title: "Sunshine Flower Bar | Share Kindness. Brighten Someone's Day.",
  description:
    "Mobile flower bar for markets, pop-ups, weddings, showers, corporate events, and just-because moments.",
  openGraph: {
    title: "Sunshine Flower Bar",
    description:
      "Share Kindness. Brighten Someone's Day. Fresh bouquets for every occasion.",
    url: "https://sunshineflowerbar.com",
    siteName: "Sunshine Flower Bar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunshine Flower Bar bouquet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine Flower Bar",
    description:
      "Share Kindness. Brighten Someone's Day. Mobile flower bar for markets, pop-ups, and events.",
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
      className={`${playfair.variable} ${nunito.variable} ${dancingScript.variable} ${pacifico.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground font-body">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
