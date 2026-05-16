"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  ShoppingBasket,
  Shirt,
  Pill,
  Droplets,
  Home,
  Sparkles,
  Armchair,
  Beef,
  MapPin,
  ShoppingBag,
} from "lucide-react";

const businesses = [
  {
    icon: UtensilsCrossed,
    label: "Food Delivery",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.10)",
    border: "rgba(255,107,53,0.20)",
  },
  {
    icon: ShoppingBasket,
    label: "Grocery Delivery",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.10)",
    border: "rgba(22,163,74,0.20)",
  },
  {
    icon: Shirt,
    label: "Laundry Service",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.10)",
    border: "rgba(59,130,246,0.20)",
  },
  {
    icon: Pill,
    label: "Pharmacy",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.10)",
    border: "rgba(220,38,38,0.20)",
  },
  {
    icon: Droplets,
    label: "Car / Bike Wash",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.10)",
    border: "rgba(8,145,178,0.20)",
  },
  {
    icon: Home,
    label: "Home Services",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.10)",
    border: "rgba(124,58,237,0.20)",
  },
  {
    icon: Sparkles,
    label: "Cosmetics",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.10)",
    border: "rgba(236,72,153,0.20)",
  },
  {
    icon: Armchair,
    label: "Furniture",
    color: "#d97706",
    bg: "rgba(217,119,6,0.10)",
    border: "rgba(217,119,6,0.20)",
  },
  {
    icon: Beef,
    label: "Meat Delivery",
    color: "#b91c1c",
    bg: "rgba(185,28,28,0.10)",
    border: "rgba(185,28,28,0.20)",
  },
  {
    icon: MapPin,
    label: "Directory Listing",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.10)",
    border: "rgba(99,102,241,0.20)",
  },
  {
    icon: ShoppingBag,
    label: "Ecommerce Stores",
    color: "#f97316",
    bg: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.20)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip = {
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function PerfectFor() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      {/* Soft background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1a3a6b] bg-[#eef2ff] border border-[#c7d7f7] px-4 py-1.5 rounded-full mb-5">
            Who It&apos;s For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f1f3d] leading-[1.1] mb-4">
            Perfect for{" "}
            <span className="text-[#f97316]">Your Business</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            One platform powering every delivery and service business. Whatever you sell, we&apos;ve got your app.
          </p>
        </motion.div>

        {/* Business type chips */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {businesses.map(({ icon: Icon, label, color, bg, border }) => (
            <motion.div
              key={label}
              variants={chip}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: bg,
                border: `1px solid ${border}`,
              }}
              whileHover={{
                border: `1px solid ${color}60`,
                boxShadow: `0 12px 28px ${color}22`,
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${color}22` }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-[#1e293b] whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtext + CTA */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-6">
            Don&apos;t see your niche?{" "}
            <span className="text-[#1a3a6b] font-semibold">
              We support any on-demand or service business.
            </span>
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-[#1a3a6b] hover:bg-[#142f5a] text-white font-semibold px-8 py-4 rounded-2xl text-sm sm:text-base transition-all hover:shadow-xl hover:shadow-[#1a3a6b]/20 hover:-translate-y-0.5"
          >
            Talk to Sales →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
