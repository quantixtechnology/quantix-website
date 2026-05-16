import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks: Record<string, Array<{ label: string; href: string }>> = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Platform", href: "#screenshots" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#lead-form" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d2147] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex mb-6 group">
              <div className="relative">
                {/* Soft ambient glow — blends logo into dark background */}
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
                {/* Refined container — softer than flat white, has depth */}
                <div
                  className="relative rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{
                    background: "rgba(255,255,255,0.94)",
                    padding: "10px 18px",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.08), 0 8px 28px rgba(0,0,0,0.40), 0 2px 8px rgba(0,0,0,0.20)",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Quantix Technology"
                    width={160}
                    height={107}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </a>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs mb-5">
              Billing, Inventory, Sales &amp; Reports — all in one powerful business
              platform built for Indian businesses.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:support@quantixtechnology.in"
                className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                support@quantixtechnology.in
              </a>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                +91 XXXXX XXXXX
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0" />
                India
              </div>
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} Quantix Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://app.quantixtechnology.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-300 hover:text-white transition-colors"
            >
              Login to Dashboard →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
