const LEADS_API =
  process.env.NEXT_PUBLIC_LEADS_API ??
  "https://api.quantixtechnology.in/api/public/leads";

export interface LeadPayload {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  city: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(LEADS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "Website",
      status: "New Lead",
      name: payload.name,
      businessName: payload.businessName,
      phone: payload.phone,
      businessType: payload.businessType,
      city: payload.city,
    }),
  });

  if (!res.ok) {
    throw new Error(`Lead submission failed: ${res.status}`);
  }
}
