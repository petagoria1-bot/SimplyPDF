import { Metadata } from "next";
import TermsClient from "@/components/pages/legal/TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | HEXAOS PDF",
  description:
    "Read the Terms of Service for using HEXAOS PDF's free online PDF tools.",
};

export default function TermsPage() {
  return <TermsClient />;
}
