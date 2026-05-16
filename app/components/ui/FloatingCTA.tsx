"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // ← Replace with your actual WhatsApp number
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I'm interested in the Quantix Standard Plan. Can you share more details?"
);

export default function FloatingCTA() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setShowSticky(window.scrollY > 320);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <>
      {/* ── Floating WhatsApp button (always visible after scroll) ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.a
            key="wa-button"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed z-50 flex items-center gap-2 text-white font-semibold rounded-full transition-all"
            style={{
              bottom: dismissed ? "1.5rem" : "6rem",
              right: "1.5rem",
              background: "#25D366",
              padding: "12px 20px",
              boxShadow: "0 8px 32px rgba(37,211,102,0.40)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            {/* WhatsApp SVG icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline text-sm">WhatsApp Us</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* ── Sticky bottom bar (mobile only, dismissible) ── */}
      <AnimatePresence>
        {showSticky && !dismissed && (
          <motion.div
            key="sticky-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          >
            <div
              className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-100"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Pricing snapshot */}
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#0f1f3d] leading-tight">
                  Standard Plan
                </p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  <span className="font-bold text-[#1a3a6b]">₹4,999</span>
                  /month &bull; Setup ₹1,999
                </p>
              </div>

              {/* CTAs */}
              <div className="flex gap-2 shrink-0">
                <a
                  href="#lead-form"
                  className="bg-[#f97316] text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors active:bg-[#ea6c0a]"
                >
                  Book Demo
                </a>
              </div>

              {/* Dismiss */}
              <button
                onClick={() => setDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
