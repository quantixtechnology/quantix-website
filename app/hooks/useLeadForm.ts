"use client";

import { useState, useCallback, useRef } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { submitLead, LeadSubmitError } from "@/app/services/leads";
import type { ToastType } from "@/app/hooks/useToast";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export interface FormData {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  city: string;
}

export type FormErrors = Partial<Record<keyof FormData | "captcha", string>>;

const INITIAL: FormData = {
  name: "",
  businessName: "",
  phone: "",
  businessType: "",
  city: "",
};

const CAPTCHA_REQUIRED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!data.businessName.trim() || data.businessName.trim().length < 2) {
    errors.businessName = "Please enter your business name";
  }
  if (!/^[6-9]\d{9}$/.test(normalizePhone(data.phone))) {
    errors.phone = "Enter a valid 10-digit mobile number";
  }
  if (!data.businessType) {
    errors.businessType = "Please select your business type";
  }
  if (!data.city.trim() || data.city.trim().length < 2) {
    errors.city = "Please enter your city";
  }

  return errors;
}

const ERROR_MESSAGES: Record<string, string> = {
  rate_limit: "Too many requests. Please wait 10 minutes before trying again.",
  duplicate:  "We already have your details! Our team will reach out soon.",
  captcha:    "CAPTCHA verification failed. Please try again.",
  validation: "Please check your details and try again.",
  server:     "Something went wrong. Please try again.",
};

interface UseLeadFormOptions {
  onToast: (type: ToastType, message: string) => void;
}

export function useLeadForm({ onToast }: UseLeadFormOptions) {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined);
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  const formLoadTimeRef = useRef<number>(Date.now());

  const resetCaptcha = useCallback(() => {
    setCaptchaToken(undefined);
    setCaptchaResetKey((key) => key + 1);
  }, []);

  const handleCaptchaSuccess = useCallback((token: string) => {
    setCaptchaToken(token);
    setErrors((prev) => ({ ...prev, captcha: undefined }));
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      let nextValue = value;

      if (name === "phone") {
        nextValue = value.replace(/[^\d+\-() ]/g, "");
        if (nextValue.replace(/\D/g, "").length > 12) return;
      }

      setFormData((prev) => ({ ...prev, [name]: nextValue }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();

      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      if (CAPTCHA_REQUIRED && !captchaToken) {
        setErrors((prev) => ({ ...prev, captcha: "Please complete the CAPTCHA verification." }));
        onToast("error", "Please complete the CAPTCHA verification.");
        return;
      }

      setIsSubmitting(true);
      try {
        await submitLead({
          payload: {
            name:         formData.name,
            businessName: formData.businessName,
            phone:        normalizePhone(formData.phone),
            businessType: formData.businessType,
            city:         formData.city,
            captchaToken,
          },
          honeypot,
          loadTime: formLoadTimeRef.current,
        });
        if (!honeypot) window.fbq?.("track", "Lead");
        setFormData(INITIAL);
        setErrors({});
        resetCaptcha();
        onToast("success", "Thanks! We'll contact you within 24 hours.");
      } catch (err) {
        if (err instanceof LeadSubmitError) {
          onToast("error", err.message || ERROR_MESSAGES[err.type] || ERROR_MESSAGES.server);
          if (err.type === "captcha") {
            setErrors((prev) => ({ ...prev, captcha: "CAPTCHA verification failed. Please try again." }));
            resetCaptcha();
          }
        } else {
          onToast("error", ERROR_MESSAGES.server);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, honeypot, captchaToken, onToast, resetCaptcha]
  );

  return {
    formData,
    errors,
    isSubmitting,
    honeypot,
    setHoneypot,
    captchaToken,
    setCaptchaToken: handleCaptchaSuccess,
    captchaResetKey,
    resetCaptcha,
    captchaRequired: CAPTCHA_REQUIRED,
    handleChange,
    handleSubmit,
  };
}
