import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEHATI+ | Sistem Ekosistem Hati & Intelegensi",
  description: "Platform kesehatan mental dan konsultasi untuk pelajar SMA, didukung oleh PIK-R, GenRe, dan BKKBN.",
  viewport: {
    width: "device-width",
    initialScale: 0.75,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased bg-slate-50`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
