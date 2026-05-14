"use client";

import { useState, useCallback } from "react";
import { submitLead } from "@/app/services/leads";
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

interface UseLeadFormOptions {
  onToast: (type: ToastType, message: string) => void;
}

export function useLeadForm({ onToast }: UseLeadFormOptions) {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      try {
        await submitLead(formData);
        setFormData(INITIAL);
        setErrors({});
        onToast("success", "Thanks! We'll contact you within 24 hours.");
      } catch {
        onToast("error", "Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, onToast]
  );

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
}
