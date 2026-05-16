"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

// ─── Food Delivery App Screen ─────────────────────────────────────────────────

function FoodApp() {
  const items = [
    { name: "Butter Chicken", price: "₹280", emoji: "🍛", color: "#ff6b35" },
    { name: "Margherita Pizza", price: "₹320", emoji: "🍕", color: "#e63946" },
    { name: "Veg Biryani", price: "₹220", emoji: "🍱", color: "#2d6a4f" },
    { name: "Chicken Burger", price: "₹180", emoji: "🍔", color: "#f4a261" },
  ];
  const cats = ["All", "Pizza", "Biryani", "Burgers"];

  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          padding: "14px 14px 10px",
          background: "linear-gradient(135deg, #ff6b35 0%, #f72585 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div>
            <p style={{ fontSize: 7, color: "rgba(255,255,255,0.8)", margin: 0 }}>Delivering to</p>
            <p style={{ fontSize: 9.5, fontWeight: 700, color: "white", margin: 0 }}>Andheri West, Mumbai</p>
          </div>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 11 }}>🔔</span>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.22)", borderRadius: 8, padding: "6px 9px", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.85)" }}>Search restaurants, dishes...</span>
        </div>
      </div>

      {/* Banner */}
      <div style={{ margin: "9px 10px", borderRadius: 10, padding: "8px 10px", background: "linear-gradient(135deg, #ff6b35 0%, #f72585 60%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 6.5, color: "rgba(255,255,255,0.85)", margin: 0 }}>Limited Offer</p>
          <p style={{ fontSize: 11, fontWeight: 800, color: "white", margin: 0 }}>50% OFF</p>
          <p style={{ fontSize: 6.5, color: "rgba(255,255,255,0.85)", margin: 0 }}>on first order</p>
        </div>
        <span style={{ fontSize: 20 }}>🍔</span>
      </div>

      {/* Categories */}
      <div style={{ padding: "0 10px", marginBottom: 7 }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Categories</p>
        <div style={{ display: "flex", gap: 5 }}>
          {cats.map((c, i) => (
            <div
              key={c}
              style={{
                padding: "3px 8px",
                borderRadius: 16,
                background: i === 0 ? "#ff6b35" : "#f8fafc",
                border: i === 0 ? "none" : "1px solid #e2e8f0",
              }}
            >
              <span style={{ fontSize: 6.5, color: i === 0 ? "white" : "#64748b", fontWeight: i === 0 ? 600 : 400 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div style={{ padding: "0 10px" }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Popular Near You</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {items.map((item) => (
            <div key={item.name} style={{ borderRadius: 9, overflow: "hidden", border: "1px solid #f1f5f9", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 32, background: `linear-gradient(135deg, ${item.color}25, ${item.color}45)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                {item.emoji}
              </div>
              <div style={{ padding: "4px 5px" }}>
                <p style={{ fontSize: 6, fontWeight: 600, color: "#1e293b", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: 7, fontWeight: 700, color: "#ff6b35", margin: 0 }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "6px 0", background: "white" }}>
        {["🏠", "🔍", "🛒", "👤"].map((icon, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 11 }}>{icon}</span>
            {i === 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#ff6b35" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Grocery App Screen ───────────────────────────────────────────────────────

function GroceryApp() {
  const cats = [
    { name: "Fruits", emoji: "🍎", color: "#ef4444" },
    { name: "Veggies", emoji: "🥦", color: "#16a34a" },
    { name: "Dairy", emoji: "🥛", color: "#3b82f6" },
    { name: "Snacks", emoji: "🍿", color: "#f97316" },
  ];
  const deals = [
    { name: "Fresh Mangoes", price: "₹80/kg", disc: "20% off", emoji: "🥭" },
    { name: "Organic Milk", price: "₹65/L", disc: "Fresh", emoji: "🥛" },
    { name: "Tomatoes", price: "₹40/kg", disc: "15% off", emoji: "🍅" },
    { name: "Almonds 500g", price: "₹320", disc: "10% off", emoji: "🥜" },
  ];

  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ padding: "14px 14px 10px", background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div>
            <p style={{ fontSize: 7, color: "rgba(255,255,255,0.8)", margin: 0 }}>Good Morning! 🌞</p>
            <p style={{ fontSize: 12, fontWeight: 800, color: "white", margin: 0 }}>FreshMart</p>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <span style={{ fontSize: 13 }}>🔔</span>
            <span style={{ fontSize: 13 }}>🛒</span>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.22)", borderRadius: 8, padding: "6px 9px", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.85)" }}>Search groceries...</span>
        </div>
      </div>

      <div style={{ margin: "9px 10px", borderRadius: 10, padding: "8px 10px", background: "linear-gradient(135deg, #d1fae5, #a7f3d0)", border: "1px solid #6ee7b7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 6.5, color: "#065f46", margin: 0 }}>Free Delivery</p>
          <p style={{ fontSize: 10, fontWeight: 800, color: "#065f46", margin: 0 }}>Orders above ₹299</p>
          <p style={{ fontSize: 6.5, color: "#059669", margin: 0 }}>⚡ Delivered in 30 min</p>
        </div>
        <span style={{ fontSize: 20 }}>🛵</span>
      </div>

      <div style={{ padding: "0 10px", marginBottom: 7 }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Shop by Category</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5 }}>
          {cats.map((cat) => (
            <div key={cat.name} style={{ borderRadius: 9, padding: "7px 3px", textAlign: "center", background: `${cat.color}18`, border: `1px solid ${cat.color}28` }}>
              <div style={{ fontSize: 14 }}>{cat.emoji}</div>
              <p style={{ fontSize: 5.5, fontWeight: 600, color: cat.color, margin: 0, marginTop: 2 }}>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Today's Deals</p>
          <span style={{ fontSize: 7, color: "#16a34a" }}>View All</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {deals.map((item) => (
            <div key={item.name} style={{ borderRadius: 9, padding: "7px 6px", border: "1px solid #f1f5f9", display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ fontSize: 16 }}>{item.emoji}</span>
              <div>
                <p style={{ fontSize: 6, fontWeight: 600, color: "#1e293b", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: 7, fontWeight: 700, color: "#16a34a", margin: 0 }}>{item.price}</p>
                <span style={{ fontSize: 5.5, color: "#f97316", background: "#fff7ed", padding: "1px 3px", borderRadius: 3 }}>{item.disc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "6px 0", background: "white" }}>
        {["🏠", "🛒", "❤️", "👤"].map((icon, i) => (
          <span key={i} style={{ fontSize: 11 }}>{icon}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Laundry App Screen ───────────────────────────────────────────────────────

function LaundryApp() {
  const services = [
    { name: "Wash & Fold", price: "₹49/kg", emoji: "👕", color: "#3b82f6" },
    { name: "Dry Clean", price: "₹199/pc", emoji: "👔", color: "#7c3aed" },
    { name: "Iron Only", price: "₹29/pc", emoji: "👗", color: "#0891b2" },
    { name: "Blankets", price: "₹299/pc", emoji: "🛏️", color: "#6366f1" },
  ];

  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ padding: "14px 14px 10px", background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div>
            <p style={{ fontSize: 7, color: "rgba(255,255,255,0.8)", margin: 0 }}>Welcome back! 👋</p>
            <p style={{ fontSize: 12, fontWeight: 800, color: "white", margin: 0 }}>CleanWave</p>
          </div>
          <span style={{ fontSize: 13 }}>🔔</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.22)", borderRadius: 8, padding: "6px 9px", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.85)" }}>Search laundry services...</span>
        </div>
      </div>

      {/* Active order */}
      <div style={{ margin: "9px 10px", borderRadius: 10, padding: "9px 10px", background: "linear-gradient(135deg, #eff6ff, #eef2ff)", border: "1px solid #c7d7f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 6.5, color: "#3b82f6", fontWeight: 600, margin: 0 }}>Active Order #LDY-2847</p>
            <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1e293b", margin: 0 }}>Wash & Fold — 3.5 kg</p>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
              <div style={{ width: 44, height: 4, borderRadius: 2, background: "#e2e8f0", overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", background: "#3b82f6", borderRadius: 2 }} />
              </div>
              <span style={{ fontSize: 6, color: "#3b82f6" }}>Washing...</span>
            </div>
          </div>
          <span style={{ fontSize: 22 }}>🫧</span>
        </div>
      </div>

      <div style={{ padding: "0 10px", marginBottom: 7 }}>
        <p style={{ fontSize: 8.5, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Our Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {services.map((s) => (
            <div key={s.name} style={{ borderRadius: 10, padding: "8px", background: `${s.color}12`, border: `1px solid ${s.color}28`, display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: `${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                {s.emoji}
              </div>
              <div>
                <p style={{ fontSize: 6, fontWeight: 600, color: "#1e293b", margin: 0 }}>{s.name}</p>
                <p style={{ fontSize: 7.5, fontWeight: 700, color: s.color, margin: 0 }}>{s.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 10px" }}>
        <div style={{ borderRadius: 10, padding: "10px", background: "linear-gradient(135deg, #3b82f6, #6366f1)", textAlign: "center" }}>
          <p style={{ fontSize: 8.5, fontWeight: 700, color: "white", margin: 0 }}>📅 Schedule Pickup</p>
          <p style={{ fontSize: 7, color: "rgba(255,255,255,0.8)", margin: 0, marginTop: 2 }}>Pick-up within 60 minutes</p>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "6px 0", background: "white" }}>
        {["🏠", "📦", "📜", "👤"].map((icon, i) => (
          <span key={i} style={{ fontSize: 11 }}>{icon}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Phone Frame Wrapper ──────────────────────────────────────────────────────

interface AppCardProps {
  label: string;
  tagline: string;
  gradientCss: string;
  glowColor: string;
  rotation: number;
  floatDelay: number;
  children: ReactNode;
}

function AppCard({
  label,
  tagline,
  gradientCss,
  glowColor,
  rotation,
  floatDelay,
  children,
}: AppCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: floatDelay }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: floatDelay * 0.8 }}
      >
        {/* Phone shell */}
        <div
          style={{
            width: 175,
            height: 355,
            borderRadius: 34,
            padding: 5,
            background: "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)",
            boxShadow: `0 32px 64px rgba(0,0,0,0.5), 0 0 50px ${glowColor}`,
            transform: `rotate(${rotation}deg)`,
            position: "relative",
          }}
        >
          {/* Dynamic island / notch */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 52,
              height: 9,
              borderRadius: 5,
              background: "#0f172a",
              zIndex: 10,
            }}
          />
          {/* Screen */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 30,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {children}
          </div>
        </div>
      </motion.div>

      {/* Label pill */}
      <div className="mt-6 text-center">
        <div
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold mb-1.5"
          style={{ background: gradientCss }}
        >
          {label}
        </div>
        <p className="text-slate-500 text-xs">{tagline}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function AppShowcase() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#080f1e" }}>
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-1/3 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          transform: "translate(50%, -50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/25 px-4 py-1.5 rounded-full mb-5">
            Your Branded App
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
            Built for Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Business Type
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your customers get a beautiful, fully-branded mobile app tailored to your business — from day one.
          </p>
        </motion.div>

        {/* Phone mockups — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 sm:pb-0">
          <div
            className="flex gap-8 sm:gap-10 lg:gap-14 xl:gap-20 justify-start sm:justify-center"
            style={{ minWidth: "min-content" }}
          >
            <AppCard
              label="🍔 Food Delivery"
              tagline="Order food in 2 taps"
              gradientCss="linear-gradient(135deg, #ff6b35, #f72585)"
              glowColor="rgba(255,107,53,0.28)"
              rotation={-4}
              floatDelay={0}
            >
              <FoodApp />
            </AppCard>

            <AppCard
              label="🛒 Grocery Delivery"
              tagline="Fresh groceries in 30 min"
              gradientCss="linear-gradient(135deg, #16a34a, #15803d)"
              glowColor="rgba(22,163,74,0.28)"
              rotation={0}
              floatDelay={0.25}
            >
              <GroceryApp />
            </AppCard>

            <AppCard
              label="👕 Laundry Service"
              tagline="Schedule pickup instantly"
              gradientCss="linear-gradient(135deg, #3b82f6, #6366f1)"
              glowColor="rgba(99,102,241,0.28)"
              rotation={4}
              floatDelay={0.5}
            >
              <LaundryApp />
            </AppCard>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 text-base mb-6">
            Pharmacy, Car Wash, Home Services, Furniture, Meat Delivery & more — we support all verticals.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316, #ea6c0a)",
              boxShadow: "0 12px 40px rgba(249,115,22,0.35)",
            }}
          >
            Start My Business App →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
