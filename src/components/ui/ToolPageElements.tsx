"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

// Floating decoration component
export const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -20, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
    }}
    className={className}
  />
);

// Animated grid pattern with gradients
export const AnimatedBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-70">
    <div className="grid-pattern absolute inset-0 opacity-40" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-linear-to-bl from-cyan-50/70 to-transparent blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="absolute bottom-0 left-0 h-[340px] w-[340px] rounded-full bg-linear-to-tr from-blue-50/60 to-transparent blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-gradient-radial absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full from-cyan-50/50 to-transparent blur-3xl"
    />
  </div>
);

// Floating decorations
export const FloatingDecorations = () => (
  <>
    <FloatingShape
      className="absolute top-32 right-[10%] h-20 w-20 rounded-full border-2 border-blue-100 opacity-40"
      delay={0}
    />
    <FloatingShape
      className="absolute top-48 left-[5%] h-12 w-12 rotate-12 rounded-2xl bg-gray-100 opacity-60"
      delay={0.2}
    />
    <FloatingShape
      className="absolute right-[15%] bottom-32 h-16 w-16 rounded-full bg-gray-50 opacity-50"
      delay={0.4}
    />
    <FloatingShape
      className="absolute bottom-48 left-[10%] h-24 w-24 -rotate-6 rounded-3xl border border-blue-100 opacity-30"
      delay={0.6}
    />
  </>
);

// Page wrapper with all decorations
interface ToolPageBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function ToolPageBackground({
  children,
  className = "",
}: ToolPageBackgroundProps) {
  return (
    <div
      className={`relative min-h-[calc(100vh-80px)] overflow-hidden pt-24 pb-16 ${className}`}
    >
      <AnimatedBackground />
      <FloatingDecorations />
      <div className="relative container mx-auto px-4">{children}</div>
    </div>
  );
}

// Page header component
interface ToolHeaderProps {
  icon?: React.ElementType | React.ReactNode;
  title: string;
  description: string;
}

export function ToolHeader({ icon, title, description }: ToolHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 text-center"
    >
      {icon && (
        <motion.div
          className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-50 to-blue-50 text-blue-600 shadow-md shadow-blue-100/40"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {React.isValidElement(icon)
            ? icon
            : typeof icon === "function" ||
                (typeof icon === "object" && icon !== null)
              ? React.createElement(
                  icon as React.ComponentType<{ className?: string }>,
                  { className: "w-10 h-10" }
                )
              : (icon as React.ReactNode)}
        </motion.div>
      )}
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500 md:text-xl">
        {description}
      </p>
    </motion.div>
  );
}

// Card wrapper with glow effect
interface ToolCardProps {
  children: ReactNode;
  className?: string;
}

export function ToolCard({ children, className = "" }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative ${className}`}
    >
      <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-cyan-100/50 via-blue-100/20 to-transparent" />
      <div className="relative rounded-[1.75rem] border border-gray-200/80 bg-white/95 p-5 shadow-[0_20px_55px_rgba(7,16,31,.08)] backdrop-blur md:p-7">
        {children}
      </div>
    </motion.div>
  );
}

// Feature grid
export function FeatureGrid() {
  const features = [
    {
      icon: "🔒",
      label: "100 % privé",
      desc: "Vos fichiers restent sur votre appareil",
    },
    { icon: "⚡", label: "Ultra rapide", desc: "Traitement local instantané" },
    { icon: "✨", label: "Entièrement gratuit", desc: "Sans frais ni limites cachées" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.label}
          className="group relative rounded-2xl border border-blue-100 bg-linear-to-b from-blue-50 to-white p-6 transition-all duration-500 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50"
          whileHover={{ y: -5 }}
        >
          <span className="mb-3 block text-2xl">{feature.icon}</span>
          <div className="mb-1 text-lg font-semibold">{feature.label}</div>
          <div className="text-sm text-gray-500">{feature.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

import { Loader } from "./Loader";

// Processing state component
interface ProcessingStateProps {
  title?: string;
  message?: string; // for backward compatibility
  description?: string;
  progress?: number;
}

export function ProcessingState({
  title,
  message,
  description,
  progress,
}: ProcessingStateProps) {
  const displayTitle = title || message || "Traitement en cours…";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto flex max-w-lg flex-col items-center justify-center py-32 text-center"
    >
      <Loader size="xl" className="mb-10" />
      <motion.h2
        className="mb-3 text-2xl font-bold md:text-3xl"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {displayTitle}
      </motion.h2>

      {description && (
        <p className="mb-6 max-w-sm text-gray-500">{description}</p>
      )}

      {progress !== undefined && (
        <>
          <div className="mt-4 h-2 w-64 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full" style={{ background: "linear-gradient(90deg,#12d9f4,#1268f4)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">{progress}%</p>
        </>
      )}

      <div className="mt-6 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
