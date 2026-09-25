import { Metadata } from "next";
import FeaturesClient from "@/components/pages/features/FeaturesClient";

export const metadata: Metadata = {
  title: "Features | HEXAOS PDF",
  description:
    "Explore the powerful features of HEXAOS PDF. Fast, secure, and free online PDF tools.",
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
