"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // ← Replace with your actual WhatsApp number
const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I'm interested in Quantix's business management plans. Can you share more details?"
);

export default function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 320);
      setShowScrollTop(y > 400);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

  return (
    <>
      {/* ── Floating button stack ──────────────────────────────────────────────
          Both buttons live in one flex-col group so positioning is always
          coordinated. The group sits above the sticky bar on mobile.
          - Not dismissed: bottom 5rem (80px) clears the ~64px sticky bar
          - Dismissed: bottom 1.25rem (20px), standard resting position
      ──────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="fab-stack"
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="fixed z-50 flex flex-col items-center gap-3"
            style={{
              right: "1.25rem",
              bottom: dismissed ? "1.25rem" : "5rem",
            }}
          >
            {/* Scroll to top — appears after deeper scroll */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  key="scroll-top"
                  initial={{ opacity: 0, scale: 0.55, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.55, y: 10 }}
                  transition={{ type: "spring", stiffness: 340, damping: 26 }}
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  className="flex items-center justify-center rounded-full cursor-pointer"
                  style={{
                    width: 48,
                    height: 48,
                    background: "linear-gradient(135deg, #1a3a6b 0%, #f97316 100%)",
                    boxShadow:
                      "0 0 0 1px rgba(249,115,22,0.35), 0 8px 28px rgba(249,115,22,0.42), 0 2px 8px rgba(26,58,107,0.35)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* WhatsApp button */}
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 text-white font-semibold rounded-full"
              style={{
                background: "#25D366",
                padding: "12px 20px",
                boxShadow: "0 8px 32px rgba(37,211,102,0.40)",
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline text-sm">WhatsApp Us</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Sticky bottom bar (mobile only, dismissible) ── */}
      <AnimatePresence>
        {scrolled && !dismissed && (
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
              }}
            >
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#0f1f3d] leading-tight">Starter from ₹2,999 &bull; Business ₹4,999</p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  <span className="font-bold text-[#1a3a6b]">/month</span> &bull; One-time setup ₹1,999
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href="#lead-form"
                  className="bg-[#f97316] text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors active:bg-[#ea6c0a]"
                >
                  Book Demo
                </a>
              </div>
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
