import type { Metadata } from "next";
import "./globals.css";
import { seoConfig } from "./data/SEO";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
      {/* <GoogleTagManager gtmId="GTM-XXXXXXX" /> */}
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
