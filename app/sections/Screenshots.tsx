"use client";

import { motion } from "framer-motion";
import { BarChart2, ShoppingCart, Package2, Users2, LucideIcon } from "lucide-react";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

interface ScreenCard {
  iconKey: string;
  title: string;
  desc: string;
  color: string;
  accent: string;
  bars: number[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  BarChart2,
  ShoppingCart,
  Package2,
  Users2,
};

const screens: ScreenCard[] = [
  {
    iconKey: "BarChart2",
    title: "Sales Dashboard",
    desc: "Real-time revenue, orders, and performance at a glance.",
    color: "#1a3a6b",
    accent: "#eef2ff",
    bars: [55, 70, 45, 85, 60, 95, 75],
  },
  {
    iconKey: "ShoppingCart",
    title: "Billing & POS",
    desc: "Fast invoicing with GST, discounts, and payment tracking.",
    color: "#f97316",
    accent: "#fff7ed",
    bars: [65, 50, 80, 55, 70, 88, 60],
  },
  {
    iconKey: "Package2",
    title: "Inventory",
    desc: "Live stock levels with low-stock alerts and purchase orders.",
    color: "#059669",
    accent: "#ecfdf5",
    bars: [40, 60, 75, 50, 65, 80, 70],
  },
  {
    iconKey: "Users2",
    title: "Staff & CRM",
    desc: "Manage employees and customer records in one place.",
    color: "#7c3aed",
    accent: "#f5f3ff",
    bars: [70, 55, 80, 65, 75, 60, 85],
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Platform"
          title="A complete platform for your business"
          description="Clean, intuitive interfaces designed for business owners — not software engineers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {screens.map((s, i) => {
            const Icon = ICON_MAP[s.iconKey];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="group rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="p-5 pb-4" style={{ background: s.accent }}>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-300" />
                    <span className="w-2 h-2 rounded-full bg-yellow-300" />
                    <span className="w-2 h-2 rounded-full bg-green-300" />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: s.color }}
                    >
                      {Icon && <Icon className="w-4 h-4 text-white" />}
                    </div>
                    <p className="text-xs font-semibold" style={{ color: s.color }}>
                      {s.title}
                    </p>
                  </div>

                  <div className="flex items-end gap-1 h-10">
                    {s.bars.map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: j === 5 ? s.color : `${s.color}30`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="px-5 py-4">
                  <h3 className="text-sm font-semibold text-[#1a3a6b] mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
