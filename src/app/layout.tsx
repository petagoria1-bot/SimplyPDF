import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/auth/Providers";
import { CookieConsent } from "@/components/ui/CookieConsent";
import WelcomeAuthModal from "@/components/auth/WelcomeAuthModal";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { Great_Vibes, Alex_Brush } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://hexaos.fr"
  ),
  title: {
    default: "HEXAOS PDF | Outils PDF gratuits, privés et rapides",
    template: "%s | HEXAOS PDF",
  },
  description:
    "Outils PDF gratuits, rapides et privés. Fusionnez, divisez, compressez, convertissez et modifiez vos PDF directement dans votre navigateur.",
  applicationName: "HEXAOS PDF",
  authors: [{ name: "HEXAOS PDF Team" }],
  keywords: [
    "HEXAOS PDF",
    "outils PDF gratuits",
    "fusionner PDF",
    "compresser PDF",
    "convertisseur PDF",
    "diviser PDF",
    "modifier PDF",
    "signer PDF",
    "PDF vers Word",
    "JPG vers PDF",
    "OCR PDF",
    "traitement PDF local",
    "PDF privé",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/hexaos-pdf-icon-512.svg",
  },
  openGraph: {
    title: "HEXAOS PDF | Outils PDF gratuits et privés",
    description:
      "Gérez vos PDF directement dans votre navigateur. Traitement local, rapide et sans envoi des documents vers un serveur de traitement.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://hexaos.fr",
    siteName: "HEXAOS PDF",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "HEXAOS PDF — Outils PDF gratuits et privés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXAOS PDF | Outils PDF gratuits et privés",
    description:
      "Fusionnez, divisez, compressez et convertissez vos PDF directement dans votre navigateur.",
    images: ["/og-image.svg"],
  },
  other: {
    "google-adsense-account":
      process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "ca-pub-4266443141083729",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HEXAOS PDF",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://hexaos.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hexaos.fr"}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${greatVibes.variable} ${alexBrush.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
            process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "ca-pub-4266443141083729"
          }`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Providers>
          <Header />
          <WelcomeAuthModal />
          <CookieConsent />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
