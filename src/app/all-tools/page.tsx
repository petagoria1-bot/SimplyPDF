import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Hammer, Info, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Tous les outils PDF | HEXAOS PDF",
  description:
    "La liste complète des outils PDF gratuits et des ressources disponibles sur HEXAOS PDF.",
};

const sections = [
  {
    title: "Outils principaux",
    icon: Hammer,
    pages: [
      { name: "Fusionner PDF", href: "/merge-pdf" },
      { name: "Diviser PDF", href: "/split-pdf" },
      { name: "Compresser PDF", href: "/compress-pdf" },
      { name: "Modifier PDF", href: "/edit-pdf" },
      { name: "PDF vers Word", href: "/pdf-to-word" },
      { name: "Word vers PDF", href: "/word-to-pdf" },
      { name: "JPG vers PDF", href: "/jpg-to-pdf" },
      { name: "PDF vers JPG", href: "/pdf-to-jpg" },
      { name: "OCR PDF", href: "/ocr-pdf" },
      { name: "Signer PDF", href: "/sign-pdf" },
      { name: "Filigrane PDF", href: "/watermark-pdf" },
      { name: "Protéger PDF", href: "/protect-pdf" },
      { name: "Déverrouiller PDF", href: "/unlock-pdf" },
      { name: "Faire pivoter PDF", href: "/rotate-pdf" },
      { name: "Organiser PDF", href: "/organize-pdf" },
      { name: "PDF vers Excel", href: "/pdf-to-excel" },
      { name: "Réparer PDF", href: "/repair-pdf" },
      { name: "Modifier les métadonnées", href: "/edit-metadata" },
    ],
  },
  {
    title: "Ressources",
    icon: Info,
    pages: [
      { name: "Comment ça marche", href: "/how-it-works" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "FAQ", href: "/faq" },
      { name: "Journal des modifications", href: "/changelog" },
      { name: "Assistance", href: "/support" },
      { name: "À propos", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informations légales",
    icon: Layout,
    pages: [
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "Conditions d’utilisation", href: "/terms" },
      { name: "Mentions et avertissement", href: "/disclaimer" },
      { name: "Politique des cookies", href: "/cookie-policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour à l’accueil
        </Link>

        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-black tracking-tight">
            Tous les outils PDF
          </h1>
          <p className="text-lg font-medium text-gray-500">
            Tous les outils, fonctionnalités et documents légaux de{" "}
            <span className="text-black">HEXAOS PDF</span> — all in one place.
          </p>
        </div>

        <div className="stagger-up grid grid-cols-1 gap-12 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-gray-50 p-2.5">
                  <section.icon className="h-5 w-5 text-gray-400" />
                </div>
                <h2 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.pages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-sm font-bold text-gray-500 transition-colors hover:text-black"
                    >
                      {link.name}
                      <ArrowLeft className="h-3.5 w-3.5 -translate-x-2 rotate-180 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
