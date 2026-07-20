import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import FloatingWidgets from "@/components/FloatingWidgets";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.britstreams4k.uk"),
  title: "Best IPTV Provider UK 2026 | Buy IPTV Subscription UK 30% OFF",
  description: "Best Premium UK IPTV Subscription Service Provider 2026. Get IPTV for Firestick, Smart TV, Android TV, iPads/iPhones, Mac, & Windows with a free setup guide.",
  keywords: "IPTV UK, Premium IPTV, 4K IPTV subscription, BritStreams 4K, Firestick IPTV, UK Sports IPTV",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  openGraph: {
    title: "BritStreams 4K - Premium UK IPTV",
    description: "The Ultimate UK Streaming Experience with 4K UHD and Anti-Freeze 3.0",
    url: "https://www.britstreams4k.uk",
    siteName: "BritStreams 4K",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "BritStreams 4K Preview",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BritStreams 4K | Premium UK IPTV Service",
    description: "The Ultimate UK Streaming Experience with 4K UHD and Anti-Freeze 3.0",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics removed to prevent Lighthouse timeout */}
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "BritStreams 4K",
              "description": "Premium IPTV subscription service in UK",
              "areaServed": "GB",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "GBP",
                "lowPrice": "12.99",
                "highPrice": "84.99"
              }
            })
          }}
        />
        {children}
        <CookieBanner />
        <FloatingWidgets />
      </body>
    </html>
  );
}
