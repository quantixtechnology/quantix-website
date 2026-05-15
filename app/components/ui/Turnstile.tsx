"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
      reset: (id: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  siteKey: string;
  onSuccess: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export function TurnstileWidget({ siteKey, onSuccess, onExpire, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef  = useRef<string | null>(null);

  useEffect(() => {
    const render = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey:           siteKey,
        callback:          onSuccess,
        "expired-callback": onExpire ?? (() => { widgetIdRef.current = null; }),
        "error-callback":   onError,
        theme:             "light",
        appearance:        "interaction-only",
      });
    };

    if (window.turnstile) {
      render();
      return;
    }

    if (!document.getElementById("cf-turnstile-script")) {
      const script = document.createElement("script");
      script.id    = "cf-turnstile-script";
      script.src   = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = render;
      document.head.appendChild(script);
    } else {
      const iv = setInterval(() => {
        if (window.turnstile) { clearInterval(iv); render(); }
      }, 100);
      return () => clearInterval(iv);
    }
  }, [siteKey, onSuccess, onExpire, onError]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} className="mt-1" />;
}
