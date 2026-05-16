"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  TabletSmartphone,
  Receipt,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Smartphone,
    title: "Customer Android App",
    gradient: "from-[#1a3a6b] to-[#2563eb]",
    borderGlow: "rgba(37,99,235,0.35)",
    accentColor: "#2563eb",
    features: [
      "Beautiful branded Android app for customers",
      "Real-time order tracking",
      "Login & registration",
      "Cart & checkout flow",
      "Push notifications",
      "Wallet & offers support",
    ],
  },
  {
    icon: Globe,
    title: "Ecommerce Website",
    gradient: "from-[#059669] to-[#10b981]",
    borderGlow: "rgba(5,150,105,0.35)",
    accentColor: "#10b981",
    features: [
      "SEO-friendly business website",
      "Online ordering system",
      "Fully responsive mobile layout",
      "Product & category management",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Admin Panel",
    gradient: "from-[#7c3aed] to-[#a855f7]",
    borderGlow: "rgba(124,58,237,0.35)",
    accentColor: "#a855f7",
    features: [
      "Complete web dashboard",
      "Orders management",
      "Reports & analytics",
      "Product & banner management",
      "Staff management",
      "Customer management",
    ],
  },
  {
    icon: TabletSmartphone,
    title: "Android Admin App",
    gradient: "from-[#0891b2] to-[#06b6d4]",
    borderGlow: "rgba(8,145,178,0.35)",
    accentColor: "#06b6d4",
    features: [
      "Manage your business from mobile",
      "Order updates & delivery management",
      "Live push notifications",
      "Business reports on the go",
    ],
  },
  {
    icon: Receipt,
    title: "POS Billing System",
    gradient: "from-[#f97316] to-[#fb923c]",
    borderGlow: "rgba(249,115,22,0.35)",
    accentColor: "#f97316",
    features: [
      "Fast & intuitive billing interface",
      "Inventory management",
      "Sales reports & daily analytics",
      "Customer billing & tracking",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function WhatIsIncluded() {
  return (
    <section
      id="whats-included"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #060d1a 0%, #0a1628 40%, #0f1f3d 70%, #0a1628 100%)",
      }}
    >
      {/* Background ambient blobs */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,58,107,0.18) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/25 px-4 py-1.5 rounded-full mb-5">
            Standard Plan Includes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
            Everything You Need To{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Launch Your Business
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Complete business solution included in every Standard Plan. Five powerful products, one affordable price.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={cardVariant}
                className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
                whileHover={{
                  borderColor: `${product.borderGlow}`,
                  boxShadow: `0 24px 48px ${product.borderGlow}`,
                }}
              >
                {/* Card gradient header */}
                <div
                  className={`relative bg-gradient-to-br ${product.gradient} p-5 overflow-hidden`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18) 0%, transparent 55%)",
                    }}
                  />
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{product.title}</h3>
                  </div>
                </div>

                {/* Features list */}
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: product.accentColor }}
                        />
                        <span className="text-sm text-slate-300 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent strip on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${product.gradient}`}
                />
              </motion.div>
            );
          })}

          {/* "5 Products" summary card */}
          <motion.div
            variants={cardVariant}
            className="sm:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.10) 0%, rgba(26,58,107,0.14) 100%)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(249,115,22,0.25)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, #f97316, #fb923c)",
                boxShadow: "0 12px 40px rgba(249,115,22,0.40)",
              }}
            >
              <span className="text-3xl font-black text-white">5</span>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">5 Powerful Products</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              All included in one affordable Standard Plan. Launch your complete business ecosystem today — no extra cost.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
              }}
            >
              Launch My App
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
