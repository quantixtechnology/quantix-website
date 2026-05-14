"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Tag } from "lucide-react";
import { PRICING, PLAN_FEATURES } from "@/app/lib/constants";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

export default function Pricing() {
  const monthlyCost = PRICING.monthly * 12;
  const yearlySavings = monthlyCost - PRICING.yearly;

  return (
    <section id="pricing" className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Pricing"
          title="Simple, transparent pricing"
          description="No hidden fees. One plan, everything included."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">
            {/* Card header */}
            <div className="bg-[#1a3a6b] px-6 py-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Standard Plan
                  </span>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-5xl font-bold">
                      ₹{PRICING.monthly.toLocaleString("en-IN")}
                    </span>
                    <span className="text-blue-200 text-sm mb-1.5">/month</span>
                  </div>
                </div>
                <span className="bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  Most Popular
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="px-6 py-6">
              {/* Alt pricing tiles */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 bg-[#f8fafc] rounded-xl p-3 text-center border border-slate-100">
                  <p className="text-xs text-slate-400 mb-0.5">Setup Fee</p>
                  <p className="text-xl font-bold text-[#1a3a6b]">
                    ₹{PRICING.setup.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-slate-400">one-time</p>
                </div>
                <div className="flex-1 bg-[#fff7ed] rounded-xl p-3 text-center border border-orange-100">
                  <p className="text-xs text-slate-400 mb-0.5">Annual Plan</p>
                  <p className="text-xl font-bold text-[#f97316]">
                    ₹{PRICING.yearly.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-slate-400">per year</p>
                </div>
              </div>

              {/* Savings badge */}
              <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5 mb-6">
                <Tag className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-sm font-semibold text-green-700">
                  Save ₹{yearlySavings.toLocaleString("en-IN")} with the yearly plan
                </span>
              </div>

              {/* Plan features */}
              <ul className="space-y-3 mb-7">
                {PLAN_FEATURES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs text-slate-400 mt-3">
                No contract. Cancel anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
