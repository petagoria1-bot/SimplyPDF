"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const AboutHero = () => (
  <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        HEXAOS PDF
      </span>
      <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">PDF, simplement.</h1>
      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        HEXAOS PDF regroupe des outils modernes pour travailler avec vos documents directement dans votre navigateur.
      </p>
      <p className="mb-8 leading-relaxed text-gray-500">
        Fusion, conversion, compression, édition, signature, OCR et sécurité : une expérience claire, rapide et respectueuse de vos documents.
      </p>
      <Link href="https://hexaos.fr" target="_blank" className="btn-primary inline-flex items-center gap-2">
        Découvrir HEXAOS <ExternalLink className="h-4 w-4" />
      </Link>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
      <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[3rem] bg-black p-10 text-white shadow-2xl">
        <div className="absolute inset-6 rounded-[2.5rem] border border-white/10" />
        <div className="relative text-center">
          <div className="mb-4 text-5xl font-black tracking-tight">HEXAOS</div>
          <div className="text-xl font-medium text-gray-300">PDF</div>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-white/30" />
        </div>
      </div>
    </motion.div>
  </div>
);
