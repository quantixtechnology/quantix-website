"use client";

import { useState, useCallback, useRef } from "react";

export type ToastType = "success" | "error";

export interface ToastState {
  visible: boolean;
  type: ToastType;
  message: string;
}

const DISMISS_DELAY = 4000;

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    type: "success",
    message: "",
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((type: ToastType, message: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ visible: true, type, message });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, DISMISS_DELAY);
  }, []);

  const dismissToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return { toast, showToast, dismissToast };
}
