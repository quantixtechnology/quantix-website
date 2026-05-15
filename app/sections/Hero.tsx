"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BarChart2, CheckCircle2, BadgeCheck } from "lucide-react";
import { PRICING } from "@/app/lib/constants";
import { ButtonLink } from "@/app/components/ui/Button";

// ─── Dashboard Laptop Mockup ────────────────────────────────────────────────

const dashStats = [
  { label: "Total Sales", value: "₹2,45,800", change: "+16.5%", up: true, color: "#1a3a6b" },
  { label: "Orders", value: "142", change: "+12.3%", up: true, color: "#f97316" },
  { label: "Profit", value: "₹45,785", change: "+15.7%", up: true, color: "#059669" },
  { label: "Due Amount", value: "₹32,000", change: "-8.2%", up: false, color: "#dc2626" },
];
const sidebarItems = ["Dashboard","Sales","Purchases","Inventory","Customers","Reports","Staff","Settings"];
const chartBars = [35, 55, 45, 70, 50, 65, 80, 60, 75, 45];
const topProducts = [
  { name: "Wireless Headphones", amt: "₹24,500" },
  { name: "Smart Watch", amt: "₹21,500" },
  { name: "Bluetooth Speaker", amt: "₹18,500" },
  { name: "Power Bank", amt: "₹12,500" },
  { name: "Backpack", amt: "₹9,500" },
];
const invoices = [
  { id: "INV-2458", cust: "Raj Kumar", amt: "₹12,850", status: "Paid", date: "May 21, 2026" },
  { id: "INV-2457", cust: "Sneha Patel", amt: "₹8,800", status: "Paid", date: "May 21, 2026" },
  { id: "INV-2456", cust: "Amit Singh", amt: "₹15,250", status: "Pending", date: "May 20, 2026" },
  { id: "INV-2455", cust: "Pooja Sharma", amt: "₹6,450", status: "Pending", date: "May 20, 2026" },
];

function LaptopMockup() {
  return (
    <div className="select-none">
      {/* Screen */}
      <div
        className="rounded-t-[10px] overflow-hidden border border-slate-200 shadow-2xl shadow-[#1a3a6b]/15"
        style={{ background: "#f8fafc" }}
      >
        {/* Browser chrome */}
        <div className="bg-[#1e293b] flex items-center px-3 gap-2" style={{ height: 26 }}>
          <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
          <div className="ml-2 flex-1 bg-[#334155] rounded h-3.5 flex items-center px-2">
            <span style={{ fontSize: 7 }} className="text-slate-400">
              app.quantixtechnology.in
            </span>
          </div>
        </div>

        {/* App shell */}
        <div className="flex" style={{ height: 330 }}>
          {/* Sidebar */}
          <div className="bg-[#1a3a6b] flex flex-col shrink-0" style={{ width: 88, padding: 8 }}>
            <div className="flex items-center gap-1 mb-3" style={{ paddingLeft: 4 }}>
              <div
                className="rounded flex items-center justify-center bg-[#f97316] shrink-0"
                style={{ width: 14, height: 14 }}
              >
                <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>Q</span>
              </div>
              <span style={{ fontSize: 7, color: "white", fontWeight: 700 }}>QUANTIX</span>
            </div>
            {sidebarItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center rounded-md mb-[2px] ${i === 0 ? "bg-white/15" : ""}`}
                style={{ gap: 5, padding: "3px 6px" }}
              >
                <div
                  className="rounded-sm shrink-0"
                  style={{
                    width: 7,
                    height: 7,
                    background: i === 0 ? "#f97316" : "rgba(255,255,255,0.25)",
                  }}
                />
                <span
                  style={{ fontSize: 6.5, color: i === 0 ? "white" : "rgba(147,197,253,0.8)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden" style={{ padding: 10 }}>
            {/* Topbar */}
            <div className="flex justify-between items-center" style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: "#1a3a6b" }}>Dashboard</span>
              <div className="flex items-center" style={{ gap: 6 }}>
                <div
                  className="bg-white border border-slate-200 rounded flex items-center"
                  style={{ height: 16, width: 64, paddingLeft: 5 }}
                >
                  <span style={{ fontSize: 6, color: "#94a3b8" }}>May 2026 ▾</span>
                </div>
                <div
                  className="rounded-full bg-[#1a3a6b] flex items-center justify-center"
                  style={{ width: 16, height: 16 }}
                >
                  <span style={{ fontSize: 7, color: "white" }}>A</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4" style={{ gap: 6, marginBottom: 8 }}>
              {dashStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-lg border border-slate-100 shadow-sm"
                  style={{ padding: "6px 8px" }}
                >
                  <p style={{ fontSize: 5.5, color: "#94a3b8", marginBottom: 2 }}>{s.label}</p>
                  <p style={{ fontSize: 9, fontWeight: 700, color: s.color }}>{s.value}</p>
                  <p style={{ fontSize: 5, color: s.up ? "#16a34a" : "#dc2626", marginTop: 1 }}>
                    {s.change} {s.up ? "↑" : "↓"}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart + top products */}
            <div className="grid grid-cols-5" style={{ gap: 6, marginBottom: 8 }}>
              <div
                className="col-span-3 bg-white rounded-lg border border-slate-100 shadow-sm"
                style={{ padding: "6px 8px" }}
              >
                <p style={{ fontSize: 7, fontWeight: 600, color: "#475569", marginBottom: 6 }}>
                  Sales Overview
                </p>
                <div className="flex items-end" style={{ height: 36, gap: 2 }}>
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 9 ? "#f97316" : "rgba(26,58,107,0.18)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div
                className="col-span-2 bg-white rounded-lg border border-slate-100 shadow-sm"
                style={{ padding: "6px 8px" }}
              >
                <div className="flex justify-between items-center" style={{ marginBottom: 5 }}>
                  <p style={{ fontSize: 7, fontWeight: 600, color: "#475569" }}>Top Products</p>
                  <span style={{ fontSize: 5.5, color: "#f97316" }}>View All</span>
                </div>
                {topProducts.map((p) => (
                  <div
                    key={p.name}
                    className="flex justify-between border-b border-slate-50 last:border-0"
                    style={{ paddingTop: 2, paddingBottom: 2 }}
                  >
                    <span style={{ fontSize: 5.5, color: "#64748b" }} className="truncate pr-1">
                      {p.name}
                    </span>
                    <span style={{ fontSize: 5.5, fontWeight: 600, color: "#1a3a6b" }}>
                      {p.amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoices */}
            <div
              className="bg-white rounded-lg border border-slate-100 shadow-sm"
              style={{ padding: "6px 8px" }}
            >
              <div className="flex justify-between items-center" style={{ marginBottom: 5 }}>
                <p style={{ fontSize: 7, fontWeight: 600, color: "#475569" }}>Recent Invoices</p>
                <span style={{ fontSize: 5.5, color: "#f97316" }}>View All</span>
              </div>
              <div className="grid grid-cols-5" style={{ marginBottom: 3 }}>
                {["Invoice #", "Customer", "Amount", "Status", "Date"].map((h) => (
                  <span key={h} style={{ fontSize: 5.5, color: "#94a3b8" }}>
                    {h}
                  </span>
                ))}
              </div>
              {invoices.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-5 border-t border-slate-50"
                  style={{ paddingTop: 2, paddingBottom: 2 }}
                >
                  <span style={{ fontSize: 5.5, color: "#1a3a6b", fontWeight: 600 }}>{r.id}</span>
                  <span style={{ fontSize: 5.5, color: "#475569" }}>{r.cust}</span>
                  <span style={{ fontSize: 5.5, color: "#475569" }}>{r.amt}</span>
                  <span
                    style={{
                      fontSize: 5.5,
                      color: r.status === "Paid" ? "#16a34a" : "#f97316",
                      fontWeight: 500,
                    }}
                  >
                    {r.status}
                  </span>
                  <span style={{ fontSize: 5.5, color: "#94a3b8" }}>{r.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div
        className="mx-8 rounded-b-sm"
        style={{ height: 10, background: "linear-gradient(to bottom, #cbd5e1, #b8c0cc)" }}
      />
      <div
        className="mx-2 rounded-b-xl"
        style={{ height: 5, background: "#a0aab4", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      />
    </div>
  );
}

// ─── Phone / POS Mockup ──────────────────────────────────────────────────────

const posProducts = [
  { name: "T-Shirt", price: "₹599", bg: "#fee2e2" },
  { name: "Jeans", price: "₹1,299", bg: "#dbeafe" },
  { name: "Shoes", price: "₹2,499", bg: "#d1fae5" },
  { name: "Watch", price: "₹8,000", bg: "#fef3c7" },
  { name: "Bag", price: "₹4,950", bg: "#ede9fe" },
  { name: "Glasses", price: "₹695", bg: "#fce7f3" },
];

function PhoneMockup() {
  return (
    <div
      className="rounded-[28px] select-none shadow-2xl shadow-[#1a3a6b]/25"
      style={{ background: "#1a1f36", padding: 5 }}
    >
      <div className="bg-white rounded-[24px] overflow-hidden">
        {/* Status bar */}
        <div
          className="bg-[#1a3a6b] flex items-center justify-between"
          style={{ padding: "6px 10px" }}
        >
          <span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>POS</span>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.7)" }}>≡</span>
        </div>

        {/* Search */}
        <div style={{ padding: "6px 8px 4px", background: "#f8fafc" }}>
          <div
            className="bg-white rounded-lg border border-slate-200 flex items-center"
            style={{ height: 22, paddingLeft: 7, gap: 4 }}
          >
            <div
              className="rounded-full border border-slate-300"
              style={{ width: 7, height: 7 }}
            />
            <span style={{ fontSize: 6.5, color: "#94a3b8" }}>Search product or scan barcode</span>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-3" style={{ gap: 6, padding: "6px 8px" }}>
          {posProducts.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <div
                className="flex items-center justify-center"
                style={{ height: 28, background: p.bg }}
              >
                <div
                  className="rounded bg-white/60"
                  style={{ width: 14, height: 18 }}
                />
              </div>
              <div style={{ padding: "3px 5px" }}>
                <p style={{ fontSize: 5.5, fontWeight: 500, color: "#374151" }}>{p.name}</p>
                <p style={{ fontSize: 6.5, fontWeight: 700, color: "#f97316" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ padding: "6px 8px", borderTop: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: 6, color: "#94a3b8", marginBottom: 4 }}>Today's Summary</p>
          <div className="flex justify-between" style={{ marginBottom: 6 }}>
            <div>
              <p style={{ fontSize: 6, color: "#94a3b8" }}>Total Sales</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#1a3a6b" }}>₹18,750</p>
            </div>
            <div className="text-right">
              <p style={{ fontSize: 6, color: "#94a3b8" }}>Orders</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#f97316" }}>32</p>
            </div>
          </div>
          <div className="grid grid-cols-2" style={{ gap: 5, marginBottom: 6 }}>
            <div
              className="text-center rounded-lg border border-slate-100"
              style={{ padding: "4px 2px", background: "#f8fafc" }}
            >
              <p style={{ fontSize: 5.5, color: "#94a3b8" }}>New Customers</p>
              <p style={{ fontSize: 9, fontWeight: 700, color: "#1a3a6b" }}>9</p>
            </div>
            <div
              className="text-center rounded-lg border border-orange-50"
              style={{ padding: "4px 2px", background: "#fff7ed" }}
            >
              <p style={{ fontSize: 5.5, color: "#94a3b8" }}>Low Stock</p>
              <p style={{ fontSize: 9, fontWeight: 700, color: "#f97316" }}>12</p>
            </div>
          </div>
          <div
            className="text-center rounded-xl"
            style={{
              padding: "7px 0",
              background: "#f97316",
              boxShadow: "0 4px 12px rgba(249,115,22,0.35)",
            }}
          >
            <span style={{ fontSize: 8.5, color: "white", fontWeight: 700 }}>Checkout →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const trustItems = [
  {
    Icon: CheckCircle2,
    title: "Easy to Use",
    desc: "Simple & intuitive for everyone",
    color: "#1a3a6b",
  },
  {
    Icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Your data is always safe with us",
    color: "#059669",
  },
  {
    Icon: BarChart2,
    title: "Grow Your Business",
    desc: "Real-time insights to increase profit",
    color: "#f97316",
  },
];

export default function Hero() {
  const savings = PRICING.monthly * 12 - PRICING.yearly;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(26,58,107,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-[0.035]"
        style={{
          background: "radial-gradient(circle, #1a3a6b 0%, transparent 65%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center min-h-[calc(100vh-64px)] py-20 pt-24 lg:pt-28 lg:pb-20">

          {/* ── LEFT: Text content ───────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start bg-[#eef2ff] border border-[#c7d7f7] text-[#1a3a6b] text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <BadgeCheck className="w-3.5 h-3.5 text-[#f97316]" />
              All-in-One Business Management Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0f1f3d] mb-5"
            >
              Run Your{" "}
              <span className="block">Business.</span>
              <span className="block">
                <span className="text-[#f97316]">Smarter.</span>{" "}
                <span className="text-[#1a3a6b]">Faster.</span>
              </span>
              <span className="block text-[#1a3a6b]">Better.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg"
            >
              Billing, Inventory, Sales &amp; Reports — everything you need to
              manage and grow your business in one powerful platform.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-slate-100"
            >
              {trustItems.map(({ Icon, title, desc, color }) => (
                <div key={title} className="flex flex-col gap-1">
                  <Icon className="w-5 h-5 mb-0.5" style={{ color }} />
                  <p className="text-sm font-bold text-[#0f1f3d] leading-tight">{title}</p>
                  <p className="text-xs text-slate-400 leading-snug">{desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <ButtonLink href="#lead-form" variant="secondary" size="lg">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </ButtonLink>
              <ButtonLink href="#features" variant="ghost" size="lg">
                Explore Features
              </ButtonLink>
            </motion.div>

            {/* Pricing card */}
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-3 divide-x divide-slate-100">
                <div className="px-4 py-3">
                  <p className="text-[11px] text-slate-400 mb-0.5">Monthly</p>
                  <p className="text-xl font-black text-[#1a3a6b]">
                    ₹{PRICING.monthly.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[11px] text-slate-400">/ month</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[11px] text-slate-400 mb-0.5">One-Time Setup</p>
                  <p className="text-xl font-black text-[#1a3a6b]">
                    ₹{PRICING.setup.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[11px] text-slate-400">setup fee</p>
                </div>
                <div className="px-4 py-3 relative">
                  <p className="text-[11px] text-slate-400 mb-0.5">Annual Plan</p>
                  <p className="text-xl font-black text-[#1a3a6b]">
                    ₹{PRICING.yearly.toLocaleString("en-IN")}
                  </p>
                  <span className="inline-block text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 rounded-full px-2 py-0.5 mt-0.5">
                    Save ₹{savings.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Device mockups ─────────────────────────────────── */}
          <div className="hidden lg:block relative" style={{ height: 540 }}>
            {/* Glow behind devices */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(26,58,107,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Laptop — main, left-anchored */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" as const }}
              style={{ position: "absolute", left: 0, top: 40, width: "72%", zIndex: 10 }}
            >
              <LaptopMockup />
            </motion.div>

            {/* Phone — right edge, floating */}
            <motion.div
              initial={{ y: 40, x: 20 }}
              animate={{ y: 0, x: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" as const }}
              style={{ position: "absolute", right: 0, top: 0, width: "32%", zIndex: 20 }}
            >
              <PhoneMockup />
            </motion.div>

            {/* Floating badge — bottom left of laptop */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              style={{ position: "absolute", left: 8, bottom: 30, zIndex: 30 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 px-4 py-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a3a6b]">Setup in 24 hrs</p>
                <p className="text-[10px] text-slate-400">No tech knowledge needed</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
