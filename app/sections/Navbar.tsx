"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/app/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Quantix Technology"
              width={220}
              height={147}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#1a3a6b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://app.quantixtechnology.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#1a3a6b] px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-[#1a3a6b] py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.quantixtechnology.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1a3a6b] py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
              <div className="pt-1">
                <a
                  href="#lead-form"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center text-sm font-semibold bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-3 rounded-xl transition-colors"
                >
                  Book Free Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
