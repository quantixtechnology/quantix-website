"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${alignClass} ${className}`}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a6b] tracking-tight mb-4 max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
