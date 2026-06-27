import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Arahnyam Editorial Luxury | Pool Side Resort Bhimtal",
  description: "Affordable luxury pool side resort and cottage. Discover the ultimate resort in Bhimtal, offering a serene escape, biological reconnection, and a stunning pool side experience.",
  keywords: "Pool side resort bhimtal, resort in bhimtal, luxury resort bhimtal, cottages in bhimtal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Arahnyam Editorial Luxury",
    "image": "https://arahnyam.com/hero.png",
    "description": "Affordable luxury pool side resort and cottage in Bhimtal.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhimtal",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Infinity Pool",
        "value": "True"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Forest View Cottages",
        "value": "True"
      }
    ],
    "telephone": "+91-1234567890",
    "url": "https://arahnyam.com"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
