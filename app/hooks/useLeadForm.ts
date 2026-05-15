"use client";

import { useState, useCallback, useRef } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { submitLead, LeadSubmitError } from "@/app/services/leads";
import type { ToastType } from "@/app/hooks/useToast";

export interface FormData {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  city: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  businessName: "",
  phone: "",
  businessType: "",
  city: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!data.businessName.trim() || data.businessName.trim().length < 2) {
    errors.businessName = "Please enter your business name";
  }
  const normalizedPhone = data.phone.replace(/\s/g, "").replace(/^\+91/, "");
  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
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
  const formLoadTimeRef = useRef<number>(Date.now());

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
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

      setIsSubmitting(true);
      try {
        await submitLead({
          payload: {
            name:         formData.name,
            businessName: formData.businessName,
            phone:        formData.phone,
            businessType: formData.businessType,
            city:         formData.city,
            captchaToken,
          },
          honeypot,
          loadTime: formLoadTimeRef.current,
        });
        setFormData(INITIAL);
        setErrors({});
        setCaptchaToken(undefined);
        onToast("success", "Thanks! We'll contact you within 24 hours.");
      } catch (err) {
        if (err instanceof LeadSubmitError) {
          onToast("error", ERROR_MESSAGES[err.type] ?? ERROR_MESSAGES.server);
          if (err.type === "captcha") setCaptchaToken(undefined);
        } else {
          onToast("error", ERROR_MESSAGES.server);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, honeypot, captchaToken, onToast]
  );

  return {
    formData,
    errors,
    isSubmitting,
    honeypot,
    setHoneypot,
    captchaToken,
    setCaptchaToken,
    handleChange,
    handleSubmit,
  };
}
