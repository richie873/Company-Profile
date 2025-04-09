// app/layout.tsx (TETAP server component)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/components/theme/ThemeWrapper" // kita buat komponen baru untuk handle dark mode

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Kana Jaya | Konstruksi Plafon, Partisi, Stainless Steel, Cover Stainless Steel, Curtain Wall, Aluminium Composite Panel Dan Berbagai Jenis Tempered Laminate",
  description: "Konstruksi Plafon, Partisi, Stainless Steel, Cover Stainless Steel, Curtain Wall, Aluminium Composite Panel Dan Berbagai Jenis Tempered Laminate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white`}
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
