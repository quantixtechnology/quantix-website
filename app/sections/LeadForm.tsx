"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { BUSINESS_TYPES } from "@/app/lib/constants";
import { useLeadForm } from "@/app/hooks/useLeadForm";
import { useToast } from "@/app/hooks/useToast";
import { Button } from "@/app/components/ui/Button";
import { Toast } from "@/app/components/ui/Toast";
import { TurnstileWidget } from "@/app/components/ui/Turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const perks = [
  "Free demo & consultation",
  "Setup completed within 24 hours",
  "Dedicated support team",
  "No hidden charges",
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-white text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]/20 transition-colors";

function fieldClass(hasError: boolean) {
  return `${inputBase} ${
    hasError ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[#1a3a6b]"
  }`;
}

export default function LeadForm() {
  const { toast, showToast, dismissToast } = useToast();
  const {
    formData,
    errors,
    isSubmitting,
    honeypot,
    setHoneypot,
    setCaptchaToken,
    handleChange,
    handleSubmit,
  } = useLeadForm({ onToast: showToast });

  return (
    <>
      <section id="lead-form" className="bg-[#1a3a6b] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ x: -24 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5 leading-tight">
                Ready to grow your
                <br className="hidden sm:block" /> business?
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Fill in the form and our team will contact you within 24 hours
                to set up your business app.
              </p>

              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-blue-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ x: 24 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl p-6 sm:p-8 space-y-4"
              >
                <h3 className="text-lg font-bold text-[#1a3a6b] mb-1">
                  Book a Free Demo
                </h3>

                {/* Honeypot — invisible to humans, filled by bots */}
                <input
                  type="text"
                  name="_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                  style={{ display: "none" }}
                />

                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className={fieldClass(!!errors.name)}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Sharma Enterprises"
                      className={fieldClass(!!errors.businessName)}
                      autoComplete="organization"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className={fieldClass(!!errors.phone)}
                    autoComplete="tel"
                    maxLength={13}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Business Type *
                    </label>
                    <div className="relative">
                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className={`${fieldClass(!!errors.businessType)} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select Business Type
                        </option>
                        {BUSINESS_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                    {errors.businessType && (
                      <p className="mt-1 text-xs text-red-500">{errors.businessType}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      City *
                    </label>
                    <input
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Mumbai"
                      className={fieldClass(!!errors.city)}
                      autoComplete="address-level2"
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                    )}
                  </div>
                </div>

                {/* Turnstile captcha (only rendered if site key is configured) */}
                {TURNSTILE_SITE_KEY && (
                  <TurnstileWidget
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={setCaptchaToken}
                    onExpire={() => setCaptchaToken(undefined)}
                  />
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Book Free Demo"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast renders outside section so it floats above everything */}
      <Toast toast={toast} onDismiss={dismissToast} />
    </>
  );
}
