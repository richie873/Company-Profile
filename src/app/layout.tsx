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
  title: "PT Kana Jaya | Aplikator Spesialis Aluminium, Gypsum, Baja, Plafon, Partisi, Stainless Steel, Curtain Wall, Aluminium Composite Panel Dan Berbagai Jenis Tempered Laminate",
  description:
  "PT Kana Jaya adalah Aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta
          property="og:title"
          content="PT Kana Jaya | Aplikator Spesialis Aluminium, Gypsum, Baja, Plafon, Partisi, Stainless Steel, Curtain Wall, Aluminium Composite Panel"
        />
        <meta
          property="og:description"
          content="PT Kana Jaya adalah Aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel."
        />
        <meta
          property="og:image"
          content="https://kanajaya.co.id/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://kanajaya.co.id" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PT Kana Jaya" />
        <meta
          name="twitter:description"
          content="Aplikator Spesialis Aluminium, Gypsum, Baja, Plafon, Partisi, dan lainnya."
        />
        <meta
          name="twitter:image"
          content="https://kanajaya.co.id/og-image.png"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Kana Jaya",
              url: "https://kanajaya.co.id",
              logo: "https://kanajaya.co.id/apple-touch-icon.png",
              sameAs: ["https://kanajaya.co.id"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white`}
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
