"use client";

import { motion } from "framer-motion";
import {
  Receipt,
  Package,
  BarChart3,
  Users,
  Smartphone,
  UserCircle,
  LucideIcon,
} from "lucide-react";
import { FEATURES_DATA } from "@/app/lib/constants";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

const ICON_MAP: Record<string, LucideIcon> = {
  Receipt,
  Package,
  BarChart3,
  Users,
  Smartphone,
  UserCircle,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { y: 24 },
  show: { y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, #f8fafc 0%, #eef2ff 40%, #f8fafc 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Features"
          title="Everything you need to manage your business"
          description="One platform to handle billing, inventory, staff, and customers — no technical knowledge required."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURES_DATA.map((f) => {
            const Icon = ICON_MAP[f.iconKey];
            return (
              <motion.div
                key={f.title}
                variants={cardVariant}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle corner gradient on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${f.color}18 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />

                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: f.bg }}
                >
                  {Icon && (
                    <Icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                      style={{ color: f.color }}
                    />
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0f1f3d] mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom targeting statement */}
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-[#0f1f3d] mb-3">
            Designed for Small &amp; Growing Businesses
          </p>
          <p className="text-slate-500 max-w-xl mx-auto">
            From retail stores to service centers, Quantix helps you streamline
            operations and focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
