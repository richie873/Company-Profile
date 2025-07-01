// app/page.tsx
import { Metadata } from "next";
import LandingContent from "@/components/landingPage/LandingContent";

export const metadata: Metadata = {
  title:
    "PT Kana Jaya | Aplikator Aluminium, Kaca, ACP, Gypsum, Baja & Stainless Steel di Karawang & Jabodetabek",
  description:
    "PT Kana Jaya adalah aplikator profesional dan penyedia material terpercaya untuk Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel. Melayani wilayah Karawang dan Jabodetabek dengan layanan konstruksi terbaik.",
  robots: "index, follow",
  openGraph: {
    title:
      "PT Kana Jaya | Aplikator Aluminium, Kaca, ACP, Gypsum, Baja & Stainless Steel di Karawang & Jabodetabek",
    description:
      "PT Kana Jaya adalah aplikator profesional dan penyedia material terpercaya di Karawang dan Jabodetabek untuk proyek Aluminium, Kaca, ACP, Gypsum, Baja dan Stainless Steel.",
    url: "https://kanajaya.co.id",
    images: [
      {
        url: "https://kanajaya.co.id/og-image-kanajaya.png",
        width: 1200,
        height: 630,
        alt: "PT Kana Jaya",
      },
    ],
  },
};

export default function LandingPage() {
  return <LandingContent />;
}
