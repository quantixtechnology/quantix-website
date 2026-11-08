import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollRestoration from "@/app/components/ui/ScrollRestoration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico?v=2",
    apple: "/favicon/apple-touch-icon.png?v=2",
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8D97SLF0ME"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8D97SLF0ME');
          `}
        </Script>
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className="antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
