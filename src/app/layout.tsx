// app/layout.tsx (tetap server component)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/components/theme/ThemeWrapper";
import GoogleTag from "@/components/tracking/GoogleTag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanajaya.co.id"),
  title:
    "PT Kana Jaya | Aplikator Aluminium, ACP, Gypsum, Kaca, Stainless Steel & Baja di Karawang & Jabodetabek",
  description:
    "PT Kana Jaya adalah aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja, dan Stainless Steel di Karawang dan Jabodetabek.",
  openGraph: {
    type: "website",
    url: "https://kanajaya.co.id",
    title:
      "PT Kana Jaya | Aplikator Aluminium, ACP, Gypsum, Kaca & Baja di Karawang & Jabodetabek",
    description:
      "PT Kana Jaya melayani proyek di Karawang dan Jabodetabek sebagai aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel.",
    siteName: "PT Kana Jaya",
    images: [
      {
        url: "https://kanajaya.co.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Kana Jaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Kana Jaya",
    description:
      "Aplikator Spesialis Aluminium, Gypsum, Baja, Plafon, Partisi di Karawang dan Jabodetabek.",
    images: ["https://kanajaya.co.id/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-kanajaya.png" />
        <link rel="apple-touch-icon" href="/logo-kanajaya.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Kana Jaya",
              url: "https://kanajaya.co.id",
              logo: "https://kanajaya.co.id/logo-kanajaya.png",
              sameAs: ["https://kanajaya.co.id"],
            }),
          }}
        />

        {/* Schema Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PT Kana Jaya",
              image: "https://kanajaya.co.id/logo-kanajaya.png",
              "@id": "https://kanajaya.co.id",
              url: "https://kanajaya.co.id",
              telephone: "+6285877812999", // opsional: ganti dengan nomor real
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karawang",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              areaServed: [
                "Karawang",
                "Jakarta",
                "Bogor",
                "Depok",
                "Tangerang",
                "Bekasi",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-[#0a0a0a] dark:text-white`}
      >
        <GoogleTag />
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
