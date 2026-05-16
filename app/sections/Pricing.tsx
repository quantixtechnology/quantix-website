"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Tag, Zap, Shield, Star } from "lucide-react";
import { PRICING, PLAN_FEATURES } from "@/app/lib/constants";

export default function Pricing() {
  const monthlyCost = PRICING.monthly * 12;
  const yearlySavings = monthlyCost - PRICING.yearly;

  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #060d1a 0%, #0a1628 45%, #0f1f3d 75%, #0a1628 100%)",
      }}
    >
      {/* Ambient centre glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,58,107,0.22) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
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
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            No hidden fees. One plan with everything included to launch your complete business app suite.
          </p>
        </motion.div>

        {/* 3-column pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">

          {/* ── Monthly Plan ── */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border p-7 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Monthly
              </span>
              <span className="bg-[#f97316]/18 text-[#f97316] text-xs font-bold px-3 py-1 rounded-full">
                Launch Offer
              </span>
            </div>
            <div className="mb-5">
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black text-white">
                  ₹{PRICING.monthly.toLocaleString("en-IN")}
                </span>
                <span className="text-slate-400 text-sm mb-1.5">/month</span>
              </div>
              <p className="text-slate-500 text-xs">Billed monthly. Cancel anytime.</p>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {["Customer Android App", "Ecommerce Website", "Admin Panel", "POS Billing System"].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="text-xs text-slate-400">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold py-3 rounded-xl transition-all text-sm"
            >
              Get Started
            </a>
          </motion.div>

          {/* ── Annual Plan — FEATURED ── */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0 }}
            className="relative rounded-3xl overflow-hidden flex flex-col md:-mt-4 md:mb-4"
            style={{
              boxShadow: "0 0 0 1.5px rgba(249,115,22,0.50), 0 32px 64px rgba(249,115,22,0.22)",
            }}
          >
            {/* Most Popular strip */}
            <div className="bg-[#f97316] text-white text-xs font-bold text-center py-1.5 tracking-wide">
              Most Popular
            </div>

            <div
              className="p-7 flex flex-col flex-1"
              style={{
                background: "linear-gradient(145deg, #1a3a6b 0%, #0f1f3d 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  Annual — Best Value
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  Save ₹{yearlySavings.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mb-5">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-5xl font-black text-white">
                    ₹{PRICING.yearly.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-blue-300 text-xs">/year &mdash; paid annually</p>
                <p className="text-slate-500 text-xs line-through mt-0.5">
                  ₹{monthlyCost.toLocaleString("en-IN")} if billed monthly
                </p>
              </div>

              {/* Full feature list */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {PLAN_FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 w-full text-white font-bold py-3.5 rounded-xl transition-all text-base"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                  boxShadow: "0 8px 28px rgba(249,115,22,0.40)",
                }}
              >
                Launch My App
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                No contract. Cancel anytime.
              </p>
            </div>
          </motion.div>

          {/* ── One-Time Setup ── */}
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border p-7 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                One-Time Setup
              </span>
              <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                Small Business
              </span>
            </div>
            <div className="mb-5">
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black text-white">
                  ₹{PRICING.setup.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-slate-500 text-xs">One-time fee. Pay once, yours forever.</p>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {[
                "Complete platform setup",
                "Custom branding & logo",
                "Delivered in 24 hours",
                "Staff training included",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <span className="text-xs text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold py-3 rounded-xl transition-all text-sm"
            >
              Book a Demo
            </a>
          </motion.div>
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12"
        >
          {[
            { Icon: Shield, text: "No hidden fees, ever" },
            { Icon: Zap, text: "Setup in 24 hours" },
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
