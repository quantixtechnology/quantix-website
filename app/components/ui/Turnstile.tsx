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
  const callbacksRef = useRef({ onSuccess, onExpire, onError });

  useEffect(() => {
    callbacksRef.current = { onSuccess, onExpire, onError };
  }, [onSuccess, onExpire, onError]);

  useEffect(() => {
    let pollTimer: ReturnType<typeof setInterval> | undefined;

    const render = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey:           siteKey,
        callback:          (token: string) => callbacksRef.current.onSuccess(token),
        "expired-callback": () => {
          if (callbacksRef.current.onExpire) {
            callbacksRef.current.onExpire();
          } else if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }
        },
        "error-callback":   () => callbacksRef.current.onError?.(),
        theme:             "light",
        appearance:        "always",
      });
    };

    if (window.turnstile) {
      render();
    } else {
      const existing = document.getElementById("cf-turnstile-script") as HTMLScriptElement | null;
      if (!existing) {
        const script = document.createElement("script");
        script.id    = "cf-turnstile-script";
        script.src   = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.onload = render;
        script.onerror = () => callbacksRef.current.onError?.();
        document.head.appendChild(script);
      } else {
        pollTimer = setInterval(() => {
          if (window.turnstile) {
            if (pollTimer) clearInterval(pollTimer);
            render();
          }
        }, 100);
      }
    }

    return () => {
      if (pollTimer) clearInterval(pollTimer);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  return <div ref={containerRef} className="mt-1" />;
}
