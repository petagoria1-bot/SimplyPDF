"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutSkills } from "@/components/sections/about/AboutSkills";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutConnect } from "@/components/sections/about/AboutConnect";
import { SimpleCTA } from "@/components/sections/common/SimpleCTA";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function AboutClient() {
  return (
    <main className="min-h-screen overflow-hidden px-4 pt-32 pb-20">
      <BackgroundGradient />
      <div className="container mx-auto max-w-5xl">
        <AboutHero />
        <AboutSkills />
        <AboutPhilosophy />
        <AboutConnect />
        <SimpleCTA title="Prêt à travailler avec vos PDF ?" description="Découvrez les outils HEXAOS PDF directement dans votre navigateur." primaryBtnText="Explorer HEXAOS PDF" primaryBtnLink="/" />
      </div>
    </main>
  );
}
