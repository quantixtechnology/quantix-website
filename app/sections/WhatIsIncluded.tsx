"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  LayoutDashboard,
  TabletSmartphone,
  Receipt,
  Bike,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MapPin,
  Bell,
  Package,
  Star,
} from "lucide-react";

// ─── Product card data (first 5) ─────────────────────────────────────────────

const products = [
  {
    icon: Smartphone,
    title: "Customer Android App",
    gradient: "from-[#1a3a6b] to-[#2563eb]",
    borderGlow: "rgba(37,99,235,0.35)",
    accentColor: "#2563eb",
    features: [
      "Branded Android app for customers",
      "Browse products & place orders",
      "Real-time order tracking",
      "Push notifications & wallet support",
      "Login, registration & cart flow",
      "Launching soon — use Website & PWA in the meantime",
    ],
  },
  {
    icon: Globe,
    title: "Customer Website & PWA",
    gradient: "from-[#059669] to-[#10b981]",
    borderGlow: "rgba(5,150,105,0.35)",
    accentColor: "#10b981",
    features: [
      "SEO-friendly website for customers",
      "Progressive Web App for app-like experience",
      "Online ordering system",
      "Fully responsive mobile layout",
      "Works on all devices without download",
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
      "Orders, products & inventory management",
      "Reports & analytics",
      "Staff & customer management",
      "Banner & promotions management",
    ],
  },
  {
    icon: TabletSmartphone,
    title: "Delivery Android App",
    gradient: "from-[#0891b2] to-[#06b6d4]",
    borderGlow: "rgba(8,145,178,0.35)",
    accentColor: "#06b6d4",
    features: [
      "App for your in-house delivery staff",
      "Real-time order assignments",
      "Route & address visibility",
      "Delivery status updates",
      "Launching soon — delivery management available via Admin Panel",
    ],
  },
  {
    icon: Receipt,
    title: "POS System",
    gradient: "from-[#f97316] to-[#fb923c]",
    borderGlow: "rgba(249,115,22,0.35)",
    accentColor: "#f97316",
    features: [
      "Fast & intuitive billing interface",
      "Inventory & product management",
      "Sales reports & daily analytics",
      "GST-ready invoices",
      "Customer billing & tracking",
    ],
  },
];

// ─── Delivery Partner App — phone screen ─────────────────────────────────────

function DeliveryAppScreen() {
  const pending = [
    { id: "#2851", customer: "Priya Mehta", address: "Juhu, Mumbai", dist: "2.1 km", earn: "₹45" },
    { id: "#2852", customer: "Karan Shah", address: "Malad West", dist: "4.5 km", earn: "₹70" },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        fontFamily: "system-ui,sans-serif",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          padding: "14px 14px 10px",
          background: "linear-gradient(135deg,#ea580c 0%,#dc2626 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div>
            <p style={{ fontSize: 7, color: "rgba(255,255,255,.8)", margin: 0 }}>Delivery Partner App</p>
            <p style={{ fontSize: 11, fontWeight: 800, color: "white", margin: 0 }}>Hi, Dhruv 👋</p>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(255,255,255,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            🏍️
          </div>
        </div>
        {/* Status toggle */}
        <div
          style={{
            background: "rgba(255,255,255,.18)",
            borderRadius: 20,
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 7.5, color: "white", fontWeight: 600 }}>🟢 Online — Ready to Deliver</span>
          <div style={{ width: 22, height: 13, borderRadius: 7, background: "#22c55e", position: "relative" }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "white", position: "absolute", top: 2, right: 2 }} />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 0,
          borderBottom: "1px solid #e2e8f0",
          background: "white",
        }}
      >
        {[
          { label: "Delivered", value: "3", icon: "✅" },
          { label: "Earned", value: "₹315", icon: "💰" },
          { label: "Rating", value: "4.9★", icon: "⭐" },
        ].map((s, i) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              padding: "7px 4px",
              borderRight: i < 2 ? "1px solid #f1f5f9" : "none",
            }}
          >
            <p style={{ fontSize: 9, margin: 0 }}>{s.icon}</p>
            <p style={{ fontSize: 9.5, fontWeight: 800, color: "#1e293b", margin: 0 }}>{s.value}</p>
            <p style={{ fontSize: 5.5, color: "#94a3b8", margin: 0 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Active order card */}
      <div style={{ padding: "9px 10px" }}>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1e293b", marginBottom: 5 }}>Active Order</p>
        <div
          style={{
            borderRadius: 10,
            overflow: "hidden",
            border: "1.5px solid rgba(234,88,12,0.35)",
            background: "white",
            boxShadow: "0 4px 16px rgba(234,88,12,0.10)",
          }}
        >
          {/* Order header */}
          <div
            style={{
              padding: "7px 10px",
              background: "linear-gradient(135deg,rgba(234,88,12,0.10),rgba(220,38,38,0.08))",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontSize: 6.5, color: "#ea580c", fontWeight: 700, margin: 0 }}>ORDER #2847</p>
              <p style={{ fontSize: 8, fontWeight: 700, color: "#1e293b", margin: 0 }}>Rahul Sharma</p>
            </div>
            <span
              style={{
                fontSize: 6,
                fontWeight: 700,
                color: "#16a34a",
                background: "#dcfce7",
                padding: "2px 6px",
                borderRadius: 10,
              }}
            >
              🟢 IN TRANSIT
            </span>
          </div>

          {/* Map preview */}
          <div
            style={{
              margin: "8px 10px",
              borderRadius: 8,
              height: 52,
              overflow: "hidden",
              position: "relative",
              background: "#e8f4fd",
            }}
          >
            {/* Road grid */}
            {[0, 1, 2, 3].map((r) => (
              <div
                key={r}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: `${r * 33}%`,
                  height: 1.5,
                  background: "rgba(255,255,255,0.9)",
                }}
              />
            ))}
            {[0, 1, 2, 3, 4].map((c) => (
              <div
                key={c}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: `${c * 25}%`,
                  width: 1.5,
                  background: "rgba(255,255,255,0.9)",
                }}
              />
            ))}
            {/* Route line */}
            <svg
              style={{ position: "absolute", inset: 0 }}
              width="100%"
              height="100%"
              viewBox="0 0 200 52"
              preserveAspectRatio="none"
            >
              <polyline
                points="20,40 60,40 60,15 140,15 140,35 180,35"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5 3"
              />
            </svg>
            {/* Origin dot */}
            <div style={{ position: "absolute", left: 14, top: 34, width: 10, height: 10, borderRadius: "50%", background: "#16a34a", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
            {/* Destination pin */}
            <div style={{ position: "absolute", right: 12, top: 27, fontSize: 14 }}>📍</div>
          </div>

          {/* Address */}
          <div style={{ padding: "0 10px 6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              <span style={{ fontSize: 6.5, color: "#64748b" }}>Your location</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ea580c", flexShrink: 0 }} />
              <span style={{ fontSize: 6.5, color: "#1e293b", fontWeight: 600 }}>Bandra West, Mumbai — 3.2 km</span>
            </div>
            <div
              style={{
                borderRadius: 8,
                padding: "7px 0",
                background: "linear-gradient(135deg,#ea580c,#dc2626)",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 8, fontWeight: 700, color: "white" }}>✅ Mark as Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending orders */}
      <div style={{ padding: "0 10px" }}>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1e293b", marginBottom: 5 }}>Next Deliveries</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {pending.map((o) => (
            <div
              key={o.id}
              style={{
                borderRadius: 9,
                padding: "7px 9px",
                background: "white",
                border: "1px solid #f1f5f9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,.04)",
              }}
            >
              <div>
                <p style={{ fontSize: 6.5, fontWeight: 700, color: "#1e293b", margin: 0 }}>{o.customer}</p>
                <p style={{ fontSize: 6, color: "#94a3b8", margin: 0 }}>{o.address} · {o.dist}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 8, fontWeight: 800, color: "#ea580c", margin: 0 }}>{o.earn}</p>
                <span style={{ fontSize: 5.5, color: "#64748b", background: "#f8fafc", padding: "1px 4px", borderRadius: 4 }}>Pending</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #f1f5f9",
          display: "flex",
          justifyContent: "space-around",
          padding: "6px 0",
          background: "white",
        }}
      >
        {["🏠", "📦", "🗺️", "👤"].map((ic, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: 11 }}>{ic}</span>
            {i === 0 && <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#ea580c" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

// ─── Section ──────────────────────────────────────────────────────────────────

export default function WhatIsIncluded() {
  return (
    <section
      id="whats-included"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #060d1a 0%, #0a1628 40%, #0f1f3d 70%, #0a1628 100%)",
        isolation: "isolate",
      }}
    >
      {/* Ambient blobs */}
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
          background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/25 px-4 py-1.5 rounded-full mb-5">
            Business Plan Includes
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
            Complete business solution included in the Business Plan.{" "}
            <span className="text-white font-semibold">Six powerful products</span>, one affordable price.
          </p>
        </motion.div>

        {/* ── Product Cards Grid (first 5) ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
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
                  borderColor: "rgba(255,255,255,0.08)",
                }}
                whileHover={{
                  borderColor: product.borderGlow,
                  boxShadow: `0 24px 48px ${product.borderGlow}`,
                }}
              >
                <div className={`relative bg-gradient-to-br ${product.gradient} p-5 overflow-hidden`}>
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18) 0%, transparent 55%)",
                    }}
                  />
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center sm:backdrop-blur-sm shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{product.title}</h3>
                  </div>
                </div>
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
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${product.gradient}`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── 6th Product: Delivery Partner App — Featured Spotlight ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden border mb-5"
          style={{
            borderColor: "rgba(234,88,12,0.40)",
            background: "rgba(255,255,255,0.04)",
            boxShadow: "0 0 0 1px rgba(234,88,12,0.15), 0 32px 64px rgba(234,88,12,0.12)",
            isolation: "isolate",
          }}
        >
          {/* USP badge */}
          <div className="absolute top-4 right-4 z-10">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
              style={{
                background: "linear-gradient(135deg,#ea580c,#dc2626)",
                boxShadow: "0 4px 16px rgba(234,88,12,0.40)",
              }}
            >
              ★ Major USP
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── Left: card content ── */}
            <div className="p-7 sm:p-8 flex flex-col">
              {/* Gradient header strip */}
              <div
                className="relative rounded-2xl p-5 mb-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#ea580c 0%,#dc2626 100%)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18) 0%, transparent 55%)",
                  }}
                />
                <div className="relative flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center sm:backdrop-blur-sm shrink-0">
                    <Bike className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white leading-tight">
                      Delivery Management
                    </h3>
                    <p className="text-orange-200 text-xs font-medium">
                      Delivery Android App + full delivery ecosystem
                    </p>
                  </div>
                </div>
                {/* Play Store badge */}
                <div className="relative flex items-center gap-2 bg-black/30 sm:backdrop-blur-sm rounded-xl px-3 py-2 w-fit">
                  <PlayCircle className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <p style={{ fontSize: 8, color: "rgba(255,255,255,0.75)", margin: 0 }}>
                      Available on
                    </p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "white", margin: 0 }}>
                      Android Play Store
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Manage your own in-house delivery team without depending on third-party services like Swiggy or Zomato. The Delivery Android App for your staff is launching soon.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {[
                  { icon: Package, text: "Delivery order management" },
                  { icon: MapPin, text: "Route & address visibility" },
                  { icon: Bell, text: "Push notification alerts" },
                  { icon: CheckCircle2, text: "Order completion updates" },
                  { icon: Star, text: "Live delivery status tracking" },
                  { icon: Bike, text: "Lightweight Android app" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(234,88,12,0.18)" }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: "#ea580c" }} />
                    </div>
                    <span className="text-sm text-slate-300 leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              {/* Ecosystem line */}
              <div
                className="rounded-2xl p-4 mt-auto"
                style={{
                  background: "rgba(234,88,12,0.08)",
                  border: "1px solid rgba(234,88,12,0.22)",
                }}
              >
                <p className="text-xs font-semibold text-[#f97316] mb-1.5">
                  Business Plan ecosystem:
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Customer Android App · Website &amp; PWA · Admin Panel · Delivery Android App · POS System · Delivery Management
                </p>
              </div>
            </div>

            {/* ── Right: floating phone mockup ── */}
            <div
              className="flex items-center justify-center relative py-8 px-4 lg:py-10 lg:px-6 order-first lg:order-none overflow-hidden"
            >
              {/* Glow — desktop only; avoid extra GPU layer on mobile */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                  background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(234,88,12,0.12) 0%, transparent 70%)",
                }}
              />

              {/* ── Mobile: static phone, zero animation, zero GPU promotion ── */}
              <div className="lg:hidden" style={{ position: "relative" }}>
                <div
                  style={{
                    width: 170,
                    height: 340,
                    borderRadius: 36,
                    padding: 5,
                    background: "linear-gradient(145deg,#1e293b,#0f172a)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.45)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 48,
                      height: 8,
                      borderRadius: 4,
                      background: "#0f172a",
                      zIndex: 10,
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 32,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <DeliveryAppScreen />
                  </div>
                </div>
              </div>

              {/* ── Desktop: animated phone with floating badges ── */}
              <motion.div
                className="hidden lg:block"
                animate={{ y: [0, -14, 0], x: [0, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    width: 190,
                    height: 380,
                    borderRadius: 38,
                    padding: 6,
                    background: "linear-gradient(145deg,#1e293b,#0f172a)",
                    boxShadow: "0 36px 72px rgba(0,0,0,0.60), 0 0 52px rgba(234,88,12,0.28), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 11,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 52,
                      height: 8,
                      borderRadius: 4,
                      background: "#0f172a",
                      zIndex: 10,
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 33,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <DeliveryAppScreen />
                  </div>
                </div>

                {/* Floating notification badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-14 top-20 flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-xl"
                  style={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(234,88,12,0.40)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(234,88,12,0.20)" }}
                  >
                    <Package className="w-3.5 h-3.5" style={{ color: "#ea580c" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 9, fontWeight: 700, color: "white", margin: 0 }}>New Order!</p>
                    <p style={{ fontSize: 8, color: "#94a3b8", margin: 0 }}>#2853 · Dadar West</p>
                  </div>
                </motion.div>

                {/* Delivered badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -right-12 bottom-24 flex items-center gap-2 rounded-2xl px-3 py-2.5 shadow-xl"
                  style={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(34,197,94,0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(34,197,94,0.18)" }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  </div>
                  <div>
                    <p style={{ fontSize: 9, fontWeight: 700, color: "#22c55e", margin: 0 }}>Delivered!</p>
                    <p style={{ fontSize: 8, color: "#94a3b8", margin: 0 }}>₹45 earned</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── "6 Powerful Products" summary card ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.10) 0%, rgba(26,58,107,0.16) 100%)",
            border: "1px solid rgba(249,115,22,0.25)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
            {/* Pulsing number */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 12px 40px rgba(249,115,22,0.42)",
              }}
            >
              <span className="text-3xl font-black text-white">6</span>
            </motion.div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                6 Powerful Products
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-0">
                Customer App · Ecommerce Website · Admin Panel · Delivery Partner App · POS Billing · Mobile Admin
                {" "}—{" "}
                <span className="text-white font-semibold">all included in one Standard Plan.</span>
              </p>
            </div>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-7 py-3.5 rounded-xl shrink-0 transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                boxShadow: "0 8px 24px rgba(249,115,22,0.38)",
              }}
            >
              Launch My App
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
