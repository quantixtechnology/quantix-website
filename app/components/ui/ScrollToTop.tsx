"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed z-50 flex items-center justify-center rounded-full cursor-pointer"
          style={{
            bottom: 96,
            right: 24,
            width: 48,
            height: 48,
            background: "linear-gradient(135deg, #1a3a6b 0%, #f97316 100%)",
            boxShadow:
              "0 0 0 1px rgba(249,115,22,0.35), 0 8px 32px rgba(249,115,22,0.45), 0 2px 8px rgba(26,58,107,0.4)",
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
        >
          <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
