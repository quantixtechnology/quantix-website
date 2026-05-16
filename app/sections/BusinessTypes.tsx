"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBasket,
  UtensilsCrossed,
  Shirt,
  Droplets,
  Pill,
  Wrench,
  ShoppingBag,
  Sparkles,
  Beef,
  Armchair,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ─── Compact phone mockup inner screens ───────────────────────────────────────

function FoodScreen() {
  const items = [
    { name: "Butter Chicken", price: "₹280", emoji: "🍛", color: "#ff6b35" },
    { name: "Paneer Pizza", price: "₹320", emoji: "🍕", color: "#e63946" },
    { name: "Veg Biryani", price: "₹220", emoji: "🍱", color: "#2d6a4f" },
    { name: "Zinger Burger", price: "₹180", emoji: "🍔", color: "#f4a261" },
  ];
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ padding: "12px 12px 8px", background: "linear-gradient(135deg,#ff6b35,#f72585)" }}>
        <p style={{ fontSize: 7, color: "rgba(255,255,255,.8)", margin: 0 }}>Delivering to Andheri West</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 800, color: "white", margin: 0 }}>QuickEats</p>
          <span style={{ fontSize: 12 }}>🔔</span>
        </div>
        <div style={{ background: "rgba(255,255,255,.22)", borderRadius: 7, padding: "5px 8px", display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,.85)" }}>Search restaurants...</span>
        </div>
      </div>
      <div style={{ margin: "8px 10px", borderRadius: 8, padding: "7px 10px", background: "linear-gradient(135deg,#ff6b35,#f72585)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 6, color: "rgba(255,255,255,.85)", margin: 0 }}>Limited Offer</p>
          <p style={{ fontSize: 10, fontWeight: 800, color: "white", margin: 0 }}>50% OFF</p>
          <p style={{ fontSize: 6, color: "rgba(255,255,255,.85)", margin: 0 }}>on first order</p>
        </div>
        <span style={{ fontSize: 18 }}>🍔</span>
      </div>
      <div style={{ padding: "0 10px 6px" }}>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Popular Near You</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
          {items.map((item) => (
            <div key={item.name} style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,.05)" }}>
              <div style={{ height: 28, background: `linear-gradient(135deg,${item.color}25,${item.color}45)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{item.emoji}</div>
              <div style={{ padding: "3px 5px" }}>
                <p style={{ fontSize: 5.5, fontWeight: 600, color: "#1e293b", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: 7, fontWeight: 700, color: "#ff6b35", margin: 0 }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "5px 0", background: "white" }}>
        {["🏠","🔍","🛒","👤"].map((ic, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
            <span style={{ fontSize: 11 }}>{ic}</span>
            {i === 0 && <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#ff6b35" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function GroceryScreen() {
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
      <div style={{ padding: "12px 12px 8px", background: "linear-gradient(135deg,#16a34a,#15803d)" }}>
        <p style={{ fontSize: 7, color: "rgba(255,255,255,.8)", margin: 0 }}>Good Morning! 🌞</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 800, color: "white", margin: 0 }}>FreshMart</p>
          <div style={{ display: "flex", gap: 6 }}><span style={{ fontSize: 12 }}>🔔</span><span style={{ fontSize: 12 }}>🛒</span></div>
        </div>
        <div style={{ background: "rgba(255,255,255,.22)", borderRadius: 7, padding: "5px 8px", display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,.85)" }}>Search groceries...</span>
        </div>
      </div>
      <div style={{ margin: "8px 10px", borderRadius: 8, padding: "7px 10px", background: "linear-gradient(135deg,#d1fae5,#a7f3d0)", border: "1px solid #6ee7b7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 6, color: "#065f46", margin: 0 }}>Free Delivery</p>
          <p style={{ fontSize: 9, fontWeight: 800, color: "#065f46", margin: 0 }}>Orders above ₹299</p>
          <p style={{ fontSize: 6, color: "#059669", margin: 0 }}>⚡ 30 min delivery</p>
        </div>
        <span style={{ fontSize: 18 }}>🛵</span>
      </div>
      <div style={{ padding: "0 10px 5px" }}>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>Categories</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 4, marginBottom: 7 }}>
          {cats.map((c) => (
            <div key={c.name} style={{ borderRadius: 8, padding: "6px 3px", textAlign: "center", background: `${c.color}18`, border: `1px solid ${c.color}28` }}>
              <div style={{ fontSize: 12 }}>{c.emoji}</div>
              <p style={{ fontSize: 5.5, fontWeight: 600, color: c.color, margin: 0, marginTop: 1 }}>{c.name}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>Today's Deals</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {deals.map((item) => (
            <div key={item.name} style={{ borderRadius: 8, padding: "6px 5px", border: "1px solid #f1f5f9", display: "flex", gap: 4, alignItems: "center" }}>
              <span style={{ fontSize: 14 }}>{item.emoji}</span>
              <div>
                <p style={{ fontSize: 5.5, fontWeight: 600, color: "#1e293b", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: 7, fontWeight: 700, color: "#16a34a", margin: 0 }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "5px 0", background: "white" }}>
        {["🏠","🛒","❤️","👤"].map((ic, i) => <span key={i} style={{ fontSize: 11 }}>{ic}</span>)}
      </div>
    </div>
  );
}

function LaundryScreen() {
  const services = [
    { name: "Wash & Fold", price: "₹49/kg", emoji: "👕", color: "#3b82f6" },
    { name: "Dry Clean", price: "₹199/pc", emoji: "👔", color: "#7c3aed" },
    { name: "Iron Only", price: "₹29/pc", emoji: "👗", color: "#0891b2" },
    { name: "Blankets", price: "₹299/pc", emoji: "🛏️", color: "#6366f1" },
  ];
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <div style={{ padding: "12px 12px 8px", background: "linear-gradient(135deg,#3b82f6,#6366f1)" }}>
        <p style={{ fontSize: 7, color: "rgba(255,255,255,.8)", margin: 0 }}>Welcome back! 👋</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 800, color: "white", margin: 0 }}>CleanWave</p>
          <span style={{ fontSize: 12 }}>🔔</span>
        </div>
        <div style={{ background: "rgba(255,255,255,.22)", borderRadius: 7, padding: "5px 8px", display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
          <span style={{ fontSize: 8 }}>🔍</span>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,.85)" }}>Search laundry services...</span>
        </div>
      </div>
      <div style={{ margin: "8px 10px", borderRadius: 8, padding: "8px 10px", background: "linear-gradient(135deg,#eff6ff,#eef2ff)", border: "1px solid #c7d7f7" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 6, color: "#3b82f6", fontWeight: 600, margin: 0 }}>Active #LDY-2847</p>
            <p style={{ fontSize: 8, fontWeight: 700, color: "#1e293b", margin: 0 }}>Wash & Fold — 3.5 kg</p>
            <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 3 }}>
              <div style={{ width: 40, height: 3, borderRadius: 2, background: "#e2e8f0", overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", background: "#3b82f6" }} />
              </div>
              <span style={{ fontSize: 6, color: "#3b82f6" }}>Washing...</span>
            </div>
          </div>
          <span style={{ fontSize: 20 }}>🫧</span>
        </div>
      </div>
      <div style={{ padding: "0 10px 5px" }}>
        <p style={{ fontSize: 8, fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Our Services</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {services.map((s) => (
            <div key={s.name} style={{ borderRadius: 9, padding: "7px", background: `${s.color}12`, border: `1px solid ${s.color}28`, display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: `${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>{s.emoji}</div>
              <div>
                <p style={{ fontSize: 5.5, fontWeight: 600, color: "#1e293b", margin: 0 }}>{s.name}</p>
                <p style={{ fontSize: 7, fontWeight: 700, color: s.color, margin: 0 }}>{s.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, borderRadius: 9, padding: "9px", background: "linear-gradient(135deg,#3b82f6,#6366f1)", textAlign: "center" }}>
          <p style={{ fontSize: 8, fontWeight: 700, color: "white", margin: 0 }}>📅 Schedule Pickup</p>
          <p style={{ fontSize: 6.5, color: "rgba(255,255,255,.8)", margin: 0, marginTop: 2 }}>Pick-up in 60 minutes</p>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-around", padding: "5px 0", background: "white" }}>
        {["🏠","📦","📜","👤"].map((ic, i) => <span key={i} style={{ fontSize: 11 }}>{ic}</span>)}
      </div>
    </div>
  );
}

// ─── Floating Phone Frame ─────────────────────────────────────────────────────

function PhoneFrame({ children, glowColor, floatDelay }: { children: ReactNode; glowColor: string; floatDelay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0], x: [0, 4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      style={{
        width: 155,
        height: 305,
        borderRadius: 30,
        padding: 5,
        background: "linear-gradient(145deg,#1e293b,#0f172a)",
        boxShadow: `0 28px 56px rgba(0,0,0,.55), 0 0 44px ${glowColor}`,
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 46, height: 8, borderRadius: 4, background: "#0f172a", zIndex: 10 }} />
      <div style={{ width: "100%", height: "100%", borderRadius: 26, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
    </motion.div>
  );
}

// ─── Featured showcase card (large, with phone mockup) ───────────────────────

interface FeaturedCardProps {
  label: string;
  tagBg: string;
  tagText: string;
  gradient: string;
  glowColor: string;
  description: string;
  highlights: string[];
  floatDelay: number;
  phone: ReactNode;
  enterDelay: number;
}

function FeaturedCard({
  label, tagBg, tagText, gradient, glowColor, description, highlights,
  floatDelay, phone, enterDelay,
}: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: enterDelay, ease: "easeOut" }}
      className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:-translate-y-1.5 transition-transform duration-300"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(14px)",
      }}
      whileHover={{ boxShadow: `0 28px 56px ${glowColor}` }}
    >
      {/* Gradient top banner with phone */}
      <div
        className="relative flex items-end justify-center overflow-hidden"
        style={{
          height: 260,
          background: gradient,
          padding: "0 0 0",
        }}
      >
        {/* Radial highlight */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 80% 15%, rgba(255,255,255,0.16) 0%, transparent 55%)",
          }}
        />
        {/* Label pill */}
        <div
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: tagBg, color: tagText }}
        >
          {label}
        </div>
        {/* Phone mockup — sits on the bottom edge */}
        <div style={{ position: "absolute", bottom: -30 }}>
          <PhoneFrame glowColor={glowColor} floatDelay={floatDelay}>
            {phone}
          </PhoneFrame>
        </div>
      </div>

      {/* Card body */}
      <div style={{ paddingTop: 48, padding: "56px 24px 24px" }}>
        <h3 className="text-lg font-bold text-white mb-2">{label}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
        <ul className="space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
              <span className="text-xs text-slate-300">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover bottom glow strip */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: gradient }}
      />
    </motion.div>
  );
}

// ─── Regular business type card ───────────────────────────────────────────────

interface BizCardProps {
  Icon: React.ElementType;
  label: string;
  tagline: string;
  color: string;
  bg: string;
  border: string;
  features: string[];
  enterDelay: number;
}

function BizCard({ Icon, label, tagline, color, bg, border, features, enterDelay }: BizCardProps) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: enterDelay, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border p-5 flex flex-col hover:-translate-y-1.5 transition-all duration-300"
      style={{ background: bg, borderColor: border }}
      whileHover={{
        borderColor: `${color}60`,
        boxShadow: `0 16px 40px ${color}22`,
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
        style={{ background: `${color}22` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <h3 className="text-sm font-bold text-white mb-1">{label}</h3>
      <p className="text-xs text-slate-500 mb-4 leading-snug">{tagline}</p>

      <ul className="space-y-1.5 mt-auto">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
            <span className="text-xs text-slate-400 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* Subtle corner gradient */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
          transform: "translate(30%, -30%)",
        }}
      />
    </motion.div>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const featuredTypes = [
  {
    label: "Food Delivery",
    tagBg: "rgba(255,255,255,0.22)",
    tagText: "white",
    gradient: "linear-gradient(135deg, #ff6b35 0%, #f72585 100%)",
    glowColor: "rgba(255,107,53,0.30)",
    description:
      "Launch a full-featured food ordering platform. Customers order from your restaurant menu, track delivery in real time.",
    highlights: [
      "Live order tracking for customers",
      "Multi-restaurant & cloud kitchen ready",
      "Delivery partner management",
      "Customer ratings & reviews",
    ],
    floatDelay: 0,
    phone: <FoodScreen />,
    enterDelay: 0,
  },
  {
    label: "Grocery Delivery",
    tagBg: "rgba(255,255,255,0.22)",
    tagText: "white",
    gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
    glowColor: "rgba(22,163,74,0.30)",
    description:
      "Give your grocery store a digital storefront. Customers browse products, add to cart, and get delivery in 30 minutes.",
    highlights: [
      "Product catalogue with categories",
      "Real-time stock sync",
      "Scheduled & instant delivery slots",
      "Wallet, offers & referral codes",
    ],
    floatDelay: 0.4,
    phone: <GroceryScreen />,
    enterDelay: 0.1,
  },
  {
    label: "Laundry Services",
    tagBg: "rgba(255,255,255,0.22)",
    tagText: "white",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
    glowColor: "rgba(99,102,241,0.30)",
    description:
      "Modernise your laundry business with online pickup scheduling, live order status, and digital payment collection.",
    highlights: [
      "Pickup & delivery scheduling",
      "Live wash/dry/iron status",
      "Service-wise pricing catalogue",
      "Subscription & loyalty plans",
    ],
    floatDelay: 0.8,
    phone: <LaundryScreen />,
    enterDelay: 0.2,
  },
];

const allBizTypes: BizCardProps[] = [
  {
    Icon: ShoppingBasket,
    label: "Grocery Delivery",
    tagline: "Digital storefront for your grocery store",
    color: "#16a34a",
    bg: "rgba(22,163,74,0.08)",
    border: "rgba(22,163,74,0.18)",
    features: ["Product catalogue", "30-min delivery", "Wallet & offers"],
    enterDelay: 0,
  },
  {
    Icon: UtensilsCrossed,
    label: "Food Delivery",
    tagline: "Restaurant & cloud kitchen ordering",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.08)",
    border: "rgba(255,107,53,0.18)",
    features: ["Live order tracking", "Multi-restaurant", "Delivery partner app"],
    enterDelay: 0.05,
  },
  {
    Icon: Shirt,
    label: "Laundry Services",
    tagline: "Pickup & delivery laundry platform",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.18)",
    features: ["Pickup scheduling", "Live status", "Subscription plans"],
    enterDelay: 0.1,
  },
  {
    Icon: Droplets,
    label: "Car / Bike Wash",
    tagline: "On-demand vehicle wash booking",
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.18)",
    features: ["Slot booking", "Doorstep wash", "Vehicle history"],
    enterDelay: 0.15,
  },
  {
    Icon: Pill,
    label: "Pharmacy",
    tagline: "Medicine delivery & prescription mgmt",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.08)",
    border: "rgba(220,38,38,0.18)",
    features: ["Prescription upload", "Medicine catalogue", "Fast delivery"],
    enterDelay: 0.2,
  },
  {
    Icon: Wrench,
    label: "Home Services",
    tagline: "Electrician, plumber & more on demand",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.18)",
    features: ["Service booking", "Staff management", "Customer reviews"],
    enterDelay: 0.25,
  },
  {
    Icon: ShoppingBag,
    label: "E-Commerce",
    tagline: "Full online store with checkout & pay",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.18)",
    features: ["Product catalogue", "COD & online pay", "Order management"],
    enterDelay: 0.3,
  },
  {
    Icon: Sparkles,
    label: "Cosmetics",
    tagline: "Beauty & skincare ecommerce platform",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.18)",
    features: ["Beauty catalogue", "Loyalty rewards", "Subscription boxes"],
    enterDelay: 0.35,
  },
  {
    Icon: Beef,
    label: "Meat Delivery",
    tagline: "Fresh meat & seafood delivery app",
    color: "#b91c1c",
    bg: "rgba(185,28,28,0.08)",
    border: "rgba(185,28,28,0.18)",
    features: ["Cut-to-order options", "Same-day delivery", "Freshness guarantee"],
    enterDelay: 0.4,
  },
  {
    Icon: Armchair,
    label: "Furniture",
    tagline: "Furniture showcase with delivery & EMI",
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.18)",
    features: ["3D room preview ready", "EMI options", "Assembly booking"],
    enterDelay: 0.45,
  },
  {
    Icon: MapPin,
    label: "Directory Listing",
    tagline: "Local business & services directory",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.18)",
    features: ["Business profiles", "Lead generation", "Map & search"],
    enterDelay: 0.5,
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function BusinessTypes() {
  return (
    <section
      id="business-types"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #060d1a 0%, #0a1628 40%, #0d1a35 70%, #060d1a 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 border border-[#f97316]/25 px-4 py-1.5 rounded-full mb-5">
            Supported Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4">
            Built For Every{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Growing Business
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Launch your complete business platform with ready-to-use apps, website, admin panel, billing system, and delivery management.
          </p>
        </motion.div>

        {/* ── Featured 3 cards with phone mockups ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featuredTypes.map((item) => (
            <FeaturedCard key={item.label} {...item} />
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            All Supported Business Types
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* ── Full 11-type grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {allBizTypes.map((biz) => (
            <BizCard key={biz.label} {...biz} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,58,107,0.60) 0%, rgba(249,115,22,0.15) 100%)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8">
            <div>
              <p className="text-xl font-bold text-white mb-1">
                Don&apos;t see your industry?
              </p>
              <p className="text-slate-400 text-sm">
                We support any on-demand delivery or service business. Talk to our team.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
                }}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
