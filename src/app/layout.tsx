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
    default: "HEXAOS PDF | #1 Free Online PDF Editor, Merger & Converter",
    template: "%s | HEXAOS PDF",
  },
  description:
    "HEXAOS PDF is the world's most premium, free online PDF tool. Edit, merge, split, compress, and convert PDFs 100% locally in your browser. Fast, secure, and no sign-up required.",
  applicationName: "HEXAOS PDF",
  authors: [{ name: "HEXAOS PDF Team" }],
  keywords: [
    "PDF Editor",
    "Merge PDF",
    "Compress PDF",
    "PDF Converter",
    "Split PDF",
    "Edit PDF Online",
    "Sign PDF",
    "PDF to Word",
    "JPG to PDF",
    "OCR PDF",
    "Free PDF Tools",
    "Secure PDF processing",
    "No upload PDF tool",
  ],
  icons: {
    icon: "/hexaos-pdf-icon.svg",
    shortcut: "/hexaos-pdf-icon.svg",
    apple: "/hexaos-pdf-icon.svg",
  },
  openGraph: {
    title: "HEXAOS PDF | The Easiest & Most Secure PDF Tool",
    description:
      "The premium way to manage your PDFs. 100% browser-based editing, merging, and converting. Your files never leave your device.",
    url: "https://hexaos.fr",
    siteName: "HEXAOS PDF",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HEXAOS PDF - Free Online PDF Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HEXAOS PDF | #1 Free Online PDF Tools",
    description:
      "Premium PDF editing and management, 100% private and secure. No uploads, no limits.",
    images: ["/og-image.png"],
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
