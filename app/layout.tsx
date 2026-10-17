import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyName} | Pharmaceutical Medicine Distributor in Gopalganj & Chhapra`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Pharmaceutical medicine distribution for doctors, clinics and healthcare establishments in Gopalganj and Chhapra, with a distribution network gradually expanding across Bihar.",
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: siteConfig.companyName,
    description:
      "Pharmaceutical medicine distribution for doctors, clinics and healthcare establishments in Gopalganj and Chhapra.",
    siteName: siteConfig.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description:
      "Pharmaceutical medicine distribution for doctors, clinics and healthcare establishments in Gopalganj and Chhapra.",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-bg text-text-main antialiased`}
      >
        <Navbar />
        <main id="home">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
