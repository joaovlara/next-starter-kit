import type { Metadata } from "next";
import "./globals.css";
import { seoConfig } from "./_data/SEO";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        {/* <GoogleTagManager gtmId="GTM-XXXXXXX" /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
