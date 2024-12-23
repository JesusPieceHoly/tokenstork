import type { Metadata } from "next";
import HelloBar from "@/app/components/HelloBar";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Header";
import CTA from "@/app/components/CTA";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import ThemeSwitcher from "@/app/components/ThemeSwitcher"; // Import ThemeSwitcher
import { BCHPriceProvider } from "@/app/providers/bchpriceclientprovider";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "@/app/globals.css"; // Ensure correct path to globals.css

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenstork.com"),
  title: "Token Stork: Discover, Track and Analyze BCH Cash Tokens (0.0.1 beta)",
  description: "Track BCH CashTokens market cap and more with TokenStork.",
  icons: {
    icon: "favicon-32x32.png",
    shortcut: "favicon.ico",
    apple: [
      { url: "apple-touch-icon.png" },
      { url: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: "site.webmanifest",
  openGraph: {
    title: "Token Stork: Discover, Track and Analyze BCH Cash Tokens (0.0.1 beta)",
    siteName: "Token Stork",
    description: "Track BCH CashTokens market cap and more with TokenStork.",
    url: "https://tokenstork.com/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "fb.png",
        width: 1200,
        height: 630,
        alt: "Token Stork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Stork: Discover, Track and Analyze BCH Cash Tokens",
    description: "Track BCH CashTokens market cap and more with TokenStork.",
    creator: "@bitcoincashsite",
    images: {
      url: "tw.png",
      alt: "Token Stork",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  tokenId?: string;
}) {
  return (
    <ThemeProvider attribute="class">
      <BCHPriceProvider>
        <html lang="en" className={`${bodyFont.variable} font-sans antialiased dark:bg-gray-950`}>
          <head>
            <script
              src="https://beamanalytics.b-cdn.net/beam.min.js"
              data-token="c989accf-6494-49a8-ad3a-ee34c91aeedd"
              async
            ></script>
          </head>
          <body className="container mx-auto">
            <HelloBar />
            <Navbar />
            {children}
            <CTA />
            <Footer />
            <GoogleAnalytics />
            <ThemeSwitcher /> {/* Add ThemeSwitcher as a floating button */}
          </body>
        </html>
      </BCHPriceProvider>
    </ThemeProvider>
  );
}
