import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollRestoration from "@/app/components/ui/ScrollRestoration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantix Technology — Business Management Software",
  description:
    "Billing, Inventory, Sales & Reports — all in one powerful business platform. Launch your business app in days with Quantix Technology.",
  keywords: [
    "business management software",
    "billing software",
    "inventory management",
    "POS software",
    "Quantix Technology",
  ],
  openGraph: {
    title: "Quantix Technology — Business Management Software",
    description:
      "Launch your business app in days. Billing, Inventory, Sales & Reports all in one platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
