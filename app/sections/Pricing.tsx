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
} from "lucide-react";
import { PRICING, PLAN_FEATURES } from "@/app/lib/constants";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CUSTOM_FEATURES = [
  { icon: Sparkles, text: "Fully custom app development" },
  { icon: GitBranch, text: "Multi-branch & multi-location support" },
  { icon: Layers, text: "Advanced workflows & automation" },
  { icon: Building2, text: "Enterprise integrations & API access" },
  { icon: Shield, text: "Custom branding & white-labelling" },
  { icon: Star, text: "Dedicated account manager" },
  { icon: Zap, text: "Scalable cloud infrastructure" },
  { icon: MessageSquare, text: "Advanced reports & analytics" },
];

// ─── Ecosystem strip ──────────────────────────────────────────────────────────

function EcosystemStrip() {
  const products = [
    "Customer App",
    "Ecommerce Website",
    "Admin Panel",
    "Delivery Partner App",
    "POS Billing",
    "Mobile Admin",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
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
        All Included
      </span>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  const monthlyCost = PRICING.monthly * 12;   // 59,988

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
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            No hidden fees. Everything you need to launch your business — apps, website,
            admin panel, delivery management, and POS — in one plan.
          </p>
        </motion.div>

        {/* ── Ecosystem product strip ── */}
        <EcosystemStrip />

        {/* ── 3-column pricing grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">

          {/* ━━━ Card 1: Monthly ━━━ */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden border flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
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
                  Monthly
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(249,115,22,0.15)",
                    border: "1px solid rgba(249,115,22,0.30)",
                    color: "#f97316",
                  }}
                >
                  Launch Offer
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1 mb-1.5">
                  <span className="text-5xl font-black text-white leading-none">
                    ₹{PRICING.monthly.toLocaleString("en-IN")}
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
                    <span className="text-slate-500">one-time setup fee</span>
                  </span>
                </div>
                <p className="text-slate-600 text-xs mt-1.5">
                  Cancel anytime. No lock-in.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

              {/* Feature list */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {PLAN_FEATURES.map((f) => (
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

          {/* ━━━ Card 2: Annual — FEATURED ━━━ */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0 }}
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
                  Annual Plan
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  🎁 2 Months FREE
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-black text-white leading-none">
                    ₹{PRICING.yearly.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-blue-300 text-xs mt-1">/year — billed once annually</p>
                <p className="text-slate-500 text-xs line-through mt-0.5">
                  ₹{monthlyCost.toLocaleString("en-IN")} if billed monthly
                </p>
              </div>

              {/* 2 months free callout */}
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 mb-5"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                <span className="text-green-400 text-sm">✦</span>
                <div>
                  <p className="text-green-400 text-xs font-bold">
                    Save ₹{PRICING.yearlySavings.toLocaleString("en-IN")} — equivalent to 2 months free
                  </p>
                  <p className="text-green-600 text-xs font-semibold mt-0.5">
                    No implementation charges included
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.08)" }} />

              {/* Feature list */}
              <ul className="space-y-2.5 flex-1 mb-5">
                {PLAN_FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Ecosystem line */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.18)",
                }}
              >
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  <span className="text-[#f97316] font-semibold">Complete ecosystem:</span>{" "}
                  Customer App · Website · Admin Panel · Delivery App · POS · Mobile Admin
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
                Launch My App
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                No setup charges. No hidden fees. Cancel anytime.
              </p>
            </div>
          </motion.div>

          {/* ━━━ Card 3: Custom Apps ━━━ */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden border flex flex-col hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
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
                  Custom Apps
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
                  For unique business requirements
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
                  Tailored platform for{" "}
                  <span className="text-white font-semibold">
                    multi-branch businesses, enterprises,
                  </span>{" "}
                  and complex delivery operations.
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
                Get Custom Quote
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                Response within 24 hours.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Trust row ── */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
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
