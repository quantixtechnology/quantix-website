const LEADS_API =
  process.env.NEXT_PUBLIC_LEADS_API ??
  "https://app.quantixtechnology.in/api/public/leads";

export interface LeadPayload {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  city: string;
  captchaToken?: string;
}

export type LeadErrorType = "rate_limit" | "duplicate" | "captcha" | "validation" | "server";

export class LeadSubmitError extends Error {
  constructor(message: string, public readonly type: LeadErrorType) {
    super(message);
  }
}

interface SubmitOptions {
  payload: LeadPayload;
  honeypot: string;
  loadTime: number;
}

export async function submitLead({ payload, honeypot, loadTime }: SubmitOptions): Promise<void> {
  const res = await fetch(LEADS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name:         payload.name,
      businessName: payload.businessName,
      phone:        payload.phone,
      businessType: payload.businessType,
      city:         payload.city,
      captchaToken: payload.captchaToken,
      _hp:          honeypot,
      _t:           loadTime,
    }),
  });

  if (res.ok) return;

  let body: { error?: string } = {};
  try { body = await res.json(); } catch { /* ignore */ }

  const msg = body.error ?? "";

  if (res.status === 429) throw new LeadSubmitError(msg || "Too many requests. Please wait 10 minutes.", "rate_limit");
  if (res.status === 409) throw new LeadSubmitError(msg || "We already have your details!", "duplicate");
  if (res.status === 400 && msg.toLowerCase().includes("captcha")) throw new LeadSubmitError(msg, "captcha");
  if (res.status === 400) throw new LeadSubmitError(msg || "Please check your details.", "validation");

  throw new LeadSubmitError("Something went wrong. Please try again.", "server");
}
