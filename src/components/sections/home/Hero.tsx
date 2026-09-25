"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity: heroOpacity }}
      className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-32 h-[28rem] w-[28rem] rounded-full bg-blue-200/20 blur-3xl" />
        <div className="grid-pattern absolute inset-0 opacity-30" />
      </div>

      <motion.div style={{ y: heroY }} className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-[#1268f4] shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#12d9f4] shadow-[0_0_12px_rgba(18,217,244,.7)]" />
              PDF gratuit · traitement local
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-5xl font-black leading-[0.98] tracking-[-0.045em] text-[#07101f] sm:text-6xl md:text-7xl"
            >
              Vos PDF.
              <br />
              <span className="bg-gradient-to-r from-[#1268f4] via-[#12a9f4] to-[#1268f4] bg-clip-text text-transparent">
                Sans friction.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
            >
              Fusionnez, compressez, convertissez, signez et organisez vos documents
              avec une interface pensée pour aller droit au but.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/merge-pdf" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5">
                Commencer avec un PDF
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#tools" className="btn-secondary inline-flex items-center justify-center px-7 py-3.5">
                Voir les outils
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500"
            >
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#1268f4]" /> Vos fichiers restent sur votre appareil</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-[#1268f4]" /> Rapide</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#1268f4]" /> Gratuit</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_80px_rgba(7,16,31,.12)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-dashed border-[#8db7f8] bg-gradient-to-b from-[#f5faff] to-white px-6 py-10 text-center md:px-10 md:py-14">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#12d9f4] to-[#1268f4] text-white shadow-lg shadow-blue-200/60">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 15.5v2A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-2" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#07101f] md:text-2xl">Commencez par votre document</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                  Choisissez un outil, puis déposez votre fichier. Aucun détour.
                </p>
                <Link href="/all-tools" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#07101f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1268f4]">
                  Choisir un outil <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="h-4 w-4" />
                  Traitement local · confidentialité d'abord
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  ); 
};