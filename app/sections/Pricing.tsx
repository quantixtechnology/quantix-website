"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Star,
  Sparkles,
  Building2,
  GitBranch,
  Layers,
  MessageSquare,
  Store,
  AlertCircle,
  Calendar,
} from "lucide-react";
import { PRICING, STARTER_FEATURES, BUSINESS_EXTRA_FEATURES, BUSINESS_ALL_FEATURES } from "@/app/lib/constants";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CUSTOM_FEATURES = [
  { icon: Sparkles, text: "Custom Development" },
  { icon: GitBranch, text: "Multi-Store Solutions" },
  { icon: Layers, text: "Enterprise Features" },
  { icon: Building2, text: "Custom Integrations" },
  { icon: Shield, text: "White Label Options" },
  { icon: Star, text: "Dedicated Support" },
];

const ADDITIONAL_STORE_FEATURES = [
  "Additional Store Management",
  "Store-wise Orders",
  "Store-wise Inventory",
  "Store-wise Reporting",
];

// ─── Ecosystem strip ──────────────────────────────────────────────────────────

function EcosystemStrip() {
  const products = [
    "Customer Website",
    "Android App",
    "Admin Panel",
    "POS System",
    "PWA",
    "Delivery App",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
      className="flex flex-wrap items-center justify-center gap-2 mb-14"
    >
      {products.map((p, i) => (
        <span key={p} className="flex items-center gap-2">
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {p}
          </span>
          {i < products.length - 1 && (
            <span className="text-slate-600 text-xs">·</span>
          )}
        </span>
      ))}
      <span
        className="text-xs font-bold px-3 py-1.5 rounded-full ml-1"
        style={{
          background: "rgba(249,115,22,0.15)",
          border: "1px solid rgba(249,115,22,0.30)",
          color: "#f97316",
        }}
      >
        Business Plan
      </span>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #060d1a 0%, #0a1628 45%, #0f1f3d 75%, #0a1628 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,58,107,0.20) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/25 px-4 py-1.5 rounded-full mb-5">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
            A complete business ecosystem.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Startup-friendly pricing.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. One-time setup charge of ₹1,999 applies to Starter
            and Business plans. Everything you need to launch and grow.
          </p>
        </motion.div>

        {/* ── Ecosystem product strip ── */}
        <EcosystemStrip />

        {/* ── 3-column pricing grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">

          {/* ━━━ Card 1: Starter ━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden border flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
            whileHover={{
              borderColor: "rgba(255,255,255,0.22)",
              boxShadow: "0 20px 48px rgba(0,0,0,0.30)",
            }}
          >
            <div className="p-7 flex flex-col flex-1">
              {/* Label row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Starter
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(249,115,22,0.15)",
                    border: "1px solid rgba(249,115,22,0.30)",
                    color: "#f97316",
                  }}
                >
                  Best to Start
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1 mb-1.5">
                  <span className="text-5xl font-black text-white leading-none">
                    ₹{PRICING.starter.toLocaleString("en-IN")}
                  </span>
                  <span className="text-slate-400 text-sm mb-1">/month</span>
                </div>
                {/* Setup fee inline */}
                <div className="flex items-center gap-1.5 mt-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#f97316" }}
                  />
                  <span className="text-slate-400 text-xs">
                    ₹{PRICING.setup.toLocaleString("en-IN")}{" "}
                    <span className="text-slate-500">one-time setup charge</span>
                  </span>
                </div>
                <p className="text-slate-600 text-xs mt-1.5">
                  Best for businesses starting online ordering without mobile apps.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

              {/* Feature list */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {STARTER_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="text-xs text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 w-full border border-white/15 hover:border-white/35 hover:bg-white/5 text-white font-semibold py-3 rounded-xl transition-all text-sm"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* ━━━ Card 2: Business — FEATURED ━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden flex flex-col md:-mt-6 md:mb-6"
            style={{
              boxShadow:
                "0 0 0 1.5px rgba(249,115,22,0.55), 0 32px 72px rgba(249,115,22,0.28)",
            }}
          >
            {/* Most Popular banner */}
            <div
              className="flex items-center justify-center gap-2 py-2"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
              }}
            >
              <Star className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-black uppercase tracking-wider">
                Most Popular · Best Value
              </span>
              <Star className="w-3 h-3 text-white" />
            </div>

            <div
              className="p-7 flex flex-col flex-1"
              style={{
                background:
                  "linear-gradient(145deg, #1a3a6b 0%, #0f2347 50%, #0a1628 100%)",
              }}
            >
              {/* Label row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  Business
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                  Complete Ecosystem
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-end gap-1 mb-1.5">
                  <span className="text-5xl font-black text-white leading-none">
                    ₹{PRICING.business.toLocaleString("en-IN")}
                  </span>
                  <span className="text-slate-300 text-sm mb-1">/month</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#f97316" }}
                  />
                  <span className="text-slate-300 text-xs">
                    ₹{PRICING.setup.toLocaleString("en-IN")}{" "}
                    <span className="text-slate-400">one-time setup charge</span>
                  </span>
                </div>
                <p className="text-blue-300 text-xs mt-1.5">
                  Best for businesses requiring a complete ordering and delivery ecosystem.
                </p>
              </div>

              {/* Everything in Starter callout */}
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 mb-4"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                <span className="text-green-400 text-sm">✦</span>
                <p className="text-green-400 text-xs font-bold">
                  Everything in Starter Plan, plus:
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* Business extras */}
              <ul className="space-y-2.5 flex-1 mb-4">
                {BUSINESS_EXTRA_FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Android apps launching soon note */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.18)",
                }}
              >
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <span className="text-[#f97316] font-semibold">Note:</span>{" "}
                  Customer &amp; Delivery Android Apps are launching soon. Until then,
                  customers can use the Website and PWA without any limitations.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 w-full text-white font-black py-4 rounded-xl transition-all text-base hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  boxShadow: "0 8px 32px rgba(249,115,22,0.45)",
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                No hidden fees. Cancel anytime.
              </p>
            </div>
          </motion.div>

          {/* ━━━ Card 3: Custom ━━━ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="group relative rounded-3xl overflow-hidden border flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(99,102,241,0.20)",
            }}
            whileHover={{
              borderColor: "rgba(99,102,241,0.45)",
              boxShadow: "0 20px 48px rgba(99,102,241,0.15)",
            }}
          >
            <div className="p-7 flex flex-col flex-1">
              {/* Label row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Custom
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.30)",
                    color: "#818cf8",
                  }}
                >
                  Enterprise
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-white leading-none">
                    Custom
                  </span>
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  Contact us / Request a quote
                </p>
              </div>

              {/* Quote callout */}
              <div
                className="flex items-start gap-2.5 rounded-xl px-4 py-3 mb-5"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.20)",
                }}
              >
                <Building2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tailored for{" "}
                  <span className="text-white font-semibold">
                    multi-store businesses, enterprises,
                  </span>{" "}
                  and complex operations.{" "}
                  <span className="text-indigo-400 font-semibold">No setup charge.</span>
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

              {/* Feature list */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {CUSTOM_FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: "rgba(99,102,241,0.18)" }}
                    >
                      <Icon className="w-3 h-3 text-indigo-400" />
                    </div>
                    <span className="text-xs text-slate-300">{text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 w-full text-white font-bold py-3 rounded-xl transition-all text-sm hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  boxShadow: "0 8px 24px rgba(99,102,241,0.30)",
                }}
              >
                <MessageSquare className="w-4 h-4" />
                Request Quote
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                Response within 24 hours.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Additional Store add-on card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="max-w-6xl mx-auto mt-5"
        >
          <div
            className="rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 p-6 sm:p-8 hover:-translate-y-0.5 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            <div className="shrink-0">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(249,115,22,0.15)",
                  border: "1px solid rgba(249,115,22,0.30)",
                }}
              >
                <Store className="w-6 h-6 text-[#f97316]" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-white font-bold text-base">Additional Store</h3>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(249,115,22,0.15)",
                    border: "1px solid rgba(249,115,22,0.30)",
                    color: "#f97316",
                  }}
                >
                  Add-On
                </span>
              </div>
              <p className="text-[#f97316] font-black text-xl mb-2">
                ₹{PRICING.additionalStore.toLocaleString("en-IN")}
                <span className="text-slate-400 font-normal text-sm">/month per store</span>
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {ADDITIONAL_STORE_FEATURES.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-slate-500 shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#lead-form"
              className="shrink-0 flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:scale-[1.02]"
              style={{
                background: "rgba(249,115,22,0.20)",
                border: "1px solid rgba(249,115,22,0.40)",
              }}
            >
              Add a Store
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ── Setup charge note ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="max-w-6xl mx-auto mt-4"
        >
          <div
            className="flex items-center gap-2.5 rounded-2xl px-5 py-3.5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
            <p className="text-xs text-slate-500">
              <span className="text-slate-400 font-semibold">
                One-time setup charge of ₹1,999
              </span>{" "}
              applies to Starter and Business plans. No setup charge for the Custom Plan.
            </p>
          </div>
        </motion.div>

        {/* ── Trust row ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14"
        >
          {[
            { Icon: Shield, text: "No hidden fees, ever" },
            { Icon: Zap, text: "Live in 24 hours" },
            { Icon: Star, text: "Priority support included" },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
              <Icon className="w-4 h-4 text-[#f97316]" />
              {text}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
