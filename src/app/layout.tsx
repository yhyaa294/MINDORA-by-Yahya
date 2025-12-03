import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MINDORA | Ketenangan Pikiran dalam Genggaman",
  description: "Platform kesehatan mental modern untuk generasi masa depan. Tanpa stigma, privasi terjaga.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#064E3B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${playfair.variable} antialiased bg-[#FFFBEB] font-sans text-slate-900`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
