import { Metadata } from "next";
import ChangelogClient from "@/components/pages/changelog/ChangelogClient";

export const metadata: Metadata = {
  title: "Changelog | HEXAOS PDF",
  description:
    "Stay updated with the latest features, improvements, and updates to HEXAOS PDF.",
};

export default function ChangelogPage() {
  return <ChangelogClient />;
}
