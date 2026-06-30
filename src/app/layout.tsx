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
  title: "Arahnyam - Best Resort in Bhimtal | Affordable Luxury Nature Retreat",
  description: "Looking for the best resort in Bhimtal? Arahnyam offers affordable luxury cottages and canopy treehouses hidden in the forests of Bhimtal. Book your calm nature retreat today.",
  keywords: "best resort in bhimtal, resort in bhimtal, affordable luxury resort in bhimtal, pool side resort bhimtal, nature retreat bhimtal, forest cottages bhimtal",
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
    "image": "https://arahnyam.com/Pics/Arahnyam_Main_Building.JPG",
    "description": "Affordable luxury pool side resort and cottages hidden in the forests of Bhimtal.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhimtal",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Serene Pool",
        "value": "True"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Forest View Cottages",
        "value": "True"
      }
    ],
    "telephone": "+91-9557345422",
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
