"use client";

import { motion } from "framer-motion";
import { ClipboardList, Settings2, TrendingUp, LucideIcon } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/app/lib/constants";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

const ICON_MAP: Record<string, LucideIcon> = {
  ClipboardList,
  Settings2,
  TrendingUp,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="How It Works"
          title="Up and running in 3 simple steps"
          description="No technical knowledge needed. We handle the setup so you can focus on your business."
        />

        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-[calc(66%-60px)] h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, #e2e8f0 0, #e2e8f0 8px, transparent 8px, transparent 16px)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((s, i) => {
              const Icon = ICON_MAP[s.iconKey];
              return (
                <motion.div
                  key={s.step}
                  initial={{ y: 24 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" as const }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-[#eef2ff] flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#1a3a6b] flex items-center justify-center shadow-lg shadow-[#1a3a6b]/20">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#f97316] text-white text-xs font-bold flex items-center justify-center shadow">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1a3a6b] mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    {s.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
